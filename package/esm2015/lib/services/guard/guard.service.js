import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class PendingChangesGuard {
    canDeactivate(component) {
        // if there are no pending changes, just allow deactivation; else confirm first
        return component.canDeactivate ? component.canDeactivate() : true;
        // NOTE: this warning message will only be shown when navigating elsewhere within your angular app;
        // when navigating away from your angular app, the browser will show a generic warning message
        // see http://stackoverflow.com/a/42207299/7307355
    }
}
PendingChangesGuard.ɵfac = function PendingChangesGuard_Factory(t) { return new (t || PendingChangesGuard)(); };
PendingChangesGuard.ɵprov = i0.ɵɵdefineInjectable({ token: PendingChangesGuard, factory: PendingChangesGuard.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PendingChangesGuard, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VhcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsb2JhbC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9ndWFyZC9ndWFyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBUTFDLE1BQU0sT0FBTyxtQkFBbUI7SUFFOUIsYUFBYSxDQUFDLFNBQWlDO1FBQzdDLCtFQUErRTtRQUMvRSxPQUFPLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2hFLG1HQUFtRztRQUNuRyw4RkFBOEY7UUFDOUYsa0RBQWtEO0lBQ3BELENBQUM7O3NGQVJRLG1CQUFtQjsyREFBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQjtrREFBbkIsbUJBQW1CO2NBRC9CLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW5EZWFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRDYW5EZWFjdGl2YXRlIHtcclxuICBjYW5EZWFjdGl2YXRlOiAoKSA9PiBib29sZWFuIHwgT2JzZXJ2YWJsZTxib29sZWFuPjtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGVuZGluZ0NoYW5nZXNHdWFyZCBpbXBsZW1lbnRzIENhbkRlYWN0aXZhdGU8Q29tcG9uZW50Q2FuRGVhY3RpdmF0ZT4ge1xyXG5cclxuICBjYW5EZWFjdGl2YXRlKGNvbXBvbmVudDogQ29tcG9uZW50Q2FuRGVhY3RpdmF0ZSk6IGJvb2xlYW4gfCBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIC8vIGlmIHRoZXJlIGFyZSBubyBwZW5kaW5nIGNoYW5nZXMsIGp1c3QgYWxsb3cgZGVhY3RpdmF0aW9uOyBlbHNlIGNvbmZpcm0gZmlyc3RcclxuICAgIHJldHVybiBjb21wb25lbnQuY2FuRGVhY3RpdmF0ZSA/IGNvbXBvbmVudC5jYW5EZWFjdGl2YXRlKCkgOiB0cnVlO1xyXG4gICAgICAvLyBOT1RFOiB0aGlzIHdhcm5pbmcgbWVzc2FnZSB3aWxsIG9ubHkgYmUgc2hvd24gd2hlbiBuYXZpZ2F0aW5nIGVsc2V3aGVyZSB3aXRoaW4geW91ciBhbmd1bGFyIGFwcDtcclxuICAgICAgLy8gd2hlbiBuYXZpZ2F0aW5nIGF3YXkgZnJvbSB5b3VyIGFuZ3VsYXIgYXBwLCB0aGUgYnJvd3NlciB3aWxsIHNob3cgYSBnZW5lcmljIHdhcm5pbmcgbWVzc2FnZVxyXG4gICAgICAvLyBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDIyMDcyOTkvNzMwNzM1NVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbiJdfQ==