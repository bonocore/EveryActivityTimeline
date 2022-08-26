import { LightningElement,api  } from 'lwc';
import { icons } from 'c/data';

export default class ActivityModalEdit extends LightningElement {
    @api isActivityModalEditOpen = false;
    @api activityId;
    
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
    handleOnLoad(event) {
        var record = event.detail.records;
        var fields = record[this.activityId].fields; 
        this.iconValue = fields.icon__c.value;      
    }

    handleSubmit(event){ //needed for icon combobox selection
        event.preventDefault();       
        const fields = event.detail.fields;
        fields.icon__c = this.iconValue;
        this.template.querySelector('lightning-record-edit-form').submit(fields);
     }
}