({
    handleClick : function(component, event, helper) {
        var cmpEvent = component.getEvent("sampleComponentEvent");
        cmpEvent.setParams({
            "message": component.get("v.enteredText")
        });
        cmpEvent.fire();
    }
})
