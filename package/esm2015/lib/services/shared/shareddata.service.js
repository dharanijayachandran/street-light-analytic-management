import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class ShareddataService {
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
ShareddataService.ɵprov = i0.ɵɵdefineInjectable({ token: ShareddataService, factory: ShareddataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ShareddataService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2xvYmFsLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3NoYXJlZC9zaGFyZWRkYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQStCLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLNUQsTUFBTSxPQUFPLGlCQUFpQjtJQUU1QjtRQUVRLGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUN2QyxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNoQyxzREFBc0Q7UUFDOUMsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRWhDLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFQekIsQ0FBQztJQVNqQixhQUFhLENBQUMsT0FBZ0I7UUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUVELGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQsT0FBTyxDQUFDLElBQVM7UUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQVM7UUFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFJO1FBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzlDLENBQUM7O2tGQXpDVSxpQkFBaUI7eURBQWpCLGlCQUFpQixXQUFqQixpQkFBaUIsbUJBRmhCLE1BQU07a0RBRVAsaUJBQWlCO2NBSDdCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRkYXRhU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIHByaXZhdGUgbWVzc2FnZVNvdXJjZSA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgcHJpdmF0ZSBzdWJqZWN0ID0gbmV3IFN1YmplY3QoKTtcclxuICAvLyBjdXJyZW50TWVzc2FnZSA9IHRoaXMubWVzc2FnZVNvdXJjZS5hc09ic2VydmFibGUoKTtcclxuICBwcml2YXRlIGNhdGVnb3J5U3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHByaXZhdGUgcmFja0Fzc2V0U3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIGNoYW5nZU1lc3NhZ2UobWVzc2FnZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5tZXNzYWdlU291cmNlLm5leHQobWVzc2FnZSlcclxuICB9XHJcblxyXG4gIGdldENoYW5nZWRNZXNzYWdlKCk6T2JzZXJ2YWJsZTxib29sZWFuPntcclxuICAgIHJldHVybiB0aGlzLm1lc3NhZ2VTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBzZXREYXRhKGRhdGE6IGFueSl7XHJcbiAgICB0aGlzLnN1YmplY3QubmV4dChkYXRhKTtcclxuICB9XHJcblxyXG4gIGdldERhdGEoKXtcclxuICAgIHJldHVybiB0aGlzLnN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBzZXRDYXRlZ29yeShkYXRhOiBhbnkpe1xyXG4gICAgdGhpcy5jYXRlZ29yeVN1YmplY3QubmV4dChkYXRhKTtcclxuICB9XHJcblxyXG4gIGdldENhdGVnb3J5KCl7XHJcbiAgICByZXR1cm4gdGhpcy5jYXRlZ29yeVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBzZXRSYWNrQXNzZXQoZGF0YSl7XHJcbiAgICB0aGlzLnJhY2tBc3NldFN1YmplY3QubmV4dChkYXRhKTtcclxuICB9XHJcblxyXG4gIGdldFJhY2tBc3NldCgpe1xyXG4gICAgcmV0dXJuIHRoaXMucmFja0Fzc2V0U3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcbn1cclxuIl19