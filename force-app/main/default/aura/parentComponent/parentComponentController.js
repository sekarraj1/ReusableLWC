({
    handleComponentEvent : function(component, event, helper) {
        var valueFromChild = event.getParam("message");
        component.set("v.enteredValue",valueFromChild);
    }
})
