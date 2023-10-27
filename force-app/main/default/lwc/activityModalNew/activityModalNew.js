import { LightningElement,api  } from 'lwc';
import { icons } from 'c/data';
import retrieveRelatedIndividualId from '@salesforce/apex/GB_Timeline_Activity_Controller.retrieveRelatedIndividualId';

export default class ActivityModalNew extends LightningElement {

    @api isActivityModalNewOpen = false;
    @api relatedToId;
    iconValue='standard:default';


    get icons() {
        return icons;
    }
    handleClose() {
        this.dispatchEvent(new CustomEvent('close'));
    }
    handleIconChange(event) {
        this.iconValue = event.detail.value;
    }
    handleSubmit(event){ //needed for icon combobox selection
        event.preventDefault();       
        const fields = event.detail.fields;
        console.log("Individual ID" + retrieveRelatedIndividualId(this.relatedToId));
        fields.icon__c = this.iconValue;
        this.template.querySelector('lightning-record-edit-form').submit(fields);
        this.iconValue='standard:default';
     }
}