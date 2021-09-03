<aura:application extends="force:slds" implements="flexipage:availableForAllPageTypes" access="global">
    <aura:attribute name="options" type="List" default="[{'label':'Bob','value':'123'},
                                                         {'label':'Chrissey','value':'345'},
                                                         {'label':'Jessica','value':'456','disabled': true},
                                                         {'label':'Sunny','value':'567'}]" />
    <aura:attribute name="selectedValue" type="String" default="" description="Selected value in single Select" />
 
    <c:multiSelectCombobox multiSelect="true" options="{!v.options}" selectedValue="{!v.selectedValue}" label="Single Select Combobox"></c:multiSelectCombobox>
<<<<<<< HEAD
</aura:application>
=======
</aura:application>
 
>>>>>>> 828e994bfcff02d5926fc89923f9af919ccae47a
