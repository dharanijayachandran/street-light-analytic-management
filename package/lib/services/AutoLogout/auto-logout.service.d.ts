/// <reference types="node" />
import { OnDestroy } from "@angular/core";
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class AutoLogoutService implements OnDestroy {
    private router;
    currentSigOnTime: any;
    userId: string;
    inter: NodeJS.Timeout;
    getLastAction(): number;
    setLastAction(lastAction: number): void;
    constructor(router: Router);
    ngOnDestroy(): void;
    initListener(): void;
    reset(): void;
    initInterval(): void;
    getSignOnHistoryByUserId(userId: string): void;
    check(): void;
    logout(): void;
    static ɵfac: i0.ɵɵFactoryDef<AutoLogoutService>;
    static ɵprov: i0.ɵɵInjectableDef<AutoLogoutService>;
}
