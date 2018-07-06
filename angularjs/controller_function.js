<!DOCTYPE html>
<html>
<head>
<script src="angular.min.js"></script>
<script>
var app=angular.module("myapp",[]);
app.controller("myctrl",function($scope){
	$scope.sqrRoot=function(){
		return Math.sqrt($scope.value);
	}
$scope.abs=function(){
	return Math.abs($scope.value)
}
});
</script>
</head>

<body ng-App="myapp" ng-controller="myctrl" >
enter value<input type="text" ng-model="value"/>
square root:<div ng-bind="sqreRoot()"></div>
absolute root:<div ng-bind="abs()"></div>






</body>
</html>