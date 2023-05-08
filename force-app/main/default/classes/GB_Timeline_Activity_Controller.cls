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
}
