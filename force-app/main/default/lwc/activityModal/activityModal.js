import { LightningElement,api  } from 'lwc';

export default class ActivityModal extends LightningElement {

    @api isActivityModalOpen = false;
    @api leadId;
    iconValue='standard:default';


    get icons() {
        return [
            { label: 'Default', value: 'standard:default' },
            { label: 'Web', value: 'custom:custom68' },
            { label: 'Mobile', value: 'custom:custom28' },
            { label: 'Notification', value: 'custom:custom53' },
        ];
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