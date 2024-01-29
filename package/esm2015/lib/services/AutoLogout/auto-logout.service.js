import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const MINUTES_UNITL_AUTO_LOGOUT = 1; // in mins
const CHECK_INTERVAL = 15000; // in ms
const STORE_KEY = 'lastAction';
export class AutoLogoutService {
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
AutoLogoutService.ɵfac = function AutoLogoutService_Factory(t) { return new (t || AutoLogoutService)(i0.ɵɵinject(i1.Router)); };
AutoLogoutService.ɵprov = i0.ɵɵdefineInjectable({ token: AutoLogoutService, factory: AutoLogoutService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AutoLogoutService, [{
        type: Injectable
    }], function () { return [{ type: i1.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1sb2dvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsb2JhbC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9BdXRvTG9nb3V0L2F1dG8tbG9nb3V0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQzs7O0FBRXRELE1BQU0seUJBQXlCLEdBQUcsQ0FBQyxDQUFBLENBQUMsVUFBVTtBQUM5QyxNQUFNLGNBQWMsR0FBRyxLQUFLLENBQUEsQ0FBQyxRQUFRO0FBQ3JDLE1BQU0sU0FBUyxHQUFHLFlBQVksQ0FBQztBQUUvQixNQUFNLE9BQU8saUJBQWlCO0lBVzVCLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2hDLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLDBEQUEwRDtJQUM1RCxDQUFDO0lBWk0sYUFBYTtRQUNsQixPQUFPLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNNLGFBQWEsQ0FBQyxVQUFrQjtRQUNyQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBU0QsV0FBVztRQUNULGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELFlBQVk7UUFDVixRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUM1RCxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNoRSxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUMvRCxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUM5RCxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUM1RCxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFDRCx3QkFBd0IsQ0FBQyxNQUFjO1FBQ3JDOzs7Ozs7O1lBT0k7SUFDTixDQUFDO0lBQ0QsS0FBSztRQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3RDLE1BQU0sUUFBUSxHQUFHLFVBQVUsR0FBRyx5QkFBeUIsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3BFLE1BQU0sSUFBSSxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDNUIsTUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDcEYsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDZCxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM1QjtTQUNGO0lBQ0gsQ0FBQztJQUdELE1BQU07UUFDSixJQUFJLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0M7Ozs7Ozs7Ozs7O1VBV0U7SUFDSixDQUFDOztrRkFsRlUsaUJBQWlCO3lEQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCO2tEQUFqQixpQkFBaUI7Y0FEN0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmNvbnN0IE1JTlVURVNfVU5JVExfQVVUT19MT0dPVVQgPSAxIC8vIGluIG1pbnNcclxuY29uc3QgQ0hFQ0tfSU5URVJWQUwgPSAxNTAwMCAvLyBpbiBtc1xyXG5jb25zdCBTVE9SRV9LRVkgPSAnbGFzdEFjdGlvbic7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dG9Mb2dvdXRTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBjdXJyZW50U2lnT25UaW1lOiBhbnk7XHJcbiAgdXNlcklkOiBzdHJpbmc7XHJcbiAgaW50ZXI6IE5vZGVKUy5UaW1lb3V0O1xyXG4gIHB1YmxpYyBnZXRMYXN0QWN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGFzdEFjdGlvblwiKSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBzZXRMYXN0QWN0aW9uKGxhc3RBY3Rpb246IG51bWJlcikge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RPUkVfS0VZLCBsYXN0QWN0aW9uLnRvU3RyaW5nKCkpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgLy8gdGhpcy5jaGVjaygpO1xyXG4gICAgLy90aGlzLmluaXRMaXN0ZW5lcigpO1xyXG4gICAgLy90aGlzLmluaXRJbnRlcnZhbCgpO1xyXG4gICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RPUkVfS0VZLCBEYXRlLm5vdygpLnRvU3RyaW5nKCkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXIpO1xyXG4gIH1cclxuXHJcbiAgaW5pdExpc3RlbmVyKCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMucmVzZXQoKSk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHRoaXMucmVzZXQoKSk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4gdGhpcy5yZXNldCgpKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsICgpID0+IHRoaXMucmVzZXQoKSk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4gdGhpcy5yZXNldCgpKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoKSA9PiB0aGlzLnJlc2V0KCkpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLnNldExhc3RBY3Rpb24oRGF0ZS5ub3coKSk7XHJcbiAgfVxyXG5cclxuICBpbml0SW50ZXJ2YWwoKSB7XHJcbiAgICB0aGlzLmludGVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNoZWNrKCk7XHJcbiAgICB9LCBDSEVDS19JTlRFUlZBTCk7XHJcbiAgfVxyXG4gIGdldFNpZ25Pbkhpc3RvcnlCeVVzZXJJZCh1c2VySWQ6IHN0cmluZykge1xyXG4gICAgLyogdGhpcy5sb2dvdXRTZXJ2aWNlLmdldFNpZ25Pbkhpc3RvcnlCeVVzZXJJZCh1c2VySWQpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICB0aGlzLmN1cnJlbnRTaWdPblRpbWUgPSByZXM7XHJcbiAgICAgIC8vIFxyXG4gICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICApICovXHJcbiAgfVxyXG4gIGNoZWNrKCkge1xyXG4gICAgdGhpcy51c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XHJcbiAgICBsZXQgbGFzdEFjdGlvbiA9IHRoaXMuZ2V0TGFzdEFjdGlvbigpO1xyXG4gICAgY29uc3QgdGltZWxlZnQgPSBsYXN0QWN0aW9uICsgTUlOVVRFU19VTklUTF9BVVRPX0xPR09VVCAqIDYwICogMTAwMDtcclxuICAgIGNvbnN0IGRpZmYgPSB0aW1lbGVmdCAtIG5vdztcclxuICAgIGNvbnN0IGlzVGltZW91dCA9IGRpZmYgPCAwO1xyXG4gICAgaWYgKHRoaXMuY3VycmVudFNpZ09uVGltZSAhPSBudWxsIHx8IHRoaXMudXNlcklkICE9IHVuZGVmaW5lZCB8fCB0aGlzLnVzZXJJZCAhPSBudWxsKSB7XHJcbiAgICAgIGlmIChpc1RpbWVvdXQpIHtcclxuICAgICAgICBhbGVydChcInNlc3Npb24gZXhwaXJlZFwiKTtcclxuICAgICAgICB0aGlzLmxvZ291dCgpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnJ10pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgbG9nb3V0KCkge1xyXG4gICAgdGhpcy51c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuICAgIC8qIHRoaXMubG9nb3V0U2VydmljZS5sb2dvdXQodGhpcy51c2VySWQpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncGFnZW1lbnUnKTtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcklkJyk7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJOYW1lJyk7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnJ10pO1xyXG4gICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgKTtcclxuICB9ICovXHJcbiAgfVxyXG59XHJcbiJdfQ==