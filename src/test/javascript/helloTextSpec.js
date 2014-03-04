define(
['helloText'],
function(helloText){
    describe('helloText', function(){
        it('should say "Hello, World!"', function(){
            expect(helloText()).toBe('Hello, World!');
        });
    });
});