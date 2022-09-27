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
                related_to__c
            FROM GB_Timeline_Activity__c
            WHERE related_to__c = :relatedToId
            WITH SECURITY_ENFORCED
            ORDER BY createdDate__c DESC
            LIMIT 50
        ];
    }
}
