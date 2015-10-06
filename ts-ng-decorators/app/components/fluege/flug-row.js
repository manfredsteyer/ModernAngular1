System.register(['./../decorators/directive'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var directive_1;
    var FlugRow;
    return {
        setters:[
            function (directive_1_1) {
                directive_1 = directive_1_1;
            }],
        execute: function() {
            FlugRow = (function () {
                function FlugRow($log) {
                    $log.debug("FlugRow created ...");
                    this.$log = $log;
                }
                FlugRow.link = function (scope, elm, attrs) {
                    scope.vm.$log.debug(scope.vm);
                };
                FlugRow.prototype.select = function () {
                    this.selected = this.flug;
                };
                FlugRow = __decorate([
                    directive_1.Directive({
                        scope: {
                            'flug': '=',
                            'selected': '='
                        },
                        restrict: 'EA',
                        replace: true,
                        templateUrl: 'app/components/fluege/flug-row.html'
                    })
                ], FlugRow);
                return FlugRow;
            })();
            exports_1("FlugRow", FlugRow);
        }
    }
});
//# sourceMappingURL=flug-row.js.map