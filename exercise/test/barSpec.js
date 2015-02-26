describe("A bar module that ", function() {
	describe("define a function 'addElement' that", function() {
		it("should exist in the global scope ", function() {
			var global = window || global;
			expect( typeof(global.addElement) === "function" ).toBe(true);
		});
	});
});