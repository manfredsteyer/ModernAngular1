System.register(['./components/decorators/component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var component_1;
    var FlugVM;
    return {
        setters:[
            function (component_1_1) {
                component_1 = component_1_1;
            }],
        execute: function() {
            FlugVM = (function () {
                function FlugVM(flugService, $log) {
                    this.flugVonFilter = "Graz";
                    this.flugNachFilter = "Hamburg";
                    this.$log = $log;
                    this.flugService = flugService;
                }
                FlugVM.prototype.loadFluege = function () {
                    var _this = this;
                    this.flugService
                        .find(this.flugVonFilter, this.flugNachFilter)
                        .then(function (result) {
                        _this.fluege = result.data;
                    }).catch(function (p) {
                        _this.message = "Beim Laden der Daten ist ein Fehler aufgetreten";
                        _this.$log.error("Fehler beim Laden von Flügen");
                        _this.$log.error(p.data);
                        _this.$log.error(p.status);
                    });
                };
                FlugVM.prototype.selectFlug = function (flug) {
                    this.selectedFlug = flug;
                };
                FlugVM = __decorate([
                    component_1.Component({
                        injectables: ['flugService', '$log']
                    })
                ], FlugVM);
                return FlugVM;
            })();
            exports_1("FlugVM", FlugVM);
        }
    }
});
//# sourceMappingURL=flug-vm.js.map