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
                Lead__c
            FROM GB_Timeline_Activity__c
            WITH SECURITY_ENFORCED
            ORDER BY createdDate__c DESC
            LIMIT 50
        ];
    }
    
    @AuraEnabled(cacheable=true scope='global')
    public static GB_Timeline_Activity__c[] getLeadTimelineActivities(String leadId) {
         // Return all data when no search term
         leadId = leadId.trim();
         if (leadId == '') {
             return getAllTImelineActivities();
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
                Lead__c
            FROM GB_Timeline_Activity__c
            WHERE Lead__c = :leadId
            WITH SECURITY_ENFORCED
            ORDER BY createdDate__c DESC
            LIMIT 50
        ];
    }
}
