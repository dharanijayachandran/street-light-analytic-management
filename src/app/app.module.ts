import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AccumulationChartAllModule, CategoryService, ChartAllModule, ChartModule, ColumnSeriesService, DateTimeService, LegendService, LineSeriesService, MultiColoredLineSeriesService, RangeColumnSeriesService, RangeNavigatorAllModule, StackingColumnSeriesService,BarSeriesService, AccumulationTooltipService, AccumulationLegendService} from '@syncfusion/ej2-angular-charts';
import { CircularGaugeAllModule, CircularGaugeModule, GaugeTooltipService } from '@syncfusion/ej2-angular-circulargauge';
import { DropDownListModule, DropDownTreeModule } from '@syncfusion/ej2-angular-dropdowns';
import { ExcelExportService, FilterService, GridAllModule, GridModule, GroupService, PageService, PdfExportService, SortService, ToolbarService, VirtualScrollService } from '@syncfusion/ej2-angular-grids';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { CalendarModule } from 'angular-calendar';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { GridsterModule } from 'angular-gridster2';
import { AngularResizeEventModule } from 'angular-resize-event';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { GlobalModule } from 'global';
import { MatTableExporterModule } from 'mat-table-exporter';
import { NvD3Module } from 'ng2-nvd3';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { DeviceDetectorService } from 'ngx-device-detector';
import { DndModule } from 'ngx-drag-drop';
import { NgxGaugeModule } from 'ngx-gauge';
import { HighlightJsModule } from 'ngx-highlight-js';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxTagsInputModule } from 'ngx-tags-input';
import { ToastrModule } from 'ngx-toastr';
import { TrendModule } from 'ngx-trend';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusIndicatorComponent } from './pages/Monitoring Dashboard/widgets/status-indicator/status-indicator.component';
import { DigitalStatusIndicatorComponent } from './pages/Monitoring Dashboard/widgets/digital-status-indicator/digital-status-indicator.component';
import { MonitoringDashboardComponent } from './pages/Monitoring Dashboard/monitoring-dashboard/monitoring-dashboard.component';
import { UsageDashboardComponent } from './pages/Usage Dashboard/usage-dashboard/usage-dashboard.component';
import { AccumulationChartModule ,PieSeriesService,AccumulationDataLabelService } from '@syncfusion/ej2-angular-charts';
import { ExpensesDashboardComponent } from './pages/Expenses Dashboard/expenses-dashboard/expenses-dashboard.component';
import { DashboardFormComponent } from './pages/dashboard-form/dashboard-form.component';
import { MainInterceptor } from './main-interceptor';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

@NgModule({
  declarations: [
    AppComponent,
    StatusIndicatorComponent,
    DigitalStatusIndicatorComponent,
    MonitoringDashboardComponent,
    UsageDashboardComponent,
    ExpensesDashboardComponent,
    DashboardFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
    MatCommonModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    NgxTagsInputModule,
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyC5gJ5x8Yw7qP_DqvNq3IdZi2WUSiDjskk' }),
    ReactiveFormsModule,
    HttpClientModule,
    MatSortModule,
    TrendModule,
    MatToolbarModule,
    MatTreeModule,
    MatMenuModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    SlimLoadingBarModule,
    AngularDualListBoxModule,
    NvD3Module,
    NgxChartsModule,
    NgxDatatableModule,
    HighlightJsModule,
    MatRadioModule,
    MatTooltipModule,
    CalendarModule,
    MatSlideToggleModule,
    DndModule,
    TreeViewModule,
    NgxGaugeModule,
    MatTableExporterModule,
    DashboardLayoutModule,
    NgxPaginationModule,
    DragDropModule,
    AngularMultiSelectModule,
    ChartModule,
    ChartAllModule,
    RangeNavigatorAllModule,
    AccumulationChartAllModule,
    CircularGaugeModule, CircularGaugeAllModule, GridModule,
    GridAllModule,
    AngularResizeEventModule,
    GridsterModule,
    DropDownTreeModule,
    DropDownListModule,
    GlobalModule,
    AppRoutingModule,
    AccumulationChartModule,
    CdkTableModule,
    CdkTreeModule
  ],
  providers: [
    PieSeriesService,AccumulationDataLabelService,AccumulationLegendService,BarSeriesService,CategoryService,ColumnSeriesService,AccumulationTooltipService,
    DeviceDetectorService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MainInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
