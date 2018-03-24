var mainApp = angular.module("mainApp",[]);
mainApp.controller("bothOfUsController",function($scope,$http){
	$scope.location;
	$scope.showTable = true;
	$scope.showCont = true;
	$scope.content=[];
	$scope.columns=[];
	$scope.details=[];
	$scope.cols=[];
	$scope.index;
	$scope.crimedetails=[];
		$scope.subm = function(){
			$scope.showTable = false;
	$http.get(" https://brottsplatskartan.se/api/events/?location=" + $scope.location).
	then(function(response){
		$scope.content = response.data;
		angular.forEach($scope.content.data,function(value,key){
			$scope.details.push(value);
	    	angular.forEach(value,function(v,k){
	        	$scope.crimedetails.push(v);
		});
		});
	});
	};
	$scope.showContent = function(value){
		$scope.showCont = false;
		document.getElementById("mainContent").innerHTML=$scope.details[value].content;
		};
});