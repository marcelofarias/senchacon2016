describe("App1FunctionalTest.js", function() {
    it("should pass", function() {
        expect(1).toBe(1);
    });
    
    it('should match screenshot', function() {
        ST
            .wait(10 * 1000)
            .screenshot('first screenshot');
    });
});
