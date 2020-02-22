angular.module('Stackoverdroid')
    .service('httpRequest', function httpRequest($q, $http, $location, $stateParams, $rootScope) {
        var service = {
            'API_URL': window.location.origin,
            'use_session': false,
            'authenticated': null,
            'authPromise': null,
            'request': function (args) {
                if ($auth.getToken()) {
                    $http.defaults.headers.common.Authorization = 'Token ' + $auth.getToken();
                }
                // Continue
                params = args.params || {};
                args = args || {};
                var deferred = $q.defer(),
                    url = this.API_URL + args.url,
                    method = args.method || "GET",
                    params = params,
                    data = args.data || {};
                // Fire the request, as configured.
                var that = this;
                $http({
                    url: url,
                    withCredentials: this.use_session,
                    method: method.toUpperCase(),
                    headers: {'X-CSRFToken': $cookies.get("csrftoken")},
                    params: params,
                    data: data
                })
                    .success(angular.bind(this, function (data, status, headers, config) {
                        deferred.resolve(data, status);

                    }))
                    .error(angular.bind(this, function (data, status, headers, config) {
                        console.log("error syncing with: " + url);

                        // Set request status
                        if (data) {
                            data.status = status;
                        }

                        if (data && data.detail && (data.detail == "Invalid token." || data.detail == "User inactive or deleted.")) {
                            delete $http.defaults.headers.common.Authorization;
                            $auth.removeToken();
                            //$cookies.remove("csrftoken");
                            that.authenticated = false;
                            $rootScope.$broadcast("httpRequest.logged_out");
                        }

                        if (status == 0) {
                            if (data == "") {
                                data = {};
                                data['status'] = 0;
                                data['non_field_errors'] = ["Could not connect. Please try again."];
                            }
                            // or if the data is null, then there was a timeout.
                            if (data == null) {
                                // Inject a non field error alerting the user
                                // that there's been a timeout error.
                                data = {};
                                data['status'] = 0;
                                data['non_field_errors'] = ["Server timed out. Please try again."];
                            }
                        }
                        var theResponse = {data: data, status: status, headers: headers, config: config};
                        deferred.reject(theResponse);

                    }));
                return deferred.promise;
            },
            'user': function () {
                return this.request({
                    'method': "GET",
                    'url': "/rest-auth/user/"
                });
            },

        };
        return service;
    });