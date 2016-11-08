describe("HelloWorld.js", function() {
    
    it("says hello", function() {
        var hw = Ext.create('app1.HelloWorld');
        expect(hw.sayHello()).toEqual('Hello!');
    });
    
});