public with sharing class GB_SessionUtil {

    @AuraEnabled(cacheable=true)
     public static String getSessionId() {
      return UserInfo.getSessionId();
    }
  }