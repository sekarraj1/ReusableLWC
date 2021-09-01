public with sharing class LightningTreeGridController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [SELECT Id,Name,Rating,Phone,(SELECT Id,FirstName,LastName FROM Contacts) FROM Account Limit 10];
    }
}
