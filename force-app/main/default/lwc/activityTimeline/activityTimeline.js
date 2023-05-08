import { LightningElement,api,wire,track } from 'lwc';
import getRelatedTimelineActivities from '@salesforce/apex/GB_Timeline_Activity_Controller.getRelatedTimelineActivities';
import { refreshApex } from '@salesforce/apex';
import LightningConfirm from 'lightning/confirm';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import streamNextActivity from '@salesforce/apex/GB_Timeline_Activity_Controller.streamNextActivity';
import { loadScript } from "lightning/platformResourceLoader";
import cometdlwc from "@salesforce/resourceUrl/cometd";
import getSessionId from '@salesforce/apex/GB_SessionUtil.getSessionId';


export default class ActivityTimeline extends LightningElement {

    @api recordId;

    @track isActivityModalNewOpen = false;
    @track isActivityModalEditOpen = false;

    @track activities;

    @api showNewActivityButton;

    @api activityToEditId;

    @track loading = false;

    wiredActivitiesResult; //useful for forcing refresh

    //event streaming. Using cometd directly as empAPI is not supported in community so far 
    libInitialized = false;
    @track sessionId;
    @track error;
    


    
   
    @wire(getRelatedTimelineActivities, {relatedToId: '$recordId'}) 
    wiredActivities(result){
        this.loading=true;
        this.wiredActivitiesResult=result;
        if (result.data) {
          this.activities = result.data;
          this.error = undefined;
        } else if (result.error) {
          this.error = result.error;
          console.log("Error "+ JSON.stringify(result.error));
          this.activities = undefined;
        }
        this.loading=false;
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
            this.loading=true;   
            deleteRecord(idToDel).then(() => {
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Record deleted successfully',
                            variant: 'success'
                        })
                    );
                    this.loading=false;   
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

    invokeStreaming() {
        this.loading=true;
        streamNextActivity( {relatedToId: this.recordId})
        .then((result) => {
            refreshApex(this.wiredActivitiesResult);
            this.loading=false;            
        })
        .catch((error) => {
            console.log(error);
        });
        this.loading=false;   
   }


   // custom event streaming code
    
    @wire(getSessionId)
    wiredSessionId({ error, data }) {
     if (data) {
       console.log(data);
       this.sessionId = data;
       this.error = undefined;
       loadScript(this, cometdlwc)
       .then(() => {
           this.initializecometd()
       });
   } else if (error) {
       console.log(error);
       this.error = error;
       this.sessionId = undefined;
     }
   }
   
   initializecometd() {
   
     if (this.libInitialized) {
       return;
     }
   
    this.libInitialized = true;
   
    //inintializing cometD object/class
    var cometdlib = new window.org.cometd.CometD();
           
   //Calling configure method of cometD class, to setup authentication which will be used in handshaking
     cometdlib.configure({
       url: window.location.protocol + '//' + window.location.hostname + '/cometd/47.0/',
       requestHeaders: { Authorization: 'OAuth ' + this.sessionId},
       appendMessageTypeToURL : false,
       logLevel: 'debug'
   });
   
   cometdlib.websocketEnabled = false;
   
   var self = this;

   cometdlib.handshake((status) => {
               
       if (status.successful) {
           // Successfully connected to the server.
           // Now it is possible to subscribe or send messages
           console.log('Successfully connected to server');
           cometdlib.subscribe('/event/GB_Timeline_Event__e', (message) => {
                     console.log('subscribed to message!'+ message);
                     refreshApex(this.wiredActivitiesResult);
          });
       } else {
           /// Cannot handshake with the server, alert user.
           console.error('Error in handshaking: ' + JSON.stringify(status));
        }
      });
   }
   
}
