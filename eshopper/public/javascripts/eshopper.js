var app = angular.module("eshopper",[]);

app.controller("brands",function ($scope,$http) {
	// body...
	$http.get("/brandData").then(function(res){
		// console.log(res.data)
		$scope.records = res.data
	},function(err){})
})
app.controller("category",function ($scope,$http) {
	// body...
	$http.get("/catgoryData").then(function(res){
		// console.log(res.data)
		$scope.records = res.data
	},function(err){})

	$scope.add_category=function () {
		// body...
		// alert("hello")
		// console.log($scope.cat)
		if(!$scope.cat){
			$scope.err= "please enter category"
		}
		else{
			$http.post("/categoryAction",{xyz:$scope.cat}).then(function(res){
				// console.log(res.data)
				$scope.err = res.data
			},function(err){})
		}
	}
})