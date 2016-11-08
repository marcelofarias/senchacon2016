describe("Left menu", function() {
    
    it('navigates through sessions', function() {
        
        ST.play([
            { type: "tap", target: "tab[text=\"Users\"]", x: 92, y: 21 },
            { type: "tap", target: "tab[text=\"Home\"]", x: 90, y: 48 },
            { type: "tap", target: "mainlist => [data-recordindex=\"0\"]", x: 76, y: 25 },
            { type: "tap", target: "button[text=\"Yes\"]", x: 64, y: 21 }
        ]);
        
    });
    
    it('renders correctly', function () {
        ST.screenshot('left menu');
    })
    
});
