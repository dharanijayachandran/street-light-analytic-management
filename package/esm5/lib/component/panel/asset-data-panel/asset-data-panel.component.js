import { __makeTemplateObject } from "tslib";
import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/tooltip";
var _c0 = ["panelFooter"];
var _c1 = ["ClicktoMaximize"];
var _c2 = ["ClicktoMinimize"];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Click to Maximize
     * @meaning Tooltip
     */ 
    var MSG_EXTERNAL_clickToMaximize$$LIB_COMPONENT_PANEL_ASSET_DATA_PANEL_ASSET_DATA_PANEL_COMPONENT_TS___4 = goog.getMsg("Click to Maximize\n      ");
    I18N_3 = MSG_EXTERNAL_clickToMaximize$$LIB_COMPONENT_PANEL_ASSET_DATA_PANEL_ASSET_DATA_PANEL_COMPONENT_TS___4;
}
else {
    I18N_3 = $localize(templateObject_1 || (templateObject_1 = __makeTemplateObject([":Tooltip|Click to Maximize@@clickToMaximize\u241Fd3ae1fa38badb5b73a7e641a0d49c133822b282b\u241F3032891634008695815:Click to Maximize\n      "], [":Tooltip|Click to Maximize@@clickToMaximize\u241Fd3ae1fa38badb5b73a7e641a0d49c133822b282b\u241F3032891634008695815:Click to Maximize\n      "])));
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Click to Minimize
     * @meaning Tooltip
     */ 
    var MSG_EXTERNAL_clickToMinimize$$LIB_COMPONENT_PANEL_ASSET_DATA_PANEL_ASSET_DATA_PANEL_COMPONENT_TS___6 = goog.getMsg("Click to Minimize\n      ");
    I18N_5 = MSG_EXTERNAL_clickToMinimize$$LIB_COMPONENT_PANEL_ASSET_DATA_PANEL_ASSET_DATA_PANEL_COMPONENT_TS___6;
}
else {
    I18N_5 = $localize(templateObject_2 || (templateObject_2 = __makeTemplateObject([":Tooltip|Click to Minimize@@clickToMinimize\u241F84f6e9d195f29131c63926cd079ee6fe0a844150\u241F7039613234896747790:Click to Minimize\n      "], [":Tooltip|Click to Minimize@@clickToMinimize\u241F84f6e9d195f29131c63926cd079ee6fe0a844150\u241F7039613234896747790:Click to Minimize\n      "])));
}
function AssetDataPanelComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵprojection(1, 6);
    i0.ɵɵelementStart(2, "a", 9);
    i0.ɵɵlistener("click", function AssetDataPanelComponent_div_0_div_2_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r42); var ctx_r41 = i0.ɵɵnextContext(2); return ctx_r41.panelExpand(); });
    i0.ɵɵelement(3, "i", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵprojection(4, 7);
    i0.ɵɵprojection(5, 8);
    i0.ɵɵelementStart(6, "template", null, 11);
    i0.ɵɵi18n(8, I18N_3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "template", null, 12);
    i0.ɵɵi18n(11, I18N_5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r35 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r35.screenStatus);
} }
function AssetDataPanelComponent_div_0_h4_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r36 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r36.title);
} }
function AssetDataPanelComponent_div_0_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelement(1, "span", 17);
    i0.ɵɵelementEnd();
} }
var _c7 = function (a0, a1) { return [a0, a1]; };
function AssetDataPanelComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵprojection(1, 9);
    i0.ɵɵtemplate(2, AssetDataPanelComponent_div_0_div_6_div_2_Template, 2, 0, "div", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r37 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c7, ctx_r37.collapse ? "d-none" : "", ctx_r37.bodyClass ? ctx_r37.bodyClass : ""));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r37.reload);
} }
var _c8 = function (a0, a1, a2, a3) { return [a0, a1, a2, a3]; };
var _c9 = function (a0) { return [a0]; };
function AssetDataPanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵtemplate(2, AssetDataPanelComponent_div_0_div_2_Template, 12, 1, "div", 3);
    i0.ɵɵtemplate(3, AssetDataPanelComponent_div_0_h4_3_Template, 2, 1, "h4", 4);
    i0.ɵɵprojection(4);
    i0.ɵɵelementEnd();
    i0.ɵɵprojection(5, 1);
    i0.ɵɵtemplate(6, AssetDataPanelComponent_div_0_div_6_Template, 3, 5, "div", 5);
    i0.ɵɵprojection(7, 2);
    i0.ɵɵprojection(8, 3);
    i0.ɵɵelementStart(9, "div", 6, 7);
    i0.ɵɵprojection(11, 4);
    i0.ɵɵelementEnd();
    i0.ɵɵprojection(12, 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r34 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(6, _c8, ctx_r34.expand ? "panel-expand" : "", ctx_r34.reload ? "panel-loading" : "", ctx_r34.panelClass ? ctx_r34.panelClass : "", ctx_r34.variant ? "panel-" + ctx_r34.variant : "panel-inverse"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r34.noButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r34.title);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r34.noBody);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("hidden", !ctx_r34.showFooter)("ngClass", i0.ɵɵpureFunction1(11, _c9, ctx_r34.footerClass ? ctx_r34.footerClass : ""));
} }
var _c10 = [[["", "header", ""]], [["", "beforeBody", ""]], [["", "noBody", ""]], [["", "outsideBody", ""]], [["", "footer", ""]], [["", "afterFooter", ""]], [["", "download", ""]], [["", "refresh", ""]], [["", "remove", ""]], "*"];
var _c11 = ["[header]", "[beforeBody]", "[noBody]", "[outsideBody]", "[footer]", "[afterFooter]", "[download]", "[refresh]", "[remove]", "*"];
var AssetDataPanelComponent = /** @class */ (function () {
    function AssetDataPanelComponent(cdr) {
        this.cdr = cdr;
        this.screenStatus = "";
        this.expand = false;
        this.reload = false;
        this.remove = false;
        this.showFooter = false;
        this.removeLineChart = new EventEmitter();
    }
    AssetDataPanelComponent.prototype.ngOnInit = function () {
    };
    AssetDataPanelComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.showFooter = _this.panelFooter.nativeElement && _this.panelFooter.nativeElement.children.length > 0;
        });
        this.screenStatus = this.ClicktoMaximize.nativeElement.innerText;
        this.cdr.detectChanges();
    };
    AssetDataPanelComponent.prototype.panelExpand = function () {
        this.expand = !this.expand;
        if (this.expand) {
            //  this.screenStatus = "Click to Minimize";
            this.screenStatus = this.ClicktoMinimize.nativeElement.innerText;
        }
        else {
            // this.screenStatus = "Click to Maximize";
            this.screenStatus = this.ClicktoMaximize.nativeElement.innerText;
        }
    };
    AssetDataPanelComponent.prototype.panelRemove = function (id) {
        var _this = this;
        this.removeLineChart.emit();
        setTimeout(function () {
            _this.reload = false;
        }, 1500);
    };
    AssetDataPanelComponent.ɵfac = function AssetDataPanelComponent_Factory(t) { return new (t || AssetDataPanelComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    AssetDataPanelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AssetDataPanelComponent, selectors: [["app-asset-data-panel"]], viewQuery: function AssetDataPanelComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
            i0.ɵɵviewQuery(_c1, true);
            i0.ɵɵviewQuery(_c2, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.panelFooter = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ClicktoMaximize = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ClicktoMinimize = _t.first);
        } }, inputs: { title: "title", variant: "variant", noBody: "noBody", noButton: "noButton", bodyClass: "bodyClass", footerClass: "footerClass", panelClass: "panelClass" }, outputs: { removeLineChart: "removeLineChart" }, ngContentSelectors: _c11, decls: 1, vars: 1, consts: [["class", "panel panel-inverse", 3, "ngClass", 4, "ngIf"], [1, "panel", "panel-inverse", 3, "ngClass"], [1, "panel-heading"], ["class", "panel-heading-btn", 4, "ngIf"], ["class", "panel-title", 4, "ngIf"], ["class", "panel-body", "style", "border:0.5px solid #000000;padding:0px;", 3, "ngClass", 4, "ngIf"], [1, "panel-footer", 3, "hidden", "ngClass"], ["panelFooter", ""], [1, "panel-heading-btn"], ["href", "javascript:;", 1, "btn", "btn-xs", "btn-icon", "btn-circle", "btn-default", "panel-expand", 3, "matTooltip", "click"], [1, "fa", "fa-expand"], ["ClicktoMaximize", ""], ["ClicktoMinimize", ""], [1, "panel-title"], [1, "panel-body", 2, "border", "0.5px solid #000000", "padding", "0px", 3, "ngClass"], ["class", "panel-loader", 4, "ngIf"], [1, "panel-loader"], [1, "spinner-small"]], template: function AssetDataPanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c10);
            i0.ɵɵtemplate(0, AssetDataPanelComponent_div_0_Template, 13, 13, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.remove);
        } }, directives: [i1.NgIf, i1.NgClass, i2.MatTooltip], styles: [".panel-heading[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-direction:row-reverse;align-items:center}div.panel.panel-expand[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]{height:100%;margin-top:39px}.panel.panel-expand[_ngcontent-%COMP%]{overflow:hidden}"] });
    return AssetDataPanelComponent;
}());
export { AssetDataPanelComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AssetDataPanelComponent, [{
        type: Component,
        args: [{
                selector: 'app-asset-data-panel',
                inputs: ['title', 'variant', 'noBody', 'noButton', 'bodyClass', 'footerClass', 'panelClass'],
                templateUrl: './asset-data-panel.component.html',
                styleUrls: ['./asset-data-panel.component.css']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { panelFooter: [{
            type: ViewChild,
            args: ['panelFooter']
        }], ClicktoMaximize: [{
            type: ViewChild,
            args: ["ClicktoMaximize"]
        }], ClicktoMinimize: [{
            type: ViewChild,
            args: ["ClicktoMinimize"]
        }], removeLineChart: [{
            type: Output
        }] }); })();
var templateObject_1, templateObject_2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQtZGF0YS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nbG9iYWwvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L3BhbmVsL2Fzc2V0LWRhdGEtcGFuZWwvYXNzZXQtZGF0YS1wYW5lbC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50L3BhbmVsL2Fzc2V0LWRhdGEtcGFuZWwvYXNzZXQtZGF0YS1wYW5lbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBaUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ005Ryw4QkFDRTtJQUFBLHFCQUFnQztJQUVoQyw0QkFDZ0M7SUFEdUQsK0xBQXVCO0lBQzlFLHdCQUE0QjtJQUFBLGlCQUFJO0lBRWhFLHFCQUErQjtJQUUvQixxQkFBOEI7SUFFOUIsMENBQTZFO0lBQTdFLG9CQUE2RTtJQUM3RSxpQkFBVztJQUNYLDBDQUE2RTtJQUE3RSxxQkFBNkU7SUFDN0UsaUJBQVc7SUFFYixpQkFBTTs7O0lBWEYsZUFBNkI7SUFBN0IsNERBQTZCOzs7SUFZakMsOEJBQTJDO0lBQUEsWUFBUztJQUFBLGlCQUFLOzs7SUFBZCxlQUFTO0lBQVQsbUNBQVM7OztJQWFwRCwrQkFBOEM7SUFBQSwyQkFBbUM7SUFBQSxpQkFBTTs7OztJQUh6RiwrQkFFRTtJQUFBLHFCQUFZO0lBQ1oscUZBQThDO0lBQ2hELGlCQUFNOzs7SUFKa0Isa0lBQXNGO0lBR2xGLGVBQW1CO0lBQW5CLHFDQUFtQjs7Ozs7SUFsQ2pELDhCQUdFO0lBQ0EsOEJBQ0U7SUFBQSwrRUFDRTtJQWVGLDRFQUEyQztJQUMzQyxrQkFBOEI7SUFDaEMsaUJBQU07SUFJTixxQkFBa0M7SUFJbEMsOEVBRUU7SUFNRixxQkFBOEI7SUFJOUIscUJBQW1DO0lBSW5DLGlDQUVFO0lBQUEsc0JBQThCO0lBQ2hDLGlCQUFNO0lBSU4sc0JBQW1DO0lBRXJDLGlCQUFNOzs7SUF2REosK09BQTZMO0lBSTVKLGVBQXNCO0lBQXRCLHdDQUFzQjtJQWdCN0IsZUFBa0I7SUFBbEIsb0NBQWtCO0lBVzFDLGVBQW9CO0lBQXBCLHNDQUFvQjtJQWVpQixlQUFzQjtJQUF0Qiw0Q0FBc0Isd0ZBQUE7Ozs7QUQ5Qy9EO0lBdUJFLGlDQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWhCMUMsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFVMUIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZUFBVSxHQUFHLEtBQUssQ0FBQztRQTBCVCxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUF2QlQsQ0FBQztJQUUvQywwQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUNELGlEQUFlLEdBQWY7UUFBQSxpQkFNQztRQUxDLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLElBQUksS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDekcsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztRQUNqRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCw2Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsNENBQTRDO1lBQzVDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1NBQ2xFO2FBQU07WUFDTCwyQ0FBMkM7WUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7U0FDbEU7SUFDSCxDQUFDO0lBR0QsNkNBQVcsR0FBWCxVQUFZLEVBQUU7UUFBZCxpQkFLQztRQUpDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztrR0E5Q1UsdUJBQXVCO2dFQUF2Qix1QkFBdUI7Ozs7Ozs7Ozs7O1lDUHBDLDBFQUdFOztZQURBLGtDQUFvQjs7a0NESHRCO0NBeURDLEFBdkRELElBdURDO1NBakRZLHVCQUF1QjtrREFBdkIsdUJBQXVCO2NBTm5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUM7Z0JBQzVGLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2FBQ2hEOztrQkFXRSxTQUFTO21CQUFDLGFBQWE7O2tCQUt2QixTQUFTO21CQUFDLGlCQUFpQjs7a0JBQzNCLFNBQVM7bUJBQUMsaUJBQWlCOztrQkF3QjNCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWFzc2V0LWRhdGEtcGFuZWwnLFxyXG4gIGlucHV0czogWyd0aXRsZScsICd2YXJpYW50JywgJ25vQm9keScsICdub0J1dHRvbicsICdib2R5Q2xhc3MnLCAnZm9vdGVyQ2xhc3MnLCAncGFuZWxDbGFzcyddLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hc3NldC1kYXRhLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hc3NldC1kYXRhLXBhbmVsLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXNzZXREYXRhUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHNjcmVlblN0YXR1czogc3RyaW5nID0gXCJcIjtcclxuICB0aXRsZTpzdHJpbmc7XHJcbiAgdmFyaWFudDpib29sZWFuO1xyXG4gIG5vQm9keTpib29sZWFuO1xyXG4gIG5vQnV0dG9uOmJvb2xlYW47XHJcbiAgYm9keUNsYXNzOmJvb2xlYW47XHJcbiAgZm9vdGVyQ2xhc3M6Ym9vbGVhbjtcclxuICBwYW5lbENsYXNzOmJvb2xlYW47XHJcbiAgY29sbGFwc2U6Ym9vbGVhbjtcclxuICBAVmlld0NoaWxkKCdwYW5lbEZvb3RlcicpIHBhbmVsRm9vdGVyO1xyXG4gIGV4cGFuZCA9IGZhbHNlO1xyXG4gIHJlbG9hZCA9IGZhbHNlO1xyXG4gIHJlbW92ZSA9IGZhbHNlO1xyXG4gIHNob3dGb290ZXIgPSBmYWxzZTtcclxuICBAVmlld0NoaWxkKFwiQ2xpY2t0b01heGltaXplXCIpIENsaWNrdG9NYXhpbWl6ZTogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwiQ2xpY2t0b01pbmltaXplXCIpIENsaWNrdG9NaW5pbWl6ZTogRWxlbWVudFJlZjtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2hvd0Zvb3RlciA9IHRoaXMucGFuZWxGb290ZXIubmF0aXZlRWxlbWVudCAmJiB0aGlzLnBhbmVsRm9vdGVyLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMDtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zY3JlZW5TdGF0dXMgPSB0aGlzLkNsaWNrdG9NYXhpbWl6ZS5uYXRpdmVFbGVtZW50LmlubmVyVGV4dDtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHBhbmVsRXhwYW5kKCkge1xyXG4gICAgdGhpcy5leHBhbmQgPSAhdGhpcy5leHBhbmQ7XHJcbiAgICBpZiAodGhpcy5leHBhbmQpIHtcclxuICAgICAgLy8gIHRoaXMuc2NyZWVuU3RhdHVzID0gXCJDbGljayB0byBNaW5pbWl6ZVwiO1xyXG4gICAgICB0aGlzLnNjcmVlblN0YXR1cyA9IHRoaXMuQ2xpY2t0b01pbmltaXplLm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gdGhpcy5zY3JlZW5TdGF0dXMgPSBcIkNsaWNrIHRvIE1heGltaXplXCI7XHJcbiAgICAgIHRoaXMuc2NyZWVuU3RhdHVzID0gdGhpcy5DbGlja3RvTWF4aW1pemUubmF0aXZlRWxlbWVudC5pbm5lclRleHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVtb3ZlTGluZUNoYXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgcGFuZWxSZW1vdmUoaWQpIHtcclxuICAgIHRoaXMucmVtb3ZlTGluZUNoYXJ0LmVtaXQoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlbG9hZCA9IGZhbHNlO1xyXG4gICAgfSwgMTUwMCk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIiwiPCEtLSBiZWdpbiBwYW5lbCAtLT5cclxuPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWludmVyc2VcIlxyXG4gIFtuZ0NsYXNzXT1cIlsgKHRoaXMuZXhwYW5kKSA/ICdwYW5lbC1leHBhbmQnOiAnJywgKHRoaXMucmVsb2FkKSA/ICdwYW5lbC1sb2FkaW5nJzogJycsICh0aGlzLnBhbmVsQ2xhc3MpID8gdGhpcy5wYW5lbENsYXNzIDogJycsICh0aGlzLnZhcmlhbnQpID8gJ3BhbmVsLScgKyB0aGlzLnZhcmlhbnQgOiAncGFuZWwtaW52ZXJzZScgXVwiXHJcbiAgKm5nSWY9XCIhdGhpcy5yZW1vdmVcIj5cclxuICA8IS0tIGJlZ2luIHBhbmVsLWhlYWRpbmcgLS0+XHJcbiAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nLWJ0blwiICpuZ0lmPVwiIXRoaXMubm9CdXR0b25cIj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2Rvd25sb2FkXVwiPjwvbmctY29udGVudD5cclxuXHJcbiAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cImJ0biBidG4teHMgYnRuLWljb24gYnRuLWNpcmNsZSBidG4tZGVmYXVsdCBwYW5lbC1leHBhbmRcIiAoY2xpY2spPVwicGFuZWxFeHBhbmQoKVwiXHJcbiAgICAgICAgbWF0VG9vbHRpcD1cInt7c2NyZWVuU3RhdHVzfX1cIj48aSBjbGFzcz1cImZhIGZhLWV4cGFuZFwiPjwvaT48L2E+XHJcbiAgICAgICAgXHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltyZWZyZXNoXVwiPjwvbmctY29udGVudD5cclxuICAgICAgPCEtLSA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJidG4gYnRuLXhzIGJ0bi1pY29uIGJ0bi1jaXJjbGUgYnRuLXN1Y2Nlc3NcIiAoY2xpY2spPVwicGFuZWxSZWxvYWQoKVwiIHRpdGxlPVwiY2xpY2sgdG8gcmVmcmVzaFwiPjxpIGNsYXNzPVwiZmEgZmEtcmVkb1wiPjwvaT48L2E+IC0tPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbcmVtb3ZlXVwiPjwvbmctY29udGVudD5cclxuXHJcbiAgICAgIDx0ZW1wbGF0ZSAjQ2xpY2t0b01heGltaXplIGkxOG49J1Rvb2x0aXB8Q2xpY2sgdG8gTWF4aW1pemVAQGNsaWNrVG9NYXhpbWl6ZSc+Q2xpY2sgdG8gTWF4aW1pemVcclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPHRlbXBsYXRlICNDbGlja3RvTWluaW1pemUgaTE4bj0nVG9vbHRpcHxDbGljayB0byBNaW5pbWl6ZUBAY2xpY2tUb01pbmltaXplJz5DbGljayB0byBNaW5pbWl6ZVxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICAgPGg0IGNsYXNzPVwicGFuZWwtdGl0bGVcIiAqbmdJZj1cInRoaXMudGl0bGVcIj57e3RpdGxlfX08L2g0PlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2hlYWRlcl1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbiAgPCEtLSBlbmQgcGFuZWwtaGVhZGluZyAtLT5cclxuXHJcbiAgPCEtLSBiZWdpbiBiZWZvcmUtYm9keSAtLT5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbYmVmb3JlQm9keV1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPCEtLSBlbmQgYmVmb3JlLWJvZHkgLS0+XHJcblxyXG4gIDwhLS0gYmVnaW4gcGFuZWwtYm9keSAtLT5cclxuICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiIFtuZ0NsYXNzXT1cIlsgKHRoaXMuY29sbGFwc2UpID8gJ2Qtbm9uZSc6ICcnLCAodGhpcy5ib2R5Q2xhc3MpID8gdGhpcy5ib2R5Q2xhc3MgOiAnJyBdXCJcclxuICAgICpuZ0lmPVwiIXRoaXMubm9Cb2R5XCIgc3R5bGU9XCJib3JkZXI6MC41cHggc29saWQgIzAwMDAwMDtwYWRkaW5nOjBweDtcIj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1sb2FkZXJcIiAqbmdJZj1cInRoaXMucmVsb2FkXCI+PHNwYW4gY2xhc3M9XCJzcGlubmVyLXNtYWxsXCI+PC9zcGFuPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDwhLS0gZW5kIHBhbmVsLWJvZHkgLS0+XHJcblxyXG4gIDwhLS0gYmVnaW4gbm8tYm9keSAtLT5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbbm9Cb2R5XVwiPjwvbmctY29udGVudD5cclxuICA8IS0tIGVuZCBuby1ib2R5IC0tPlxyXG5cclxuICA8IS0tIGJlZ2luIG91dHNpZGUtYm9keSAtLT5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbb3V0c2lkZUJvZHldXCI+PC9uZy1jb250ZW50PlxyXG4gIDwhLS0gZW5kIG91dHNpZGUtYm9keSAtLT5cclxuXHJcbiAgPCEtLSBiZWdpbiBwYW5lbC1mb290ZXIgLS0+XHJcbiAgPGRpdiBjbGFzcz1cInBhbmVsLWZvb3RlclwiICNwYW5lbEZvb3RlciBbaGlkZGVuXT1cIiFzaG93Rm9vdGVyXCJcclxuICAgIFtuZ0NsYXNzXT1cIlsgKHRoaXMuZm9vdGVyQ2xhc3MpID8gdGhpcy5mb290ZXJDbGFzcyA6ICcnIF1cIj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltmb290ZXJdXCI+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG4gIDwhLS0gZW5kIHBhbmVsLWZvb3RlciAtLT5cclxuXHJcbiAgPCEtLSBiZWdpbiBhZnRlci1mb290ZXIgLS0+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2FmdGVyRm9vdGVyXVwiPjwvbmctY29udGVudD5cclxuICA8IS0tIGVuZCBhZnRlci1mb290ZXIgLS0+XHJcbjwvZGl2PlxyXG48IS0tIGVuZCBwYW5lbCAtLT4iXX0=