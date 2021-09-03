import { LightningElement, api, track } from 'lwc';

export default class Modal extends LightningElement {
    @api closelLabel = 'close';      //this is to override close button label
	@api saveLabel = 'save';         //this is to refere save/send button text of modal
    @api closeLinkname;
    @api saveLinkname;
    @api hideSaveButton = false;    //make this true if you don't want to show save button
    @api hideCancelButton = false;  //hide cancel button
    @api hideCloseButton = false;   // hide the 'Close' button of the modal
    @api hideFooter = false;        //hide footer completely
    @api hideHeader = false;        //hide header completely
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
    @api showModal;
    

    clickHandlerForSaveRequest(event) {
       this.headerClass = "slds-modal__header slds-modal__header_empty";
       this.dispatchEvent(new CustomEvent('save'));
    }
    clickHandlerForCloseRequest(event) {
       
        this.dispatchEvent(new CustomEvent('close'));
    }
    get modalWidthValue() {
        return "max-width: "+ this.modalWidth +"vh;";
    }

    connectedCallback() {
        this.modalSubHeader ='dfsdfsdfsdf';
        this.headerClass = "slds-modal__header";
        if(this.isOverflowVisible) {
            this.modalBodyClass = "overflow:visible;padding: inherit;"
        }
        if (this.hideHeader)
            this.headerClass += " slds-modal__header_empty";
    }
    
}