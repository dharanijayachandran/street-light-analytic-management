import { OnInit, EventEmitter, ElementRef, ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AssetDataPanelComponent implements OnInit {
    private cdr;
    screenStatus: string;
    title: string;
    variant: boolean;
    noBody: boolean;
    noButton: boolean;
    bodyClass: boolean;
    footerClass: boolean;
    panelClass: boolean;
    collapse: boolean;
    panelFooter: any;
    expand: boolean;
    reload: boolean;
    remove: boolean;
    showFooter: boolean;
    ClicktoMaximize: ElementRef;
    ClicktoMinimize: ElementRef;
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    panelExpand(): void;
    removeLineChart: EventEmitter<string>;
    panelRemove(id: any): void;
    static ɵfac: i0.ɵɵFactoryDef<AssetDataPanelComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AssetDataPanelComponent, "app-asset-data-panel", never, { "title": "title"; "variant": "variant"; "noBody": "noBody"; "noButton": "noButton"; "bodyClass": "bodyClass"; "footerClass": "footerClass"; "panelClass": "panelClass"; }, { "removeLineChart": "removeLineChart"; }, never>;
}
