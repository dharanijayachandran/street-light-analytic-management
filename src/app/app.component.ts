import { Component } from '@angular/core';

@Component({
  selector: 'street-light-analytic-management-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'street-light-analytic-management';
  topMenu: any;
  sidebarMenuFlag: any;
  constructor(){
     //reading topMenu and sidebar menu flags from session storage
 this.topMenu = JSON.parse(sessionStorage.getItem("topMenu"));
 this.sidebarMenuFlag = JSON.parse(sessionStorage.getItem("sidebarMenu"));
 //if no theme selected,means theme don;t have any preference for menu,we are making side bar as true here.
 if (this.sidebarMenuFlag == undefined && this.topMenu == undefined) {
   this.topMenu = true;
 }
  }
}

