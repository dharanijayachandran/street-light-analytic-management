import { AfterViewInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PanelDashboardComponent implements AfterViewInit {
    panelFooter: any;
    title: string;
    variant: boolean;
    noBody: boolean;
    noButton: boolean;
    bodyClass: boolean;
    footerClass: boolean;
    panelClass: boolean;
    collapse: boolean;
    expand: boolean;
    reload: boolean;
    remove: boolean;
    showFooter: boolean;
    ngAfterViewInit(): void;
    panelExpand(): void;
    panelRemove(): void;
    static ɵfac: i0.ɵɵFactoryDef<PanelDashboardComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PanelDashboardComponent, "app-panel-dashboard", never, { "title": "title"; "variant": "variant"; "noBody": "noBody"; "noButton": "noButton"; "bodyClass": "bodyClass"; "footerClass": "footerClass"; "panelClass": "panelClass"; }, {}, never>;
}
