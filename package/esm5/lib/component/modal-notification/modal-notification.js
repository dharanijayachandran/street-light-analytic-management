import { Component, Output, EventEmitter } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
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
    UIModalNotificationPage.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    UIModalNotificationPage.prototype.getDismissReason = function (reason) {
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
    UIModalNotificationPage.ɵfac = function UIModalNotificationPage_Factory(t) { return new (t || UIModalNotificationPage)(i0.ɵɵdirectiveInject(i1.NgbModal)); };
    UIModalNotificationPage.ɵcmp = i0.ɵɵdefineComponent({ type: UIModalNotificationPage, selectors: [["app-modal-notification"]], outputs: { modelNotificationInfo: "modelNotificationInfo", modelNotificationSuccess: "modelNotificationSuccess", modelNotificationWarning: "modelNotificationWarning", modelNotificationWarningAlarm: "modelNotificationWarningAlarm", modelNotificationDanger: "modelNotificationDanger", modelNotificationError: "modelNotificationError", modelNotificationAlarmMessage: "modelNotificationAlarmMessage", modelNotificationClearMessage: "modelNotificationClearMessage" }, decls: 0, vars: 0, template: function UIModalNotificationPage_Template(rf, ctx) { }, encapsulation: 2 });
    return UIModalNotificationPage;
}());
export { UIModalNotificationPage };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UIModalNotificationPage, [{
        type: Component,
        args: [{
                selector: 'app-modal-notification',
                templateUrl: './modal-notification.html'
            }]
    }], function () { return [{ type: i1.NgbModal }]; }, { modelNotificationInfo: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtbm90aWZpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2xvYmFsLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9tb2RhbC1ub3RpZmljYXRpb24vbW9kYWwtbm90aWZpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQVksbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUczRSw0QkFBNEI7QUFDNUIsT0FBTyxJQUFJLE1BQU0sYUFBYSxDQUFDOzs7QUFFL0I7SUFVRSxpQ0FBb0IsWUFBc0I7UUFBdEIsaUJBQVksR0FBWixZQUFZLENBQVU7UUFIMUMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQWlGbkIsNkNBQTZDO1FBQzdDLDZCQUE2QjtRQUM3QixXQUFXO1FBQ1gsb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsOEJBQThCO1FBQzlCLCtCQUErQjtRQUMvQiw2QkFBNkI7UUFDN0IsK0JBQStCO1FBQy9CLDRDQUE0QztRQUM1QywwQkFBMEI7UUFDMUIsMEJBQTBCO1FBQzFCLFFBQVE7UUFDUixPQUFPO1FBQ1AsSUFBSTtRQUtKLGNBQWM7UUFDSiwwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBc0JyRCxzRUFBc0U7UUFDNUQsNkJBQXdCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQWlCeEQsa0VBQWtFO1FBQ3hELDZCQUF3QixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUF3QnhELGtFQUFrRTtRQUN4RCxrQ0FBNkIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBNEI3RCwwQkFBMEI7UUFDaEIsNEJBQXVCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQXVCdkQsa0RBQWtEO1FBQ3hDLDJCQUFzQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUF1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LENBQUMsVUFBQyxNQUFNO1lBQ2IsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO2dCQUNoQixLQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDbkM7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7a0dBNVNVLHVCQUF1QjtnRUFBdkIsdUJBQXVCO2tDQVpwQztDQTBUQyxBQW5URCxJQW1UQztTQTlTWSx1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLDJCQUEyQjthQUN6Qzs7a0JBMEdFLE1BQU07O2tCQXVCTixNQUFNOztrQkFrQk4sTUFBTTs7a0JBeUJOLE1BQU07O2tCQTZCTixNQUFNOztrQkF3Qk4sTUFBTTs7a0JBd0JOLE1BQU07O2tCQWlCTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ2JNb2RhbCwgTW9kYWxEaXNtaXNzUmVhc29ucyB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbi8vIEVTNiBNb2R1bGVzIG9yIFR5cGVTY3JpcHRcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbW9kYWwtbm90aWZpY2F0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbW9kYWwtbm90aWZpY2F0aW9uLmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVUlNb2RhbE5vdGlmaWNhdGlvblBhZ2Uge1xyXG4gIGNsb3NlUmVzdWx0OiBzdHJpbmc7XHJcbiAgaW5wdXRGaWVsZCA9IGZhbHNlO1xyXG4gIHJlbWFyazogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwpIHtcclxuXHJcbiAgfVxyXG5cclxuICBvcGVuKGNvbnRlbnQpIHtcclxuICAgIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oY29udGVudCkucmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICB0aGlzLmNsb3NlUmVzdWx0ID0gYENsb3NlZCB3aXRoOiAke3Jlc3VsdH1gO1xyXG4gICAgfSwgKHJlYXNvbikgPT4ge1xyXG4gICAgICB0aGlzLmNsb3NlUmVzdWx0ID0gYERpc21pc3NlZCAke3RoaXMuZ2V0RGlzbWlzc1JlYXNvbihyZWFzb24pfWA7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RGlzbWlzc1JlYXNvbihyZWFzb246IGFueSk6IHN0cmluZyB7XHJcbiAgICBpZiAocmVhc29uID09PSBNb2RhbERpc21pc3NSZWFzb25zLkVTQykge1xyXG4gICAgICByZXR1cm4gJ2J5IHByZXNzaW5nIEVTQyc7XHJcbiAgICB9IGVsc2UgaWYgKHJlYXNvbiA9PT0gTW9kYWxEaXNtaXNzUmVhc29ucy5CQUNLRFJPUF9DTElDSykge1xyXG4gICAgICByZXR1cm4gJ2J5IGNsaWNraW5nIG9uIGEgYmFja2Ryb3AnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGB3aXRoOiAke3JlYXNvbn1gO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8vIEhhbmRsaW5nIHJlc3BvbnNlIGNvbWVzIGZyb20gQVBJXHJcbiAgYWxlcnRNZXNzYWdlKG1lc3NhZ2VUeXBlLCBtZXNzYWdlKSB7XHJcbiAgICBzd2l0Y2ggKG1lc3NhZ2VUeXBlKSB7XHJcbiAgICAgIGNhc2UgJ1N1Y2Nlc3MnOiB7XHJcbiAgICAgICAgLy8gTW9kYWwgd2luZG93IGZvciBzdWNjZXNzIChleDpDcmVhdGVkIHN1Y2Nlc3NmdWwgLCBEZWxldGVkIHN1Y2Nlc3NmdWwpXHJcbiAgICAgICAgdGhpcy5zd2FsU3VjY2VzcyhtZXNzYWdlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdGYWlsZWQnOiB7XHJcbiAgICAgICAgbGV0IGVycm9yO1xyXG4gICAgICAgIC8vIE1vZGFsIHdpbmRvdyBmb3IgZmFpbGVkIHNjZW5hcmlvKGV4OiBOb3Qgc2F2ZWQpXHJcbiAgICAgICAgaWYgKG1lc3NhZ2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgIGVycm9yID0gbWVzc2FnZS5lcnJvci5tZXNzYWdlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2Uuc3RhdHVzID09PSAwKSB7XHJcbiAgICAgICAgICBlcnJvciA9IFwiTm90IGFibGUgdG8gcHJvY2VzcyByZXF1ZXN0LCBQbGVhc2UgdHJ5IGFmdGVyIHNvbWUgdGltZS5cIlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGVycm9yID0gbWVzc2FnZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zd2FsRXJyb3JJbmZvKGVycm9yKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdJbmZvJzoge1xyXG4gICAgICAgIC8vIEluZm9ybWF0aW9uXHJcbiAgICAgICAgdGhpcy5zd2FsSW5mbyhtZXNzYWdlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdXYXJuaW5nJzoge1xyXG4gICAgICAgIC8vIE1vZGFsIHdpbmRvdyBmb3IgV2FybmluZyBpbmZvIChleDogQ2FuY2VsL1Jlc2V0L1RhYiBuYXZpZ2F0aW9uKVxyXG4gICAgICAgIHRoaXMuc3dhbFdhcm5pbmcobWVzc2FnZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnRXJyb3InOiB7XHJcbiAgICAgICAgLy8gTW9kYWwgd2luZG93IGZvciBkZWxldGVcclxuICAgICAgICB0aGlzLnN3YWxEYW5nZXIobWVzc2FnZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnQWxhcm1NZXNzYWdlJzoge1xyXG4gICAgICAgIC8vIE1vZGFsIHdpbmRvdyBmb3IgZGVsZXRlXHJcbiAgICAgICAgdGhpcy5zd2FsQWxhcm1NZXNzYWdlKG1lc3NhZ2UpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ0NsZWFyTWVzc2FnZSc6IHtcclxuICAgICAgICAvLyBNb2RhbCB3aW5kb3cgZm9yIGRlbGV0ZVxyXG4gICAgICAgIHRoaXMuc3dhbENsZWFyTWVzc2FnZShtZXNzYWdlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvLyBleChsb2dpbiA9IGp1c3QgaW5mb3JtYXRpb24gd2l0aCBxdWVzdGlvbilcclxuICAvLyBzd2FsUHJpbWFyeSh0aXRsZSwgdGV4dCkge1xyXG4gIC8vICAgc3dhbCh7XHJcbiAgLy8gICAgIHRpdGxlOiB0aXRsZSxcclxuICAvLyAgICAgdGV4dDogdGV4dCxcclxuICAvLyAgICAgdHlwZTogJ3F1ZXN0aW9uJyxcclxuICAvLyAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAvLyAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPaycsXHJcbiAgLy8gICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAvLyAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6IHRydWUsXHJcbiAgLy8gICAgIGNvbmZpcm1CdXR0b25DbGFzczogJ2J0biBidG4tc3VjY2VzcydcclxuICAvLyAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gIC8vICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH0pXHJcbiAgLy8gfVxyXG5cclxuXHJcblxyXG5cclxuICAvLyBJbmZvcm1hdGlvblxyXG4gIEBPdXRwdXQoKSBtb2RlbE5vdGlmaWNhdGlvbkluZm8gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgc3dhbEluZm8obWVzc2FnZSkge1xyXG4gICAgU3dhbC5maXJlKHtcclxuICAgICAgdGl0bGU6IFwiSW5mb3JtYXRpb25cIixcclxuICAgICAgdGV4dDogbWVzc2FnZSxcclxuICAgICAgaWNvbjogJ2luZm8nLFxyXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiBmYWxzZSxcclxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPaycsXHJcbiAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6IHRydWUsXHJcbiAgICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tc3VjY2VzcycsXHJcbiAgICAgICAgLy8gY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1kYW5nZXInXHJcbiAgICAgIH1cclxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbE5vdGlmaWNhdGlvbkluZm8uZW1pdCgpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIC8vIE1vZGFsIHdpbmRvdyBmb3Igc3VjY2VzcyAoZXg6Q3JlYXRlZCBzdWNjZXNzZnVsL0RlbGV0ZWQgc3VjY2Vzc2Z1bClcclxuICBAT3V0cHV0KCkgbW9kZWxOb3RpZmljYXRpb25TdWNjZXNzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIHN3YWxTdWNjZXNzKG1lc3NhZ2UpIHtcclxuICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgIHRpdGxlOiAnU3VjY2Vzc2Z1bCEnLFxyXG4gICAgICB0ZXh0OiBtZXNzYWdlLFxyXG4gICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IGZhbHNlLFxyXG4gICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09rJyxcclxuICAgICAgc2hvd0Nsb3NlQnV0dG9uOiBmYWxzZSxcclxuICAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6IGZhbHNlLFxyXG4gICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICB0aGlzLm1vZGVsTm90aWZpY2F0aW9uU3VjY2Vzcy5lbWl0KCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyBNb2RhbCB3aW5kb3cgZm9yIFdhcm5pbmcgaW5mbyAoZXg6IENhbmNlbC9SZXNldC9UYWIgbmF2aWdhdGlvbilcclxuICBAT3V0cHV0KCkgbW9kZWxOb3RpZmljYXRpb25XYXJuaW5nID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIHN3YWxXYXJuaW5nKG1lc3NhZ2UpIHtcclxuICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgIHRpdGxlOiAnV2FybmluZyEnLFxyXG4gICAgICB0ZXh0OiBtZXNzYWdlLFxyXG4gICAgICBpY29uOiAnd2FybmluZycsXHJcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT2snLFxyXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcclxuICAgICAgcmV2ZXJzZUJ1dHRvbnM6IHRydWUsXHJcbiAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13YXJuaW5nJyxcclxuICAgICAgICBjb250YWluZXI6ICd3YXJuaW5nX2luZm8nLFxyXG4gICAgICB9LFxyXG4gICAgICAvLyBjdXN0b21DbGFzczogJ3dhcm5pbmdfaW5mbydcclxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbE5vdGlmaWNhdGlvbldhcm5pbmcuZW1pdCgpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIC8vIE1vZGFsIHdpbmRvdyBmb3IgV2FybmluZyBpbmZvIChleDogQ2FuY2VsL1Jlc2V0L1RhYiBuYXZpZ2F0aW9uKVxyXG4gIEBPdXRwdXQoKSBtb2RlbE5vdGlmaWNhdGlvbldhcm5pbmdBbGFybSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBzd2FsV2FybmluZ0FsYXJtKG1lc3NhZ2UpIHtcclxuICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgIHRpdGxlOiAnQXJlIHlvdSBzdXJlPycsXHJcbiAgICAgIGh0bWw6IG1lc3NhZ2UgKyAnJ1xyXG4gICAgICAgICsgJzxiciAvPjx0ZXh0YXJlYSAqbmdJZj1cImlucHV0RmllbGRcIiAjcmVtYXJrIHN0eWxlPVwiaGVpZ2h0OjUwcHghaW1wb3J0YW50XCIgaWQ9XCJyZW1hcmtcIiBjbGFzcz1cImZvcm0tY29udHJvbCBtLWlucHV0IGNvbC1tZC04IG10LTIgbXgtYXV0b1wiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInJlbWFya1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVtYXJrXCI+PC90ZXh0YXJlYT4nLFxyXG4gICAgICBpY29uOiAnd2FybmluZycsXHJcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT2snLFxyXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcclxuICAgICAgcmV2ZXJzZUJ1dHRvbnM6IHRydWUsXHJcbiAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13YXJuaW5nJyxcclxuICAgICAgICBjb250YWluZXI6ICd3YXJuaW5nX2luZm8nLFxyXG4gICAgICB9LFxyXG4gICAgICAvLyBjdXN0b21DbGFzczogJ3dhcm5pbmdfaW5mbydcclxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRGaWVsZCkge1xyXG4gICAgICAgICAgdGhpcy5yZW1hcmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtYXJrJylbJ3ZhbHVlJ107XHJcbiAgICAgICAgICB0aGlzLm1vZGVsTm90aWZpY2F0aW9uV2FybmluZ0FsYXJtLmVtaXQodGhpcy5yZW1hcmspO1xyXG4gICAgICAgIH0gZWxzZSB0aGlzLm1vZGVsTm90aWZpY2F0aW9uV2FybmluZ0FsYXJtLmVtaXQoKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG5cclxuICAvLyBNb2RhbCB3aW5kb3cgZm9yIGRlbGV0ZVxyXG4gIEBPdXRwdXQoKSBtb2RlbE5vdGlmaWNhdGlvbkRhbmdlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBzd2FsRGFuZ2VyKG1lc3NhZ2UpIHtcclxuICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgIHRpdGxlOiAnQXJlIHlvdSBzdXJlPycsXHJcbiAgICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT2snLFxyXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcclxuICAgICAgcmV2ZXJzZUJ1dHRvbnM6IHRydWUsXHJcbiAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1kYW5nZXInLFxyXG4gICAgICAgIC8vIGNhbmNlbEJ1dHRvbjogJ2J0biBidG4tZGFuZ2VyJ1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGNvbmZpcm1CdXR0b25DbGFzczogJ2J0biBidG4tZGFuZ2VyJ1xyXG4gICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICB0aGlzLm1vZGVsTm90aWZpY2F0aW9uRGFuZ2VyLmVtaXQoKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIE1vZGFsIHdpbmRvdyBmb3IgZmFpbGVkIHNjZW5hcmlvKGV4OiBOb3Qgc2F2ZWQpXHJcbiAgQE91dHB1dCgpIG1vZGVsTm90aWZpY2F0aW9uRXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgc3dhbEVycm9ySW5mbyhtZXNzYWdlKSB7XHJcbiAgICBTd2FsLmZpcmUoe1xyXG4gICAgICB0aXRsZTogXCJGYWlsZWQhXCIsXHJcbiAgICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICAgIGljb246ICdpbmZvJyxcclxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogZmFsc2UsXHJcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT2snLFxyXG4gICAgICBzaG93Q2xvc2VCdXR0b246IGZhbHNlLFxyXG4gICAgICAvLyBjb25maXJtQnV0dG9uQ2xhc3M6ICdidG4gYnRuLWRhbmdlcicsXHJcbiAgICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tZGFuZ2VyJyxcclxuICAgICAgICBjb250YWluZXI6ICdlcnJvcl9pbmZvJ1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGN1c3RvbUNsYXNzOiAnZXJyb3JfaW5mbydcclxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbE5vdGlmaWNhdGlvbkVycm9yLmVtaXQoKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG5cclxuICAvLyBNb2RhbCB3aW5kb3cgZm9yIGhlbHAgKGV4OiBGb3JtYXQgb2YgYWxhcm0gbWVzc2FnZSlcclxuICBAT3V0cHV0KCkgbW9kZWxOb3RpZmljYXRpb25BbGFybU1lc3NhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgc3dhbEFsYXJtTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICBTd2FsLmZpcmUoe1xyXG4gICAgICB0aXRsZTogJ0FsYXJtIE1lc3NhZ2UgRm9ybWF0IScsXHJcbiAgICAgIGh0bWw6IG1lc3NhZ2UsXHJcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IGZhbHNlLFxyXG4gICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiB0cnVlLFxyXG4gICAgICBhbGxvd0VudGVyS2V5OiB0cnVlLFxyXG4gICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICB0aGlzLm1vZGVsTm90aWZpY2F0aW9uQWxhcm1NZXNzYWdlLmVtaXQoKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIE1vZGFsIHdpbmRvdyBmb3IgaGVscCAoZXg6IEZvcm1hdCBvZiBhbGFybSBtZXNzYWdlKVxyXG4gIEBPdXRwdXQoKSBtb2RlbE5vdGlmaWNhdGlvbkNsZWFyTWVzc2FnZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBzd2FsQ2xlYXJNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgIHRpdGxlOiAnQ2xlYXIgTWVzc2FnZSBGb3JtYXQhJyxcclxuICAgICAgaHRtbDogbWVzc2FnZSxcclxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogZmFsc2UsXHJcbiAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6IHRydWUsXHJcbiAgICAgIGFsbG93RW50ZXJLZXk6IHRydWUsXHJcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgIHRoaXMubW9kZWxOb3RpZmljYXRpb25BbGFybU1lc3NhZ2UuZW1pdCgpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaGVscE1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgdGhpcy5zd2FsSGVscChtZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIHN3YWxIZWxwKG1lc3NhZ2UpIHtcclxuICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgLy90aW1lcjogNTAwMCxcclxuICAgICAgLy8gdGl0bGU6IFwiSW5mb3JtYXRpb25cIixcclxuICAgICAgaHRtbDogbWVzc2FnZSxcclxuICAgICAgLy9pY29uOiAnaW5mbycsXHJcbiAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcclxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogZmFsc2UsXHJcbiAgICAgIGZvY3VzQ29uZmlybTogZmFsc2UsXHJcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgIHRoaXMubW9kZWxOb3RpZmljYXRpb25JbmZvLmVtaXQoKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG59XHJcblxyXG4iXX0=