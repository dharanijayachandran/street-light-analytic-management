import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ThemeChangeService {
    constructor(http) {
        this.http = http;
    }
    getThemeNames() {
        return null;
    }
}
ThemeChangeService.ɵfac = function ThemeChangeService_Factory(t) { return new (t || ThemeChangeService)(i0.ɵɵinject(i1.HttpClient)); };
ThemeChangeService.ɵprov = i0.ɵɵdefineInjectable({ token: ThemeChangeService, factory: ThemeChangeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ThemeChangeService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtY2hhbmdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nbG9iYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdGhlbWUvdGhlbWUtY2hhbmdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTTNDLE1BQU0sT0FBTyxrQkFBa0I7SUFFN0IsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFFekMsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7b0ZBTlUsa0JBQWtCOzBEQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCLG1CQUZqQixNQUFNO2tEQUVQLGtCQUFrQjtjQUg5QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRoZW1lQ2hhbmdlU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIGdldFRoZW1lTmFtZXMoKTogT2JzZXJ2YWJsZTxbXT4ge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiJdfQ==