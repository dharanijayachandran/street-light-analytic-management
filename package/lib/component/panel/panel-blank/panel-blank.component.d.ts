import { AfterViewInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
export declare class PanelBlankComponent implements AfterViewInit {
    private modalService;
    panelFooter: any;
    modelNotification: any;
    variant: boolean;
    noBody: boolean;
    noButton: boolean;
    bodyClass: boolean;
    footerClass: boolean;
    panelClass: boolean;
    expand: boolean;
    reload: boolean;
    collapse: boolean;
    remove: boolean;
    closeResult: string;
    showFooter: boolean;
    lineWidgetForm: boolean;
    constructor(modalService: NgbModal, document: any);
    ngAfterViewInit(): void;
    panelExpand(): void;
    panelReload(): void;
    panelCollapse(): void;
    panelRemove(): void;
    openFormModel(content: any, test: string): void;
    private getDismissReason;
    static ɵfac: i0.ɵɵFactoryDef<PanelBlankComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PanelBlankComponent, "app-panel-blank", never, {}, {}, never>;
}