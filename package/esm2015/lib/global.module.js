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
export class GlobalModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsb2JhbC8iLCJzb3VyY2VzIjpbImxpYi9nbG9iYWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUE4Qy9ELE1BQU0sT0FBTyxZQUFZOztnREFBWixZQUFZO3VHQUFaLFlBQVksbUJBWmI7UUFDUjtZQUNFLE9BQU8sRUFBRSxnQkFBZ0I7WUFDekIsUUFBUSxFQUFFLGVBQWUsRUFBRTtTQUM1QixFQUFFO1lBQ0Qsc0RBQXNEO1lBQ3RELE9BQU8sRUFBRSxnQ0FBZ0M7WUFDekMsUUFBUSxFQUFFLGdDQUFnQyxFQUFFO1NBQzdDO0tBQ0YsWUExQlE7WUFDUCxZQUFZO1lBQ1osZ0JBQWdCO1NBQ2pCO3dGQTBCVSxZQUFZLG1CQXpDckIsZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixxQkFBcUI7UUFDckIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLFVBQVUsYUFHVixZQUFZO1FBQ1osZ0JBQWdCLGFBR2hCLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixVQUFVO2tEQWNELFlBQVk7Y0EzQ3hCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osZUFBZTtvQkFDZix1QkFBdUI7b0JBQ3ZCLHFCQUFxQjtvQkFDckIsdUJBQXVCO29CQUN2QixtQkFBbUI7b0JBQ25CLHVCQUF1QjtvQkFDdkIsb0JBQW9CO29CQUNwQixtQkFBbUI7b0JBQ25CLGVBQWU7b0JBQ2Ysa0JBQWtCO29CQUNsQixVQUFVO2lCQUNYO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGdCQUFnQjtpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGVBQWU7b0JBQ2YsdUJBQXVCO29CQUN2QixxQkFBcUI7b0JBQ3JCLHVCQUF1QjtvQkFDdkIsbUJBQW1CO29CQUNuQix1QkFBdUI7b0JBQ3ZCLG9CQUFvQjtvQkFDcEIsbUJBQW1CO29CQUNuQixlQUFlO29CQUNmLGtCQUFrQjtvQkFDbEIsVUFBVTtpQkFDWDtnQkFDRCxTQUFTLEVBQUM7b0JBQ1I7d0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjt3QkFDekIsUUFBUSxFQUFFLGVBQWUsRUFBRTtxQkFDNUIsRUFBRTt3QkFDRCxzREFBc0Q7d0JBQ3RELE9BQU8sRUFBRSxnQ0FBZ0M7d0JBQ3pDLFFBQVEsRUFBRSxnQ0FBZ0MsRUFBRTtxQkFDN0M7aUJBQ0Y7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVSU1vZGFsTm90aWZpY2F0aW9uUGFnZSB9IGZyb20gJy4vY29tcG9uZW50L21vZGFsLW5vdGlmaWNhdGlvbi9tb2RhbC1ub3RpZmljYXRpb24nO1xyXG5pbXBvcnQgeyBQYWdlTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBc3NldERhdGFQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L3BhbmVsL2Fzc2V0LWRhdGEtcGFuZWwvYXNzZXQtZGF0YS1wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYW5lbEJsYW5rQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvcGFuZWwvcGFuZWwtYmxhbmsvcGFuZWwtYmxhbmsuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFuZWxEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9wYW5lbC9wYW5lbC1kYXNoYm9hcmQvcGFuZWwtZGFzaGJvYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhbmVsUmVtb3ZlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvcGFuZWwvcGFuZWwtcmVtb3ZlL3BhbmVsLXJlbW92ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYWJsZVBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvcGFuZWwvdGFibGUtcGFuZWwvdGFibGUtcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnVtYmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUvbnVtYmVyLXZhbGlkYXRlL251bWJlcnMtb25seS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBTY3JvbGxiYXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9zY3JvbGwtYmFyL3Njcm9sbC1iYXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgR2xvYmFsQ29tcG9uZW50IH0gZnJvbSAnLi9nbG9iYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSHlwaGVuUGlwZSB9IGZyb20gJy4vcGlwZS9oeXBlbi9oeXBoZW4ucGlwZSc7XHJcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcclxuaW1wb3J0IHsgTXlQYWdpbmF0b3JJbnRsLCBzeW5jRHJvcGRvd25Ob1JlY29yZHNGb3VuZExvY2FsZSB9IGZyb20gJy4vY29tbW9uL2dlbmVyaWMtZXhwb3J0JztcclxuaW1wb3J0IHsgTWF0UGFnaW5hdG9ySW50bCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEdsb2JhbENvbXBvbmVudCxcclxuICAgIFVJTW9kYWxOb3RpZmljYXRpb25QYWdlLFxyXG4gICAgUGFnZU5vdEZvdW5kQ29tcG9uZW50LFxyXG4gICAgQXNzZXREYXRhUGFuZWxDb21wb25lbnQsXHJcbiAgICBQYW5lbEJsYW5rQ29tcG9uZW50LFxyXG4gICAgUGFuZWxEYXNoYm9hcmRDb21wb25lbnQsXHJcbiAgICBQYW5lbFJlbW92ZUNvbXBvbmVudCxcclxuICAgIFRhYmxlUGFuZWxDb21wb25lbnQsXHJcbiAgICBOdW1iZXJEaXJlY3RpdmUsXHJcbiAgICBTY3JvbGxiYXJEaXJlY3RpdmUsXHJcbiAgICBIeXBoZW5QaXBlXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNYXRUb29sdGlwTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBHbG9iYWxDb21wb25lbnQsXHJcbiAgICBVSU1vZGFsTm90aWZpY2F0aW9uUGFnZSxcclxuICAgIFBhZ2VOb3RGb3VuZENvbXBvbmVudCxcclxuICAgIEFzc2V0RGF0YVBhbmVsQ29tcG9uZW50LFxyXG4gICAgUGFuZWxCbGFua0NvbXBvbmVudCxcclxuICAgIFBhbmVsRGFzaGJvYXJkQ29tcG9uZW50LFxyXG4gICAgUGFuZWxSZW1vdmVDb21wb25lbnQsXHJcbiAgICBUYWJsZVBhbmVsQ29tcG9uZW50LFxyXG4gICAgTnVtYmVyRGlyZWN0aXZlLFxyXG4gICAgU2Nyb2xsYmFyRGlyZWN0aXZlLFxyXG4gICAgSHlwaGVuUGlwZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOltcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTWF0UGFnaW5hdG9ySW50bCxcclxuICAgICAgdXNlVmFsdWU6IE15UGFnaW5hdG9ySW50bCgpXHJcbiAgICB9LCB7XHJcbiAgICAgIC8vIFN5bmNmdXNpb24gZHJvcGRvd24gLSBObyByZWNvcmRzIGZvdW5kIGxvY2FsaXphdGlvblxyXG4gICAgICBwcm92aWRlOiBzeW5jRHJvcGRvd25Ob1JlY29yZHNGb3VuZExvY2FsZSxcclxuICAgICAgdXNlVmFsdWU6IHN5bmNEcm9wZG93bk5vUmVjb3Jkc0ZvdW5kTG9jYWxlKClcclxuICAgIH1cclxuICBdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEdsb2JhbE1vZHVsZSB7IH1cclxuIl19