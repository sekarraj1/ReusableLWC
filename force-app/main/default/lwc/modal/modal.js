import { LightningElement, api, track } from 'lwc';

export default class Modal extends LightningElement {
    @api closelLabel ='Close';      //this is to override close button label
	@api saveLabel = 'Save';         //this is to refere save/send button text of modal
    @api hideSaveButton = false;    //make this true if you don't want to show save button
    @api hideCancelButton = false;  //hide cancel button
    @api hideCloseButton = false;   // hide the 'Close' button of the modal
    @api hideFooter = false;        //hide footer completely
    @api modalHeader;               //to replace the content of modal header content
    @api modalSubHeader;            //to replace the content of modal sub header content
    @api modalWidth = 100;
    @track label;                   //this is a local variable
    @api saveButtonVariant = "brand";
    @api closeButtonVariant = "neutral";
    @api isOverflowVisible;
    @api disableModalUpdate;
    @track modalBodyClass;
    @api headerStyle = 'slds-text-heading_medium slds-hyphenate';
    @api subHeaderStyle = 'slds-text-align_center slds-text-color_weak';       
  //Analytics Variables
	@api pageName;
	@api pageGroup;

    clickHandlerForSaveRequest(event) {
        this.dispatchEvent(new CustomEvent('save'));
    }
    clickHandlerForCloseRequest(event) {
        this.dispatchEvent(new CustomEvent('close'));
    }
    get modalWidthValue() {
        return "max-width: "+ this.modalWidth +"vh;";
    }
    connectedCallback() {
        if(this.isOverflowVisible) {
            this.modalBodyClass = "overflow:visible;"
        }
    }
    @api 
    get headerClass(){
        return this.hideHeader ? "slds-modal__header slds-modal__header_empty" : "slds-modal__header";
    }
} 