public with sharing class GB_Timeline_Activity_Controller {
    @AuraEnabled(cacheable=true scope='global')
    public static GB_Timeline_Activity__c[] getAllTimelineActivities() {
        return [
            SELECT
                Id,
                Name,
                title__c,
                description__c,
                createdDate__c,
                icon__c,
                related_to__c
            FROM GB_Timeline_Activity__c
            WITH SECURITY_ENFORCED
            ORDER BY createdDate__c DESC
            LIMIT 50
        ];
    }
    
    @AuraEnabled(cacheable=true scope='global')
    public static GB_Timeline_Activity__c[] getRelatedTimelineActivities(String relatedToId) {
        System.debug('Get Related Activities '+relatedToId);
         
         // Return all data when no search term
         relatedToId = relatedToId.trim();
         if (relatedToId == '') {
             return null;
         }
       
         // Execute search query
        return [
            SELECT
                Id,
                Name,
                title__c,
                description__c,
                createdDate__c,
                icon__c,
                related_to__c,
                stream_hide__c
            FROM GB_Timeline_Activity__c
            WHERE related_to__c = :relatedToId
            AND stream_hide__c = false
            WITH SECURITY_ENFORCED
            ORDER BY createdDate__c DESC
            LIMIT 50
        ];
    }
    @AuraEnabled
    public static void streamNextActivity(String relatedToId) {
         System.debug('Related ID '+relatedToId);
        relatedToId = relatedToId.trim();
         if (relatedToId == '') {
             return;
         }
         GB_Timeline_Activity__c activityToUpdate;
         activityToUpdate = 
         [SELECT stream_hide__c FROM GB_Timeline_Activity__c 
         WHERE related_to__c = :relatedToId
         AND stream_hide__c = true
         WITH SECURITY_ENFORCED
         ORDER BY createdDate__c ASC
          LIMIT 1];
          System.debug('I will update  '+activityToUpdate);     
      activityToUpdate.stream_hide__c = false;
     update activityToUpdate;
    }

    @AuraEnabled(cacheable=true scope='global')
    public static Id retrieveRelatedIndividualId(String recordId) {
        System.debug('Related ID '+recordId);
        Id id = recordId;
        List<SObject> toRet = new List<SObject>();
        System.debug('ID '+id);
        if(id.getsobjecttype() == Case.SObjectType) 
        {
           toRet = Database.query('select Contact.Id from Case where ID = :recordId');
        }
       /* if(id.getsobjecttype() == VoiceCall.SObjectType) 
        {
            toRet = Database.query('select Contact__r.Id from VoiceCall where ID = :recordId');
        }
        if(id.getsobjecttype() == LiveChatTranscript.SObjectType) 
        {
            toRet = Database.query('select Contact.Id from LiveChatTranscript where ID = :recordId');
        }*/

        System.debug('ToRet '+toRet);
        if (!toRet.isEmpty()) { 
            id = toRet.get(0).Id;
         }
        
        System.debug('Id ToRet '+id);
        return id;
    }
}
