System.register('flug-buchen/flug-buchen', [], function (_export) {
    'use strict';

    var FlugBuchenController;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            FlugBuchenController = (function () {
                function FlugBuchenController($http, $log, baseUrl, $router) {
                    _classCallCheck(this, FlugBuchenController);

                    this.$http = $http;
                    this.$log = $log;
                    this.baseUrl = baseUrl;

                    $router.config([{ path: '/', component: 'passagier' }, { path: '/passagier', component: 'passagier' }, { path: '/flug', component: 'flug' }, { path: '/buchen', component: 'buchen' }, { path: '/passagier/:id', component: 'passagierEdit' }]);
                }

                _createClass(FlugBuchenController, [{
                    key: 'clearMessage',
                    value: function clearMessage() {
                        this.message = "";
                    }
                }, {
                    key: 'loadPassagiere',
                    value: function loadPassagiere() {

                        var that = this;

                        var params = {};

                        if (that.passagierNameFilter) {
                            params.name = that.passagierNameFilter;
                        } else if (that.passagierNrFilter) {
                            params.pNummer = that.passagierNrFilter;
                        }

                        this.$http.get(this.baseUrl + "/api/passagier", { params: params }).then(function (result) {

                            that.processPassagiere(result.data);
                        })['catch'](function (p) {

                            that.message = "Beim Laden der Daten ist ein Fehler aufgetreten";

                            that.$log.error("Fehler beim Laden von Passagieren");
                            that.$log.error(p.data);
                            that.$log.error(p.status);
                        });
                    }
                }, {
                    key: 'processPassagiere',
                    value: function processPassagiere(p) {

                        if (angular.isArray(p)) {
                            this.passagiere = p;
                        } else {
                            this.passagiere = [p];
                        }
                    }
                }, {
                    key: 'selectPassagier',
                    value: function selectPassagier(p) {
                        this.selectedPassagier = p;
                    }
                }, {
                    key: 'loadFluege',
                    value: function loadFluege() {

                        var that = this;
                        var params = {};

                        if (this.flugNrFilter) {
                            params.flugNummer = this.flugNrFilter;
                        } else if (this.flugVonFilter && this.flugNachFilter) {
                            params.abflugOrt = this.flugVonFilter;
                            params.zielOrt = this.flugNachFilter;
                        }

                        this.$http.get(this.baseUrl + "/api/flug", { params: params }).then(function (result) {

                            var passagiere = result.data;
                            that.processFluege(passagiere);
                        })['catch'](function (p) {
                            that.message = "Beim Laden der Daten ist ein Fehler aufgetreten";

                            that.$log.error("Fehler beim Laden von Flügen");
                            that.$log.error(p.data);
                            that.$log.error(p.status);
                        });
                    }
                }, {
                    key: 'processFluege',
                    value: function processFluege(fluege) {

                        if (!angular.isArray(fluege)) {
                            var flug = fluege;
                            this.fluege = new Array(flug);
                        } else {
                            this.fluege = fluege;
                        }
                    }
                }, {
                    key: 'selectFlug',
                    value: function selectFlug(flug) {
                        this.selectedFlug = flug;
                    }
                }, {
                    key: 'buchen',
                    value: function buchen() {

                        var that = this;

                        if (!this.selectedFlug || !this.selectedPassagier) {
                            this.message = "Bitte wählen Sie einen Flug und einen Passagier aus!";
                            return;
                        }

                        var buchung = {
                            FlugID: that.selectedFlug.id,
                            PassagierID: that.selectedPassagier.id
                        };

                        that.$http.post(this.baseUrl + "/api/buchung", buchung).then(function (result) {
                            that.message = "Gebucht!";
                        })['catch'](function (reason) {
                            that.message = "Der Flug konnte nicht gebucht werden: " + reason;
                        });
                    }
                }, {
                    key: 'processBuchungen',
                    value: function processBuchungen(fluege) {
                        this.buchungen = fluege;
                    }
                }]);

                return FlugBuchenController;
            })();

            _export('FlugBuchenController', FlugBuchenController);
        }
    };
});
//# sourceMappingURL=../flug-buchen/flug-buchen.js.map