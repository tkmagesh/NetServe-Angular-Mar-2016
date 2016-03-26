angular
	.module("myApp.greet", ["ngRoute"])
	.config(function($routeProvider){
		$routeProvider
			.when("/greet", {
				templateUrl : 'greet/greet.html',
				controller : 'greetController'
			});
	})
	.controller("greetController", function($scope){
		$scope.name = '';
		$scope.greetMessage = '';
		$scope.greet = function(){
			$scope.greetMessage = 'Hi ' + $scope.name + ", Have a nice day!";
		}
	})
	.filter("trimText", function(){
		return function(data, trimLength){
			return data.length < trimLength ? data : data.substr(0,trimLength) + '...';
		}
	});