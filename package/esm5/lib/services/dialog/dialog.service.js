import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import * as i0 from "@angular/core";
var DialogService = /** @class */ (function () {
    function DialogService() {
        this.navigateAwaySelection$ = new Subject();
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
    DialogService.ɵprov = i0.ɵɵdefineInjectable({ token: DialogService, factory: DialogService.ɵfac, providedIn: 'root' });
    return DialogService;
}());
export { DialogService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DialogService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nbG9iYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZGlhbG9nL2RpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLElBQUksTUFBTSxhQUFhLENBQUM7O0FBRS9CO0lBQUE7UUFLRSwyQkFBc0IsR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQztLQWdDbkU7SUE5QkM7OztPQUdHO0lBRUgsb0VBQW9FO0lBQ3BFLG9DQUFZLEdBQVosVUFBYSxLQUFLLEVBQUUsSUFBSTtRQUF4QixpQkFzQkM7UUFyQkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDUixLQUFLLEVBQUUsZUFBZTtnQkFDdEIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsZ0JBQWdCLEVBQUUsSUFBSTtnQkFDdEIsaUJBQWlCLEVBQUUsSUFBSTtnQkFDdkIsZ0JBQWdCLEVBQUUsUUFBUTtnQkFDMUIsY0FBYyxFQUFFLElBQUk7Z0JBQ3BCLGVBQWUsRUFBRSxJQUFJO2dCQUNyQixXQUFXLEVBQUU7b0JBQ1gsYUFBYSxFQUFFLGlCQUFpQjtvQkFDaEMsU0FBUyxFQUFFLGNBQWM7aUJBQzFCO2FBQ0YsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07Z0JBQ2IsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO29CQUNoQixLQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN2QyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDdEI7WUFDSCxDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQzs4RUFoQ1UsYUFBYTt5REFBYixhQUFhLFdBQWIsYUFBYSxtQkFGWixNQUFNO3dCQUxwQjtDQXlDQyxBQXJDRCxJQXFDQztTQWxDWSxhQUFhO2tEQUFiLGFBQWE7Y0FIekIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWxvZ1NlcnZpY2Uge1xyXG5cclxuICBuYXZpZ2F0ZUF3YXlTZWxlY3Rpb24kOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQXNrIHVzZXIgdG8gY29uZmlybSBhbiBhY3Rpb24uIGBtZXNzYWdlYCBleHBsYWlucyB0aGUgYWN0aW9uIGFuZCBjaG9pY2VzLlxyXG4gICAqIFJldHVybnMgUHJtb3NlIHJlc29sdmluZyB0byBgdHJ1ZWA9Y29uZmlybSBvciBgZmFsc2VgPWNhbmNlbFxyXG4gICAqL1xyXG5cclxuICAvLyAgV2FybmluZyAtIHdoZW4gdW5zYXZlZCBjaGFuZ2VzIGRvbmUgYXNrIHVzZXIgdG8gY29uZmlybS9jYW5jZWwuIFxyXG4gIGFsZXJ0TWVzc2FnZSh0aXRsZSwgdGV4dCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmU/XCIsXHJcbiAgICAgICAgdGV4dDogdGV4dCxcclxuICAgICAgICBpY29uOiAnd2FybmluZycsXHJcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ09rJyxcclxuICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcclxuICAgICAgICByZXZlcnNlQnV0dG9uczogdHJ1ZSxcclxuICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWUsXHJcbiAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXdhcm5pbmcnLFxyXG4gICAgICAgICAgY29udGFpbmVyOiAnd2FybmluZ19pbmZvJyxcclxuICAgICAgICB9XHJcbiAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgIHRoaXMubmF2aWdhdGVBd2F5U2VsZWN0aW9uJC5uZXh0KHRydWUpO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG59XHJcbiJdfQ==