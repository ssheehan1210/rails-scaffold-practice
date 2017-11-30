console.log('This app is running');
const app = angular.module('noticeboard', []);


app.controller('mainController', ['$http', function($http) {
	this.message = 'controller works'

	$http({
		method: 'GET',
		url: 'http://localhost:3000/notices'
	}).then(response => console.log(response))
	  .catch(err => console.log(err));
}])

console.log('The app is finished running');
