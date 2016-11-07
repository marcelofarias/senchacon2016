describe("App1FunctionalTest.js", function() {
    it("should pass", function() {
        expect(1).toBe(1);
    });
    
    it('should match screenshot', function() {
        ST.screenshot('first screenshot');
    });
});
