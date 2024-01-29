import { DOCUMENT } from '@angular/common';
import { Component, Inject, ViewChild } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UIModalNotificationPage } from '../../modal-notification/modal-notification';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "@angular/common";
import * as i3 from "../../modal-notification/modal-notification";
var _c0 = ["panelFooter"];
function PanelRemoveComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵprojection(1, 5);
    i0.ɵɵtext(2, " \u00A0 ");
    i0.ɵɵprojection(3, 6);
    i0.ɵɵtext(4, " \u00A0 ");
    i0.ɵɵprojection(5, 7);
    i0.ɵɵtext(6, " \u00A0 ");
    i0.ɵɵprojection(7, 8);
    i0.ɵɵelementEnd();
} }
function PanelRemoveComponent_div_0_h4_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r53 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r53.title);
} }
function PanelRemoveComponent_div_0_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelement(1, "span", 13);
    i0.ɵɵelementEnd();
} }
var _c1 = function (a0, a1) { return [a0, a1]; };
function PanelRemoveComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵprojection(1, 9);
    i0.ɵɵtemplate(2, PanelRemoveComponent_div_0_div_5_div_2_Template, 2, 0, "div", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r54 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c1, ctx_r54.collapse ? "d-none" : "", ctx_r54.bodyClass ? ctx_r54.bodyClass : ""));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r54.reload);
} }
var _c2 = function (a0, a1, a2, a3) { return [a0, a1, a2, a3]; };
var _c3 = function (a0) { return [a0]; };
function PanelRemoveComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵtemplate(2, PanelRemoveComponent_div_0_div_2_Template, 8, 0, "div", 3);
    i0.ɵɵtemplate(3, PanelRemoveComponent_div_0_h4_3_Template, 2, 1, "h4", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵprojection(4);
    i0.ɵɵtemplate(5, PanelRemoveComponent_div_0_div_5_Template, 3, 5, "div", 5);
    i0.ɵɵprojection(6, 1);
    i0.ɵɵprojection(7, 2);
    i0.ɵɵelementStart(8, "div", 6, 7);
    i0.ɵɵprojection(10, 3);
    i0.ɵɵelementEnd();
    i0.ɵɵprojection(11, 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r51 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(6, _c2, ctx_r51.expand ? "panel-expand" : "", ctx_r51.reload ? "panel-loading" : "", ctx_r51.panelClass ? ctx_r51.panelClass : "", ctx_r51.variant ? "panel-" + ctx_r51.variant : "panel-inverse"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r51.noButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r51.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r51.noBody);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("hidden", !ctx_r51.showFooter)("ngClass", i0.ɵɵpureFunction1(11, _c3, ctx_r51.footerClass ? ctx_r51.footerClass : ""));
} }
var _c4 = [[["", "beforeBody", ""]], [["", "noBody", ""]], [["", "outsideBody", ""]], [["", "footer", ""]], [["", "afterFooter", ""]], [["", "header", ""]], [["", "expand", ""]], [["", "deleteButton", ""]], [["", "filterBtn", ""]], "*"];
var _c5 = ["[beforeBody]", "[noBody]", "[outsideBody]", "[footer]", "[afterFooter]", "[header]", "[expand]", "[deleteButton]", "[filterBtn]", "*"];
var PanelRemoveComponent = /** @class */ (function () {
    function PanelRemoveComponent(modalService, document) {
        this.modalService = modalService;
        this.reload = false;
        this.collapse = false;
        this.remove = false;
        this.showFooter = false;
        this.expand = false;
    }
    PanelRemoveComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.showFooter = _this.panelFooter.nativeElement && _this.panelFooter.nativeElement.children.length > 0;
        });
    };
    PanelRemoveComponent.prototype.panelReload = function () {
        var _this = this;
        this.reload = true;
        setTimeout(function () {
            _this.reload = false;
        }, 1500);
    };
    PanelRemoveComponent.prototype.panelCollapse = function () {
        this.collapse = !this.collapse;
    };
    PanelRemoveComponent.prototype.panelRemove = function () {
        this.modelNotification.swalDanger('Are you sure?', 'You will not be able to recover this Widget!');
        this.remove = !this.remove;
    };
    PanelRemoveComponent.prototype.openFormModel = function (content, test) {
        var _this = this;
        alert(test);
        this.lineWidgetForm = true;
        this.modalService.open(content, {
            windowClass: 'custom-class',
            backdrop: 'static'
        }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    PanelRemoveComponent.prototype.getDismissReason = function (reason) {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    PanelRemoveComponent.prototype.panelExpand = function () {
        this.expand = !this.expand;
    };
    PanelRemoveComponent.ɵfac = function PanelRemoveComponent_Factory(t) { return new (t || PanelRemoveComponent)(i0.ɵɵdirectiveInject(i1.NgbModal), i0.ɵɵdirectiveInject(DOCUMENT)); };
    PanelRemoveComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PanelRemoveComponent, selectors: [["app-panel-remove"]], viewQuery: function PanelRemoveComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
            i0.ɵɵviewQuery(UIModalNotificationPage, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.panelFooter = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modelNotification = _t.first);
        } }, inputs: { title: "title", variant: "variant", noBody: "noBody", noButton: "noButton", bodyClass: "bodyClass", footerClass: "footerClass", panelClass: "panelClass" }, ngContentSelectors: _c5, decls: 2, vars: 1, consts: [["class", "panel panel-inverse h-100 d-flex flex-column", 3, "ngClass", 4, "ngIf"], [1, "panel", "panel-inverse", "h-100", "d-flex", "flex-column", 3, "ngClass"], [1, "panel-heading"], ["class", "panel-heading-btn", 4, "ngIf"], ["class", "panel-title", 4, "ngIf"], ["class", "panel-body", "style", "padding:0px;height: 91%;", 3, "ngClass", 4, "ngIf"], [1, "panel-footer", 3, "hidden", "ngClass"], ["panelFooter", ""], [1, "panel-heading-btn"], [1, "panel-title"], [1, "panel-body", 2, "padding", "0px", "height", "91%", 3, "ngClass"], ["class", "panel-loader", 4, "ngIf"], [1, "panel-loader"], [1, "spinner-small"]], template: function PanelRemoveComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c4);
            i0.ɵɵtemplate(0, PanelRemoveComponent_div_0_Template, 12, 13, "div", 0);
            i0.ɵɵelement(1, "app-modal-notification");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.remove);
        } }, directives: [i2.NgIf, i3.UIModalNotificationPage, i2.NgClass], styles: [""] });
    return PanelRemoveComponent;
}());
export { PanelRemoveComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PanelRemoveComponent, [{
        type: Component,
        args: [{
                selector: 'app-panel-remove',
                inputs: ['title', 'variant', 'noBody', 'noButton', 'bodyClass', 'footerClass', 'panelClass'],
                templateUrl: './panel-remove.component.html',
                styleUrls: ['./panel-remove.component.css']
            }]
    }], function () { return [{ type: i1.NgbModal }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { panelFooter: [{
            type: ViewChild,
            args: ['panelFooter']
        }], modelNotification: [{
            type: ViewChild,
            args: [UIModalNotificationPage]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtcmVtb3ZlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsb2JhbC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvcGFuZWwvcGFuZWwtcmVtb3ZlL3BhbmVsLXJlbW92ZS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50L3BhbmVsL3BhbmVsLXJlbW92ZS9wYW5lbC1yZW1vdmUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBaUIsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLG1CQUFtQixFQUFZLE1BQU0sNEJBQTRCLENBQUM7QUFDM0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7Ozs7SUNHbEYsOEJBQ0U7SUFBQSxxQkFBOEI7SUFDOUIsd0JBQU87SUFBQSxxQkFBOEI7SUFDckMsd0JBQU87SUFBQSxxQkFBb0M7SUFDM0Msd0JBQU87SUFBQSxxQkFBaUM7SUFDMUMsaUJBQU07OztJQUNOLDZCQUEyQztJQUFBLFlBQVc7SUFBQSxpQkFBSzs7O0lBQWhCLGVBQVc7SUFBWCxtQ0FBVzs7O0lBWXRELCtCQUE4QztJQUFBLDJCQUFtQztJQUFBLGlCQUFNOzs7O0lBSHpGLCtCQUNFO0lBQUEscUJBQ0E7SUFDQSxrRkFBOEM7SUFDaEQsaUJBQU07OztJQUprQixrSUFBc0Y7SUFHbEYsZUFBbUI7SUFBbkIscUNBQW1COzs7OztJQXJCakQsOEJBQ0U7SUFDQSw4QkFDRTtJQUFBLDJFQUNFO0lBS0YseUVBQTJDO0lBQzdDLGlCQUFNO0lBSU4sa0JBQW1DO0lBSW5DLDJFQUNFO0lBT0YscUJBQThCO0lBSTlCLHFCQUFtQztJQUluQyxpQ0FDRTtJQUFBLHNCQUE4QjtJQUNoQyxpQkFBTTtJQUlOLHNCQUFtQztJQUVyQyxpQkFB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QixNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUM7Z0JBQzVGLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDOztzQkFrQjhDLE1BQU07dUJBQUMsUUFBUTs7a0JBaEIzRCxTQUFTO21CQUFDLGFBQWE7O2tCQUN2QixTQUFTO21CQUFDLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBJbmplY3QsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2RhbERpc21pc3NSZWFzb25zLCBOZ2JNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgVUlNb2RhbE5vdGlmaWNhdGlvblBhZ2UgfSBmcm9tICcuLi8uLi9tb2RhbC1ub3RpZmljYXRpb24vbW9kYWwtbm90aWZpY2F0aW9uJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcGFuZWwtcmVtb3ZlJyxcclxuICBpbnB1dHM6IFsndGl0bGUnLCAndmFyaWFudCcsICdub0JvZHknLCAnbm9CdXR0b24nLCAnYm9keUNsYXNzJywgJ2Zvb3RlckNsYXNzJywgJ3BhbmVsQ2xhc3MnXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGFuZWwtcmVtb3ZlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wYW5lbC1yZW1vdmUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYW5lbFJlbW92ZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBWaWV3Q2hpbGQoJ3BhbmVsRm9vdGVyJykgcGFuZWxGb290ZXI7XHJcbiAgQFZpZXdDaGlsZChVSU1vZGFsTm90aWZpY2F0aW9uUGFnZSkgbW9kZWxOb3RpZmljYXRpb247XHJcbiAgdGl0bGU6c3RyaW5nO1xyXG4gIHZhcmlhbnQ6Ym9vbGVhbjtcclxuICBub0JvZHk6Ym9vbGVhbjtcclxuICBub0J1dHRvbjpib29sZWFuO1xyXG4gIGJvZHlDbGFzczpib29sZWFuO1xyXG4gIGZvb3RlckNsYXNzOmJvb2xlYW47XHJcbiAgcGFuZWxDbGFzczpib29sZWFuO1xyXG4gIHJlbG9hZCA9IGZhbHNlO1xyXG4gIGNvbGxhcHNlID0gZmFsc2U7XHJcbiAgcmVtb3ZlID0gZmFsc2U7XHJcbiAgY2xvc2VSZXN1bHQ6IHN0cmluZztcclxuICBzaG93Rm9vdGVyID0gZmFsc2U7XHJcbiAgbGluZVdpZGdldEZvcm06IGJvb2xlYW47XHJcbiAgZXhwYW5kID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsLCBASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudDogYW55KSB7XHJcblxyXG4gIH1cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zaG93Rm9vdGVyID0gdGhpcy5wYW5lbEZvb3Rlci5uYXRpdmVFbGVtZW50ICYmIHRoaXMucGFuZWxGb290ZXIubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPiAwO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwYW5lbFJlbG9hZCgpIHtcclxuICAgIHRoaXMucmVsb2FkID0gdHJ1ZTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnJlbG9hZCA9IGZhbHNlO1xyXG4gICAgfSwgMTUwMCk7XHJcbiAgfVxyXG4gIHBhbmVsQ29sbGFwc2UoKSB7XHJcbiAgICB0aGlzLmNvbGxhcHNlID0gIXRoaXMuY29sbGFwc2U7XHJcbiAgfVxyXG4gIHBhbmVsUmVtb3ZlKCkge1xyXG4gICAgXHJcbiAgICB0aGlzLm1vZGVsTm90aWZpY2F0aW9uLnN3YWxEYW5nZXIoJ0FyZSB5b3Ugc3VyZT8nLCAnWW91IHdpbGwgbm90IGJlIGFibGUgdG8gcmVjb3ZlciB0aGlzIFdpZGdldCEnKTtcclxuICAgIFxyXG4gICAgdGhpcy5yZW1vdmUgPSAhdGhpcy5yZW1vdmU7XHJcbiAgfVxyXG5cclxuICBvcGVuRm9ybU1vZGVsKGNvbnRlbnQsdGVzdDpzdHJpbmcpIHtcclxuICAgIGFsZXJ0KHRlc3QpO1xyXG5cclxuICAgIHRoaXMubGluZVdpZGdldEZvcm09dHJ1ZTtcclxuICAgIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oY29udGVudCwgXHJcbiAgICAgIHtcclxuICAgICAgICAgIHdpbmRvd0NsYXNzOiAnY3VzdG9tLWNsYXNzJyxcclxuICAgICAgICAgIGJhY2tkcm9wOidzdGF0aWMnXHJcbiAgICAgIH0pLnJlc3VsdC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgdGhpcy5jbG9zZVJlc3VsdCA9IGBDbG9zZWQgd2l0aDogJHtyZXN1bHR9YDtcclxuICAgIH0sIChyZWFzb24pID0+IHtcclxuICAgICBcclxuICAgICAgdGhpcy5jbG9zZVJlc3VsdCA9IGBEaXNtaXNzZWQgJHt0aGlzLmdldERpc21pc3NSZWFzb24ocmVhc29uKX1gO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICB9XHJcbiAgcHJpdmF0ZSBnZXREaXNtaXNzUmVhc29uKHJlYXNvbjogYW55KTogc3RyaW5nIHtcclxuICAgIGlmIChyZWFzb24gPT09IE1vZGFsRGlzbWlzc1JlYXNvbnMuRVNDKSB7XHJcbiAgICAgIHJldHVybiAnYnkgcHJlc3NpbmcgRVNDJztcclxuICAgIH0gZWxzZSBpZiAocmVhc29uID09PSBNb2RhbERpc21pc3NSZWFzb25zLkJBQ0tEUk9QX0NMSUNLKSB7XHJcbiAgICAgIHJldHVybiAnYnkgY2xpY2tpbmcgb24gYSBiYWNrZHJvcCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gYHdpdGg6ICR7cmVhc29ufWA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwYW5lbEV4cGFuZCgpIHtcclxuICAgIHRoaXMuZXhwYW5kID0gIXRoaXMuZXhwYW5kO1xyXG5cclxuICB9XHJcbn1cclxuIiwiPCEtLSBiZWdpbiBwYW5lbCAtLT5cclxuXHJcblxyXG48ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtaW52ZXJzZSBoLTEwMCBkLWZsZXggZmxleC1jb2x1bW5cIiAgW25nQ2xhc3NdPVwiWyAodGhpcy5leHBhbmQpID8gJ3BhbmVsLWV4cGFuZCc6ICcnLCAodGhpcy5yZWxvYWQpID8gJ3BhbmVsLWxvYWRpbmcnOiAnJywgKHRoaXMucGFuZWxDbGFzcykgPyB0aGlzLnBhbmVsQ2xhc3MgOiAnJywgKHRoaXMudmFyaWFudCkgPyAncGFuZWwtJyArIHRoaXMudmFyaWFudCA6ICdwYW5lbC1pbnZlcnNlJyBdXCIgKm5nSWY9XCIhdGhpcy5yZW1vdmVcIj5cclxuICA8IS0tIGJlZ2luIHBhbmVsLWhlYWRpbmcgLS0+XHJcbiAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nLWJ0blwiICpuZ0lmPVwiIXRoaXMubm9CdXR0b25cIj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2hlYWRlcl1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgICZuYnNwOyA8bmctY29udGVudCBzZWxlY3Q9XCJbZXhwYW5kXVwiPjwvbmctY29udGVudD5cclxuICAgICAgJm5ic3A7IDxuZy1jb250ZW50IHNlbGVjdD1cIltkZWxldGVCdXR0b25dXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICAmbmJzcDsgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2ZpbHRlckJ0bl1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxoNCBjbGFzcz1cInBhbmVsLXRpdGxlXCIgKm5nSWY9XCJ0aGlzLnRpdGxlXCI+e3sgdGl0bGUgfX08L2g0PlxyXG4gIDwvZGl2PlxyXG4gIDwhLS0gZW5kIHBhbmVsLWhlYWRpbmcgLS0+XHJcblxyXG4gIDwhLS0gYmVnaW4gYmVmb3JlLWJvZHkgLS0+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2JlZm9yZUJvZHldXCIgPjwvbmctY29udGVudD5cclxuICA8IS0tIGVuZCBiZWZvcmUtYm9keSAtLT5cclxuXHJcbiAgPCEtLSBiZWdpbiBwYW5lbC1ib2R5IC0tPlxyXG4gIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCIgW25nQ2xhc3NdPVwiWyAodGhpcy5jb2xsYXBzZSkgPyAnZC1ub25lJzogJycsICh0aGlzLmJvZHlDbGFzcykgPyB0aGlzLmJvZHlDbGFzcyA6ICcnIF1cIiAqbmdJZj1cIiF0aGlzLm5vQm9keVwiICBzdHlsZT1cInBhZGRpbmc6MHB4O2hlaWdodDogOTElO1wiID5cclxuICAgIDxuZy1jb250ZW50PlxyXG4gICAgPC9uZy1jb250ZW50PlxyXG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWxvYWRlclwiICpuZ0lmPVwidGhpcy5yZWxvYWRcIj48c3BhbiBjbGFzcz1cInNwaW5uZXItc21hbGxcIj48L3NwYW4+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPCEtLSBlbmQgcGFuZWwtYm9keSAtLT5cclxuXHJcbiAgPCEtLSBiZWdpbiBuby1ib2R5IC0tPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIltub0JvZHldXCI+PC9uZy1jb250ZW50PlxyXG4gIDwhLS0gZW5kIG5vLWJvZHkgLS0+XHJcblxyXG4gIDwhLS0gYmVnaW4gb3V0c2lkZS1ib2R5IC0tPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIltvdXRzaWRlQm9keV1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPCEtLSBlbmQgb3V0c2lkZS1ib2R5IC0tPlxyXG5cclxuICA8IS0tIGJlZ2luIHBhbmVsLWZvb3RlciAtLT5cclxuICA8ZGl2IGNsYXNzPVwicGFuZWwtZm9vdGVyXCIgI3BhbmVsRm9vdGVyIFtoaWRkZW5dPVwiIXNob3dGb290ZXJcIiBbbmdDbGFzc109XCJbICh0aGlzLmZvb3RlckNsYXNzKSA/IHRoaXMuZm9vdGVyQ2xhc3MgOiAnJyBdXCI+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbZm9vdGVyXVwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuICA8IS0tIGVuZCBwYW5lbC1mb290ZXIgLS0+XHJcblxyXG4gIDwhLS0gYmVnaW4gYWZ0ZXItZm9vdGVyIC0tPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIlthZnRlckZvb3Rlcl1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPCEtLSBlbmQgYWZ0ZXItZm9vdGVyIC0tPlxyXG48L2Rpdj5cclxuPCEtLSBlbmQgcGFuZWwgLS0+XHJcbjxhcHAtbW9kYWwtbm90aWZpY2F0aW9uPjwvYXBwLW1vZGFsLW5vdGlmaWNhdGlvbj5cclxuIl19