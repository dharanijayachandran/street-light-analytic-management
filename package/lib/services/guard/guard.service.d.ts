import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as i0 from "@angular/core";
export interface ComponentCanDeactivate {
    canDeactivate: () => boolean | Observable<boolean>;
}
export declare class PendingChangesGuard implements CanDeactivate<ComponentCanDeactivate> {
    canDeactivate(component: ComponentCanDeactivate): boolean | Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDef<PendingChangesGuard>;
    static ɵprov: i0.ɵɵInjectableDef<PendingChangesGuard>;
}
