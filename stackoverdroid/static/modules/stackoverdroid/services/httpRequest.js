angular.module('Stackoverdroid')
    .service('httpRequest', function httpRequest($q, $http, $location, $stateParams, $rootScope) {
        var service = {
            'API_URL': 'https://api.stackexchange.com/2.2',
            'use_session': false,
            'authenticated': null,
            'authPromise': null,
            'request': function (args) {
                params = args.params || {};
                args = args || {};
                var deferred = $q.defer(),
                    url = this.API_URL + args.url,
                    method = args.method || "GET",
                    params = params,
                    data = args.data || {};
                var that = this;
                $.ajax({
                    url: url,
                    method: method.toUpperCase(),
                    params: params,
                    data: data
                })
                    .done(angular.bind(this, function (data, status, headers, config) {
                        deferred.resolve(data, status);

                    }))
                    .fail(angular.bind(this, function (data, status, headers, config) {
                        console.log("error syncing with: " + url);

                        // Set request status
                        if (data) {
                            data.status = status;
                        }

                        var theResponse = {data: data, status: status, headers: headers, config: config};
                        deferred.reject(theResponse);

                    }));
                return deferred.promise;
            },
            'getQuestions': function (queryParams) {
                return this.request({
                    'method': "GET",
                    'url': "/questions/?" + queryParams
                });
            },

        };
        return service;
    });