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

angular.module("Stackoverdroid")
    .filter("trustHTML", ['$sce', function ($sce) {
        return function (htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        };
    }]);

