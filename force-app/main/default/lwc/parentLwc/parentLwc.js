import { LightningElement, track } from 'lwc';

export default class ParentLwc extends LightningElement {
    @track progressValue;
    handleProgressValueChange(event){
        this.progressValue = event.detail;
    }
}