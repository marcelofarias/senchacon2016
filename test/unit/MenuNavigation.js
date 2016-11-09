describe("Menu navigation", function() {
    
    it('navigates through sessions', function() {
        
        ST.play([
            { type: "tap", target: "treelistitem[text=\"Email\"]", x: 63, y: 42 },
            { type: "tap", target: "treelistitem[text=\"Profile\"]", x: 79, y: 22 },
            { type: "tap", target: "textarea[name=\"textarea-1127-inputEl\"]", x: 175, y: 25 },
            { type: "type", target: "textarea[name=\"textarea-1127-inputEl\"] => textarea", text: "type something", caret: 0 },
            { type: "tap", target: "button[text=\"Share\"]", x: 31, y: 25 }
        ]);
        
        
        // ST.play([
        //     { type: "tap", target: "treelistitem[text=\"Email\"]", x: 116, y: 32 },
        //     { type: "tap", target: "treelistitem[text=\"Profile\"]", x: 98, y: 26 },
        //     { type: "tap", target: "textarea[name=\"textarea-1127-inputEl\"]", x: 76, y: 26 }
        // ]);
        
        // debugger;
        // ST.play([
        //     { type: "tap", target: "treelistitem[text=\"Email\"]", x: 118, y: 45 },
        //     { type: "tap", target: "menuitem[text=\"Compose\"]", x: 73, y: 25 },
        //     { type: "tap", target: "textfield[fieldLabel=\"To\"]", x: 122, y: 22 }
        // ]);
        
    });
    
    it('renders correctly', function () {
        ST.screenshot('compose-email', 20);
    });
    
});
