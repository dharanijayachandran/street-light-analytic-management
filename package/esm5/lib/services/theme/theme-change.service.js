import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var ThemeChangeService = /** @class */ (function () {
    function ThemeChangeService(http) {
        this.http = http;
    }
    ThemeChangeService.prototype.getThemeNames = function () {
        return null;
    };
    ThemeChangeService.ɵfac = function ThemeChangeService_Factory(t) { return new (t || ThemeChangeService)(i0.ɵɵinject(i1.HttpClient)); };
    ThemeChangeService.ɵprov = i0.ɵɵdefineInjectable({ token: ThemeChangeService, factory: ThemeChangeService.ɵfac, providedIn: 'root' });
    return ThemeChangeService;
}());
export { ThemeChangeService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ThemeChangeService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtY2hhbmdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nbG9iYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdGhlbWUvdGhlbWUtY2hhbmdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBRzNDO0lBS0UsNEJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDO0lBRXpDLDBDQUFhLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7d0ZBTlUsa0JBQWtCOzhEQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCLG1CQUZqQixNQUFNOzZCQUxwQjtDQWNDLEFBVkQsSUFVQztTQVBZLGtCQUFrQjtrREFBbEIsa0JBQWtCO2NBSDlCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGhlbWVDaGFuZ2VTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgZ2V0VGhlbWVOYW1lcygpOiBPYnNlcnZhYmxlPFtdPiB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIl19