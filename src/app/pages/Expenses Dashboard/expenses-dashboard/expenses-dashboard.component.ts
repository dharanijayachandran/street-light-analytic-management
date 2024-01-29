import { Component, OnInit, ViewChild } from "@angular/core";
import { StreetLightService } from "../../services/street-light.service";
import { AccumulationChart, AccumulationChartComponent, getElement, IAccTextRenderEventArgs, IMouseEventArgs, Index, indexFinder, IPointRenderEventArgs } from "@syncfusion/ej2-angular-charts";
import { Subscription } from 'rxjs';
import 'rxjs/add/observable/interval';
import { TablePanelComponent } from "global/lib/component/panel/table-panel/table-panel.component";
import { ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: "street-light-analytic-management-expenses-dashboard",
  templateUrl: "./expenses-dashboard.component.html",
  styleUrls: ["./expenses-dashboard.component.css"],
})
export class ExpensesDashboardComponent implements OnInit {
  constructor(private streetLightService: StreetLightService) { }
  /* DataSource Variable */
  public pieChartTodayExpensesData: any;
  public pieChartYesterDayExpensesData:any;
  public donoutChartCurrentWeekExpensesData: any;
  public donoutChartLastWeekExpensesData:any;
  public donoutChartCurrentMonthExpensesData: any;
  public donoutChartLastMonthExpensesData: any;
  public barChartCurrentYearExpensesData: any;
  public barChartLastYearExpensesData: any;
  /* Zero Status */
  public todayzeroDataStatus: boolean = false;
  public yesterdayzeroDataStatus: boolean = false;
  public currentWeekzeroDataStatus: boolean = false;
  public lastWeekzeroDataStatus: boolean = false;
  public currentMonthzeroDataStatus: boolean = false;
  public lastMonthzeroDataStatus: boolean = false;
  public currentYearzeroDataStatus: boolean = false;
  public lastYearzeroDataStatus: boolean = false;
  showLoaderImageForToday: boolean=true;
  showLoaderImageForYesterDay: boolean=true;
  showLoaderForCurrentWeek: boolean=true;
  showLoaderForLastWeek: boolean=true;
  showLoaderForCurrentMonth: boolean=true;
  showLoaderForLastMonth: boolean=true;
  showLoaderForCurrentYear: boolean=true;
  showLoaderForLastYear: boolean=true;
  inter: NodeJS.Timeout;
  public todayData:any;
  public yesterdayData:any;
  public currentWeekData:any;
  public lastWeekData:any;
  public currentMonthData:any;
  public lastMonthData:any;
  timezone: string;
  public pieChartLabel: Object;
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
  public enableSmartLabel: boolean;
  public tooltip: Object = {
    enable: true,
    format: '${point.x} : <b>${point.tooltip}</b>'
  };
  public chartArea: Object = {
    border: {
      width: 0,
    },
  };
  public isparenteet: boolean = true;
  public isparenteey: boolean = true;
  public isparenteecw: boolean = true;
  public isparenteelw: boolean = true;
  public isparenteecm: boolean = true;
  public isparenteelm: boolean = true;
  public isparenteecy: boolean = true;
  public isparenteely: boolean = true;
  public marker: Object;
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
  ]; public pointRender(args: IPointRenderEventArgs): void {
    args.fill = this.palette[args.point.index];
  };
  legendSettings = {
    visible: true
  };
  enableBorderOnMouseMove: boolean;
  timeInterval: any;
  subscribe: Subscription;
  lightThemeContent =
  '<div id="back" style="cursor:pointer;padding:3px;width:30px; height:30px;">' +
  '<img src="https://ej2.syncfusion.com/angular/demos/assets/chart/images/back.png" id="back" />';
 darkThemeContent =
  '<div id= "white" style="cursor:pointer;padding:3px;width:30px; height:30px;">' +
  '<img src="https://ej2.syncfusion.com/angular/demos/assets/chart/images/back.white.png" id="back" /><div>';
  @ViewChild('chartEet')
  public chartEet : AccumulationChartComponent | AccumulationChart;
  
@ViewChild('panelHeaderEet')
  public panelHeaderEet : TablePanelComponent;

  @ViewChild('chartEey')
  public chartEey : AccumulationChartComponent | AccumulationChart;

@ViewChild('panelHeaderEey')
  public panelHeaderEey : TablePanelComponent;

  @ViewChild('chartEecw')
  public chartEecw : AccumulationChartComponent | AccumulationChart;

@ViewChild('panelHeaderEecw')
  public panelHeaderEecw : TablePanelComponent;

  @ViewChild('chartEelw')
  public chartEelw : AccumulationChartComponent | AccumulationChart;

@ViewChild('panelHeaderEelw')
  public panelHeaderEelw : TablePanelComponent;

  @ViewChild('chartEecm')
  public chartEecm : AccumulationChartComponent | AccumulationChart;

@ViewChild('panelHeaderEecm')
  public panelHeaderEecm : TablePanelComponent;

  @ViewChild('chartEelm')
  public chartEelm : AccumulationChartComponent | AccumulationChart;

@ViewChild('panelHeaderEelm')
  public panelHeaderEelm : TablePanelComponent;

  @ViewChild('chartEecy')
  public chartEecy :ChartComponent;

@ViewChild('panelHeaderEecy')
  public panelHeaderEecy : TablePanelComponent;

  @ViewChild('chartEely')
  public chartEely : ChartComponent;

@ViewChild('panelHeaderEely')
  public panelHeaderEely : TablePanelComponent;
  ngOnInit(): void {
    this.enableBorderOnMouseMove = false;
    this.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone; 
    this.getEnergyExpensesForToday();
    this.getEnergyExpensesForYesterday();
    this.getEnergyExpensesForCurrentWeek();
    this.getEnergyExpensesForLastWeek();
    this.getEnergyExpensesForCurrentMonth();
    this.getEnergyExpensesForLastMonth();
    this.getEnergyExpensesForCurrentYear();
    this.getEnergyExpensesForLastYear();
    this.pieChartLabel = {
      visible: true,
      border: { width: 2, color: "orange" },
      position: "Outside",
      connectorStyle: { length: '15%' }, 
      name: "nameAndValueWithEng"
    }; 
    this.enableSmartLabel = true;
    this.marker = {
      dataLabel: {
        visible: true,
        position:"outside",
        border: { width: 2, color: "orange" },
        name: "valueWithEng"
      },
    }; 
  }
  public onTextRender(args: IAccTextRenderEventArgs): void {
    args.text = args.point.x + " " + args.point.y + "";
    args.text = args.point.x + " ";
  }
  getEnergyExpensesForToday() {
    let beId = parseInt(sessionStorage.getItem('beId'));
    this.streetLightService.getEnergyExpensesForToday(beId, this.timezone).subscribe((res) => {
      this.showLoaderImageForToday = false;
      if (null != res && res.every(item => item['value'] == 0)) {
        this.todayzeroDataStatus = true;
      } else {
        this.todayzeroDataStatus = false;
      if(null != res){
        this.todayData = { res };
        this.pieChartTodayExpensesData = this.todayData.res;
      }}
    },error => {
      console.log(error.message);
     this.showLoaderImageForToday=false;
   });
  }
  getEnergyExpensesForYesterday() {
    let beId = parseInt(sessionStorage.getItem('beId'));
    this.streetLightService.getEnergyExpensesForYesterday(beId, this.timezone).subscribe((res) => {
      this.showLoaderImageForYesterDay = false;
      if (null != res && res.every(item => item['value'] == 0)) {
        this.yesterdayzeroDataStatus = true;
      } else {
        this.yesterdayzeroDataStatus = false;
      if(null != res){
        this.yesterdayData ={ res };
        this.pieChartYesterDayExpensesData = this.yesterdayData.res;
    }
  }
    },error => {
      console.log(error.message);
      this.showLoaderImageForYesterDay=false;
    });
  }
  getEnergyExpensesForCurrentWeek() {
    let beId = parseInt(sessionStorage.getItem('beId'));
    this.streetLightService.getDataForCurrentWeekExpenses(beId, this.timezone).subscribe((res) => {
      this.showLoaderForCurrentWeek = false;
      if (null != res && res.every(item => item['value'] == 0)) {
        this.currentWeekzeroDataStatus = true;
      } else {
        this.currentWeekzeroDataStatus = false;
      if(null != res){
      this.currentWeekData ={ res };
      this.donoutChartCurrentWeekExpensesData = this.currentWeekData.res;
    }
  }
    },error => {
      console.log(error.message);
      this.showLoaderForCurrentWeek=false;
    });
  }
  getEnergyExpensesForLastWeek() {
    let beId = parseInt(sessionStorage.getItem('beId'));
    this.streetLightService.getDataForLastWeekExpenses(beId, this.timezone).subscribe((res) => {
      this.showLoaderForLastWeek = false;
      if (null != res && res.every(item => item['value'] == 0)) {
        this.lastWeekzeroDataStatus = true;
      } else {
        this.lastWeekzeroDataStatus = false;
      if(null != res){
        this.lastWeekData={ res };
        this.donoutChartLastWeekExpensesData = this.lastWeekData.res;
    }
  }
    },error => {
      console.log(error.message);
      this.showLoaderForLastWeek=false;
    });
  }
  getEnergyExpensesForCurrentMonth() {
    let beId = parseInt(sessionStorage.getItem('beId'));
    this.streetLightService.getDataForCurrentMonthExpenses(beId, this.timezone).subscribe((res) => {
      this.showLoaderForCurrentMonth = false;
      if (null != res && res.every(item => item['value'] == 0)) {
        this.currentMonthzeroDataStatus = true;
      } else {
        this.currentMonthzeroDataStatus = false;
      if(null != res){
      this.currentMonthData={ res };
      this.donoutChartCurrentMonthExpensesData = this.currentMonthData.res;
    }
  }
    },error => {
      console.log(error.message);
      this.showLoaderForCurrentMonth=false;
    });
  }
  getEnergyExpensesForLastMonth() {
    let beId = parseInt(sessionStorage.getItem('beId'));
    this.streetLightService.getDataForLastMonthExpenses(beId, this.timezone).subscribe((res) => {
      this.showLoaderForLastMonth = false;
      if (null != res && res.every(item => item['value'] == 0)) {
        this.lastMonthzeroDataStatus = true;
      } else {
        this.lastMonthzeroDataStatus = false;
      if(null != res){
        this.lastMonthData={ res };
        this.donoutChartLastMonthExpensesData = this.lastMonthData.res;
    }
  }
    },error => {
      console.log(error.message);
      this.showLoaderForLastMonth=false;
    });
  }
  getEnergyExpensesForCurrentYear() {
     let beId = parseInt(sessionStorage.getItem('beId'));
    this.streetLightService.getDataForCurrentYearExpenses(beId, this.timezone).subscribe((res) => {
      this.showLoaderForCurrentYear = false;
      if (null != res && res.every(item => item['value'] == 0)) {
        this.currentYearzeroDataStatus = true;
      } else {
        this.currentYearzeroDataStatus = false;
      if(null != res){
      this.barChartCurrentYearExpensesData = res;
      if(null != this.chartEecy && null != this.chartEecy.series[0]){
      this.chartEecy.series[0].dataSource=res;
      }
    }
  }
    },error => {
      console.log(error.message);
      this.showLoaderForCurrentYear=false;
    });
  }
  getEnergyExpensesForLastYear() {
    let beId = parseInt(sessionStorage.getItem('beId'));
    this.streetLightService.getDataForLastYearExpenses(beId, this.timezone).subscribe((res) => {
      this.showLoaderForLastYear = false;
      if (null != res && res.every(item => item['value'] == 0)) {
        this.lastYearzeroDataStatus = true;
      } else {
        this.lastYearzeroDataStatus = false;
      if(null != res){
      this.barChartLastYearExpensesData = res;
      if(null != this.chartEely && null != this.chartEely.series[0]){
      this.chartEely.series[0].dataSource=res;
      }
    }
  }
    },error => {
      console.log(error.message);
      this.showLoaderForLastYear=false;
    });
  }
/* Energy Consumption - Today  START*/
onChartMouseClickeet(args: IMouseEventArgs): void {
  let index: Index = indexFinder(args.target);
  let i = index.point;
  if (args.target.indexOf("back") > -1) {
    document.getElementById("eet").style.cursor = 'pointer';
    this.isparenteet = true;
    this.chartInitSettingeet();
    this.chartEet.refresh();
    }
  if (this.isparenteet && this.pieChartTodayExpensesData[i].children.length>0 && document.getElementById("eet_Series_" + index.series + "_Point_" + index.point)) {
    document.getElementById("eet").style.cursor = 'default';
    this.isparenteet = false;
    this.chartEet.annotations = [{
        content:
        this.chartEet.theme === "HighContrast" ? this.darkThemeContent: this.lightThemeContent,
        region: "Series",
        x: "50%",
        y: "50%"
      }];
     this.chartEet.series[0].innerRadius = "30%";
     for (let i = 0; i < this.todayData.res.length; i++) {
     if(null != this.todayData.res[i].children && this.todayData.res[i].children.length > 0){
      switch (index.point) {
        case i:
          this.chartEet.series[0].dataSource = this.todayData.res[i].children;
          this.setDrillDownFieldeet();
          break;
      }}
    } 
    this.chartEet.refresh();
}
}
setDrillDownFieldeet() {
this.chartEet.series[0].xName = "name";
this.chartEet.series[0].yName = "value";
}
chartInitSettingeet() {
this.chartEet.series[0].dataSource = this.todayData.res;
this.chartEet.series[0].xName = "name";
this.chartEet.series[0].yName = "value";
this.chartEet.annotations[0].content = null;
this.chartEet.series[0].innerRadius = "0%";
/* Energy Consumption - Today END*/
}
/* Energy Consumption - Yesterday  START*/
onChartMouseClickeey(args: IMouseEventArgs): void {
  let index: Index = indexFinder(args.target);
  let i = index.point;
  if (args.target.indexOf("back") > -1 ) {
    document.getElementById("eey").style.cursor = 'pointer';
    this.isparenteey = true;
    this.chartInitSettingeey();
    this.chartEey.refresh();
    }
  if (this.isparenteey && this.pieChartYesterDayExpensesData[i].children.length>0 && document.getElementById("eey_Series_" + index.series + "_Point_" + index.point)) {
    document.getElementById("eey").style.cursor = 'default';
    this.isparenteey = false;
    this.chartEey.annotations = [
      {
        content:
        this.chartEey.theme === "HighContrast" ? this.darkThemeContent: this.lightThemeContent,
        region: "Series",
        x: "50%",
        y: "50%"
      }];
    this.chartEey.series[0].innerRadius = "30%";
    for (let i = 0; i < this.yesterdayData.res.length; i++) {
     if(null != this.yesterdayData.res[i].children && this.yesterdayData.res[i].children.length > 0){
      switch (index.point) {
        case i:
          this.chartEey.series[0].dataSource = this.yesterdayData.res[i].children;
          this.setDrillDownFieldeey();
          break;
      }}
    }
    this.chartEey.refresh();
}
}

setDrillDownFieldeey() {
this.chartEey.series[0].xName = "name";
this.chartEey.series[0].yName = "value";
}
chartInitSettingeey() {
this.chartEey.series[0].dataSource = this.yesterdayData.res;
this.chartEey.series[0].xName = "name";
this.chartEey.series[0].yName = "value";
this.chartEey.annotations[0].content = null;
this.chartEey.series[0].innerRadius = "0%";
} 
/* Energy Consumption - Current WEEK*/
onChartMouseClickeecw(args: IMouseEventArgs): void {
  let index: Index = indexFinder(args.target);
  let i = index.point;
  if (args.target.indexOf("back") > -1) {
    document.getElementById("eecw").style.cursor = 'pointer';
    this.isparenteecw = true;
     this.chartInitSettingeecw();
     this.chartEecw.refresh();
   }
  if (this.isparenteecw && this.donoutChartLastWeekExpensesData[i].children.length>0 && document.getElementById("eecw_Series_" + index.series + "_Point_" + index.point)) {
    document.getElementById("eecw").style.cursor = 'default';
    this.isparenteecw = false;
    this.chartEecw.annotations = [
      {
        content:
        this.chartEecw.theme === "HighContrast" ? this.darkThemeContent: this.lightThemeContent,
        region: "Series",
        x: "50%",
        y: "50%"
      }];
    this.chartEecw.series[0].innerRadius = "40%";
    for (let i = 0; i < this.currentWeekData.res.length; i++) {
     if(null != this.currentWeekData.res[i].children && this.currentWeekData.res[i].children.length > 0){
      switch (index.point) {
        case i:
          this.chartEecw.series[0].dataSource = this.currentWeekData.res[i].children;
          this.setDrillDownFieldeecw();
          break;
      }
    }
  }
    this.chartEecw.refresh();
}
}
setDrillDownFieldeecw() {
this.chartEecw.series[0].xName = "name";
this.chartEecw.series[0].yName = "value";
}
chartInitSettingeecw() {
this.chartEecw.series[0].dataSource = this.currentWeekData.res;
this.chartEecw.series[0].xName = "name";
this.chartEecw.series[0].yName = "value";
this.chartEecw.annotations[0].content = null;
this.chartEecw.series[0].innerRadius = "40%";
} 
/* Energy Consumption - Last WEEK*/
onChartMouseClickeelw(args: IMouseEventArgs): void {
  let index: Index = indexFinder(args.target);
  let i = index.point;
  if (args.target.indexOf("back") > -1) {
    document.getElementById("eelw").style.cursor = 'pointer';
    this.isparenteelw = true;
    this.chartInitSettingeelw();
    this.chartEelw.refresh();
    }
  if (this.isparenteelw && this.donoutChartLastWeekExpensesData[i].children.length > 0 && document.getElementById("eelw_Series_" + index.series + "_Point_" + index.point)) {
    document.getElementById("eelw").style.cursor = 'default';
    this.isparenteelw = false;
    this.chartEelw.annotations = [
      {
        content:
        this.chartEelw.theme === "HighContrast" ? this.darkThemeContent: this.lightThemeContent,
        region: "Series",
        x: "50%",
        y: "50%"
      }];
    this.chartEelw.series[0].innerRadius = "40%";
    for (let i = 0; i < this.lastWeekData.res.length; i++) {
     if(null != this.lastWeekData.res[i].children && this.lastWeekData.res[i].children.length > 0){
      switch (index.point) {
        case i:
          this.chartEelw.series[0].dataSource = this.lastWeekData.res[i].children;
          this.setDrillDownFieldeelw();
          break;
      }}
    }
    this.chartEelw.refresh();
}
}
setDrillDownFieldeelw() {
this.chartEelw.series[0].xName = "name";
this.chartEelw.series[0].yName = "value";
}
chartInitSettingeelw() {
this.chartEelw.series[0].dataSource = this.lastWeekData.res;
this.chartEelw.series[0].xName = "name";
this.chartEelw.series[0].yName = "value";
this.chartEelw.annotations[0].content = null;
this.chartEelw.series[0].innerRadius = "40%";
} 
/* Energy Consumption - Current Month*/
onChartMouseClickeecm(args: IMouseEventArgs): void {
  let index: Index = indexFinder(args.target);
  let i = index.point;
  if (args.target.indexOf("back") > -1) {
    document.getElementById("eecm").style.cursor = 'pointer';
    this.isparenteecm = true;
    this.chartInitSettingeecm();
    this.chartEecm.refresh();
    }
     if (this.isparenteecm && this.donoutChartCurrentMonthExpensesData[i].children.length > 0 && document.getElementById("eecm_Series_" + index.series + "_Point_" + index.point)) {
      document.getElementById("eecm").style.cursor = 'default';
      this.isparenteecm = false;
      this.chartEecm.annotations = [

      {
        content:
        this.chartEecm.theme === "HighContrast" ? this.darkThemeContent: this.lightThemeContent,
        region: "Series",
        x: "50%",
        y: "50%"
      }];
    this.chartEecm.series[0].innerRadius = "40%";
    for (let i = 0; i < this.currentMonthData.res.length; i++) {
      if(null != this.currentMonthData.res[i].children && this.currentMonthData.res[i].children.length > 0){
      switch (index.point) {
        case i:
          this.chartEecm.series[0].dataSource = this.currentMonthData.res[i].children;
          this.setDrillDownFieldeecm();
          break;
      }}
    }
    this.chartEecm.refresh();
}
}
setDrillDownFieldeecm() {
this.chartEecm.series[0].xName = "name";
this.chartEecm.series[0].yName = "value";
}
chartInitSettingeecm() {
this.chartEecm.series[0].dataSource = this.currentMonthData.res;
this.chartEecm.series[0].xName = "name";
this.chartEecm.series[0].yName = "value";
this.chartEecm.annotations[0].content = null;
this.chartEecm.series[0].innerRadius = "40%";
} 
/* Energy Consumption - Last Month*/
onChartMouseClickeelm(args: IMouseEventArgs): void {
  let index: Index = indexFinder(args.target);
  let i = index.point;
  if (args.target.indexOf("back") > -1) {
    document.getElementById("eelm").style.cursor = 'pointer';
    this.isparenteelm = true;
    this.chartInitSettingeelm();
    this.chartEelm.refresh();
    }
  if (this.isparenteelm && this.donoutChartLastMonthExpensesData[i].children.length > 0 && document.getElementById("eelm_Series_" + index.series + "_Point_" + index.point)) {
    document.getElementById("eelm").style.cursor = 'default';
    this.isparenteelm = false;
    this.chartEelm.annotations = [
      {
        content:
        this.chartEelm.theme === "HighContrast" ? this.darkThemeContent: this.lightThemeContent,
        region: "Series",
        x: "50%",
        y: "50%"
      }];
    this.chartEelm.series[0].innerRadius = "40%";
    for (let i = 0; i < this.lastMonthData.res.length; i++) {
      if(null != this.lastMonthData.res[i].children && this.lastMonthData.res[i].children.length > 0){
      switch (index.point) {
        case i:
          this.chartEelm.series[0].dataSource = this.lastMonthData.res[i].children;
          this.setDrillDownFieldeelm();
          break;
      }}
    }
    this.chartEelm.refresh();
}
}
setDrillDownFieldeelm() {
this.chartEelm.series[0].xName = "name";
this.chartEelm.series[0].yName = "value";
}
chartInitSettingeelm() {
this.chartEelm.series[0].dataSource = this.lastMonthData.res;
this.chartEelm.series[0].xName = "name";
this.chartEelm.series[0].yName = "value";
this.chartEelm.annotations[0].content = null;
this.chartEelm.series[0].innerRadius = "40%";
} 
 
  refreshTodayWidgetAtEveryInterval() {
    this.streetLightService.getTimeIntervalsFromFile().toPromise().then(data => {
      this.timeInterval = data.streetLightDashboardTimeInterval;
      this.inter = setInterval(() => {
        this.getEnergyExpensesForToday()
      }, +this.timeInterval);
    })
  }
  refreshYesterdayWidgetAtEveryInterval() {
    this.streetLightService.getTimeIntervalsFromFile().toPromise().then(data => {
      this.timeInterval = data.streetLightDashboardTimeInterval;
      this.inter = setInterval(() => {
        this.getEnergyExpensesForYesterday()
      }, +this.timeInterval);
    })
  }
  refreshCurrentWeekWidgetAtEveryInterval() {
    this.streetLightService.getTimeIntervalsFromFile().toPromise().then(data => {
      this.timeInterval = data.streetLightDashboardTimeInterval;
      this.inter = setInterval(() => {
        this.getEnergyExpensesForCurrentWeek()
      }, +this.timeInterval);
    })
  }
  refreshLastWeekWidgetAtEveryInterval() {
    this.streetLightService.getTimeIntervalsFromFile().toPromise().then(data => {
      this.timeInterval = data.streetLightDashboardTimeInterval;
      this.inter = setInterval(() => {
        this.getEnergyExpensesForLastWeek()
      }, +this.timeInterval);
    })
  }
  refreshCurrentMonthWidgetAtEveryInterval() {
    this.streetLightService.getTimeIntervalsFromFile().toPromise().then(data => {
      this.timeInterval = data.streetLightDashboardTimeInterval;
      this.inter = setInterval(() => {
        this.getEnergyExpensesForCurrentMonth()
      }, +this.timeInterval);
    })
  }
  refreshLastMonthWidgetAtEveryInterval() {
    this.streetLightService.getTimeIntervalsFromFile().toPromise().then(data => {
      this.timeInterval = data.streetLightDashboardTimeInterval;
      this.inter = setInterval(() => {
        this.getEnergyExpensesForLastMonth()
      }, +this.timeInterval);
    })
  }
  refreshLastYearWidgetAtEveryInterval() {
    this.streetLightService.getTimeIntervalsFromFile().toPromise().then(data => {
      this.timeInterval = data.streetLightDashboardTimeInterval;
      this.inter = setInterval(() => {
        this.getEnergyExpensesForLastYear()
      }, +this.timeInterval);
    })
  }
  refreshCurrentYearWidgetAtEveryInterval() {
    this.streetLightService.getTimeIntervalsFromFile().toPromise().then(data => {
      this.timeInterval = data.streetLightDashboardTimeInterval;
      this.inter = setInterval(() => {
        this.getEnergyExpensesForCurrentYear()
      }, +this.timeInterval);
    })
  }

  maxOrMinScreenEet(){
    if(this.panelHeaderEet.expand == true){
     /*  chartId.requestFullscreen(); */
      this.chartEet.height='100%';
    }else{  
    // document.exitFullscreen();
     this.chartEet.height='auto';
    }
    
  }

  maxOrMinScreenEey(){
    if(this.panelHeaderEey.expand == true){
    //  chartId.requestFullscreen();
      this.chartEey.height='100%'; 
    }else{
   //   document.exitFullscreen();
      this.chartEey.height='auto';
    }
    
  }

  maxOrMinScreenEecw(){
    if(this.panelHeaderEecw.expand == true){
     // chartId.requestFullscreen();
      this.chartEecw.height='100%'; 
    }else{
    //  document.exitFullscreen();
      this.chartEecw.height='auto';
    }
    
  }

  maxOrMinScreenEelw(){
    if(this.panelHeaderEelw.expand == true){
     /*  chartId.requestFullscreen(); */
      this.chartEelw.height='100%'; 
    }else{
      /* document.exitFullscreen(); */
      this.chartEelw.height='auto';
    }
    
  }

  maxOrMinScreenEecm(){
    if(this.panelHeaderEecm.expand == true){
     // chartId.requestFullscreen();
      this.chartEecm.height='100%'; 
    }else{
    //  document.exitFullscreen();
      this.chartEecm.height='auto';
    }
    
  }

  maxOrMinScreenEelm(){
    if(this.panelHeaderEelm.expand == true){
    //  chartId.requestFullscreen();
      this.chartEelm.height='100%'; 
    }else{
    //  document.exitFullscreen();
      this.chartEelm.height='auto';
    }
  }
  maxOrMinScreenEecy(){
    if(this.panelHeaderEecy.expand == true){
     // chartId.requestFullscreen();
      this.chartEecy.height='100%'; 
    }else{
    //  document.exitFullscreen();
      this.chartEecy.height='auto';
    }
  }
  maxOrMinScreenEely(){
    if(this.panelHeaderEely.expand == true){
    //  chartId.requestFullscreen();
      this.chartEely.height='100%'; 
    }else{
    //  document.exitFullscreen();
      this.chartEely.height='auto';
    }}


/* Bar-Chart-Current year */
public onChartMouseClickeecy(args: IMouseEventArgs): void {
    let index: Index = indexFinder(args.target);
    let i = index.point;
    if(null != this.barChartCurrentYearExpensesData[i].children && this.barChartCurrentYearExpensesData[i].children.length > 0
    && this.barChartCurrentYearExpensesData[i].value !=0 ){
    if (this.isparenteecy && document.getElementById('eecy_Series_' + index.series + '_Point_' + index.point)) {
      this.isparenteecy = false;
      switch (index.point) {
        case i:
          this.chartEecy.series[0].dataSource = this.barChartCurrentYearExpensesData[i].children;
          document.getElementById('texteecy').innerHTML = this.barChartCurrentYearExpensesData[i].name;
          break;
      }
      this.chartEecy.refresh();
      document.getElementById('categoryeecy').style.visibility = 'visible';
      document.getElementById('symboleecy').style.visibility = 'visible';
      document.getElementById('texteecy').style.visibility = 'visible';
    }
  }}
  public onClickeecy(e: MouseEvent): void {
    this.chartEecy.series[0].dataSource = this.barChartCurrentYearExpensesData;
    this.isparenteecy = true;
    this.chartEecy.refresh();
    (getElement('categoryeecy') as HTMLElement).style.visibility = 'hidden';
    (e.target as HTMLButtonElement).style.visibility = 'hidden';
    document.getElementById('symboleecy').style.visibility = 'hidden';
    document.getElementById('texteecy').style.visibility = 'hidden';
  }
  public onChartMouseMoveeecy(args: IMouseEventArgs): void {
    if (this.isparenteecy && args.target.indexOf('eecy_Series_0_Point_') > -1) {
      document.getElementById(args.target).style.cursor = 'pointer';
    }
  }
/* Bar-Chart-Last Year */
 public onChartMouseClickeely(args: IMouseEventArgs): void {
    let index: Index = indexFinder(args.target);
    let i = index.point;
    if(null != this.barChartLastYearExpensesData[i].children && this.barChartLastYearExpensesData[i].children.length > 0
    && this.barChartLastYearExpensesData[i].value !=0 ){
    if (this.isparenteely && document.getElementById('eely_Series_' + index.series + '_Point_' + index.point)) {
      this.isparenteely = false;
      switch (index.point) {
        case i:
          this.chartEely.series[0].dataSource = this.barChartLastYearExpensesData[i].children;
          document.getElementById('texteely').innerHTML = this.barChartLastYearExpensesData[i].name;
          break;
      }
      this.chartEely.refresh();
      document.getElementById('categoryeely').style.visibility = 'visible';
      document.getElementById('symboleely').style.visibility = 'visible';
      document.getElementById('texteely').style.visibility = 'visible';
    }
  }
  }
  public onClickeely(e: MouseEvent): void {
    this.chartEely.series[0].dataSource = this.barChartLastYearExpensesData;
    this.isparenteely = true;
    this.chartEely.refresh();
    (getElement('categoryeely') as HTMLElement).style.visibility = 'hidden';
    (e.target as HTMLButtonElement).style.visibility = 'hidden';
    document.getElementById('symboleely').style.visibility = 'hidden';
    document.getElementById('texteely').style.visibility = 'hidden';
  }
  public onChartMouseMoveeely(args: IMouseEventArgs): void {
    if (this.isparenteely && args.target.indexOf('eely_Series_0_Point_') > -1) {
      document.getElementById(args.target).style.cursor = 'pointer';
    }
  } 
}
