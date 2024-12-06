public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> fetchContacts(String searchKey){
        String strKey = '%'+searchKey+'%';
        return [SELECT id,FirstName,LastName,Email,Phone FROM Contact WHERE Name LIKE:strKey LIMIT 10];
    }
}
