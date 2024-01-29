import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
    PendingChangesGuard.ɵprov = i0.ɵɵdefineInjectable({ token: PendingChangesGuard, factory: PendingChangesGuard.ɵfac });
    return PendingChangesGuard;
}());
export { PendingChangesGuard };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PendingChangesGuard, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VhcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsb2JhbC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9ndWFyZC9ndWFyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBTzFDO0lBQUE7S0FXQztJQVJDLDJDQUFhLEdBQWIsVUFBYyxTQUFpQztRQUM3QywrRUFBK0U7UUFDL0UsT0FBTyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNoRSxtR0FBbUc7UUFDbkcsOEZBQThGO1FBQzlGLGtEQUFrRDtJQUNwRCxDQUFDOzBGQVJRLG1CQUFtQjsrREFBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQjs4QkFUaEM7Q0FtQkMsQUFYRCxJQVdDO1NBVlksbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FEL0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbkRlYWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudENhbkRlYWN0aXZhdGUge1xyXG4gIGNhbkRlYWN0aXZhdGU6ICgpID0+IGJvb2xlYW4gfCBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQZW5kaW5nQ2hhbmdlc0d1YXJkIGltcGxlbWVudHMgQ2FuRGVhY3RpdmF0ZTxDb21wb25lbnRDYW5EZWFjdGl2YXRlPiB7XHJcblxyXG4gIGNhbkRlYWN0aXZhdGUoY29tcG9uZW50OiBDb21wb25lbnRDYW5EZWFjdGl2YXRlKTogYm9vbGVhbiB8IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgLy8gaWYgdGhlcmUgYXJlIG5vIHBlbmRpbmcgY2hhbmdlcywganVzdCBhbGxvdyBkZWFjdGl2YXRpb247IGVsc2UgY29uZmlybSBmaXJzdFxyXG4gICAgcmV0dXJuIGNvbXBvbmVudC5jYW5EZWFjdGl2YXRlID8gY29tcG9uZW50LmNhbkRlYWN0aXZhdGUoKSA6IHRydWU7XHJcbiAgICAgIC8vIE5PVEU6IHRoaXMgd2FybmluZyBtZXNzYWdlIHdpbGwgb25seSBiZSBzaG93biB3aGVuIG5hdmlnYXRpbmcgZWxzZXdoZXJlIHdpdGhpbiB5b3VyIGFuZ3VsYXIgYXBwO1xyXG4gICAgICAvLyB3aGVuIG5hdmlnYXRpbmcgYXdheSBmcm9tIHlvdXIgYW5ndWxhciBhcHAsIHRoZSBicm93c2VyIHdpbGwgc2hvdyBhIGdlbmVyaWMgd2FybmluZyBtZXNzYWdlXHJcbiAgICAgIC8vIHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80MjIwNzI5OS83MzA3MzU1XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuIl19