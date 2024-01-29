import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { UIModalNotificationPage } from './component/modal-notification/modal-notification';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { AssetDataPanelComponent } from './component/panel/asset-data-panel/asset-data-panel.component';
import { PanelBlankComponent } from './component/panel/panel-blank/panel-blank.component';
import { PanelDashboardComponent } from './component/panel/panel-dashboard/panel-dashboard.component';
import { PanelRemoveComponent } from './component/panel/panel-remove/panel-remove.component';
import { TablePanelComponent } from './component/panel/table-panel/table-panel.component';
import { NumberDirective } from './directive/number-validate/numbers-only.directive';
import { ScrollbarDirective } from './directive/scroll-bar/scroll-bar.directive';
import { GlobalComponent } from './global.component';
import { HyphenPipe } from './pipe/hypen/hyphen.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MyPaginatorIntl, syncDropdownNoRecordsFoundLocale } from './common/generic-export';
import { MatPaginatorIntl } from '@angular/material/paginator';
import * as i0 from "@angular/core";
var GlobalModule = /** @class */ (function () {
    function GlobalModule() {
    }
    GlobalModule.ɵmod = i0.ɵɵdefineNgModule({ type: GlobalModule });
    GlobalModule.ɵinj = i0.ɵɵdefineInjector({ factory: function GlobalModule_Factory(t) { return new (t || GlobalModule)(); }, providers: [
            {
                provide: MatPaginatorIntl,
                useValue: MyPaginatorIntl()
            }, {
                // Syncfusion dropdown - No records found localization
                provide: syncDropdownNoRecordsFoundLocale,
                useValue: syncDropdownNoRecordsFoundLocale()
            }
        ], imports: [[
                CommonModule,
                MatTooltipModule
            ]] });
    return GlobalModule;
}());
export { GlobalModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GlobalModule, { declarations: [GlobalComponent,
        UIModalNotificationPage,
        PageNotFoundComponent,
        AssetDataPanelComponent,
        PanelBlankComponent,
        PanelDashboardComponent,
        PanelRemoveComponent,
        TablePanelComponent,
        NumberDirective,
        ScrollbarDirective,
        HyphenPipe], imports: [CommonModule,
        MatTooltipModule], exports: [GlobalComponent,
        UIModalNotificationPage,
        PageNotFoundComponent,
        AssetDataPanelComponent,
        PanelBlankComponent,
        PanelDashboardComponent,
        PanelRemoveComponent,
        TablePanelComponent,
        NumberDirective,
        ScrollbarDirective,
        HyphenPipe] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GlobalModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    GlobalComponent,
                    UIModalNotificationPage,
                    PageNotFoundComponent,
                    AssetDataPanelComponent,
                    PanelBlankComponent,
                    PanelDashboardComponent,
                    PanelRemoveComponent,
                    TablePanelComponent,
                    NumberDirective,
                    ScrollbarDirective,
                    HyphenPipe
                ],
                imports: [
                    CommonModule,
                    MatTooltipModule
                ],
                exports: [
                    GlobalComponent,
                    UIModalNotificationPage,
                    PageNotFoundComponent,
                    AssetDataPanelComponent,
                    PanelBlankComponent,
                    PanelDashboardComponent,
                    PanelRemoveComponent,
                    TablePanelComponent,
                    NumberDirective,
                    ScrollbarDirective,
                    HyphenPipe
                ],
                providers: [
                    {
                        provide: MatPaginatorIntl,
                        useValue: MyPaginatorIntl()
                    }, {
                        // Syncfusion dropdown - No records found localization
                        provide: syncDropdownNoRecordsFoundLocale,
                        useValue: syncDropdownNoRecordsFoundLocale()
                    }
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsb2JhbC8iLCJzb3VyY2VzIjpbImxpYi9nbG9iYWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFHL0Q7SUFBQTtLQTJDNkI7b0RBQWhCLFlBQVk7MkdBQVosWUFBWSxtQkFaYjtZQUNSO2dCQUNFLE9BQU8sRUFBRSxnQkFBZ0I7Z0JBQ3pCLFFBQVEsRUFBRSxlQUFlLEVBQUU7YUFDNUIsRUFBRTtnQkFDRCxzREFBc0Q7Z0JBQ3RELE9BQU8sRUFBRSxnQ0FBZ0M7Z0JBQ3pDLFFBQVEsRUFBRSxnQ0FBZ0MsRUFBRTthQUM3QztTQUNGLFlBMUJRO2dCQUNQLFlBQVk7Z0JBQ1osZ0JBQWdCO2FBQ2pCO3VCQW5DSDtDQTZENkIsQUEzQzdCLElBMkM2QjtTQUFoQixZQUFZO3dGQUFaLFlBQVksbUJBekNyQixlQUFlO1FBQ2YsdUJBQXVCO1FBQ3ZCLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsVUFBVSxhQUdWLFlBQVk7UUFDWixnQkFBZ0IsYUFHaEIsZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixxQkFBcUI7UUFDckIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLFVBQVU7a0RBY0QsWUFBWTtjQTNDeEIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixlQUFlO29CQUNmLHVCQUF1QjtvQkFDdkIscUJBQXFCO29CQUNyQix1QkFBdUI7b0JBQ3ZCLG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUN2QixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsZUFBZTtvQkFDZixrQkFBa0I7b0JBQ2xCLFVBQVU7aUJBQ1g7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osZ0JBQWdCO2lCQUNqQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsZUFBZTtvQkFDZix1QkFBdUI7b0JBQ3ZCLHFCQUFxQjtvQkFDckIsdUJBQXVCO29CQUN2QixtQkFBbUI7b0JBQ25CLHVCQUF1QjtvQkFDdkIsb0JBQW9CO29CQUNwQixtQkFBbUI7b0JBQ25CLGVBQWU7b0JBQ2Ysa0JBQWtCO29CQUNsQixVQUFVO2lCQUNYO2dCQUNELFNBQVMsRUFBQztvQkFDUjt3QkFDRSxPQUFPLEVBQUUsZ0JBQWdCO3dCQUN6QixRQUFRLEVBQUUsZUFBZSxFQUFFO3FCQUM1QixFQUFFO3dCQUNELHNEQUFzRDt3QkFDdEQsT0FBTyxFQUFFLGdDQUFnQzt3QkFDekMsUUFBUSxFQUFFLGdDQUFnQyxFQUFFO3FCQUM3QztpQkFDRjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVJTW9kYWxOb3RpZmljYXRpb25QYWdlIH0gZnJvbSAnLi9jb21wb25lbnQvbW9kYWwtbm90aWZpY2F0aW9uL21vZGFsLW5vdGlmaWNhdGlvbic7XHJcbmltcG9ydCB7IFBhZ2VOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFzc2V0RGF0YVBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvcGFuZWwvYXNzZXQtZGF0YS1wYW5lbC9hc3NldC1kYXRhLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhbmVsQmxhbmtDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9wYW5lbC9wYW5lbC1ibGFuay9wYW5lbC1ibGFuay5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYW5lbERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L3BhbmVsL3BhbmVsLWRhc2hib2FyZC9wYW5lbC1kYXNoYm9hcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFuZWxSZW1vdmVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9wYW5lbC9wYW5lbC1yZW1vdmUvcGFuZWwtcmVtb3ZlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRhYmxlUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9wYW5lbC90YWJsZS1wYW5lbC90YWJsZS1wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOdW1iZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9udW1iZXItdmFsaWRhdGUvbnVtYmVycy1vbmx5LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFNjcm9sbGJhckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL3Njcm9sbC1iYXIvc2Nyb2xsLWJhci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb21wb25lbnQgfSBmcm9tICcuL2dsb2JhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIeXBoZW5QaXBlIH0gZnJvbSAnLi9waXBlL2h5cGVuL2h5cGhlbi5waXBlJztcclxuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xyXG5pbXBvcnQgeyBNeVBhZ2luYXRvckludGwsIHN5bmNEcm9wZG93bk5vUmVjb3Jkc0ZvdW5kTG9jYWxlIH0gZnJvbSAnLi9jb21tb24vZ2VuZXJpYy1leHBvcnQnO1xyXG5pbXBvcnQgeyBNYXRQYWdpbmF0b3JJbnRsIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgR2xvYmFsQ29tcG9uZW50LFxyXG4gICAgVUlNb2RhbE5vdGlmaWNhdGlvblBhZ2UsXHJcbiAgICBQYWdlTm90Rm91bmRDb21wb25lbnQsXHJcbiAgICBBc3NldERhdGFQYW5lbENvbXBvbmVudCxcclxuICAgIFBhbmVsQmxhbmtDb21wb25lbnQsXHJcbiAgICBQYW5lbERhc2hib2FyZENvbXBvbmVudCxcclxuICAgIFBhbmVsUmVtb3ZlQ29tcG9uZW50LFxyXG4gICAgVGFibGVQYW5lbENvbXBvbmVudCxcclxuICAgIE51bWJlckRpcmVjdGl2ZSxcclxuICAgIFNjcm9sbGJhckRpcmVjdGl2ZSxcclxuICAgIEh5cGhlblBpcGVcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1hdFRvb2x0aXBNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEdsb2JhbENvbXBvbmVudCxcclxuICAgIFVJTW9kYWxOb3RpZmljYXRpb25QYWdlLFxyXG4gICAgUGFnZU5vdEZvdW5kQ29tcG9uZW50LFxyXG4gICAgQXNzZXREYXRhUGFuZWxDb21wb25lbnQsXHJcbiAgICBQYW5lbEJsYW5rQ29tcG9uZW50LFxyXG4gICAgUGFuZWxEYXNoYm9hcmRDb21wb25lbnQsXHJcbiAgICBQYW5lbFJlbW92ZUNvbXBvbmVudCxcclxuICAgIFRhYmxlUGFuZWxDb21wb25lbnQsXHJcbiAgICBOdW1iZXJEaXJlY3RpdmUsXHJcbiAgICBTY3JvbGxiYXJEaXJlY3RpdmUsXHJcbiAgICBIeXBoZW5QaXBlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6W1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBNYXRQYWdpbmF0b3JJbnRsLFxyXG4gICAgICB1c2VWYWx1ZTogTXlQYWdpbmF0b3JJbnRsKClcclxuICAgIH0sIHtcclxuICAgICAgLy8gU3luY2Z1c2lvbiBkcm9wZG93biAtIE5vIHJlY29yZHMgZm91bmQgbG9jYWxpemF0aW9uXHJcbiAgICAgIHByb3ZpZGU6IHN5bmNEcm9wZG93bk5vUmVjb3Jkc0ZvdW5kTG9jYWxlLFxyXG4gICAgICB1c2VWYWx1ZTogc3luY0Ryb3Bkb3duTm9SZWNvcmRzRm91bmRMb2NhbGUoKVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2xvYmFsTW9kdWxlIHsgfVxyXG4iXX0=