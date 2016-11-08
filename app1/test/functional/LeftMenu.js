describe("Left menu", function() {
    
    it('navigates through sessions', function() {
        ST.play([
            { type: "tap", target: "tab[text=\"Users\"]", x: 92, y: 43 },
            { type: "tap", target: "tab[text=\"Home\"]", x: 86, y: 49 },
            { type: "tap", target: "mainlist => [data-recordindex=\"0\"]", x: 51, y: 15 },
            { type: "tap", target: "button[text=\"No\"]", x: 37, y: 16 }
        ]);
    });
    
    it('renders correctly', function () {
        ST.screenshot('left menu');
    })
    
});
