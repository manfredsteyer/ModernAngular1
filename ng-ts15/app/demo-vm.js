///<reference path="../typings/angularjs/angular.d.ts" />
System.register([], function(exports_1) {
    var DemoVM;
    return {
        setters:[],
        execute: function() {
            DemoVM = (function () {
                function DemoVM($log) {
                    $log.debug('Hallo Welt!');
                    this.$log = $log;
                    this.info = "Hallo Welt!";
                }
                DemoVM.prototype.doStuff = function () {
                    this.$log.debug("stuff done ...");
                };
                return DemoVM;
            })();
            exports_1("DemoVM", DemoVM);
        }
    }
});
//# sourceMappingURL=demo-vm.js.map