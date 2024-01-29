import { FlatTreeControl } from '@angular/cdk/tree';
import {Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/observable/interval';
import { flatMap } from 'rxjs/operators';
import { nodeData } from 'src/app/dto/nodeData';
import { statusIndicator } from 'src/app/dto/statusIndicator';
import { statusIndicatorTotalCount } from 'src/app/dto/statusIndicatorTotalCount';
import { StreetLightService } from 'src/app/pages/services/street-light.service';

@Component({
  selector: 'app-status-indicator',
  templateUrl: './status-indicator.component.html',
  styleUrls: ['./status-indicator.component.css']
})
export class StatusIndicatorComponent implements OnInit{
  pageSize: number;
  showLoaderImage: boolean;
  noRecordsFound: boolean;
  timeInterval: any;
  subscribe: Subscription;
  digitalStatusDataSource:any
  displayedColumns: string[] = ['name', 'total','gatewayUp','gatewayDown'];
  inter: NodeJS.Timeout;
  private transformer = (node: statusIndicator, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      siteId:node.siteId,
      name: node.siteName,
      total: node.totalCount,
      gatewayUp:node.gatewayUpCount,
      gatewayDown:node.gatewayDownCount,
      level: level,
    };
  }
  treeControl = new FlatTreeControl<nodeData>(node => node.level, node => node.expandable);
  treeFlattener = new MatTreeFlattener(this.transformer, node => node.level, 
  node => node.expandable, node => node.children);
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  hasChild = (_: number, node: nodeData) => node.expandable;
  TREE_DATA: statusIndicator[] = [];
  statusIndicatorTotalCount:any;
  constructor(private streetLightService: StreetLightService) {
   }
  ngOnInit(): void {
    this.showLoaderImage =  true;
    this.streetLightService.getStatusIndicatorTotalCount().subscribe((res:any)=>{
        this.statusIndicatorTotalCount = res;
    })
   this.loadDataInTable();
  }
  loadDataInTable(){
    this.streetLightService.getStatusDataSource().subscribe((res:any)=>{
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
  refreshStatusIndicatorDataInTable(){
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