import { DOCUMENT } from '@angular/common';
import { Component, Inject, ViewChild } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UIModalNotificationPage } from '../../modal-notification/modal-notification';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "@angular/common";
import * as i3 from "../../modal-notification/modal-notification";
const _c0 = ["panelFooter"];
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
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r19.title);
} }
function PanelRemoveComponent_div_0_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelement(1, "span", 13);
    i0.ɵɵelementEnd();
} }
const _c1 = function (a0, a1) { return [a0, a1]; };
function PanelRemoveComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵprojection(1, 9);
    i0.ɵɵtemplate(2, PanelRemoveComponent_div_0_div_5_div_2_Template, 2, 0, "div", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c1, ctx_r20.collapse ? "d-none" : "", ctx_r20.bodyClass ? ctx_r20.bodyClass : ""));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r20.reload);
} }
const _c2 = function (a0, a1, a2, a3) { return [a0, a1, a2, a3]; };
const _c3 = function (a0) { return [a0]; };
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
    const ctx_r17 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(6, _c2, ctx_r17.expand ? "panel-expand" : "", ctx_r17.reload ? "panel-loading" : "", ctx_r17.panelClass ? ctx_r17.panelClass : "", ctx_r17.variant ? "panel-" + ctx_r17.variant : "panel-inverse"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r17.noButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r17.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r17.noBody);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("hidden", !ctx_r17.showFooter)("ngClass", i0.ɵɵpureFunction1(11, _c3, ctx_r17.footerClass ? ctx_r17.footerClass : ""));
} }
const _c4 = [[["", "beforeBody", ""]], [["", "noBody", ""]], [["", "outsideBody", ""]], [["", "footer", ""]], [["", "afterFooter", ""]], [["", "header", ""]], [["", "expand", ""]], [["", "deleteButton", ""]], [["", "filterBtn", ""]], "*"];
const _c5 = ["[beforeBody]", "[noBody]", "[outsideBody]", "[footer]", "[afterFooter]", "[header]", "[expand]", "[deleteButton]", "[filterBtn]", "*"];
export class PanelRemoveComponent {
    constructor(modalService, document) {
        this.modalService = modalService;
        this.reload = false;
        this.collapse = false;
        this.remove = false;
        this.showFooter = false;
        this.expand = false;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.showFooter = this.panelFooter.nativeElement && this.panelFooter.nativeElement.children.length > 0;
        });
    }
    panelReload() {
        this.reload = true;
        setTimeout(() => {
            this.reload = false;
        }, 1500);
    }
    panelCollapse() {
        this.collapse = !this.collapse;
    }
    panelRemove() {
        this.modelNotification.swalDanger('Are you sure?', 'You will not be able to recover this Widget!');
        this.remove = !this.remove;
    }
    openFormModel(content, test) {
        alert(test);
        this.lineWidgetForm = true;
        this.modalService.open(content, {
            windowClass: 'custom-class',
            backdrop: 'static'
        }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    panelExpand() {
        this.expand = !this.expand;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtcmVtb3ZlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsb2JhbC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvcGFuZWwvcGFuZWwtcmVtb3ZlL3BhbmVsLXJlbW92ZS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50L3BhbmVsL3BhbmVsLXJlbW92ZS9wYW5lbC1yZW1vdmUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBaUIsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLG1CQUFtQixFQUFZLE1BQU0sNEJBQTRCLENBQUM7QUFDM0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7Ozs7SUNHbEYsOEJBQ0U7SUFBQSxxQkFBOEI7SUFDOUIsd0JBQU87SUFBQSxxQkFBOEI7SUFDckMsd0JBQU87SUFBQSxxQkFBb0M7SUFDM0Msd0JBQU87SUFBQSxxQkFBaUM7SUFDMUMsaUJBQU07OztJQUNOLDZCQUEyQztJQUFBLFlBQVc7SUFBQSxpQkFBSzs7O0lBQWhCLGVBQVc7SUFBWCxtQ0FBVzs7O0lBWXRELCtCQUE4QztJQUFBLDJCQUFtQztJQUFBLGlCQUFNOzs7O0lBSHpGLCtCQUNFO0lBQUEscUJBQ0E7SUFDQSxrRkFBOEM7SUFDaEQsaUJBQU07OztJQUprQixrSUFBc0Y7SUFHbEYsZUFBbUI7SUFBbkIscUNBQW1COzs7OztJQXJCakQsOEJBQ0U7SUFDQSw4QkFDRTtJQUFBLDJFQUNFO0lBS0YseUVBQTJDO0lBQzdDLGlCQUFNO0lBSU4sa0JBQW1DO0lBSW5DLDJFQUNFO0lBT0YscUJBQThCO0lBSTlCLHFCQUFtQztJQUluQyxpQ0FDRTtJQUFBLHNCQUE4QjtJQUNoQyxpQkFBTTtJQUlOLHNCQUFtQztJQUVyQyxpQkFBTTs7O0lBMUNxRCwrT0FBNkw7SUFHck4sZUFBc0I7SUFBdEIsd0NBQXNCO0lBTTdCLGVBQWtCO0lBQWxCLG9DQUFrQjtJQVNtRSxlQUFvQjtJQUFwQixzQ0FBb0I7SUFnQjVGLGVBQXNCO0lBQXRCLDRDQUFzQix3RkFBQTs7OztBRDNCL0QsTUFBTSxPQUFPLG9CQUFvQjtJQWlCL0IsWUFBb0IsWUFBc0IsRUFBb0IsUUFBYTtRQUF2RCxpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQVAxQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQixXQUFNLEdBQUcsS0FBSyxDQUFDO0lBR2YsQ0FBQztJQUNELGVBQWU7UUFDYixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN6RyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFbkIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDakMsQ0FBQztJQUNELFdBQVc7UUFFVCxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSw4Q0FBOEMsQ0FBQyxDQUFDO1FBRW5HLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzdCLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBTyxFQUFDLElBQVc7UUFDL0IsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRVosSUFBSSxDQUFDLGNBQWMsR0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUM1QjtZQUNJLFdBQVcsRUFBRSxjQUFjO1lBQzNCLFFBQVEsRUFBQyxRQUFRO1NBQ3BCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsTUFBTSxFQUFFLENBQUM7UUFDOUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFFWixJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBQ08sZ0JBQWdCLENBQUMsTUFBVztRQUNsQyxJQUFJLE1BQU0sS0FBSyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUU7WUFDdEMsT0FBTyxpQkFBaUIsQ0FBQztTQUMxQjthQUFNLElBQUksTUFBTSxLQUFLLG1CQUFtQixDQUFDLGNBQWMsRUFBRTtZQUN4RCxPQUFPLDJCQUEyQixDQUFDO1NBQ3BDO2FBQU07WUFDTCxPQUFPLFNBQVMsTUFBTSxFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRTdCLENBQUM7O3dGQXhFVSxvQkFBb0IsMERBaUJxQixRQUFRO3lEQWpCakQsb0JBQW9COzt1QkFFcEIsdUJBQXVCOzs7Ozs7O1FDVHBDLHVFQUNFO1FBMkNGLHlDQUFpRDs7UUE1Q3dNLGtDQUFvQjs7a0RET2hRLG9CQUFvQjtjQU5oQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFDO2dCQUM1RixXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1Qzs7c0JBa0I4QyxNQUFNO3VCQUFDLFFBQVE7O2tCQWhCM0QsU0FBUzttQkFBQyxhQUFhOztrQkFDdkIsU0FBUzttQkFBQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgSW5qZWN0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW9kYWxEaXNtaXNzUmVhc29ucywgTmdiTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IFVJTW9kYWxOb3RpZmljYXRpb25QYWdlIH0gZnJvbSAnLi4vLi4vbW9kYWwtbm90aWZpY2F0aW9uL21vZGFsLW5vdGlmaWNhdGlvbic7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXBhbmVsLXJlbW92ZScsXHJcbiAgaW5wdXRzOiBbJ3RpdGxlJywgJ3ZhcmlhbnQnLCAnbm9Cb2R5JywgJ25vQnV0dG9uJywgJ2JvZHlDbGFzcycsICdmb290ZXJDbGFzcycsICdwYW5lbENsYXNzJ10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BhbmVsLXJlbW92ZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGFuZWwtcmVtb3ZlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFuZWxSZW1vdmVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBAVmlld0NoaWxkKCdwYW5lbEZvb3RlcicpIHBhbmVsRm9vdGVyO1xyXG4gIEBWaWV3Q2hpbGQoVUlNb2RhbE5vdGlmaWNhdGlvblBhZ2UpIG1vZGVsTm90aWZpY2F0aW9uO1xyXG4gIHRpdGxlOnN0cmluZztcclxuICB2YXJpYW50OmJvb2xlYW47XHJcbiAgbm9Cb2R5OmJvb2xlYW47XHJcbiAgbm9CdXR0b246Ym9vbGVhbjtcclxuICBib2R5Q2xhc3M6Ym9vbGVhbjtcclxuICBmb290ZXJDbGFzczpib29sZWFuO1xyXG4gIHBhbmVsQ2xhc3M6Ym9vbGVhbjtcclxuICByZWxvYWQgPSBmYWxzZTtcclxuICBjb2xsYXBzZSA9IGZhbHNlO1xyXG4gIHJlbW92ZSA9IGZhbHNlO1xyXG4gIGNsb3NlUmVzdWx0OiBzdHJpbmc7XHJcbiAgc2hvd0Zvb3RlciA9IGZhbHNlO1xyXG4gIGxpbmVXaWRnZXRGb3JtOiBib29sZWFuO1xyXG4gIGV4cGFuZCA9IGZhbHNlO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCwgQEluamVjdChET0NVTUVOVCkgZG9jdW1lbnQ6IGFueSkge1xyXG5cclxuICB9XHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2hvd0Zvb3RlciA9IHRoaXMucGFuZWxGb290ZXIubmF0aXZlRWxlbWVudCAmJiB0aGlzLnBhbmVsRm9vdGVyLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcGFuZWxSZWxvYWQoKSB7XHJcbiAgICB0aGlzLnJlbG9hZCA9IHRydWU7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZWxvYWQgPSBmYWxzZTtcclxuICAgIH0sIDE1MDApO1xyXG4gIH1cclxuICBwYW5lbENvbGxhcHNlKCkge1xyXG4gICAgdGhpcy5jb2xsYXBzZSA9ICF0aGlzLmNvbGxhcHNlO1xyXG4gIH1cclxuICBwYW5lbFJlbW92ZSgpIHtcclxuICAgIFxyXG4gICAgdGhpcy5tb2RlbE5vdGlmaWNhdGlvbi5zd2FsRGFuZ2VyKCdBcmUgeW91IHN1cmU/JywgJ1lvdSB3aWxsIG5vdCBiZSBhYmxlIHRvIHJlY292ZXIgdGhpcyBXaWRnZXQhJyk7XHJcbiAgICBcclxuICAgIHRoaXMucmVtb3ZlID0gIXRoaXMucmVtb3ZlO1xyXG4gIH1cclxuXHJcbiAgb3BlbkZvcm1Nb2RlbChjb250ZW50LHRlc3Q6c3RyaW5nKSB7XHJcbiAgICBhbGVydCh0ZXN0KTtcclxuXHJcbiAgICB0aGlzLmxpbmVXaWRnZXRGb3JtPXRydWU7XHJcbiAgICB0aGlzLm1vZGFsU2VydmljZS5vcGVuKGNvbnRlbnQsIFxyXG4gICAgICB7XHJcbiAgICAgICAgICB3aW5kb3dDbGFzczogJ2N1c3RvbS1jbGFzcycsXHJcbiAgICAgICAgICBiYWNrZHJvcDonc3RhdGljJ1xyXG4gICAgICB9KS5yZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIHRoaXMuY2xvc2VSZXN1bHQgPSBgQ2xvc2VkIHdpdGg6ICR7cmVzdWx0fWA7XHJcbiAgICB9LCAocmVhc29uKSA9PiB7XHJcbiAgICAgXHJcbiAgICAgIHRoaXMuY2xvc2VSZXN1bHQgPSBgRGlzbWlzc2VkICR7dGhpcy5nZXREaXNtaXNzUmVhc29uKHJlYXNvbil9YDtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgfVxyXG4gIHByaXZhdGUgZ2V0RGlzbWlzc1JlYXNvbihyZWFzb246IGFueSk6IHN0cmluZyB7XHJcbiAgICBpZiAocmVhc29uID09PSBNb2RhbERpc21pc3NSZWFzb25zLkVTQykge1xyXG4gICAgICByZXR1cm4gJ2J5IHByZXNzaW5nIEVTQyc7XHJcbiAgICB9IGVsc2UgaWYgKHJlYXNvbiA9PT0gTW9kYWxEaXNtaXNzUmVhc29ucy5CQUNLRFJPUF9DTElDSykge1xyXG4gICAgICByZXR1cm4gJ2J5IGNsaWNraW5nIG9uIGEgYmFja2Ryb3AnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGB3aXRoOiAke3JlYXNvbn1gO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcGFuZWxFeHBhbmQoKSB7XHJcbiAgICB0aGlzLmV4cGFuZCA9ICF0aGlzLmV4cGFuZDtcclxuXHJcbiAgfVxyXG59XHJcbiIsIjwhLS0gYmVnaW4gcGFuZWwgLS0+XHJcblxyXG5cclxuPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWludmVyc2UgaC0xMDAgZC1mbGV4IGZsZXgtY29sdW1uXCIgIFtuZ0NsYXNzXT1cIlsgKHRoaXMuZXhwYW5kKSA/ICdwYW5lbC1leHBhbmQnOiAnJywgKHRoaXMucmVsb2FkKSA/ICdwYW5lbC1sb2FkaW5nJzogJycsICh0aGlzLnBhbmVsQ2xhc3MpID8gdGhpcy5wYW5lbENsYXNzIDogJycsICh0aGlzLnZhcmlhbnQpID8gJ3BhbmVsLScgKyB0aGlzLnZhcmlhbnQgOiAncGFuZWwtaW52ZXJzZScgXVwiICpuZ0lmPVwiIXRoaXMucmVtb3ZlXCI+XHJcbiAgPCEtLSBiZWdpbiBwYW5lbC1oZWFkaW5nIC0tPlxyXG4gIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZy1idG5cIiAqbmdJZj1cIiF0aGlzLm5vQnV0dG9uXCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltoZWFkZXJdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICAmbmJzcDsgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2V4cGFuZF1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgICZuYnNwOyA8bmctY29udGVudCBzZWxlY3Q9XCJbZGVsZXRlQnV0dG9uXVwiPjwvbmctY29udGVudD5cclxuICAgICAgJm5ic3A7IDxuZy1jb250ZW50IHNlbGVjdD1cIltmaWx0ZXJCdG5dXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8aDQgY2xhc3M9XCJwYW5lbC10aXRsZVwiICpuZ0lmPVwidGhpcy50aXRsZVwiPnt7IHRpdGxlIH19PC9oND5cclxuICA8L2Rpdj5cclxuICA8IS0tIGVuZCBwYW5lbC1oZWFkaW5nIC0tPlxyXG5cclxuICA8IS0tIGJlZ2luIGJlZm9yZS1ib2R5IC0tPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIltiZWZvcmVCb2R5XVwiID48L25nLWNvbnRlbnQ+XHJcbiAgPCEtLSBlbmQgYmVmb3JlLWJvZHkgLS0+XHJcblxyXG4gIDwhLS0gYmVnaW4gcGFuZWwtYm9keSAtLT5cclxuICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiIFtuZ0NsYXNzXT1cIlsgKHRoaXMuY29sbGFwc2UpID8gJ2Qtbm9uZSc6ICcnLCAodGhpcy5ib2R5Q2xhc3MpID8gdGhpcy5ib2R5Q2xhc3MgOiAnJyBdXCIgKm5nSWY9XCIhdGhpcy5ub0JvZHlcIiAgc3R5bGU9XCJwYWRkaW5nOjBweDtoZWlnaHQ6IDkxJTtcIiA+XHJcbiAgICA8bmctY29udGVudD5cclxuICAgIDwvbmctY29udGVudD5cclxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1sb2FkZXJcIiAqbmdJZj1cInRoaXMucmVsb2FkXCI+PHNwYW4gY2xhc3M9XCJzcGlubmVyLXNtYWxsXCI+PC9zcGFuPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDwhLS0gZW5kIHBhbmVsLWJvZHkgLS0+XHJcblxyXG4gIDwhLS0gYmVnaW4gbm8tYm9keSAtLT5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbbm9Cb2R5XVwiPjwvbmctY29udGVudD5cclxuICA8IS0tIGVuZCBuby1ib2R5IC0tPlxyXG5cclxuICA8IS0tIGJlZ2luIG91dHNpZGUtYm9keSAtLT5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbb3V0c2lkZUJvZHldXCI+PC9uZy1jb250ZW50PlxyXG4gIDwhLS0gZW5kIG91dHNpZGUtYm9keSAtLT5cclxuXHJcbiAgPCEtLSBiZWdpbiBwYW5lbC1mb290ZXIgLS0+XHJcbiAgPGRpdiBjbGFzcz1cInBhbmVsLWZvb3RlclwiICNwYW5lbEZvb3RlciBbaGlkZGVuXT1cIiFzaG93Rm9vdGVyXCIgW25nQ2xhc3NdPVwiWyAodGhpcy5mb290ZXJDbGFzcykgPyB0aGlzLmZvb3RlckNsYXNzIDogJycgXVwiPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2Zvb3Rlcl1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbiAgPCEtLSBlbmQgcGFuZWwtZm9vdGVyIC0tPlxyXG5cclxuICA8IS0tIGJlZ2luIGFmdGVyLWZvb3RlciAtLT5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbYWZ0ZXJGb290ZXJdXCI+PC9uZy1jb250ZW50PlxyXG4gIDwhLS0gZW5kIGFmdGVyLWZvb3RlciAtLT5cclxuPC9kaXY+XHJcbjwhLS0gZW5kIHBhbmVsIC0tPlxyXG48YXBwLW1vZGFsLW5vdGlmaWNhdGlvbj48L2FwcC1tb2RhbC1ub3RpZmljYXRpb24+XHJcbiJdfQ==