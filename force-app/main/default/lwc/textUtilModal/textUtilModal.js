import { LightningElement, api,track } from 'lwc';

export default class UtilModal extends LightningElement {
  @api saveButtonLabel;
  @api doneButtonLabel;
  @api showModal;
  @track showSuccessMsg=false;
  @api cardUpdateMessage;
  @api cardUpdateSuccessMessage;
  @api inputType;
  @api inputLabel;
  showHeader;
  constructor() {
    super();
    this.showModal = false;
    this.showHeader = "slds-modal__header ";
  }

  handleSave() {
   this.dispatchEvent(new CustomEvent('save'));
   this.showSuccessMsg = true;
   this.showHeader = "slds-modal__header slds-modal__header_empty";

  }
  handleDone(){
    this.showModal =false;
   // this.dispatchEvent(new CustomEvent('close'));
  }
  handleClose() {
    this.showModal =false;
  }
}