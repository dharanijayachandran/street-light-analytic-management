import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
var HyphenPipe = /** @class */ (function () {
    function HyphenPipe() {
    }
    HyphenPipe.prototype.transform = function (value) {
        return (value) ? value : ('-');
    };
    HyphenPipe.ɵfac = function HyphenPipe_Factory(t) { return new (t || HyphenPipe)(); };
    HyphenPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "hyphen", type: HyphenPipe, pure: true });
    return HyphenPipe;
}());
export { HyphenPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HyphenPipe, [{
        type: Pipe,
        args: [{
                name: 'hyphen'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHlwaGVuLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nbG9iYWwvIiwic291cmNlcyI6WyJsaWIvcGlwZS9oeXBlbi9oeXBoZW4ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFFcEQ7SUFBQTtLQVNDO0lBSlEsOEJBQVMsR0FBaEIsVUFBaUIsS0FBYTtRQUM1QixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO3dFQUpVLFVBQVU7K0RBQVYsVUFBVTtxQkFMdkI7Q0FXQyxBQVRELElBU0M7U0FOWSxVQUFVO2tEQUFWLFVBQVU7Y0FIdEIsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxRQUFRO2FBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2h5cGhlbidcclxufSlcclxuZXhwb3J0IGNsYXNzIEh5cGhlblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgcHVibGljIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAodmFsdWUpID8gdmFsdWUgOiAoJy0nKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==