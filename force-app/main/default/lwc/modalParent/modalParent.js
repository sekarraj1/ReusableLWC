import { LightningElement, track } from 'lwc';

export default class ModalParentExample extends LightningElement {
  //Variables to control modal window
    firstText = "Expiry date on";
    middleText = " Visa credit ....2303 ";
    lastText = "has been updated";
    header;
    cardLast4Digits = "9998";
    headerText = 'Update expiry on card...';
    // Variables for show/hide
    showSuccessMessage;
    showDoneButton;
    hideSaveButton = false;
    hideCancelButton = false;

 showModal = false;
  

  
  connectedCallback() {
    this.header = this.headerText + this.cardLast4Digits;
    this.hideCancelButton = true;
}

saveModalHandler (event) {
  this.showSuccessMessage = true;
  this.hideSaveButton = true;
  this.hideCancelButton = false;
}

closeModalHandler (event) {
  
 
  
}

  showModalPopup() {
    this.showModal = true;
  }
}