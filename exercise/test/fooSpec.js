describe("A foo module that ", function() {
	describe("define a function 'increaseCounter' that", function() {
		it("should exist in the global scope ", function() {
			var global = window || global;
			expect( typeof(global.increaseCounter) === "function" ).toBe(true);
		});
		it("should increase value of global variable 'counter'", function() {
			var global = window || global;
			expect( global.counter === 0 ).toBe(true);
			increaseCounter();
			expect( global.counter === 1 ).toBe(true);
		});

	});
});