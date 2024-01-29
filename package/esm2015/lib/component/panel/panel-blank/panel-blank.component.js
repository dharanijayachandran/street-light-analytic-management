import { DOCUMENT } from '@angular/common';
import { Component, Inject, ViewChild } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UIModalNotificationPage } from '../../modal-notification/modal-notification';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "@angular/common";
import * as i3 from "../../modal-notification/modal-notification";
const _c0 = ["panelFooter"];
const _c1 = function (a0, a1, a2, a3) { return [a0, a1, a2, a3]; };
const _c2 = function (a0) { return [a0]; };
function PanelBlankComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd();
    i0.ɵɵprojection(3, 1);
    i0.ɵɵprojection(4, 2);
    i0.ɵɵelementStart(5, "div", 3, 4);
    i0.ɵɵprojection(7, 3);
    i0.ɵɵelementEnd();
    i0.ɵɵprojection(8, 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(3, _c1, ctx_r10.expand ? "panel-expand" : "", ctx_r10.reload ? "panel-loading" : "", ctx_r10.panelClass ? ctx_r10.panelClass : "", ctx_r10.variant ? "panel-" + ctx_r10.variant : "panel-inverse"));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("hidden", !ctx_r10.showFooter)("ngClass", i0.ɵɵpureFunction1(8, _c2, ctx_r10.footerClass ? ctx_r10.footerClass : ""));
} }
const _c3 = ["*", [["", "noBody", ""]], [["", "outsideBody", ""]], [["", "footer", ""]], [["", "afterFooter", ""]]];
const _c4 = ["*", "[noBody]", "[outsideBody]", "[footer]", "[afterFooter]"];
export class PanelBlankComponent {
    constructor(modalService, document) {
        this.modalService = modalService;
        this.expand = false;
        this.reload = false;
        this.collapse = false;
        this.remove = false;
        this.showFooter = false;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.showFooter = this.panelFooter.nativeElement && this.panelFooter.nativeElement.children.length > 0;
        });
    }
    panelExpand() {
        this.expand = !this.expand;
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
}
PanelBlankComponent.ɵfac = function PanelBlankComponent_Factory(t) { return new (t || PanelBlankComponent)(i0.ɵɵdirectiveInject(i1.NgbModal), i0.ɵɵdirectiveInject(DOCUMENT)); };
PanelBlankComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PanelBlankComponent, selectors: [["app-panel-blank"]], viewQuery: function PanelBlankComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(UIModalNotificationPage, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.panelFooter = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modelNotification = _t.first);
    } }, ngContentSelectors: _c4, decls: 2, vars: 1, consts: [["class", "panel panel-inverse", 3, "ngClass", 4, "ngIf"], [1, "panel", "panel-inverse", 3, "ngClass"], [1, "panel-body", 2, "width", "100%"], [1, "panel-footer", 3, "hidden", "ngClass"], ["panelFooter", ""]], template: function PanelBlankComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c3);
        i0.ɵɵtemplate(0, PanelBlankComponent_div_0_Template, 9, 10, "div", 0);
        i0.ɵɵelement(1, "app-modal-notification");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.remove);
    } }, directives: [i2.NgIf, i3.UIModalNotificationPage, i2.NgClass], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PanelBlankComponent, [{
        type: Component,
        args: [{
                selector: 'app-panel-blank',
                templateUrl: './panel-blank.component.html',
                styleUrls: ['./panel-blank.component.css']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtYmxhbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2xvYmFsLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9wYW5lbC9wYW5lbC1ibGFuay9wYW5lbC1ibGFuay5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50L3BhbmVsL3BhbmVsLWJsYW5rL3BhbmVsLWJsYW5rLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQWlCLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxtQkFBbUIsRUFBWSxNQUFNLDRCQUE0QixDQUFDO0FBQzNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOzs7Ozs7Ozs7SUNBdEYsOEJBSUk7SUFDQSw4QkFDRTtJQUFBLGtCQUNBO0lBQ0YsaUJBQU07SUFJTixxQkFBOEI7SUFJOUIscUJBQW1DO0lBSW5DLGlDQUNFO0lBQUEscUJBQThCO0lBQ2hDLGlCQUFNO0lBSU4scUJBQW1DO0lBRXJDLGlCQUFNOzs7SUE1QjBCLCtPQUE2TDtJQW9CcEwsZUFBc0I7SUFBdEIsNENBQXNCLHVGQUFBOzs7O0FEZGpFLE1BQU0sT0FBTyxtQkFBbUI7SUFnQjlCLFlBQXFCLFlBQXNCLEVBQW9CLFFBQWE7UUFBdkQsaUJBQVksR0FBWixZQUFZLENBQVU7UUFQM0MsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFZixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBSW5CLENBQUM7SUFDRCxlQUFlO1FBQ2IsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDekcsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzdCLENBQUM7SUFDRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFbkIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDakMsQ0FBQztJQUNELFdBQVc7UUFFVCxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSw4Q0FBOEMsQ0FBQyxDQUFDO1FBRW5HLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzdCLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBTyxFQUFDLElBQVc7UUFDL0IsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRVosSUFBSSxDQUFDLGNBQWMsR0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUM1QjtZQUNJLFdBQVcsRUFBRSxjQUFjO1lBQzNCLFFBQVEsRUFBQyxRQUFRO1NBQ3BCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsTUFBTSxFQUFFLENBQUM7UUFDOUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFFWixJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBQ08sZ0JBQWdCLENBQUMsTUFBVztRQUNsQyxJQUFJLE1BQU0sS0FBSyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUU7WUFDdEMsT0FBTyxpQkFBaUIsQ0FBQztTQUMxQjthQUFNLElBQUksTUFBTSxLQUFLLG1CQUFtQixDQUFDLGNBQWMsRUFBRTtZQUN4RCxPQUFPLDJCQUEyQixDQUFDO1NBQ3BDO2FBQU07WUFDTCxPQUFPLFNBQVMsTUFBTSxFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDOztzRkFyRVUsbUJBQW1CLDBEQWdCdUIsUUFBUTt3REFoQmxELG1CQUFtQjs7dUJBRW5CLHVCQUF1Qjs7Ozs7OztRQ1JwQyxxRUFJSTtRQTBCRix5Q0FBaUQ7O1FBOUI2SyxrQ0FBb0I7O2tERE12TyxtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDOztzQkFpQitDLE1BQU07dUJBQUMsUUFBUTs7a0JBZjVELFNBQVM7bUJBQUMsYUFBYTs7a0JBQ3ZCLFNBQVM7bUJBQUMsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEluamVjdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1vZGFsRGlzbWlzc1JlYXNvbnMsIE5nYk1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBVSU1vZGFsTm90aWZpY2F0aW9uUGFnZSB9IGZyb20gJy4uLy4uL21vZGFsLW5vdGlmaWNhdGlvbi9tb2RhbC1ub3RpZmljYXRpb24nO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1wYW5lbC1ibGFuaycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BhbmVsLWJsYW5rLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wYW5lbC1ibGFuay5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhbmVsQmxhbmtDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBAVmlld0NoaWxkKCdwYW5lbEZvb3RlcicpIHBhbmVsRm9vdGVyO1xyXG4gIEBWaWV3Q2hpbGQoVUlNb2RhbE5vdGlmaWNhdGlvblBhZ2UpIG1vZGVsTm90aWZpY2F0aW9uO1xyXG4gIHZhcmlhbnQ6Ym9vbGVhbjtcclxuICBub0JvZHk6Ym9vbGVhbjtcclxuICBub0J1dHRvbjpib29sZWFuO1xyXG4gIGJvZHlDbGFzczpib29sZWFuO1xyXG4gIGZvb3RlckNsYXNzOmJvb2xlYW47XHJcbiAgcGFuZWxDbGFzczpib29sZWFuO1xyXG4gIGV4cGFuZCA9IGZhbHNlO1xyXG4gIHJlbG9hZCA9IGZhbHNlO1xyXG4gIGNvbGxhcHNlID0gZmFsc2U7XHJcbiAgcmVtb3ZlID0gZmFsc2U7XHJcbiAgY2xvc2VSZXN1bHQ6IHN0cmluZztcclxuICBzaG93Rm9vdGVyID0gZmFsc2U7XHJcbiAgbGluZVdpZGdldEZvcm06IGJvb2xlYW47XHJcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCwgQEluamVjdChET0NVTUVOVCkgZG9jdW1lbnQ6IGFueSkge1xyXG5cclxuICB9XHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2hvd0Zvb3RlciA9IHRoaXMucGFuZWxGb290ZXIubmF0aXZlRWxlbWVudCAmJiB0aGlzLnBhbmVsRm9vdGVyLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcGFuZWxFeHBhbmQoKSB7XHJcbiAgICB0aGlzLmV4cGFuZCA9ICF0aGlzLmV4cGFuZDtcclxuICB9XHJcbiAgcGFuZWxSZWxvYWQoKSB7XHJcbiAgICB0aGlzLnJlbG9hZCA9IHRydWU7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZWxvYWQgPSBmYWxzZTtcclxuICAgIH0sIDE1MDApO1xyXG4gIH1cclxuICBwYW5lbENvbGxhcHNlKCkge1xyXG4gICAgdGhpcy5jb2xsYXBzZSA9ICF0aGlzLmNvbGxhcHNlO1xyXG4gIH1cclxuICBwYW5lbFJlbW92ZSgpIHtcclxuICAgIFxyXG4gICAgdGhpcy5tb2RlbE5vdGlmaWNhdGlvbi5zd2FsRGFuZ2VyKCdBcmUgeW91IHN1cmU/JywgJ1lvdSB3aWxsIG5vdCBiZSBhYmxlIHRvIHJlY292ZXIgdGhpcyBXaWRnZXQhJyk7XHJcbiAgICBcclxuICAgIHRoaXMucmVtb3ZlID0gIXRoaXMucmVtb3ZlO1xyXG4gIH1cclxuXHJcbiAgb3BlbkZvcm1Nb2RlbChjb250ZW50LHRlc3Q6c3RyaW5nKSB7XHJcbiAgICBhbGVydCh0ZXN0KTtcclxuXHJcbiAgICB0aGlzLmxpbmVXaWRnZXRGb3JtPXRydWU7XHJcbiAgICB0aGlzLm1vZGFsU2VydmljZS5vcGVuKGNvbnRlbnQsIFxyXG4gICAgICB7XHJcbiAgICAgICAgICB3aW5kb3dDbGFzczogJ2N1c3RvbS1jbGFzcycsXHJcbiAgICAgICAgICBiYWNrZHJvcDonc3RhdGljJ1xyXG4gICAgICB9KS5yZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIHRoaXMuY2xvc2VSZXN1bHQgPSBgQ2xvc2VkIHdpdGg6ICR7cmVzdWx0fWA7XHJcbiAgICB9LCAocmVhc29uKSA9PiB7XHJcbiAgICAgXHJcbiAgICAgIHRoaXMuY2xvc2VSZXN1bHQgPSBgRGlzbWlzc2VkICR7dGhpcy5nZXREaXNtaXNzUmVhc29uKHJlYXNvbil9YDtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgfVxyXG4gIHByaXZhdGUgZ2V0RGlzbWlzc1JlYXNvbihyZWFzb246IGFueSk6IHN0cmluZyB7XHJcbiAgICBpZiAocmVhc29uID09PSBNb2RhbERpc21pc3NSZWFzb25zLkVTQykge1xyXG4gICAgICByZXR1cm4gJ2J5IHByZXNzaW5nIEVTQyc7XHJcbiAgICB9IGVsc2UgaWYgKHJlYXNvbiA9PT0gTW9kYWxEaXNtaXNzUmVhc29ucy5CQUNLRFJPUF9DTElDSykge1xyXG4gICAgICByZXR1cm4gJ2J5IGNsaWNraW5nIG9uIGEgYmFja2Ryb3AnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGB3aXRoOiAke3JlYXNvbn1gO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8IS0tIGJlZ2luIHBhbmVsIC0tPlxyXG5cclxuXHJcbjxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1pbnZlcnNlXCIgIFtuZ0NsYXNzXT1cIlsgKHRoaXMuZXhwYW5kKSA/ICdwYW5lbC1leHBhbmQnOiAnJywgKHRoaXMucmVsb2FkKSA/ICdwYW5lbC1sb2FkaW5nJzogJycsICh0aGlzLnBhbmVsQ2xhc3MpID8gdGhpcy5wYW5lbENsYXNzIDogJycsICh0aGlzLnZhcmlhbnQpID8gJ3BhbmVsLScgKyB0aGlzLnZhcmlhbnQgOiAncGFuZWwtaW52ZXJzZScgXVwiICpuZ0lmPVwiIXRoaXMucmVtb3ZlXCI+XHJcbiAgICBcclxuICBcclxuICBcclxuICAgIDwhLS0gYmVnaW4gcGFuZWwtYm9keSAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCIgIHN0eWxlPVwid2lkdGg6IDEwMCU7XCIgPlxyXG4gICAgICA8bmctY29udGVudD5cclxuICAgICAgPC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIGVuZCBwYW5lbC1ib2R5IC0tPlxyXG4gIFxyXG4gICAgPCEtLSBiZWdpbiBuby1ib2R5IC0tPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW25vQm9keV1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8IS0tIGVuZCBuby1ib2R5IC0tPlxyXG4gIFxyXG4gICAgPCEtLSBiZWdpbiBvdXRzaWRlLWJvZHkgLS0+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbb3V0c2lkZUJvZHldXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPCEtLSBlbmQgb3V0c2lkZS1ib2R5IC0tPlxyXG4gIFxyXG4gICAgPCEtLSBiZWdpbiBwYW5lbC1mb290ZXIgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwtZm9vdGVyXCIgI3BhbmVsRm9vdGVyIFtoaWRkZW5dPVwiIXNob3dGb290ZXJcIiBbbmdDbGFzc109XCJbICh0aGlzLmZvb3RlckNsYXNzKSA/IHRoaXMuZm9vdGVyQ2xhc3MgOiAnJyBdXCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltmb290ZXJdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIGVuZCBwYW5lbC1mb290ZXIgLS0+XHJcbiAgXHJcbiAgICA8IS0tIGJlZ2luIGFmdGVyLWZvb3RlciAtLT5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlthZnRlckZvb3Rlcl1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8IS0tIGVuZCBhZnRlci1mb290ZXIgLS0+XHJcbiAgPC9kaXY+XHJcbiAgPCEtLSBlbmQgcGFuZWwgLS0+XHJcbiAgPGFwcC1tb2RhbC1ub3RpZmljYXRpb24+PC9hcHAtbW9kYWwtbm90aWZpY2F0aW9uPiJdfQ==