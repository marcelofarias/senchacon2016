describe("App1FunctionalTest.js", function() {
    
    it('navigates through sessions', function() {
        ST.play([
            { type: "tap", target: "treelistitem[text=\"Email\"]", x: 116, y: 32 },
            { type: "tap", target: "treelistitem[text=\"Profile\"]", x: 98, y: 26 }
        ]);
    });
    
    it('renders correctly', function () {
        debugger;
        ST.screenshot();
    });
    
});
