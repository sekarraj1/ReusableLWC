import { LightningElement, track ,api} from 'lwc';
const ROOTCAUSE="Root Cause : ";
const DECLINECODE="Decline code :";
const DESCRIPTION="Description :";

export default class TextModal extends LightningElement {
//Variables to display the values
    @api firstText = "Expiry date on";
    @api middleText = " Visa credit ....2303 ";
    @api lastText = "has been updated";
    @api lastErrorText="could not be updated";
    @api header;
    @api cardLast4Digits = "2303";
    @api headerText = 'Update expiry on card...';
    @api inputLabelName = "Expiration Date";
// Variables to display the error message
    @api rootCause="Expiry date mis-match";
    @api declineCode="#3380";
    @api description="Lorem ipsum dolor sit amet, consectetur adipiscing elit  Erat lorem proin mauris Lorem ipsum dolor sit amet consectetur adipiscing elit. Erat lorem proin mauris.Lorem ipsum dolor sit amet consectetur adipiscing elit Erat lorem proin mauris.";
    valueClass = "slds-text-color_error,,";
    keyClass="slds-p-left_x-small,slds-p-left_x-small,slds-p-left_x-small";
    errorKey = [ROOTCAUSE, DECLINECODE, DESCRIPTION];
    errorKeyValue;
// Variables for show/hide
    showSuccessMessage;
    showErrorMessage;
    hideSaveButton = false;
    hideCancelButton = false;
    @track hideHeader =false;
    arrayAdditionalValues=[];
//Analytics Variables
	@api pageName;
	@api pageGroup;

    connectedCallback() {
        this.header = this.headerText + this.cardLast4Digits;
        this.hideCancelButton = true;
    }

    saveModalHandler (event) {
        this.showSuccessMessage = true;
        this.hideSaveButton = true;
        this.hideCancelButton = false;
        this.hideHeader = true;
        this.header ='';
    }

    closeModalHandler (event) {
       
        this.showSuccessMessage = false;
        this.showErrorMessage = true;
        this.hideSaveButton = true;
        this.hideCancelButton = false;
        this.hideHeader =true;
        this.header ='';
       
    }



}