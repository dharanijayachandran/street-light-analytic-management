import { Injectable } from '@angular/core';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';
import $ from 'jquery';
import * as i0 from "@angular/core";
import * as i1 from "../excel/excel.service";
import * as i2 from "../pdf/pdf.service";
export class globalSharedService {
    constructor(excelService, pdfService) {
        this.excelService = excelService;
        this.pdfService = pdfService;
        this.selectedId = null;
        this.tabClick = null;
        this.urlName = null;
        // Asset configuration page
        this.assetViewModeFormViewStatus = 'assetViewMode';
        //Response code
        this.responseStatus = 800;
        // Error alert message type key value
        // Modal window for failed scenario(ex: Not saved)
        this.messageType_Fail = 'Failed'; //(!) with red
        // Information
        this.messageType_Info = 'Info';
        // Modal window for Warning info (ex: Cancel/Reset/Tab navigation)
        this.messageType_Warning = 'Warning'; // (!) with orange
        // Modal window for delete
        this.messageType_Error = 'Error'; // (Cross) with Red
        // Modal Window foralarm message format
        this.messageType_AlarmMessage = 'AlarmMessage';
        // Modal Window for clear message format
        this.messageType_ClearMessage = 'ClearMessage';
        // To get the Selected Dahboard name
        this.selectedDashboardName = [];
        this.setData = [];
    }
    setassetViewModeFormViewStatus(view) {
        this.assetViewModeFormViewStatus = view;
    }
    // When click on update/view, ID will pass to respective updata view
    GettingId(id) {
        this.selectedId = id;
        setTimeout(() => {
            this.selectedId = null;
        }, 1000);
    }
    GettingString(name) {
        this.name = name;
        setTimeout(() => {
            this.name = null;
        }, 2000);
    }
    setId(id) {
        this.id = id;
    }
    gettingName(name) {
        this.parentName = name;
    }
    // Store json valu to global level for show click to edit view
    setOrganizationDetail(pageName, objectDetail) {
        this.pageName = pageName;
        this.listOfRow = objectDetail;
        // setTimeout(() => {
        //     this.listOfRow = null;
        // }, 1000)
    }
    setMenuDetail(menu) {
        this.listOfRow = menu;
    }
    analogAsset(objectDetail) {
        this.analogAssetObj = objectDetail;
    }
    // User view to global level for show click to edit view tab level passing
    //=========================================( URL, Boject, tab,  Header
    listOfRowDetailForUser(url, objectDetail, tab, header) {
        this.userDetails = objectDetail;
        this.pageName = header;
        this.urlName = url;
        this.tabClick = tab;
    }
    // clearInfo
    clearInfo() {
        this.userDetails = null;
        this.pageName = null;
        this.tabClick = null;
        this.urlName = null;
        this.selectedId = null;
        this.listOfRow = null;
        sessionStorage.setItem('clickedRowDetail', null);
        // this.pageName = null;
        $('ul li').removeClass('active');
        this.assetViewModeFormViewStatus = 'assetViewMode';
    }
    getNamePattern() {
        return "^[a-zA-Z][ a-zA-Z0-9.#@*&_-]*";
    }
    getNamePatternForGatewayandAsset() {
        return "[ a-zA-Z0-9.#@*:&_-]*";
    }
    setIsAdmin(isAdmin) {
        this.isadmin = isAdmin;
    }
    doubleHyphen(event) {
        var str = event.target.value;
        var n = str.includes("--");
        if (n) {
            return true;
        }
    }
    // Landing menu
    landingMenuUrl(landingMenuUrl) {
        this.landingMenuUrlForHome = landingMenuUrl;
    }
    setNumberOfUsers(numberOfUsers) {
        this.maxUser = numberOfUsers;
        setTimeout(() => {
            this.maxUser = null;
        }, 2000);
    }
    setRoleList(confirmedList) {
        this.roleList = confirmedList;
    }
    setAssetDetail(details) {
        this.assetDetails = details;
        setTimeout(() => {
            this.assetDetails = null;
        }, 1000);
    }
    setGlobalId(id) {
        this.globalId = id;
    }
    setNotificationMedia(objectDetail) {
        this.notificationMediaList = objectDetail;
    }
    setConfirmedNotificationGroupList(objectDetail) {
        this.confirmedNotificationGroupList = objectDetail;
    }
    setConfirmedAccessGroupList(objectDetail) {
        this.confirmedAccessGroupList = objectDetail;
    }
    setUsersList(objectDetail) {
        this.usersList = objectDetail;
    }
    setNotificationGroupDetails(objectDetail) {
        this.notificationGroupDetails = objectDetail;
    }
    setNotificationMediaTabDetails(objectDetail) {
        this.notificationMediaTabDetails = objectDetail;
        setTimeout(() => {
            this.notificationMediaTabDetails = null;
        }, 2000);
    }
    setNotificationGroupmediaDetails(objectDetail) {
        this.notificationGroupmediaDetails = objectDetail;
    }
    setBackId(object) {
        this.backId = object;
    }
    // datasource
    dataSource(dataSource) {
        this.dataDataSource = dataSource;
    }
    setNotificationDetail(obj) {
        this.onpageloadNotificationGroupMediaDetails = obj;
    }
    getDashboardSelectedName(userDashboardList, id) {
        let selectedDashboardIdName = '';
        this.selectedDashboardName = userDashboardList.filter((item) => {
            if (id == null) {
                return item.isDefault == true;
            }
            else {
                return item.id == parseInt(id);
            }
        });
        if (this.selectedDashboardName.length) {
            selectedDashboardIdName = this.selectedDashboardName[0].name;
        }
        else
            selectedDashboardIdName = 'Dashboard';
        return selectedDashboardIdName;
    }
    getPatternForCommunication(dataType) {
        switch (dataType) {
            case 'String': {
                return "";
            }
            case 'Integer': {
                return "[0-9]*";
            }
            case 'Long': {
                return "[0-9]*";
            }
            case 'Double': {
                return /^[0-9]\d{0,5}(\.\d{1,4})?%?$/;
            }
            case 'Float': {
                return /^[0-9]\d{0,5}(\.\d{1,4})?%?$/;
            }
            default: {
                // return "^[a-zA-Z][ a-zA-Z0-9.#@*&_-]*";
                return "";
            }
        }
    }
    getPatternForDiscreterTag(dataType) {
        switch (dataType) {
            case 'String': {
                return "";
            }
            case 'Integer': {
                return "[0-9][0-9,]*";
            }
            case 'Long': {
                return "[0-9][0-9,]*";
            }
            case 'Double': {
                return /^[0-9]\d{0,5}(\.\d{1,4})?%?$/;
            }
            case 'Float': {
                return /^[0-9]\d{0,5}(\.\d{1,4})?%?$/;
            }
            default: {
                // return "^[a-zA-Z][ a-zA-Z0-9.#@*&_-]*";
                return "";
            }
        }
    }
    setLanguageURL(pageUrl) {
        // Getting the host name, Pathname, Current page URL
        let protocol = window.location.protocol;
        let hostName = window.location.host;
        var pathName = protocol + "//" + hostName + '/empyreal-universe/';
        var currentPageUrl;
        if (pageUrl != null) {
            currentPageUrl = pageUrl;
        }
        else {
            currentPageUrl = this.getCurrentUrl();
        }
        $('.navbar-nav.navbar-right li.dropdown a#header_language + ul > li a').each(function () {
            $(this).attr('href', '');
            let anchorTagAttrbute = $(this).attr('name');
            let path = pathName + anchorTagAttrbute + "/#" + currentPageUrl;
            $(this).attr('href', path);
        });
    }
    getCurrentUrl() {
        let pageName = document.location.href.split("#")[1];
        return pageName;
    }
    setReminingUsers(reminingUsers) {
        this.reminingUser = reminingUsers;
        setTimeout(() => {
            this.reminingUser = null;
        }, 2000);
    }
    setMaxUsers(maxUsers) {
        this.maxUsers = maxUsers;
        setTimeout(() => {
            this.maxUsers = null;
        }, 2000);
    }
    setDataServerTime(dataServerTime) {
        this.dataServerTime = dataServerTime;
        setTimeout(() => {
            this.maxUsers = null;
        }, 2000);
    }
    getExportingFileName(exportingfileName) {
        let timeSpan = new Date().toISOString();
        let getFullDay = timeSpan.split('T');
        let getTime = getFullDay[1].split(':');
        let getHrMin = getTime[0] + "H" + getTime[1] + "m";
        this.fileName = `${exportingfileName}_${getFullDay[0]}_${getHrMin}`;
        return this.fileName;
    }
    // Date and Time split for search criteria
    startDateEndDateTimeSplit(dateTime) {
        let getFullDay = dateTime.split('T');
        let getTime = getFullDay[1].split(':');
        let getHrMin = getTime[0] + ":" + getTime[1];
        return getFullDay[0] + " " + getHrMin;
    }
    // Make new set of re-arrange object
    reCreateNewObject(data, displayedColumns) {
        let sendBack = data.map(object => {
            var newObject = {};
            for (const objPropertyName of displayedColumns) {
                if (!object.hasOwnProperty(objPropertyName)) {
                    newObject[objPropertyName] = '-';
                }
                else {
                    newObject[objPropertyName] = object[objPropertyName] ? object[objPropertyName] : '-';
                }
            }
            return newObject;
        });
        return sendBack;
    }
    // Download CSV/PDF/Excel Title formate
    formateCSVTitle(titleList, headerName) {
        let headerTitle = headerName;
        let breakSentence = '\r\n';
        let titleRowKeys = '';
        let titleRowValues = '';
        let titleKeysValues;
        // Getting saperate Title Keys and Values
        for (const [key, value] of Object.entries(titleList)) {
            /* Row by Row */
            titleRowKeys += '"' + key + '"' + ',' + '"' + value + '"' + ',' + breakSentence;
        }
        //   Remove at last character (,)
        /* Row by Row */
        titleKeysValues = titleRowKeys.slice(0, -1);
        return headerTitle + breakSentence + breakSentence + titleKeysValues;
    }
    // Final download files
    downloadFile(fileType, exportFile, searchFieldsContainer, tableBodyDataList, fileName, csvOptions) {
        if (fileType == 'pdf') {
            // PDF Export format 
            this.pdfService.generatePDF(exportFile, searchFieldsContainer);
        }
        else if (fileType == 'excel') {
            // Excel export format
            this.excelService.generateExcel(exportFile, searchFieldsContainer);
        }
        else if (fileType == 'csv') {
            // Export CSV format
            new AngularCsv(tableBodyDataList, fileName, csvOptions);
        }
    }
    // Remove last element in the array
    removeLastIndexAtArray(object) {
        // Convert Obaject into Array
        let array = Object.values(object);
        array.pop();
        return array;
    }
    // Added S.No. to Download file excel,CSV, PDF
    serialNumberGenerate(array) {
        let i = 1;
        let returnModifiedArray = array.map((object) => {
            object.id = i;
            i++;
            return object;
        });
        return returnModifiedArray;
    }
    setUserEmailId(emailId) {
        this.emailId = emailId;
    }
    // Return the Selected languge for Syncfusion Dropdown 
    getLanguage() {
        return this.selectedLanguage;
    }
    // Set Language
    setLanguage(language) {
        this.selectedLanguage = language;
    }
    setMultiselectDropdownTextSettings() {
        return this.dropDownTextSettings = {
            text: $localize `:@@multiSelectDropdown.select:--Select--`,
            noDataLabel: $localize `:@@multiSelectDropdown.noDataLabel:No Data Available`
        };
    }
    setGatewayLableName(path) {
        let gatewayAndTemplateLableName;
        if (path[1] == "asset-template") {
            return gatewayAndTemplateLableName = "Gateway Template";
        }
        else if (path[1] == "asset") {
            return gatewayAndTemplateLableName = "Gateway";
        }
    }
    setDataValue(data) {
        this.setData = data;
    }
    getDataValue() {
        return this.setData;
    }
}
globalSharedService.ɵfac = function globalSharedService_Factory(t) { return new (t || globalSharedService)(i0.ɵɵinject(i1.ExcelService), i0.ɵɵinject(i2.PdfService)); };
globalSharedService.ɵprov = i0.ɵɵdefineInjectable({ token: globalSharedService, factory: globalSharedService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(globalSharedService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.ExcelService }, { type: i2.PdfService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsU2hhcmVkU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsb2JhbC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9nbG9iYWwvZ2xvYmFsU2hhcmVkU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUczRCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7Ozs7QUFJdkIsTUFBTSxPQUFPLG1CQUFtQjtJQWdENUIsWUFBb0IsWUFBMEIsRUFBVSxVQUFzQjtRQUExRCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUE1Q3ZFLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFJekIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBTWYsMkJBQTJCO1FBQzNCLGdDQUEyQixHQUFHLGVBQWUsQ0FBQztRQWdIOUMsZUFBZTtRQUNmLG1CQUFjLEdBQUcsR0FBRyxDQUFDO1FBR3JCLHFDQUFxQztRQUNyQyxrREFBa0Q7UUFDbEQscUJBQWdCLEdBQUcsUUFBUSxDQUFDLENBQUMsY0FBYztRQUMzQyxjQUFjO1FBQ2QscUJBQWdCLEdBQUcsTUFBTSxDQUFDO1FBQzFCLGtFQUFrRTtRQUNsRSx3QkFBbUIsR0FBRyxTQUFTLENBQUMsQ0FBRSxrQkFBa0I7UUFDcEQsMEJBQTBCO1FBQzFCLHNCQUFpQixHQUFHLE9BQU8sQ0FBQyxDQUFDLG1CQUFtQjtRQUVoRCx1Q0FBdUM7UUFDdkMsNkJBQXdCLEdBQUcsY0FBYyxDQUFDO1FBRTFDLHdDQUF3QztRQUN4Qyw2QkFBd0IsR0FBRyxjQUFjLENBQUM7UUFpRTFDLG9DQUFvQztRQUNwQywwQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFtUDNCLFlBQU8sR0FBUyxFQUFFLENBQUM7SUFyWm5CLENB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bUJBQW1CLFdBQW5CLG1CQUFtQixtQkFETixNQUFNO2tEQUNuQixtQkFBbUI7Y0FEL0IsVUFBVTtlQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbmd1bGFyQ3N2IH0gZnJvbSAnYW5ndWxhcjctY3N2L2Rpc3QvQW5ndWxhci1jc3YnO1xyXG5pbXBvcnQgeyBFeGNlbFNlcnZpY2UgfSBmcm9tICcuLi9leGNlbC9leGNlbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGRmU2VydmljZSB9IGZyb20gJy4uL3BkZi9wZGYuc2VydmljZSc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIGdsb2JhbFNoYXJlZFNlcnZpY2Uge1xyXG5cclxuICAgIC8vIEdldHRpbmcgSUQgdmFsdWUgXHJcbiAgICBuYW1lOiBhbnk7XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRJZCA9IG51bGw7XHJcbiAgICBwdWJsaWMgbGlzdE9mUm93OiBhbnk7XHJcbiAgICBwYWdlTmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHVzZXJEZXRhaWxzOiBhbnk7XHJcbiAgICB0YWJDbGljayA9IG51bGw7XHJcbiAgICB1cmxOYW1lID0gbnVsbDtcclxuICAgIGxpc3RPZk1vZHVsZXNmb3JTZXJ2aWNlczogYW55O1xyXG4gICAgcGFyZW50TmFtZTogYW55O1xyXG5cclxuICAgIGFuYWxvZ0Fzc2V0T2JqOiBhbnk7XHJcblxyXG4gICAgLy8gQXNzZXQgY29uZmlndXJhdGlvbiBwYWdlXHJcbiAgICBhc3NldFZpZXdNb2RlRm9ybVZpZXdTdGF0dXMgPSAnYXNzZXRWaWV3TW9kZSc7XHJcbiAgICByZXN1bHQ6IHN0cmluZztcclxuICAgIGlzYWRtaW46IGJvb2xlYW47XHJcbiAgICBsYW5kaW5nTWVudVVybEZvckhvbWU6IGFueTtcclxuICAgIG1heFVzZXI6IGFueTtcclxuICAgIHJvbGVMaXN0OiBhbnlbXTtcclxuICAgIGFzc2V0RGV0YWlsczogYW55O1xyXG4gICAgZ2xvYmFsSWQ6IGFueTtcclxuICAgIG5vdGlmaWNhdGlvbk1lZGlhTGlzdDogYW55W107XHJcbiAgICBjb25maXJtZWROb3RpZmljYXRpb25Hcm91cExpc3Q6IGFueVtdO1xyXG4gICAgdXNlcnNMaXN0OiBhbnlbXTtcclxuICAgIHB1YmxpYyBub3RpZmljYXRpb25Hcm91cERldGFpbHM6IGFueTtcclxuICAgIG5vdGlmaWNhdGlvbk1lZGlhVGFiRGV0YWlsczogYW55O1xyXG4gICAgbm90aWZpY2F0aW9uR3JvdXBtZWRpYURldGFpbHM6IGFueTtcclxuICAgIGJhY2tJZDogc3RyaW5nO1xyXG4gICAgZGF0YURhdGFTb3VyY2U6IGFueTtcclxuICAgIG9ucGFnZWxvYWROb3RpZmljYXRpb25Hcm91cE1lZGlhRGV0YWlsczogYW55O1xyXG4gICAgY29uZmlybWVkQWNjZXNzR3JvdXBMaXN0OiBhbnk7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgcmVtaW5pbmdVc2VyOiBudW1iZXI7XHJcbiAgICBtYXhVc2VyczogbnVtYmVyO1xyXG4gICAgZGF0YVNlcnZlclRpbWU6IGFueTtcclxuICAgIGVtYWlsSWQ6IHN0cmluZztcclxuICAgIGRyb3BEb3duVGV4dFNldHRpbmdzOiB7XHJcbiAgICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgICAgIG5vRGF0YUxhYmVsOiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgc2V0YXNzZXRWaWV3TW9kZUZvcm1WaWV3U3RhdHVzKHZpZXcpIHtcclxuICAgICAgICB0aGlzLmFzc2V0Vmlld01vZGVGb3JtVmlld1N0YXR1cyA9IHZpZXc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZXhjZWxTZXJ2aWNlOiBFeGNlbFNlcnZpY2UsIHByaXZhdGUgcGRmU2VydmljZTogUGRmU2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBXaGVuIGNsaWNrIG9uIHVwZGF0ZS92aWV3LCBJRCB3aWxsIHBhc3MgdG8gcmVzcGVjdGl2ZSB1cGRhdGEgdmlld1xyXG4gICAgR2V0dGluZ0lkKGlkKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZElkID0gaWQ7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJZCA9IG51bGw7XHJcbiAgICAgICAgfSwgMTAwMClcclxuICAgIH1cclxuICAgIEdldHRpbmdTdHJpbmcobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG51bGw7XHJcbiAgICAgICAgfSwgMjAwMClcclxuICAgIH1cclxuICAgIHNldElkKGlkKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG4gICAgZ2V0dGluZ05hbWUobmFtZSkge1xyXG4gICAgICAgIHRoaXMucGFyZW50TmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcbiAgICAvLyBTdG9yZSBqc29uIHZhbHUgdG8gZ2xvYmFsIGxldmVsIGZvciBzaG93IGNsaWNrIHRvIGVkaXQgdmlld1xyXG4gICAgc2V0T3JnYW5pemF0aW9uRGV0YWlsKHBhZ2VOYW1lLCBvYmplY3REZXRhaWwpIHtcclxuICAgICAgICB0aGlzLnBhZ2VOYW1lID0gcGFnZU5hbWU7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZSb3cgPSBvYmplY3REZXRhaWw7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubGlzdE9mUm93ID0gbnVsbDtcclxuICAgICAgICAvLyB9LCAxMDAwKVxyXG4gICAgfVxyXG4gICAgc2V0TWVudURldGFpbChtZW51OiBhbnkpIHtcclxuICAgICAgICB0aGlzLmxpc3RPZlJvdyA9IG1lbnU7XHJcbiAgICB9XHJcblxyXG4gICAgYW5hbG9nQXNzZXQob2JqZWN0RGV0YWlsKSB7XHJcbiAgICAgICAgdGhpcy5hbmFsb2dBc3NldE9iaiA9IG9iamVjdERldGFpbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVc2VyIHZpZXcgdG8gZ2xvYmFsIGxldmVsIGZvciBzaG93IGNsaWNrIHRvIGVkaXQgdmlldyB0YWIgbGV2ZWwgcGFzc2luZ1xyXG5cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0oIFVSTCwgQm9qZWN0LCB0YWIsICBIZWFkZXJcclxuICAgIGxpc3RPZlJvd0RldGFpbEZvclVzZXIodXJsLCBvYmplY3REZXRhaWwsIHRhYiwgaGVhZGVyKSB7XHJcbiAgICAgICAgdGhpcy51c2VyRGV0YWlscyA9IG9iamVjdERldGFpbDtcclxuICAgICAgICB0aGlzLnBhZ2VOYW1lID0gaGVhZGVyO1xyXG4gICAgICAgIHRoaXMudXJsTmFtZSA9IHVybDtcclxuICAgICAgICB0aGlzLnRhYkNsaWNrID0gdGFiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNsZWFySW5mb1xyXG4gICAgY2xlYXJJbmZvKCkge1xyXG4gICAgICAgIHRoaXMudXNlckRldGFpbHMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucGFnZU5hbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudGFiQ2xpY2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudXJsTmFtZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZElkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxpc3RPZlJvdyA9IG51bGw7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY2xpY2tlZFJvd0RldGFpbCcsIG51bGwpO1xyXG4gICAgICAgIC8vIHRoaXMucGFnZU5hbWUgPSBudWxsO1xyXG4gICAgICAgICQoJ3VsIGxpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMuYXNzZXRWaWV3TW9kZUZvcm1WaWV3U3RhdHVzID0gJ2Fzc2V0Vmlld01vZGUnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5hbWVQYXR0ZXJuKCkge1xyXG4gICAgICAgIHJldHVybiBcIl5bYS16QS1aXVsgYS16QS1aMC05LiNAKiZfLV0qXCI7XHJcbiAgICB9XHJcbiAgICBnZXROYW1lUGF0dGVybkZvckdhdGV3YXlhbmRBc3NldCgpIHtcclxuICAgICAgICByZXR1cm4gXCJbIGEtekEtWjAtOS4jQCo6Jl8tXSpcIjtcclxuICAgIH1cclxuICAgIHNldElzQWRtaW4oaXNBZG1pbjogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuaXNhZG1pbiA9IGlzQWRtaW47XHJcbiAgICB9XHJcbiAgICBkb3VibGVIeXBoZW4oZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHZhciBzdHIgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdmFyIG4gPSBzdHIuaW5jbHVkZXMoXCItLVwiKTtcclxuICAgICAgICBpZiAobikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9SZXNwb25zZSBjb2RlXHJcbiAgICByZXNwb25zZVN0YXR1cyA9IDgwMDtcclxuXHJcblxyXG4gICAgLy8gRXJyb3IgYWxlcnQgbWVzc2FnZSB0eXBlIGtleSB2YWx1ZVxyXG4gICAgLy8gTW9kYWwgd2luZG93IGZvciBmYWlsZWQgc2NlbmFyaW8oZXg6IE5vdCBzYXZlZClcclxuICAgIG1lc3NhZ2VUeXBlX0ZhaWwgPSAnRmFpbGVkJzsgLy8oISkgd2l0aCByZWRcclxuICAgIC8vIEluZm9ybWF0aW9uXHJcbiAgICBtZXNzYWdlVHlwZV9JbmZvID0gJ0luZm8nO1xyXG4gICAgLy8gTW9kYWwgd2luZG93IGZvciBXYXJuaW5nIGluZm8gKGV4OiBDYW5jZWwvUmVzZXQvVGFiIG5hdmlnYXRpb24pXHJcbiAgICBtZXNzYWdlVHlwZV9XYXJuaW5nID0gJ1dhcm5pbmcnOyAgLy8gKCEpIHdpdGggb3JhbmdlXHJcbiAgICAvLyBNb2RhbCB3aW5kb3cgZm9yIGRlbGV0ZVxyXG4gICAgbWVzc2FnZVR5cGVfRXJyb3IgPSAnRXJyb3InOyAvLyAoQ3Jvc3MpIHdpdGggUmVkXHJcblxyXG4gICAgLy8gTW9kYWwgV2luZG93IGZvcmFsYXJtIG1lc3NhZ2UgZm9ybWF0XHJcbiAgICBtZXNzYWdlVHlwZV9BbGFybU1lc3NhZ2UgPSAnQWxhcm1NZXNzYWdlJztcclxuXHJcbiAgICAvLyBNb2RhbCBXaW5kb3cgZm9yIGNsZWFyIG1lc3NhZ2UgZm9ybWF0XHJcbiAgICBtZXNzYWdlVHlwZV9DbGVhck1lc3NhZ2UgPSAnQ2xlYXJNZXNzYWdlJztcclxuXHJcbiAgICAvLyBMYW5kaW5nIG1lbnVcclxuXHJcbiAgICBsYW5kaW5nTWVudVVybChsYW5kaW5nTWVudVVybCkge1xyXG4gICAgICAgIHRoaXMubGFuZGluZ01lbnVVcmxGb3JIb21lID0gbGFuZGluZ01lbnVVcmw7XHJcbiAgICB9XHJcbiAgICBzZXROdW1iZXJPZlVzZXJzKG51bWJlck9mVXNlcnM6IGFueSkge1xyXG4gICAgICAgIHRoaXMubWF4VXNlciA9IG51bWJlck9mVXNlcnM7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubWF4VXNlciA9IG51bGw7XHJcbiAgICAgICAgfSwgMjAwMClcclxuICAgIH1cclxuICAgIHNldFJvbGVMaXN0KGNvbmZpcm1lZExpc3Q6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5yb2xlTGlzdCA9IGNvbmZpcm1lZExpc3Q7XHJcbiAgICB9XHJcbiAgICBzZXRBc3NldERldGFpbChkZXRhaWxzKSB7XHJcbiAgICAgICAgdGhpcy5hc3NldERldGFpbHMgPSBkZXRhaWxzO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFzc2V0RGV0YWlscyA9IG51bGw7XHJcbiAgICAgICAgfSwgMTAwMClcclxuICAgIH1cclxuXHJcbiAgICBzZXRHbG9iYWxJZChpZDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5nbG9iYWxJZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE5vdGlmaWNhdGlvbk1lZGlhKG9iamVjdERldGFpbCkge1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uTWVkaWFMaXN0ID0gb2JqZWN0RGV0YWlsO1xyXG4gICAgfVxyXG4gICAgc2V0Q29uZmlybWVkTm90aWZpY2F0aW9uR3JvdXBMaXN0KG9iamVjdERldGFpbCkge1xyXG4gICAgICAgIHRoaXMuY29uZmlybWVkTm90aWZpY2F0aW9uR3JvdXBMaXN0ID0gb2JqZWN0RGV0YWlsO1xyXG4gICAgfVxyXG4gICAgc2V0Q29uZmlybWVkQWNjZXNzR3JvdXBMaXN0KG9iamVjdERldGFpbCkge1xyXG4gICAgICAgIHRoaXMuY29uZmlybWVkQWNjZXNzR3JvdXBMaXN0ID0gb2JqZWN0RGV0YWlsO1xyXG4gICAgfVxyXG4gICAgc2V0VXNlcnNMaXN0KG9iamVjdERldGFpbCkge1xyXG4gICAgICAgIHRoaXMudXNlcnNMaXN0ID0gb2JqZWN0RGV0YWlsO1xyXG4gICAgfVxyXG4gICAgc2V0Tm90aWZpY2F0aW9uR3JvdXBEZXRhaWxzKG9iamVjdERldGFpbCkge1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uR3JvdXBEZXRhaWxzID0gb2JqZWN0RGV0YWlsO1xyXG4gICAgfVxyXG4gICAgc2V0Tm90aWZpY2F0aW9uTWVkaWFUYWJEZXRhaWxzKG9iamVjdERldGFpbCkge1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uTWVkaWFUYWJEZXRhaWxzID0gb2JqZWN0RGV0YWlsO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbk1lZGlhVGFiRGV0YWlscyA9IG51bGw7XHJcbiAgICAgICAgfSwgMjAwMClcclxuICAgIH1cclxuXHJcbiAgICBzZXROb3RpZmljYXRpb25Hcm91cG1lZGlhRGV0YWlscyhvYmplY3REZXRhaWwpIHtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbkdyb3VwbWVkaWFEZXRhaWxzID0gb2JqZWN0RGV0YWlsO1xyXG4gICAgfVxyXG4gICAgc2V0QmFja0lkKG9iamVjdCkge1xyXG4gICAgICAgIHRoaXMuYmFja0lkID0gb2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRhdGFzb3VyY2VcclxuICAgIGRhdGFTb3VyY2UoZGF0YVNvdXJjZSkge1xyXG4gICAgICAgIHRoaXMuZGF0YURhdGFTb3VyY2UgPSBkYXRhU291cmNlO1xyXG4gICAgfVxyXG4gICAgc2V0Tm90aWZpY2F0aW9uRGV0YWlsKG9iaikge1xyXG4gICAgICAgIHRoaXMub25wYWdlbG9hZE5vdGlmaWNhdGlvbkdyb3VwTWVkaWFEZXRhaWxzID0gb2JqO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBUbyBnZXQgdGhlIFNlbGVjdGVkIERhaGJvYXJkIG5hbWVcclxuICAgIHNlbGVjdGVkRGFzaGJvYXJkTmFtZSA9IFtdO1xyXG4gICAgZ2V0RGFzaGJvYXJkU2VsZWN0ZWROYW1lKHVzZXJEYXNoYm9hcmRMaXN0LCBpZCkge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZERhc2hib2FyZElkTmFtZSA9ICcnO1xyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkRGFzaGJvYXJkTmFtZSA9IHVzZXJEYXNoYm9hcmRMaXN0LmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaXNEZWZhdWx0ID09IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5pZCA9PSBwYXJzZUludChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREYXNoYm9hcmROYW1lLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZWxlY3RlZERhc2hib2FyZElkTmFtZSA9IHRoaXMuc2VsZWN0ZWREYXNoYm9hcmROYW1lWzBdLm5hbWU7XHJcbiAgICAgICAgfSBlbHNlIHNlbGVjdGVkRGFzaGJvYXJkSWROYW1lID0gJ0Rhc2hib2FyZCc7XHJcblxyXG4gICAgICAgIHJldHVybiBzZWxlY3RlZERhc2hib2FyZElkTmFtZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0UGF0dGVybkZvckNvbW11bmljYXRpb24oZGF0YVR5cGUpOiBhbnkge1xyXG4gICAgICAgIHN3aXRjaCAoZGF0YVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnU3RyaW5nJzoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnSW50ZWdlcic6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlswLTldKlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ0xvbmcnOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJbMC05XSpcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdEb3VibGUnOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gL15bMC05XVxcZHswLDV9KFxcLlxcZHsxLDR9KT8lPyQvXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnRmxvYXQnOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gL15bMC05XVxcZHswLDV9KFxcLlxcZHsxLDR9KT8lPyQvXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIFwiXlthLXpBLVpdWyBhLXpBLVowLTkuI0AqJl8tXSpcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGdldFBhdHRlcm5Gb3JEaXNjcmV0ZXJUYWcoZGF0YVR5cGUpOiBhbnkge1xyXG4gICAgICAgIHN3aXRjaCAoZGF0YVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnU3RyaW5nJzoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnSW50ZWdlcic6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlswLTldWzAtOSxdKlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ0xvbmcnOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJbMC05XVswLTksXSpcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdEb3VibGUnOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gL15bMC05XVxcZHswLDV9KFxcLlxcZHsxLDR9KT8lPyQvXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnRmxvYXQnOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gL15bMC05XVxcZHswLDV9KFxcLlxcZHsxLDR9KT8lPyQvXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIFwiXlthLXpBLVpdWyBhLXpBLVowLTkuI0AqJl8tXSpcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHNldExhbmd1YWdlVVJMKHBhZ2VVcmwpIHtcclxuICAgICAgICAvLyBHZXR0aW5nIHRoZSBob3N0IG5hbWUsIFBhdGhuYW1lLCBDdXJyZW50IHBhZ2UgVVJMXHJcbiAgICAgICAgbGV0IHByb3RvY29sID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sXHJcbiAgICAgICAgbGV0IGhvc3ROYW1lID0gd2luZG93LmxvY2F0aW9uLmhvc3Q7XHJcbiAgICAgICAgdmFyIHBhdGhOYW1lID0gcHJvdG9jb2wgKyBcIi8vXCIgKyBob3N0TmFtZSArICcvZW1weXJlYWwtdW5pdmVyc2UvJztcclxuICAgICAgICB2YXIgY3VycmVudFBhZ2VVcmw7XHJcbiAgICAgICAgaWYgKHBhZ2VVcmwgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZVVybCA9IHBhZ2VVcmw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2VVcmwgPSB0aGlzLmdldEN1cnJlbnRVcmwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnLm5hdmJhci1uYXYubmF2YmFyLXJpZ2h0IGxpLmRyb3Bkb3duIGEjaGVhZGVyX2xhbmd1YWdlICsgdWwgPiBsaSBhJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYXR0cignaHJlZicsICcnKTtcclxuICAgICAgICAgICAgbGV0IGFuY2hvclRhZ0F0dHJidXRlID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICAgICAgICAgIGxldCBwYXRoID0gcGF0aE5hbWUgKyBhbmNob3JUYWdBdHRyYnV0ZSArIFwiLyNcIiArIGN1cnJlbnRQYWdlVXJsO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2hyZWYnLCBwYXRoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0Q3VycmVudFVybCgpIHtcclxuICAgICAgICBsZXQgcGFnZU5hbWUgPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiI1wiKVsxXTtcclxuICAgICAgICByZXR1cm4gcGFnZU5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UmVtaW5pbmdVc2VycyhyZW1pbmluZ1VzZXJzOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnJlbWluaW5nVXNlciA9IHJlbWluaW5nVXNlcnM7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtaW5pbmdVc2VyID0gbnVsbDtcclxuICAgICAgICB9LCAyMDAwKVxyXG4gICAgfVxyXG4gICAgc2V0TWF4VXNlcnMobWF4VXNlcnM6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubWF4VXNlcnMgPSBtYXhVc2VycztcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tYXhVc2VycyA9IG51bGw7XHJcbiAgICAgICAgfSwgMjAwMClcclxuICAgIH1cclxuICAgIHNldERhdGFTZXJ2ZXJUaW1lKGRhdGFTZXJ2ZXJUaW1lKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU2VydmVyVGltZSA9IGRhdGFTZXJ2ZXJUaW1lO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1heFVzZXJzID0gbnVsbDtcclxuICAgICAgICB9LCAyMDAwKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBEb3dubG9hZCBhcyBhIENTVi9QREYvRXhjZWwgZmlsZSBuYW1lXHJcbiAgICBmaWxlTmFtZTogc3RyaW5nO1xyXG4gICAgZ2V0RXhwb3J0aW5nRmlsZU5hbWUoZXhwb3J0aW5nZmlsZU5hbWUpIHtcclxuICAgICAgICBsZXQgdGltZVNwYW4gPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgICAgbGV0IGdldEZ1bGxEYXkgPSB0aW1lU3Bhbi5zcGxpdCgnVCcpO1xyXG4gICAgICAgIGxldCBnZXRUaW1lID0gZ2V0RnVsbERheVsxXS5zcGxpdCgnOicpO1xyXG4gICAgICAgIGxldCBnZXRIck1pbiA9IGdldFRpbWVbMF0gKyBcIkhcIiArIGdldFRpbWVbMV0gKyBcIm1cIjtcclxuICAgICAgICB0aGlzLmZpbGVOYW1lID0gYCR7ZXhwb3J0aW5nZmlsZU5hbWV9XyR7Z2V0RnVsbERheVswXX1fJHtnZXRIck1pbn1gO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERhdGUgYW5kIFRpbWUgc3BsaXQgZm9yIHNlYXJjaCBjcml0ZXJpYVxyXG4gICAgc3RhcnREYXRlRW5kRGF0ZVRpbWVTcGxpdChkYXRlVGltZSkge1xyXG4gICAgICAgIGxldCBnZXRGdWxsRGF5ID0gZGF0ZVRpbWUuc3BsaXQoJ1QnKTtcclxuICAgICAgICBsZXQgZ2V0VGltZSA9IGdldEZ1bGxEYXlbMV0uc3BsaXQoJzonKTtcclxuICAgICAgICBsZXQgZ2V0SHJNaW4gPSBnZXRUaW1lWzBdICsgXCI6XCIgKyBnZXRUaW1lWzFdO1xyXG4gICAgICAgIHJldHVybiBnZXRGdWxsRGF5WzBdICsgXCIgXCIgKyBnZXRIck1pbjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYWtlIG5ldyBzZXQgb2YgcmUtYXJyYW5nZSBvYmplY3RcclxuICAgIHJlQ3JlYXRlTmV3T2JqZWN0KGRhdGEsIGRpc3BsYXllZENvbHVtbnMpIHtcclxuICAgICAgICBsZXQgc2VuZEJhY2sgPSBkYXRhLm1hcChvYmplY3QgPT4ge1xyXG4gICAgICAgICAgICB2YXIgbmV3T2JqZWN0ID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgb2JqUHJvcGVydHlOYW1lIG9mIGRpc3BsYXllZENvbHVtbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmICghb2JqZWN0Lmhhc093blByb3BlcnR5KG9ialByb3BlcnR5TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdPYmplY3Rbb2JqUHJvcGVydHlOYW1lXSA9ICctJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3T2JqZWN0W29ialByb3BlcnR5TmFtZV0gPSBvYmplY3Rbb2JqUHJvcGVydHlOYW1lXSA/IG9iamVjdFtvYmpQcm9wZXJ0eU5hbWVdIDogJy0nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdPYmplY3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHNlbmRCYWNrO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gRG93bmxvYWQgQ1NWL1BERi9FeGNlbCBUaXRsZSBmb3JtYXRlXHJcbiAgICBmb3JtYXRlQ1NWVGl0bGUodGl0bGVMaXN0LCBoZWFkZXJOYW1lKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlclRpdGxlID0gaGVhZGVyTmFtZTtcclxuICAgICAgICBsZXQgYnJlYWtTZW50ZW5jZSA9ICdcXHJcXG4nO1xyXG4gICAgICAgIGxldCB0aXRsZVJvd0tleXMgPSAnJztcclxuICAgICAgICBsZXQgdGl0bGVSb3dWYWx1ZXMgPSAnJztcclxuICAgICAgICBsZXQgdGl0bGVLZXlzVmFsdWVzO1xyXG5cclxuICAgICAgICAvLyBHZXR0aW5nIHNhcGVyYXRlIFRpdGxlIEtleXMgYW5kIFZhbHVlc1xyXG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRpdGxlTGlzdCkpIHtcclxuICAgICAgICAgICAgLyogUm93IGJ5IFJvdyAqL1xyXG4gICAgICAgICAgICB0aXRsZVJvd0tleXMgKz0gJ1wiJyArIGtleSArICdcIicgKyAnLCcgKyAnXCInICsgdmFsdWUgKyAnXCInICsgJywnICsgYnJlYWtTZW50ZW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgUmVtb3ZlIGF0IGxhc3QgY2hhcmFjdGVyICgsKVxyXG4gICAgICAgIC8qIFJvdyBieSBSb3cgKi9cclxuICAgICAgICB0aXRsZUtleXNWYWx1ZXMgPSB0aXRsZVJvd0tleXMuc2xpY2UoMCwgLTEpO1xyXG5cclxuICAgICAgICByZXR1cm4gaGVhZGVyVGl0bGUgKyBicmVha1NlbnRlbmNlICsgYnJlYWtTZW50ZW5jZSArIHRpdGxlS2V5c1ZhbHVlcztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluYWwgZG93bmxvYWQgZmlsZXNcclxuICAgIGRvd25sb2FkRmlsZShmaWxlVHlwZSwgZXhwb3J0RmlsZSwgc2VhcmNoRmllbGRzQ29udGFpbmVyLCB0YWJsZUJvZHlEYXRhTGlzdCwgZmlsZU5hbWUsIGNzdk9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoZmlsZVR5cGUgPT0gJ3BkZicpIHtcclxuICAgICAgICAgICAgLy8gUERGIEV4cG9ydCBmb3JtYXQgXHJcbiAgICAgICAgICAgIHRoaXMucGRmU2VydmljZS5nZW5lcmF0ZVBERihleHBvcnRGaWxlLCBzZWFyY2hGaWVsZHNDb250YWluZXIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZVR5cGUgPT0gJ2V4Y2VsJykge1xyXG4gICAgICAgICAgICAvLyBFeGNlbCBleHBvcnQgZm9ybWF0XHJcbiAgICAgICAgICAgIHRoaXMuZXhjZWxTZXJ2aWNlLmdlbmVyYXRlRXhjZWwoZXhwb3J0RmlsZSwgc2VhcmNoRmllbGRzQ29udGFpbmVyKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVUeXBlID09ICdjc3YnKSB7XHJcbiAgICAgICAgICAgIC8vIEV4cG9ydCBDU1YgZm9ybWF0XHJcbiAgICAgICAgICAgIG5ldyBBbmd1bGFyQ3N2KHRhYmxlQm9keURhdGFMaXN0LCBmaWxlTmFtZSwgY3N2T3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBSZW1vdmUgbGFzdCBlbGVtZW50IGluIHRoZSBhcnJheVxyXG4gICAgcmVtb3ZlTGFzdEluZGV4QXRBcnJheShvYmplY3QpIHtcclxuICAgICAgICAvLyBDb252ZXJ0IE9iYWplY3QgaW50byBBcnJheVxyXG4gICAgICAgIGxldCBhcnJheSA9IE9iamVjdC52YWx1ZXMob2JqZWN0KTtcclxuICAgICAgICBhcnJheS5wb3AoKTtcclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkZWQgUy5Oby4gdG8gRG93bmxvYWQgZmlsZSBleGNlbCxDU1YsIFBERlxyXG4gICAgc2VyaWFsTnVtYmVyR2VuZXJhdGUoYXJyYXkpIHtcclxuICAgICAgICBsZXQgaSA9IDE7XHJcbiAgICAgICAgbGV0IHJldHVybk1vZGlmaWVkQXJyYXkgPSBhcnJheS5tYXAoKG9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBvYmplY3QuaWQgPSBpO1xyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJldHVybk1vZGlmaWVkQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXNlckVtYWlsSWQoZW1haWxJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lbWFpbElkID0gZW1haWxJZDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gICBTZWxlY3RlZCBMYW5ndWFnZVxyXG4gICAgcHVibGljIHNlbGVjdGVkTGFuZ3VhZ2U6IHN0cmluZztcclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIFNlbGVjdGVkIGxhbmd1Z2UgZm9yIFN5bmNmdXNpb24gRHJvcGRvd24gXHJcbiAgICBnZXRMYW5ndWFnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZExhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldCBMYW5ndWFnZVxyXG4gICAgc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTGFuZ3VhZ2UgPSBsYW5ndWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNdWx0aXNlbGVjdERyb3Bkb3duVGV4dFNldHRpbmdzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRyb3BEb3duVGV4dFNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICB0ZXh0OiAkbG9jYWxpemVgOkBAbXVsdGlTZWxlY3REcm9wZG93bi5zZWxlY3Q6LS1TZWxlY3QtLWAsXHJcbiAgICAgICAgICAgIG5vRGF0YUxhYmVsOiAkbG9jYWxpemVgOkBAbXVsdGlTZWxlY3REcm9wZG93bi5ub0RhdGFMYWJlbDpObyBEYXRhIEF2YWlsYWJsZWBcclxuICAgICAgICB9O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRHYXRld2F5TGFibGVOYW1lKHBhdGgpIHtcclxuICAgICAgICBsZXQgZ2F0ZXdheUFuZFRlbXBsYXRlTGFibGVOYW1lO1xyXG4gICAgICAgIGlmIChwYXRoWzFdID09IFwiYXNzZXQtdGVtcGxhdGVcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2F0ZXdheUFuZFRlbXBsYXRlTGFibGVOYW1lID0gXCJHYXRld2F5IFRlbXBsYXRlXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBhdGhbMV0gPT0gXCJhc3NldFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnYXRld2F5QW5kVGVtcGxhdGVMYWJsZU5hbWUgPSBcIkdhdGV3YXlcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldERhdGE6YW55W10gPSBbXTtcclxuICAgIHNldERhdGFWYWx1ZShkYXRhKXtcclxuICAgICAgICB0aGlzLnNldERhdGEgPSBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGFWYWx1ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldERhdGE7XHJcbiAgICB9XHJcbn0iXX0=