import { LightningElement, track } from 'lwc';
import fetchContacts from '@salesforce/apex/ContactController.fetchContacts';
import {NavigationMixin} from 'lightning/navigation';
const actions=[
    {label:'View',name:'View'},
    {label:'Edit',name:'edit'}];

const columns=[
    {label:'FirstName',fieldName:'FirstName'},
    {label:'LastName',fieldName:'LastName'},
    {type:'action',typeAttributes:{rowActions:actions}}
];

export default class DataTableWithRowActions extends NavigationMixin (LightningElement)  {
    @track contacts;
    @track error;
    @track columns = columns;
    handleKeyChange(event){
        const searchKey = event.target.value;
        if(searchKey){
            fetchContacts({searchKey})
            .then(result =>{
                this.contacts = result;
            })
            .catch(error=>{
                this.error = error;
            });
        } else{
            this.contacts = undefined;
        }
    }
    handleRowAction(event){
        const actionName = event.detail.action.name;
        const row = event.detail.row;
        switch(actionName){
            case 'edit':
                this[NavigationMixin.Navigate]({
                    type:'standard__recordPage',
                    attributes:{
                        recordId: row.Id,
                        objectApiName:'Contact',
                        actionName:'edit'
                    }
                });
            break;
            case 'View':
                this[NavigationMixin.Navigate]({
                    type:'standard__recordPage',
                    attributes:{
                        recordId: row.Id,
                        actionName:'view'
                    }
                });
                break;
                default:
        }
    }

}