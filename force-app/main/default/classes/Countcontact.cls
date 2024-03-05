public with sharing class Countcontact {
    public static void getContactCounts(List<Contact> newCon,List<Contact> oldCont) {
        // Get the account id TestIn
        set<Id> accIds = new set<Id>();
        try{
            if(newCon !=null && newCon.size()>0){
                for(Contact c:newCon){
                    if(c.AccountId !=null){
                        accIds.add(c.AccountId);
                    }
                }
            }
            if(oldCont !=null && oldCont.size()>0){
                for(Contact c:oldCont){
                    if(c.AccountId !=null){
                        accIds.add(c.AccountId);
                    }
                }
            }
            if(!accIds.isEmpty()){
                List<Account> accList = [SELECT id,Name,No_Of_Contacts__c,(Select id from Contacts) FROM Account where id IN:accIds];
                if(accList.size()>0){
                    for(Account acc: accList){
                        acc.No_Of_Contacts__c = acc.Contacts.size();
                    } 
                    update accList;
                }
                  
            } 
        }catch(Exception e){
           System.debug('Get message'+ e.getMessage());
        }

    }
}
