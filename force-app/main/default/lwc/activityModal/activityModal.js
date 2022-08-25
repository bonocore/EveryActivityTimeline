import { LightningElement,api  } from 'lwc';

export default class ActivityModal extends LightningElement {

    @api isActivityModalOpen = false;
    @api leadId;
   
    handleClose() {
        this.dispatchEvent(new CustomEvent('close'));
    }
    
}