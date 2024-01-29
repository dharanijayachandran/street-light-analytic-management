import { Directive, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
var NumberDirective = /** @class */ (function () {
    function NumberDirective(_el) {
        this._el = _el;
    }
    NumberDirective.prototype.onInputChange = function (event) {
        var initalValue = this._el.nativeElement.value;
        // this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
        this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
        if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
    };
    NumberDirective.ɵfac = function NumberDirective_Factory(t) { return new (t || NumberDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    NumberDirective.ɵdir = i0.ɵɵdefineDirective({ type: NumberDirective, selectors: [["input", "numbersOnly", ""]], hostBindings: function NumberDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("input", function NumberDirective_input_HostBindingHandler($event) { return ctx.onInputChange($event); });
        } } });
    return NumberDirective;
}());
export { NumberDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NumberDirective, [{
        type: Directive,
        args: [{
                selector: 'input[numbersOnly]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { onInputChange: [{
            type: HostListener,
            args: ['input', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVycy1vbmx5LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsb2JhbC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmUvbnVtYmVyLXZhbGlkYXRlL251bWJlcnMtb25seS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRXBFO0lBS0UseUJBQW9CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO0lBQUksQ0FBQztJQUVMLHVDQUFhLEdBQWhELFVBQWlELEtBQUs7UUFDcEQsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ2pELHNFQUFzRTtRQUN0RSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbkUsSUFBSyxXQUFXLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO1lBQ2pELEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7a0ZBWFUsZUFBZTt3REFBZixlQUFlOzs7MEJBTDVCO0NBa0JDLEFBaEJELElBZ0JDO1NBYlksZUFBZTtrREFBZixlQUFlO2NBSDNCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2FBQy9COztrQkFLRSxZQUFZO21CQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2lucHV0W251bWJlcnNPbmx5XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE51bWJlckRpcmVjdGl2ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmKSB7IH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKSBvbklucHV0Q2hhbmdlKGV2ZW50KSB7XHJcbiAgICBjb25zdCBpbml0YWxWYWx1ZSA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQudmFsdWU7XHJcbiAgICAvLyB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gaW5pdGFsVmFsdWUucmVwbGFjZSgvW14wLTldKi9nLCAnJyk7XHJcbiAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gaW5pdGFsVmFsdWUucmVwbGFjZSgvW14wLTldKi9nLCAnJyk7XHJcbiAgICBpZiAoIGluaXRhbFZhbHVlICE9PSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnZhbHVlKSB7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0iXX0=