import { __makeTemplateObject, __read, __values } from "tslib";
import { Injectable } from '@angular/core';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';
import $ from 'jquery';
import * as i0 from "@angular/core";
import * as i1 from "../excel/excel.service";
import * as i2 from "../pdf/pdf.service";
var globalSharedService = /** @class */ (function () {
    function globalSharedService(excelService, pdfService) {
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
    globalSharedService.prototype.setassetViewModeFormViewStatus = function (view) {
        this.assetViewModeFormViewStatus = view;
    };
    // When click on update/view, ID will pass to respective updata view
    globalSharedService.prototype.GettingId = function (id) {
        var _this = this;
        this.selectedId = id;
        setTimeout(function () {
            _this.selectedId = null;
        }, 1000);
    };
    globalSharedService.prototype.GettingString = function (name) {
        var _this = this;
        this.name = name;
        setTimeout(function () {
            _this.name = null;
        }, 2000);
    };
    globalSharedService.prototype.setId = function (id) {
        this.id = id;
    };
    globalSharedService.prototype.gettingName = function (name) {
        this.parentName = name;
    };
    // Store json valu to global level for show click to edit view
    globalSharedService.prototype.setOrganizationDetail = function (pageName, objectDetail) {
        this.pageName = pageName;
        this.listOfRow = objectDetail;
        // setTimeout(() => {
        //     this.listOfRow = null;
        // }, 1000)
    };
    globalSharedService.prototype.setMenuDetail = function (menu) {
        this.listOfRow = menu;
    };
    globalSharedService.prototype.analogAsset = function (objectDetail) {
        this.analogAssetObj = objectDetail;
    };
    // User view to global level for show click to edit view tab level passing
    //=========================================( URL, Boject, tab,  Header
    globalSharedService.prototype.listOfRowDetailForUser = function (url, objectDetail, tab, header) {
        this.userDetails = objectDetail;
        this.pageName = header;
        this.urlName = url;
        this.tabClick = tab;
    };
    // clearInfo
    globalSharedService.prototype.clearInfo = function () {
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
    };
    globalSharedService.prototype.getNamePattern = function () {
        return "^[a-zA-Z][ a-zA-Z0-9.#@*&_-]*";
    };
    globalSharedService.prototype.getNamePatternForGatewayandAsset = function () {
        return "[ a-zA-Z0-9.#@*:&_-]*";
    };
    globalSharedService.prototype.setIsAdmin = function (isAdmin) {
        this.isadmin = isAdmin;
    };
    globalSharedService.prototype.doubleHyphen = function (event) {
        var str = event.target.value;
        var n = str.includes("--");
        if (n) {
            return true;
        }
    };
    // Landing menu
    globalSharedService.prototype.landingMenuUrl = function (landingMenuUrl) {
        this.landingMenuUrlForHome = landingMenuUrl;
    };
    globalSharedService.prototype.setNumberOfUsers = function (numberOfUsers) {
        var _this = this;
        this.maxUser = numberOfUsers;
        setTimeout(function () {
            _this.maxUser = null;
        }, 2000);
    };
    globalSharedService.prototype.setRoleList = function (confirmedList) {
        this.roleList = confirmedList;
    };
    globalSharedService.prototype.setAssetDetail = function (details) {
        var _this = this;
        this.assetDetails = details;
        setTimeout(function () {
            _this.assetDetails = null;
        }, 1000);
    };
    globalSharedService.prototype.setGlobalId = function (id) {
        this.globalId = id;
    };
    globalSharedService.prototype.setNotificationMedia = function (objectDetail) {
        this.notificationMediaList = objectDetail;
    };
    globalSharedService.prototype.setConfirmedNotificationGroupList = function (objectDetail) {
        this.confirmedNotificationGroupList = objectDetail;
    };
    globalSharedService.prototype.setConfirmedAccessGroupList = function (objectDetail) {
        this.confirmedAccessGroupList = objectDetail;
    };
    globalSharedService.prototype.setUsersList = function (objectDetail) {
        this.usersList = objectDetail;
    };
    globalSharedService.prototype.setNotificationGroupDetails = function (objectDetail) {
        this.notificationGroupDetails = objectDetail;
    };
    globalSharedService.prototype.setNotificationMediaTabDetails = function (objectDetail) {
        var _this = this;
        this.notificationMediaTabDetails = objectDetail;
        setTimeout(function () {
            _this.notificationMediaTabDetails = null;
        }, 2000);
    };
    globalSharedService.prototype.setNotificationGroupmediaDetails = function (objectDetail) {
        this.notificationGroupmediaDetails = objectDetail;
    };
    globalSharedService.prototype.setBackId = function (object) {
        this.backId = object;
    };
    // datasource
    globalSharedService.prototype.dataSource = function (dataSource) {
        this.dataDataSource = dataSource;
    };
    globalSharedService.prototype.setNotificationDetail = function (obj) {
        this.onpageloadNotificationGroupMediaDetails = obj;
    };
    globalSharedService.prototype.getDashboardSelectedName = function (userDashboardList, id) {
        var selectedDashboardIdName = '';
        this.selectedDashboardName = userDashboardList.filter(function (item) {
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
    };
    globalSharedService.prototype.getPatternForCommunication = function (dataType) {
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
    };
    globalSharedService.prototype.getPatternForDiscreterTag = function (dataType) {
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
    };
    globalSharedService.prototype.setLanguageURL = function (pageUrl) {
        // Getting the host name, Pathname, Current page URL
        var protocol = window.location.protocol;
        var hostName = window.location.host;
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
            var anchorTagAttrbute = $(this).attr('name');
            var path = pathName + anchorTagAttrbute + "/#" + currentPageUrl;
            $(this).attr('href', path);
        });
    };
    globalSharedService.prototype.getCurrentUrl = function () {
        var pageName = document.location.href.split("#")[1];
        return pageName;
    };
    globalSharedService.prototype.setReminingUsers = function (reminingUsers) {
        var _this = this;
        this.reminingUser = reminingUsers;
        setTimeout(function () {
            _this.reminingUser = null;
        }, 2000);
    };
    globalSharedService.prototype.setMaxUsers = function (maxUsers) {
        var _this = this;
        this.maxUsers = maxUsers;
        setTimeout(function () {
            _this.maxUsers = null;
        }, 2000);
    };
    globalSharedService.prototype.setDataServerTime = function (dataServerTime) {
        var _this = this;
        this.dataServerTime = dataServerTime;
        setTimeout(function () {
            _this.maxUsers = null;
        }, 2000);
    };
    globalSharedService.prototype.getExportingFileName = function (exportingfileName) {
        var timeSpan = new Date().toISOString();
        var getFullDay = timeSpan.split('T');
        var getTime = getFullDay[1].split(':');
        var getHrMin = getTime[0] + "H" + getTime[1] + "m";
        this.fileName = exportingfileName + "_" + getFullDay[0] + "_" + getHrMin;
        return this.fileName;
    };
    // Date and Time split for search criteria
    globalSharedService.prototype.startDateEndDateTimeSplit = function (dateTime) {
        var getFullDay = dateTime.split('T');
        var getTime = getFullDay[1].split(':');
        var getHrMin = getTime[0] + ":" + getTime[1];
        return getFullDay[0] + " " + getHrMin;
    };
    // Make new set of re-arrange object
    globalSharedService.prototype.reCreateNewObject = function (data, displayedColumns) {
        var sendBack = data.map(function (object) {
            var e_1, _a;
            var newObject = {};
            try {
                for (var displayedColumns_1 = __values(displayedColumns), displayedColumns_1_1 = displayedColumns_1.next(); !displayedColumns_1_1.done; displayedColumns_1_1 = displayedColumns_1.next()) {
                    var objPropertyName = displayedColumns_1_1.value;
                    if (!object.hasOwnProperty(objPropertyName)) {
                        newObject[objPropertyName] = '-';
                    }
                    else {
                        newObject[objPropertyName] = object[objPropertyName] ? object[objPropertyName] : '-';
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (displayedColumns_1_1 && !displayedColumns_1_1.done && (_a = displayedColumns_1.return)) _a.call(displayedColumns_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return newObject;
        });
        return sendBack;
    };
    // Download CSV/PDF/Excel Title formate
    globalSharedService.prototype.formateCSVTitle = function (titleList, headerName) {
        var e_2, _a;
        var headerTitle = headerName;
        var breakSentence = '\r\n';
        var titleRowKeys = '';
        var titleRowValues = '';
        var titleKeysValues;
        try {
            // Getting saperate Title Keys and Values
            for (var _b = __values(Object.entries(titleList)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                /* Row by Row */
                titleRowKeys += '"' + key + '"' + ',' + '"' + value + '"' + ',' + breakSentence;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        //   Remove at last character (,)
        /* Row by Row */
        titleKeysValues = titleRowKeys.slice(0, -1);
        return headerTitle + breakSentence + breakSentence + titleKeysValues;
    };
    // Final download files
    globalSharedService.prototype.downloadFile = function (fileType, exportFile, searchFieldsContainer, tableBodyDataList, fileName, csvOptions) {
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
    };
    // Remove last element in the array
    globalSharedService.prototype.removeLastIndexAtArray = function (object) {
        // Convert Obaject into Array
        var array = Object.values(object);
        array.pop();
        return array;
    };
    // Added S.No. to Download file excel,CSV, PDF
    globalSharedService.prototype.serialNumberGenerate = function (array) {
        var i = 1;
        var returnModifiedArray = array.map(function (object) {
            object.id = i;
            i++;
            return object;
        });
        return returnModifiedArray;
    };
    globalSharedService.prototype.setUserEmailId = function (emailId) {
        this.emailId = emailId;
    };
    // Return the Selected languge for Syncfusion Dropdown 
    globalSharedService.prototype.getLanguage = function () {
        return this.selectedLanguage;
    };
    // Set Language
    globalSharedService.prototype.setLanguage = function (language) {
        this.selectedLanguage = language;
    };
    globalSharedService.prototype.setMultiselectDropdownTextSettings = function () {
        return this.dropDownTextSettings = {
            text: $localize(templateObject_1 || (templateObject_1 = __makeTemplateObject([":@@multiSelectDropdown.select:--Select--"], [":@@multiSelectDropdown.select:--Select--"]))),
            noDataLabel: $localize(templateObject_2 || (templateObject_2 = __makeTemplateObject([":@@multiSelectDropdown.noDataLabel:No Data Available"], [":@@multiSelectDropdown.noDataLabel:No Data Available"])))
        };
    };
    globalSharedService.prototype.setGatewayLableName = function (path) {
        var gatewayAndTemplateLableName;
        if (path[1] == "asset-template") {
            return gatewayAndTemplateLableName = "Gateway Template";
        }
        else if (path[1] == "asset") {
            return gatewayAndTemplateLableName = "Gateway";
        }
    };
    globalSharedService.prototype.setDataValue = function (data) {
        this.setData = data;
    };
    globalSharedService.prototype.getDataValue = function () {
        return this.setData;
    };
    globalSharedService.ɵfac = function globalSharedService_Factory(t) { return new (t || globalSharedService)(i0.ɵɵinject(i1.ExcelService), i0.ɵɵinject(i2.PdfService)); };
    globalSharedService.ɵprov = i0.ɵɵdefineInjectable({ token: globalSharedService, factory: globalSharedService.ɵfac, providedIn: 'root' });
    return globalSharedService;
}());
export { globalSharedService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(globalSharedService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.ExcelService }, { type: i2.PdfService }]; }, null); })();
var templateObject_1, templateObject_2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsU2hhcmVkU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsb2JhbC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9nbG9iYWwvZ2xvYmFsU2hhcmVkU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHM0QsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDOzs7O0FBR3ZCO0lBaURJLDZCQUFvQixZQUEwQixFQUFVLFVBQXNCO1FBQTFELGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQTVDdkUsZUFBVSxHQUFHLElBQUksQ0FBQztRQUl6QixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFNZiwyQkFBMkI7UUFDM0IsZ0NBQTJCLEdBQUcsZUFBZSxDQUFDO1FBZ0g5QyxlQUFlO1FBQ2YsbUJBQWMsR0FBRyxHQUFHLENBQUM7UUFHckIscUNBQXFDO1FBQ3JDLGtEQUFrRDtRQUNsRCxxQkFBZ0IsR0FBRyxRQUFRLENBQUMsQ0FBQyxjQUFjO1FBQzNDLGNBQWM7UUFDZCxxQkFBZ0IsR0FBRyxNQUFNLENBQUM7UUFDMUIsa0VBQWtFO1FBQ2xFLHdCQUFtQixHQUFHLFNBQVMsQ0FBQyxDQUFFLGtCQUFrQjtRQUNwRCwwQkFBMEI7UUFDMUIsc0JBQWlCLEdBQUcsT0FBTyxDQUFDLENBQUMsbUJBQW1CO1FBRWhELHVDQUF1QztRQUN2Qyw2QkFBd0IsR0FBRyxjQUFjLENBQUM7UUFFMUMsd0NBQXdDO1FBQ3hDLDZCQUF3QixHQUFHLGNBQWMsQ0FBQztRQWlFMUMsb0NBQW9DO1FBQ3BDLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQW1QM0IsWUFBTyxHQUFTLEVBQUUsQ0FBQztJQXJabkIsQ0FBQztJQVBELDREQUE4QixH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QUM7SUFFRCxpREFBbUIsR0FBbkIsVUFBb0IsSUFBSTtRQUNwQixJQUFJLDJCQUEyQixDQUFDO1FBQ2hDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLGdCQUFnQixFQUFFO1lBQzdCLE9BQU8sMkJBQTJCLEdBQUcsa0JBQWtCLENBQUM7U0FDM0Q7YUFDSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLEVBQUU7WUFDekIsT0FBTywyQkFBMkIsR0FBRyxTQUFTLENBQUM7U0FDbEQ7SUFDTCxDQUFDO0lBSUQsMENBQVksR0FBWixVQUFhLElBQUk7UUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRUQsMENBQVksR0FBWjtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDOzBGQTljUSxtQkFBbUI7K0RBQW5CLG1CQUFtQixXQUFuQixtQkFBbUIsbUJBRE4sTUFBTTs4QkFQaEM7Q0F1ZEMsQUFoZEQsSUFnZEM7U0EvY1ksbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FEL0IsVUFBVTtlQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbmd1bGFyQ3N2IH0gZnJvbSAnYW5ndWxhcjctY3N2L2Rpc3QvQW5ndWxhci1jc3YnO1xyXG5pbXBvcnQgeyBFeGNlbFNlcnZpY2UgfSBmcm9tICcuLi9leGNlbC9leGNlbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGRmU2VydmljZSB9IGZyb20gJy4uL3BkZi9wZGYuc2VydmljZSc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIGdsb2JhbFNoYXJlZFNlcnZpY2Uge1xyXG5cclxuICAgIC8vIEdldHRpbmcgSUQgdmFsdWUgXHJcbiAgICBuYW1lOiBhbnk7XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRJZCA9IG51bGw7XHJcbiAgICBwdWJsaWMgbGlzdE9mUm93OiBhbnk7XHJcbiAgICBwYWdlTmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHVzZXJEZXRhaWxzOiBhbnk7XHJcbiAgICB0YWJDbGljayA9IG51bGw7XHJcbiAgICB1cmxOYW1lID0gbnVsbDtcclxuICAgIGxpc3RPZk1vZHVsZXNmb3JTZXJ2aWNlczogYW55O1xyXG4gICAgcGFyZW50TmFtZTogYW55O1xyXG5cclxuICAgIGFuYWxvZ0Fzc2V0T2JqOiBhbnk7XHJcblxyXG4gICAgLy8gQXNzZXQgY29uZmlndXJhdGlvbiBwYWdlXHJcbiAgICBhc3NldFZpZXdNb2RlRm9ybVZpZXdTdGF0dXMgPSAnYXNzZXRWaWV3TW9kZSc7XHJcbiAgICByZXN1bHQ6IHN0cmluZztcclxuICAgIGlzYWRtaW46IGJvb2xlYW47XHJcbiAgICBsYW5kaW5nTWVudVVybEZvckhvbWU6IGFueTtcclxuICAgIG1heFVzZXI6IGFueTtcclxuICAgIHJvbGVMaXN0OiBhbnlbXTtcclxuICAgIGFzc2V0RGV0YWlsczogYW55O1xyXG4gICAgZ2xvYmFsSWQ6IGFueTtcclxuICAgIG5vdGlmaWNhdGlvbk1lZGlhTGlzdDogYW55W107XHJcbiAgICBjb25maXJtZWROb3RpZmljYXRpb25Hcm91cExpc3Q6IGFueVtdO1xyXG4gICAgdXNlcnNMaXN0OiBhbnlbXTtcclxuICAgIHB1YmxpYyBub3RpZmljYXRpb25Hcm91cERldGFpbHM6IGFueTtcclxuICAgIG5vdGlmaWNhdGlvbk1lZGlhVGFiRGV0YWlsczogYW55O1xyXG4gICAgbm90aWZpY2F0aW9uR3JvdXBtZWRpYURldGFpbHM6IGFueTtcclxuICAgIGJhY2tJZDogc3RyaW5nO1xyXG4gICAgZGF0YURhdGFTb3VyY2U6IGFueTtcclxuICAgIG9ucGFnZWxvYWROb3RpZmljYXRpb25Hcm91cE1lZGlhRGV0YWlsczogYW55O1xyXG4gICAgY29uZmlybWVkQWNjZXNzR3JvdXBMaXN0OiBhbnk7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgcmVtaW5pbmdVc2VyOiBudW1iZXI7XHJcbiAgICBtYXhVc2VyczogbnVtYmVyO1xyXG4gICAgZGF0YVNlcnZlclRpbWU6IGFueTtcclxuICAgIGVtYWlsSWQ6IHN0cmluZztcclxuICAgIGRyb3BEb3duVGV4dFNldHRpbmdzOiB7XHJcbiAgICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgICAgIG5vRGF0YUxhYmVsOiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgc2V0YXNzZXRWaWV3TW9kZUZvcm1WaWV3U3RhdHVzKHZpZXcpIHtcclxuICAgICAgICB0aGlzLmFzc2V0Vmlld01vZGVGb3JtVmlld1N0YXR1cyA9IHZpZXc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZXhjZWxTZXJ2aWNlOiBFeGNlbFNlcnZpY2UsIHByaXZhdGUgcGRmU2VydmljZTogUGRmU2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBXaGVuIGNsaWNrIG9uIHVwZGF0ZS92aWV3LCBJRCB3aWxsIHBhc3MgdG8gcmVzcGVjdGl2ZSB1cGRhdGEgdmlld1xyXG4gICAgR2V0dGluZ0lkKGlkKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZElkID0gaWQ7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJZCA9IG51bGw7XHJcbiAgICAgICAgfSwgMTAwMClcclxuICAgIH1cclxuICAgIEdldHRpbmdTdHJpbmcobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG51bGw7XHJcbiAgICAgICAgfSwgMjAwMClcclxuICAgIH1cclxuICAgIHNldElkKGlkKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG4gICAgZ2V0dGluZ05hbWUobmFtZSkge1xyXG4gICAgICAgIHRoaXMucGFyZW50TmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcbiAgICAvLyBTdG9yZSBqc29uIHZhbHUgdG8gZ2xvYmFsIGxldmVsIGZvciBzaG93IGNsaWNrIHRvIGVkaXQgdmlld1xyXG4gICAgc2V0T3JnYW5pemF0aW9uRGV0YWlsKHBhZ2VOYW1lLCBvYmplY3REZXRhaWwpIHtcclxuICAgICAgICB0aGlzLnBhZ2VOYW1lID0gcGFnZU5hbWU7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZSb3cgPSBvYmplY3REZXRhaWw7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubGlzdE9mUm93ID0gbnVsbDtcclxuICAgICAgICAvLyB9LCAxMDAwKVxyXG4gICAgfVxyXG4gICAgc2V0TWVudURldGFpbChtZW51OiBhbnkpIHtcclxuICAgICAgICB0aGlzLmxpc3RPZlJvdyA9IG1lbnU7XHJcbiAgICB9XHJcblxyXG4gICAgYW5hbG9nQXNzZXQob2JqZWN0RGV0YWlsKSB7XHJcbiAgICAgICAgdGhpcy5hbmFsb2dBc3NldE9iaiA9IG9iamVjdERldGFpbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVc2VyIHZpZXcgdG8gZ2xvYmFsIGxldmVsIGZvciBzaG93IGNsaWNrIHRvIGVkaXQgdmlldyB0YWIgbGV2ZWwgcGFzc2luZ1xyXG5cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0oIFVSTCwgQm9qZWN0LCB0YWIsICBIZWFkZXJcclxuICAgIGxpc3RPZlJvd0RldGFpbEZvclVzZXIodXJsLCBvYmplY3REZXRhaWwsIHRhYiwgaGVhZGVyKSB7XHJcbiAgICAgICAgdGhpcy51c2VyRGV0YWlscyA9IG9iamVjdERldGFpbDtcclxuICAgICAgICB0aGlzLnBhZ2VOYW1lID0gaGVhZGVyO1xyXG4gICAgICAgIHRoaXMudXJsTmFtZSA9IHVybDtcclxuICAgICAgICB0aGlzLnRhYkNsaWNrID0gdGFiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNsZWFySW5mb1xyXG4gICAgY2xlYXJJbmZvKCkge1xyXG4gICAgICAgIHRoaXMudXNlckRldGFpbHMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucGFnZU5hbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudGFiQ2xpY2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudXJsTmFtZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZElkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxpc3RPZlJvdyA9IG51bGw7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY2xpY2tlZFJvd0RldGFpbCcsIG51bGwpO1xyXG4gICAgICAgIC8vIHRoaXMucGFnZU5hbWUgPSBudWxsO1xyXG4gICAgICAgICQoJ3VsIGxpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMuYXNzZXRWaWV3TW9kZUZvcm1WaWV3U3RhdHVzID0gJ2Fzc2V0Vmlld01vZGUnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5hbWVQYXR0ZXJuKCkge1xyXG4gICAgICAgIHJldHVybiBcIl5bYS16QS1aXVsgYS16QS1aMC05LiNAKiZfLV0qXCI7XHJcbiAgICB9XHJcbiAgICBnZXROYW1lUGF0dGVybkZvckdhdGV3YXlhbmRBc3NldCgpIHtcclxuICAgICAgICByZXR1cm4gXCJbIGEtekEtWjAtOS4jQCo6Jl8tXSpcIjtcclxuICAgIH1cclxuICAgIHNldElzQWRtaW4oaXNBZG1pbjogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuaXNhZG1pbiA9IGlzQWRtaW47XHJcbiAgICB9XHJcbiAgICBkb3VibGVIeXBoZW4oZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHZhciBzdHIgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdmFyIG4gPSBzdHIuaW5jbHVkZXMoXCItLVwiKTtcclxuICAgICAgICBpZiAobikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9SZXNwb25zZSBjb2RlXHJcbiAgICByZXNwb25zZVN0YXR1cyA9IDgwMDtcclxuXHJcblxyXG4gICAgLy8gRXJyb3IgYWxlcnQgbWVzc2FnZSB0eXBlIGtleSB2YWx1ZVxyXG4gICAgLy8gTW9kYWwgd2luZG93IGZvciBmYWlsZWQgc2NlbmFyaW8oZXg6IE5vdCBzYXZlZClcclxuICAgIG1lc3NhZ2VUeXBlX0ZhaWwgPSAnRmFpbGVkJzsgLy8oISkgd2l0aCByZWRcclxuICAgIC8vIEluZm9ybWF0aW9uXHJcbiAgICBtZXNzYWdlVHlwZV9JbmZvID0gJ0luZm8nO1xyXG4gICAgLy8gTW9kYWwgd2luZG93IGZvciBXYXJuaW5nIGluZm8gKGV4OiBDYW5jZWwvUmVzZXQvVGFiIG5hdmlnYXRpb24pXHJcbiAgICBtZXNzYWdlVHlwZV9XYXJuaW5nID0gJ1dhcm5pbmcnOyAgLy8gKCEpIHdpdGggb3JhbmdlXHJcbiAgICAvLyBNb2RhbCB3aW5kb3cgZm9yIGRlbGV0ZVxyXG4gICAgbWVzc2FnZVR5cGVfRXJyb3IgPSAnRXJyb3InOyAvLyAoQ3Jvc3MpIHdpdGggUmVkXHJcblxyXG4gICAgLy8gTW9kYWwgV2luZG93IGZvcmFsYXJtIG1lc3NhZ2UgZm9ybWF0XHJcbiAgICBtZXNzYWdlVHlwZV9BbGFybU1lc3NhZ2UgPSAnQWxhcm1NZXNzYWdlJztcclxuXHJcbiAgICAvLyBNb2RhbCBXaW5kb3cgZm9yIGNsZWFyIG1lc3NhZ2UgZm9ybWF0XHJcbiAgICBtZXNzYWdlVHlwZV9DbGVhck1lc3NhZ2UgPSAnQ2xlYXJNZXNzYWdlJztcclxuXHJcbiAgICAvLyBMYW5kaW5nIG1lbnVcclxuXHJcbiAgICBsYW5kaW5nTWVudVVybChsYW5kaW5nTWVudVVybCkge1xyXG4gICAgICAgIHRoaXMubGFuZGluZ01lbnVVcmxGb3JIb21lID0gbGFuZGluZ01lbnVVcmw7XHJcbiAgICB9XHJcbiAgICBzZXROdW1iZXJPZlVzZXJzKG51bWJlck9mVXNlcnM6IGFueSkge1xyXG4gICAgICAgIHRoaXMubWF4VXNlciA9IG51bWJlck9mVXNlcnM7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubWF4VXNlciA9IG51bGw7XHJcbiAgICAgICAgfSwgMjAwMClcclxuICAgIH1cclxuICAgIHNldFJvbGVMaXN0KGNvbmZpcm1lZExpc3Q6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5yb2xlTGlzdCA9IGNvbmZpcm1lZExpc3Q7XHJcbiAgICB9XHJcbiAgICBzZXRBc3NldERldGFpbChkZXRhaWxzKSB7XHJcbiAgICAgICAgdGhpcy5hc3NldERldGFpbHMgPSBkZXRhaWxzO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFzc2V0RGV0YWlscyA9IG51bGw7XHJcbiAgICAgICAgfSwgMTAwMClcclxuICAgIH1cclxuXHJcbiAgICBzZXRHbG9iYWxJZChpZDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5nbG9iYWxJZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE5vdGlmaWNhdGlvbk1lZGlhKG9iamVjdERldGFpbCkge1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uTWVkaWFMaXN0ID0gb2JqZWN0RGV0YWlsO1xyXG4gICAgfVxyXG4gICAgc2V0Q29uZmlybWVkTm90aWZpY2F0aW9uR3JvdXBMaXN0KG9iamVjdERldGFpbCkge1xyXG4gICAgICAgIHRoaXMuY29uZmlybWVkTm90aWZpY2F0aW9uR3JvdXBMaXN0ID0gb2JqZWN0RGV0YWlsO1xyXG4gICAgfVxyXG4gICAgc2V0Q29uZmlybWVkQWNjZXNzR3JvdXBMaXN0KG9iamVjdERldGFpbCkge1xyXG4gICAgICAgIHRoaXMuY29uZmlybWVkQWNjZXNzR3JvdXBMaXN0ID0gb2JqZWN0RGV0YWlsO1xyXG4gICAgfVxyXG4gICAgc2V0VXNlcnNMaXN0KG9iamVjdERldGFpbCkge1xyXG4gICAgICAgIHRoaXMudXNlcnNMaXN0ID0gb2JqZWN0RGV0YWlsO1xyXG4gICAgfVxyXG4gICAgc2V0Tm90aWZpY2F0aW9uR3JvdXBEZXRhaWxzKG9iamVjdERldGFpbCkge1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uR3JvdXBEZXRhaWxzID0gb2JqZWN0RGV0YWlsO1xyXG4gICAgfVxyXG4gICAgc2V0Tm90aWZpY2F0aW9uTWVkaWFUYWJEZXRhaWxzKG9iamVjdERldGFpbCkge1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uTWVkaWFUYWJEZXRhaWxzID0gb2JqZWN0RGV0YWlsO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbk1lZGlhVGFiRGV0YWlscyA9IG51bGw7XHJcbiAgICAgICAgfSwgMjAwMClcclxuICAgIH1cclxuXHJcbiAgICBzZXROb3RpZmljYXRpb25Hcm91cG1lZGlhRGV0YWlscyhvYmplY3REZXRhaWwpIHtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbkdyb3VwbWVkaWFEZXRhaWxzID0gb2JqZWN0RGV0YWlsO1xyXG4gICAgfVxyXG4gICAgc2V0QmFja0lkKG9iamVjdCkge1xyXG4gICAgICAgIHRoaXMuYmFja0lkID0gb2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRhdGFzb3VyY2VcclxuICAgIGRhdGFTb3VyY2UoZGF0YVNvdXJjZSkge1xyXG4gICAgICAgIHRoaXMuZGF0YURhdGFTb3VyY2UgPSBkYXRhU291cmNlO1xyXG4gICAgfVxyXG4gICAgc2V0Tm90aWZpY2F0aW9uRGV0YWlsKG9iaikge1xyXG4gICAgICAgIHRoaXMub25wYWdlbG9hZE5vdGlmaWNhdGlvbkdyb3VwTWVkaWFEZXRhaWxzID0gb2JqO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBUbyBnZXQgdGhlIFNlbGVjdGVkIERhaGJvYXJkIG5hbWVcclxuICAgIHNlbGVjdGVkRGFzaGJvYXJkTmFtZSA9IFtdO1xyXG4gICAgZ2V0RGFzaGJvYXJkU2VsZWN0ZWROYW1lKHVzZXJEYXNoYm9hcmRMaXN0LCBpZCkge1xyXG4gICAgICAgIGxldCBzZWxlY3RlZERhc2hib2FyZElkTmFtZSA9ICcnO1xyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkRGFzaGJvYXJkTmFtZSA9IHVzZXJEYXNoYm9hcmRMaXN0LmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaXNEZWZhdWx0ID09IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5pZCA9PSBwYXJzZUludChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREYXNoYm9hcmROYW1lLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZWxlY3RlZERhc2hib2FyZElkTmFtZSA9IHRoaXMuc2VsZWN0ZWREYXNoYm9hcmROYW1lWzBdLm5hbWU7XHJcbiAgICAgICAgfSBlbHNlIHNlbGVjdGVkRGFzaGJvYXJkSWROYW1lID0gJ0Rhc2hib2FyZCc7XHJcblxyXG4gICAgICAgIHJldHVybiBzZWxlY3RlZERhc2hib2FyZElkTmFtZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0UGF0dGVybkZvckNvbW11bmljYXRpb24oZGF0YVR5cGUpOiBhbnkge1xyXG4gICAgICAgIHN3aXRjaCAoZGF0YVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnU3RyaW5nJzoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnSW50ZWdlcic6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlswLTldKlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ0xvbmcnOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJbMC05XSpcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdEb3VibGUnOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gL15bMC05XVxcZHswLDV9KFxcLlxcZHsxLDR9KT8lPyQvXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnRmxvYXQnOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gL15bMC05XVxcZHswLDV9KFxcLlxcZHsxLDR9KT8lPyQvXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIFwiXlthLXpBLVpdWyBhLXpBLVowLTkuI0AqJl8tXSpcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGdldFBhdHRlcm5Gb3JEaXNjcmV0ZXJUYWcoZGF0YVR5cGUpOiBhbnkge1xyXG4gICAgICAgIHN3aXRjaCAoZGF0YVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnU3RyaW5nJzoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnSW50ZWdlcic6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlswLTldWzAtOSxdKlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ0xvbmcnOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJbMC05XVswLTksXSpcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdEb3VibGUnOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gL15bMC05XVxcZHswLDV9KFxcLlxcZHsxLDR9KT8lPyQvXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnRmxvYXQnOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gL15bMC05XVxcZHswLDV9KFxcLlxcZHsxLDR9KT8lPyQvXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIFwiXlthLXpBLVpdWyBhLXpBLVowLTkuI0AqJl8tXSpcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHNldExhbmd1YWdlVVJMKHBhZ2VVcmwpIHtcclxuICAgICAgICAvLyBHZXR0aW5nIHRoZSBob3N0IG5hbWUsIFBhdGhuYW1lLCBDdXJyZW50IHBhZ2UgVVJMXHJcbiAgICAgICAgbGV0IHByb3RvY29sID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sXHJcbiAgICAgICAgbGV0IGhvc3ROYW1lID0gd2luZG93LmxvY2F0aW9uLmhvc3Q7XHJcbiAgICAgICAgdmFyIHBhdGhOYW1lID0gcHJvdG9jb2wgKyBcIi8vXCIgKyBob3N0TmFtZSArICcvZW1weXJlYWwtdW5pdmVyc2UvJztcclxuICAgICAgICB2YXIgY3VycmVudFBhZ2VVcmw7XHJcbiAgICAgICAgaWYgKHBhZ2VVcmwgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZVVybCA9IHBhZ2VVcmw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY3VycmVudFBhZ2VVcmwgPSB0aGlzLmdldEN1cnJlbnRVcmwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnLm5hdmJhci1uYXYubmF2YmFyLXJpZ2h0IGxpLmRyb3Bkb3duIGEjaGVhZGVyX2xhbmd1YWdlICsgdWwgPiBsaSBhJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYXR0cignaHJlZicsICcnKTtcclxuICAgICAgICAgICAgbGV0IGFuY2hvclRhZ0F0dHJidXRlID0gJCh0aGlzKS5hdHRyKCduYW1lJyk7XHJcbiAgICAgICAgICAgIGxldCBwYXRoID0gcGF0aE5hbWUgKyBhbmNob3JUYWdBdHRyYnV0ZSArIFwiLyNcIiArIGN1cnJlbnRQYWdlVXJsO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2hyZWYnLCBwYXRoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0Q3VycmVudFVybCgpIHtcclxuICAgICAgICBsZXQgcGFnZU5hbWUgPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiI1wiKVsxXTtcclxuICAgICAgICByZXR1cm4gcGFnZU5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UmVtaW5pbmdVc2VycyhyZW1pbmluZ1VzZXJzOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnJlbWluaW5nVXNlciA9IHJlbWluaW5nVXNlcnM7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtaW5pbmdVc2VyID0gbnVsbDtcclxuICAgICAgICB9LCAyMDAwKVxyXG4gICAgfVxyXG4gICAgc2V0TWF4VXNlcnMobWF4VXNlcnM6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubWF4VXNlcnMgPSBtYXhVc2VycztcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tYXhVc2VycyA9IG51bGw7XHJcbiAgICAgICAgfSwgMjAwMClcclxuICAgIH1cclxuICAgIHNldERhdGFTZXJ2ZXJUaW1lKGRhdGFTZXJ2ZXJUaW1lKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU2VydmVyVGltZSA9IGRhdGFTZXJ2ZXJUaW1lO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1heFVzZXJzID0gbnVsbDtcclxuICAgICAgICB9LCAyMDAwKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBEb3dubG9hZCBhcyBhIENTVi9QREYvRXhjZWwgZmlsZSBuYW1lXHJcbiAgICBmaWxlTmFtZTogc3RyaW5nO1xyXG4gICAgZ2V0RXhwb3J0aW5nRmlsZU5hbWUoZXhwb3J0aW5nZmlsZU5hbWUpIHtcclxuICAgICAgICBsZXQgdGltZVNwYW4gPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgICAgbGV0IGdldEZ1bGxEYXkgPSB0aW1lU3Bhbi5zcGxpdCgnVCcpO1xyXG4gICAgICAgIGxldCBnZXRUaW1lID0gZ2V0RnVsbERheVsxXS5zcGxpdCgnOicpO1xyXG4gICAgICAgIGxldCBnZXRIck1pbiA9IGdldFRpbWVbMF0gKyBcIkhcIiArIGdldFRpbWVbMV0gKyBcIm1cIjtcclxuICAgICAgICB0aGlzLmZpbGVOYW1lID0gYCR7ZXhwb3J0aW5nZmlsZU5hbWV9XyR7Z2V0RnVsbERheVswXX1fJHtnZXRIck1pbn1gO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERhdGUgYW5kIFRpbWUgc3BsaXQgZm9yIHNlYXJjaCBjcml0ZXJpYVxyXG4gICAgc3RhcnREYXRlRW5kRGF0ZVRpbWVTcGxpdChkYXRlVGltZSkge1xyXG4gICAgICAgIGxldCBnZXRGdWxsRGF5ID0gZGF0ZVRpbWUuc3BsaXQoJ1QnKTtcclxuICAgICAgICBsZXQgZ2V0VGltZSA9IGdldEZ1bGxEYXlbMV0uc3BsaXQoJzonKTtcclxuICAgICAgICBsZXQgZ2V0SHJNaW4gPSBnZXRUaW1lWzBdICsgXCI6XCIgKyBnZXRUaW1lWzFdO1xyXG4gICAgICAgIHJldHVybiBnZXRGdWxsRGF5WzBdICsgXCIgXCIgKyBnZXRIck1pbjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYWtlIG5ldyBzZXQgb2YgcmUtYXJyYW5nZSBvYmplY3RcclxuICAgIHJlQ3JlYXRlTmV3T2JqZWN0KGRhdGEsIGRpc3BsYXllZENvbHVtbnMpIHtcclxuICAgICAgICBsZXQgc2VuZEJhY2sgPSBkYXRhLm1hcChvYmplY3QgPT4ge1xyXG4gICAgICAgICAgICB2YXIgbmV3T2JqZWN0ID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgb2JqUHJvcGVydHlOYW1lIG9mIGRpc3BsYXllZENvbHVtbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmICghb2JqZWN0Lmhhc093blByb3BlcnR5KG9ialByb3BlcnR5TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdPYmplY3Rbb2JqUHJvcGVydHlOYW1lXSA9ICctJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3T2JqZWN0W29ialByb3BlcnR5TmFtZV0gPSBvYmplY3Rbb2JqUHJvcGVydHlOYW1lXSA/IG9iamVjdFtvYmpQcm9wZXJ0eU5hbWVdIDogJy0nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdPYmplY3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHNlbmRCYWNrO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gRG93bmxvYWQgQ1NWL1BERi9FeGNlbCBUaXRsZSBmb3JtYXRlXHJcbiAgICBmb3JtYXRlQ1NWVGl0bGUodGl0bGVMaXN0LCBoZWFkZXJOYW1lKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlclRpdGxlID0gaGVhZGVyTmFtZTtcclxuICAgICAgICBsZXQgYnJlYWtTZW50ZW5jZSA9ICdcXHJcXG4nO1xyXG4gICAgICAgIGxldCB0aXRsZVJvd0tleXMgPSAnJztcclxuICAgICAgICBsZXQgdGl0bGVSb3dWYWx1ZXMgPSAnJztcclxuICAgICAgICBsZXQgdGl0bGVLZXlzVmFsdWVzO1xyXG5cclxuICAgICAgICAvLyBHZXR0aW5nIHNhcGVyYXRlIFRpdGxlIEtleXMgYW5kIFZhbHVlc1xyXG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRpdGxlTGlzdCkpIHtcclxuICAgICAgICAgICAgLyogUm93IGJ5IFJvdyAqL1xyXG4gICAgICAgICAgICB0aXRsZVJvd0tleXMgKz0gJ1wiJyArIGtleSArICdcIicgKyAnLCcgKyAnXCInICsgdmFsdWUgKyAnXCInICsgJywnICsgYnJlYWtTZW50ZW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgUmVtb3ZlIGF0IGxhc3QgY2hhcmFjdGVyICgsKVxyXG4gICAgICAgIC8qIFJvdyBieSBSb3cgKi9cclxuICAgICAgICB0aXRsZUtleXNWYWx1ZXMgPSB0aXRsZVJvd0tleXMuc2xpY2UoMCwgLTEpO1xyXG5cclxuICAgICAgICByZXR1cm4gaGVhZGVyVGl0bGUgKyBicmVha1NlbnRlbmNlICsgYnJlYWtTZW50ZW5jZSArIHRpdGxlS2V5c1ZhbHVlcztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluYWwgZG93bmxvYWQgZmlsZXNcclxuICAgIGRvd25sb2FkRmlsZShmaWxlVHlwZSwgZXhwb3J0RmlsZSwgc2VhcmNoRmllbGRzQ29udGFpbmVyLCB0YWJsZUJvZHlEYXRhTGlzdCwgZmlsZU5hbWUsIGNzdk9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoZmlsZVR5cGUgPT0gJ3BkZicpIHtcclxuICAgICAgICAgICAgLy8gUERGIEV4cG9ydCBmb3JtYXQgXHJcbiAgICAgICAgICAgIHRoaXMucGRmU2VydmljZS5nZW5lcmF0ZVBERihleHBvcnRGaWxlLCBzZWFyY2hGaWVsZHNDb250YWluZXIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZVR5cGUgPT0gJ2V4Y2VsJykge1xyXG4gICAgICAgICAgICAvLyBFeGNlbCBleHBvcnQgZm9ybWF0XHJcbiAgICAgICAgICAgIHRoaXMuZXhjZWxTZXJ2aWNlLmdlbmVyYXRlRXhjZWwoZXhwb3J0RmlsZSwgc2VhcmNoRmllbGRzQ29udGFpbmVyKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVUeXBlID09ICdjc3YnKSB7XHJcbiAgICAgICAgICAgIC8vIEV4cG9ydCBDU1YgZm9ybWF0XHJcbiAgICAgICAgICAgIG5ldyBBbmd1bGFyQ3N2KHRhYmxlQm9keURhdGFMaXN0LCBmaWxlTmFtZSwgY3N2T3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBSZW1vdmUgbGFzdCBlbGVtZW50IGluIHRoZSBhcnJheVxyXG4gICAgcmVtb3ZlTGFzdEluZGV4QXRBcnJheShvYmplY3QpIHtcclxuICAgICAgICAvLyBDb252ZXJ0IE9iYWplY3QgaW50byBBcnJheVxyXG4gICAgICAgIGxldCBhcnJheSA9IE9iamVjdC52YWx1ZXMob2JqZWN0KTtcclxuICAgICAgICBhcnJheS5wb3AoKTtcclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkZWQgUy5Oby4gdG8gRG93bmxvYWQgZmlsZSBleGNlbCxDU1YsIFBERlxyXG4gICAgc2VyaWFsTnVtYmVyR2VuZXJhdGUoYXJyYXkpIHtcclxuICAgICAgICBsZXQgaSA9IDE7XHJcbiAgICAgICAgbGV0IHJldHVybk1vZGlmaWVkQXJyYXkgPSBhcnJheS5tYXAoKG9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBvYmplY3QuaWQgPSBpO1xyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJldHVybk1vZGlmaWVkQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXNlckVtYWlsSWQoZW1haWxJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lbWFpbElkID0gZW1haWxJZDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gICBTZWxlY3RlZCBMYW5ndWFnZVxyXG4gICAgcHVibGljIHNlbGVjdGVkTGFuZ3VhZ2U6IHN0cmluZztcclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIFNlbGVjdGVkIGxhbmd1Z2UgZm9yIFN5bmNmdXNpb24gRHJvcGRvd24gXHJcbiAgICBnZXRMYW5ndWFnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZExhbmd1YWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldCBMYW5ndWFnZVxyXG4gICAgc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTGFuZ3VhZ2UgPSBsYW5ndWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNdWx0aXNlbGVjdERyb3Bkb3duVGV4dFNldHRpbmdzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRyb3BEb3duVGV4dFNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICB0ZXh0OiAkbG9jYWxpemVgOkBAbXVsdGlTZWxlY3REcm9wZG93bi5zZWxlY3Q6LS1TZWxlY3QtLWAsXHJcbiAgICAgICAgICAgIG5vRGF0YUxhYmVsOiAkbG9jYWxpemVgOkBAbXVsdGlTZWxlY3REcm9wZG93bi5ub0RhdGFMYWJlbDpObyBEYXRhIEF2YWlsYWJsZWBcclxuICAgICAgICB9O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRHYXRld2F5TGFibGVOYW1lKHBhdGgpIHtcclxuICAgICAgICBsZXQgZ2F0ZXdheUFuZFRlbXBsYXRlTGFibGVOYW1lO1xyXG4gICAgICAgIGlmIChwYXRoWzFdID09IFwiYXNzZXQtdGVtcGxhdGVcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2F0ZXdheUFuZFRlbXBsYXRlTGFibGVOYW1lID0gXCJHYXRld2F5IFRlbXBsYXRlXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBhdGhbMV0gPT0gXCJhc3NldFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnYXRld2F5QW5kVGVtcGxhdGVMYWJsZU5hbWUgPSBcIkdhdGV3YXlcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldERhdGE6YW55W10gPSBbXTtcclxuICAgIHNldERhdGFWYWx1ZShkYXRhKXtcclxuICAgICAgICB0aGlzLnNldERhdGEgPSBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGFWYWx1ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldERhdGE7XHJcbiAgICB9XHJcbn0iXX0=