import { LightningElement,api  } from 'lwc';
import { icons } from 'c/data';

export default class ActivityModalNew extends LightningElement {

    @api isActivityModalOpen = false;
    @api leadId;
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
        fields.icon__c = this.iconValue;
        this.template.querySelector('lightning-record-edit-form').submit(fields);
     }
}