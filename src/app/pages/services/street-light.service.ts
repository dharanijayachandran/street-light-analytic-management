import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { digitalStatusIndicator } from "src/app/dto/digitalStatusIndicator";
import { environment } from "src/environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class StreetLightService {
  totalCount:any;
  apiurl = environment.baseUrl_StreetLightManagement;
  url = environment.baseUrl_AssetManagement;
  constructor(private http: HttpClient) { }

  private digitalStatusDataSource = new Subject();

  private statusDataSource = new Subject();
  private statusTotalCount = new Subject();

  setDigitalStatusDataSource(data) {
    this.digitalStatusDataSource.next(data);
  }

  getDigitalStatusDataSource() {
    return this.digitalStatusDataSource.asObservable();
  }

  setStatusDataSource(data: any) {
    this.statusDataSource.next(data);
  }

  getStatusDataSource() {
    return this.statusDataSource.asObservable();
  }
  setStatusIndicatorTotalCount(data){
    this.statusTotalCount.next(data);
  }
  getStatusIndicatorTotalCount(){
    return this.statusTotalCount.asObservable();
  }
  getDetailsOfDigitalStatusIndicatorData(beId:any) {
    return this.http.get<any>(this.getServiceUrl("status-indicator/",beId));
  }

  getEnergyConsumptionForToday(beId:any, timezone: string): Observable<Object[]> {
    return this.http.get<Object[]>(this.getServiceUrlWithTimeZone("today-energy-consumption/",
    beId,timezone));
  }

  getEnergyConsumptionForYesterday(beId: any, timezone: string): Observable<Object[]> {
     return this.http.get<Object[]>(this.getServiceUrlWithTimeZone("yesterday-energy-consumption/",
    beId,timezone));
  }

  getDataForCurrentWeekConsumption(beId: any, timezone: string): Observable<Object[]> {
    return this.http.get<Object[]>(this.getServiceUrlWithTimeZone("current-week-energy-consumption/",
    beId,timezone));
  }
  getDataForLastWeekConsumption(beId: any, timezone: string): Observable<Object[]> {
    return this.http.get<Object[]>(this.getServiceUrlWithTimeZone("last-week-energy-consumption/",
    beId,timezone));
  }
  getDataForCurrentMonthConsumption(beId: any, timezone: string): Observable<Object[]> {

    return this.http.get<Object[]>(this.getServiceUrlWithTimeZone("current-month-energy-consumption/",
    beId,timezone));
  }

  getDataForLastMonthConsumption(beId: any, timezone: string): Observable<Object[]> {
    return this.http.get<Object[]>(this.getServiceUrlWithTimeZone("last-month-energy-consumption/",
    beId,timezone));
  }

  getDataForCurrentYearconsumption(beId: any, timezone: string): Observable<Object[]> {
    return this.http.get<Object[]>(this.getServiceUrlWithTimeZone("current-year-energy-consumption/",
    beId,timezone));
  }

  getDataForLastYearCosumption(beId: any, timezone: string): Observable<Object[]> {
    return this.http.get<Object[]>(this.getServiceUrlWithTimeZone("last-year-energy-consumption/",
    beId,timezone));
  }

  //Expenses service calls starts here


  getEnergyExpensesForToday(beId: any, timezone: string): Observable<Object[]> {
    return this.http.get<Object[]>(this.getServiceUrlWithTimeZone("today-energy-expenses/",
    beId,timezone));
  }

  getEnergyExpensesForYesterday(beId: any, timezone: string): Observable<Object[]> {
    return this.http.get<Object[]>(this.getServiceUrlWithTimeZone("yesterday-energy-expenses/",
    beId,timezone));
  }

  getDataForCurrentWeekExpenses(beId: any, timezone: string): Observable<Object[]> {
    return this.http.get<Object[]>(this.getServiceUrlWithTimeZone("current-week-energy-expenses/",
    beId,timezone));
  }
  getDataForLastWeekExpenses(beId: any, timezone: string): Observable<Object[]> {
    return this.http.get<Object[]>(this.getServiceUrlWithTimeZone("last-week-energy-expenses/",
    beId,timezone));
  }
  getDataForCurrentMonthExpenses(beId: any, timezone: string): Observable<Object[]> {
    return this.http.get<Object[]>(this.getServiceUrlWithTimeZone("current-month-energy-expenses/",
    beId,timezone));
  }

  getDataForLastMonthExpenses(beId: any, timezone: string): Observable<Object[]> {
    return this.http.get<Object[]>(this.getServiceUrlWithTimeZone("last-month-energy-expenses/",
    beId,timezone));
  }

  getDataForCurrentYearExpenses(beId: any, timezone: string): Observable<Object[]> {
    return this.http.get<Object[]>(this.getServiceUrlWithTimeZone("current-year-energy-expenses/",
    beId,timezone));
  }

  getDataForLastYearExpenses(beId: any, timezone: string): Observable<Object[]> {
    return this.http.get<Object[]>(this.getServiceUrlWithTimeZone("last-year-energy-expenses/",
    beId,timezone));
  }

  getTimeIntervalsFromFile(): Observable<any> {
    return this.http.get<any>('/assets/street-light/json/refreshtimeinterval.json');
  }
// methods
  getServiceUrl(contextPath: String, beId: any) {
    let userId = sessionStorage.getItem("userId");
    let userType = "";
    if (sessionStorage.getItem("isAdmin") == "true") {
      userType = "Admin";
    }
    return this.apiurl + contextPath + beId + "?user-id=" + userId + "&user-type=" + userType;
  }

  getServiceUrlWithTimeZone(contextPath: String, beId: any, timezone: string) {
    let url = this.getServiceUrl(contextPath, beId);
    return url + "&timezone=" + timezone;
  }
  getAssetList(organizationId: number): Observable<any[]> {
    let userType="";
    if (sessionStorage.getItem("isAdmin") == "true") {
      userType = "Admin";
    }
    let userId = sessionStorage.getItem("userId");
    return this.http.get<any[]>(this.url + 'assetsByOrganizationId/' + organizationId+"?user-id="+userId+"&user-type=" +userType+ "&offset=0&limit=0");
  }
}
