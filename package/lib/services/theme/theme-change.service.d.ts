import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ThemeChangeService {
    private http;
    constructor(http: HttpClient);
    getThemeNames(): Observable<[]>;
    static ɵfac: i0.ɵɵFactoryDef<ThemeChangeService>;
    static ɵprov: i0.ɵɵInjectableDef<ThemeChangeService>;
}
