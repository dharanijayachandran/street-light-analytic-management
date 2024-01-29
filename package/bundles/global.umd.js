(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@ng-bootstrap/ng-bootstrap'), require('sweetalert2'), require('@angular/material/tooltip'), require('xlsx'), require('@angular/router'), require('jquery'), require('perfect-scrollbar'), require('resize-observer-polyfill'), require('rxjs'), require('rxjs/operators'), require('@syncfusion/ej2-base'), require('@angular/material/paginator'), require('@angular/localize/init'), require('exceljs'), require('file-saver'), require('angular7-csv/dist/Angular-csv'), require('jspdf'), require('jspdf-autotable'), require('@angular/common/http'), require('rxjs/add/operator/first')) :
    typeof define === 'function' && define.amd ? define('global', ['exports', '@angular/core', '@angular/common', '@ng-bootstrap/ng-bootstrap', 'sweetalert2', '@angular/material/tooltip', 'xlsx', '@angular/router', 'jquery', 'perfect-scrollbar', 'resize-observer-polyfill', 'rxjs', 'rxjs/operators', '@syncfusion/ej2-base', '@angular/material/paginator', '@angular/localize/init', 'exceljs', 'file-saver', 'angular7-csv/dist/Angular-csv', 'jspdf', 'jspdf-autotable', '@angular/common/http', 'rxjs/add/operator/first'], factory) :
    (global = global || self, factory(global.global = {}, global.ng.core, global.ng.common, global.ngBootstrap, global.Swal, global.ng.material.tooltip, global.xlsx, global.ng.router, global.$, global.PerfectScrollbar, global.ResizeObserver, global.rxjs, global.rxjs.operators, global.ej2Base, global.ng.material.paginator, global.ng.localize.init, global.exceljs, global.fileSaver, global.AngularCsv, global.jsPDF, null, global.ng.common.http));
}(this, (function (exports, core, common, ngBootstrap, Swal, tooltip, xlsx, router, $, PerfectScrollbar, ResizeObserver, rxjs, operators, ej2Base, paginator, init, exceljs, fileSaver, AngularCsv, jsPDF, jspdfAutotable, http) { 'use strict';

    Swal = Swal && Object.prototype.hasOwnProperty.call(Swal, 'default') ? Swal['default'] : Swal;
    $ = $ && Object.prototype.hasOwnProperty.call($, 'default') ? $['default'] : $;
    PerfectScrollbar = PerfectScrollbar && Object.prototype.hasOwnProperty.call(PerfectScrollbar, 'default') ? PerfectScrollbar['default'] : PerfectScrollbar;
    ResizeObserver = ResizeObserver && Object.prototype.hasOwnProperty.call(ResizeObserver, 'default') ? ResizeObserver['default'] : ResizeObserver;
    jsPDF = jsPDF && Object.prototype.hasOwnProperty.call(jsPDF, 'default') ? jsPDF['default'] : jsPDF;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var GlobalService = /** @class */ (function () {
        function GlobalService() {
        }
        GlobalService.ɵfac = function GlobalService_Factory(t) { return new (t || GlobalService)(); };
        GlobalService.ɵprov = core.ɵɵdefineInjectable({ token: GlobalService, factory: GlobalService.ɵfac, providedIn: 'root' });
        return GlobalService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(GlobalService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var GlobalComponent = /** @class */ (function () {
        function GlobalComponent() {
        }
        GlobalComponent.prototype.ngOnInit = function () {
        };
        GlobalComponent.ɵfac = function GlobalComponent_Factory(t) { return new (t || GlobalComponent)(); };
        GlobalComponent.ɵcmp = core.ɵɵdefineComponent({ type: GlobalComponent, selectors: [["lib-global"]], decls: 2, vars: 0, template: function GlobalComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "p");
                core.ɵɵtext(1, " global works! ");
                core.ɵɵelementEnd();
            } }, encapsulation: 2 });
        return GlobalComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(GlobalComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-global',
                    template: "\n    <p>\n      global works!\n    </p>\n  ",
                    styles: []
                }]
        }], function () { return []; }, null); })();

    var UIModalNotificationPage = /** @class */ (function () {
        function UIModalNotificationPage(modalService) {
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
            this.modelNotificationInfo = new core.EventEmitter();
            // Modal window for success (ex:Created successful/Deleted successful)
            this.modelNotificationSuccess = new core.EventEmitter();
            // Modal window for Warning info (ex: Cancel/Reset/Tab navigation)
            this.modelNotificationWarning = new core.EventEmitter();
            // Modal window for Warning info (ex: Cancel/Reset/Tab navigation)
            this.modelNotificationWarningAlarm = new core.EventEmitter();
            // Modal window for delete
            this.modelNotificationDanger = new core.EventEmitter();
            // Modal window for failed scenario(ex: Not saved)
            this.modelNotificationError = new core.EventEmitter();
            // Modal window for help (ex: Format of alarm message)
            this.modelNotificationAlarmMessage = new core.EventEmitter();
            // Modal window for help (ex: Format of alarm message)
            this.modelNotificationClearMessage = new core.EventEmitter();
        }
        UIModalNotificationPage.prototype.open = function (content) {
            var _this = this;
            this.modalService.open(content).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        };
        UIModalNotificationPage.prototype.getDismissReason = function (reason) {
            if (reason === ngBootstrap.ModalDismissReasons.ESC) {
                return 'by pressing ESC';
            }
            else if (reason === ngBootstrap.ModalDismissReasons.BACKDROP_CLICK) {
                return 'by clicking on a backdrop';
            }
            else {
                return "with: " + reason;
            }
        };
        // Handling response comes from API
        UIModalNotificationPage.prototype.alertMessage = function (messageType, message) {
            switch (messageType) {
                case 'Success': {
                    // Modal window for success (ex:Created successful , Deleted successful)
                    this.swalSuccess(message);
                    break;
                }
                case 'Failed': {
                    var error = void 0;
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
        };
        UIModalNotificationPage.prototype.swalInfo = function (message) {
            var _this = this;
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
            }).then(function (result) {
                if (result.value) {
                    _this.modelNotificationInfo.emit();
                }
            });
        };
        UIModalNotificationPage.prototype.swalSuccess = function (message) {
            var _this = this;
            Swal.fire({
                title: 'Successful!',
                text: message,
                icon: 'success',
                showCancelButton: false,
                confirmButtonText: 'Ok',
                showCloseButton: false,
                allowOutsideClick: false,
            }).then(function (result) {
                if (result.value) {
                    _this.modelNotificationSuccess.emit();
                }
            });
        };
        UIModalNotificationPage.prototype.swalWarning = function (message) {
            var _this = this;
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
            }).then(function (result) {
                if (result.value) {
                    _this.modelNotificationWarning.emit();
                }
            });
        };
        UIModalNotificationPage.prototype.swalWarningAlarm = function (message) {
            var _this = this;
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
            }).then(function (result) {
                if (result.value) {
                    if (_this.inputField) {
                        _this.remark = document.getElementById('remark')['value'];
                        _this.modelNotificationWarningAlarm.emit(_this.remark);
                    }
                    else
                        _this.modelNotificationWarningAlarm.emit();
                }
            });
        };
        UIModalNotificationPage.prototype.swalDanger = function (message) {
            var _this = this;
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
            }).then(function (result) {
                if (result.value) {
                    _this.modelNotificationDanger.emit();
                }
            });
        };
        UIModalNotificationPage.prototype.swalErrorInfo = function (message) {
            var _this = this;
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
            }).then(function (result) {
                if (result.value) {
                    _this.modelNotificationError.emit();
                }
            });
        };
        UIModalNotificationPage.prototype.swalAlarmMessage = function (message) {
            var _this = this;
            Swal.fire({
                title: 'Alarm Message Format!',
                html: message,
                showCancelButton: false,
                showCloseButton: true,
                allowOutsideClick: true,
                allowEnterKey: true,
            }).then(function (result) {
                if (result.value) {
                    _this.modelNotificationAlarmMessage.emit();
                }
            });
        };
        UIModalNotificationPage.prototype.swalClearMessage = function (message) {
            var _this = this;
            Swal.fire({
                title: 'Clear Message Format!',
                html: message,
                showCancelButton: false,
                showCloseButton: true,
                allowOutsideClick: true,
                allowEnterKey: true,
            }).then(function (result) {
                if (result.value) {
                    _this.modelNotificationAlarmMessage.emit();
                }
            });
        };
        UIModalNotificationPage.prototype.helpMessage = function (message) {
            this.swalHelp(message);
        };
        UIModalNotificationPage.prototype.swalHelp = function (message) {
            var _this = this;
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
            }).then(function (result) {
                if (result.value) {
                    _this.modelNotificationInfo.emit();
                }
            });
        };
        UIModalNotificationPage.ɵfac = function UIModalNotificationPage_Factory(t) { return new (t || UIModalNotificationPage)(core.ɵɵdirectiveInject(ngBootstrap.NgbModal)); };
        UIModalNotificationPage.ɵcmp = core.ɵɵdefineComponent({ type: UIModalNotificationPage, selectors: [["app-modal-notification"]], outputs: { modelNotificationInfo: "modelNotificationInfo", modelNotificationSuccess: "modelNotificationSuccess", modelNotificationWarning: "modelNotificationWarning", modelNotificationWarningAlarm: "modelNotificationWarningAlarm", modelNotificationDanger: "modelNotificationDanger", modelNotificationError: "modelNotificationError", modelNotificationAlarmMessage: "modelNotificationAlarmMessage", modelNotificationClearMessage: "modelNotificationClearMessage" }, decls: 0, vars: 0, template: function UIModalNotificationPage_Template(rf, ctx) { }, encapsulation: 2 });
        return UIModalNotificationPage;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(UIModalNotificationPage, [{
            type: core.Component,
            args: [{
                    selector: 'app-modal-notification',
                    templateUrl: './modal-notification.html'
                }]
        }], function () { return [{ type: ngBootstrap.NgbModal }]; }, { modelNotificationInfo: [{
                type: core.Output
            }], modelNotificationSuccess: [{
                type: core.Output
            }], modelNotificationWarning: [{
                type: core.Output
            }], modelNotificationWarningAlarm: [{
                type: core.Output
            }], modelNotificationDanger: [{
                type: core.Output
            }], modelNotificationError: [{
                type: core.Output
            }], modelNotificationAlarmMessage: [{
                type: core.Output
            }], modelNotificationClearMessage: [{
                type: core.Output
            }] }); })();

    var PageNotFoundComponent = /** @class */ (function () {
        function PageNotFoundComponent() {
        }
        PageNotFoundComponent.prototype.ngOnInit = function () {
        };
        PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
        PageNotFoundComponent.ɵcmp = core.ɵɵdefineComponent({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 7, vars: 0, consts: [[1, "row"], [1, "col-md-12"], [1, "pageNotFound"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵelementStart(1, "div", 1);
                core.ɵɵelementStart(2, "div", 2);
                core.ɵɵelementStart(3, "h1");
                core.ɵɵtext(4, "404");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(5, "p");
                core.ɵɵtext(6, "Oops! Something is wrong.");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,300,500);.pageNotFound[_ngcontent-%COMP%]{background-color:#007aff;font-size:100%;line-height:1.5;font-family:Roboto,sans-serif;height:calc(100vh - 80px);display:flex;align-items:center;justify-content:center;flex-direction:column;overflow:hidden}p[_ngcontent-%COMP%]{font-size:2em;text-align:center;font-weight:100;color:#fff}h1[_ngcontent-%COMP%]{text-align:center;font-size:15em;font-weight:100;color:#fff;text-shadow:#0062cc 1px 1px,#0062cc 2px 2px,#0062cc 3px 3px,#0062cd 4px 4px,#0062cd 5px 5px,#0062cd 6px 6px,#0062cd 7px 7px,#0062ce 8px 8px,#0063ce 9px 9px,#0063ce 10px 10px,#0063ce 11px 11px,#0063cf 12px 12px,#0063cf 13px 13px,#0063cf 14px 14px,#0063cf 15px 15px,#0063d0 16px 16px,#0064d0 17px 17px,#0064d0 18px 18px,#0064d0 19px 19px,#0064d1 20px 20px,#0064d1 21px 21px,#0064d1 22px 22px,#0064d1 23px 23px,#0064d2 24px 24px,#0065d2 25px 25px,#0065d2 26px 26px,#0065d2 27px 27px,#0065d3 28px 28px,#0065d3 29px 29px,#0065d3 30px 30px,#0065d3 31px 31px,#0065d4 32px 32px,#0065d4 33px 33px,#0066d4 34px 34px,#0066d4 35px 35px,#0066d5 36px 36px,#0066d5 37px 37px,#0066d5 38px 38px,#0066d5 39px 39px,#0066d6 40px 40px,#0066d6 41px 41px,#0067d6 42px 42px,#0067d6 43px 43px,#0067d7 44px 44px,#0067d7 45px 45px,#0067d7 46px 46px,#0067d7 47px 47px,#0067d8 48px 48px,#0067d8 49px 49px,#0068d8 50px 50px,#0068d9 51px 51px,#0068d9 52px 52px,#0068d9 53px 53px,#0068d9 54px 54px,#0068da 55px 55px,#0068da 56px 56px,#0068da 57px 57px,#0068da 58px 58px,#0069db 59px 59px,#0069db 60px 60px,#0069db 61px 61px,#0069db 62px 62px,#0069dc 63px 63px,#0069dc 64px 64px,#0069dc 65px 65px,#0069dc 66px 66px,#006add 67px 67px,#006add 68px 68px,#006add 69px 69px,#006add 70px 70px,#006ade 71px 71px,#006ade 72px 72px,#006ade 73px 73px,#006ade 74px 74px,#006bdf 75px 75px,#006bdf 76px 76px,#006bdf 77px 77px,#006bdf 78px 78px,#006be0 79px 79px,#006be0 80px 80px,#006be0 81px 81px,#006be0 82px 82px,#006be1 83px 83px,#006ce1 84px 84px,#006ce1 85px 85px,#006ce1 86px 86px,#006ce2 87px 87px,#006ce2 88px 88px,#006ce2 89px 89px,#006ce2 90px 90px,#006ce3 91px 91px,#006de3 92px 92px,#006de3 93px 93px,#006de3 94px 94px,#006de4 95px 95px,#006de4 96px 96px,#006de4 97px 97px,#006de4 98px 98px,#006de5 99px 99px,#006ee5 100px 100px,#006ee5 101px 101px,#006ee6 102px 102px,#006ee6 103px 103px,#006ee6 104px 104px,#006ee6 105px 105px,#006ee7 106px 106px,#006ee7 107px 107px,#006ee7 108px 108px,#006fe7 109px 109px,#006fe8 110px 110px,#006fe8 111px 111px,#006fe8 112px 112px,#006fe8 113px 113px,#006fe9 114px 114px,#006fe9 115px 115px,#006fe9 116px 116px,#0070e9 117px 117px,#0070ea 118px 118px,#0070ea 119px 119px,#0070ea 120px 120px,#0070ea 121px 121px,#0070eb 122px 122px,#0070eb 123px 123px,#0070eb 124px 124px,#0071eb 125px 125px,#0071ec 126px 126px,#0071ec 127px 127px,#0071ec 128px 128px,#0071ec 129px 129px,#0071ed 130px 130px,#0071ed 131px 131px,#0071ed 132px 132px,#0071ed 133px 133px,#0072ee 134px 134px,#0072ee 135px 135px,#0072ee 136px 136px,#0072ee 137px 137px,#0072ef 138px 138px,#0072ef 139px 139px,#0072ef 140px 140px,#0072ef 141px 141px,#0073f0 142px 142px,#0073f0 143px 143px,#0073f0 144px 144px,#0073f0 145px 145px,#0073f1 146px 146px,#0073f1 147px 147px,#0073f1 148px 148px,#0073f1 149px 149px,#0074f2 150px 150px,#0074f2 151px 151px,#0074f2 152px 152px,#0074f3 153px 153px,#0074f3 154px 154px,#0074f3 155px 155px,#0074f3 156px 156px,#0074f4 157px 157px,#0074f4 158px 158px,#0075f4 159px 159px,#0075f4 160px 160px,#0075f5 161px 161px,#0075f5 162px 162px,#0075f5 163px 163px,#0075f5 164px 164px,#0075f6 165px 165px,#0075f6 166px 166px,#0076f6 167px 167px,#0076f6 168px 168px,#0076f7 169px 169px,#0076f7 170px 170px,#0076f7 171px 171px,#0076f7 172px 172px,#0076f8 173px 173px,#0076f8 174px 174px,#0077f8 175px 175px,#0077f8 176px 176px,#0077f9 177px 177px,#0077f9 178px 178px,#0077f9 179px 179px,#0077f9 180px 180px,#0077fa 181px 181px,#0077fa 182px 182px,#0077fa 183px 183px,#0078fa 184px 184px,#0078fb 185px 185px,#0078fb 186px 186px,#0078fb 187px 187px,#0078fb 188px 188px,#0078fc 189px 189px,#0078fc 190px 190px,#0078fc 191px 191px,#0079fc 192px 192px,#0079fd 193px 193px,#0079fd 194px 194px,#0079fd 195px 195px,#0079fd 196px 196px,#0079fe 197px 197px,#0079fe 198px 198px,#0079fe 199px 199px,#007aff 200px 200px}"] });
        return PageNotFoundComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(PageNotFoundComponent, [{
            type: core.Component,
            args: [{
                    selector: 'app-page-not-found',
                    templateUrl: './page-not-found.component.html',
                    styleUrls: ['./page-not-found.component.css']
                }]
        }], function () { return []; }, null); })();

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
        var _r42 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 8);
        core.ɵɵprojection(1, 6);
        core.ɵɵelementStart(2, "a", 9);
        core.ɵɵlistener("click", function AssetDataPanelComponent_div_0_div_2_Template_a_click_2_listener() { core.ɵɵrestoreView(_r42); var ctx_r41 = core.ɵɵnextContext(2); return ctx_r41.panelExpand(); });
        core.ɵɵelement(3, "i", 10);
        core.ɵɵelementEnd();
        core.ɵɵprojection(4, 7);
        core.ɵɵprojection(5, 8);
        core.ɵɵelementStart(6, "template", null, 11);
        core.ɵɵi18n(8, I18N_3);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(9, "template", null, 12);
        core.ɵɵi18n(11, I18N_5);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r35 = core.ɵɵnextContext(2);
        core.ɵɵadvance(2);
        core.ɵɵpropertyInterpolate("matTooltip", ctx_r35.screenStatus);
    } }
    function AssetDataPanelComponent_div_0_h4_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "h4", 13);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r36 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r36.title);
    } }
    function AssetDataPanelComponent_div_0_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 16);
        core.ɵɵelement(1, "span", 17);
        core.ɵɵelementEnd();
    } }
    var _c7 = function (a0, a1) { return [a0, a1]; };
    function AssetDataPanelComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 14);
        core.ɵɵprojection(1, 9);
        core.ɵɵtemplate(2, AssetDataPanelComponent_div_0_div_6_div_2_Template, 2, 0, "div", 15);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r37 = core.ɵɵnextContext(2);
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(2, _c7, ctx_r37.collapse ? "d-none" : "", ctx_r37.bodyClass ? ctx_r37.bodyClass : ""));
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r37.reload);
    } }
    var _c8 = function (a0, a1, a2, a3) { return [a0, a1, a2, a3]; };
    var _c9 = function (a0) { return [a0]; };
    function AssetDataPanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 1);
        core.ɵɵelementStart(1, "div", 2);
        core.ɵɵtemplate(2, AssetDataPanelComponent_div_0_div_2_Template, 12, 1, "div", 3);
        core.ɵɵtemplate(3, AssetDataPanelComponent_div_0_h4_3_Template, 2, 1, "h4", 4);
        core.ɵɵprojection(4);
        core.ɵɵelementEnd();
        core.ɵɵprojection(5, 1);
        core.ɵɵtemplate(6, AssetDataPanelComponent_div_0_div_6_Template, 3, 5, "div", 5);
        core.ɵɵprojection(7, 2);
        core.ɵɵprojection(8, 3);
        core.ɵɵelementStart(9, "div", 6, 7);
        core.ɵɵprojection(11, 4);
        core.ɵɵelementEnd();
        core.ɵɵprojection(12, 5);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r34 = core.ɵɵnextContext();
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction4(6, _c8, ctx_r34.expand ? "panel-expand" : "", ctx_r34.reload ? "panel-loading" : "", ctx_r34.panelClass ? ctx_r34.panelClass : "", ctx_r34.variant ? "panel-" + ctx_r34.variant : "panel-inverse"));
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", !ctx_r34.noButton);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r34.title);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngIf", !ctx_r34.noBody);
        core.ɵɵadvance(3);
        core.ɵɵproperty("hidden", !ctx_r34.showFooter)("ngClass", core.ɵɵpureFunction1(11, _c9, ctx_r34.footerClass ? ctx_r34.footerClass : ""));
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
            this.removeLineChart = new core.EventEmitter();
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
        AssetDataPanelComponent.ɵfac = function AssetDataPanelComponent_Factory(t) { return new (t || AssetDataPanelComponent)(core.ɵɵdirectiveInject(core.ChangeDetectorRef)); };
        AssetDataPanelComponent.ɵcmp = core.ɵɵdefineComponent({ type: AssetDataPanelComponent, selectors: [["app-asset-data-panel"]], viewQuery: function AssetDataPanelComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(_c0, true);
                core.ɵɵviewQuery(_c1, true);
                core.ɵɵviewQuery(_c2, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.panelFooter = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.ClicktoMaximize = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.ClicktoMinimize = _t.first);
            } }, inputs: { title: "title", variant: "variant", noBody: "noBody", noButton: "noButton", bodyClass: "bodyClass", footerClass: "footerClass", panelClass: "panelClass" }, outputs: { removeLineChart: "removeLineChart" }, ngContentSelectors: _c11, decls: 1, vars: 1, consts: [["class", "panel panel-inverse", 3, "ngClass", 4, "ngIf"], [1, "panel", "panel-inverse", 3, "ngClass"], [1, "panel-heading"], ["class", "panel-heading-btn", 4, "ngIf"], ["class", "panel-title", 4, "ngIf"], ["class", "panel-body", "style", "border:0.5px solid #000000;padding:0px;", 3, "ngClass", 4, "ngIf"], [1, "panel-footer", 3, "hidden", "ngClass"], ["panelFooter", ""], [1, "panel-heading-btn"], ["href", "javascript:;", 1, "btn", "btn-xs", "btn-icon", "btn-circle", "btn-default", "panel-expand", 3, "matTooltip", "click"], [1, "fa", "fa-expand"], ["ClicktoMaximize", ""], ["ClicktoMinimize", ""], [1, "panel-title"], [1, "panel-body", 2, "border", "0.5px solid #000000", "padding", "0px", 3, "ngClass"], ["class", "panel-loader", 4, "ngIf"], [1, "panel-loader"], [1, "spinner-small"]], template: function AssetDataPanelComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef(_c10);
                core.ɵɵtemplate(0, AssetDataPanelComponent_div_0_Template, 13, 13, "div", 0);
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", !ctx.remove);
            } }, directives: [common.NgIf, common.NgClass, tooltip.MatTooltip], styles: [".panel-heading[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-direction:row-reverse;align-items:center}div.panel.panel-expand[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]{height:100%;margin-top:39px}.panel.panel-expand[_ngcontent-%COMP%]{overflow:hidden}"] });
        return AssetDataPanelComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(AssetDataPanelComponent, [{
            type: core.Component,
            args: [{
                    selector: 'app-asset-data-panel',
                    inputs: ['title', 'variant', 'noBody', 'noButton', 'bodyClass', 'footerClass', 'panelClass'],
                    templateUrl: './asset-data-panel.component.html',
                    styleUrls: ['./asset-data-panel.component.css']
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }]; }, { panelFooter: [{
                type: core.ViewChild,
                args: ['panelFooter']
            }], ClicktoMaximize: [{
                type: core.ViewChild,
                args: ["ClicktoMaximize"]
            }], ClicktoMinimize: [{
                type: core.ViewChild,
                args: ["ClicktoMinimize"]
            }], removeLineChart: [{
                type: core.Output
            }] }); })();
    var templateObject_1, templateObject_2;

    var _c0$1 = ["panelFooter"];
    var _c1$1 = function (a0, a1, a2, a3) { return [a0, a1, a2, a3]; };
    var _c2$1 = function (a0) { return [a0]; };
    function PanelBlankComponent_div_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 1);
        core.ɵɵelementStart(1, "div", 2);
        core.ɵɵprojection(2);
        core.ɵɵelementEnd();
        core.ɵɵprojection(3, 1);
        core.ɵɵprojection(4, 2);
        core.ɵɵelementStart(5, "div", 3, 4);
        core.ɵɵprojection(7, 3);
        core.ɵɵelementEnd();
        core.ɵɵprojection(8, 4);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r44 = core.ɵɵnextContext();
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction4(3, _c1$1, ctx_r44.expand ? "panel-expand" : "", ctx_r44.reload ? "panel-loading" : "", ctx_r44.panelClass ? ctx_r44.panelClass : "", ctx_r44.variant ? "panel-" + ctx_r44.variant : "panel-inverse"));
        core.ɵɵadvance(5);
        core.ɵɵproperty("hidden", !ctx_r44.showFooter)("ngClass", core.ɵɵpureFunction1(8, _c2$1, ctx_r44.footerClass ? ctx_r44.footerClass : ""));
    } }
    var _c3 = ["*", [["", "noBody", ""]], [["", "outsideBody", ""]], [["", "footer", ""]], [["", "afterFooter", ""]]];
    var _c4 = ["*", "[noBody]", "[outsideBody]", "[footer]", "[afterFooter]"];
    var PanelBlankComponent = /** @class */ (function () {
        function PanelBlankComponent(modalService, document) {
            this.modalService = modalService;
            this.expand = false;
            this.reload = false;
            this.collapse = false;
            this.remove = false;
            this.showFooter = false;
        }
        PanelBlankComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            setTimeout(function () {
                _this.showFooter = _this.panelFooter.nativeElement && _this.panelFooter.nativeElement.children.length > 0;
            });
        };
        PanelBlankComponent.prototype.panelExpand = function () {
            this.expand = !this.expand;
        };
        PanelBlankComponent.prototype.panelReload = function () {
            var _this = this;
            this.reload = true;
            setTimeout(function () {
                _this.reload = false;
            }, 1500);
        };
        PanelBlankComponent.prototype.panelCollapse = function () {
            this.collapse = !this.collapse;
        };
        PanelBlankComponent.prototype.panelRemove = function () {
            this.modelNotification.swalDanger('Are you sure?', 'You will not be able to recover this Widget!');
            this.remove = !this.remove;
        };
        PanelBlankComponent.prototype.openFormModel = function (content, test) {
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
        PanelBlankComponent.prototype.getDismissReason = function (reason) {
            if (reason === ngBootstrap.ModalDismissReasons.ESC) {
                return 'by pressing ESC';
            }
            else if (reason === ngBootstrap.ModalDismissReasons.BACKDROP_CLICK) {
                return 'by clicking on a backdrop';
            }
            else {
                return "with: " + reason;
            }
        };
        PanelBlankComponent.ɵfac = function PanelBlankComponent_Factory(t) { return new (t || PanelBlankComponent)(core.ɵɵdirectiveInject(ngBootstrap.NgbModal), core.ɵɵdirectiveInject(common.DOCUMENT)); };
        PanelBlankComponent.ɵcmp = core.ɵɵdefineComponent({ type: PanelBlankComponent, selectors: [["app-panel-blank"]], viewQuery: function PanelBlankComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(_c0$1, true);
                core.ɵɵviewQuery(UIModalNotificationPage, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.panelFooter = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.modelNotification = _t.first);
            } }, ngContentSelectors: _c4, decls: 2, vars: 1, consts: [["class", "panel panel-inverse", 3, "ngClass", 4, "ngIf"], [1, "panel", "panel-inverse", 3, "ngClass"], [1, "panel-body", 2, "width", "100%"], [1, "panel-footer", 3, "hidden", "ngClass"], ["panelFooter", ""]], template: function PanelBlankComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef(_c3);
                core.ɵɵtemplate(0, PanelBlankComponent_div_0_Template, 9, 10, "div", 0);
                core.ɵɵelement(1, "app-modal-notification");
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", !ctx.remove);
            } }, directives: [common.NgIf, UIModalNotificationPage, common.NgClass], styles: [""] });
        return PanelBlankComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(PanelBlankComponent, [{
            type: core.Component,
            args: [{
                    selector: 'app-panel-blank',
                    templateUrl: './panel-blank.component.html',
                    styleUrls: ['./panel-blank.component.css']
                }]
        }], function () { return [{ type: ngBootstrap.NgbModal }, { type: undefined, decorators: [{
                    type: core.Inject,
                    args: [common.DOCUMENT]
                }] }]; }, { panelFooter: [{
                type: core.ViewChild,
                args: ['panelFooter']
            }], modelNotification: [{
                type: core.ViewChild,
                args: [UIModalNotificationPage]
            }] }); })();

    var _c0$2 = ["panelFooter"];
    function PanelDashboardComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 8);
        core.ɵɵprojection(1, 6);
        core.ɵɵprojection(2, 7);
        core.ɵɵprojection(3, 8);
        core.ɵɵprojection(4, 9);
        core.ɵɵprojection(5, 10);
        core.ɵɵelementEnd();
    } }
    function PanelDashboardComponent_div_0_h4_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "h4", 9);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r48 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r48.title);
    } }
    var _c1$2 = function (a0, a1) { return [a0, a1]; };
    function PanelDashboardComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 10);
        core.ɵɵprojection(1, 11);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r49 = core.ɵɵnextContext(2);
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(1, _c1$2, ctx_r49.collapse ? "d-none" : "", ctx_r49.bodyClass ? ctx_r49.bodyClass : ""));
    } }
    var _c2$2 = function (a0, a1, a2, a3) { return [a0, a1, a2, a3]; };
    var _c3$1 = function (a0) { return [a0]; };
    function PanelDashboardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 1);
        core.ɵɵelementStart(1, "div", 2);
        core.ɵɵtemplate(2, PanelDashboardComponent_div_0_div_2_Template, 6, 0, "div", 3);
        core.ɵɵtemplate(3, PanelDashboardComponent_div_0_h4_3_Template, 2, 1, "h4", 4);
        core.ɵɵprojection(4);
        core.ɵɵelementEnd();
        core.ɵɵprojection(5, 1);
        core.ɵɵtemplate(6, PanelDashboardComponent_div_0_div_6_Template, 2, 4, "div", 5);
        core.ɵɵprojection(7, 2);
        core.ɵɵprojection(8, 3);
        core.ɵɵelementStart(9, "div", 6, 7);
        core.ɵɵprojection(11, 4);
        core.ɵɵelementEnd();
        core.ɵɵprojection(12, 5);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r46 = core.ɵɵnextContext();
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction4(6, _c2$2, ctx_r46.expand ? "panel-expand" : "", ctx_r46.reload ? "panel-loading" : "", ctx_r46.panelClass ? ctx_r46.panelClass : "", ctx_r46.variant ? "panel-" + ctx_r46.variant : "panel-inverse"));
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", !ctx_r46.noButton);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r46.title);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngIf", !ctx_r46.noBody);
        core.ɵɵadvance(3);
        core.ɵɵproperty("hidden", !ctx_r46.showFooter)("ngClass", core.ɵɵpureFunction1(11, _c3$1, ctx_r46.footerClass ? ctx_r46.footerClass : ""));
    } }
    var _c4$1 = [[["", "header", ""]], [["", "beforeBody", ""]], [["", "noBody", ""]], [["", "outsideBody", ""]], [["", "footer", ""]], [["", "afterFooter", ""]], [["", "download", ""]], [["", "expand", ""]], [["", "refresh", ""]], [["", "downloadButton", ""]], [["", "tablePanelPaginator", ""]], "*"];
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
        PanelDashboardComponent.ɵcmp = core.ɵɵdefineComponent({ type: PanelDashboardComponent, selectors: [["app-panel-dashboard"]], viewQuery: function PanelDashboardComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(_c0$2, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.panelFooter = _t.first);
            } }, inputs: { title: "title", variant: "variant", noBody: "noBody", noButton: "noButton", bodyClass: "bodyClass", footerClass: "footerClass", panelClass: "panelClass" }, ngContentSelectors: _c5, decls: 1, vars: 1, consts: [["class", "panel panel-inverse h-100", 3, "ngClass", 4, "ngIf"], [1, "panel", "panel-inverse", "h-100", 3, "ngClass"], [1, "panel-heading"], ["class", "panel-heading-btn", 4, "ngIf"], ["class", "panel-title", 4, "ngIf"], ["class", "panel-body", "style", "padding: 0px; height: 90%", 3, "ngClass", 4, "ngIf"], [1, "panel-footer", 3, "hidden", "ngClass"], ["panelFooter", ""], [1, "panel-heading-btn"], [1, "panel-title"], [1, "panel-body", 2, "padding", "0px", "height", "90%", 3, "ngClass"]], template: function PanelDashboardComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef(_c4$1);
                core.ɵɵtemplate(0, PanelDashboardComponent_div_0_Template, 13, 13, "div", 0);
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", !ctx.remove);
            } }, directives: [common.NgIf, common.NgClass], styles: [".panel-heading[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-direction:row-reverse;align-items:center}"] });
        return PanelDashboardComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(PanelDashboardComponent, [{
            type: core.Component,
            args: [{
                    selector: 'app-panel-dashboard',
                    inputs: ['title', 'variant', 'noBody', 'noButton', 'bodyClass', 'footerClass', 'panelClass'],
                    templateUrl: './panel-dashboard.component.html',
                    styleUrls: ['./panel-dashboard.component.css']
                }]
        }], null, { panelFooter: [{
                type: core.ViewChild,
                args: ['panelFooter']
            }] }); })();

    var _c0$3 = ["panelFooter"];
    function PanelRemoveComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 8);
        core.ɵɵprojection(1, 5);
        core.ɵɵtext(2, " \u00A0 ");
        core.ɵɵprojection(3, 6);
        core.ɵɵtext(4, " \u00A0 ");
        core.ɵɵprojection(5, 7);
        core.ɵɵtext(6, " \u00A0 ");
        core.ɵɵprojection(7, 8);
        core.ɵɵelementEnd();
    } }
    function PanelRemoveComponent_div_0_h4_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "h4", 9);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r53 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r53.title);
    } }
    function PanelRemoveComponent_div_0_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 12);
        core.ɵɵelement(1, "span", 13);
        core.ɵɵelementEnd();
    } }
    var _c1$3 = function (a0, a1) { return [a0, a1]; };
    function PanelRemoveComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 10);
        core.ɵɵprojection(1, 9);
        core.ɵɵtemplate(2, PanelRemoveComponent_div_0_div_5_div_2_Template, 2, 0, "div", 11);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r54 = core.ɵɵnextContext(2);
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(2, _c1$3, ctx_r54.collapse ? "d-none" : "", ctx_r54.bodyClass ? ctx_r54.bodyClass : ""));
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r54.reload);
    } }
    var _c2$3 = function (a0, a1, a2, a3) { return [a0, a1, a2, a3]; };
    var _c3$2 = function (a0) { return [a0]; };
    function PanelRemoveComponent_div_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 1);
        core.ɵɵelementStart(1, "div", 2);
        core.ɵɵtemplate(2, PanelRemoveComponent_div_0_div_2_Template, 8, 0, "div", 3);
        core.ɵɵtemplate(3, PanelRemoveComponent_div_0_h4_3_Template, 2, 1, "h4", 4);
        core.ɵɵelementEnd();
        core.ɵɵprojection(4);
        core.ɵɵtemplate(5, PanelRemoveComponent_div_0_div_5_Template, 3, 5, "div", 5);
        core.ɵɵprojection(6, 1);
        core.ɵɵprojection(7, 2);
        core.ɵɵelementStart(8, "div", 6, 7);
        core.ɵɵprojection(10, 3);
        core.ɵɵelementEnd();
        core.ɵɵprojection(11, 4);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r51 = core.ɵɵnextContext();
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction4(6, _c2$3, ctx_r51.expand ? "panel-expand" : "", ctx_r51.reload ? "panel-loading" : "", ctx_r51.panelClass ? ctx_r51.panelClass : "", ctx_r51.variant ? "panel-" + ctx_r51.variant : "panel-inverse"));
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", !ctx_r51.noButton);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r51.title);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", !ctx_r51.noBody);
        core.ɵɵadvance(3);
        core.ɵɵproperty("hidden", !ctx_r51.showFooter)("ngClass", core.ɵɵpureFunction1(11, _c3$2, ctx_r51.footerClass ? ctx_r51.footerClass : ""));
    } }
    var _c4$2 = [[["", "beforeBody", ""]], [["", "noBody", ""]], [["", "outsideBody", ""]], [["", "footer", ""]], [["", "afterFooter", ""]], [["", "header", ""]], [["", "expand", ""]], [["", "deleteButton", ""]], [["", "filterBtn", ""]], "*"];
    var _c5$1 = ["[beforeBody]", "[noBody]", "[outsideBody]", "[footer]", "[afterFooter]", "[header]", "[expand]", "[deleteButton]", "[filterBtn]", "*"];
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
            if (reason === ngBootstrap.ModalDismissReasons.ESC) {
                return 'by pressing ESC';
            }
            else if (reason === ngBootstrap.ModalDismissReasons.BACKDROP_CLICK) {
                return 'by clicking on a backdrop';
            }
            else {
                return "with: " + reason;
            }
        };
        PanelRemoveComponent.prototype.panelExpand = function () {
            this.expand = !this.expand;
        };
        PanelRemoveComponent.ɵfac = function PanelRemoveComponent_Factory(t) { return new (t || PanelRemoveComponent)(core.ɵɵdirectiveInject(ngBootstrap.NgbModal), core.ɵɵdirectiveInject(common.DOCUMENT)); };
        PanelRemoveComponent.ɵcmp = core.ɵɵdefineComponent({ type: PanelRemoveComponent, selectors: [["app-panel-remove"]], viewQuery: function PanelRemoveComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(_c0$3, true);
                core.ɵɵviewQuery(UIModalNotificationPage, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.panelFooter = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.modelNotification = _t.first);
            } }, inputs: { title: "title", variant: "variant", noBody: "noBody", noButton: "noButton", bodyClass: "bodyClass", footerClass: "footerClass", panelClass: "panelClass" }, ngContentSelectors: _c5$1, decls: 2, vars: 1, consts: [["class", "panel panel-inverse h-100 d-flex flex-column", 3, "ngClass", 4, "ngIf"], [1, "panel", "panel-inverse", "h-100", "d-flex", "flex-column", 3, "ngClass"], [1, "panel-heading"], ["class", "panel-heading-btn", 4, "ngIf"], ["class", "panel-title", 4, "ngIf"], ["class", "panel-body", "style", "padding:0px;height: 91%;", 3, "ngClass", 4, "ngIf"], [1, "panel-footer", 3, "hidden", "ngClass"], ["panelFooter", ""], [1, "panel-heading-btn"], [1, "panel-title"], [1, "panel-body", 2, "padding", "0px", "height", "91%", 3, "ngClass"], ["class", "panel-loader", 4, "ngIf"], [1, "panel-loader"], [1, "spinner-small"]], template: function PanelRemoveComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef(_c4$2);
                core.ɵɵtemplate(0, PanelRemoveComponent_div_0_Template, 12, 13, "div", 0);
                core.ɵɵelement(1, "app-modal-notification");
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", !ctx.remove);
            } }, directives: [common.NgIf, UIModalNotificationPage, common.NgClass], styles: [""] });
        return PanelRemoveComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(PanelRemoveComponent, [{
            type: core.Component,
            args: [{
                    selector: 'app-panel-remove',
                    inputs: ['title', 'variant', 'noBody', 'noButton', 'bodyClass', 'footerClass', 'panelClass'],
                    templateUrl: './panel-remove.component.html',
                    styleUrls: ['./panel-remove.component.css']
                }]
        }], function () { return [{ type: ngBootstrap.NgbModal }, { type: undefined, decorators: [{
                    type: core.Inject,
                    args: [common.DOCUMENT]
                }] }]; }, { panelFooter: [{
                type: core.ViewChild,
                args: ['panelFooter']
            }], modelNotification: [{
                type: core.ViewChild,
                args: [UIModalNotificationPage]
            }] }); })();

    var exportTable = /** @class */ (function () {
        function exportTable() {
        }
        exportTable.exportToExcel = function (tableId, name) {
            var timeSpan = new Date().toISOString();
            var getFullDay = timeSpan.split('T');
            // let prefix = name || "downLoadedFile";
            var prefix = name;
            var fileName = prefix + "_" + getFullDay[0];
            var targetTableElm = document.getElementById(tableId);
            var wb = xlsx.utils.table_to_book(targetTableElm, { sheet: prefix });
            xlsx.writeFile(wb, fileName + ".csv");
        };
        return exportTable;
    }());

    var _c0$4 = ["panelFooter"];
    var _c1$4 = ["ClicktoMaximize"];
    var _c2$4 = ["ClicktoMinimize"];
    var I18N_3$1;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        var MSG_EXTERNAL_ClicktoRefresh$$LIB_COMPONENT_PANEL_TABLE_PANEL_TABLE_PANEL_COMPONENT_TS___4 = goog.getMsg("Click to Refresh");
        I18N_3$1 = MSG_EXTERNAL_ClicktoRefresh$$LIB_COMPONENT_PANEL_TABLE_PANEL_TABLE_PANEL_COMPONENT_TS___4;
    }
    else {
        I18N_3$1 = $localize(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject([":@@ClicktoRefresh\u241F8f34af26873c305d82ae9ec0634a22a536d08059\u241F1109274755188761114:Click to Refresh"], [":@@ClicktoRefresh\u241F8f34af26873c305d82ae9ec0634a22a536d08059\u241F1109274755188761114:Click to Refresh"])));
    }
    var _c5$2 = ["matTooltip", I18N_3$1];
    var I18N_6;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc Click to Maximize
         * @meaning Tooltip
         */ 
        var MSG_EXTERNAL_clickToMaximize$$LIB_COMPONENT_PANEL_TABLE_PANEL_TABLE_PANEL_COMPONENT_TS___7 = goog.getMsg("Click to Maximize\n      ");
        I18N_6 = MSG_EXTERNAL_clickToMaximize$$LIB_COMPONENT_PANEL_TABLE_PANEL_TABLE_PANEL_COMPONENT_TS___7;
    }
    else {
        I18N_6 = $localize(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject([":Tooltip|Click to Maximize@@clickToMaximize\u241Fd3ae1fa38badb5b73a7e641a0d49c133822b282b\u241F3032891634008695815:Click to Maximize\n      "], [":Tooltip|Click to Maximize@@clickToMaximize\u241Fd3ae1fa38badb5b73a7e641a0d49c133822b282b\u241F3032891634008695815:Click to Maximize\n      "])));
    }
    var I18N_8;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc Click to Minimize
         * @meaning Tooltip
         */ 
        var MSG_EXTERNAL_clickToMinimize$$LIB_COMPONENT_PANEL_TABLE_PANEL_TABLE_PANEL_COMPONENT_TS___9 = goog.getMsg("Click to Minimize\n      ");
        I18N_8 = MSG_EXTERNAL_clickToMinimize$$LIB_COMPONENT_PANEL_TABLE_PANEL_TABLE_PANEL_COMPONENT_TS___9;
    }
    else {
        I18N_8 = $localize(templateObject_3 || (templateObject_3 = __makeTemplateObject([":Tooltip|Click to Minimize@@clickToMinimize\u241F84f6e9d195f29131c63926cd079ee6fe0a844150\u241F7039613234896747790:Click to Minimize\n      "], [":Tooltip|Click to Minimize@@clickToMinimize\u241F84f6e9d195f29131c63926cd079ee6fe0a844150\u241F7039613234896747790:Click to Minimize\n      "])));
    }
    function TablePanelComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
        var _r65 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 8);
        core.ɵɵprojection(1, 5);
        core.ɵɵprojection(2, 6);
        core.ɵɵelementStart(3, "a", 9);
        core.ɵɵi18nAttributes(4, _c5$2);
        core.ɵɵlistener("click", function TablePanelComponent_div_0_div_2_Template_a_click_3_listener() { core.ɵɵrestoreView(_r65); var ctx_r64 = core.ɵɵnextContext(2); return ctx_r64.panelReload(); });
        core.ɵɵelement(5, "i", 10);
        core.ɵɵelementEnd();
        core.ɵɵprojection(6, 7);
        core.ɵɵprojection(7, 8);
        core.ɵɵprojection(8, 9);
        core.ɵɵprojection(9, 10);
        core.ɵɵelementStart(10, "a", 11);
        core.ɵɵlistener("click", function TablePanelComponent_div_0_div_2_Template_a_click_10_listener() { core.ɵɵrestoreView(_r65); var ctx_r66 = core.ɵɵnextContext(2); return ctx_r66.panelExpand(); });
        core.ɵɵelement(11, "i", 12);
        core.ɵɵelementEnd();
        core.ɵɵprojection(12, 11);
        core.ɵɵelementStart(13, "template", null, 13);
        core.ɵɵi18n(15, I18N_6);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(16, "template", null, 14);
        core.ɵɵi18n(18, I18N_8);
        core.ɵɵelementEnd();
        core.ɵɵprojection(19, 12);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r58 = core.ɵɵnextContext(2);
        core.ɵɵadvance(10);
        core.ɵɵpropertyInterpolate("matTooltip", ctx_r58.screenStatus);
    } }
    function TablePanelComponent_div_0_h4_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "h4", 15);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r59 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r59.name);
    } }
    function TablePanelComponent_div_0_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 18);
        core.ɵɵelement(1, "span", 19);
        core.ɵɵelementEnd();
    } }
    var _c10$1 = function (a0, a1) { return [a0, a1]; };
    function TablePanelComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 16);
        core.ɵɵprojection(1, 13);
        core.ɵɵtemplate(2, TablePanelComponent_div_0_div_5_div_2_Template, 2, 0, "div", 17);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r60 = core.ɵɵnextContext(2);
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(2, _c10$1, ctx_r60.collapse ? "d-none" : "", ctx_r60.bodyClass ? ctx_r60.bodyClass : ""));
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r60.reload);
    } }
    var _c11$1 = function (a0, a1, a2, a3) { return [a0, a1, a2, a3]; };
    var _c12 = function (a0) { return [a0]; };
    function TablePanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 1);
        core.ɵɵelementStart(1, "div", 2);
        core.ɵɵtemplate(2, TablePanelComponent_div_0_div_2_Template, 20, 1, "div", 3);
        core.ɵɵtemplate(3, TablePanelComponent_div_0_h4_3_Template, 2, 1, "h4", 4);
        core.ɵɵelementEnd();
        core.ɵɵprojection(4);
        core.ɵɵtemplate(5, TablePanelComponent_div_0_div_5_Template, 3, 5, "div", 5);
        core.ɵɵprojection(6, 1);
        core.ɵɵprojection(7, 2);
        core.ɵɵelementStart(8, "div", 6, 7);
        core.ɵɵprojection(10, 3);
        core.ɵɵelementEnd();
        core.ɵɵprojection(11, 4);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r57 = core.ɵɵnextContext();
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction4(6, _c11$1, ctx_r57.expand ? "panel-expand" : "", ctx_r57.reload ? "panel-loading" : "", ctx_r57.panelClass ? ctx_r57.panelClass : "", ctx_r57.variant ? "panel-" + ctx_r57.variant : "panel-inverse"));
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", !ctx_r57.noButton);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r57.name);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", !ctx_r57.noBody);
        core.ɵɵadvance(3);
        core.ɵɵproperty("hidden", !ctx_r57.showFooter)("ngClass", core.ɵɵpureFunction1(11, _c12, ctx_r57.footerClass ? ctx_r57.footerClass : ""));
    } }
    var _c13 = [[["", "beforeBody", ""]], [["", "noBody", ""]], [["", "outsideBody", ""]], [["", "footer", ""]], [["", "afterFooter", ""]], [["", "filterButton", ""]], [["", "backButton", ""]], [["", "searchfield", ""]], [["", "searchButton", ""]], [["", "searchfieldPanel", ""]], [["", "searchButtonPanel", ""]], [["", "downloadButton", ""]], [["", "addNewButton", ""]], "*"];
    var _c14 = ["[beforeBody]", "[noBody]", "[outsideBody]", "[footer]", "[afterFooter]", "[filterButton]", "[backButton]", "[searchfield]", "[searchButton]", "[searchfieldPanel]", "[searchButtonPanel]", "[downloadButton]", "[addNewButton]", "*"];
    var TablePanelComponent = /** @class */ (function () {
        function TablePanelComponent(router, render, elRef, cdr) {
            this.router = router;
            this.render = render;
            this.elRef = elRef;
            this.cdr = cdr;
            this.scrollBarDirective = new core.EventEmitter();
            this.screenStatus = '';
            this.expand = false;
            this.reload = false;
            this.collapse = false;
            this.remove = false;
            this.showFooter = false;
            this.clickToAddNew = true;
            // To navigate to assign tenant menus
            this.eventEmitToPageNaviagte = new core.EventEmitter();
            this.panelExpandCollapse = new core.EventEmitter();
            // Refresh functionality for table list
            this.refreshTableList = new core.EventEmitter();
        }
        TablePanelComponent.prototype.ngOnInit = function () {
        };
        TablePanelComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            setTimeout(function () {
                _this.showFooter = _this.panelFooter.nativeElement && _this.panelFooter.nativeElement.children.length > 0;
            });
            this.screenStatus = this.ClicktoMaximize.nativeElement.innerText;
            this.cdr.detectChanges();
        };
        // Add new
        TablePanelComponent.prototype.addNew = function () {
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
        };
        TablePanelComponent.prototype.panelExpand = function () {
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
        };
        TablePanelComponent.prototype.panelReload = function () {
            var _this = this;
            this.reload = true;
            this.refreshTableList.emit();
            // this.refreshTableList.emit('refreshTable');
            setTimeout(function () {
                _this.reload = false;
            }, 1500);
        };
        TablePanelComponent.prototype.panelCollapse = function () {
            this.collapse = !this.collapse;
        };
        TablePanelComponent.prototype.panelRemove = function () {
            this.remove = !this.remove;
        };
        TablePanelComponent.prototype.searchButton = function (dataSource) {
            this.inpputSearchBoxElement = document.getElementById("filter");
            if (this.inpputSearchBoxElement.style.display === "none") {
                this.inpputSearchBoxElement.style.display = "inline-block";
                // this.setTableDasourceAsDefault(dataSource);
            }
            else {
                this.inpputSearchBoxElement.style.display = "none";
                this.setTableDasourceAsDefault(dataSource);
            }
        };
        TablePanelComponent.prototype.searchButtonPanel = function (dataSource) {
            this.inpputSearchBoxElement = document.getElementById("search");
            if (this.inpputSearchBoxElement.style.display === "none") {
                this.inpputSearchBoxElement.style.display = "inline-block";
                // this.setTableDasourceAsDefault(dataSource);
            }
            else {
                this.inpputSearchBoxElement.style.display = "none";
                this.setTableDasourceAsDefault(dataSource);
            }
        };
        /*
          Developer : Anandhan
          Purpose: In table panel, Click to search/filter > click to hide/show input filter search box >
                    response data set back to Table datasource and input field make as a empty
        */
        TablePanelComponent.prototype.setTableDasourceAsDefault = function (dataSource) {
            if (this.inpputSearchBoxElement != undefined) {
                this.inpputSearchBoxElement.value = '';
            }
            this.applyFilter('', dataSource);
        };
        // Panel header filter
        TablePanelComponent.prototype.applyFilter = function (filterValue, dataSource) {
            dataSource.filter = filterValue.trim().toLowerCase();
            this.scrollBarDirective.emit();
        };
        TablePanelComponent.prototype.exportTable = function (tableName, fileName) {
            exportTable.exportToExcel(tableName, fileName);
        };
        TablePanelComponent.ɵfac = function TablePanelComponent_Factory(t) { return new (t || TablePanelComponent)(core.ɵɵdirectiveInject(router.Router), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.ChangeDetectorRef)); };
        TablePanelComponent.ɵcmp = core.ɵɵdefineComponent({ type: TablePanelComponent, selectors: [["app-panel-user"]], viewQuery: function TablePanelComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(_c0$4, true);
                core.ɵɵviewQuery(_c1$4, true);
                core.ɵɵviewQuery(_c2$4, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.panelFooter = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.ClicktoMaximize = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.ClicktoMinimize = _t.first);
            } }, inputs: { name: "name", variant: "variant", noBody: "noBody", noButton: "noButton", bodyClass: "bodyClass", footerClass: "footerClass", panelClass: "panelClass" }, outputs: { scrollBarDirective: "scrollBarDirective", eventEmitToPageNaviagte: "eventEmitToPageNaviagte", panelExpandCollapse: "panelExpandCollapse", refreshTableList: "refreshTableList" }, ngContentSelectors: _c14, decls: 1, vars: 1, consts: [["class", "panel", "style", "border:0.5px solid #cccccc;", 3, "ngClass", 4, "ngIf"], [1, "panel", 2, "border", "0.5px solid #cccccc", 3, "ngClass"], [1, "panel-heading"], ["class", "panel-heading-btn", 4, "ngIf"], ["class", "panel-title", 4, "ngIf"], ["class", "panel-body", 3, "ngClass", 4, "ngIf"], [1, "panel-footer", 3, "hidden", "ngClass"], ["panelFooter", ""], [1, "panel-heading-btn"], ["href", "javascript:;", 1, "btn", "btn-xs", "btn-icon", "btn-circle", "btn-success", "panel-reload", 3, "click", 6, "matTooltip"], [1, "fa", "fa-redo"], ["href", "javascript:;", 1, "btn", "btn-xs", "btn-icon", "btn-circle", "btn-default", "panel-expand", 3, "matTooltip", "click"], [1, "fa", "fa-expand"], ["ClicktoMaximize", ""], ["ClicktoMinimize", ""], [1, "panel-title"], [1, "panel-body", 3, "ngClass"], ["class", "panel-loader", 4, "ngIf"], [1, "panel-loader"], [1, "spinner-small"]], template: function TablePanelComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef(_c13);
                core.ɵɵtemplate(0, TablePanelComponent_div_0_Template, 12, 13, "div", 0);
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", !ctx.remove);
            } }, directives: [common.NgIf, common.NgClass, tooltip.MatTooltip], styles: [".panel-body[_ngcontent-%COMP%]{padding:0}.panel[_ngcontent-%COMP%]{margin-bottom:0}.panel.panel-expand[_ngcontent-%COMP%]{overflow:hidden}div.panel-inverse[_ngcontent-%COMP%]{border:none!important}.cdk-overlay-container[_ngcontent-%COMP%]{z-index:99999!important}"] });
        return TablePanelComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(TablePanelComponent, [{
            type: core.Component,
            args: [{
                    selector: 'app-panel-user',
                    templateUrl: './table-panel.component.html',
                    inputs: ['name', 'variant', 'noBody', 'noButton', 'bodyClass', 'footerClass', 'panelClass'],
                    styleUrls: ['./table-panel.component.css']
                }]
        }], function () { return [{ type: router.Router }, { type: core.Renderer2 }, { type: core.ElementRef }, { type: core.ChangeDetectorRef }]; }, { scrollBarDirective: [{
                type: core.Output
            }], panelFooter: [{
                type: core.ViewChild,
                args: ['panelFooter']
            }], ClicktoMaximize: [{
                type: core.ViewChild,
                args: ["ClicktoMaximize"]
            }], ClicktoMinimize: [{
                type: core.ViewChild,
                args: ["ClicktoMinimize"]
            }], eventEmitToPageNaviagte: [{
                type: core.Output
            }], panelExpandCollapse: [{
                type: core.Output
            }], refreshTableList: [{
                type: core.Output
            }] }); })();
    var templateObject_1$1, templateObject_2$1, templateObject_3;

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
        NumberDirective.ɵfac = function NumberDirective_Factory(t) { return new (t || NumberDirective)(core.ɵɵdirectiveInject(core.ElementRef)); };
        NumberDirective.ɵdir = core.ɵɵdefineDirective({ type: NumberDirective, selectors: [["input", "numbersOnly", ""]], hostBindings: function NumberDirective_HostBindings(rf, ctx) { if (rf & 1) {
                core.ɵɵlistener("input", function NumberDirective_input_HostBindingHandler($event) { return ctx.onInputChange($event); });
            } } });
        return NumberDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NumberDirective, [{
            type: core.Directive,
            args: [{
                    selector: 'input[numbersOnly]'
                }]
        }], function () { return [{ type: core.ElementRef }]; }, { onInputChange: [{
                type: core.HostListener,
                args: ['input', ['$event']]
            }] }); })();

    var PERFECT_SCROLLBAR_CONFIG = new core.InjectionToken('PERFECT_SCROLLBAR_CONFIG');
    var Geometry = /** @class */ (function () {
        function Geometry(x, y, w, h) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
        }
        return Geometry;
    }());
    var Position = /** @class */ (function () {
        function Position(x, y) {
            this.x = x;
            this.y = y;
        }
        return Position;
    }());
    var PerfectScrollbarEvents = [
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
    var PerfectScrollbarConfig = /** @class */ (function () {
        function PerfectScrollbarConfig(config) {
            if (config === void 0) { config = {}; }
            this.assign(config);
        }
        PerfectScrollbarConfig.prototype.assign = function (config) {
            if (config === void 0) { config = {}; }
            for (var key in config) {
                this[key] = config[key];
            }
        };
        return PerfectScrollbarConfig;
    }());

    var ScrollbarDirective = /** @class */ (function () {
        function ScrollbarDirective(zone, differs, elementRef, platformId, defaults, el) {
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
            this.ngDestroy = new rxjs.Subject();
            this.disabled = false;
            this.psScrollY = new core.EventEmitter();
            this.psScrollX = new core.EventEmitter();
            this.psScrollUp = new core.EventEmitter();
            this.psScrollDown = new core.EventEmitter();
            this.psScrollLeft = new core.EventEmitter();
            this.psScrollRight = new core.EventEmitter();
            this.psYReachEnd = new core.EventEmitter();
            this.psYReachStart = new core.EventEmitter();
            this.psXReachEnd = new core.EventEmitter();
            this.psXReachStart = new core.EventEmitter();
        }
        ScrollbarDirective.prototype.ngOnInit = function () {
            var _this = this;
            if (!this.disabled && common.isPlatformBrowser(this.platformId)) {
                var config_1 = new PerfectScrollbarConfig(this.defaults);
                config_1.assign(this.config); // Custom configuration
                this.zone.runOutsideAngular(function () {
                    _this.instance = new PerfectScrollbar(_this.elementRef.nativeElement, config_1);
                });
                if (!this.configDiff) {
                    this.configDiff = this.differs.find(this.config || {}).create();
                    this.configDiff.diff(this.config || {});
                }
                this.zone.runOutsideAngular(function () {
                    _this.ro = new ResizeObserver(function () {
                        _this.update();
                    });
                    if (_this.elementRef.nativeElement.children[0]) {
                        _this.ro.observe(_this.elementRef.nativeElement.children[0]);
                    }
                    _this.ro.observe(_this.elementRef.nativeElement);
                });
                this.zone.runOutsideAngular(function () {
                    PerfectScrollbarEvents.forEach(function (eventName) {
                        var eventType = eventName.replace(/([A-Z])/g, function (c) { return "-" + c.toLowerCase(); });
                        rxjs.fromEvent(_this.elementRef.nativeElement, eventType)
                            .pipe(operators.auditTime(20), operators.takeUntil(_this.ngDestroy))
                            .subscribe(function (event) {
                            _this[eventName].emit(event);
                        });
                    });
                });
            }
        };
        ScrollbarDirective.prototype.ngOnDestroy = function () {
            var _this = this;
            if (common.isPlatformBrowser(this.platformId)) {
                this.ngDestroy.next();
                this.ngDestroy.complete();
                if (this.ro) {
                    this.ro.disconnect();
                }
                if (this.timeout && typeof window !== 'undefined') {
                    window.clearTimeout(this.timeout);
                }
                this.zone.runOutsideAngular(function () {
                    if (_this.instance) {
                        _this.instance.destroy();
                    }
                });
                this.instance = null;
            }
        };
        ScrollbarDirective.prototype.ngDoCheck = function () {
            if (!this.disabled && this.configDiff && common.isPlatformBrowser(this.platformId)) {
                var changes = this.configDiff.diff(this.config || {});
                if (changes) {
                    this.ngOnDestroy();
                    this.ngOnInit();
                }
            }
        };
        ScrollbarDirective.prototype.ngOnChanges = function (changes) {
            if (changes['disabled'] && !changes['disabled'].isFirstChange() && common.isPlatformBrowser(this.platformId)) {
                if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                    if (changes['disabled'].currentValue === true) {
                        this.ngOnDestroy();
                    }
                    else if (changes['disabled'].currentValue === false) {
                        this.ngOnInit();
                    }
                }
            }
        };
        ScrollbarDirective.prototype.ps = function () {
            return this.instance;
        };
        ScrollbarDirective.prototype.update = function () {
            var _this = this;
            if (typeof window !== 'undefined') {
                if (this.timeout) {
                    window.clearTimeout(this.timeout);
                }
                this.timeout = window.setTimeout(function () {
                    if (!_this.disabled && _this.configDiff) {
                        try {
                            _this.zone.runOutsideAngular(function () {
                                if (_this.instance) {
                                    _this.instance.update();
                                }
                            });
                        }
                        catch (error) {
                            // Update can be finished after destroy so catch errors
                        }
                    }
                }, 0);
            }
        };
        ScrollbarDirective.prototype.geometry = function (prefix) {
            if (prefix === void 0) { prefix = 'scroll'; }
            return new Geometry(this.elementRef.nativeElement[prefix + 'Left'], this.elementRef.nativeElement[prefix + 'Top'], this.elementRef.nativeElement[prefix + 'Width'], this.elementRef.nativeElement[prefix + 'Height']);
        };
        ScrollbarDirective.prototype.position = function (absolute) {
            if (absolute === void 0) { absolute = false; }
            if (!absolute && this.instance) {
                return new Position(this.instance.reach.x || 0, this.instance.reach.y || 0);
            }
            else {
                return new Position(this.elementRef.nativeElement.scrollLeft, this.elementRef.nativeElement.scrollTop);
            }
        };
        ScrollbarDirective.prototype.scrollable = function (direction) {
            if (direction === void 0) { direction = 'any'; }
            var element = this.elementRef.nativeElement;
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
        };
        ScrollbarDirective.prototype.scrollTo = function (x, y, speed) {
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
        };
        ScrollbarDirective.prototype.scrollToX = function (x, speed) {
            this.animateScrolling('scrollLeft', x, speed);
        };
        ScrollbarDirective.prototype.scrollToY = function (y, speed) {
            this.animateScrolling('scrollTop', y, speed);
        };
        ScrollbarDirective.prototype.scrollToTop = function (offset, speed) {
            this.animateScrolling('scrollTop', (offset || 0), speed);
        };
        ScrollbarDirective.prototype.scrollToLeft = function (offset, speed) {
            this.animateScrolling('scrollLeft', (offset || 0), speed);
        };
        ScrollbarDirective.prototype.scrollToRight = function (offset, speed) {
            var left = this.elementRef.nativeElement.scrollWidth -
                this.elementRef.nativeElement.clientWidth;
            this.animateScrolling('scrollLeft', left - (offset || 0), speed);
        };
        ScrollbarDirective.prototype.scrollToBottom = function (offset, speed) {
            var top = this.elementRef.nativeElement.scrollHeight -
                this.elementRef.nativeElement.clientHeight;
            this.animateScrolling('scrollTop', top - (offset || 0), speed);
        };
        ScrollbarDirective.prototype.scrollToElement = function (qs, offset, speed) {
            var element = this.elementRef.nativeElement.querySelector(qs);
            if (element) {
                var elementPos = element.getBoundingClientRect();
                var scrollerPos = this.elementRef.nativeElement.getBoundingClientRect();
                if (this.elementRef.nativeElement.classList.contains('ps--active-x')) {
                    var currentPos = this.elementRef.nativeElement['scrollLeft'];
                    var position = elementPos.left - scrollerPos.left + currentPos;
                    this.animateScrolling('scrollLeft', position + (offset || 0), speed);
                }
                if (this.elementRef.nativeElement.classList.contains('ps--active-y')) {
                    var currentPos = this.elementRef.nativeElement['scrollTop'];
                    var position = elementPos.top - scrollerPos.top + currentPos;
                    this.animateScrolling('scrollTop', position + (offset || 0), speed);
                }
            }
        };
        ScrollbarDirective.prototype.animateScrolling = function (target, value, speed) {
            var _this = this;
            if (this.animation) {
                window.cancelAnimationFrame(this.animation);
                this.animation = null;
            }
            if (!speed || typeof window === 'undefined') {
                this.elementRef.nativeElement[target] = value;
            }
            else if (value !== this.elementRef.nativeElement[target]) {
                var newValue_1 = 0;
                var scrollCount_1 = 0;
                var oldTimestamp_1 = performance.now();
                var oldValue_1 = this.elementRef.nativeElement[target];
                var cosParameter_1 = (oldValue_1 - value) / 2;
                var step_1 = function (newTimestamp) {
                    scrollCount_1 += Math.PI / (speed / (newTimestamp - oldTimestamp_1));
                    newValue_1 = Math.round(value + cosParameter_1 + cosParameter_1 * Math.cos(scrollCount_1));
                    // Only continue animation if scroll position has not changed
                    if (_this.elementRef.nativeElement[target] === oldValue_1) {
                        if (scrollCount_1 >= Math.PI) {
                            _this.animateScrolling(target, value, 0);
                        }
                        else {
                            _this.elementRef.nativeElement[target] = newValue_1;
                            // On a zoomed out page the resulting offset may differ
                            oldValue_1 = _this.elementRef.nativeElement[target];
                            oldTimestamp_1 = newTimestamp;
                            _this.animation = window.requestAnimationFrame(step_1);
                        }
                    }
                };
                window.requestAnimationFrame(step_1);
            }
        };
        ScrollbarDirective.prototype.onClick = function (event) {
            if ($(event.target).hasClass('cancelActionButton') ||
                $(event.target).hasClass('backActionButton') ||
                $(event.target).hasClass('reviewAndSaveActionButton') ||
                $(event.target).hasClass('saveActionButton')) {
                this.scrollPositionToTop();
            }
        };
        // Scroll to top position
        ScrollbarDirective.prototype.scrollPositionToTop = function () {
            document.querySelector('#containerTop').scrollTop = 0;
        };
        ScrollbarDirective.ɵfac = function ScrollbarDirective_Factory(t) { return new (t || ScrollbarDirective)(core.ɵɵdirectiveInject(core.NgZone), core.ɵɵdirectiveInject(core.KeyValueDiffers), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.PLATFORM_ID), core.ɵɵdirectiveInject(PERFECT_SCROLLBAR_CONFIG, 8), core.ɵɵdirectiveInject(core.ElementRef)); };
        ScrollbarDirective.ɵdir = core.ɵɵdefineDirective({ type: ScrollbarDirective, selectors: [["", "appScrollbarDirective", ""]], hostBindings: function ScrollbarDirective_HostBindings(rf, ctx) { if (rf & 1) {
                core.ɵɵlistener("click", function ScrollbarDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
            } }, inputs: { disabled: "disabled", config: ["perfectScrollbar", "config"] }, outputs: { psScrollY: "psScrollY", psScrollX: "psScrollX", psScrollUp: "psScrollUp", psScrollDown: "psScrollDown", psScrollLeft: "psScrollLeft", psScrollRight: "psScrollRight", psYReachEnd: "psYReachEnd", psYReachStart: "psYReachStart", psXReachEnd: "psXReachEnd", psXReachStart: "psXReachStart" }, exportAs: ["ngxPerfectScrollbar"], features: [core.ɵɵNgOnChangesFeature] });
        return ScrollbarDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ScrollbarDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[appScrollbarDirective]',
                    exportAs: 'ngxPerfectScrollbar'
                }]
        }], function () { return [{ type: core.NgZone }, { type: core.KeyValueDiffers }, { type: core.ElementRef }, { type: Object, decorators: [{
                    type: core.Inject,
                    args: [core.PLATFORM_ID]
                }] }, { type: undefined, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Inject,
                    args: [PERFECT_SCROLLBAR_CONFIG]
                }] }, { type: core.ElementRef }]; }, { disabled: [{
                type: core.Input
            }], config: [{
                type: core.Input,
                args: ['perfectScrollbar']
            }], psScrollY: [{
                type: core.Output
            }], psScrollX: [{
                type: core.Output
            }], psScrollUp: [{
                type: core.Output
            }], psScrollDown: [{
                type: core.Output
            }], psScrollLeft: [{
                type: core.Output
            }], psScrollRight: [{
                type: core.Output
            }], psYReachEnd: [{
                type: core.Output
            }], psYReachStart: [{
                type: core.Output
            }], psXReachEnd: [{
                type: core.Output
            }], psXReachStart: [{
                type: core.Output
            }], onClick: [{
                type: core.HostListener,
                args: ['click', ["$event"]]
            }] }); })();

    var HyphenPipe = /** @class */ (function () {
        function HyphenPipe() {
        }
        HyphenPipe.prototype.transform = function (value) {
            return (value) ? value : ('-');
        };
        HyphenPipe.ɵfac = function HyphenPipe_Factory(t) { return new (t || HyphenPipe)(); };
        HyphenPipe.ɵpipe = core.ɵɵdefinePipe({ name: "hyphen", type: HyphenPipe, pure: true });
        return HyphenPipe;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(HyphenPipe, [{
            type: core.Pipe,
            args: [{
                    name: 'hyphen'
                }]
        }], null, null); })();

    // Syncfusion - dropdown list - No Records Found
    function syncDropdownNoRecordsFoundLocale() {
        ej2Base.L10n.load({
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
    var matRangeLabelIntl = function (page, pageSize, length) {
        if (length === 0 || pageSize === 0) {
            return $localize(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject([":@@paginator.zeroRange:0 of ", ""], [":@@paginator.zeroRange:0 of ", ""])), length);
        }
        length = Math.max(length, 0);
        var startIndex = page * pageSize;
        // If the start index exceeds the list length, do not try and fix the end index to the end.
        var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return $localize(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject([":@@paginator.rangeOfLabel:", " - ", " of ", ""], [":@@paginator.rangeOfLabel:", " - ", " of ", ""])), startIndex + 1, endIndex, length);
    };
    function MyPaginatorIntl() {
        var paginatorIntl = new paginator.MatPaginatorIntl();
        paginatorIntl.itemsPerPageLabel = $localize(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject([":@@paginator.displayPerPage:Items per page"], [":@@paginator.displayPerPage:Items per page"])));
        paginatorIntl.nextPageLabel = $localize(templateObject_4 || (templateObject_4 = __makeTemplateObject([":@@paginator.nextPage:Next page"], [":@@paginator.nextPage:Next page"])));
        paginatorIntl.previousPageLabel = $localize(templateObject_5 || (templateObject_5 = __makeTemplateObject([":@@paginator.prevPage:Prev page"], [":@@paginator.prevPage:Prev page"])));
        paginatorIntl.lastPageLabel = $localize(templateObject_6 || (templateObject_6 = __makeTemplateObject([":@@paginator.lastPage:Last page"], [":@@paginator.lastPage:Last page"])));
        paginatorIntl.firstPageLabel = $localize(templateObject_7 || (templateObject_7 = __makeTemplateObject([":@@paginator.firstPage:First page"], [":@@paginator.firstPage:First page"])));
        paginatorIntl.getRangeLabel = matRangeLabelIntl;
        return paginatorIntl;
    }
    var templateObject_1$2, templateObject_2$2, templateObject_3$1, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

    var GlobalModule = /** @class */ (function () {
        function GlobalModule() {
        }
        GlobalModule.ɵmod = core.ɵɵdefineNgModule({ type: GlobalModule });
        GlobalModule.ɵinj = core.ɵɵdefineInjector({ factory: function GlobalModule_Factory(t) { return new (t || GlobalModule)(); }, providers: [
                {
                    provide: paginator.MatPaginatorIntl,
                    useValue: MyPaginatorIntl()
                }, {
                    // Syncfusion dropdown - No records found localization
                    provide: syncDropdownNoRecordsFoundLocale,
                    useValue: syncDropdownNoRecordsFoundLocale()
                }
            ], imports: [[
                    common.CommonModule,
                    tooltip.MatTooltipModule
                ]] });
        return GlobalModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(GlobalModule, { declarations: [GlobalComponent,
            UIModalNotificationPage,
            PageNotFoundComponent,
            AssetDataPanelComponent,
            PanelBlankComponent,
            PanelDashboardComponent,
            PanelRemoveComponent,
            TablePanelComponent,
            NumberDirective,
            ScrollbarDirective,
            HyphenPipe], imports: [common.CommonModule,
            tooltip.MatTooltipModule], exports: [GlobalComponent,
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
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(GlobalModule, [{
            type: core.NgModule,
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
                        common.CommonModule,
                        tooltip.MatTooltipModule
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
                            provide: paginator.MatPaginatorIntl,
                            useValue: MyPaginatorIntl()
                        }, {
                            // Syncfusion dropdown - No records found localization
                            provide: syncDropdownNoRecordsFoundLocale,
                            useValue: syncDropdownNoRecordsFoundLocale()
                        }
                    ],
                    schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                }]
        }], null, null); })();

    var ErrorData = /** @class */ (function () {
        function ErrorData() {
        }
        return ErrorData;
    }());

    var ResponseEntity = /** @class */ (function () {
        function ResponseEntity() {
        }
        return ResponseEntity;
    }());

    var TimeZone = /** @class */ (function () {
        function TimeZone() {
        }
        return TimeZone;
    }());

    var MINUTES_UNITL_AUTO_LOGOUT = 1; // in mins
    var CHECK_INTERVAL = 15000; // in ms
    var STORE_KEY = 'lastAction';
    var AutoLogoutService = /** @class */ (function () {
        function AutoLogoutService(router) {
            this.router = router;
            // this.check();
            //this.initListener();
            //this.initInterval();
            // localStorage.setItem(STORE_KEY, Date.now().toString());
        }
        AutoLogoutService.prototype.getLastAction = function () {
            return parseInt(localStorage.getItem("lastAction"));
        };
        AutoLogoutService.prototype.setLastAction = function (lastAction) {
            localStorage.setItem(STORE_KEY, lastAction.toString());
        };
        AutoLogoutService.prototype.ngOnDestroy = function () {
            clearInterval(this.inter);
        };
        AutoLogoutService.prototype.initListener = function () {
            var _this = this;
            document.body.addEventListener('click', function () { return _this.reset(); });
            document.body.addEventListener('mouseover', function () { return _this.reset(); });
            document.body.addEventListener('mouseout', function () { return _this.reset(); });
            document.body.addEventListener('keydown', function () { return _this.reset(); });
            document.body.addEventListener('keyup', function () { return _this.reset(); });
            document.body.addEventListener('keypress', function () { return _this.reset(); });
        };
        AutoLogoutService.prototype.reset = function () {
            this.setLastAction(Date.now());
        };
        AutoLogoutService.prototype.initInterval = function () {
            var _this = this;
            this.inter = setInterval(function () {
                _this.check();
            }, CHECK_INTERVAL);
        };
        AutoLogoutService.prototype.getSignOnHistoryByUserId = function (userId) {
            /* this.logoutService.getSignOnHistoryByUserId(userId).subscribe(res => {
              this.currentSigOnTime = res;
              //
            },
              error => {
                
              }
            ) */
        };
        AutoLogoutService.prototype.check = function () {
            this.userId = sessionStorage.getItem('userId');
            var now = Date.now();
            var lastAction = this.getLastAction();
            var timeleft = lastAction + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
            var diff = timeleft - now;
            var isTimeout = diff < 0;
            if (this.currentSigOnTime != null || this.userId != undefined || this.userId != null) {
                if (isTimeout) {
                    alert("session expired");
                    this.logout();
                    localStorage.clear();
                    this.router.navigate(['']);
                }
            }
        };
        AutoLogoutService.prototype.logout = function () {
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
        };
        AutoLogoutService.ɵfac = function AutoLogoutService_Factory(t) { return new (t || AutoLogoutService)(core.ɵɵinject(router.Router)); };
        AutoLogoutService.ɵprov = core.ɵɵdefineInjectable({ token: AutoLogoutService, factory: AutoLogoutService.ɵfac });
        return AutoLogoutService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(AutoLogoutService, [{
            type: core.Injectable
        }], function () { return [{ type: router.Router }]; }, null); })();

    var DialogService = /** @class */ (function () {
        function DialogService() {
            this.navigateAwaySelection$ = new rxjs.Subject();
        }
        /**
         * Ask user to confirm an action. `message` explains the action and choices.
         * Returns Prmose resolving to `true`=confirm or `false`=cancel
         */
        //  Warning - when unsaved changes done ask user to confirm/cancel. 
        DialogService.prototype.alertMessage = function (title, text) {
            var _this = this;
            return new Promise(function (resolve) {
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
                }).then(function (result) {
                    if (result.value) {
                        _this.navigateAwaySelection$.next(true);
                        return resolve(true);
                    }
                });
            });
        };
        DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(); };
        DialogService.ɵprov = core.ɵɵdefineInjectable({ token: DialogService, factory: DialogService.ɵfac, providedIn: 'root' });
        return DialogService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DialogService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], null, null); })();

    var ExcelService = /** @class */ (function () {
        function ExcelService() {
        }
        ExcelService.prototype.generateExcel = function (excelObject, excelSearchFilterFields) {
            //Create workbook and worksheet
            var workbook = new exceljs.Workbook();
            // create new sheet with pageSetup settings for A4 - landscape
            var worksheet = workbook.addWorksheet(excelObject.excelWorkSheetName, {
                pageSetup: { paperSize: 9, orientation: 'landscape' }
            });
            worksheet.properties.defaultColWidth = 20;
            //Add Row and formatting
            var excelWorkSheetTitle = worksheet.addRow([excelObject.title]);
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
                var searchCriteriaText = worksheet.addRow([excelSearchFilterFields.searchCriteriaText]);
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
                var excelSearchFilterFieldsData = excelSearchFilterFields.searchFilterKeysValues;
                excelSearchFilterFieldsData.forEach(function (d) {
                    var row = worksheet.addRow(d);
                    // Cell Style for Table header data : Fill and Border and Font
                    row.eachCell(function (cell, number) {
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
            var excelTableHeaderNames = worksheet.addRow(excelObject.tableHeaderNames);
            // Cell Style for Table header data : Fill and Border and Font
            excelTableHeaderNames.eachCell(function (cell, number) {
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
            var excelTableBodyData = excelObject.tableBodyData;
            excelTableBodyData.forEach(function (d) {
                var row = worksheet.addRow(d);
                // Cell Style for Table header data : Fill and Border and Font
                row.eachCell(function (cell, number) {
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
            var excelFooterRow = worksheet.addRow(['Disclaimer: This is system generated report.']);
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
            worksheet.mergeCells("A" + excelFooterRow.number + ":F" + excelFooterRow.number);
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
            workbook.xlsx.writeBuffer().then(function (data) {
                var blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                fileSaver.saveAs(blob, excelObject.fileName + '.xlsx');
            });
            /*
          ========================================================
            Generate Excel File with given name - Ends here
            ========================================================
         */
        };
        ExcelService.ɵfac = function ExcelService_Factory(t) { return new (t || ExcelService)(); };
        ExcelService.ɵprov = core.ɵɵdefineInjectable({ token: ExcelService, factory: ExcelService.ɵfac, providedIn: 'root' });
        return ExcelService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ExcelService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var PdfService = /** @class */ (function () {
        function PdfService() {
        }
        PdfService.prototype.generatePDF = function (pdfObject, pdfSearchFilterFields) {
            var head = [pdfObject.tableHeaderNames];
            var pdfTableBodyData = pdfObject.tableBodyData;
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
                var pdfSearchFilterFieldsData = pdfSearchFilterFields.searchFilterKeysValues;
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
                    didParseCell: function (data) {
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
            var finalY = doc.lastAutoTable.finalY + 15; // The y position on the page
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
        };
        PdfService.ɵfac = function PdfService_Factory(t) { return new (t || PdfService)(); };
        PdfService.ɵprov = core.ɵɵdefineInjectable({ token: PdfService, factory: PdfService.ɵfac, providedIn: 'root' });
        return PdfService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(PdfService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var globalSharedService = /** @class */ (function () {
        function globalSharedService(excelService, pdfService) {
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
        globalSharedService.prototype.setassetViewModeFormViewStatus = function (view) {
            this.assetViewModeFormViewStatus = view;
        };
        // When click on update/view, ID will pass to respective updata view
        globalSharedService.prototype.GettingId = function (id) {
            var _this = this;
            this.selectedId = id;
            setTimeout(function () {
                _this.selectedId = null;
            }, 1000);
        };
        globalSharedService.prototype.GettingString = function (name) {
            var _this = this;
            this.name = name;
            setTimeout(function () {
                _this.name = null;
            }, 2000);
        };
        globalSharedService.prototype.setId = function (id) {
            this.id = id;
        };
        globalSharedService.prototype.gettingName = function (name) {
            this.parentName = name;
        };
        // Store json valu to global level for show click to edit view
        globalSharedService.prototype.setOrganizationDetail = function (pageName, objectDetail) {
            this.pageName = pageName;
            this.listOfRow = objectDetail;
            // setTimeout(() => {
            //     this.listOfRow = null;
            // }, 1000)
        };
        globalSharedService.prototype.setMenuDetail = function (menu) {
            this.listOfRow = menu;
        };
        globalSharedService.prototype.analogAsset = function (objectDetail) {
            this.analogAssetObj = objectDetail;
        };
        // User view to global level for show click to edit view tab level passing
        //=========================================( URL, Boject, tab,  Header
        globalSharedService.prototype.listOfRowDetailForUser = function (url, objectDetail, tab, header) {
            this.userDetails = objectDetail;
            this.pageName = header;
            this.urlName = url;
            this.tabClick = tab;
        };
        // clearInfo
        globalSharedService.prototype.clearInfo = function () {
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
        };
        globalSharedService.prototype.getNamePattern = function () {
            return "^[a-zA-Z][ a-zA-Z0-9.#@*&_-]*";
        };
        globalSharedService.prototype.getNamePatternForGatewayandAsset = function () {
            return "[ a-zA-Z0-9.#@*:&_-]*";
        };
        globalSharedService.prototype.setIsAdmin = function (isAdmin) {
            this.isadmin = isAdmin;
        };
        globalSharedService.prototype.doubleHyphen = function (event) {
            var str = event.target.value;
            var n = str.includes("--");
            if (n) {
                return true;
            }
        };
        // Landing menu
        globalSharedService.prototype.landingMenuUrl = function (landingMenuUrl) {
            this.landingMenuUrlForHome = landingMenuUrl;
        };
        globalSharedService.prototype.setNumberOfUsers = function (numberOfUsers) {
            var _this = this;
            this.maxUser = numberOfUsers;
            setTimeout(function () {
                _this.maxUser = null;
            }, 2000);
        };
        globalSharedService.prototype.setRoleList = function (confirmedList) {
            this.roleList = confirmedList;
        };
        globalSharedService.prototype.setAssetDetail = function (details) {
            var _this = this;
            this.assetDetails = details;
            setTimeout(function () {
                _this.assetDetails = null;
            }, 1000);
        };
        globalSharedService.prototype.setGlobalId = function (id) {
            this.globalId = id;
        };
        globalSharedService.prototype.setNotificationMedia = function (objectDetail) {
            this.notificationMediaList = objectDetail;
        };
        globalSharedService.prototype.setConfirmedNotificationGroupList = function (objectDetail) {
            this.confirmedNotificationGroupList = objectDetail;
        };
        globalSharedService.prototype.setConfirmedAccessGroupList = function (objectDetail) {
            this.confirmedAccessGroupList = objectDetail;
        };
        globalSharedService.prototype.setUsersList = function (objectDetail) {
            this.usersList = objectDetail;
        };
        globalSharedService.prototype.setNotificationGroupDetails = function (objectDetail) {
            this.notificationGroupDetails = objectDetail;
        };
        globalSharedService.prototype.setNotificationMediaTabDetails = function (objectDetail) {
            var _this = this;
            this.notificationMediaTabDetails = objectDetail;
            setTimeout(function () {
                _this.notificationMediaTabDetails = null;
            }, 2000);
        };
        globalSharedService.prototype.setNotificationGroupmediaDetails = function (objectDetail) {
            this.notificationGroupmediaDetails = objectDetail;
        };
        globalSharedService.prototype.setBackId = function (object) {
            this.backId = object;
        };
        // datasource
        globalSharedService.prototype.dataSource = function (dataSource) {
            this.dataDataSource = dataSource;
        };
        globalSharedService.prototype.setNotificationDetail = function (obj) {
            this.onpageloadNotificationGroupMediaDetails = obj;
        };
        globalSharedService.prototype.getDashboardSelectedName = function (userDashboardList, id) {
            var selectedDashboardIdName = '';
            this.selectedDashboardName = userDashboardList.filter(function (item) {
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
        };
        globalSharedService.prototype.getPatternForCommunication = function (dataType) {
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
        };
        globalSharedService.prototype.getPatternForDiscreterTag = function (dataType) {
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
        };
        globalSharedService.prototype.setLanguageURL = function (pageUrl) {
            // Getting the host name, Pathname, Current page URL
            var protocol = window.location.protocol;
            var hostName = window.location.host;
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
                var anchorTagAttrbute = $(this).attr('name');
                var path = pathName + anchorTagAttrbute + "/#" + currentPageUrl;
                $(this).attr('href', path);
            });
        };
        globalSharedService.prototype.getCurrentUrl = function () {
            var pageName = document.location.href.split("#")[1];
            return pageName;
        };
        globalSharedService.prototype.setReminingUsers = function (reminingUsers) {
            var _this = this;
            this.reminingUser = reminingUsers;
            setTimeout(function () {
                _this.reminingUser = null;
            }, 2000);
        };
        globalSharedService.prototype.setMaxUsers = function (maxUsers) {
            var _this = this;
            this.maxUsers = maxUsers;
            setTimeout(function () {
                _this.maxUsers = null;
            }, 2000);
        };
        globalSharedService.prototype.setDataServerTime = function (dataServerTime) {
            var _this = this;
            this.dataServerTime = dataServerTime;
            setTimeout(function () {
                _this.maxUsers = null;
            }, 2000);
        };
        globalSharedService.prototype.getExportingFileName = function (exportingfileName) {
            var timeSpan = new Date().toISOString();
            var getFullDay = timeSpan.split('T');
            var getTime = getFullDay[1].split(':');
            var getHrMin = getTime[0] + "H" + getTime[1] + "m";
            this.fileName = exportingfileName + "_" + getFullDay[0] + "_" + getHrMin;
            return this.fileName;
        };
        // Date and Time split for search criteria
        globalSharedService.prototype.startDateEndDateTimeSplit = function (dateTime) {
            var getFullDay = dateTime.split('T');
            var getTime = getFullDay[1].split(':');
            var getHrMin = getTime[0] + ":" + getTime[1];
            return getFullDay[0] + " " + getHrMin;
        };
        // Make new set of re-arrange object
        globalSharedService.prototype.reCreateNewObject = function (data, displayedColumns) {
            var sendBack = data.map(function (object) {
                var e_1, _a;
                var newObject = {};
                try {
                    for (var displayedColumns_1 = __values(displayedColumns), displayedColumns_1_1 = displayedColumns_1.next(); !displayedColumns_1_1.done; displayedColumns_1_1 = displayedColumns_1.next()) {
                        var objPropertyName = displayedColumns_1_1.value;
                        if (!object.hasOwnProperty(objPropertyName)) {
                            newObject[objPropertyName] = '-';
                        }
                        else {
                            newObject[objPropertyName] = object[objPropertyName] ? object[objPropertyName] : '-';
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (displayedColumns_1_1 && !displayedColumns_1_1.done && (_a = displayedColumns_1.return)) _a.call(displayedColumns_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return newObject;
            });
            return sendBack;
        };
        // Download CSV/PDF/Excel Title formate
        globalSharedService.prototype.formateCSVTitle = function (titleList, headerName) {
            var e_2, _a;
            var headerTitle = headerName;
            var breakSentence = '\r\n';
            var titleRowKeys = '';
            var titleRowValues = '';
            var titleKeysValues;
            try {
                // Getting saperate Title Keys and Values
                for (var _b = __values(Object.entries(titleList)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                    /* Row by Row */
                    titleRowKeys += '"' + key + '"' + ',' + '"' + value + '"' + ',' + breakSentence;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            //   Remove at last character (,)
            /* Row by Row */
            titleKeysValues = titleRowKeys.slice(0, -1);
            return headerTitle + breakSentence + breakSentence + titleKeysValues;
        };
        // Final download files
        globalSharedService.prototype.downloadFile = function (fileType, exportFile, searchFieldsContainer, tableBodyDataList, fileName, csvOptions) {
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
                new AngularCsv.AngularCsv(tableBodyDataList, fileName, csvOptions);
            }
        };
        // Remove last element in the array
        globalSharedService.prototype.removeLastIndexAtArray = function (object) {
            // Convert Obaject into Array
            var array = Object.values(object);
            array.pop();
            return array;
        };
        // Added S.No. to Download file excel,CSV, PDF
        globalSharedService.prototype.serialNumberGenerate = function (array) {
            var i = 1;
            var returnModifiedArray = array.map(function (object) {
                object.id = i;
                i++;
                return object;
            });
            return returnModifiedArray;
        };
        globalSharedService.prototype.setUserEmailId = function (emailId) {
            this.emailId = emailId;
        };
        // Return the Selected languge for Syncfusion Dropdown 
        globalSharedService.prototype.getLanguage = function () {
            return this.selectedLanguage;
        };
        // Set Language
        globalSharedService.prototype.setLanguage = function (language) {
            this.selectedLanguage = language;
        };
        globalSharedService.prototype.setMultiselectDropdownTextSettings = function () {
            return this.dropDownTextSettings = {
                text: $localize(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject([":@@multiSelectDropdown.select:--Select--"], [":@@multiSelectDropdown.select:--Select--"]))),
                noDataLabel: $localize(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject([":@@multiSelectDropdown.noDataLabel:No Data Available"], [":@@multiSelectDropdown.noDataLabel:No Data Available"])))
            };
        };
        globalSharedService.prototype.setGatewayLableName = function (path) {
            var gatewayAndTemplateLableName;
            if (path[1] == "asset-template") {
                return gatewayAndTemplateLableName = "Gateway Template";
            }
            else if (path[1] == "asset") {
                return gatewayAndTemplateLableName = "Gateway";
            }
        };
        globalSharedService.prototype.setDataValue = function (data) {
            this.setData = data;
        };
        globalSharedService.prototype.getDataValue = function () {
            return this.setData;
        };
        globalSharedService.ɵfac = function globalSharedService_Factory(t) { return new (t || globalSharedService)(core.ɵɵinject(ExcelService), core.ɵɵinject(PdfService)); };
        globalSharedService.ɵprov = core.ɵɵdefineInjectable({ token: globalSharedService, factory: globalSharedService.ɵfac, providedIn: 'root' });
        return globalSharedService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(globalSharedService, [{
            type: core.Injectable,
            args: [{ providedIn: 'root' }]
        }], function () { return [{ type: ExcelService }, { type: PdfService }]; }, null); })();
    var templateObject_1$3, templateObject_2$3;

    var PendingChangesGuard = /** @class */ (function () {
        function PendingChangesGuard() {
        }
        PendingChangesGuard.prototype.canDeactivate = function (component) {
            // if there are no pending changes, just allow deactivation; else confirm first
            return component.canDeactivate ? component.canDeactivate() : true;
            // NOTE: this warning message will only be shown when navigating elsewhere within your angular app;
            // when navigating away from your angular app, the browser will show a generic warning message
            // see http://stackoverflow.com/a/42207299/7307355
        };
        PendingChangesGuard.ɵfac = function PendingChangesGuard_Factory(t) { return new (t || PendingChangesGuard)(); };
        PendingChangesGuard.ɵprov = core.ɵɵdefineInjectable({ token: PendingChangesGuard, factory: PendingChangesGuard.ɵfac });
        return PendingChangesGuard;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(PendingChangesGuard, [{
            type: core.Injectable
        }], null, null); })();

    var ShareddataService = /** @class */ (function () {
        function ShareddataService() {
            this.messageSource = new rxjs.Subject();
            this.subject = new rxjs.Subject();
            // currentMessage = this.messageSource.asObservable();
            this.categorySubject = new rxjs.Subject();
            this.rackAssetSubject = new rxjs.Subject();
        }
        ShareddataService.prototype.changeMessage = function (message) {
            this.messageSource.next(message);
        };
        ShareddataService.prototype.getChangedMessage = function () {
            return this.messageSource.asObservable();
        };
        ShareddataService.prototype.setData = function (data) {
            this.subject.next(data);
        };
        ShareddataService.prototype.getData = function () {
            return this.subject.asObservable();
        };
        ShareddataService.prototype.setCategory = function (data) {
            this.categorySubject.next(data);
        };
        ShareddataService.prototype.getCategory = function () {
            return this.categorySubject.asObservable();
        };
        ShareddataService.prototype.setRackAsset = function (data) {
            this.rackAssetSubject.next(data);
        };
        ShareddataService.prototype.getRackAsset = function () {
            return this.rackAssetSubject.asObservable();
        };
        ShareddataService.ɵfac = function ShareddataService_Factory(t) { return new (t || ShareddataService)(); };
        ShareddataService.ɵprov = core.ɵɵdefineInjectable({ token: ShareddataService, factory: ShareddataService.ɵfac, providedIn: 'root' });
        return ShareddataService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ShareddataService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var ThemeChangeService = /** @class */ (function () {
        function ThemeChangeService(http) {
            this.http = http;
        }
        ThemeChangeService.prototype.getThemeNames = function () {
            return null;
        };
        ThemeChangeService.ɵfac = function ThemeChangeService_Factory(t) { return new (t || ThemeChangeService)(core.ɵɵinject(http.HttpClient)); };
        ThemeChangeService.ɵprov = core.ɵɵdefineInjectable({ token: ThemeChangeService, factory: ThemeChangeService.ɵfac, providedIn: 'root' });
        return ThemeChangeService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ThemeChangeService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: http.HttpClient }]; }, null); })();

    var VersionCheckService = /** @class */ (function () {
        function VersionCheckService(http) {
            this.http = http;
            // this will be replaced by actual hash post-build.js
            this.currentHash = '{{POST_BUILD_ENTERS_HASH_HERE}}';
        }
        /**
         * Checks in every set frequency the version of frontend application
         * @param url
         * @param {number} frequency - in milliseconds, defaults to 30 minutes
         */
        VersionCheckService.prototype.initVersionCheck = function (url, frequency) {
            var _this = this;
            if (frequency === void 0) { frequency = 3000; }
            setInterval(function () {
                _this.checkVersion(url);
            }, frequency);
        };
        /**
         * Will do the call and check if the hash has changed or not
         * @param url
         */
        VersionCheckService.prototype.checkVersion = function (url) {
            var _this = this;
            // timestamp these requests to invalidate caches
            // this.http.get(url + '?t=' + new Date().getTime())
            this.http.get(url)
                // .first()
                .subscribe(function (response) {
                var hash = response.hash;
                var hashChanged = _this.hasHashChanged(_this.currentHash, hash);
                // If new version, do something
                if (hashChanged) {
                    // ENTER YOUR CODE TO DO SOMETHING UPON VERSION CHANGE
                    // for an example: 
                    location.reload();
                }
                // store the new hash so we wouldn't trigger versionChange again
                // only necessary in case you did not force refresh
                _this.currentHash = hash;
            }, function (err) {
                console.error(err, 'Could not get version');
            });
        };
        /**
         * Checks if hash has changed.
         * This file has the JS hash, if it is a different one than in the version.json
         * we are dealing with version change
         * @param currentHash
         * @param newHash
         * @returns {boolean}
         */
        VersionCheckService.prototype.hasHashChanged = function (currentHash, newHash) {
            if (!currentHash || currentHash === '{{POST_BUILD_ENTERS_HASH_HERE}}') {
                return false;
            }
            return currentHash !== newHash;
        };
        VersionCheckService.ɵfac = function VersionCheckService_Factory(t) { return new (t || VersionCheckService)(core.ɵɵinject(http.HttpClient)); };
        VersionCheckService.ɵprov = core.ɵɵdefineInjectable({ token: VersionCheckService, factory: VersionCheckService.ɵfac, providedIn: 'root' });
        return VersionCheckService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(VersionCheckService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: http.HttpClient }]; }, null); })();

    exports.AssetDataPanelComponent = AssetDataPanelComponent;
    exports.AutoLogoutService = AutoLogoutService;
    exports.DialogService = DialogService;
    exports.ErrorData = ErrorData;
    exports.ExcelService = ExcelService;
    exports.Geometry = Geometry;
    exports.GlobalComponent = GlobalComponent;
    exports.GlobalModule = GlobalModule;
    exports.GlobalService = GlobalService;
    exports.HyphenPipe = HyphenPipe;
    exports.MyPaginatorIntl = MyPaginatorIntl;
    exports.NumberDirective = NumberDirective;
    exports.PERFECT_SCROLLBAR_CONFIG = PERFECT_SCROLLBAR_CONFIG;
    exports.PageNotFoundComponent = PageNotFoundComponent;
    exports.PanelBlankComponent = PanelBlankComponent;
    exports.PanelDashboardComponent = PanelDashboardComponent;
    exports.PanelRemoveComponent = PanelRemoveComponent;
    exports.PdfService = PdfService;
    exports.PendingChangesGuard = PendingChangesGuard;
    exports.PerfectScrollbarConfig = PerfectScrollbarConfig;
    exports.PerfectScrollbarEvents = PerfectScrollbarEvents;
    exports.Position = Position;
    exports.ResponseEntity = ResponseEntity;
    exports.ScrollbarDirective = ScrollbarDirective;
    exports.ShareddataService = ShareddataService;
    exports.TablePanelComponent = TablePanelComponent;
    exports.ThemeChangeService = ThemeChangeService;
    exports.TimeZone = TimeZone;
    exports.UIModalNotificationPage = UIModalNotificationPage;
    exports.VersionCheckService = VersionCheckService;
    exports.exportTable = exportTable;
    exports.globalSharedService = globalSharedService;
    exports.syncDropdownNoRecordsFoundLocale = syncDropdownNoRecordsFoundLocale;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=global.umd.js.map
