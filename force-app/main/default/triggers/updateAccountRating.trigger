/*
* Update Account Rating to Hot when opportunity stage equals to Closed-won
*/
trigger updateAccountRating on opportunity (after insert,after update) {
    // Variable to store account id
    set<Id> accIds = new set<Id>();
    List<Account> accToBeUpdated = new List<Account>();
    for (opportunity opp : trigger.new) {
        if(opp.accountId != Null && opp.StageName =='Closed Won') {
            accIds.add(opp.accountId);
        }   
    }
    if(!accIds.isEmpty()){
        List<Account> accList = [SELECT id,Name,Rating FROM Account Where Id In:accIds];
        if(accList.size()>0){
            for(Account ac:accList){
                ac.Rating = 'Hot';
                accToBeUpdated.add(ac);
            }
        }
        update accToBeUpdated;
    }

}