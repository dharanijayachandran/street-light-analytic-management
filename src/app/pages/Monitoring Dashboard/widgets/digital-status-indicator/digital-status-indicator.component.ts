import {  Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import 'rxjs/add/observable/interval';
import { StreetLightService } from 'src/app/pages/services/street-light.service';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { nodeData } from 'src/app/dto/nodeData';
import { digitalStatusIndicator } from 'src/app/dto/digitalStatusIndicator';
import { statusIndicatorTotalCount } from 'src/app/dto/statusIndicatorTotalCount';

@Component({
  selector: 'app-digital-status-indicator',
  templateUrl: './digital-status-indicator.component.html',
  styleUrls: ['./digital-status-indicator.component.css']
})
export class DigitalStatusIndicatorComponent implements OnInit{
  timeInterval: any;
  subscribe: Subscription;
  digitalStatusDataSource:any
  displayedColumns: string[] = ['name', 'total','lightoff','lighton','idle'];
  inter: NodeJS.Timeout;
  showLoaderImage: boolean;
  noRecordsFound: boolean;
  private transformer = (node: digitalStatusIndicator, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      siteId:node.siteId,
      name: node.siteName,
      total: node.totalCount,
      lightOff:node.lightOffCount,
      lightOn:node.lightOnCount,
      idle:node.idleCount,
      level: level,
    };
  }
  treeControl = new FlatTreeControl<nodeData>(node => node.level, node => node.expandable);
  treeFlattener = new MatTreeFlattener(this.transformer, node => node.level, 
  node => node.expandable, node => node.children);
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  hasChild = (_: number, node: nodeData) => node.expandable;
  constructor(private streetLightService: StreetLightService) {
   }
   TREE_DATA: digitalStatusIndicator[] = [];
   statusIndicatorTotalCount:any;
  ngOnInit(): void {
    this.showLoaderImage =  true;
    this.streetLightService.getStatusIndicatorTotalCount().subscribe((res:any)=>{
        this.statusIndicatorTotalCount = res;
    })
   this.loadDataInTable();
   this.refreshTableAtEveryInterval();
  }
  loadDataInTable(){
    this.streetLightService.getDigitalStatusDataSource().subscribe((res:any)=>{
    this.showLoaderImage = false;
    if(null!=res && res.length){
    this.noRecordsFound = false;
    this.TREE_DATA = res;
    this.dataSource.data = this.TREE_DATA;
    }else {
      this.dataSource.data = [];
      this.noRecordsFound = true;
    }
  },error => {
  // If the service is not available
  console.log(error.message);
  });
  }
  refreshDigitalStatusDataInTable() {
    this.showLoaderImage = true;
    if (this.dataSource) {
      this.dataSource.data = [];
    }
    this.loadDataInTable();
  }
  refreshTableAtEveryInterval() {
    this.streetLightService.getTimeIntervalsFromFile().toPromise().then(data => {
    let  interval = data.refreshtimeinterval;
    this.inter = setInterval(() => {
      this.loadDataInTable();
    }, +interval);
  });
}
}
