trigger rollupOnContact on Contact (after insert,after update,after delete,after undelete) {
    if(Trigger.isInsert || Trigger.isUpdate || Trigger.isDelete || Trigger.isUndelete)
        Countcontact.getContactCounts(trigger.new,trigger.old);

}