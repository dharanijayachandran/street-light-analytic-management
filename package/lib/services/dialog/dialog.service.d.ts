import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class DialogService {
    navigateAwaySelection$: Subject<boolean>;
    /**
     * Ask user to confirm an action. `message` explains the action and choices.
     * Returns Prmose resolving to `true`=confirm or `false`=cancel
     */
    alertMessage(title: any, text: any): Promise<any>;
    static ɵfac: i0.ɵɵFactoryDef<DialogService>;
    static ɵprov: i0.ɵɵInjectableDef<DialogService>;
}
