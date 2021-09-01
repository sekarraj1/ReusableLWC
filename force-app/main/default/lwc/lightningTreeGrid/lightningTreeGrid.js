import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/LightningTreeGridController.getAccountList';

export default class LightningTreeGrid extends LightningElement {
    @track gridColumns=[{
        type:'text',
        fieldName:'Name',
        label:'Name'
    },{
        type:'text',
        fieldName:'FirstName',
        label:'FirstName'
    },
    {
        type:'text',
        fieldName:'Phone',
        label:'Phone'
    },{
        type:'text',
        fieldName:'Rating',
        label:'Rating'
    },
    {
        type:'text',
        fieldName:'LastName',
        label:'LastName'
    }];
    @track gridData;

    @wire(getAccounts)
    accountTreeData({error,data}){
        if(data){
            var tempData = JSON.parse(JSON.stringify(data));
            for(let i=0;i<tempData.length;i++){
                var conts = tempData[i]['Contacts'];
                if(conts){
                    tempData[i]._children = conts;
                    delete tempData[i].Contacts;
                } 
            }
            this.gridData = tempData;

        } else if(error){
            if(Array.isArray(error.body))
                console.log('Error is'+ error.body.map(e=>e.message).join(','));
            else if(typeof error.body.message === 'string')
                console.log('Error is'+ error.body.message);

        }
    }
}