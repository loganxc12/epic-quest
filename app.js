var app = angular.module('questApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
                url: '/',
                templateUrl: 'views/home.html'
        })
        .state('dash', {
                url: '/dash',
                templateUrl: 'views/dash.html'
        })
        .state('quest', {
                url: '/quest',
                templateUrl: 'views/quest.html',
        })
        .state('character', {
                url: '/character',
                templateUrl: 'views/character.html',
        })

})
