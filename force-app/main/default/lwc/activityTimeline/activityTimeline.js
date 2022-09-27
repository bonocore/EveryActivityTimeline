import { LightningElement,api,wire,track } from 'lwc';
import getAllTimelineActivities from '@salesforce/apex/GB_Timeline_Activity_Controller.getAllTimelineActivities';
import getRelatedTimelineActivities from '@salesforce/apex/GB_Timeline_Activity_Controller.getRelatedTimelineActivities';
import { refreshApex } from '@salesforce/apex';
import LightningConfirm from 'lightning/confirm';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ActivityTimeline extends LightningElement {

    @api recordId;

    @track isActivityModalNewOpen = false;
    @track isActivityModalEditOpen = false;

    @track activities;

    @api showNewActivityButton;

    @api activityToEditId;

    wiredActivitiesResult; //useful for forcing refresh

    

    @wire(getRelatedTimelineActivities, {relatedToId: '$recordId'}) 
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

    
    openActivityModalNew() {
        this.isActivityModalNewOpen = true;
    }
    closeActivityModalNew() {
        this.isActivityModalNewOpen = false;
    }
    submitActivityModaNew() {
        this.isActivityModalNewOpen = false;
        return refreshApex(this.wiredActivitiesResult);
    }
    closeActivityModalEdit() {
        this.isActivityModalEditOpen = false;
    }
    submitActivityModalEdit() {
        this.isActivityModalEditOpen = false;
        return refreshApex(this.wiredActivitiesResult);
    }
    handleMenuSelect(event) {
        if(event.detail.value === "edit")
        {
            this.activityToEditId=event.target.dataset.id;
            this.isActivityModalEditOpen = true;

        }
        if(event.detail.value === "delete")
        {
            this.deleteActivity(event.target.dataset.id,event.target.dataset.title);
        }
    }
    deleteActivity(idToDel,titleToDel)
    {
        LightningConfirm.open({
            message: 'Are you sure you want to delete the activity "'+titleToDel+'" ?',
            theme: 'warning',
            label: 'Confirm deletion',
        }).then((result) => {
            deleteRecord(idToDel).then(() => {
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Record deleted successfully',
                            variant: 'success'
                        })
                    );
                    return refreshApex(this.wiredActivitiesResult);
                    
                })
                .catch(error => {
                    console.log(error);
                });
        });
    }
    handleSectionToggle(event) {
        let buttonId = event.currentTarget.dataset.buttonId;
        let currentsection = this.template.querySelector('[data-collapsible-section-id="' + buttonId + '"]');
        if (currentsection.className.search('slds-is-open') == -1) {
            currentsection.className = 'slds-timeline__item_expandable slds-is-open';
            event.target.iconName='utility:chevrondown';
        } else {
            currentsection.className = 'slds-timeline__item_expandable slds-is-close';
            event.target.iconName='utility:chevronright';
        }
    }
}
