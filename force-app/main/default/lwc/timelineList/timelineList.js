import { LightningElement,api,wire } from 'lwc';
import getAllTimelineActivities from '@salesforce/apex/GB_Timeline_Activity_Controller.getAllTimelineActivities';
import getLeadTimelineActivities from '@salesforce/apex/GB_Timeline_Activity_Controller.getLeadTimelineActivities';
export default class TimelineList extends LightningElement {
 
    @api recordId;
    //@wire(getAllTimelineActivities) activities;
	@wire(getLeadTimelineActivities, {leadId: '$recordId'}) activities;
}