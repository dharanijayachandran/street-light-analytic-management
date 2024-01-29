import { Component, OnInit, ViewChild } from "@angular/core";
import { AccumulationChart, AccumulationChartComponent,  getElement,  IAccTextRenderEventArgs, IMouseEventArgs, Index, indexFinder, IPointRenderEventArgs } from "@syncfusion/ej2-angular-charts";
import { StreetLightService } from "../../services/street-light.service";
import {  Subscription } from 'rxjs';
import 'rxjs/add/observable/interval';
import { TablePanelComponent } from "global/lib/component/panel/table-panel/table-panel.component";
import { ChartComponent } from '@syncfusion/ej2-angular-charts';
@Component({
  selector: "street-light-analytic-management-usage-dashboard",
  templateUrl: "./usage-dashboard.component.html",
  styleUrls: ["./usage-dashboard.component.css"],
})
export class UsageDashboardComponent implements OnInit{
  constructor(private streetLightService: StreetLightService) { }
  noRecordFoundToday:boolean=false;
  noRecordFoundYesterday:boolean=false;
  noRecordFoundCurrentWeek:boolean=false;
  noRecordFoundLastWeek:boolean=false;
  noRecordFoundCurrentMonth:boolean=false;
  noRecordFoundLastMonth:boolean=false;
  noRecordFoundCurrentYear:boolean=false;
  noRecordFoundLastYear:boolean=false;
  showLoaderImageForToday:boolean=true;
  showLoaderImageForYesterday:boolean=true;
  showLoaderImageForCurrentWeek:boolean=true;
  showLoaderImageForLastWeek:boolean=true;
  showLoaderImageForCurrentMonth:boolean=true;
  showLoaderImageForLastMonth:boolean=true;
  showLoaderImageForCurrentYear:boolean=true;
  showLoaderImageForLastYear:boolean=true;
  pieChartEnergyConsumptionToday: any;
  pieChartEnergyConsumptionYesterday:any;
  donutChartEnergyConsumptionCurrentWeek:any;
  donutChartEnergyConsumptionLastWeek:any;
  donutChartEnergyConsumptionCurrentMonth:any;
  donutChartEnergyConsumptionLastMonth:any[];
  barChartEnergyConsumptionCurrentYear: any[];
  barChartEnergyConsumptionLastYear: any[];

  subscribe: Subscription;
  public pieChartLabel: Object;
  timezone: string;
  public enableBorderOnMouseMove: boolean;
  public enableSmartLabel: boolean=false;
  public tooltip: Object = {
    enable: true,
    format: '${point.x} : <b>${point.tooltip}</b>'
  };
  public todayData:any;
  public yesterdayData:any;
  public currentWeekData:any;
  public lastWeekData:any;
  public currentMonthData:any;
  public lastMonthData:any;
   lightThemeContent =
    '<div id="back" style="cursor:pointer;padding:3px;width:30px; height:30px;">' +
    '<img src="https://ej2.syncfusion.com/angular/demos/assets/chart/images/back.png" id="back" />';
   darkThemeContent =
    '<div id= "white" style="cursor:pointer;padding:3px;width:30px; height:30px;">' +
    '<img src="https://ej2.syncfusion.com/angular/demos/assets/chart/images/back.white.png" id="back" /><div>';
  public chartArea: Object = {
    border: {
      width: 0,
    },
  };
  palette = [
    "#f17577",
    "#F6B53F",
    "#6FAAB0",
    "#facacb",
    "#a0f587",
    "#949b92",
    "#f1d7a3",
    "#a3f1c5",
    "#ad70df",  
    "#405d5e",
    "#5e4056",
    "#dfb870",
    "#bfcae3",
    "#57152d",
    "#f0d74a",
    "#f04ac4",
    "#f6dcfc",
    "#1c4520",
    "#1c4245",
    "#9bc7a0"
  ];
  public pointRender(args: IPointRenderEventArgs): void {
    args.fill = this.palette[args.point.index];
  };
  width = '200%';
  height = '200%';
  legendSettings = {
    visible: true
  };
  public primaryXAxis: Object = {
    valueType: "Category",
    majorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    lineStyle: { width: 1 },
  };
  public primaryYAxis: Object = {
    majorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    lineStyle: { width: 1 },
  };
  public marker: Object;
  @ViewChild('chartEct')
  public chartEct: AccumulationChartComponent | AccumulationChart;

  @ViewChild('panelHeaderEct')
  public panelHeaderEct: TablePanelComponent;

  @ViewChild('chartEcy')
  public chartEcy: AccumulationChartComponent | AccumulationChart;

  @ViewChild('panelHeaderEcy')
  public panelHeaderEcy: TablePanelComponent;

  @ViewChild('chartEccw')
  public chartEccw: AccumulationChartComponent | AccumulationChart;

  @ViewChild('panelHeaderEccw')
  public panelHeaderEccw: TablePanelComponent;

  @ViewChild('chartEclw')
  public chartEclw: AccumulationChartComponent | AccumulationChart;

  @ViewChild('panelHeaderEclw')
  public panelHeaderEclw: TablePanelComponent;

  @ViewChild('chartEccm')
  public chartEccm: AccumulationChartComponent | AccumulationChart;

  @ViewChild('panelHeaderEccm')
  public panelHeaderEccm: TablePanelComponent;

  @ViewChild('chartEclm')
  public chartEclm: AccumulationChartComponent | AccumulationChart;

  @ViewChild('panelHeaderEclm')
  public panelHeaderEclm: TablePanelComponent;

  @ViewChild('chartEccy')
  public chartEccy: ChartComponent;

  @ViewChild('panelHeaderEccy')
  public panelHeaderEccy: TablePanelComponent;

  @ViewChild('chartEcly')
  public chartEcly: ChartComponent;

  @ViewChild('panelHeaderEcly')
  public panelHeaderEcly: TablePanelComponent;
  ngOnInit(): void {
    this.pieChartLabel = {
      visible: true,
      border: { width: 1, color: "orange" },
      position: "Outside",
      connectorStyle: { length: '15%' },
      name: "nameAndValueWithEng"
    };
    this.marker = {
      dataLabel: {
        visible: true,
        position: "outside",
        border: { width: 2, color: "orange" },
        name: "valueWithEng",
      },
    };
    this.enableBorderOnMouseMove = false;
    this.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone; 
    this.getEnergyConsumptionForToday();
    this.getEnergyConsumptionForYesterday();
    this.getEnergyConsumptionForCurrentWeek();
    this.getEnergyConsumptionForLastWeek();
    this.getEnergyConsumptionForCurrentMonth();
    this.getEnergyConsumptionForLastMonth();
    this.getEnergyConsumptionForCurrentYear();
    this.getEnergyConsumptionForLastYear();
  }
  getEnergyConsumptionForToday(){
    let beId = parseInt(sessionStorage.getItem("beId"));
    this.showLoaderImageForToday = true;
    this.streetLightService.getEnergyConsumptionForToday(beId, this.timezone).subscribe(res => {
      this.showLoaderImageForToday = false;
      if (null != res && res.every(item => item['value'] == 0)) {
        this.noRecordFoundToday = true;
        } else if(null != res) {
          this.noRecordFoundToday = false;
          this.todayData ={ res };
          this.pieChartEnergyConsumptionToday = this.todayData.res;
        }
      },error => {
        console.log(error.message);
        this.showLoaderImageForToday = false;
      });
  }
  getEnergyConsumptionForYesterday(){
    let beId = parseInt(sessionStorage.getItem("beId"));
    this.showLoaderImageForYesterday = true;
    this.streetLightService.getEnergyConsumptionForYesterday(beId, this.timezone).subscribe((res) => {
    this.showLoaderImageForYesterday = false;
        if (null != res && res.every(item => item['value'] == 0)) {
          this.noRecordFoundYesterday = true;
          } else if(null != res) {
            this.noRecordFoundYesterday= false;
            this.yesterdayData ={ res };
            this.pieChartEnergyConsumptionYesterday = this.yesterdayData.res;
          }
      }, error => {
        console.log(error.message);
        this.showLoaderImageForYesterday = false;
      });
  }
  getEnergyConsumptionForCurrentWeek(){
    let beId = parseInt(sessionStorage.getItem("beId"));
    this.showLoaderImageForCurrentWeek = true;
    this.streetLightService.getDataForCurrentWeekConsumption(beId, this.timezone).subscribe((res) => {
        this.showLoaderImageForCurrentWeek = false;
        if (null!= res && res.every(item => item['value'] == 0)) {
          this.noRecordFoundCurrentWeek = true;
          } else if(null != res) {
            this.noRecordFoundCurrentWeek= false;
            this.currentWeekData ={ res };
           this.donutChartEnergyConsumptionCurrentWeek = this.currentWeekData.res;
          }
      }, error => {
        console.log(error.message);
        this.showLoaderImageForCurrentWeek = false;
      });
  }
  getEnergyConsumptionForLastWeek(){
    let beId = parseInt(sessionStorage.getItem("beId"));
    this.showLoaderImageForLastWeek = true;
    this.streetLightService.getDataForLastWeekConsumption(beId, this.timezone).subscribe((res) => {
        this.showLoaderImageForLastWeek= false;
        if (null!= res && res.every(item => item['value'] == 0)) {
          this.noRecordFoundLastWeek = true;
          } else if(null != res) {
          this.noRecordFoundLastWeek= false;
          this.lastWeekData={ res };
          this.donutChartEnergyConsumptionLastWeek = this.lastWeekData.res;
          }
      }, error => {
        console.log(error.message);
        this.showLoaderImageForLastWeek = false;
      });
  }
  getEnergyConsumptionForCurrentMonth(){
    let beId = parseInt(sessionStorage.getItem("beId"));
    this.showLoaderImageForCurrentMonth = true;
    this.streetLightService.getDataForCurrentMonthConsumption(beId, this.timezone).subscribe((res) => {
        this.showLoaderImageForCurrentMonth= false;
        if (null!= res && res.every(item => item['value'] == 0)) {
          this.noRecordFoundCurrentMonth = true;
          } else if(null != res) {
          this.noRecordFoundCurrentMonth= false;
          this.currentMonthData={ res };
          this.donutChartEnergyConsumptionCurrentMonth = this.currentMonthData.res;
          }
      }, error => {
        console.log(error.message);
        this.showLoaderImageForCurrentMonth = false;
      });
  }
  getEnergyConsumptionForLastMonth(){
    let beId = parseInt(sessionStorage.getItem("beId"));
    this.showLoaderImageForLastMonth = true;
    this.streetLightService.getDataForLastMonthConsumption(beId, this.timezone).subscribe((res) => {
        this.showLoaderImageForLastMonth= false;
        if (null!= res && res.every(item => item['value'] == 0)) {
          this.noRecordFoundLastMonth = true;
          } else if(null != res) {
            this.lastMonthData={ res };
            this.donutChartEnergyConsumptionLastMonth = this.lastMonthData.res;
            this.noRecordFoundLastMonth= false;
          }
      }, error => {
        console.log(error.message);
        this.showLoaderImageForLastMonth = false;
      });
  }
  getEnergyConsumptionForCurrentYear() {
    let beId = parseInt(sessionStorage.getItem("beId"));
     this.streetLightService.getDataForCurrentYearconsumption(beId, this.timezone).subscribe((res) => {
     this.showLoaderImageForCurrentYear = false;
        if (null != res && res.every(item => item['value'] == 0)) {
          this.noRecordFoundCurrentYear = true;
        } else {
          this.noRecordFoundCurrentYear = false;
        if (null != res) {
          this.barChartEnergyConsumptionCurrentYear = res;
          if (null != this.chartEccy && null != this.chartEccy.series[0]) {
            this.chartEccy.series[0].dataSource = res;
          }
        }
      }
      }, error => {
        console.log(error.message);
        this.showLoaderImageForCurrentYear = false;
      }); 
  }
  getEnergyConsumptionForLastYear() {
    let beId = parseInt(sessionStorage.getItem("beId"));
    this.streetLightService.getDataForLastYearCosumption(beId, this.timezone).subscribe((res) => {
        this.showLoaderImageForLastYear = false;
        if (null != res && res.every(item => item['value'] == 0)) {
          this.noRecordFoundLastYear = true;
        } else {
          this.noRecordFoundLastYear = false;
        if (null != res) {
          this.barChartEnergyConsumptionLastYear = res;
          if (null != this.chartEcly && null != this.chartEcly.series[0]) {
            this.chartEcly.series[0].dataSource = res;
          }
        }
      }
      }, error => {
        console.log(error.message);
        this.showLoaderImageForLastYear = false;
      });  
  }
  public onTextRender(args: IAccTextRenderEventArgs): void {
    args.text = args.point.x + " " + args.point.y + "";
    args.text = args.point.x + " ";
  }
  /* Energy Consumption - Today  START*/
  onChartMouseClickect(args: IMouseEventArgs): void {
    let index: Index = indexFinder(args.target);
    let i = index.point;
    if (args.target.indexOf("back") > -1) {
    document.getElementById("ect").style.cursor = 'pointer';
      this.isparentect = true;
      this.chartInitSettingect();
      this.chartEct.refresh();
    }
    if (this.isparentect && this.pieChartEnergyConsumptionToday[i].children.length>0 &&  document.getElementById("ect_Series_" + index.series + "_Point_" + index.point)) {
    document.getElementById("ect").style.cursor = 'default';
      this.isparentect = false;
      this.chartEct.annotations = [{
          content:
          this.chartEct.theme === "HighContrast" ? this.darkThemeContent: this.lightThemeContent,
          region: "Series",
          x: "50%",
          y: "50%"
        }];
       this.chartEct.series[0].innerRadius = "30%";
       for (let i = 0; i < this.todayData.res.length; i++) {
       if(null != this.todayData.res[i].children && this.todayData.res[i].children.length > 0){
        switch (index.point) {
          case i:
            this.chartEct.series[0].dataSource = this.todayData.res[i].children;
            this.setDrillDownFieldect();
            break;
        }}
      } 
      this.chartEct.refresh();
    }
  }
setDrillDownFieldect() {
  this.chartEct.series[0].xName = "name";
  this.chartEct.series[0].yName = "value";
}
 chartInitSettingect() {
  this.chartEct.series[0].dataSource = this.todayData.res;
  this.chartEct.series[0].xName = "name";
  this.chartEct.series[0].yName = "value";
  this.chartEct.annotations[0].content = null;
  this.chartEct.series[0].innerRadius = "0%";
  /* Energy Consumption - Today END*/
}

/* Energy Consumption - Yesterday  START*/
 onChartMouseClickecy(args: IMouseEventArgs): void {
  let index: Index = indexFinder(args.target);
  let i = index.point;
  if (args.target.indexOf("back") > -1) {
    document.getElementById("ecy").style.cursor = 'pointer';
    this.isparentecy = true;
  this.chartInitSettingecy();
  this.chartEcy.refresh();
  }
  if (this.isparentecy && this.pieChartEnergyConsumptionYesterday[i].children.length > 0 && document.getElementById("ecy_Series_" + index.series + "_Point_" + index.point)) {
    document.getElementById("ecy").style.cursor = 'default';
    this.isparentecy = false;
    this.chartEcy.annotations = [
      {
        content:
        this.chartEcy.theme === "HighContrast" ? this.darkThemeContent: this.lightThemeContent,
        region: "Series",
        x: "50%",
        y: "50%"
      }];
    this.chartEcy.series[0].innerRadius = "30%";
    for (let i = 0; i < this.yesterdayData.res.length; i++) {
      if(null != this.yesterdayData.res[i].children && this.yesterdayData.res[i].children.length > 0){
      switch (index.point) {
        case i:
          this.chartEcy.series[0].dataSource = this.yesterdayData.res[i].children;
          this.setDrillDownFieldecy();
          break;
      }}
    }
    this.chartEcy.refresh();
   }
  }
setDrillDownFieldecy() {
this.chartEcy.series[0].xName = "name";
this.chartEcy.series[0].yName = "value";
}
chartInitSettingecy() {
this.chartEcy.series[0].dataSource = this.yesterdayData.res;
this.chartEcy.series[0].xName = "name";
this.chartEcy.series[0].yName = "value";
this.chartEcy.annotations[0].content = null;
this.chartEcy.series[0].innerRadius = "0%";
} 
/* Energy Consumption - Current WEEK*/
 onChartMouseClickeccw(args: IMouseEventArgs): void {
  let index: Index = indexFinder(args.target);
  let i = index.point;
  if (args.target.indexOf("back") > -1) {
    document.getElementById("eccw").style.cursor = 'pointer';
    this.isparenteccw = true;
    this.chartInitSettingeccw();
    this.chartEccw.refresh();
    }
  if (this.isparenteccw && this.donutChartEnergyConsumptionCurrentWeek[i].children.length > 0 && document.getElementById("ecy_Series_" + index.series + "_Point_" + index.point)) {
    document.getElementById("eccw").style.cursor = 'default';
    this.isparenteccw = false;
    this.chartEccw.annotations = [
      {
        content:
        this.chartEccw.theme === "HighContrast" ? this.darkThemeContent: this.lightThemeContent,
        region: "Series",
        x: "50%",
        y: "50%"
      }];
    this.chartEccw.series[0].innerRadius = "40%";
    for (let i = 0; i < this.currentWeekData.res.length; i++) {
      if(null != this.currentWeekData.res[i].children && this.currentWeekData.res[i].children.length > 0){
      switch (index.point) {
        case i:
          this.chartEccw.series[0].dataSource = this.currentWeekData.res[i].children;
          this.setDrillDownFieldeccw();
          break;
      }}
    }
    this.chartEccw.refresh();
  }
 }
setDrillDownFieldeccw() {
this.chartEccw.series[0].xName = "name";
this.chartEccw.series[0].yName = "value";
}
chartInitSettingeccw() {
this.chartEccw.series[0].dataSource = this.currentWeekData.res;
this.chartEccw.series[0].xName = "name";
this.chartEccw.series[0].yName = "value";
this.chartEccw.annotations[0].content = null;
this.chartEccw.series[0].innerRadius = "40%";
} 
/* Energy Consumption - Last WEEK*/
 onChartMouseClickeclw(args: IMouseEventArgs): void {
  let index: Index = indexFinder(args.target);
  let i = index.point;
  if (args.target.indexOf("back") > -1) {
    document.getElementById("eclw").style.cursor = 'pointer';
    this.isparenteclw = true;
    this.chartInitSettingeclw();
    this.chartEclw.refresh();
    }
  if (this.isparenteclw && this.donutChartEnergyConsumptionLastWeek[i].children.length > 0 && document.getElementById("ecy_Series_" + index.series + "_Point_" + index.point)) {
    document.getElementById("eclw").style.cursor = 'default';
    this.isparenteclw = false;
    this.chartEclw.annotations = [
      {
        content:
        this.chartEclw.theme === "HighContrast" ? this.darkThemeContent: this.lightThemeContent,
        region: "Series",
        x: "50%",
        y: "50%"
      }];
    this.chartEclw.series[0].innerRadius = "40%";
    for (let i = 0; i < this.lastWeekData.res.length; i++) {
     if(null != this.lastWeekData.res[i].children && this.lastWeekData.res[i].children.length > 0){
      switch (index.point) {
        case i:
          this.chartEclw.series[0].dataSource = this.lastWeekData.res[i].children;
          this.setDrillDownFieldeclw();
          break;
      }}
    }
    this.chartEclw.refresh();
}

 }
setDrillDownFieldeclw() {
this.chartEclw.series[0].xName = "name";
this.chartEclw.series[0].yName = "value";
}
chartInitSettingeclw() {
this.chartEclw.series[0].dataSource = this.lastWeekData.res;
this.chartEclw.series[0].xName = "name";
this.chartEclw.series[0].yName = "value";
this.chartEclw.annotations[0].content = null;
this.chartEclw.series[0].innerRadius = "40%";
}
/* Energy Consumption - Current MONTH*/
 onChartMouseClickeccm(args: IMouseEventArgs): void {
  let index: Index = indexFinder(args.target);
  let i = index.point;
  if (args.target.indexOf("back") > -1) {
    document.getElementById("eccm").style.cursor = 'pointer';
    this.isparenteccm = true;
    this.chartInitSettingeccm();
    this.chartEccm.refresh();
    }
  if (this.isparenteccm && this.donutChartEnergyConsumptionCurrentMonth[i].children.length > 0 && document.getElementById("ecy_Series_" + index.series + "_Point_" + index.point)) {
    document.getElementById("eccm").style.cursor = 'default';
    this.isparenteccm = false;
    this.chartEccm.annotations = [
      {
        content:
        this.chartEccm.theme === "HighContrast" ? this.darkThemeContent: this.lightThemeContent,
        region: "Series",
        x: "50%",
        y: "50%"
      }];
    this.chartEccm.series[0].innerRadius = "40%";
    for (let i = 0; i < this.currentMonthData.res.length; i++) {
     if(null != this.currentMonthData.res[i].children && this.currentMonthData.res[i].children.length > 0){
      switch (index.point) {
        case i:
          this.chartEccm.series[0].dataSource = this.currentMonthData.res[i].children;
          this.setDrillDownFieldeccm();
          break;
      }}
    }
    this.chartEccm.refresh();
 }  
 }
setDrillDownFieldeccm() {
this.chartEccm.series[0].xName = "name";
this.chartEccm.series[0].yName = "value";
}
chartInitSettingeccm() {
this.chartEccm.series[0].dataSource = this.currentMonthData.res;
this.chartEccm.series[0].xName = "name";
this.chartEccm.series[0].yName = "value";
this.chartEccm.annotations[0].content = null;
this.chartEccm.series[0].innerRadius = "40%";
} 

/* Energy Consumption - Last MONTH*/
 onChartMouseClickeclm(args: IMouseEventArgs): void {
  let index: Index = indexFinder(args.target);
  let i = index.point;
  if (args.target.indexOf("back") > -1) {
    document.getElementById("eclm").style.cursor = 'pointer';
    this.isparenteclm = true;
    this.chartInitSettingeclm();
    this.chartEclm.refresh();
    }
  if (this.isparenteclm && this.donutChartEnergyConsumptionLastMonth[i].children.length > 0 && document.getElementById("ecy_Series_" + index.series + "_Point_" + index.point)) {
    document.getElementById("eclm").style.cursor = 'default';
    this.isparenteclm = false;
    this.chartEclm.annotations = [
      {
        content:
        this.chartEclm.theme === "HighContrast" ? this.darkThemeContent: this.lightThemeContent,
        region: "Series",
        x: "50%",
        y: "50%"
      }];
    this.chartEclm.series[0].innerRadius = "40%";
    for (let i = 0; i < this.lastMonthData.res.length; i++) {
     if(null != this.lastMonthData.res[i].children && this.lastMonthData.res[i].children.length > 0){
      switch (index.point) {
        case i:
          this.chartEclm.series[0].dataSource = this.lastMonthData.res[i].children;
          this.setDrillDownFieldeclm();
          break;
      }}
    }
    this.chartEclm.refresh();
}
 }
setDrillDownFieldeclm() {
this.chartEclm.series[0].xName = "name";
this.chartEclm.series[0].yName = "value";
}
chartInitSettingeclm() {
this.chartEclm.series[0].dataSource = this.lastMonthData.res;
this.chartEclm.series[0].xName = "name";
this.chartEclm.series[0].yName = "value";
this.chartEclm.annotations[0].content = null;
this.chartEclm.series[0].innerRadius = "40%";
} 
maxOrMinScreenEct() {
  if (this.panelHeaderEct.expand == true) {
    /*  chartId.requestFullscreen(); */
    this.chartEct.height = '100%';

  } else {
    // document.exitFullscreen();
    this.chartEct.height = 'auto';
  }
}
maxOrMinScreenEcy() {
  if (this.panelHeaderEcy.expand == true) {
    //  chartId.requestFullscreen();
    this.chartEcy.height = '100%';
  } else {
    //   document.exitFullscreen();
    this.chartEcy.height = 'auto';
  }
}
maxOrMinScreenEccw() {
  if (this.panelHeaderEccw.expand == true) {
    // chartId.requestFullscreen();
    this.chartEccw.height = '100%';
  } else {
    //  document.exitFullscreen();
    this.chartEccw.height = 'auto';
  }
}
maxOrMinScreenEclw() {
  if (this.panelHeaderEclw.expand == true) {
    /*  chartId.requestFullscreen(); */
    this.chartEclw.height = '100%';
  } else {
    /* document.exitFullscreen(); */
    this.chartEclw.height = 'auto';
  }
}
maxOrMinScreenEccm() {
  if (this.panelHeaderEccm.expand == true) {
    // chartId.requestFullscreen();
    this.chartEccm.height = '100%';
  } else {
    //  document.exitFullscreen();
    this.chartEccm.height = 'auto';
  }
}
maxOrMinScreenEclm() {
  if (this.panelHeaderEclm.expand == true) {
    //  chartId.requestFullscreen();
    this.chartEclm.height = '100%';
  } else {
    //  document.exitFullscreen();
    this.chartEclm.height = 'auto';
  }
}
maxOrMinScreenEccy() {
  if (this.panelHeaderEccy.expand == true) {
    // chartId.requestFullscreen();
    this.chartEccy.height = '100%';
  } else {
    //  document.exitFullscreen();
    this.chartEccy.height = 'auto';
  }
}
maxOrMinScreenEcly() {
  if (this.panelHeaderEcly.expand == true) {
    // chartId.requestFullscreen();
    this.chartEcly.height = '100%';
  } else {
    //document.exitFullscreen();
    this.chartEcly.height = 'auto';
  }
}
public isparentect: boolean = true;
public isparentecy: boolean = true;
public isparenteccw: boolean = true;
public isparenteclw: boolean = true;
public isparenteccm: boolean = true;
public isparenteclm: boolean = true;
public isparenteccy: boolean = true;
public isparentecly: boolean = true;
/* Bar-Chart-Current year */
public onChartMouseClickeccy(args: IMouseEventArgs): void {
     let index: Index = indexFinder(args.target);
     let i = index.point;
      if(null != this.barChartEnergyConsumptionCurrentYear[i].children && this.barChartEnergyConsumptionCurrentYear[i].children.length > 0 
      && this.barChartEnergyConsumptionCurrentYear[i].value !=0 ){
      if (this.isparenteccy && document.getElementById('eccy_Series_' + index.series + '_Point_' + index.point)) {
      this.isparenteccy = false;
        switch (index.point) {
          case i:
            this.chartEccy.series[0].dataSource = this.barChartEnergyConsumptionCurrentYear[i].children;
            document.getElementById('texteccy').innerHTML = this.barChartEnergyConsumptionCurrentYear[i].name;
            break;
        }
      this.chartEccy.refresh();
      document.getElementById('categoryeccy').style.visibility = 'visible';
      document.getElementById('symboleccy').style.visibility = 'visible';
      document.getElementById('texteccy').style.visibility = 'visible';
    }}
  }
  public onClickeccy(e: MouseEvent): void {
    this.chartEccy.series[0].dataSource = this.barChartEnergyConsumptionCurrentYear;
    this.isparenteccy = true;
    this.chartEccy.refresh();
    (getElement('categoryeccy') as HTMLElement).style.visibility = 'hidden';
    (e.target as HTMLButtonElement).style.visibility = 'hidden';
    document.getElementById('symboleccy').style.visibility = 'hidden';
    document.getElementById('texteccy').style.visibility = 'hidden';
  }
  public onChartMouseMoveeccy(args: IMouseEventArgs): void {
    if (this.isparenteccy && args.target.indexOf('eccy_Series_0_Point_') > -1) {
      document.getElementById(args.target).style.cursor = 'pointer';
    }
  } 
/* Bar-Chart-Last Year */
public onChartMouseClickecly(args: IMouseEventArgs): void {
  let index: Index = indexFinder(args.target);
  let i = index.point;
  if(null != this.barChartEnergyConsumptionLastYear[i].children && this.barChartEnergyConsumptionLastYear[i].children.length > 0 
  && this.barChartEnergyConsumptionLastYear[i].value !=0 ){
  if (this.isparentecly && document.getElementById('ecly_Series_' + index.series + '_Point_' + index.point)) {
   this.isparentecly = false;
   let i = index.point;
     switch (index.point) {
       case i:
         this.chartEcly.series[0].dataSource = this.barChartEnergyConsumptionLastYear[i].children;
         document.getElementById('textecly').innerHTML = this.barChartEnergyConsumptionLastYear[i].name;
         break;
     }
   this.chartEcly.refresh();
   document.getElementById('categoryecly').style.visibility = 'visible';
   document.getElementById('symbolecly').style.visibility = 'visible';
   document.getElementById('textecly').style.visibility = 'visible';
 }
}}
public onClickecly(e: MouseEvent): void {
  this.chartEcly.series[0].dataSource = this.barChartEnergyConsumptionLastYear;
 this.isparentecly = true;
 this.chartEcly.refresh();
 (getElement('categoryecly') as HTMLElement).style.visibility = 'hidden';
 (e.target as HTMLButtonElement).style.visibility = 'hidden';
 document.getElementById('symbolecly').style.visibility = 'hidden';
 document.getElementById('textecly').style.visibility = 'hidden';
}
  public onChartMouseMoveecly(args: IMouseEventArgs): void {
    if (this.isparentecly && args.target.indexOf('ecly_Series_0_Point_') > -1) {
      document.getElementById(args.target).style.cursor = 'pointer';
    }
  } 
}
