System.register("home/home", [], function (_export) {
    "use strict";

    var HomeController;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            HomeController = function HomeController($log) {
                _classCallCheck(this, HomeController);

                this.$log = $log;
                $log.log("HomeController wurde gestartet");
            };

            _export("HomeController", HomeController);
        }
    };
});
//# sourceMappingURL=../home/home.js.map