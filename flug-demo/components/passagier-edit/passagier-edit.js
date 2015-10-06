System.register("passagier-edit/passagier-edit", [], function (_export) {
    "use strict";

    var PassagierEditController;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            PassagierEditController = (function () {
                function PassagierEditController($http, $log, baseUrl, $window, $routeParams) {
                    _classCallCheck(this, PassagierEditController);

                    this.$http = $http;
                    this.$log = $log;
                    this.baseUrl = baseUrl;
                    this.$window = $window;

                    this.exitWarning = {
                        show: false
                    };

                    this.load($routeParams.id);
                }

                _createClass(PassagierEditController, [{
                    key: "activate",
                    value: function activate($scope) {
                        this.$scope = $scope;
                        this.$log.info("activate");
                    }
                }, {
                    key: "canDeactivate",
                    value: function canDeactivate($q) {
                        var _this = this;

                        this.$log.info("canDeactivate");

                        if (!this.$scope.form.$dirty) return true;

                        return $q(function (resolve, reject) {
                            _this.exitWarning = {
                                show: true,
                                reject: reject,
                                resolve: resolve
                            };
                        })["finally"](function () {
                            _this.exitWarning.show = false;
                        });
                    }
                }, {
                    key: "load",
                    value: function load(id) {
                        var that = this;

                        var params = {};
                        params.pNummer = id;

                        this.$http.get(that.baseUrl + "/api/passagier", { params: params }).then(function (result) {

                            that.passagier = result.data;
                        })["catch"](function (p) {

                            that.message = "Beim Laden der Daten ist ein Fehler aufgetreten";
                            that.$log.error("Fehler beim Laden von Passagieren");
                            that.$log.error(p.data.message);
                            that.$log.error(p.data.status);
                        });
                    }
                }, {
                    key: "save",
                    value: function save() {
                        var that = this;

                        this.$http.post(that.baseUrl + "/api/passagier", this.passagier).then(function (result) {
                            that.message = "Passagier wurde gespeichert!";
                            that.$scope.form.$setDirty(false);
                        })["catch"](function (p) {
                            that.message = "Beim Speichern der Daten ist ein Fehler aufgetreten: " + p.data;

                            that.$log.error("Fehler beim Speichern von Passagieren: ");
                            that.$log.error(p.data);
                            that.$log.error(p.status);
                        });
                    }
                }]);

                return PassagierEditController;
            })();

            _export("PassagierEditController", PassagierEditController);
        }
    };
});
//# sourceMappingURL=../passagier-edit/passagier-edit.js.map