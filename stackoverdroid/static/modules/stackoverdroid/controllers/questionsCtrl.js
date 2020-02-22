angular.module("Stackoverdroid")
    .controller("questionsCtrl", function ($scope, httpRequest, $rootScope, $location) {
        function initialize() {
            console.log('hello world in questions');
            $scope.fetchingQuestions = false;
            const questionType = 'latest';
            getQuestions(questionType);
        }

        function getQuestions(type) {
            this.questionType = type;

            this.fetchQuestions = function (queryParams) {
                $scope.fetchingQuestions = true;
                httpRequest.getQuestions(queryParams).then(
                    function (data) {
                        console.log(data);
                        $scope.questions = data;
                    }, function (error) {
                        console.log(error);

                    }, function (data) {
                        $scope.fetchingQuestions = false;
                    }
                )
            };

            this.buildQueryParams = function () {
                return "page=1&pagesize=10&fromdate=1581811200&todate=1582329600&order=desc&sort=activity&tagged=android&site=stackoverflow&filter=!3ykawLJfw6AVzZXKD"
            };

            this.get = function () {
                const queryParams = this.buildQueryParams();
                return this.fetchQuestions(queryParams)
            };

            this.get();
        }


        initialize()
    });
