import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
var ShareddataService = /** @class */ (function () {
    function ShareddataService() {
        this.messageSource = new Subject();
        this.subject = new Subject();
        // currentMessage = this.messageSource.asObservable();
        this.categorySubject = new Subject();
        this.rackAssetSubject = new Subject();
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
    ShareddataService.ɵprov = i0.ɵɵdefineInjectable({ token: ShareddataService, factory: ShareddataService.ɵfac, providedIn: 'root' });
    return ShareddataService;
}());
export { ShareddataService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ShareddataService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2xvYmFsLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3NoYXJlZC9zaGFyZWRkYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQStCLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFNUQ7SUFLRTtRQUVRLGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUN2QyxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNoQyxzREFBc0Q7UUFDOUMsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRWhDLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFQekIsQ0FBQztJQVNqQix5Q0FBYSxHQUFiLFVBQWMsT0FBZ0I7UUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUVELDZDQUFpQixHQUFqQjtRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQsbUNBQU8sR0FBUCxVQUFRLElBQVM7UUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsbUNBQU8sR0FBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLElBQVM7UUFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELHdDQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsd0NBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzlDLENBQUM7c0ZBekNVLGlCQUFpQjs2REFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFGaEIsTUFBTTs0QkFKcEI7Q0FnREMsQUE3Q0QsSUE2Q0M7U0ExQ1ksaUJBQWlCO2tEQUFqQixpQkFBaUI7Y0FIN0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZGRhdGFTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgcHJpdmF0ZSBtZXNzYWdlU291cmNlID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICBwcml2YXRlIHN1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xyXG4gIC8vIGN1cnJlbnRNZXNzYWdlID0gdGhpcy5tZXNzYWdlU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIHByaXZhdGUgY2F0ZWdvcnlTdWJqZWN0ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHJpdmF0ZSByYWNrQXNzZXRTdWJqZWN0ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgY2hhbmdlTWVzc2FnZShtZXNzYWdlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm1lc3NhZ2VTb3VyY2UubmV4dChtZXNzYWdlKVxyXG4gIH1cclxuXHJcbiAgZ2V0Q2hhbmdlZE1lc3NhZ2UoKTpPYnNlcnZhYmxlPGJvb2xlYW4+e1xyXG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZVNvdXJjZS5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIHNldERhdGEoZGF0YTogYW55KXtcclxuICAgIHRoaXMuc3ViamVjdC5uZXh0KGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YSgpe1xyXG4gICAgcmV0dXJuIHRoaXMuc3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIHNldENhdGVnb3J5KGRhdGE6IGFueSl7XHJcbiAgICB0aGlzLmNhdGVnb3J5U3ViamVjdC5uZXh0KGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2F0ZWdvcnkoKXtcclxuICAgIHJldHVybiB0aGlzLmNhdGVnb3J5U3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIHNldFJhY2tBc3NldChkYXRhKXtcclxuICAgIHRoaXMucmFja0Fzc2V0U3ViamVjdC5uZXh0KGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmFja0Fzc2V0KCl7XHJcbiAgICByZXR1cm4gdGhpcy5yYWNrQXNzZXRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=