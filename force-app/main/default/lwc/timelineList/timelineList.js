import { LightningElement,api,wire,track } from 'lwc';
import getAllTimelineActivities from '@salesforce/apex/GB_Timeline_Activity_Controller.getAllTimelineActivities';
import getLeadTimelineActivities from '@salesforce/apex/GB_Timeline_Activity_Controller.getLeadTimelineActivities';
import { refreshApex } from '@salesforce/apex';


export default class TimelineList extends LightningElement {

    @api recordId;

    @track isActivityModalOpen = false;

    @track activities;

    wiredActivitiesResult; //useful for forcing refresh

    @wire(getLeadTimelineActivities, {leadId: '$recordId'}) 
    wiredActivities(result){
        this.wiredActivitiesResult=result;

        if (result.data) {
          this.activities = result.data;
          this.error = undefined;
        } else if (result.error) {
          this.error = result.error;
          console.log("Error "+ JSON.stringify(result.error));
          this.activities = undefined;
        }
      }

    
    openActivityModal() {
        this.isActivityModalOpen = true;
    }
    closeActivityModal() {
        this.isActivityModalOpen = false;
    }
    submitActivityModal() {
        this.isActivityModalOpen = false;
        return refreshApex(this.wiredActivitiesResult);
    }
}