describe("Greet Module", function(){
	beforeEach(module("myApp.greet"));

	describe("greet controller", function(){
		it("Should initialize the name", inject(function($controller){
			//Arrange
			var dummyScope = {};
			
			//Act
			$controller('greetController', {$scope : dummyScope});

			//Assert
			expect(dummyScope.name).toBeDefined();
		}));
	
		it("Should initialize the greetMessage", inject(function($controller){
			//Arrange
			var dummyScope = {};
			
			//Act
			$controller('greetController', {$scope : dummyScope});

			//Assert
			expect(dummyScope.greetMessage).toBeDefined();
		}));

		it("Should populate greetMessage when greeted", inject(function($controller){
			//Arrange
			var name = 'Magesh',
				expectedMessage = 'Hi Magesh, Have a nice day!',
				dummyScope = {};

			//Act
			$controller("greetController", {$scope : dummyScope});
			dummyScope.name = name;
			dummyScope.greet();

			//Assert
			expect(dummyScope.greetMessage).toBe(expectedMessage);
		}))
	});

	describe("trimText filter", function(){
		it("should return the given string for short strings", inject(function($filter){
			//Arrange
			var trimTextFilter = $filter("trimText");
			var shortString = 'shortString',
				expectedResult = 'shortString';

			//Act
			var result = trimTextFilter(shortString, 20);

			//Assert
			expect(result).toBe(expectedResult);
		}));

		it("Should return truncated versions for long strings", inject(function($filter){
			var trimTextFilter = $filter("trimText");
			var longString = 'This is a very looooong string for testing',
				expectedResult = 'This is a very loooo...';

			//Act
			var result = trimTextFilter(longString, 20);

			//Assert
			expect(result).toBe(expectedResult);
		}));
	});
});