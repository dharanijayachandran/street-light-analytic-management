import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
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
    AutoLogoutService.ɵfac = function AutoLogoutService_Factory(t) { return new (t || AutoLogoutService)(i0.ɵɵinject(i1.Router)); };
    AutoLogoutService.ɵprov = i0.ɵɵdefineInjectable({ token: AutoLogoutService, factory: AutoLogoutService.ɵfac });
    return AutoLogoutService;
}());
export { AutoLogoutService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AutoLogoutService, [{
        type: Injectable
    }], function () { return [{ type: i1.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1sb2dvdXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsb2JhbC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9BdXRvTG9nb3V0L2F1dG8tbG9nb3V0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQzs7O0FBRXRELElBQU0seUJBQXlCLEdBQUcsQ0FBQyxDQUFBLENBQUMsVUFBVTtBQUM5QyxJQUFNLGNBQWMsR0FBRyxLQUFLLENBQUEsQ0FBQyxRQUFRO0FBQ3JDLElBQU0sU0FBUyxHQUFHLFlBQVksQ0FBQztBQUMvQjtJQVlFLDJCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNoQyxnQkFBZ0I7UUFDaEIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QiwwREFBMEQ7SUFDNUQsQ0FBQztJQVpNLHlDQUFhLEdBQXBCO1FBQ0UsT0FBTyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDTSx5Q0FBYSxHQUFwQixVQUFxQixVQUFrQjtRQUNyQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBU0QsdUNBQVcsR0FBWDtRQUNFLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELHdDQUFZLEdBQVo7UUFBQSxpQkFPQztRQU5DLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFFLEVBQVosQ0FBWSxDQUFDLENBQUM7UUFDNUQsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxLQUFLLEVBQUUsRUFBWixDQUFZLENBQUMsQ0FBQztRQUNoRSxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssRUFBRSxFQUFaLENBQVksQ0FBQyxDQUFDO1FBQy9ELFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFFLEVBQVosQ0FBWSxDQUFDLENBQUM7UUFDOUQsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxLQUFLLEVBQUUsRUFBWixDQUFZLENBQUMsQ0FBQztRQUM1RCxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssRUFBRSxFQUFaLENBQVksQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxpQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsd0NBQVksR0FBWjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUM7WUFDdkIsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxvREFBd0IsR0FBeEIsVUFBeUIsTUFBYztRQUNyQzs7Ozs7OztZQU9JO0lBQ04sQ0FBQztJQUNELGlDQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN0QyxJQUFNLFFBQVEsR0FBRyxVQUFVLEdBQUcseUJBQXlCLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNwRSxJQUFNLElBQUksR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQzVCLElBQU0sU0FBUyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ3BGLElBQUksU0FBUyxFQUFFO2dCQUNiLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUN6QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2QsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDNUI7U0FDRjtJQUNILENBQUM7SUFHRCxrQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DOzs7Ozs7Ozs7OztVQVdFO0lBQ0osQ0FBQztzRkFsRlUsaUJBQWlCOzZEQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCOzRCQU45QjtDQXlGQyxBQXBGRCxJQW9GQztTQW5GWSxpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQUQ3QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuY29uc3QgTUlOVVRFU19VTklUTF9BVVRPX0xPR09VVCA9IDEgLy8gaW4gbWluc1xyXG5jb25zdCBDSEVDS19JTlRFUlZBTCA9IDE1MDAwIC8vIGluIG1zXHJcbmNvbnN0IFNUT1JFX0tFWSA9ICdsYXN0QWN0aW9uJztcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0b0xvZ291dFNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIGN1cnJlbnRTaWdPblRpbWU6IGFueTtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBpbnRlcjogTm9kZUpTLlRpbWVvdXQ7XHJcbiAgcHVibGljIGdldExhc3RBY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXN0QWN0aW9uXCIpKTtcclxuICB9XHJcbiAgcHVibGljIHNldExhc3RBY3Rpb24obGFzdEFjdGlvbjogbnVtYmVyKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTVE9SRV9LRVksIGxhc3RBY3Rpb24udG9TdHJpbmcoKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAvLyB0aGlzLmNoZWNrKCk7XHJcbiAgICAvL3RoaXMuaW5pdExpc3RlbmVyKCk7XHJcbiAgICAvL3RoaXMuaW5pdEludGVydmFsKCk7XHJcbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTVE9SRV9LRVksIERhdGUubm93KCkudG9TdHJpbmcoKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcik7XHJcbiAgfVxyXG5cclxuICBpbml0TGlzdGVuZXIoKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5yZXNldCgpKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4gdGhpcy5yZXNldCgpKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB0aGlzLnJlc2V0KCkpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKCkgPT4gdGhpcy5yZXNldCgpKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB0aGlzLnJlc2V0KCkpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsICgpID0+IHRoaXMucmVzZXQoKSk7XHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuc2V0TGFzdEFjdGlvbihEYXRlLm5vdygpKTtcclxuICB9XHJcblxyXG4gIGluaXRJbnRlcnZhbCgpIHtcclxuICAgIHRoaXMuaW50ZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2hlY2soKTtcclxuICAgIH0sIENIRUNLX0lOVEVSVkFMKTtcclxuICB9XHJcbiAgZ2V0U2lnbk9uSGlzdG9yeUJ5VXNlcklkKHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICAvKiB0aGlzLmxvZ291dFNlcnZpY2UuZ2V0U2lnbk9uSGlzdG9yeUJ5VXNlcklkKHVzZXJJZCkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgIHRoaXMuY3VycmVudFNpZ09uVGltZSA9IHJlcztcclxuICAgICAgLy8gXHJcbiAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICkgKi9cclxuICB9XHJcbiAgY2hlY2soKSB7XHJcbiAgICB0aGlzLnVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgIGxldCBsYXN0QWN0aW9uID0gdGhpcy5nZXRMYXN0QWN0aW9uKCk7XHJcbiAgICBjb25zdCB0aW1lbGVmdCA9IGxhc3RBY3Rpb24gKyBNSU5VVEVTX1VOSVRMX0FVVE9fTE9HT1VUICogNjAgKiAxMDAwO1xyXG4gICAgY29uc3QgZGlmZiA9IHRpbWVsZWZ0IC0gbm93O1xyXG4gICAgY29uc3QgaXNUaW1lb3V0ID0gZGlmZiA8IDA7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50U2lnT25UaW1lICE9IG51bGwgfHwgdGhpcy51c2VySWQgIT0gdW5kZWZpbmVkIHx8IHRoaXMudXNlcklkICE9IG51bGwpIHtcclxuICAgICAgaWYgKGlzVGltZW91dCkge1xyXG4gICAgICAgIGFsZXJ0KFwic2Vzc2lvbiBleHBpcmVkXCIpO1xyXG4gICAgICAgIHRoaXMubG9nb3V0KCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycnXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBsb2dvdXQoKSB7XHJcbiAgICB0aGlzLnVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgLyogdGhpcy5sb2dvdXRTZXJ2aWNlLmxvZ291dCh0aGlzLnVzZXJJZCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwYWdlbWVudScpO1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VySWQnKTtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlck5hbWUnKTtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycnXSk7XHJcbiAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgXHJcbiAgICApO1xyXG4gIH0gKi9cclxuICB9XHJcbn1cclxuIl19