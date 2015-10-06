System.register("demo-vm", [], function (_export) {
    "use strict";

    var DemoVM;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            DemoVM = (function () {
                function DemoVM($http, $log) {
                    _classCallCheck(this, DemoVM);

                    this.$http = $http;
                    this.$log = $log;

                    $log.log("DemoCtrl has been created ...");
                    this.info = "Hallo Welt!!";
                }

                _createClass(DemoVM, [{
                    key: "doStuff",
                    value: function doStuff() {
                        this.$log.debug("stuff ...");
                    }
                }, {
                    key: "load",
                    value: function load() {
                        var _this = this;

                        this.$log.log("running load() ...");

                        var url = "http://www.angular.at/api/flug";
                        this.$http.get(url).then(function (result) {
                            _this.flugCount = result.data.length;
                        })["catch"](function (result) {
                            _this.flugCount = "Fehler beim Ausführen des Services: " + result.status;
                        });
                    }
                }]);

                return DemoVM;
            })();

            _export("DemoVM", DemoVM);
        }
    };
});
//# sourceMappingURL=demo-vm.js.map
