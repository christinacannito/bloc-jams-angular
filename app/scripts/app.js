(function(){
	function config($stateProvider, $locationProvider) {
		$locationProvider
			.html5Mode({
				enabled: true, 
				requireBase: false 
			});

		$stateProvider
			.state('landing', {
				url: '/',
				templateUrl: '/templates/landing.html'
			})
			.state('album', {
				url: '/album',
				templateUrl: '/templates/album.html'
			})
			.state('collection', {
				url: '/collection',
				templateUrl: '/templates/collection.html'
			});
	} // what is happening here...where do these variables come from 

	angular
		.module('blocJams', ['ui.router'])
		.config(config);
})();

// providers are config objects for the services
// example the stateProvider has a state service 
// ever provider has a state service 