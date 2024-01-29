import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, EventEmitter, ɵɵdirectiveInject, Output, ɵɵgetCurrentView, ɵɵprojection, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelement, ɵɵi18n, ɵɵadvance, ɵɵpropertyInterpolate, ɵɵtextInterpolate, ɵɵtemplate, ɵɵproperty, ɵɵpureFunction2, ɵɵpureFunction4, ɵɵpureFunction1, ChangeDetectorRef, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵprojectionDef, ViewChild, Inject, ɵɵi18nAttributes, Renderer2, ElementRef, ɵɵdefineDirective, Directive, HostListener, InjectionToken, NgZone, KeyValueDiffers, PLATFORM_ID, ɵɵNgOnChangesFeature, Optional, Input, ɵɵdefinePipe, Pipe, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, CUSTOM_ELEMENTS_SCHEMA, ɵɵinject } from '@angular/core';
import { NgIf, NgClass, DOCUMENT, isPlatformBrowser, CommonModule } from '@angular/common';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { utils, writeFile } from 'xlsx';
import { Router } from '@angular/router';
import $ from 'jquery';
import PerfectScrollbar from 'perfect-scrollbar';
import ResizeObserver from 'resize-observer-polyfill';
import { Subject, fromEvent } from 'rxjs';
import { auditTime, takeUntil } from 'rxjs/operators';
import { L10n } from '@syncfusion/ej2-base';
import { MatPaginatorIntl } from '@angular/material/paginator';
import '@angular/localize/init';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/first';

class GlobalService {
    constructor() {
    }
}
GlobalService.ɵfac = function GlobalService_Factory(t) { return new (t || GlobalService)(); };
GlobalService.ɵprov = ɵɵdefineInjectable({ token: GlobalService, factory: GlobalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GlobalService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class GlobalComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
GlobalComponent.ɵfac = function GlobalComponent_Factory(t) { return new (t || GlobalComponent)(); };
GlobalComponent.ɵcmp = ɵɵdefineComponent({ type: GlobalComponent, selectors: [["lib-global"]], decls: 2, vars: 0, template: function GlobalComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " global works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GlobalComponent, [{
        type: Component,
        args: [{
                selector: 'lib-global',
                template: `
    <p>
      global works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class UIModalNotificationPage {
    constructor(modalService) {
        this.modalService = modalService;
        this.inputField = false;
        // ex(login = just information with question)
        // swalPrimary(title, text) {
        //   swal({
        //     title: title,
        //     text: text,
        //     type: 'question',
        //     showCancelButton: true,
        //     confirmButtonText: 'Ok',
        //     showCloseButton: true,
        //     allowOutsideClick: true,
        //     confirmButtonClass: 'btn btn-success'
        //   }).then((result) => {
        //     if (result.value) {
        //     }
        //   })
        // }
        // Information
        this.modelNotificationInfo = new EventEmitter();
        // Modal window for success (ex:Created successful/Deleted successful)
        this.modelNotificationSuccess = new EventEmitter();
        // Modal window for Warning info (ex: Cancel/Reset/Tab navigation)
        this.modelNotificationWarning = new EventEmitter();
        // Modal window for Warning info (ex: Cancel/Reset/Tab navigation)
        this.modelNotificationWarningAlarm = new EventEmitter();
        // Modal window for delete
        this.modelNotificationDanger = new EventEmitter();
        // Modal window for failed scenario(ex: Not saved)
        this.modelNotificationError = new EventEmitter();
        // Modal window for help (ex: Format of alarm message)
        this.modelNotificationAlarmMessage = new EventEmitter();
        // Modal window for help (ex: Format of alarm message)
        this.modelNotificationClearMessage = new EventEmitter();
    }
    open(content) {
        this.modalService.open(content).result.then((result) => {
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
    // Handling response comes from API
    alertMessage(messageType, message) {
        switch (messageType) {
            case 'Success': {
                // Modal window for success (ex:Created successful , Deleted successful)
                this.swalSuccess(message);
                break;
            }
            case 'Failed': {
                let error;
                // Modal window for failed scenario(ex: Not saved)
                if (message.status === 401) {
                    error = message.error.message;
                }
                else if (message.status === 0) {
                    error = "Not able to process request, Please try after some time.";
                }
                else {
                    error = message;
                }
                this.swalErrorInfo(error);
                break;
            }
            case 'Info': {
                // Information
                this.swalInfo(message);
                break;
            }
            case 'Warning': {
                // Modal window for Warning info (ex: Cancel/Reset/Tab navigation)
                this.swalWarning(message);
                break;
            }
            case 'Error': {
                // Modal window for delete
                this.swalDanger(message);
                break;
            }
            case 'AlarmMessage': {
                // Modal window for delete
                this.swalAlarmMessage(message);
                break;
            }
            case 'ClearMessage': {
                // Modal window for delete
                this.swalClearMessage(message);
                break;
            }
            default: {
                break;
            }
        }
    }
    swalInfo(message) {
        Swal.fire({
            title: "Information",
            text: message,
            icon: 'info',
            showCancelButton: false,
            confirmButtonText: 'Ok',
            showCloseButton: true,
            allowOutsideClick: true,
            customClass: {
                confirmButton: 'btn btn-success',
            }
        }).then((result) => {
            if (result.value) {
                this.modelNotificationInfo.emit();
            }
        });
    }
    swalSuccess(message) {
        Swal.fire({
            title: 'Successful!',
            text: message,
            icon: 'success',
            showCancelButton: false,
            confirmButtonText: 'Ok',
            showCloseButton: false,
            allowOutsideClick: false,
        }).then((result) => {
            if (result.value) {
                this.modelNotificationSuccess.emit();
            }
        });
    }
    swalWarning(message) {
        Swal.fire({
            title: 'Warning!',
            text: message,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ok',
            cancelButtonText: 'Cancel',
            reverseButtons: true,
            showCloseButton: true,
            customClass: {
                confirmButton: 'btn btn-warning',
                container: 'warning_info',
            },
        }).then((result) => {
            if (result.value) {
                this.modelNotificationWarning.emit();
            }
        });
    }
    swalWarningAlarm(message) {
        Swal.fire({
            title: 'Are you sure?',
            html: message + ''
                + '<br /><textarea *ngIf="inputField" #remark style="height:50px!important" id="remark" class="form-control m-input col-md-8 mt-2 mx-auto" type="text" name="remark" placeholder="Enter Remark"></textarea>',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ok',
            cancelButtonText: 'Cancel',
            reverseButtons: true,
            showCloseButton: true,
            customClass: {
                confirmButton: 'btn btn-warning',
                container: 'warning_info',
            },
        }).then((result) => {
            if (result.value) {
                if (this.inputField) {
                    this.remark = document.getElementById('remark')['value'];
                    this.modelNotificationWarningAlarm.emit(this.remark);
                }
                else
                    this.modelNotificationWarningAlarm.emit();
            }
        });
    }
    swalDanger(message) {
        Swal.fire({
            title: 'Are you sure?',
            text: message,
            icon: 'error',
            showCancelButton: true,
            confirmButtonText: 'Ok',
            cancelButtonText: 'Cancel',
            reverseButtons: true,
            showCloseButton: true,
            customClass: {
                confirmButton: 'btn btn-danger',
            }
            // confirmButtonClass: 'btn btn-danger'
        }).then((result) => {
            if (result.value) {
                this.modelNotificationDanger.emit();
            }
        });
    }
    swalErrorInfo(message) {
        Swal.fire({
            title: "Failed!",
            text: message,
            icon: 'info',
            showCancelButton: false,
            confirmButtonText: 'Ok',
            showCloseButton: false,
            // confirmButtonClass: 'btn btn-danger',
            customClass: {
                confirmButton: 'btn btn-danger',
                container: 'error_info'
            }
            // customClass: 'error_info'
        }).then((result) => {
            if (result.value) {
                this.modelNotificationError.emit();
            }
        });
    }
    swalAlarmMessage(message) {
        Swal.fire({
            title: 'Alarm Message Format!',
            html: message,
            showCancelButton: false,
            showCloseButton: true,
            allowOutsideClick: true,
            allowEnterKey: true,
        }).then((result) => {
            if (result.value) {
                this.modelNotificationAlarmMessage.emit();
            }
        });
    }
    swalClearMessage(message) {
        Swal.fire({
            title: 'Clear Message Format!',
            html: message,
            showCancelButton: false,
            showCloseButton: true,
            allowOutsideClick: true,
            allowEnterKey: true,
        }).then((result) => {
            if (result.value) {
                this.modelNotificationAlarmMessage.emit();
            }
        });
    }
    helpMessage(message) {
        this.swalHelp(message);
    }
    swalHelp(message) {
        Swal.fire({
            position: 'top-end',
            showConfirmButton: false,
            //timer: 5000,
            // title: "Information",
            html: message,
            //icon: 'info',
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
        }).then((result) => {
            if (result.value) {
                this.modelNotificationInfo.emit();
            }
        });
    }
}
UIModalNotificationPage.ɵfac = function UIModalNotificationPage_Factory(t) { return new (t || UIModalNotificationPage)(ɵɵdirectiveInject(NgbModal)); };
UIModalNotificationPage.ɵcmp = ɵɵdefineComponent({ type: UIModalNotificationPage, selectors: [["app-modal-notification"]], outputs: { modelNotificationInfo: "modelNotificationInfo", modelNotificationSuccess: "modelNotificationSuccess", modelNotificationWarning: "modelNotificationWarning", modelNotificationWarningAlarm: "modelNotificationWarningAlarm", modelNotificationDanger: "modelNotificationDanger", modelNotificationError: "modelNotificationError", modelNotificationAlarmMessage: "modelNotificationAlarmMessage", modelNotificationClearMessage: "modelNotificationClearMessage" }, decls: 0, vars: 0, template: function UIModalNotificationPage_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(UIModalNotificationPage, [{
        type: Component,
        args: [{
                selector: 'app-modal-notification',
                templateUrl: './modal-notification.html'
            }]
    }], function () { return [{ type: NgbModal }]; }, { modelNotificationInfo: [{
            type: Output
        }], modelNotificationSuccess: [{
            type: Output
        }], modelNotificationWarning: [{
            type: Output
        }], modelNotificationWarningAlarm: [{
            type: Output
        }], modelNotificationDanger: [{
            type: Output
        }], modelNotificationError: [{
            type: Output
        }], modelNotificationAlarmMessage: [{
            type: Output
        }], modelNotificationClearMessage: [{
            type: Output
        }] }); })();

class PageNotFoundComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = ɵɵdefineComponent({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 7, vars: 0, consts: [[1, "row"], [1, "col-md-12"], [1, "pageNotFound"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "h1");
        ɵɵtext(4, "404");
        ɵɵelementEnd();
        ɵɵelementStart(5, "p");
        ɵɵtext(6, "Oops! Something is wrong.");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,300,500);.pageNotFound[_ngcontent-%COMP%]{background-color:#007aff;font-size:100%;line-height:1.5;font-family:Roboto,sans-serif;height:calc(100vh - 80px);display:flex;align-items:center;justify-content:center;flex-direction:column;overflow:hidden}p[_ngcontent-%COMP%]{font-size:2em;text-align:center;font-weight:100;color:#fff}h1[_ngcontent-%COMP%]{text-align:center;font-size:15em;font-weight:100;color:#fff;text-shadow:#0062cc 1px 1px,#0062cc 2px 2px,#0062cc 3px 3px,#0062cd 4px 4px,#0062cd 5px 5px,#0062cd 6px 6px,#0062cd 7px 7px,#0062ce 8px 8px,#0063ce 9px 9px,#0063ce 10px 10px,#0063ce 11px 11px,#0063cf 12px 12px,#0063cf 13px 13px,#0063cf 14px 14px,#0063cf 15px 15px,#0063d0 16px 16px,#0064d0 17px 17px,#0064d0 18px 18px,#0064d0 19px 19px,#0064d1 20px 20px,#0064d1 21px 21px,#0064d1 22px 22px,#0064d1 23px 23px,#0064d2 24px 24px,#0065d2 25px 25px,#0065d2 26px 26px,#0065d2 27px 27px,#0065d3 28px 28px,#0065d3 29px 29px,#0065d3 30px 30px,#0065d3 31px 31px,#0065d4 32px 32px,#0065d4 33px 33px,#0066d4 34px 34px,#0066d4 35px 35px,#0066d5 36px 36px,#0066d5 37px 37px,#0066d5 38px 38px,#0066d5 39px 39px,#0066d6 40px 40px,#0066d6 41px 41px,#0067d6 42px 42px,#0067d6 43px 43px,#0067d7 44px 44px,#0067d7 45px 45px,#0067d7 46px 46px,#0067d7 47px 47px,#0067d8 48px 48px,#0067d8 49px 49px,#0068d8 50px 50px,#0068d9 51px 51px,#0068d9 52px 52px,#0068d9 53px 53px,#0068d9 54px 54px,#0068da 55px 55px,#0068da 56px 56px,#0068da 57px 57px,#0068da 58px 58px,#0069db 59px 59px,#0069db 60px 60px,#0069db 61px 61px,#0069db 62px 62px,#0069dc 63px 63px,#0069dc 64px 64px,#0069dc 65px 65px,#0069dc 66px 66px,#006add 67px 67px,#006add 68px 68px,#006add 69px 69px,#006add 70px 70px,#006ade 71px 71px,#006ade 72px 72px,#006ade 73px 73px,#006ade 74px 74px,#006bdf 75px 75px,#006bdf 76px 76px,#006bdf 77px 77px,#006bdf 78px 78px,#006be0 79px 79px,#006be0 80px 80px,#006be0 81px 81px,#006be0 82px 82px,#006be1 83px 83px,#006ce1 84px 84px,#006ce1 85px 85px,#006ce1 86px 86px,#006ce2 87px 87px,#006ce2 88px 88px,#006ce2 89px 89px,#006ce2 90px 90px,#006ce3 91px 91px,#006de3 92px 92px,#006de3 93px 93px,#006de3 94px 94px,#006de4 95px 95px,#006de4 96px 96px,#006de4 97px 97px,#006de4 98px 98px,#006de5 99px 99px,#006ee5 100px 100px,#006ee5 101px 101px,#006ee6 102px 102px,#006ee6 103px 103px,#006ee6 104px 104px,#006ee6 105px 105px,#006ee7 106px 106px,#006ee7 107px 107px,#006ee7 108px 108px,#006fe7 109px 109px,#006fe8 110px 110px,#006fe8 111px 111px,#006fe8 112px 112px,#006fe8 113px 113px,#006fe9 114px 114px,#006fe9 115px 115px,#006fe9 116px 116px,#0070e9 117px 117px,#0070ea 118px 118px,#0070ea 119px 119px,#0070ea 120px 120px,#0070ea 121px 121px,#0070eb 122px 122px,#0070eb 123px 123px,#0070eb 124px 124px,#0071eb 125px 125px,#0071ec 126px 126px,#0071ec 127px 127px,#0071ec 128px 128px,#0071ec 129px 129px,#0071ed 130px 130px,#0071ed 131px 131px,#0071ed 132px 132px,#0071ed 133px 133px,#0072ee 134px 134px,#0072ee 135px 135px,#0072ee 136px 136px,#0072ee 137px 137px,#0072ef 138px 138px,#0072ef 139px 139px,#0072ef 140px 140px,#0072ef 141px 141px,#0073f0 142px 142px,#0073f0 143px 143px,#0073f0 144px 144px,#0073f0 145px 145px,#0073f1 146px 146px,#0073f1 147px 147px,#0073f1 148px 148px,#0073f1 149px 149px,#0074f2 150px 150px,#0074f2 151px 151px,#0074f2 152px 152px,#0074f3 153px 153px,#0074f3 154px 154px,#0074f3 155px 155px,#0074f3 156px 156px,#0074f4 157px 157px,#0074f4 158px 158px,#0075f4 159px 159px,#0075f4 160px 160px,#0075f5 161px 161px,#0075f5 162px 162px,#0075f5 163px 163px,#0075f5 164px 164px,#0075f6 165px 165px,#0075f6 166px 166px,#0076f6 167px 167px,#0076f6 168px 168px,#0076f7 169px 169px,#0076f7 170px 170px,#0076f7 171px 171px,#0076f7 172px 172px,#0076f8 173px 173px,#0076f8 174px 174px,#0077f8 175px 175px,#0077f8 176px 176px,#0077f9 177px 177px,#0077f9 178px 178px,#0077f9 179px 179px,#0077f9 180px 180px,#0077fa 181px 181px,#0077fa 182px 182px,#0077fa 183px 183px,#0078fa 184px 184px,#0078fb 185px 185px,#0078fb 186px 186px,#0078fb 187px 187px,#0078fb 188px 188px,#0078fc 189px 189px,#0078fc 190px 190px,#0078fc 191px 191px,#0079fc 192px 192px,#0079fd 193px 193px,#0079fd 194px 194px,#0079fd 195px 195px,#0079fd 196px 196px,#0079fe 197px 197px,#0079fe 198px 198px,#0079fe 199px 199px,#007aff 200px 200px}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PageNotFoundComponent, [{
        type: Component,
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return []; }, null); })();

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
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8);
    ɵɵprojection(1, 6);
    ɵɵelementStart(2, "a", 9);
    ɵɵlistener("click", function AssetDataPanelComponent_div_0_div_2_Template_a_click_2_listener() { ɵɵrestoreView(_r8); const ctx_r7 = ɵɵnextContext(2); return ctx_r7.panelExpand(); });
    ɵɵelement(3, "i", 10);
    ɵɵelementEnd();
    ɵɵprojection(4, 7);
    ɵɵprojection(5, 8);
    ɵɵelementStart(6, "template", null, 11);
    ɵɵi18n(8, I18N_3);
    ɵɵelementEnd();
    ɵɵelementStart(9, "template", null, 12);
    ɵɵi18n(11, I18N_5);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("matTooltip", ctx_r1.screenStatus);
} }
function AssetDataPanelComponent_div_0_h4_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "h4", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r2.title);
} }
function AssetDataPanelComponent_div_0_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵelement(1, "span", 17);
    ɵɵelementEnd();
} }
const _c7 = function (a0, a1) { return [a0, a1]; };
function AssetDataPanelComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵprojection(1, 9);
    ɵɵtemplate(2, AssetDataPanelComponent_div_0_div_6_div_2_Template, 2, 0, "div", 15);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction2(2, _c7, ctx_r3.collapse ? "d-none" : "", ctx_r3.bodyClass ? ctx_r3.bodyClass : ""));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r3.reload);
} }
const _c8 = function (a0, a1, a2, a3) { return [a0, a1, a2, a3]; };
const _c9 = function (a0) { return [a0]; };
function AssetDataPanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵelementStart(1, "div", 2);
    ɵɵtemplate(2, AssetDataPanelComponent_div_0_div_2_Template, 12, 1, "div", 3);
    ɵɵtemplate(3, AssetDataPanelComponent_div_0_h4_3_Template, 2, 1, "h4", 4);
    ɵɵprojection(4);
    ɵɵelementEnd();
    ɵɵprojection(5, 1);
    ɵɵtemplate(6, AssetDataPanelComponent_div_0_div_6_Template, 3, 5, "div", 5);
    ɵɵprojection(7, 2);
    ɵɵprojection(8, 3);
    ɵɵelementStart(9, "div", 6, 7);
    ɵɵprojection(11, 4);
    ɵɵelementEnd();
    ɵɵprojection(12, 5);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction4(6, _c8, ctx_r0.expand ? "panel-expand" : "", ctx_r0.reload ? "panel-loading" : "", ctx_r0.panelClass ? ctx_r0.panelClass : "", ctx_r0.variant ? "panel-" + ctx_r0.variant : "panel-inverse"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r0.noButton);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.title);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", !ctx_r0.noBody);
    ɵɵadvance(3);
    ɵɵproperty("hidden", !ctx_r0.showFooter)("ngClass", ɵɵpureFunction1(11, _c9, ctx_r0.footerClass ? ctx_r0.footerClass : ""));
} }
const _c10 = [[["", "header", ""]], [["", "beforeBody", ""]], [["", "noBody", ""]], [["", "outsideBody", ""]], [["", "footer", ""]], [["", "afterFooter", ""]], [["", "download", ""]], [["", "refresh", ""]], [["", "remove", ""]], "*"];
const _c11 = ["[header]", "[beforeBody]", "[noBody]", "[outsideBody]", "[footer]", "[afterFooter]", "[download]", "[refresh]", "[remove]", "*"];
class AssetDataPanelComponent {
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
AssetDataPanelComponent.ɵfac = function AssetDataPanelComponent_Factory(t) { return new (t || AssetDataPanelComponent)(ɵɵdirectiveInject(ChangeDetectorRef)); };
AssetDataPanelComponent.ɵcmp = ɵɵdefineComponent({ type: AssetDataPanelComponent, selectors: [["app-asset-data-panel"]], viewQuery: function AssetDataPanelComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true);
        ɵɵviewQuery(_c1, true);
        ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.panelFooter = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ClicktoMaximize = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ClicktoMinimize = _t.first);
    } }, inputs: { title: "title", variant: "variant", noBody: "noBody", noButton: "noButton", bodyClass: "bodyClass", footerClass: "footerClass", panelClass: "panelClass" }, outputs: { removeLineChart: "removeLineChart" }, ngContentSelectors: _c11, decls: 1, vars: 1, consts: [["class", "panel panel-inverse", 3, "ngClass", 4, "ngIf"], [1, "panel", "panel-inverse", 3, "ngClass"], [1, "panel-heading"], ["class", "panel-heading-btn", 4, "ngIf"], ["class", "panel-title", 4, "ngIf"], ["class", "panel-body", "style", "border:0.5px solid #000000;padding:0px;", 3, "ngClass", 4, "ngIf"], [1, "panel-footer", 3, "hidden", "ngClass"], ["panelFooter", ""], [1, "panel-heading-btn"], ["href", "javascript:;", 1, "btn", "btn-xs", "btn-icon", "btn-circle", "btn-default", "panel-expand", 3, "matTooltip", "click"], [1, "fa", "fa-expand"], ["ClicktoMaximize", ""], ["ClicktoMinimize", ""], [1, "panel-title"], [1, "panel-body", 2, "border", "0.5px solid #000000", "padding", "0px", 3, "ngClass"], ["class", "panel-loader", 4, "ngIf"], [1, "panel-loader"], [1, "spinner-small"]], template: function AssetDataPanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef(_c10);
        ɵɵtemplate(0, AssetDataPanelComponent_div_0_Template, 13, 13, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.remove);
    } }, directives: [NgIf, NgClass, MatTooltip], styles: [".panel-heading[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-direction:row-reverse;align-items:center}div.panel.panel-expand[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]{height:100%;margin-top:39px}.panel.panel-expand[_ngcontent-%COMP%]{overflow:hidden}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AssetDataPanelComponent, [{
        type: Component,
        args: [{
                selector: 'app-asset-data-panel',
                inputs: ['title', 'variant', 'noBody', 'noButton', 'bodyClass', 'footerClass', 'panelClass'],
                templateUrl: './asset-data-panel.component.html',
                styleUrls: ['./asset-data-panel.component.css']
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, { panelFooter: [{
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

const _c0$1 = ["panelFooter"];
const _c1$1 = function (a0, a1, a2, a3) { return [a0, a1, a2, a3]; };
const _c2$1 = function (a0) { return [a0]; };
function PanelBlankComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵelementStart(1, "div", 2);
    ɵɵprojection(2);
    ɵɵelementEnd();
    ɵɵprojection(3, 1);
    ɵɵprojection(4, 2);
    ɵɵelementStart(5, "div", 3, 4);
    ɵɵprojection(7, 3);
    ɵɵelementEnd();
    ɵɵprojection(8, 4);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction4(3, _c1$1, ctx_r10.expand ? "panel-expand" : "", ctx_r10.reload ? "panel-loading" : "", ctx_r10.panelClass ? ctx_r10.panelClass : "", ctx_r10.variant ? "panel-" + ctx_r10.variant : "panel-inverse"));
    ɵɵadvance(5);
    ɵɵproperty("hidden", !ctx_r10.showFooter)("ngClass", ɵɵpureFunction1(8, _c2$1, ctx_r10.footerClass ? ctx_r10.footerClass : ""));
} }
const _c3 = ["*", [["", "noBody", ""]], [["", "outsideBody", ""]], [["", "footer", ""]], [["", "afterFooter", ""]]];
const _c4 = ["*", "[noBody]", "[outsideBody]", "[footer]", "[afterFooter]"];
class PanelBlankComponent {
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
PanelBlankComponent.ɵfac = function PanelBlankComponent_Factory(t) { return new (t || PanelBlankComponent)(ɵɵdirectiveInject(NgbModal), ɵɵdirectiveInject(DOCUMENT)); };
PanelBlankComponent.ɵcmp = ɵɵdefineComponent({ type: PanelBlankComponent, selectors: [["app-panel-blank"]], viewQuery: function PanelBlankComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$1, true);
        ɵɵviewQuery(UIModalNotificationPage, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.panelFooter = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.modelNotification = _t.first);
    } }, ngContentSelectors: _c4, decls: 2, vars: 1, consts: [["class", "panel panel-inverse", 3, "ngClass", 4, "ngIf"], [1, "panel", "panel-inverse", 3, "ngClass"], [1, "panel-body", 2, "width", "100%"], [1, "panel-footer", 3, "hidden", "ngClass"], ["panelFooter", ""]], template: function PanelBlankComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef(_c3);
        ɵɵtemplate(0, PanelBlankComponent_div_0_Template, 9, 10, "div", 0);
        ɵɵelement(1, "app-modal-notification");
    } if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.remove);
    } }, directives: [NgIf, UIModalNotificationPage, NgClass], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PanelBlankComponent, [{
        type: Component,
        args: [{
                selector: 'app-panel-blank',
                templateUrl: './panel-blank.component.html',
                styleUrls: ['./panel-blank.component.css']
            }]
    }], function () { return [{ type: NgbModal }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { panelFooter: [{
            type: ViewChild,
            args: ['panelFooter']
        }], modelNotification: [{
            type: ViewChild,
            args: [UIModalNotificationPage]
        }] }); })();

const _c0$2 = ["panelFooter"];
function PanelDashboardComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵprojection(1, 6);
    ɵɵprojection(2, 7);
    ɵɵprojection(3, 8);
    ɵɵprojection(4, 9);
    ɵɵprojection(5, 10);
    ɵɵelementEnd();
} }
function PanelDashboardComponent_div_0_h4_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "h4", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r14.title);
} }
const _c1$2 = function (a0, a1) { return [a0, a1]; };
function PanelDashboardComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵprojection(1, 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction2(1, _c1$2, ctx_r15.collapse ? "d-none" : "", ctx_r15.bodyClass ? ctx_r15.bodyClass : ""));
} }
const _c2$2 = function (a0, a1, a2, a3) { return [a0, a1, a2, a3]; };
const _c3$1 = function (a0) { return [a0]; };
function PanelDashboardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵelementStart(1, "div", 2);
    ɵɵtemplate(2, PanelDashboardComponent_div_0_div_2_Template, 6, 0, "div", 3);
    ɵɵtemplate(3, PanelDashboardComponent_div_0_h4_3_Template, 2, 1, "h4", 4);
    ɵɵprojection(4);
    ɵɵelementEnd();
    ɵɵprojection(5, 1);
    ɵɵtemplate(6, PanelDashboardComponent_div_0_div_6_Template, 2, 4, "div", 5);
    ɵɵprojection(7, 2);
    ɵɵprojection(8, 3);
    ɵɵelementStart(9, "div", 6, 7);
    ɵɵprojection(11, 4);
    ɵɵelementEnd();
    ɵɵprojection(12, 5);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction4(6, _c2$2, ctx_r12.expand ? "panel-expand" : "", ctx_r12.reload ? "panel-loading" : "", ctx_r12.panelClass ? ctx_r12.panelClass : "", ctx_r12.variant ? "panel-" + ctx_r12.variant : "panel-inverse"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r12.noButton);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r12.title);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", !ctx_r12.noBody);
    ɵɵadvance(3);
    ɵɵproperty("hidden", !ctx_r12.showFooter)("ngClass", ɵɵpureFunction1(11, _c3$1, ctx_r12.footerClass ? ctx_r12.footerClass : ""));
} }
const _c4$1 = [[["", "header", ""]], [["", "beforeBody", ""]], [["", "noBody", ""]], [["", "outsideBody", ""]], [["", "footer", ""]], [["", "afterFooter", ""]], [["", "download", ""]], [["", "expand", ""]], [["", "refresh", ""]], [["", "downloadButton", ""]], [["", "tablePanelPaginator", ""]], "*"];
const _c5 = ["[header]", "[beforeBody]", "[noBody]", "[outsideBody]", "[footer]", "[afterFooter]", "[download]", "[expand]", "[refresh]", "[downloadButton]", "[tablePanelPaginator]", "*"];
class PanelDashboardComponent {
    constructor() {
        this.expand = false;
        this.reload = false;
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
    panelRemove() {
        confirm("Are Your Sure !");
        this.remove = !this.remove;
    }
}
PanelDashboardComponent.ɵfac = function PanelDashboardComponent_Factory(t) { return new (t || PanelDashboardComponent)(); };
PanelDashboardComponent.ɵcmp = ɵɵdefineComponent({ type: PanelDashboardComponent, selectors: [["app-panel-dashboard"]], viewQuery: function PanelDashboardComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$2, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.panelFooter = _t.first);
    } }, inputs: { title: "title", variant: "variant", noBody: "noBody", noButton: "noButton", bodyClass: "bodyClass", footerClass: "footerClass", panelClass: "panelClass" }, ngContentSelectors: _c5, decls: 1, vars: 1, consts: [["class", "panel panel-inverse h-100", 3, "ngClass", 4, "ngIf"], [1, "panel", "panel-inverse", "h-100", 3, "ngClass"], [1, "panel-heading"], ["class", "panel-heading-btn", 4, "ngIf"], ["class", "panel-title", 4, "ngIf"], ["class", "panel-body", "style", "padding: 0px; height: 90%", 3, "ngClass", 4, "ngIf"], [1, "panel-footer", 3, "hidden", "ngClass"], ["panelFooter", ""], [1, "panel-heading-btn"], [1, "panel-title"], [1, "panel-body", 2, "padding", "0px", "height", "90%", 3, "ngClass"]], template: function PanelDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef(_c4$1);
        ɵɵtemplate(0, PanelDashboardComponent_div_0_Template, 13, 13, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.remove);
    } }, directives: [NgIf, NgClass], styles: [".panel-heading[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-direction:row-reverse;align-items:center}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PanelDashboardComponent, [{
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

const _c0$3 = ["panelFooter"];
function PanelRemoveComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵprojection(1, 5);
    ɵɵtext(2, " \u00A0 ");
    ɵɵprojection(3, 6);
    ɵɵtext(4, " \u00A0 ");
    ɵɵprojection(5, 7);
    ɵɵtext(6, " \u00A0 ");
    ɵɵprojection(7, 8);
    ɵɵelementEnd();
} }
function PanelRemoveComponent_div_0_h4_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "h4", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r19.title);
} }
function PanelRemoveComponent_div_0_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵelement(1, "span", 13);
    ɵɵelementEnd();
} }
const _c1$3 = function (a0, a1) { return [a0, a1]; };
function PanelRemoveComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵprojection(1, 9);
    ɵɵtemplate(2, PanelRemoveComponent_div_0_div_5_div_2_Template, 2, 0, "div", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction2(2, _c1$3, ctx_r20.collapse ? "d-none" : "", ctx_r20.bodyClass ? ctx_r20.bodyClass : ""));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r20.reload);
} }
const _c2$3 = function (a0, a1, a2, a3) { return [a0, a1, a2, a3]; };
const _c3$2 = function (a0) { return [a0]; };
function PanelRemoveComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵelementStart(1, "div", 2);
    ɵɵtemplate(2, PanelRemoveComponent_div_0_div_2_Template, 8, 0, "div", 3);
    ɵɵtemplate(3, PanelRemoveComponent_div_0_h4_3_Template, 2, 1, "h4", 4);
    ɵɵelementEnd();
    ɵɵprojection(4);
    ɵɵtemplate(5, PanelRemoveComponent_div_0_div_5_Template, 3, 5, "div", 5);
    ɵɵprojection(6, 1);
    ɵɵprojection(7, 2);
    ɵɵelementStart(8, "div", 6, 7);
    ɵɵprojection(10, 3);
    ɵɵelementEnd();
    ɵɵprojection(11, 4);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction4(6, _c2$3, ctx_r17.expand ? "panel-expand" : "", ctx_r17.reload ? "panel-loading" : "", ctx_r17.panelClass ? ctx_r17.panelClass : "", ctx_r17.variant ? "panel-" + ctx_r17.variant : "panel-inverse"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r17.noButton);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r17.title);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r17.noBody);
    ɵɵadvance(3);
    ɵɵproperty("hidden", !ctx_r17.showFooter)("ngClass", ɵɵpureFunction1(11, _c3$2, ctx_r17.footerClass ? ctx_r17.footerClass : ""));
} }
const _c4$2 = [[["", "beforeBody", ""]], [["", "noBody", ""]], [["", "outsideBody", ""]], [["", "footer", ""]], [["", "afterFooter", ""]], [["", "header", ""]], [["", "expand", ""]], [["", "deleteButton", ""]], [["", "filterBtn", ""]], "*"];
const _c5$1 = ["[beforeBody]", "[noBody]", "[outsideBody]", "[footer]", "[afterFooter]", "[header]", "[expand]", "[deleteButton]", "[filterBtn]", "*"];
class PanelRemoveComponent {
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
PanelRemoveComponent.ɵfac = function PanelRemoveComponent_Factory(t) { return new (t || PanelRemoveComponent)(ɵɵdirectiveInject(NgbModal), ɵɵdirectiveInject(DOCUMENT)); };
PanelRemoveComponent.ɵcmp = ɵɵdefineComponent({ type: PanelRemoveComponent, selectors: [["app-panel-remove"]], viewQuery: function PanelRemoveComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$3, true);
        ɵɵviewQuery(UIModalNotificationPage, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.panelFooter = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.modelNotification = _t.first);
    } }, inputs: { title: "title", variant: "variant", noBody: "noBody", noButton: "noButton", bodyClass: "bodyClass", footerClass: "footerClass", panelClass: "panelClass" }, ngContentSelectors: _c5$1, decls: 2, vars: 1, consts: [["class", "panel panel-inverse h-100 d-flex flex-column", 3, "ngClass", 4, "ngIf"], [1, "panel", "panel-inverse", "h-100", "d-flex", "flex-column", 3, "ngClass"], [1, "panel-heading"], ["class", "panel-heading-btn", 4, "ngIf"], ["class", "panel-title", 4, "ngIf"], ["class", "panel-body", "style", "padding:0px;height: 91%;", 3, "ngClass", 4, "ngIf"], [1, "panel-footer", 3, "hidden", "ngClass"], ["panelFooter", ""], [1, "panel-heading-btn"], [1, "panel-title"], [1, "panel-body", 2, "padding", "0px", "height", "91%", 3, "ngClass"], ["class", "panel-loader", 4, "ngIf"], [1, "panel-loader"], [1, "spinner-small"]], template: function PanelRemoveComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef(_c4$2);
        ɵɵtemplate(0, PanelRemoveComponent_div_0_Template, 12, 13, "div", 0);
        ɵɵelement(1, "app-modal-notification");
    } if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.remove);
    } }, directives: [NgIf, UIModalNotificationPage, NgClass], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PanelRemoveComponent, [{
        type: Component,
        args: [{
                selector: 'app-panel-remove',
                inputs: ['title', 'variant', 'noBody', 'noButton', 'bodyClass', 'footerClass', 'panelClass'],
                templateUrl: './panel-remove.component.html',
                styleUrls: ['./panel-remove.component.css']
            }]
    }], function () { return [{ type: NgbModal }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { panelFooter: [{
            type: ViewChild,
            args: ['panelFooter']
        }], modelNotification: [{
            type: ViewChild,
            args: [UIModalNotificationPage]
        }] }); })();

class exportTable {
    static exportToExcel(tableId, name) {
        let timeSpan = new Date().toISOString();
        let getFullDay = timeSpan.split('T');
        // let prefix = name || "downLoadedFile";
        let prefix = name;
        let fileName = `${prefix}_${getFullDay[0]}`;
        let targetTableElm = document.getElementById(tableId);
        let wb = utils.table_to_book(targetTableElm, { sheet: prefix });
        writeFile(wb, `${fileName}.csv`);
    }
}

const _c0$4 = ["panelFooter"];
const _c1$4 = ["ClicktoMaximize"];
const _c2$4 = ["ClicktoMinimize"];
var I18N_3$1;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_ClicktoRefresh$$LIB_COMPONENT_PANEL_TABLE_PANEL_TABLE_PANEL_COMPONENT_TS___4 = goog.getMsg("Click to Refresh");
    I18N_3$1 = MSG_EXTERNAL_ClicktoRefresh$$LIB_COMPONENT_PANEL_TABLE_PANEL_TABLE_PANEL_COMPONENT_TS___4;
}
else {
    I18N_3$1 = $localize `:@@ClicktoRefresh␟8f34af26873c305d82ae9ec0634a22a536d08059␟1109274755188761114:Click to Refresh`;
}
const _c5$2 = ["matTooltip", I18N_3$1];
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
    const _r31 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8);
    ɵɵprojection(1, 5);
    ɵɵprojection(2, 6);
    ɵɵelementStart(3, "a", 9);
    ɵɵi18nAttributes(4, _c5$2);
    ɵɵlistener("click", function TablePanelComponent_div_0_div_2_Template_a_click_3_listener() { ɵɵrestoreView(_r31); const ctx_r30 = ɵɵnextContext(2); return ctx_r30.panelReload(); });
    ɵɵelement(5, "i", 10);
    ɵɵelementEnd();
    ɵɵprojection(6, 7);
    ɵɵprojection(7, 8);
    ɵɵprojection(8, 9);
    ɵɵprojection(9, 10);
    ɵɵelementStart(10, "a", 11);
    ɵɵlistener("click", function TablePanelComponent_div_0_div_2_Template_a_click_10_listener() { ɵɵrestoreView(_r31); const ctx_r32 = ɵɵnextContext(2); return ctx_r32.panelExpand(); });
    ɵɵelement(11, "i", 12);
    ɵɵelementEnd();
    ɵɵprojection(12, 11);
    ɵɵelementStart(13, "template", null, 13);
    ɵɵi18n(15, I18N_6);
    ɵɵelementEnd();
    ɵɵelementStart(16, "template", null, 14);
    ɵɵi18n(18, I18N_8);
    ɵɵelementEnd();
    ɵɵprojection(19, 12);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r24 = ɵɵnextContext(2);
    ɵɵadvance(10);
    ɵɵpropertyInterpolate("matTooltip", ctx_r24.screenStatus);
} }
function TablePanelComponent_div_0_h4_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "h4", 15);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r25 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r25.name);
} }
function TablePanelComponent_div_0_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵelement(1, "span", 19);
    ɵɵelementEnd();
} }
const _c10$1 = function (a0, a1) { return [a0, a1]; };
function TablePanelComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵprojection(1, 13);
    ɵɵtemplate(2, TablePanelComponent_div_0_div_5_div_2_Template, 2, 0, "div", 17);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r26 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction2(2, _c10$1, ctx_r26.collapse ? "d-none" : "", ctx_r26.bodyClass ? ctx_r26.bodyClass : ""));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r26.reload);
} }
const _c11$1 = function (a0, a1, a2, a3) { return [a0, a1, a2, a3]; };
const _c12 = function (a0) { return [a0]; };
function TablePanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵelementStart(1, "div", 2);
    ɵɵtemplate(2, TablePanelComponent_div_0_div_2_Template, 20, 1, "div", 3);
    ɵɵtemplate(3, TablePanelComponent_div_0_h4_3_Template, 2, 1, "h4", 4);
    ɵɵelementEnd();
    ɵɵprojection(4);
    ɵɵtemplate(5, TablePanelComponent_div_0_div_5_Template, 3, 5, "div", 5);
    ɵɵprojection(6, 1);
    ɵɵprojection(7, 2);
    ɵɵelementStart(8, "div", 6, 7);
    ɵɵprojection(10, 3);
    ɵɵelementEnd();
    ɵɵprojection(11, 4);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction4(6, _c11$1, ctx_r23.expand ? "panel-expand" : "", ctx_r23.reload ? "panel-loading" : "", ctx_r23.panelClass ? ctx_r23.panelClass : "", ctx_r23.variant ? "panel-" + ctx_r23.variant : "panel-inverse"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r23.noButton);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r23.name);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r23.noBody);
    ɵɵadvance(3);
    ɵɵproperty("hidden", !ctx_r23.showFooter)("ngClass", ɵɵpureFunction1(11, _c12, ctx_r23.footerClass ? ctx_r23.footerClass : ""));
} }
const _c13 = [[["", "beforeBody", ""]], [["", "noBody", ""]], [["", "outsideBody", ""]], [["", "footer", ""]], [["", "afterFooter", ""]], [["", "filterButton", ""]], [["", "backButton", ""]], [["", "searchfield", ""]], [["", "searchButton", ""]], [["", "searchfieldPanel", ""]], [["", "searchButtonPanel", ""]], [["", "downloadButton", ""]], [["", "addNewButton", ""]], "*"];
const _c14 = ["[beforeBody]", "[noBody]", "[outsideBody]", "[footer]", "[afterFooter]", "[filterButton]", "[backButton]", "[searchfield]", "[searchButton]", "[searchfieldPanel]", "[searchButtonPanel]", "[downloadButton]", "[addNewButton]", "*"];
class TablePanelComponent {
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
TablePanelComponent.ɵfac = function TablePanelComponent_Factory(t) { return new (t || TablePanelComponent)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef)); };
TablePanelComponent.ɵcmp = ɵɵdefineComponent({ type: TablePanelComponent, selectors: [["app-panel-user"]], viewQuery: function TablePanelComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$4, true);
        ɵɵviewQuery(_c1$4, true);
        ɵɵviewQuery(_c2$4, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.panelFooter = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ClicktoMaximize = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ClicktoMinimize = _t.first);
    } }, inputs: { name: "name", variant: "variant", noBody: "noBody", noButton: "noButton", bodyClass: "bodyClass", footerClass: "footerClass", panelClass: "panelClass" }, outputs: { scrollBarDirective: "scrollBarDirective", eventEmitToPageNaviagte: "eventEmitToPageNaviagte", panelExpandCollapse: "panelExpandCollapse", refreshTableList: "refreshTableList" }, ngContentSelectors: _c14, decls: 1, vars: 1, consts: [["class", "panel", "style", "border:0.5px solid #cccccc;", 3, "ngClass", 4, "ngIf"], [1, "panel", 2, "border", "0.5px solid #cccccc", 3, "ngClass"], [1, "panel-heading"], ["class", "panel-heading-btn", 4, "ngIf"], ["class", "panel-title", 4, "ngIf"], ["class", "panel-body", 3, "ngClass", 4, "ngIf"], [1, "panel-footer", 3, "hidden", "ngClass"], ["panelFooter", ""], [1, "panel-heading-btn"], ["href", "javascript:;", 1, "btn", "btn-xs", "btn-icon", "btn-circle", "btn-success", "panel-reload", 3, "click", 6, "matTooltip"], [1, "fa", "fa-redo"], ["href", "javascript:;", 1, "btn", "btn-xs", "btn-icon", "btn-circle", "btn-default", "panel-expand", 3, "matTooltip", "click"], [1, "fa", "fa-expand"], ["ClicktoMaximize", ""], ["ClicktoMinimize", ""], [1, "panel-title"], [1, "panel-body", 3, "ngClass"], ["class", "panel-loader", 4, "ngIf"], [1, "panel-loader"], [1, "spinner-small"]], template: function TablePanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef(_c13);
        ɵɵtemplate(0, TablePanelComponent_div_0_Template, 12, 13, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.remove);
    } }, directives: [NgIf, NgClass, MatTooltip], styles: [".panel-body[_ngcontent-%COMP%]{padding:0}.panel[_ngcontent-%COMP%]{margin-bottom:0}.panel.panel-expand[_ngcontent-%COMP%]{overflow:hidden}div.panel-inverse[_ngcontent-%COMP%]{border:none!important}.cdk-overlay-container[_ngcontent-%COMP%]{z-index:99999!important}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TablePanelComponent, [{
        type: Component,
        args: [{
                selector: 'app-panel-user',
                templateUrl: './table-panel.component.html',
                inputs: ['name', 'variant', 'noBody', 'noButton', 'bodyClass', 'footerClass', 'panelClass'],
                styleUrls: ['./table-panel.component.css']
            }]
    }], function () { return [{ type: Router }, { type: Renderer2 }, { type: ElementRef }, { type: ChangeDetectorRef }]; }, { scrollBarDirective: [{
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

class NumberDirective {
    constructor(_el) {
        this._el = _el;
    }
    onInputChange(event) {
        const initalValue = this._el.nativeElement.value;
        // this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
        this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
        if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
    }
}
NumberDirective.ɵfac = function NumberDirective_Factory(t) { return new (t || NumberDirective)(ɵɵdirectiveInject(ElementRef)); };
NumberDirective.ɵdir = ɵɵdefineDirective({ type: NumberDirective, selectors: [["input", "numbersOnly", ""]], hostBindings: function NumberDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("input", function NumberDirective_input_HostBindingHandler($event) { return ctx.onInputChange($event); });
    } } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NumberDirective, [{
        type: Directive,
        args: [{
                selector: 'input[numbersOnly]'
            }]
    }], function () { return [{ type: ElementRef }]; }, { onInputChange: [{
            type: HostListener,
            args: ['input', ['$event']]
        }] }); })();

const PERFECT_SCROLLBAR_CONFIG = new InjectionToken('PERFECT_SCROLLBAR_CONFIG');
class Geometry {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}
class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const PerfectScrollbarEvents = [
    'psScrollY',
    'psScrollX',
    'psScrollUp',
    'psScrollDown',
    'psScrollLeft',
    'psScrollRight',
    'psYReachEnd',
    'psYReachStart',
    'psXReachEnd',
    'psXReachStart'
];
class PerfectScrollbarConfig {
    constructor(config = {}) {
        this.assign(config);
    }
    assign(config = {}) {
        for (const key in config) {
            this[key] = config[key];
        }
    }
}

class ScrollbarDirective {
    constructor(zone, differs, elementRef, platformId, defaults, el) {
        this.zone = zone;
        this.differs = differs;
        this.elementRef = elementRef;
        this.platformId = platformId;
        this.defaults = defaults;
        this.el = el;
        this.instance = null;
        this.ro = null;
        this.timeout = null;
        this.animation = null;
        this.configDiff = null;
        this.ngDestroy = new Subject();
        this.disabled = false;
        this.psScrollY = new EventEmitter();
        this.psScrollX = new EventEmitter();
        this.psScrollUp = new EventEmitter();
        this.psScrollDown = new EventEmitter();
        this.psScrollLeft = new EventEmitter();
        this.psScrollRight = new EventEmitter();
        this.psYReachEnd = new EventEmitter();
        this.psYReachStart = new EventEmitter();
        this.psXReachEnd = new EventEmitter();
        this.psXReachStart = new EventEmitter();
    }
    ngOnInit() {
        if (!this.disabled && isPlatformBrowser(this.platformId)) {
            const config = new PerfectScrollbarConfig(this.defaults);
            config.assign(this.config); // Custom configuration
            this.zone.runOutsideAngular(() => {
                this.instance = new PerfectScrollbar(this.elementRef.nativeElement, config);
            });
            if (!this.configDiff) {
                this.configDiff = this.differs.find(this.config || {}).create();
                this.configDiff.diff(this.config || {});
            }
            this.zone.runOutsideAngular(() => {
                this.ro = new ResizeObserver(() => {
                    this.update();
                });
                if (this.elementRef.nativeElement.children[0]) {
                    this.ro.observe(this.elementRef.nativeElement.children[0]);
                }
                this.ro.observe(this.elementRef.nativeElement);
            });
            this.zone.runOutsideAngular(() => {
                PerfectScrollbarEvents.forEach((eventName) => {
                    const eventType = eventName.replace(/([A-Z])/g, (c) => `-${c.toLowerCase()}`);
                    fromEvent(this.elementRef.nativeElement, eventType)
                        .pipe(auditTime(20), takeUntil(this.ngDestroy))
                        .subscribe((event) => {
                        this[eventName].emit(event);
                    });
                });
            });
        }
    }
    ngOnDestroy() {
        if (isPlatformBrowser(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.complete();
            if (this.ro) {
                this.ro.disconnect();
            }
            if (this.timeout && typeof window !== 'undefined') {
                window.clearTimeout(this.timeout);
            }
            this.zone.runOutsideAngular(() => {
                if (this.instance) {
                    this.instance.destroy();
                }
            });
            this.instance = null;
        }
    }
    ngDoCheck() {
        if (!this.disabled && this.configDiff && isPlatformBrowser(this.platformId)) {
            const changes = this.configDiff.diff(this.config || {});
            if (changes) {
                this.ngOnDestroy();
                this.ngOnInit();
            }
        }
    }
    ngOnChanges(changes) {
        if (changes['disabled'] && !changes['disabled'].isFirstChange() && isPlatformBrowser(this.platformId)) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === true) {
                    this.ngOnDestroy();
                }
                else if (changes['disabled'].currentValue === false) {
                    this.ngOnInit();
                }
            }
        }
    }
    ps() {
        return this.instance;
    }
    update() {
        if (typeof window !== 'undefined') {
            if (this.timeout) {
                window.clearTimeout(this.timeout);
            }
            this.timeout = window.setTimeout(() => {
                if (!this.disabled && this.configDiff) {
                    try {
                        this.zone.runOutsideAngular(() => {
                            if (this.instance) {
                                this.instance.update();
                            }
                        });
                    }
                    catch (error) {
                        // Update can be finished after destroy so catch errors
                    }
                }
            }, 0);
        }
    }
    geometry(prefix = 'scroll') {
        return new Geometry(this.elementRef.nativeElement[prefix + 'Left'], this.elementRef.nativeElement[prefix + 'Top'], this.elementRef.nativeElement[prefix + 'Width'], this.elementRef.nativeElement[prefix + 'Height']);
    }
    position(absolute = false) {
        if (!absolute && this.instance) {
            return new Position(this.instance.reach.x || 0, this.instance.reach.y || 0);
        }
        else {
            return new Position(this.elementRef.nativeElement.scrollLeft, this.elementRef.nativeElement.scrollTop);
        }
    }
    scrollable(direction = 'any') {
        const element = this.elementRef.nativeElement;
        if (direction === 'any') {
            return element.classList.contains('ps--active-x') ||
                element.classList.contains('ps--active-y');
        }
        else if (direction === 'both') {
            return element.classList.contains('ps--active-x') &&
                element.classList.contains('ps--active-y');
        }
        else {
            return element.classList.contains('ps--active-' + direction);
        }
    }
    scrollTo(x, y, speed) {
        if (!this.disabled) {
            if (y == null && speed == null) {
                this.animateScrolling('scrollTop', x, speed);
            }
            else {
                if (x != null) {
                    this.animateScrolling('scrollLeft', x, speed);
                }
                if (y != null) {
                    this.animateScrolling('scrollTop', y, speed);
                }
            }
        }
    }
    scrollToX(x, speed) {
        this.animateScrolling('scrollLeft', x, speed);
    }
    scrollToY(y, speed) {
        this.animateScrolling('scrollTop', y, speed);
    }
    scrollToTop(offset, speed) {
        this.animateScrolling('scrollTop', (offset || 0), speed);
    }
    scrollToLeft(offset, speed) {
        this.animateScrolling('scrollLeft', (offset || 0), speed);
    }
    scrollToRight(offset, speed) {
        const left = this.elementRef.nativeElement.scrollWidth -
            this.elementRef.nativeElement.clientWidth;
        this.animateScrolling('scrollLeft', left - (offset || 0), speed);
    }
    scrollToBottom(offset, speed) {
        const top = this.elementRef.nativeElement.scrollHeight -
            this.elementRef.nativeElement.clientHeight;
        this.animateScrolling('scrollTop', top - (offset || 0), speed);
    }
    scrollToElement(qs, offset, speed) {
        const element = this.elementRef.nativeElement.querySelector(qs);
        if (element) {
            const elementPos = element.getBoundingClientRect();
            const scrollerPos = this.elementRef.nativeElement.getBoundingClientRect();
            if (this.elementRef.nativeElement.classList.contains('ps--active-x')) {
                const currentPos = this.elementRef.nativeElement['scrollLeft'];
                const position = elementPos.left - scrollerPos.left + currentPos;
                this.animateScrolling('scrollLeft', position + (offset || 0), speed);
            }
            if (this.elementRef.nativeElement.classList.contains('ps--active-y')) {
                const currentPos = this.elementRef.nativeElement['scrollTop'];
                const position = elementPos.top - scrollerPos.top + currentPos;
                this.animateScrolling('scrollTop', position + (offset || 0), speed);
            }
        }
    }
    animateScrolling(target, value, speed) {
        if (this.animation) {
            window.cancelAnimationFrame(this.animation);
            this.animation = null;
        }
        if (!speed || typeof window === 'undefined') {
            this.elementRef.nativeElement[target] = value;
        }
        else if (value !== this.elementRef.nativeElement[target]) {
            let newValue = 0;
            let scrollCount = 0;
            let oldTimestamp = performance.now();
            let oldValue = this.elementRef.nativeElement[target];
            const cosParameter = (oldValue - value) / 2;
            const step = (newTimestamp) => {
                scrollCount += Math.PI / (speed / (newTimestamp - oldTimestamp));
                newValue = Math.round(value + cosParameter + cosParameter * Math.cos(scrollCount));
                // Only continue animation if scroll position has not changed
                if (this.elementRef.nativeElement[target] === oldValue) {
                    if (scrollCount >= Math.PI) {
                        this.animateScrolling(target, value, 0);
                    }
                    else {
                        this.elementRef.nativeElement[target] = newValue;
                        // On a zoomed out page the resulting offset may differ
                        oldValue = this.elementRef.nativeElement[target];
                        oldTimestamp = newTimestamp;
                        this.animation = window.requestAnimationFrame(step);
                    }
                }
            };
            window.requestAnimationFrame(step);
        }
    }
    onClick(event) {
        if ($(event.target).hasClass('cancelActionButton') ||
            $(event.target).hasClass('backActionButton') ||
            $(event.target).hasClass('reviewAndSaveActionButton') ||
            $(event.target).hasClass('saveActionButton')) {
            this.scrollPositionToTop();
        }
    }
    // Scroll to top position
    scrollPositionToTop() {
        document.querySelector('#containerTop').scrollTop = 0;
    }
}
ScrollbarDirective.ɵfac = function ScrollbarDirective_Factory(t) { return new (t || ScrollbarDirective)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(KeyValueDiffers), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(PERFECT_SCROLLBAR_CONFIG, 8), ɵɵdirectiveInject(ElementRef)); };
ScrollbarDirective.ɵdir = ɵɵdefineDirective({ type: ScrollbarDirective, selectors: [["", "appScrollbarDirective", ""]], hostBindings: function ScrollbarDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function ScrollbarDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { disabled: "disabled", config: ["perfectScrollbar", "config"] }, outputs: { psScrollY: "psScrollY", psScrollX: "psScrollX", psScrollUp: "psScrollUp", psScrollDown: "psScrollDown", psScrollLeft: "psScrollLeft", psScrollRight: "psScrollRight", psYReachEnd: "psYReachEnd", psYReachStart: "psYReachStart", psXReachEnd: "psXReachEnd", psXReachStart: "psXReachStart" }, exportAs: ["ngxPerfectScrollbar"], features: [ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ScrollbarDirective, [{
        type: Directive,
        args: [{
                selector: '[appScrollbarDirective]',
                exportAs: 'ngxPerfectScrollbar'
            }]
    }], function () { return [{ type: NgZone }, { type: KeyValueDiffers }, { type: ElementRef }, { type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [PERFECT_SCROLLBAR_CONFIG]
            }] }, { type: ElementRef }]; }, { disabled: [{
            type: Input
        }], config: [{
            type: Input,
            args: ['perfectScrollbar']
        }], psScrollY: [{
            type: Output
        }], psScrollX: [{
            type: Output
        }], psScrollUp: [{
            type: Output
        }], psScrollDown: [{
            type: Output
        }], psScrollLeft: [{
            type: Output
        }], psScrollRight: [{
            type: Output
        }], psYReachEnd: [{
            type: Output
        }], psYReachStart: [{
            type: Output
        }], psXReachEnd: [{
            type: Output
        }], psXReachStart: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['click', ["$event"]]
        }] }); })();

class HyphenPipe {
    transform(value) {
        return (value) ? value : ('-');
    }
}
HyphenPipe.ɵfac = function HyphenPipe_Factory(t) { return new (t || HyphenPipe)(); };
HyphenPipe.ɵpipe = ɵɵdefinePipe({ name: "hyphen", type: HyphenPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HyphenPipe, [{
        type: Pipe,
        args: [{
                name: 'hyphen'
            }]
    }], null, null); })();

// Syncfusion - dropdown list - No Records Found
function syncDropdownNoRecordsFoundLocale() {
    L10n.load({
        'hi': {
            'dropdowns': {
                'noRecordsTemplate': "कोई रिकॉर्ड नहीं मिला!"
            },
            dropdowntree: {
                noRecordsTemplate: "कोई रिकॉर्ड नहीं मिला!"
            }
        }, 'ar': {
            'dropdowns': {
                'noRecordsTemplate': "لا توجد سجلات!"
            },
            dropdowntree: {
                noRecordsTemplate: "لا توجد سجلات!"
            }
        }
    });
}
const matRangeLabelIntl = (page, pageSize, length) => {
    if (length === 0 || pageSize === 0) {
        return $localize `:@@paginator.zeroRange:0 of ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return $localize `:@@paginator.rangeOfLabel:${startIndex + 1} - ${endIndex} of ${length}`;
};
function MyPaginatorIntl() {
    const paginatorIntl = new MatPaginatorIntl();
    paginatorIntl.itemsPerPageLabel = $localize `:@@paginator.displayPerPage:Items per page`;
    paginatorIntl.nextPageLabel = $localize `:@@paginator.nextPage:Next page`;
    paginatorIntl.previousPageLabel = $localize `:@@paginator.prevPage:Prev page`;
    paginatorIntl.lastPageLabel = $localize `:@@paginator.lastPage:Last page`;
    paginatorIntl.firstPageLabel = $localize `:@@paginator.firstPage:First page`;
    paginatorIntl.getRangeLabel = matRangeLabelIntl;
    return paginatorIntl;
}

class GlobalModule {
}
GlobalModule.ɵmod = ɵɵdefineNgModule({ type: GlobalModule });
GlobalModule.ɵinj = ɵɵdefineInjector({ factory: function GlobalModule_Factory(t) { return new (t || GlobalModule)(); }, providers: [
        {
            provide: MatPaginatorIntl,
            useValue: MyPaginatorIntl()
        }, {
            // Syncfusion dropdown - No records found localization
            provide: syncDropdownNoRecordsFoundLocale,
            useValue: syncDropdownNoRecordsFoundLocale()
        }
    ], imports: [[
            CommonModule,
            MatTooltipModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(GlobalModule, { declarations: [GlobalComponent,
        UIModalNotificationPage,
        PageNotFoundComponent,
        AssetDataPanelComponent,
        PanelBlankComponent,
        PanelDashboardComponent,
        PanelRemoveComponent,
        TablePanelComponent,
        NumberDirective,
        ScrollbarDirective,
        HyphenPipe], imports: [CommonModule,
        MatTooltipModule], exports: [GlobalComponent,
        UIModalNotificationPage,
        PageNotFoundComponent,
        AssetDataPanelComponent,
        PanelBlankComponent,
        PanelDashboardComponent,
        PanelRemoveComponent,
        TablePanelComponent,
        NumberDirective,
        ScrollbarDirective,
        HyphenPipe] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(GlobalModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    GlobalComponent,
                    UIModalNotificationPage,
                    PageNotFoundComponent,
                    AssetDataPanelComponent,
                    PanelBlankComponent,
                    PanelDashboardComponent,
                    PanelRemoveComponent,
                    TablePanelComponent,
                    NumberDirective,
                    ScrollbarDirective,
                    HyphenPipe
                ],
                imports: [
                    CommonModule,
                    MatTooltipModule
                ],
                exports: [
                    GlobalComponent,
                    UIModalNotificationPage,
                    PageNotFoundComponent,
                    AssetDataPanelComponent,
                    PanelBlankComponent,
                    PanelDashboardComponent,
                    PanelRemoveComponent,
                    TablePanelComponent,
                    NumberDirective,
                    ScrollbarDirective,
                    HyphenPipe
                ],
                providers: [
                    {
                        provide: MatPaginatorIntl,
                        useValue: MyPaginatorIntl()
                    }, {
                        // Syncfusion dropdown - No records found localization
                        provide: syncDropdownNoRecordsFoundLocale,
                        useValue: syncDropdownNoRecordsFoundLocale()
                    }
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
            }]
    }], null, null); })();

class ErrorData {
}

class ResponseEntity {
}

class TimeZone {
}

const MINUTES_UNITL_AUTO_LOGOUT = 1; // in mins
const CHECK_INTERVAL = 15000; // in ms
const STORE_KEY = 'lastAction';
class AutoLogoutService {
    constructor(router) {
        this.router = router;
        // this.check();
        //this.initListener();
        //this.initInterval();
        // localStorage.setItem(STORE_KEY, Date.now().toString());
    }
    getLastAction() {
        return parseInt(localStorage.getItem("lastAction"));
    }
    setLastAction(lastAction) {
        localStorage.setItem(STORE_KEY, lastAction.toString());
    }
    ngOnDestroy() {
        clearInterval(this.inter);
    }
    initListener() {
        document.body.addEventListener('click', () => this.reset());
        document.body.addEventListener('mouseover', () => this.reset());
        document.body.addEventListener('mouseout', () => this.reset());
        document.body.addEventListener('keydown', () => this.reset());
        document.body.addEventListener('keyup', () => this.reset());
        document.body.addEventListener('keypress', () => this.reset());
    }
    reset() {
        this.setLastAction(Date.now());
    }
    initInterval() {
        this.inter = setInterval(() => {
            this.check();
        }, CHECK_INTERVAL);
    }
    getSignOnHistoryByUserId(userId) {
        /* this.logoutService.getSignOnHistoryByUserId(userId).subscribe(res => {
          this.currentSigOnTime = res;
          //
        },
          error => {
            
          }
        ) */
    }
    check() {
        this.userId = sessionStorage.getItem('userId');
        const now = Date.now();
        let lastAction = this.getLastAction();
        const timeleft = lastAction + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
        const diff = timeleft - now;
        const isTimeout = diff < 0;
        if (this.currentSigOnTime != null || this.userId != undefined || this.userId != null) {
            if (isTimeout) {
                alert("session expired");
                this.logout();
                localStorage.clear();
                this.router.navigate(['']);
            }
        }
    }
    logout() {
        this.userId = sessionStorage.getItem('userId');
        /* this.logoutService.logout(this.userId).subscribe(response => {
          localStorage.clear();
          localStorage.removeItem('pagemenu');
          sessionStorage.clear();
          sessionStorage.removeItem('userId');
          sessionStorage.removeItem('userName');
          this.router.navigate(['']);
        },
          error => {
            
        );
      } */
    }
}
AutoLogoutService.ɵfac = function AutoLogoutService_Factory(t) { return new (t || AutoLogoutService)(ɵɵinject(Router)); };
AutoLogoutService.ɵprov = ɵɵdefineInjectable({ token: AutoLogoutService, factory: AutoLogoutService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AutoLogoutService, [{
        type: Injectable
    }], function () { return [{ type: Router }]; }, null); })();

class DialogService {
    constructor() {
        this.navigateAwaySelection$ = new Subject();
    }
    /**
     * Ask user to confirm an action. `message` explains the action and choices.
     * Returns Prmose resolving to `true`=confirm or `false`=cancel
     */
    //  Warning - when unsaved changes done ask user to confirm/cancel. 
    alertMessage(title, text) {
        return new Promise((resolve) => {
            Swal.fire({
                title: "Are you sure?",
                text: text,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Ok',
                cancelButtonText: 'Cancel',
                reverseButtons: true,
                showCloseButton: true,
                customClass: {
                    confirmButton: 'btn btn-warning',
                    container: 'warning_info',
                }
            }).then((result) => {
                if (result.value) {
                    this.navigateAwaySelection$.next(true);
                    return resolve(true);
                }
            });
        });
    }
}
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(); };
DialogService.ɵprov = ɵɵdefineInjectable({ token: DialogService, factory: DialogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DialogService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

class ExcelService {
    constructor() {
    }
    generateExcel(excelObject, excelSearchFilterFields) {
        //Create workbook and worksheet
        let workbook = new Workbook();
        // create new sheet with pageSetup settings for A4 - landscape
        let worksheet = workbook.addWorksheet(excelObject.excelWorkSheetName, {
            pageSetup: { paperSize: 9, orientation: 'landscape' }
        });
        worksheet.properties.defaultColWidth = 20;
        //Add Row and formatting
        let excelWorkSheetTitle = worksheet.addRow([excelObject.title]);
        excelWorkSheetTitle.font = {
            name: 'Calibri',
            family: 4,
            size: 20,
            underline: false,
            bold: true
        };
        excelWorkSheetTitle.alignment = {
            horizontal: 'left',
            vertical: 'middle'
        };
        worksheet.addRow([]);
        // Merge cells between A1 to N2
        worksheet.mergeCells('A1:N2');
        //Blank Row 
        worksheet.addRow([]);
        /*
        ========================================================
          Search filter fields  - Starts here
          ========================================================
        */
        if (excelSearchFilterFields.searchFilterKeysValues.length) {
            //Add Row and formatting
            let searchCriteriaText = worksheet.addRow([excelSearchFilterFields.searchCriteriaText]);
            searchCriteriaText.font = {
                name: 'Calibri',
                family: 4,
                size: 16,
                bold: true
            };
            excelWorkSheetTitle.alignment = {
                horizontal: 'left',
                vertical: 'middle'
            };
            let excelSearchFilterFieldsData = excelSearchFilterFields.searchFilterKeysValues;
            excelSearchFilterFieldsData.forEach(d => {
                let row = worksheet.addRow(d);
                // Cell Style for Table header data : Fill and Border and Font
                row.eachCell((cell, number) => {
                    cell.font = {
                        name: 'Calibri',
                        family: 4,
                        bold: false,
                        size: 12
                    };
                    if (number == 1) {
                        cell.font.bold = true;
                    }
                });
            });
        }
        /*
          ========================================================
          Search filter fields  - ends here
          ========================================================
        */
        worksheet.addRow([]);
        /*
         ========================================================
           Creating Row for Table header and display in Excel sheet  - Starts here
           ========================================================
        */
        //Add Header Row
        let excelTableHeaderNames = worksheet.addRow(excelObject.tableHeaderNames);
        // Cell Style for Table header data : Fill and Border and Font
        excelTableHeaderNames.eachCell((cell, number) => {
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'F2DEFF' },
            };
            cell.font = {
                name: 'Calibri',
                family: 4,
                bold: true,
                size: 12
            };
            cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
        });
        /*
         ========================================================
           Creating Row for Table header and display in Excel sheet -  Ends here
           ========================================================
        */
        /*
          ========================================================
            Add table body data and display in Excel - Starts here
            ========================================================
         */
        let excelTableBodyData = excelObject.tableBodyData;
        excelTableBodyData.forEach(d => {
            let row = worksheet.addRow(d);
            // Cell Style for Table header data : Fill and Border and Font
            row.eachCell((cell, number) => {
                cell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'FFFFFF' },
                };
                cell.font = {
                    name: 'Calibri',
                    family: 4,
                    bold: false,
                    size: 12
                };
                cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            });
        });
        /*
         ========================================================
           Add table body data and display in Excel -  Ends here
           ========================================================
        */
        worksheet.addRow([]);
        /*
         ========================================================
           Footer Row - Starts here
           ========================================================
        */
        let excelFooterRow = worksheet.addRow(['Disclaimer: This is system generated report.']);
        excelFooterRow.getCell(1).fill = {
            type: 'pattern',
            pattern: 'none',
            fgColor: { argb: 'FFFFFF' }
        };
        excelFooterRow.getCell(1).font = {
            name: 'Calibri',
            family: 4,
            bold: true,
            size: 12
        };
        // excelFooterRow.getCell(1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
        //Merge Cells
        worksheet.mergeCells(`A${excelFooterRow.number}:F${excelFooterRow.number}`);
        /*
        ========================================================
          Footer Row - Ends here
          ========================================================
       */
        /*
       ========================================================
         Generate Excel File with given name - Starts here
         ========================================================
      */
        workbook.xlsx.writeBuffer().then((data) => {
            let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, excelObject.fileName + '.xlsx');
        });
        /*
      ========================================================
        Generate Excel File with given name - Ends here
        ========================================================
     */
    }
}
ExcelService.ɵfac = function ExcelService_Factory(t) { return new (t || ExcelService)(); };
ExcelService.ɵprov = ɵɵdefineInjectable({ token: ExcelService, factory: ExcelService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ExcelService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class PdfService {
    constructor() {
    }
    generatePDF(pdfObject, pdfSearchFilterFields) {
        let head = [pdfObject.tableHeaderNames];
        let pdfTableBodyData = pdfObject.tableBodyData;
        // Create Object for PDF
        var doc = new jsPDF('l', 'mm', "a1");
        doc.setFontSize(20);
        doc.text(pdfObject.title, 15, 10);
        /*
        ========================================================
        Search filter fields  - Starts here
        ========================================================
      */
        if (pdfSearchFilterFields.searchFilterKeysValues.length) {
            doc.setFontSize(16);
            doc.text(pdfSearchFilterFields.searchCriteriaText, 15, 24);
            let pdfSearchFilterFieldsData = pdfSearchFilterFields.searchFilterKeysValues;
            doc.autoTable({
                body: pdfSearchFilterFieldsData,
                theme: 'plain',
                head: null,
                styles: {
                    cellWidth: 100,
                },
                bodyStyles: {
                    fontSize: 12,
                },
                headStyles: {
                    fontSize: 12
                },
                startY: 25,
                didParseCell: data => {
                    if (data.column.index === 0) {
                        data.cell.styles.fontStyle = "bold";
                    }
                    else {
                        data.cell.minWidth = 200;
                        data.cell.cellWidth = 200;
                    }
                }
            });
        }
        /*
        ========================================================
        Search filter fields  - ends here
        ========================================================
      */
        /*
        ========================================================
          Add table body data and display in PDF - Starts here
          ========================================================
      */
        doc.autoTable({
            headStyles: {
                cellWidth: 'auto',
                overflow: 'visible',
                lineWidth: 1,
                lineColor: ['F0EEEE'],
                fontSize: 12
            },
            head: head,
            body: pdfTableBodyData,
            bodyStyles: { fontSize: 12 },
            theme: 'grid',
            didParseCell: function (cell, data) {
                if (cell.section === 'head') {
                    cell.cell.styles.fillColor = "#f2f3f4";
                    cell.cell.styles.textColor = "#000000";
                }
            },
        });
        /*
         ========================================================
           Add table body data and display in PDF -  Ends here
           ========================================================
        */
        doc.setFontSize(12);
        let finalY = doc.lastAutoTable.finalY + 15; // The y position on the page
        doc.text("Disclaimer: This is system generated report.", 15, finalY);
        /*
      ========================================================
        Generate PDF File with given name - Starts here
        ========================================================
      */
        doc.save(pdfObject.fileName);
        // doc.output('dataurlnewwindow'); 
        /*
    ========================================================
    Generate PDF File with given name - Ends here
    ========================================================
    */
    }
}
PdfService.ɵfac = function PdfService_Factory(t) { return new (t || PdfService)(); };
PdfService.ɵprov = ɵɵdefineInjectable({ token: PdfService, factory: PdfService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PdfService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class globalSharedService {
    constructor(excelService, pdfService) {
        this.excelService = excelService;
        this.pdfService = pdfService;
        this.selectedId = null;
        this.tabClick = null;
        this.urlName = null;
        // Asset configuration page
        this.assetViewModeFormViewStatus = 'assetViewMode';
        //Response code
        this.responseStatus = 800;
        // Error alert message type key value
        // Modal window for failed scenario(ex: Not saved)
        this.messageType_Fail = 'Failed'; //(!) with red
        // Information
        this.messageType_Info = 'Info';
        // Modal window for Warning info (ex: Cancel/Reset/Tab navigation)
        this.messageType_Warning = 'Warning'; // (!) with orange
        // Modal window for delete
        this.messageType_Error = 'Error'; // (Cross) with Red
        // Modal Window foralarm message format
        this.messageType_AlarmMessage = 'AlarmMessage';
        // Modal Window for clear message format
        this.messageType_ClearMessage = 'ClearMessage';
        // To get the Selected Dahboard name
        this.selectedDashboardName = [];
        this.setData = [];
    }
    setassetViewModeFormViewStatus(view) {
        this.assetViewModeFormViewStatus = view;
    }
    // When click on update/view, ID will pass to respective updata view
    GettingId(id) {
        this.selectedId = id;
        setTimeout(() => {
            this.selectedId = null;
        }, 1000);
    }
    GettingString(name) {
        this.name = name;
        setTimeout(() => {
            this.name = null;
        }, 2000);
    }
    setId(id) {
        this.id = id;
    }
    gettingName(name) {
        this.parentName = name;
    }
    // Store json valu to global level for show click to edit view
    setOrganizationDetail(pageName, objectDetail) {
        this.pageName = pageName;
        this.listOfRow = objectDetail;
        // setTimeout(() => {
        //     this.listOfRow = null;
        // }, 1000)
    }
    setMenuDetail(menu) {
        this.listOfRow = menu;
    }
    analogAsset(objectDetail) {
        this.analogAssetObj = objectDetail;
    }
    // User view to global level for show click to edit view tab level passing
    //=========================================( URL, Boject, tab,  Header
    listOfRowDetailForUser(url, objectDetail, tab, header) {
        this.userDetails = objectDetail;
        this.pageName = header;
        this.urlName = url;
        this.tabClick = tab;
    }
    // clearInfo
    clearInfo() {
        this.userDetails = null;
        this.pageName = null;
        this.tabClick = null;
        this.urlName = null;
        this.selectedId = null;
        this.listOfRow = null;
        sessionStorage.setItem('clickedRowDetail', null);
        // this.pageName = null;
        $('ul li').removeClass('active');
        this.assetViewModeFormViewStatus = 'assetViewMode';
    }
    getNamePattern() {
        return "^[a-zA-Z][ a-zA-Z0-9.#@*&_-]*";
    }
    getNamePatternForGatewayandAsset() {
        return "[ a-zA-Z0-9.#@*:&_-]*";
    }
    setIsAdmin(isAdmin) {
        this.isadmin = isAdmin;
    }
    doubleHyphen(event) {
        var str = event.target.value;
        var n = str.includes("--");
        if (n) {
            return true;
        }
    }
    // Landing menu
    landingMenuUrl(landingMenuUrl) {
        this.landingMenuUrlForHome = landingMenuUrl;
    }
    setNumberOfUsers(numberOfUsers) {
        this.maxUser = numberOfUsers;
        setTimeout(() => {
            this.maxUser = null;
        }, 2000);
    }
    setRoleList(confirmedList) {
        this.roleList = confirmedList;
    }
    setAssetDetail(details) {
        this.assetDetails = details;
        setTimeout(() => {
            this.assetDetails = null;
        }, 1000);
    }
    setGlobalId(id) {
        this.globalId = id;
    }
    setNotificationMedia(objectDetail) {
        this.notificationMediaList = objectDetail;
    }
    setConfirmedNotificationGroupList(objectDetail) {
        this.confirmedNotificationGroupList = objectDetail;
    }
    setConfirmedAccessGroupList(objectDetail) {
        this.confirmedAccessGroupList = objectDetail;
    }
    setUsersList(objectDetail) {
        this.usersList = objectDetail;
    }
    setNotificationGroupDetails(objectDetail) {
        this.notificationGroupDetails = objectDetail;
    }
    setNotificationMediaTabDetails(objectDetail) {
        this.notificationMediaTabDetails = objectDetail;
        setTimeout(() => {
            this.notificationMediaTabDetails = null;
        }, 2000);
    }
    setNotificationGroupmediaDetails(objectDetail) {
        this.notificationGroupmediaDetails = objectDetail;
    }
    setBackId(object) {
        this.backId = object;
    }
    // datasource
    dataSource(dataSource) {
        this.dataDataSource = dataSource;
    }
    setNotificationDetail(obj) {
        this.onpageloadNotificationGroupMediaDetails = obj;
    }
    getDashboardSelectedName(userDashboardList, id) {
        let selectedDashboardIdName = '';
        this.selectedDashboardName = userDashboardList.filter((item) => {
            if (id == null) {
                return item.isDefault == true;
            }
            else {
                return item.id == parseInt(id);
            }
        });
        if (this.selectedDashboardName.length) {
            selectedDashboardIdName = this.selectedDashboardName[0].name;
        }
        else
            selectedDashboardIdName = 'Dashboard';
        return selectedDashboardIdName;
    }
    getPatternForCommunication(dataType) {
        switch (dataType) {
            case 'String': {
                return "";
            }
            case 'Integer': {
                return "[0-9]*";
            }
            case 'Long': {
                return "[0-9]*";
            }
            case 'Double': {
                return /^[0-9]\d{0,5}(\.\d{1,4})?%?$/;
            }
            case 'Float': {
                return /^[0-9]\d{0,5}(\.\d{1,4})?%?$/;
            }
            default: {
                // return "^[a-zA-Z][ a-zA-Z0-9.#@*&_-]*";
                return "";
            }
        }
    }
    getPatternForDiscreterTag(dataType) {
        switch (dataType) {
            case 'String': {
                return "";
            }
            case 'Integer': {
                return "[0-9][0-9,]*";
            }
            case 'Long': {
                return "[0-9][0-9,]*";
            }
            case 'Double': {
                return /^[0-9]\d{0,5}(\.\d{1,4})?%?$/;
            }
            case 'Float': {
                return /^[0-9]\d{0,5}(\.\d{1,4})?%?$/;
            }
            default: {
                // return "^[a-zA-Z][ a-zA-Z0-9.#@*&_-]*";
                return "";
            }
        }
    }
    setLanguageURL(pageUrl) {
        // Getting the host name, Pathname, Current page URL
        let protocol = window.location.protocol;
        let hostName = window.location.host;
        var pathName = protocol + "//" + hostName + '/empyreal-universe/';
        var currentPageUrl;
        if (pageUrl != null) {
            currentPageUrl = pageUrl;
        }
        else {
            currentPageUrl = this.getCurrentUrl();
        }
        $('.navbar-nav.navbar-right li.dropdown a#header_language + ul > li a').each(function () {
            $(this).attr('href', '');
            let anchorTagAttrbute = $(this).attr('name');
            let path = pathName + anchorTagAttrbute + "/#" + currentPageUrl;
            $(this).attr('href', path);
        });
    }
    getCurrentUrl() {
        let pageName = document.location.href.split("#")[1];
        return pageName;
    }
    setReminingUsers(reminingUsers) {
        this.reminingUser = reminingUsers;
        setTimeout(() => {
            this.reminingUser = null;
        }, 2000);
    }
    setMaxUsers(maxUsers) {
        this.maxUsers = maxUsers;
        setTimeout(() => {
            this.maxUsers = null;
        }, 2000);
    }
    setDataServerTime(dataServerTime) {
        this.dataServerTime = dataServerTime;
        setTimeout(() => {
            this.maxUsers = null;
        }, 2000);
    }
    getExportingFileName(exportingfileName) {
        let timeSpan = new Date().toISOString();
        let getFullDay = timeSpan.split('T');
        let getTime = getFullDay[1].split(':');
        let getHrMin = getTime[0] + "H" + getTime[1] + "m";
        this.fileName = `${exportingfileName}_${getFullDay[0]}_${getHrMin}`;
        return this.fileName;
    }
    // Date and Time split for search criteria
    startDateEndDateTimeSplit(dateTime) {
        let getFullDay = dateTime.split('T');
        let getTime = getFullDay[1].split(':');
        let getHrMin = getTime[0] + ":" + getTime[1];
        return getFullDay[0] + " " + getHrMin;
    }
    // Make new set of re-arrange object
    reCreateNewObject(data, displayedColumns) {
        let sendBack = data.map(object => {
            var newObject = {};
            for (const objPropertyName of displayedColumns) {
                if (!object.hasOwnProperty(objPropertyName)) {
                    newObject[objPropertyName] = '-';
                }
                else {
                    newObject[objPropertyName] = object[objPropertyName] ? object[objPropertyName] : '-';
                }
            }
            return newObject;
        });
        return sendBack;
    }
    // Download CSV/PDF/Excel Title formate
    formateCSVTitle(titleList, headerName) {
        let headerTitle = headerName;
        let breakSentence = '\r\n';
        let titleRowKeys = '';
        let titleRowValues = '';
        let titleKeysValues;
        // Getting saperate Title Keys and Values
        for (const [key, value] of Object.entries(titleList)) {
            /* Row by Row */
            titleRowKeys += '"' + key + '"' + ',' + '"' + value + '"' + ',' + breakSentence;
        }
        //   Remove at last character (,)
        /* Row by Row */
        titleKeysValues = titleRowKeys.slice(0, -1);
        return headerTitle + breakSentence + breakSentence + titleKeysValues;
    }
    // Final download files
    downloadFile(fileType, exportFile, searchFieldsContainer, tableBodyDataList, fileName, csvOptions) {
        if (fileType == 'pdf') {
            // PDF Export format 
            this.pdfService.generatePDF(exportFile, searchFieldsContainer);
        }
        else if (fileType == 'excel') {
            // Excel export format
            this.excelService.generateExcel(exportFile, searchFieldsContainer);
        }
        else if (fileType == 'csv') {
            // Export CSV format
            new AngularCsv(tableBodyDataList, fileName, csvOptions);
        }
    }
    // Remove last element in the array
    removeLastIndexAtArray(object) {
        // Convert Obaject into Array
        let array = Object.values(object);
        array.pop();
        return array;
    }
    // Added S.No. to Download file excel,CSV, PDF
    serialNumberGenerate(array) {
        let i = 1;
        let returnModifiedArray = array.map((object) => {
            object.id = i;
            i++;
            return object;
        });
        return returnModifiedArray;
    }
    setUserEmailId(emailId) {
        this.emailId = emailId;
    }
    // Return the Selected languge for Syncfusion Dropdown 
    getLanguage() {
        return this.selectedLanguage;
    }
    // Set Language
    setLanguage(language) {
        this.selectedLanguage = language;
    }
    setMultiselectDropdownTextSettings() {
        return this.dropDownTextSettings = {
            text: $localize `:@@multiSelectDropdown.select:--Select--`,
            noDataLabel: $localize `:@@multiSelectDropdown.noDataLabel:No Data Available`
        };
    }
    setGatewayLableName(path) {
        let gatewayAndTemplateLableName;
        if (path[1] == "asset-template") {
            return gatewayAndTemplateLableName = "Gateway Template";
        }
        else if (path[1] == "asset") {
            return gatewayAndTemplateLableName = "Gateway";
        }
    }
    setDataValue(data) {
        this.setData = data;
    }
    getDataValue() {
        return this.setData;
    }
}
globalSharedService.ɵfac = function globalSharedService_Factory(t) { return new (t || globalSharedService)(ɵɵinject(ExcelService), ɵɵinject(PdfService)); };
globalSharedService.ɵprov = ɵɵdefineInjectable({ token: globalSharedService, factory: globalSharedService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(globalSharedService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ExcelService }, { type: PdfService }]; }, null); })();

class PendingChangesGuard {
    canDeactivate(component) {
        // if there are no pending changes, just allow deactivation; else confirm first
        return component.canDeactivate ? component.canDeactivate() : true;
        // NOTE: this warning message will only be shown when navigating elsewhere within your angular app;
        // when navigating away from your angular app, the browser will show a generic warning message
        // see http://stackoverflow.com/a/42207299/7307355
    }
}
PendingChangesGuard.ɵfac = function PendingChangesGuard_Factory(t) { return new (t || PendingChangesGuard)(); };
PendingChangesGuard.ɵprov = ɵɵdefineInjectable({ token: PendingChangesGuard, factory: PendingChangesGuard.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PendingChangesGuard, [{
        type: Injectable
    }], null, null); })();

class ShareddataService {
    constructor() {
        this.messageSource = new Subject();
        this.subject = new Subject();
        // currentMessage = this.messageSource.asObservable();
        this.categorySubject = new Subject();
        this.rackAssetSubject = new Subject();
    }
    changeMessage(message) {
        this.messageSource.next(message);
    }
    getChangedMessage() {
        return this.messageSource.asObservable();
    }
    setData(data) {
        this.subject.next(data);
    }
    getData() {
        return this.subject.asObservable();
    }
    setCategory(data) {
        this.categorySubject.next(data);
    }
    getCategory() {
        return this.categorySubject.asObservable();
    }
    setRackAsset(data) {
        this.rackAssetSubject.next(data);
    }
    getRackAsset() {
        return this.rackAssetSubject.asObservable();
    }
}
ShareddataService.ɵfac = function ShareddataService_Factory(t) { return new (t || ShareddataService)(); };
ShareddataService.ɵprov = ɵɵdefineInjectable({ token: ShareddataService, factory: ShareddataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ShareddataService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class ThemeChangeService {
    constructor(http) {
        this.http = http;
    }
    getThemeNames() {
        return null;
    }
}
ThemeChangeService.ɵfac = function ThemeChangeService_Factory(t) { return new (t || ThemeChangeService)(ɵɵinject(HttpClient)); };
ThemeChangeService.ɵprov = ɵɵdefineInjectable({ token: ThemeChangeService, factory: ThemeChangeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ThemeChangeService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: HttpClient }]; }, null); })();

class VersionCheckService {
    constructor(http) {
        this.http = http;
        // this will be replaced by actual hash post-build.js
        this.currentHash = '{{POST_BUILD_ENTERS_HASH_HERE}}';
    }
    /**
     * Checks in every set frequency the version of frontend application
     * @param url
     * @param {number} frequency - in milliseconds, defaults to 30 minutes
     */
    initVersionCheck(url, frequency = 3000) {
        setInterval(() => {
            this.checkVersion(url);
        }, frequency);
    }
    /**
     * Will do the call and check if the hash has changed or not
     * @param url
     */
    checkVersion(url) {
        // timestamp these requests to invalidate caches
        // this.http.get(url + '?t=' + new Date().getTime())
        this.http.get(url)
            // .first()
            .subscribe((response) => {
            const hash = response.hash;
            const hashChanged = this.hasHashChanged(this.currentHash, hash);
            // If new version, do something
            if (hashChanged) {
                // ENTER YOUR CODE TO DO SOMETHING UPON VERSION CHANGE
                // for an example: 
                location.reload();
            }
            // store the new hash so we wouldn't trigger versionChange again
            // only necessary in case you did not force refresh
            this.currentHash = hash;
        }, (err) => {
            console.error(err, 'Could not get version');
        });
    }
    /**
     * Checks if hash has changed.
     * This file has the JS hash, if it is a different one than in the version.json
     * we are dealing with version change
     * @param currentHash
     * @param newHash
     * @returns {boolean}
     */
    hasHashChanged(currentHash, newHash) {
        if (!currentHash || currentHash === '{{POST_BUILD_ENTERS_HASH_HERE}}') {
            return false;
        }
        return currentHash !== newHash;
    }
}
VersionCheckService.ɵfac = function VersionCheckService_Factory(t) { return new (t || VersionCheckService)(ɵɵinject(HttpClient)); };
VersionCheckService.ɵprov = ɵɵdefineInjectable({ token: VersionCheckService, factory: VersionCheckService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(VersionCheckService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: HttpClient }]; }, null); })();

/*
 * Public API Surface of global
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AssetDataPanelComponent, AutoLogoutService, DialogService, ErrorData, ExcelService, Geometry, GlobalComponent, GlobalModule, GlobalService, HyphenPipe, MyPaginatorIntl, NumberDirective, PERFECT_SCROLLBAR_CONFIG, PageNotFoundComponent, PanelBlankComponent, PanelDashboardComponent, PanelRemoveComponent, PdfService, PendingChangesGuard, PerfectScrollbarConfig, PerfectScrollbarEvents, Position, ResponseEntity, ScrollbarDirective, ShareddataService, TablePanelComponent, ThemeChangeService, TimeZone, UIModalNotificationPage, VersionCheckService, exportTable, globalSharedService, syncDropdownNoRecordsFoundLocale };
//# sourceMappingURL=global.js.map
