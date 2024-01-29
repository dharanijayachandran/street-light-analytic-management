import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { exportTable } from '../../../exportTable';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/tooltip";
const _c0 = ["panelFooter"];
const _c1 = ["ClicktoMaximize"];
const _c2 = ["ClicktoMinimize"];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_ClicktoRefresh$$LIB_COMPONENT_PANEL_TABLE_PANEL_TABLE_PANEL_COMPONENT_TS___4 = goog.getMsg("Click to Refresh");
    I18N_3 = MSG_EXTERNAL_ClicktoRefresh$$LIB_COMPONENT_PANEL_TABLE_PANEL_TABLE_PANEL_COMPONENT_TS___4;
}
else {
    I18N_3 = $localize `:@@ClicktoRefresh␟8f34af26873c305d82ae9ec0634a22a536d08059␟1109274755188761114:Click to Refresh`;
}
const _c5 = ["matTooltip", I18N_3];
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Click to Maximize
     * @meaning Tooltip
     */ 
    const MSG_EXTERNAL_clickToMaximize$$LIB_COMPONENT_PANEL_TABLE_PANEL_TABLE_PANEL_COMPONENT_TS___7 = goog.getMsg("Click to Maximize\n      ");
    I18N_6 = MSG_EXTERNAL_clickToMaximize$$LIB_COMPONENT_PANEL_TABLE_PANEL_TABLE_PANEL_COMPONENT_TS___7;
}
else {
    I18N_6 = $localize `:Tooltip|Click to Maximize@@clickToMaximize␟d3ae1fa38badb5b73a7e641a0d49c133822b282b␟3032891634008695815:Click to Maximize
      `;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Click to Minimize
     * @meaning Tooltip
     */ 
    const MSG_EXTERNAL_clickToMinimize$$LIB_COMPONENT_PANEL_TABLE_PANEL_TABLE_PANEL_COMPONENT_TS___9 = goog.getMsg("Click to Minimize\n      ");
    I18N_8 = MSG_EXTERNAL_clickToMinimize$$LIB_COMPONENT_PANEL_TABLE_PANEL_TABLE_PANEL_COMPONENT_TS___9;
}
else {
    I18N_8 = $localize `:Tooltip|Click to Minimize@@clickToMinimize␟84f6e9d195f29131c63926cd079ee6fe0a844150␟7039613234896747790:Click to Minimize
      `;
}
function TablePanelComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵprojection(1, 5);
    i0.ɵɵprojection(2, 6);
    i0.ɵɵelementStart(3, "a", 9);
    i0.ɵɵi18nAttributes(4, _c5);
    i0.ɵɵlistener("click", function TablePanelComponent_div_0_div_2_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r31); const ctx_r30 = i0.ɵɵnextContext(2); return ctx_r30.panelReload(); });
    i0.ɵɵelement(5, "i", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵprojection(6, 7);
    i0.ɵɵprojection(7, 8);
    i0.ɵɵprojection(8, 9);
    i0.ɵɵprojection(9, 10);
    i0.ɵɵelementStart(10, "a", 11);
    i0.ɵɵlistener("click", function TablePanelComponent_div_0_div_2_Template_a_click_10_listener() { i0.ɵɵrestoreView(_r31); const ctx_r32 = i0.ɵɵnextContext(2); return ctx_r32.panelExpand(); });
    i0.ɵɵelement(11, "i", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵprojection(12, 11);
    i0.ɵɵelementStart(13, "template", null, 13);
    i0.ɵɵi18n(15, I18N_6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "template", null, 14);
    i0.ɵɵi18n(18, I18N_8);
    i0.ɵɵelementEnd();
    i0.ɵɵprojection(19, 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(10);
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r24.screenStatus);
} }
function TablePanelComponent_div_0_h4_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r25.name);
} }
function TablePanelComponent_div_0_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelement(1, "span", 19);
    i0.ɵɵelementEnd();
} }
const _c10 = function (a0, a1) { return [a0, a1]; };
function TablePanelComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵprojection(1, 13);
    i0.ɵɵtemplate(2, TablePanelComponent_div_0_div_5_div_2_Template, 2, 0, "div", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c10, ctx_r26.collapse ? "d-none" : "", ctx_r26.bodyClass ? ctx_r26.bodyClass : ""));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r26.reload);
} }
const _c11 = function (a0, a1, a2, a3) { return [a0, a1, a2, a3]; };
const _c12 = function (a0) { return [a0]; };
function TablePanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵtemplate(2, TablePanelComponent_div_0_div_2_Template, 20, 1, "div", 3);
    i0.ɵɵtemplate(3, TablePanelComponent_div_0_h4_3_Template, 2, 1, "h4", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵprojection(4);
    i0.ɵɵtemplate(5, TablePanelComponent_div_0_div_5_Template, 3, 5, "div", 5);
    i0.ɵɵprojection(6, 1);
    i0.ɵɵprojection(7, 2);
    i0.ɵɵelementStart(8, "div", 6, 7);
    i0.ɵɵprojection(10, 3);
    i0.ɵɵelementEnd();
    i0.ɵɵprojection(11, 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(6, _c11, ctx_r23.expand ? "panel-expand" : "", ctx_r23.reload ? "panel-loading" : "", ctx_r23.panelClass ? ctx_r23.panelClass : "", ctx_r23.variant ? "panel-" + ctx_r23.variant : "panel-inverse"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r23.noButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r23.name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r23.noBody);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("hidden", !ctx_r23.showFooter)("ngClass", i0.ɵɵpureFunction1(11, _c12, ctx_r23.footerClass ? ctx_r23.footerClass : ""));
} }
const _c13 = [[["", "beforeBody", ""]], [["", "noBody", ""]], [["", "outsideBody", ""]], [["", "footer", ""]], [["", "afterFooter", ""]], [["", "filterButton", ""]], [["", "backButton", ""]], [["", "searchfield", ""]], [["", "searchButton", ""]], [["", "searchfieldPanel", ""]], [["", "searchButtonPanel", ""]], [["", "downloadButton", ""]], [["", "addNewButton", ""]], "*"];
const _c14 = ["[beforeBody]", "[noBody]", "[outsideBody]", "[footer]", "[afterFooter]", "[filterButton]", "[backButton]", "[searchfield]", "[searchButton]", "[searchfieldPanel]", "[searchButtonPanel]", "[downloadButton]", "[addNewButton]", "*"];
export class TablePanelComponent {
    constructor(router, render, elRef, cdr) {
        this.router = router;
        this.render = render;
        this.elRef = elRef;
        this.cdr = cdr;
        this.scrollBarDirective = new EventEmitter();
        this.screenStatus = '';
        this.expand = false;
        this.reload = false;
        this.collapse = false;
        this.remove = false;
        this.showFooter = false;
        this.clickToAddNew = true;
        // To navigate to assign tenant menus
        this.eventEmitToPageNaviagte = new EventEmitter();
        this.panelExpandCollapse = new EventEmitter();
        // Refresh functionality for table list
        this.refreshTableList = new EventEmitter();
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
    // Add new
    addNew() {
        // Dynamically getting page for Add new For example - addTenant, addAccount
        if (this.pageName == "templateList") {
            this.eventEmitToPageNaviagte.emit();
        }
        else if (this.pageName == 'analogTemplateTagList') {
            this.eventEmitToPageNaviagte.emit();
        }
        else {
            this.router.navigate([this.pageName]);
        }
    }
    panelExpand() {
        this.expand = !this.expand;
        this.panelExpandCollapse.emit(this.expand);
        if (this.expand) {
            //  this.screenStatus = "Click to Minimize";
            this.screenStatus = this.ClicktoMinimize.nativeElement.innerText;
        }
        else {
            // this.screenStatus = "Click to Maximize";
            this.screenStatus = this.ClicktoMaximize.nativeElement.innerText;
        }
    }
    panelReload() {
        this.reload = true;
        this.refreshTableList.emit();
        // this.refreshTableList.emit('refreshTable');
        setTimeout(() => {
            this.reload = false;
        }, 1500);
    }
    panelCollapse() {
        this.collapse = !this.collapse;
    }
    panelRemove() {
        this.remove = !this.remove;
    }
    searchButton(dataSource) {
        this.inpputSearchBoxElement = document.getElementById("filter");
        if (this.inpputSearchBoxElement.style.display === "none") {
            this.inpputSearchBoxElement.style.display = "inline-block";
            // this.setTableDasourceAsDefault(dataSource);
        }
        else {
            this.inpputSearchBoxElement.style.display = "none";
            this.setTableDasourceAsDefault(dataSource);
        }
    }
    searchButtonPanel(dataSource) {
        this.inpputSearchBoxElement = document.getElementById("search");
        if (this.inpputSearchBoxElement.style.display === "none") {
            this.inpputSearchBoxElement.style.display = "inline-block";
            // this.setTableDasourceAsDefault(dataSource);
        }
        else {
            this.inpputSearchBoxElement.style.display = "none";
            this.setTableDasourceAsDefault(dataSource);
        }
    }
    /*
      Developer : Anandhan
      Purpose: In table panel, Click to search/filter > click to hide/show input filter search box >
                response data set back to Table datasource and input field make as a empty
    */
    setTableDasourceAsDefault(dataSource) {
        if (this.inpputSearchBoxElement != undefined) {
            this.inpputSearchBoxElement.value = '';
        }
        this.applyFilter('', dataSource);
    }
    // Panel header filter
    applyFilter(filterValue, dataSource) {
        dataSource.filter = filterValue.trim().toLowerCase();
        this.scrollBarDirective.emit();
    }
    exportTable(tableName, fileName) {
        exportTable.exportToExcel(tableName, fileName);
    }
}
TablePanelComponent.ɵfac = function TablePanelComponent_Factory(t) { return new (t || TablePanelComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
TablePanelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TablePanelComponent, selectors: [["app-panel-user"]], viewQuery: function TablePanelComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true);
        i0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.panelFooter = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ClicktoMaximize = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ClicktoMinimize = _t.first);
    } }, inputs: { name: "name", variant: "variant", noBody: "noBody", noButton: "noButton", bodyClass: "bodyClass", footerClass: "footerClass", panelClass: "panelClass" }, outputs: { scrollBarDirective: "scrollBarDirective", eventEmitToPageNaviagte: "eventEmitToPageNaviagte", panelExpandCollapse: "panelExpandCollapse", refreshTableList: "refreshTableList" }, ngContentSelectors: _c14, decls: 1, vars: 1, consts: [["class", "panel", "style", "border:0.5px solid #cccccc;", 3, "ngClass", 4, "ngIf"], [1, "panel", 2, "border", "0.5px solid #cccccc", 3, "ngClass"], [1, "panel-heading"], ["class", "panel-heading-btn", 4, "ngIf"], ["class", "panel-title", 4, "ngIf"], ["class", "panel-body", 3, "ngClass", 4, "ngIf"], [1, "panel-footer", 3, "hidden", "ngClass"], ["panelFooter", ""], [1, "panel-heading-btn"], ["href", "javascript:;", 1, "btn", "btn-xs", "btn-icon", "btn-circle", "btn-success", "panel-reload", 3, "click", 6, "matTooltip"], [1, "fa", "fa-redo"], ["href", "javascript:;", 1, "btn", "btn-xs", "btn-icon", "btn-circle", "btn-default", "panel-expand", 3, "matTooltip", "click"], [1, "fa", "fa-expand"], ["ClicktoMaximize", ""], ["ClicktoMinimize", ""], [1, "panel-title"], [1, "panel-body", 3, "ngClass"], ["class", "panel-loader", 4, "ngIf"], [1, "panel-loader"], [1, "spinner-small"]], template: function TablePanelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c13);
        i0.ɵɵtemplate(0, TablePanelComponent_div_0_Template, 12, 13, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.remove);
    } }, directives: [i2.NgIf, i2.NgClass, i3.MatTooltip], styles: [".panel-body[_ngcontent-%COMP%]{padding:0}.panel[_ngcontent-%COMP%]{margin-bottom:0}.panel.panel-expand[_ngcontent-%COMP%]{overflow:hidden}div.panel-inverse[_ngcontent-%COMP%]{border:none!important}.cdk-overlay-container[_ngcontent-%COMP%]{z-index:99999!important}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TablePanelComponent, [{
        type: Component,
        args: [{
                selector: 'app-panel-user',
                templateUrl: './table-panel.component.html',
                inputs: ['name', 'variant', 'noBody', 'noButton', 'bodyClass', 'footerClass', 'panelClass'],
                styleUrls: ['./table-panel.component.css']
            }]
    }], function () { return [{ type: i1.Router }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { scrollBarDirective: [{
            type: Output
        }], panelFooter: [{
            type: ViewChild,
            args: ['panelFooter']
        }], ClicktoMaximize: [{
            type: ViewChild,
            args: ["ClicktoMaximize"]
        }], ClicktoMinimize: [{
            type: ViewChild,
            args: ["ClicktoMinimize"]
        }], eventEmitToPageNaviagte: [{
            type: Output
        }], panelExpandCollapse: [{
            type: Output
        }], refreshTableList: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2xvYmFsLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9wYW5lbC90YWJsZS1wYW5lbC90YWJsZS1wYW5lbC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50L3BhbmVsL3RhYmxlLXBhbmVsL3RhYmxlLXBhbmVsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXlCLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFxRSxNQUFNLGVBQWUsQ0FBQztBQUVySyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0kvQyw4QkFFRTtJQUNBLHFCQUFvQztJQUVwQyxxQkFBa0M7SUFFbEMsNEJBRUU7SUFGRiwyQkFFRTtJQURnRSw2TEFBdUI7SUFDdkYsd0JBQTBCO0lBQzVCLGlCQUFJO0lBRUoscUJBQW1DO0lBR25DLHFCQUFvQztJQUVwQyxxQkFBd0M7SUFHeEMsc0JBQXlDO0lBRXpDLDhCQUVFO0lBRGdFLDhMQUF1QjtJQUN2Rix5QkFBNEI7SUFDOUIsaUJBQUk7SUFJSix1QkFBc0M7SUFLdEMsMkNBQTZFO0lBQTdFLHFCQUE2RTtJQUM3RSxpQkFBVztJQUNYLDJDQUE2RTtJQUE3RSxxQkFBNkU7SUFDN0UsaUJBQVc7SUFFWCx1QkFBb0M7SUFFdEMsaUJBQU07OztJQW5CbUIsZ0JBQTZCO0lBQTdCLDREQUE2Qjs7O0lBb0J0RCw4QkFBMEM7SUFBQSxZQUFVO0lBQUEsaUJBQUs7OztJQUFmLGVBQVU7SUFBVixrQ0FBVTs7O0lBYXBELCtCQUE4QztJQUFBLDJCQUFtQztJQUFBLGlCQUFNOzs7O0lBSHpGLCtCQUVFO0lBQUEsc0JBQVk7SUFDWixpRkFBOEM7SUFDaEQsaUJBQU07OztJQUprQixtSUFBc0Y7SUFHbEYsZUFB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YUFBYTs7a0JBUXZCLFNBQVM7bUJBQUMsaUJBQWlCOztrQkFDM0IsU0FBUzttQkFBQyxpQkFBaUI7O2tCQWlCM0IsTUFBTTs7a0JBZU4sTUFBTTs7a0JBZU4sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmLCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBleHBvcnRUYWJsZSB9IGZyb20gJy4uLy4uLy4uL2V4cG9ydFRhYmxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXBhbmVsLXVzZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS1wYW5lbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgaW5wdXRzOiBbJ25hbWUnLCAndmFyaWFudCcsICdub0JvZHknLCAnbm9CdXR0b24nLCAnYm9keUNsYXNzJywgJ2Zvb3RlckNsYXNzJywgJ3BhbmVsQ2xhc3MnXSxcclxuICBzdHlsZVVybHM6IFsnLi90YWJsZS1wYW5lbC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBPdXRwdXQoKSBzY3JvbGxCYXJEaXJlY3RpdmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBzY3JlZW5TdGF0dXM6IHN0cmluZyA9ICcnO1xyXG4gIG5hbWU6c3RyaW5nO1xyXG4gIHZhcmlhbnQ6Ym9vbGVhbjtcclxuICBub0JvZHk6Ym9vbGVhbjtcclxuICBub0J1dHRvbjpib29sZWFuO1xyXG4gIGJvZHlDbGFzczpib29sZWFuO1xyXG4gIGZvb3RlckNsYXNzOmJvb2xlYW47XHJcbiAgcGFuZWxDbGFzczpib29sZWFuO1xyXG4gIEBWaWV3Q2hpbGQoJ3BhbmVsRm9vdGVyJykgcGFuZWxGb290ZXI7XHJcbiAgZXhwYW5kID0gZmFsc2U7XHJcbiAgcmVsb2FkID0gZmFsc2U7XHJcbiAgY29sbGFwc2UgPSBmYWxzZTtcclxuICByZW1vdmUgPSBmYWxzZTtcclxuICBzaG93Rm9vdGVyID0gZmFsc2U7XHJcbiAgcGFnZU5hbWU6IHN0cmluZztcclxuICBjbGlja1RvQWRkTmV3ID0gdHJ1ZTtcclxuICBAVmlld0NoaWxkKFwiQ2xpY2t0b01heGltaXplXCIpIENsaWNrdG9NYXhpbWl6ZTogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwiQ2xpY2t0b01pbmltaXplXCIpIENsaWNrdG9NaW5pbWl6ZTogRWxlbWVudFJlZjtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNob3dGb290ZXIgPSB0aGlzLnBhbmVsRm9vdGVyLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5wYW5lbEZvb3Rlci5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDA7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2NyZWVuU3RhdHVzID0gdGhpcy5DbGlja3RvTWF4aW1pemUubmF0aXZlRWxlbWVudC5pbm5lclRleHQ7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICAvLyBUbyBuYXZpZ2F0ZSB0byBhc3NpZ24gdGVuYW50IG1lbnVzXHJcbiAgQE91dHB1dCgpIGV2ZW50RW1pdFRvUGFnZU5hdmlhZ3RlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgLy8gQWRkIG5ld1xyXG4gIGFkZE5ldygpIHtcclxuICAgIC8vIER5bmFtaWNhbGx5IGdldHRpbmcgcGFnZSBmb3IgQWRkIG5ldyBGb3IgZXhhbXBsZSAtIGFkZFRlbmFudCwgYWRkQWNjb3VudFxyXG4gICAgaWYgKHRoaXMucGFnZU5hbWUgPT0gXCJ0ZW1wbGF0ZUxpc3RcIikge1xyXG4gICAgICB0aGlzLmV2ZW50RW1pdFRvUGFnZU5hdmlhZ3RlLmVtaXQoKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5wYWdlTmFtZSA9PSAnYW5hbG9nVGVtcGxhdGVUYWdMaXN0Jykge1xyXG4gICAgICB0aGlzLmV2ZW50RW1pdFRvUGFnZU5hdmlhZ3RlLmVtaXQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnBhZ2VOYW1lXSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIEBPdXRwdXQoKSBwYW5lbEV4cGFuZENvbGxhcHNlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIHBhbmVsRXhwYW5kKCkge1xyXG4gICAgdGhpcy5leHBhbmQgPSAhdGhpcy5leHBhbmQ7XHJcbiAgICB0aGlzLnBhbmVsRXhwYW5kQ29sbGFwc2UuZW1pdCh0aGlzLmV4cGFuZCk7XHJcbiAgICBpZiAodGhpcy5leHBhbmQpIHtcclxuICAgICAgLy8gIHRoaXMuc2NyZWVuU3RhdHVzID0gXCJDbGljayB0byBNaW5pbWl6ZVwiO1xyXG4gICAgICB0aGlzLnNjcmVlblN0YXR1cyA9IHRoaXMuQ2xpY2t0b01pbmltaXplLm5hdGl2ZUVsZW1lbnQuaW5uZXJUZXh0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gdGhpcy5zY3JlZW5TdGF0dXMgPSBcIkNsaWNrIHRvIE1heGltaXplXCI7XHJcbiAgICAgIHRoaXMuc2NyZWVuU3RhdHVzID0gdGhpcy5DbGlja3RvTWF4aW1pemUubmF0aXZlRWxlbWVudC5pbm5lclRleHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gUmVmcmVzaCBmdW5jdGlvbmFsaXR5IGZvciB0YWJsZSBsaXN0XHJcbiAgQE91dHB1dCgpIHJlZnJlc2hUYWJsZUxpc3QgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBwYW5lbFJlbG9hZCgpIHtcclxuICAgIHRoaXMucmVsb2FkID0gdHJ1ZTtcclxuICAgIHRoaXMucmVmcmVzaFRhYmxlTGlzdC5lbWl0KCk7XHJcbiAgICAvLyB0aGlzLnJlZnJlc2hUYWJsZUxpc3QuZW1pdCgncmVmcmVzaFRhYmxlJyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5yZWxvYWQgPSBmYWxzZTtcclxuICAgIH0sIDE1MDApO1xyXG4gIH1cclxuICBwYW5lbENvbGxhcHNlKCkge1xyXG4gICAgdGhpcy5jb2xsYXBzZSA9ICF0aGlzLmNvbGxhcHNlO1xyXG4gIH1cclxuICBwYW5lbFJlbW92ZSgpIHtcclxuICAgIHRoaXMucmVtb3ZlID0gIXRoaXMucmVtb3ZlO1xyXG4gIH1cclxuXHJcbiAgLy8gU2VhcmNoIGJ1dHRvbiBzaG93L2hpZGVcclxuICBpbnBwdXRTZWFyY2hCb3hFbGVtZW50XHJcbiAgc2VhcmNoQnV0dG9uKGRhdGFTb3VyY2U/KSB7XHJcbiAgICB0aGlzLmlucHB1dFNlYXJjaEJveEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbHRlclwiKTtcclxuICAgIGlmICh0aGlzLmlucHB1dFNlYXJjaEJveEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcclxuICAgICAgdGhpcy5pbnBwdXRTZWFyY2hCb3hFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAvLyB0aGlzLnNldFRhYmxlRGFzb3VyY2VBc0RlZmF1bHQoZGF0YVNvdXJjZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlucHB1dFNlYXJjaEJveEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB0aGlzLnNldFRhYmxlRGFzb3VyY2VBc0RlZmF1bHQoZGF0YVNvdXJjZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWFyY2hCdXR0b25QYW5lbChkYXRhU291cmNlPykge1xyXG4gICAgdGhpcy5pbnBwdXRTZWFyY2hCb3hFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hcIik7XHJcbiAgICBpZiAodGhpcy5pbnBwdXRTZWFyY2hCb3hFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XHJcbiAgICAgIHRoaXMuaW5wcHV0U2VhcmNoQm94RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgLy8gdGhpcy5zZXRUYWJsZURhc291cmNlQXNEZWZhdWx0KGRhdGFTb3VyY2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbnBwdXRTZWFyY2hCb3hFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgdGhpcy5zZXRUYWJsZURhc291cmNlQXNEZWZhdWx0KGRhdGFTb3VyY2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvKiBcclxuICAgIERldmVsb3BlciA6IEFuYW5kaGFuXHJcbiAgICBQdXJwb3NlOiBJbiB0YWJsZSBwYW5lbCwgQ2xpY2sgdG8gc2VhcmNoL2ZpbHRlciA+IGNsaWNrIHRvIGhpZGUvc2hvdyBpbnB1dCBmaWx0ZXIgc2VhcmNoIGJveCA+XHJcbiAgICAgICAgICAgICAgcmVzcG9uc2UgZGF0YSBzZXQgYmFjayB0byBUYWJsZSBkYXRhc291cmNlIGFuZCBpbnB1dCBmaWVsZCBtYWtlIGFzIGEgZW1wdHlcclxuICAqL1xyXG5cclxuICBzZXRUYWJsZURhc291cmNlQXNEZWZhdWx0KGRhdGFTb3VyY2UpIHtcclxuICAgIGlmICh0aGlzLmlucHB1dFNlYXJjaEJveEVsZW1lbnQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICh0aGlzLmlucHB1dFNlYXJjaEJveEVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFwcGx5RmlsdGVyKCcnLCBkYXRhU291cmNlKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgLy8gUGFuZWwgaGVhZGVyIGZpbHRlclxyXG4gIGFwcGx5RmlsdGVyKGZpbHRlclZhbHVlLCBkYXRhU291cmNlKSB7XHJcbiAgICBkYXRhU291cmNlLmZpbHRlciA9IGZpbHRlclZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdGhpcy5zY3JvbGxCYXJEaXJlY3RpdmUuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0VGFibGUodGFibGVOYW1lLCBmaWxlTmFtZSkge1xyXG4gICAgZXhwb3J0VGFibGUuZXhwb3J0VG9FeGNlbCh0YWJsZU5hbWUsIGZpbGVOYW1lKTtcclxuICB9XHJcbn1cclxuIiwiPCEtLSBiZWdpbiBwYW5lbCAtLT5cclxuPGRpdiBjbGFzcz1cInBhbmVsXCIgc3R5bGU9XCJib3JkZXI6MC41cHggc29saWQgI2NjY2NjYztcIlxyXG4gIFtuZ0NsYXNzXT1cIlsgKHRoaXMuZXhwYW5kKSA/ICdwYW5lbC1leHBhbmQnOiAnJywgKHRoaXMucmVsb2FkKSA/ICdwYW5lbC1sb2FkaW5nJzogJycsICh0aGlzLnBhbmVsQ2xhc3MpID8gdGhpcy5wYW5lbENsYXNzIDogJycsICh0aGlzLnZhcmlhbnQpID8gJ3BhbmVsLScgKyB0aGlzLnZhcmlhbnQgOiAncGFuZWwtaW52ZXJzZScgXVwiXHJcbiAgKm5nSWY9XCIhdGhpcy5yZW1vdmVcIj5cclxuICA8IS0tIGJlZ2luIHBhbmVsLWhlYWRpbmcgLS0+XHJcbiAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nLWJ0blwiICpuZ0lmPVwiIXRoaXMubm9CdXR0b25cIj5cclxuXHJcbiAgICAgIDwhLS0gRmlsdGVyIHNlYXJjaCAtLT5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2ZpbHRlckJ1dHRvbl1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgPCEtLSBCYWNrIGJ1dHRvbiAtLT5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2JhY2tCdXR0b25dXCI+PC9uZy1jb250ZW50PlxyXG5cclxuICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGkxOG4tbWF0VG9vbHRpcD1cIkBAQ2xpY2t0b1JlZnJlc2hcIiBtYXRUb29sdGlwPVwiQ2xpY2sgdG8gUmVmcmVzaFwiXHJcbiAgICAgICAgY2xhc3M9XCJidG4gYnRuLXhzIGJ0bi1pY29uIGJ0bi1jaXJjbGUgYnRuLXN1Y2Nlc3MgcGFuZWwtcmVsb2FkXCIgKGNsaWNrKT1cInBhbmVsUmVsb2FkKClcIj5cclxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXJlZG9cIj48L2k+XHJcbiAgICAgIDwvYT5cclxuXHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltzZWFyY2hmaWVsZF1cIj48L25nLWNvbnRlbnQ+XHJcblxyXG4gICAgICA8IS0tIFNlYXJjaCBidXR0b24gLS0+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltzZWFyY2hCdXR0b25dXCI+PC9uZy1jb250ZW50PlxyXG5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3NlYXJjaGZpZWxkUGFuZWxdXCI+PC9uZy1jb250ZW50PlxyXG5cclxuICAgICAgPCEtLSBTZWFyY2ggYnV0dG9uIC0tPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbc2VhcmNoQnV0dG9uUGFuZWxdXCI+PC9uZy1jb250ZW50PlxyXG5cclxuICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIG1hdFRvb2x0aXA9XCJ7e3NjcmVlblN0YXR1c319XCJcclxuICAgICAgICBjbGFzcz1cImJ0biBidG4teHMgYnRuLWljb24gYnRuLWNpcmNsZSBidG4tZGVmYXVsdCBwYW5lbC1leHBhbmRcIiAoY2xpY2spPVwicGFuZWxFeHBhbmQoKVwiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZXhwYW5kXCI+PC9pPlxyXG4gICAgICA8L2E+XHJcblxyXG5cclxuICAgICAgPCEtLSBEb3dubG9hZCBidXR0b24gLS0+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltkb3dubG9hZEJ1dHRvbl1cIj48L25nLWNvbnRlbnQ+XHJcblxyXG4gICAgIFxyXG5cclxuICAgICAgXHJcbiAgICAgIDx0ZW1wbGF0ZSAjQ2xpY2t0b01heGltaXplIGkxOG49J1Rvb2x0aXB8Q2xpY2sgdG8gTWF4aW1pemVAQGNsaWNrVG9NYXhpbWl6ZSc+Q2xpY2sgdG8gTWF4aW1pemVcclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPHRlbXBsYXRlICNDbGlja3RvTWluaW1pemUgaTE4bj0nVG9vbHRpcHxDbGljayB0byBNaW5pbWl6ZUBAY2xpY2tUb01pbmltaXplJz5DbGljayB0byBNaW5pbWl6ZVxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2FkZE5ld0J1dHRvbl1cIj48L25nLWNvbnRlbnQ+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICA8aDQgY2xhc3M9XCJwYW5lbC10aXRsZVwiICpuZ0lmPVwidGhpcy5uYW1lXCI+e3sgbmFtZSB9fTwvaDQ+XHJcbiAgICA8IS0tIDxuZy1jb250ZW50IHNlbGVjdD1cIltoZWFkZXJdXCI+PC9uZy1jb250ZW50PiAtLT5cclxuICA8L2Rpdj5cclxuICA8IS0tIGVuZCBwYW5lbC1oZWFkaW5nIC0tPlxyXG5cclxuICA8IS0tIGJlZ2luIGJlZm9yZS1ib2R5IC0tPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIltiZWZvcmVCb2R5XVwiPjwvbmctY29udGVudD5cclxuICA8IS0tIGVuZCBiZWZvcmUtYm9keSAtLT5cclxuXHJcbiAgPCEtLSBiZWdpbiBwYW5lbC1ib2R5IC0tPlxyXG4gIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCIgW25nQ2xhc3NdPVwiWyAodGhpcy5jb2xsYXBzZSkgPyAnZC1ub25lJzogJycsICh0aGlzLmJvZHlDbGFzcykgPyB0aGlzLmJvZHlDbGFzcyA6ICcnIF1cIlxyXG4gICAgKm5nSWY9XCIhdGhpcy5ub0JvZHlcIj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1sb2FkZXJcIiAqbmdJZj1cInRoaXMucmVsb2FkXCI+PHNwYW4gY2xhc3M9XCJzcGlubmVyLXNtYWxsXCI+PC9zcGFuPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDwhLS0gZW5kIHBhbmVsLWJvZHkgLS0+XHJcblxyXG4gIDwhLS0gYmVnaW4gbm8tYm9keSAtLT5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbbm9Cb2R5XVwiPjwvbmctY29udGVudD5cclxuICA8IS0tIGVuZCBuby1ib2R5IC0tPlxyXG5cclxuICA8IS0tIGJlZ2luIG91dHNpZGUtYm9keSAtLT5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbb3V0c2lkZUJvZHldXCI+PC9uZy1jb250ZW50PlxyXG4gIDwhLS0gZW5kIG91dHNpZGUtYm9keSAtLT5cclxuXHJcbiAgPCEtLSBiZWdpbiBwYW5lbC1mb290ZXIgLS0+XHJcbiAgPGRpdiBjbGFzcz1cInBhbmVsLWZvb3RlclwiICNwYW5lbEZvb3RlciBbaGlkZGVuXT1cIiFzaG93Rm9vdGVyXCJcclxuICAgIFtuZ0NsYXNzXT1cIlsgKHRoaXMuZm9vdGVyQ2xhc3MpID8gdGhpcy5mb290ZXJDbGFzcyA6ICcnIF1cIj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltmb290ZXJdXCI+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG4gIDwhLS0gZW5kIHBhbmVsLWZvb3RlciAtLT5cclxuXHJcbiAgPCEtLSBiZWdpbiBhZnRlci1mb290ZXIgLS0+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2FmdGVyRm9vdGVyXVwiPjwvbmctY29udGVudD5cclxuICA8IS0tIGVuZCBhZnRlci1mb290ZXIgLS0+XHJcbjwvZGl2PlxyXG48IS0tIGVuZCBwYW5lbCAtLT5cclxuIl19