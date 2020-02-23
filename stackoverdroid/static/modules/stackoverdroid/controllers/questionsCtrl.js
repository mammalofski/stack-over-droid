angular.module("Stackoverdroid")
    .controller("questionsCtrl", function ($scope, httpRequest, $rootScope, $location, $timeout) {
        this.scope = $scope;

        function initialize() {
            $scope.Math = Math;
            $scope.fetchingQuestions = false;
            $scope.questions = [];
            $scope.data = null;
            $scope.moreTags = "";
            $scope.ordering = "desc";
            const now = new Date();
            $scope.fromdate = normalizeDate(new Date(now - 7 * 24 * 3600 * 1000));
            $scope.todate = normalizeDate(now);
            $scope.page = 1;
            $scope.pageSize = 10;
            $scope.sortType = 'votes';
            const args = argBuilderForGetQuestion();
            getQuestions(args);

            // scripts()
        }

        function kernelPanic() {
            // show the error modal
            $('.modal').modal('show');
        }

        function normalizeDate(date) {
            return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
        }

        function getQuestions(args) {
            // read the stackoverflow api docs (https://api.stackexchange.com/docs) for more information about these attributes
            const now = new Date();
            // set for tonight at midnight
            now.setHours(11, 59, 59);
            this.page = args.page || 1;
            this.pageSize = args.pageSize || 10;
            // a week ago
            this.fromdate = args.fromdate || now.getTime() - 7 * 24 * 60 * 60 * 1000;
            this.todate = args.todate || now.getTime();
            // we mostly use creation and votes, but there are other options as well, again, please read the docs
            this.sort = args.sort || 'creation';
            // the main idea of the page is about android related questions
            this.tags = ['android'];
            // add other tags if needed
            this.tags = this.tags.concat(args.tags);
            // this is a default filter that constructs the body of the response as desired. read the docs for more information about the filters
            this.filter = args.filter || '!0XR)HquYu8jeQaXDjI29B*Rqe';
            this.order = args.order || 'desc';

            this.fetchQuestions = function (queryParams) {
                $scope.fetchingQuestions = true;
                loading();
                httpRequest.getQuestions(queryParams).then(
                    function (data) {
                        $scope.data = data;
                        $scope.questions = data.items;
                        $scope.fetchingQuestions = false;
                        loading();
                    }, function (error) {
                        console.log(error);
                        $scope.fetchingQuestions = false;
                        loading();
                        kernelPanic()
                    }
                )
            };


            this.buildQueryParams = function () {
                const tags = this.tags.join(';');
                return `page=${this.page}&pagesize=${this.pageSize}&fromdate=${this.fromdate}&todate=${this.todate}&order=${this.order}&sort=${this.sort}&tagged=${tags}&site=stackoverflow&filter=${this.filter}`;
            };

            this.get = function () {
                const queryParams = this.buildQueryParams();
                return this.fetchQuestions(queryParams)
            };

            this.get();
        }

        function loading(delay) {
            delay = delay || 100;
            const mainBody = $('.main-body');
            const loadingOverlay = $('.loading-overlay');
            if ($scope.fetchingQuestions) {
                mainBody.fadeOut(delay, function () {
                    loadingOverlay.fadeIn(delay)
                })
            } else {
                loadingOverlay.fadeOut(delay, function () {
                    mainBody.fadeIn(delay)
                })
            }
        }

        function argBuilderForGetQuestion() {
            const fromdate = new Date($scope.fromdate);
            const todate = new Date($scope.todate);
            return {
                'page': $scope.page,
                'pageSize': $scope.pageSize,
                'fromdate': fromdate.getTime() / 1000,
                'todate': todate.getTime() / 1000,
                'order': $scope.ordering,
                'sort': $scope.sortType,
                'tags': $scope.moreTags,
                'filter': null,
            };
        }

        $scope.applyTags = function (tags) {
            $scope.moreTags = tags.split(';');
            const args = argBuilderForGetQuestion();
            getQuestions(args);
        };

        $scope.filterAndOrder = function () {
            const args = argBuilderForGetQuestion();
            getQuestions(args);
        };

        $scope.paging = function (page, pageSize) {
            $scope.pageSize = pageSize;
            if (page === 'next') {
                $scope.page += 1;
            } else if (page === 'pre') {
                $scope.page = Math.max(1, $scope.page - 1);
            }
            const args = argBuilderForGetQuestion();
            getQuestions(args);
        };

        $scope.changeSorting = function (sort) {
            $scope.sortType = sort;
            const args = argBuilderForGetQuestion();
            getQuestions(args);
        };

        // function scripts() {
        //     const mediaBodyHeight= $(window).height() - 30;
        //     $('.media .media-body-html').css('max-height', mediaBodyHeight + 'px');
        // }


        initialize()
    });
