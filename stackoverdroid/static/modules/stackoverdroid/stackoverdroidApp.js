angular.module('Stackoverdroid', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        // $authProvider.tokenType = 'Token';
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('questions', {
                url: "/",
                templateUrl: "/static/modules/stackoverdroid/views/questions.html"
            });

    });

