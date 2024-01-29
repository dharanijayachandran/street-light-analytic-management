import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ShareddataService {
    constructor();
    private messageSource;
    private subject;
    private categorySubject;
    private rackAssetSubject;
    changeMessage(message: boolean): void;
    getChangedMessage(): Observable<boolean>;
    setData(data: any): void;
    getData(): Observable<unknown>;
    setCategory(data: any): void;
    getCategory(): Observable<unknown>;
    setRackAsset(data: any): void;
    getRackAsset(): Observable<unknown>;
    static ɵfac: i0.ɵɵFactoryDef<ShareddataService>;
    static ɵprov: i0.ɵɵInjectableDef<ShareddataService>;
}
