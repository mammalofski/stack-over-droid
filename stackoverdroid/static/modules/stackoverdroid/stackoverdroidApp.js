angular.module('Stackoverdroid', ['ui.router', '720kb.datepicker'])
    .config(function ($stateProvider, $urlRouterProvider) {
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

