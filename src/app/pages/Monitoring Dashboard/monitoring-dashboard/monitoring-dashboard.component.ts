import { Component, OnInit, ViewChild } from '@angular/core';
import { globalSharedService, UIModalNotificationPage } from 'global';
import { digitalStatusIndicator } from 'src/app/dto/digitalStatusIndicator';
import { statusIndicator } from 'src/app/dto/statusIndicator';
import { statusIndicatorTotalCount } from 'src/app/dto/statusIndicatorTotalCount';
import { StreetLightService } from '../../services/street-light.service';

@Component({
  selector: 'street-light-analytic-management-monitoring-dashboard',
  templateUrl: './monitoring-dashboard.component.html',
  styleUrls: ['./monitoring-dashboard.component.css']
})
export class MonitoringDashboardComponent implements OnInit {

  constructor(private streetLightService: StreetLightService, private globalService: globalSharedService) { }
  digitalStatusDataSource: digitalStatusIndicator[];
  statusDataSource: statusIndicator[];
  totalCount:statusIndicatorTotalCount[]=[];

  showLoaderImage: boolean = true;
  @ViewChild(UIModalNotificationPage) modelNotification;
  ngOnInit(): void {
    this.loadDataInTable();
  }
  loadDataInTable() {
    let organizationId = sessionStorage.getItem('beId');
    this.streetLightService.getDetailsOfDigitalStatusIndicatorData(organizationId).subscribe(data => {
      this.showLoaderImage = false;
      if (data) {
       this.digitalStatusDataSource = data["digitalStatusIndicator"];
       this.statusDataSource = data["statusIndicator"];
       this.totalCount=data["statusIndicatorTotalCount"];
       this.streetLightService.setDigitalStatusDataSource(this.digitalStatusDataSource);
       this.streetLightService.setStatusDataSource(this.statusDataSource);
       this.streetLightService.setStatusIndicatorTotalCount(this.totalCount);
      } else {
        this.showLoaderImage = false;
      }
    },
    error =>{
      this.showLoaderImage = false;
      this.modelNotification.alertMessage(this.globalService.messageType_Fail, error);
    })
  }
}
