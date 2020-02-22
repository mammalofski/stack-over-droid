angular.module('Stackoverdroid', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        // $authProvider.tokenType = 'Token';
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('main', {
                url: "/",
                templateUrl: "/static/modules/stackoverdroid/views/main-page.html"
            });

    });

