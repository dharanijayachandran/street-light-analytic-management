import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/tooltip";
const _c0 = ["panelFooter"];
const _c1 = ["ClicktoMaximize"];
const _c2 = ["ClicktoMinimize"];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Click to Maximize
     * @meaning Tooltip
     */ 
    const MSG_EXTERNAL_clickToMaximize$$LIB_COMPONENT_PANEL_ASSET_DATA_PANEL_ASSET_DATA_PANEL_COMPONENT_TS___4 = goog.getMsg("Click to Maximize\n      ");
    I18N_3 = MSG_EXTERNAL_clickToMaximize$$LIB_COMPONENT_PANEL_ASSET_DATA_PANEL_ASSET_DATA_PANEL_COMPONENT_TS___4;
}
else {
    I18N_3 = $localize `:Tooltip|Click to Maximize@@clickToMaximize␟d3ae1fa38badb5b73a7e641a0d49c133822b282b␟3032891634008695815:Click to Maximize
      `;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Click to Minimize
     * @meaning Tooltip
     */ 
    const MSG_EXTERNAL_clickToMinimize$$LIB_COMPONENT_PANEL_ASSET_DATA_PANEL_ASSET_DATA_PANEL_COMPONENT_TS___6 = goog.getMsg("Click to Minimize\n      ");
    I18N_5 = MSG_EXTERNAL_clickToMinimize$$LIB_COMPONENT_PANEL_ASSET_DATA_PANEL_ASSET_DATA_PANEL_COMPONENT_TS___6;
}
else {
    I18N_5 = $localize `:Tooltip|Click to Minimize@@clickToMinimize␟84f6e9d195f29131c63926cd079ee6fe0a844150␟7039613234896747790:Click to Minimize
      `;
}
function AssetDataPanelComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵprojection(1, 6);
    i0.ɵɵelementStart(2, "a", 9);
    i0.ɵɵlistener("click", function AssetDataPanelComponent_div_0_div_2_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.panelExpand(); });
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
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r1.screenStatus);
} }
function AssetDataPanelComponent_div_0_h4_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.title);
} }
function AssetDataPanelComponent_div_0_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelement(1, "span", 17);
    i0.ɵɵelementEnd();
} }
const _c7 = function (a0, a1) { return [a0, a1]; };
function AssetDataPanelComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵprojection(1, 9);
    i0.ɵɵtemplate(2, AssetDataPanelComponent_div_0_div_6_div_2_Template, 2, 0, "div", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c7, ctx_r3.collapse ? "d-none" : "", ctx_r3.bodyClass ? ctx_r3.bodyClass : ""));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.reload);
} }
const _c8 = function (a0, a1, a2, a3) { return [a0, a1, a2, a3]; };
const _c9 = function (a0) { return [a0]; };
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
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(6, _c8, ctx_r0.expand ? "panel-expand" : "", ctx_r0.reload ? "panel-loading" : "", ctx_r0.panelClass ? ctx_r0.panelClass : "", ctx_r0.variant ? "panel-" + ctx_r0.variant : "panel-inverse"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.noButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.title);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r0.noBody);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("hidden", !ctx_r0.showFooter)("ngClass", i0.ɵɵpureFunction1(11, _c9, ctx_r0.footerClass ? ctx_r0.footerClass : ""));
} }
const _c10 = [[["", "header", ""]], [["", "beforeBody", ""]], [["", "noBody", ""]], [["", "outsideBody", ""]], [["", "footer", ""]], [["", "afterFooter", ""]], [["", "download", ""]], [["", "refresh", ""]], [["", "remove", ""]], "*"];
const _c11 = ["[header]", "[beforeBody]", "[noBody]", "[outsideBody]", "[footer]", "[afterFooter]", "[download]", "[refresh]", "[remove]", "*"];
export class AssetDataPanelComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.screenStatus = "";
        this.expand = false;
        this.reload = false;
        this.remove = false;
        this.showFooter = false;
        this.removeLineChart = new EventEmitter();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.showFooter = this.panelFooter.nativeElement && this.panelFooter.nativeElement.children.length > 0;
        });
        this.screenStatus = this.ClicktoMaximize.nativeElement.innerText;
        this.cdr.detectChanges();
    }
    panelExpand() {
        this.expand = !this.expand;
        if (this.expand) {
            //  this.screenStatus = "Click to Minimize";
            this.screenStatus = this.ClicktoMinimize.nativeElement.innerText;
        }
        else {
            // this.screenStatus = "Click to Maximize";
            this.screenStatus = this.ClicktoMaximize.nativeElement.innerText;
        }
    }
    panelRemove(id) {
        this.removeLineChart.emit();
        setTimeout(() => {
            this.reload = false;
        }, 1500);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQtZGF0YS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nbG9iYWwvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L3BhbmVsL2Fzc2V0LWRhdGEtcGFuZWwvYXNzZXQtZGF0YS1wYW5lbC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50L3BhbmVsL2Fzc2V0LWRhdGEtcGFuZWwvYXNzZXQtZGF0YS1wYW5lbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFpQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNNOUcsOEJBQ0U7SUFBQSxxQkFBZ0M7SUFFaEMsNEJBQ2dDO0lBRHVELDhMQUF1QjtJQUM5RSx3QkFBNEI7SUFBQSxpQkFBSTtJQUVoRSxxQkFBK0I7SUFFL0IscUJBQThCO0lBRTlCLDBDQUE2RTtJQUE3RSxvQkFBNkU7SUFDN0UsaUJBQVc7SUFDWCwwQ0FBNkU7SUFBN0UscUJBQTZFO0lBQzdFLGlCQUFXO0lBRWIsaUJBQU07OztJQVhGLGVBQTZCO0lBQTdCLDJEQUE2Qjs7O0lBWWpDLDhCQUEyQztJQUFBLFlBQVM7SUFBQSxpQkFBSzs7O0lBQWQsZUFBUztJQUFULGtDQUFTOzs7SUFhcEQsK0JBQThDO0lBQUEsMkJBQW1DO0lBQUEsaUJBQU07Ozs7SUFIekYsK0JBRUU7SUFBQSxxQkFBWTtJQUNaLHFGQUE4QztJQUNoRCxpQkFBTTs7O0lBSmtCLCtIQUFzRjtJQUdsRixlQUFtQjtJQUFuQixvQ0FBbUI7Ozs7O0lBbENqRCw4QkFHRTtJQUNBLDhCQUNFO0lBQUEsK0VBQ0U7SUFlRiw0RUFBMkM7SUFDM0Msa0JBQThCO0lBQ2hDLGlCQUFNO0lBSU4scUJBQWtDO0lBSWxDLDhFQUVFO0lBTUYscUJBQThCO0lBSTlCLHFCQUFtQztJQUluQyxpQ0FFRTtJQUFBLHNCQUE4QjtJQUNoQyxpQkFBTTtJQUlOLHNCQUFtQztJQUVyQyxpQkFBTTs7O0lBdkRKLHlPQUE2TDtJQUk1SixlQUFzQjtJQUF0Qix1Q0FBc0I7SUFnQjdCLGVBQWtCO0lBQWxCLG1DQUFrQjtJQVcxQyxlQUFvQjtJQUFwQixxQ0FBb0I7SUFlaUIsZUFBc0I7SUFBdEIsMkNBQXNCLHNGQUFBOzs7O0FEeEMvRCxNQUFNLE9BQU8sdUJBQXVCO0lBaUJsQyxZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWhCMUMsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFVMUIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZUFBVSxHQUFHLEtBQUssQ0FBQztRQTBCVCxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUF2QlQsQ0FBQztJQUUvQyxRQUFRO0lBQ1IsQ0FBQztJQUNELGVBQWU7UUFDYixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN6RyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZiw0Q0FBNEM7WUFDNUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7U0FDbEU7YUFBTTtZQUNMLDJDQUEyQztZQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztTQUNsRTtJQUNILENBQUM7SUFHRCxXQUFXLENBQUMsRUFBRTtRQUNaLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7OzhGQTlDVSx1QkFBdUI7NERBQXZCLHVCQUF1Qjs7Ozs7Ozs7Ozs7UUNQcEMsMEVBR0U7O1FBREEsa0NBQW9COztrRERLVCx1QkFBdUI7Y0FObkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQztnQkFDNUYsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7YUFDaEQ7O2tCQVdFLFNBQVM7bUJBQUMsYUFBYTs7a0JBS3ZCLFNBQVM7bUJBQUMsaUJBQWlCOztrQkFDM0IsU0FBUzttQkFBQyxpQkFBaUI7O2tCQXdCM0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtYXNzZXQtZGF0YS1wYW5lbCcsXHJcbiAgaW5wdXRzOiBbJ3RpdGxlJywgJ3ZhcmlhbnQnLCAnbm9Cb2R5JywgJ25vQnV0dG9uJywgJ2JvZHlDbGFzcycsICdmb290ZXJDbGFzcycsICdwYW5lbENsYXNzJ10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Fzc2V0LWRhdGEtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Fzc2V0LWRhdGEtcGFuZWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBc3NldERhdGFQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgc2NyZWVuU3RhdHVzOiBzdHJpbmcgPSBcIlwiO1xyXG4gIHRpdGxlOnN0cmluZztcclxuICB2YXJpYW50OmJvb2xlYW47XHJcbiAgbm9Cb2R5OmJvb2xlYW47XHJcbiAgbm9CdXR0b246Ym9vbGVhbjtcclxuICBib2R5Q2xhc3M6Ym9vbGVhbjtcclxuICBmb290ZXJDbGFzczpib29sZWFuO1xyXG4gIHBhbmVsQ2xhc3M6Ym9vbGVhbjtcclxuICBjb2xsYXBzZTpib29sZWFuO1xyXG4gIEBWaWV3Q2hpbGQoJ3BhbmVsRm9vdGVyJykgcGFuZWxGb290ZXI7XHJcbiAgZXhwYW5kID0gZmFsc2U7XHJcbiAgcmVsb2FkID0gZmFsc2U7XHJcbiAgcmVtb3ZlID0gZmFsc2U7XHJcbiAgc2hvd0Zvb3RlciA9IGZhbHNlO1xyXG4gIEBWaWV3Q2hpbGQoXCJDbGlja3RvTWF4aW1pemVcIikgQ2xpY2t0b01heGltaXplOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoXCJDbGlja3RvTWluaW1pemVcIikgQ2xpY2t0b01pbmltaXplOiBFbGVtZW50UmVmO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zaG93Rm9vdGVyID0gdGhpcy5wYW5lbEZvb3Rlci5uYXRpdmVFbGVtZW50ICYmIHRoaXMucGFuZWxGb290ZXIubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPiAwO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNjcmVlblN0YXR1cyA9IHRoaXMuQ2xpY2t0b01heGltaXplLm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0O1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcGFuZWxFeHBhbmQoKSB7XHJcbiAgICB0aGlzLmV4cGFuZCA9ICF0aGlzLmV4cGFuZDtcclxuICAgIGlmICh0aGlzLmV4cGFuZCkge1xyXG4gICAgICAvLyAgdGhpcy5zY3JlZW5TdGF0dXMgPSBcIkNsaWNrIHRvIE1pbmltaXplXCI7XHJcbiAgICAgIHRoaXMuc2NyZWVuU3RhdHVzID0gdGhpcy5DbGlja3RvTWluaW1pemUubmF0aXZlRWxlbWVudC5pbm5lclRleHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyB0aGlzLnNjcmVlblN0YXR1cyA9IFwiQ2xpY2sgdG8gTWF4aW1pemVcIjtcclxuICAgICAgdGhpcy5zY3JlZW5TdGF0dXMgPSB0aGlzLkNsaWNrdG9NYXhpbWl6ZS5uYXRpdmVFbGVtZW50LmlubmVyVGV4dDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSByZW1vdmVMaW5lQ2hhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBwYW5lbFJlbW92ZShpZCkge1xyXG4gICAgdGhpcy5yZW1vdmVMaW5lQ2hhcnQuZW1pdCgpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVsb2FkID0gZmFsc2U7XHJcbiAgICB9LCAxNTAwKTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iLCI8IS0tIGJlZ2luIHBhbmVsIC0tPlxyXG48ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtaW52ZXJzZVwiXHJcbiAgW25nQ2xhc3NdPVwiWyAodGhpcy5leHBhbmQpID8gJ3BhbmVsLWV4cGFuZCc6ICcnLCAodGhpcy5yZWxvYWQpID8gJ3BhbmVsLWxvYWRpbmcnOiAnJywgKHRoaXMucGFuZWxDbGFzcykgPyB0aGlzLnBhbmVsQ2xhc3MgOiAnJywgKHRoaXMudmFyaWFudCkgPyAncGFuZWwtJyArIHRoaXMudmFyaWFudCA6ICdwYW5lbC1pbnZlcnNlJyBdXCJcclxuICAqbmdJZj1cIiF0aGlzLnJlbW92ZVwiPlxyXG4gIDwhLS0gYmVnaW4gcGFuZWwtaGVhZGluZyAtLT5cclxuICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmctYnRuXCIgKm5nSWY9XCIhdGhpcy5ub0J1dHRvblwiPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbZG93bmxvYWRdXCI+PC9uZy1jb250ZW50PlxyXG5cclxuICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwiYnRuIGJ0bi14cyBidG4taWNvbiBidG4tY2lyY2xlIGJ0bi1kZWZhdWx0IHBhbmVsLWV4cGFuZFwiIChjbGljayk9XCJwYW5lbEV4cGFuZCgpXCJcclxuICAgICAgICBtYXRUb29sdGlwPVwie3tzY3JlZW5TdGF0dXN9fVwiPjxpIGNsYXNzPVwiZmEgZmEtZXhwYW5kXCI+PC9pPjwvYT5cclxuICAgICAgICBcclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3JlZnJlc2hdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICA8IS0tIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cImJ0biBidG4teHMgYnRuLWljb24gYnRuLWNpcmNsZSBidG4tc3VjY2Vzc1wiIChjbGljayk9XCJwYW5lbFJlbG9hZCgpXCIgdGl0bGU9XCJjbGljayB0byByZWZyZXNoXCI+PGkgY2xhc3M9XCJmYSBmYS1yZWRvXCI+PC9pPjwvYT4gLS0+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltyZW1vdmVdXCI+PC9uZy1jb250ZW50PlxyXG5cclxuICAgICAgPHRlbXBsYXRlICNDbGlja3RvTWF4aW1pemUgaTE4bj0nVG9vbHRpcHxDbGljayB0byBNYXhpbWl6ZUBAY2xpY2tUb01heGltaXplJz5DbGljayB0byBNYXhpbWl6ZVxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8dGVtcGxhdGUgI0NsaWNrdG9NaW5pbWl6ZSBpMThuPSdUb29sdGlwfENsaWNrIHRvIE1pbmltaXplQEBjbGlja1RvTWluaW1pemUnPkNsaWNrIHRvIE1pbmltaXplXHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICA8aDQgY2xhc3M9XCJwYW5lbC10aXRsZVwiICpuZ0lmPVwidGhpcy50aXRsZVwiPnt7dGl0bGV9fTwvaDQ+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbaGVhZGVyXVwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuICA8IS0tIGVuZCBwYW5lbC1oZWFkaW5nIC0tPlxyXG5cclxuICA8IS0tIGJlZ2luIGJlZm9yZS1ib2R5IC0tPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIltiZWZvcmVCb2R5XVwiPjwvbmctY29udGVudD5cclxuICA8IS0tIGVuZCBiZWZvcmUtYm9keSAtLT5cclxuXHJcbiAgPCEtLSBiZWdpbiBwYW5lbC1ib2R5IC0tPlxyXG4gIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCIgW25nQ2xhc3NdPVwiWyAodGhpcy5jb2xsYXBzZSkgPyAnZC1ub25lJzogJycsICh0aGlzLmJvZHlDbGFzcykgPyB0aGlzLmJvZHlDbGFzcyA6ICcnIF1cIlxyXG4gICAgKm5nSWY9XCIhdGhpcy5ub0JvZHlcIiBzdHlsZT1cImJvcmRlcjowLjVweCBzb2xpZCAjMDAwMDAwO3BhZGRpbmc6MHB4O1wiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWxvYWRlclwiICpuZ0lmPVwidGhpcy5yZWxvYWRcIj48c3BhbiBjbGFzcz1cInNwaW5uZXItc21hbGxcIj48L3NwYW4+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPCEtLSBlbmQgcGFuZWwtYm9keSAtLT5cclxuXHJcbiAgPCEtLSBiZWdpbiBuby1ib2R5IC0tPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIltub0JvZHldXCI+PC9uZy1jb250ZW50PlxyXG4gIDwhLS0gZW5kIG5vLWJvZHkgLS0+XHJcblxyXG4gIDwhLS0gYmVnaW4gb3V0c2lkZS1ib2R5IC0tPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIltvdXRzaWRlQm9keV1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPCEtLSBlbmQgb3V0c2lkZS1ib2R5IC0tPlxyXG5cclxuICA8IS0tIGJlZ2luIHBhbmVsLWZvb3RlciAtLT5cclxuICA8ZGl2IGNsYXNzPVwicGFuZWwtZm9vdGVyXCIgI3BhbmVsRm9vdGVyIFtoaWRkZW5dPVwiIXNob3dGb290ZXJcIlxyXG4gICAgW25nQ2xhc3NdPVwiWyAodGhpcy5mb290ZXJDbGFzcykgPyB0aGlzLmZvb3RlckNsYXNzIDogJycgXVwiPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2Zvb3Rlcl1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbiAgPCEtLSBlbmQgcGFuZWwtZm9vdGVyIC0tPlxyXG5cclxuICA8IS0tIGJlZ2luIGFmdGVyLWZvb3RlciAtLT5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbYWZ0ZXJGb290ZXJdXCI+PC9uZy1jb250ZW50PlxyXG4gIDwhLS0gZW5kIGFmdGVyLWZvb3RlciAtLT5cclxuPC9kaXY+XHJcbjwhLS0gZW5kIHBhbmVsIC0tPiJdfQ==