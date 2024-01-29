import { Component, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var _c0 = ["panelFooter"];
function PanelDashboardComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵprojection(1, 6);
    i0.ɵɵprojection(2, 7);
    i0.ɵɵprojection(3, 8);
    i0.ɵɵprojection(4, 9);
    i0.ɵɵprojection(5, 10);
    i0.ɵɵelementEnd();
} }
function PanelDashboardComponent_div_0_h4_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r48 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r48.title);
} }
var _c1 = function (a0, a1) { return [a0, a1]; };
function PanelDashboardComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵprojection(1, 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r49 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c1, ctx_r49.collapse ? "d-none" : "", ctx_r49.bodyClass ? ctx_r49.bodyClass : ""));
} }
var _c2 = function (a0, a1, a2, a3) { return [a0, a1, a2, a3]; };
var _c3 = function (a0) { return [a0]; };
function PanelDashboardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵtemplate(2, PanelDashboardComponent_div_0_div_2_Template, 6, 0, "div", 3);
    i0.ɵɵtemplate(3, PanelDashboardComponent_div_0_h4_3_Template, 2, 1, "h4", 4);
    i0.ɵɵprojection(4);
    i0.ɵɵelementEnd();
    i0.ɵɵprojection(5, 1);
    i0.ɵɵtemplate(6, PanelDashboardComponent_div_0_div_6_Template, 2, 4, "div", 5);
    i0.ɵɵprojection(7, 2);
    i0.ɵɵprojection(8, 3);
    i0.ɵɵelementStart(9, "div", 6, 7);
    i0.ɵɵprojection(11, 4);
    i0.ɵɵelementEnd();
    i0.ɵɵprojection(12, 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r46 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(6, _c2, ctx_r46.expand ? "panel-expand" : "", ctx_r46.reload ? "panel-loading" : "", ctx_r46.panelClass ? ctx_r46.panelClass : "", ctx_r46.variant ? "panel-" + ctx_r46.variant : "panel-inverse"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r46.noButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r46.title);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r46.noBody);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("hidden", !ctx_r46.showFooter)("ngClass", i0.ɵɵpureFunction1(11, _c3, ctx_r46.footerClass ? ctx_r46.footerClass : ""));
} }
var _c4 = [[["", "header", ""]], [["", "beforeBody", ""]], [["", "noBody", ""]], [["", "outsideBody", ""]], [["", "footer", ""]], [["", "afterFooter", ""]], [["", "download", ""]], [["", "expand", ""]], [["", "refresh", ""]], [["", "downloadButton", ""]], [["", "tablePanelPaginator", ""]], "*"];
var _c5 = ["[header]", "[beforeBody]", "[noBody]", "[outsideBody]", "[footer]", "[afterFooter]", "[download]", "[expand]", "[refresh]", "[downloadButton]", "[tablePanelPaginator]", "*"];
var PanelDashboardComponent = /** @class */ (function () {
    function PanelDashboardComponent() {
        this.expand = false;
        this.reload = false;
        this.remove = false;
        this.showFooter = false;
    }
    PanelDashboardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.showFooter = _this.panelFooter.nativeElement && _this.panelFooter.nativeElement.children.length > 0;
        });
    };
    PanelDashboardComponent.prototype.panelExpand = function () {
        this.expand = !this.expand;
    };
    PanelDashboardComponent.prototype.panelRemove = function () {
        confirm("Are Your Sure !");
        this.remove = !this.remove;
    };
    PanelDashboardComponent.ɵfac = function PanelDashboardComponent_Factory(t) { return new (t || PanelDashboardComponent)(); };
    PanelDashboardComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PanelDashboardComponent, selectors: [["app-panel-dashboard"]], viewQuery: function PanelDashboardComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.panelFooter = _t.first);
        } }, inputs: { title: "title", variant: "variant", noBody: "noBody", noButton: "noButton", bodyClass: "bodyClass", footerClass: "footerClass", panelClass: "panelClass" }, ngContentSelectors: _c5, decls: 1, vars: 1, consts: [["class", "panel panel-inverse h-100", 3, "ngClass", 4, "ngIf"], [1, "panel", "panel-inverse", "h-100", 3, "ngClass"], [1, "panel-heading"], ["class", "panel-heading-btn", 4, "ngIf"], ["class", "panel-title", 4, "ngIf"], ["class", "panel-body", "style", "padding: 0px; height: 90%", 3, "ngClass", 4, "ngIf"], [1, "panel-footer", 3, "hidden", "ngClass"], ["panelFooter", ""], [1, "panel-heading-btn"], [1, "panel-title"], [1, "panel-body", 2, "padding", "0px", "height", "90%", 3, "ngClass"]], template: function PanelDashboardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c4);
            i0.ɵɵtemplate(0, PanelDashboardComponent_div_0_Template, 13, 13, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.remove);
        } }, directives: [i1.NgIf, i1.NgClass], styles: [".panel-heading[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-direction:row-reverse;align-items:center}"] });
    return PanelDashboardComponent;
}());
export { PanelDashboardComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PanelDashboardComponent, [{
        type: Component,
        args: [{
                selector: 'app-panel-dashboard',
                inputs: ['title', 'variant', 'noBody', 'noButton', 'bodyClass', 'footerClass', 'panelClass'],
                templateUrl: './panel-dashboard.component.html',
                styleUrls: ['./panel-dashboard.component.css']
            }]
    }], null, { panelFooter: [{
            type: ViewChild,
            args: ['panelFooter']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsb2JhbC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvcGFuZWwvcGFuZWwtZGFzaGJvYXJkL3BhbmVsLWRhc2hib2FyZC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50L3BhbmVsL3BhbmVsLWRhc2hib2FyZC9wYW5lbC1kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztJQ2FoRSw4QkFDRTtJQUFBLHFCQUFnQztJQUVoQyxxQkFBOEI7SUFDOUIscUJBQStCO0lBQy9CLHFCQUFzQztJQUN0QyxzQkFBMkM7SUFHN0MsaUJBQU07OztJQUNOLDZCQUEyQztJQUFBLFlBQVc7SUFBQSxpQkFBSzs7O0lBQWhCLGVBQVc7SUFBWCxtQ0FBVzs7OztJQVV4RCwrQkFTRTtJQUFBLHNCQUFZO0lBRWQsaUJBQU07OztJQVRKLGtJQUdFOzs7OztJQXJDTiw4QkFVRTtJQUNBLDhCQUNFO0lBQUEsOEVBQ0U7SUFTRiw0RUFBMkM7SUFDM0Msa0JBQThCO0lBQ2hDLGlCQUFNO0lBSU4scUJBQWtDO0lBSWxDLDhFQVNFO0lBTUYscUJBQThCO0lBSTlCLHFCQUFtQztJQUluQyxpQ0FNRTtJQUFBLHNCQUE4QjtJQUNoQyxpQkFBTTtJQUlOLHNCQUFtQztJQUVyQyxpQkFBTTs7O0lBbEVKLCtPQUtFO0lBSytCLGVBQXNCO0lBQXRCLHdDQUFzQjtJQVU3QixlQUFrQjtJQUFsQixvQ0FBa0I7SUFnQjFDLGVBQW9CO0lBQXBCLHNDQUFvQjtJQW9CcEIsZUFBc0I7SUFBdEIsNENBQXNCLHdGQUFBOzs7O0FEekQxQjtJQUFBO1FBZ0JFLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGVBQVUsR0FBRyxLQUFLLENBQUM7S0FpQnBCO0lBZkMsaURBQWUsR0FBZjtRQUFBLGlCQUlDO1FBSEMsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsSUFBSSxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN6RyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw2Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUdELDZDQUFXLEdBQVg7UUFDRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDO2tHQTdCVSx1QkFBdUI7Z0VBQXZCLHVCQUF1Qjs7Ozs7OztZQ1BwQywwRUFVRTs7WUFGQSxrQ0FBb0I7O2tDRFR0QjtDQXNDQyxBQXBDRCxJQW9DQztTQTlCWSx1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQU5uQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFDO2dCQUM1RixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzthQUMvQzs7a0JBRUUsU0FBUzttQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXBhbmVsLWRhc2hib2FyZCcsXHJcbiAgaW5wdXRzOiBbJ3RpdGxlJywgJ3ZhcmlhbnQnLCAnbm9Cb2R5JywgJ25vQnV0dG9uJywgJ2JvZHlDbGFzcycsICdmb290ZXJDbGFzcycsICdwYW5lbENsYXNzJ10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BhbmVsLWRhc2hib2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGFuZWwtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFuZWxEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyAgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQFZpZXdDaGlsZCgncGFuZWxGb290ZXInKSBwYW5lbEZvb3RlcjtcclxuICB0aXRsZTpzdHJpbmc7XHJcbiAgdmFyaWFudDpib29sZWFuO1xyXG4gIG5vQm9keTpib29sZWFuO1xyXG4gIG5vQnV0dG9uOmJvb2xlYW47XHJcbiAgYm9keUNsYXNzOmJvb2xlYW47XHJcbiAgZm9vdGVyQ2xhc3M6Ym9vbGVhbjtcclxuICBwYW5lbENsYXNzOmJvb2xlYW47XHJcbiAgY29sbGFwc2U6Ym9vbGVhbjtcclxuICBleHBhbmQgPSBmYWxzZTtcclxuICByZWxvYWQgPSBmYWxzZTtcclxuICByZW1vdmUgPSBmYWxzZTtcclxuICBzaG93Rm9vdGVyID0gZmFsc2U7XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNob3dGb290ZXIgPSB0aGlzLnBhbmVsRm9vdGVyLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5wYW5lbEZvb3Rlci5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDA7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHBhbmVsRXhwYW5kKCkge1xyXG4gICAgdGhpcy5leHBhbmQgPSAhdGhpcy5leHBhbmQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIHBhbmVsUmVtb3ZlKCkge1xyXG4gICAgY29uZmlybShcIkFyZSBZb3VyIFN1cmUgIVwiKTtcclxuICAgIHRoaXMucmVtb3ZlID0gIXRoaXMucmVtb3ZlO1xyXG4gIH1cclxufVxyXG4iLCI8IS0tIGJlZ2luIHBhbmVsIC0tPlxyXG48ZGl2XHJcbiAgY2xhc3M9XCJwYW5lbCBwYW5lbC1pbnZlcnNlIGgtMTAwXCJcclxuICBbbmdDbGFzc109XCJbXHJcbiAgICB0aGlzLmV4cGFuZCA/ICdwYW5lbC1leHBhbmQnIDogJycsXHJcbiAgICB0aGlzLnJlbG9hZCA/ICdwYW5lbC1sb2FkaW5nJyA6ICcnLFxyXG4gICAgdGhpcy5wYW5lbENsYXNzID8gdGhpcy5wYW5lbENsYXNzIDogJycsXHJcbiAgICB0aGlzLnZhcmlhbnQgPyAncGFuZWwtJyArIHRoaXMudmFyaWFudCA6ICdwYW5lbC1pbnZlcnNlJ1xyXG4gIF1cIlxyXG4gICpuZ0lmPVwiIXRoaXMucmVtb3ZlXCJcclxuPlxyXG4gIDwhLS0gYmVnaW4gcGFuZWwtaGVhZGluZyAtLT5cclxuICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmctYnRuXCIgKm5nSWY9XCIhdGhpcy5ub0J1dHRvblwiPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbZG93bmxvYWRdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICA8IS0tIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cImJ0biBidG4teHMgYnRuLWljb24gYnRuLWNpcmNsZSBidG4tZGVmYXVsdFwiIChjbGljayk9XCJwYW5lbEV4cGFuZCgpXCIgdGl0bGU9XCJjbGljayB0byBleHBhbmRcIj48aSBjbGFzcz1cImZhIGZhLWV4cGFuZFwiPjwvaT48L2E+IC0tPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbZXhwYW5kXVwiPjwvbmctY29udGVudD5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3JlZnJlc2hdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbZG93bmxvYWRCdXR0b25dXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdGFibGVQYW5lbFBhZ2luYXRvcl1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwhLS0gPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwiYnRuIGJ0bi14cyBidG4taWNvbiBidG4tY2lyY2xlIGJ0bi1zdWNjZXNzXCIgKGNsaWNrKT1cInBhbmVsUmVsb2FkKClcIiB0aXRsZT1cImNsaWNrIHRvIHJlZnJlc2hcIj48aSBjbGFzcz1cImZhIGZhLXJlZG9cIj48L2k+PC9hPiAtLT5cclxuICAgICAgPCEtLSA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJidG4gYnRuLXhzIGJ0bi1pY29uIGJ0bi1jaXJjbGUgYnRuLWRhbmdlclwiIChjbGljayk9XCJwYW5lbFJlbW92ZSgpXCIgdGl0bGU9XCJjbGljayB0byByZW1vdmUgZnJvbSBjYW52YXNcIj48aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPjwvYT4gLS0+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxoNCBjbGFzcz1cInBhbmVsLXRpdGxlXCIgKm5nSWY9XCJ0aGlzLnRpdGxlXCI+e3sgdGl0bGUgfX08L2g0PlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2hlYWRlcl1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbiAgPCEtLSBlbmQgcGFuZWwtaGVhZGluZyAtLT5cclxuXHJcbiAgPCEtLSBiZWdpbiBiZWZvcmUtYm9keSAtLT5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbYmVmb3JlQm9keV1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPCEtLSBlbmQgYmVmb3JlLWJvZHkgLS0+XHJcblxyXG4gIDwhLS0gYmVnaW4gcGFuZWwtYm9keSAtLT5cclxuICA8ZGl2XHJcbiAgICBjbGFzcz1cInBhbmVsLWJvZHlcIlxyXG4gICAgW25nQ2xhc3NdPVwiW1xyXG4gICAgICB0aGlzLmNvbGxhcHNlID8gJ2Qtbm9uZScgOiAnJyxcclxuICAgICAgdGhpcy5ib2R5Q2xhc3MgPyB0aGlzLmJvZHlDbGFzcyA6ICcnXHJcbiAgICBdXCJcclxuICAgICpuZ0lmPVwiIXRoaXMubm9Cb2R5XCJcclxuICAgIHN0eWxlPVwicGFkZGluZzogMHB4OyBoZWlnaHQ6IDkwJVwiXHJcbiAgPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPCEtLSA8ZGl2IGNsYXNzPVwicGFuZWwtbG9hZGVyXCIgKm5nSWY9XCJ0aGlzLnJlbG9hZFwiPjxzcGFuIGNsYXNzPVwic3Bpbm5lci1zbWFsbFwiPjwvc3Bhbj48L2Rpdj4gLS0+XHJcbiAgPC9kaXY+XHJcbiAgPCEtLSBlbmQgcGFuZWwtYm9keSAtLT5cclxuXHJcbiAgPCEtLSBiZWdpbiBuby1ib2R5IC0tPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIltub0JvZHldXCI+PC9uZy1jb250ZW50PlxyXG4gIDwhLS0gZW5kIG5vLWJvZHkgLS0+XHJcblxyXG4gIDwhLS0gYmVnaW4gb3V0c2lkZS1ib2R5IC0tPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIltvdXRzaWRlQm9keV1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPCEtLSBlbmQgb3V0c2lkZS1ib2R5IC0tPlxyXG5cclxuICA8IS0tIGJlZ2luIHBhbmVsLWZvb3RlciAtLT5cclxuICA8ZGl2XHJcbiAgICBjbGFzcz1cInBhbmVsLWZvb3RlclwiXHJcbiAgICAjcGFuZWxGb290ZXJcclxuICAgIFtoaWRkZW5dPVwiIXNob3dGb290ZXJcIlxyXG4gICAgW25nQ2xhc3NdPVwiW3RoaXMuZm9vdGVyQ2xhc3MgPyB0aGlzLmZvb3RlckNsYXNzIDogJyddXCJcclxuICA+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbZm9vdGVyXVwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuICA8IS0tIGVuZCBwYW5lbC1mb290ZXIgLS0+XHJcblxyXG4gIDwhLS0gYmVnaW4gYWZ0ZXItZm9vdGVyIC0tPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIlthZnRlckZvb3Rlcl1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPCEtLSBlbmQgYWZ0ZXItZm9vdGVyIC0tPlxyXG48L2Rpdj5cclxuPCEtLSBlbmQgcGFuZWwgLS0+XHJcbiJdfQ==