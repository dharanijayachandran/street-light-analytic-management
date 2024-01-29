import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import * as i0 from "@angular/core";
var ExcelService = /** @class */ (function () {
    function ExcelService() {
    }
    ExcelService.prototype.generateExcel = function (excelObject, excelSearchFilterFields) {
        //Create workbook and worksheet
        var workbook = new Workbook();
        // create new sheet with pageSetup settings for A4 - landscape
        var worksheet = workbook.addWorksheet(excelObject.excelWorkSheetName, {
            pageSetup: { paperSize: 9, orientation: 'landscape' }
        });
        worksheet.properties.defaultColWidth = 20;
        //Add Row and formatting
        var excelWorkSheetTitle = worksheet.addRow([excelObject.title]);
        excelWorkSheetTitle.font = {
            name: 'Calibri',
            family: 4,
            size: 20,
            underline: false,
            bold: true
        };
        excelWorkSheetTitle.alignment = {
            horizontal: 'left',
            vertical: 'middle'
        };
        worksheet.addRow([]);
        // Merge cells between A1 to N2
        worksheet.mergeCells('A1:N2');
        //Blank Row 
        worksheet.addRow([]);
        /*
        ========================================================
          Search filter fields  - Starts here
          ========================================================
        */
        if (excelSearchFilterFields.searchFilterKeysValues.length) {
            //Add Row and formatting
            var searchCriteriaText = worksheet.addRow([excelSearchFilterFields.searchCriteriaText]);
            searchCriteriaText.font = {
                name: 'Calibri',
                family: 4,
                size: 16,
                bold: true
            };
            excelWorkSheetTitle.alignment = {
                horizontal: 'left',
                vertical: 'middle'
            };
            var excelSearchFilterFieldsData = excelSearchFilterFields.searchFilterKeysValues;
            excelSearchFilterFieldsData.forEach(function (d) {
                var row = worksheet.addRow(d);
                // Cell Style for Table header data : Fill and Border and Font
                row.eachCell(function (cell, number) {
                    cell.font = {
                        name: 'Calibri',
                        family: 4,
                        bold: false,
                        size: 12
                    };
                    if (number == 1) {
                        cell.font.bold = true;
                    }
                });
            });
        }
        /*
          ========================================================
          Search filter fields  - ends here
          ========================================================
        */
        worksheet.addRow([]);
        /*
         ========================================================
           Creating Row for Table header and display in Excel sheet  - Starts here
           ========================================================
        */
        //Add Header Row
        var excelTableHeaderNames = worksheet.addRow(excelObject.tableHeaderNames);
        // Cell Style for Table header data : Fill and Border and Font
        excelTableHeaderNames.eachCell(function (cell, number) {
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'F2DEFF' },
            };
            cell.font = {
                name: 'Calibri',
                family: 4,
                bold: true,
                size: 12
            };
            cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
        });
        /*
         ========================================================
           Creating Row for Table header and display in Excel sheet -  Ends here
           ========================================================
        */
        /*
          ========================================================
            Add table body data and display in Excel - Starts here
            ========================================================
         */
        var excelTableBodyData = excelObject.tableBodyData;
        excelTableBodyData.forEach(function (d) {
            var row = worksheet.addRow(d);
            // Cell Style for Table header data : Fill and Border and Font
            row.eachCell(function (cell, number) {
                cell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'FFFFFF' },
                };
                cell.font = {
                    name: 'Calibri',
                    family: 4,
                    bold: false,
                    size: 12
                };
                cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            });
        });
        /*
         ========================================================
           Add table body data and display in Excel -  Ends here
           ========================================================
        */
        worksheet.addRow([]);
        /*
         ========================================================
           Footer Row - Starts here
           ========================================================
        */
        var excelFooterRow = worksheet.addRow(['Disclaimer: This is system generated report.']);
        excelFooterRow.getCell(1).fill = {
            type: 'pattern',
            pattern: 'none',
            fgColor: { argb: 'FFFFFF' }
        };
        excelFooterRow.getCell(1).font = {
            name: 'Calibri',
            family: 4,
            bold: true,
            size: 12
        };
        // excelFooterRow.getCell(1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
        //Merge Cells
        worksheet.mergeCells("A" + excelFooterRow.number + ":F" + excelFooterRow.number);
        /*
        ========================================================
          Footer Row - Ends here
          ========================================================
       */
        /*
       ========================================================
         Generate Excel File with given name - Starts here
         ========================================================
      */
        workbook.xlsx.writeBuffer().then(function (data) {
            var blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            fs.saveAs(blob, excelObject.fileName + '.xlsx');
        });
        /*
      ========================================================
        Generate Excel File with given name - Ends here
        ========================================================
     */
    };
    ExcelService.ɵfac = function ExcelService_Factory(t) { return new (t || ExcelService)(); };
    ExcelService.ɵprov = i0.ɵɵdefineInjectable({ token: ExcelService, factory: ExcelService.ɵfac, providedIn: 'root' });
    return ExcelService;
}());
export { ExcelService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExcelService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsb2JhbC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9leGNlbC9leGNlbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNuQyxPQUFPLEtBQUssRUFBRSxNQUFNLFlBQVksQ0FBQzs7QUFDakM7SUFNRTtJQUVBLENBQUM7SUFFRCxvQ0FBYSxHQUFiLFVBQWMsV0FBVyxFQUFFLHVCQUF1QjtRQUVoRCwrQkFBK0I7UUFDL0IsSUFBSSxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUM5Qiw4REFBOEQ7UUFDOUQsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEVBQUU7WUFDcEUsU0FBUyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFO1NBQ3RELENBQUMsQ0FBQztRQUNILFNBQVMsQ0FBQyxVQUFVLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUUxQyx3QkFBd0I7UUFDeEIsSUFBSSxtQkFBbUIsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEUsbUJBQW1CLENBQUMsSUFBSSxHQUFHO1lBQ3pCLElBQUksRUFBRSxTQUFTO1lBQ2YsTUFBTSxFQUFFLENBQUM7WUFDVCxJQUFJLEVBQUUsRUFBRTtZQUNSLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQTtRQUNELG1CQUFtQixDQUFDLFNBQVMsR0FBRztZQUM5QixVQUFVLEVBQUUsTUFBTTtZQUNsQixRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFBO1FBRUQsU0FBUyxDQUFDLE1BQU0s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QUksRUFBRSxFQUFFO1NBQ1QsQ0FBQTtRQUNELDhJQUE4STtRQUU5SSxhQUFhO1FBQ2IsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFJLGNBQWMsQ0FBQyxNQUFNLFVBQUssY0FBYyxDQUFDLE1BQVEsQ0FBQyxDQUFDO1FBRTVFOzs7O1NBSUM7UUFFRDs7OztRQUlBO1FBRUEsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO1lBQ3BDLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsbUVBQW1FLEVBQUUsQ0FBQyxDQUFDO1lBQzNHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUE7UUFFRjs7OztPQUlEO0lBRUQsQ0FBQzs0RUFoTlUsWUFBWTt3REFBWixZQUFZLFdBQVosWUFBWSxtQkFGWCxNQUFNO3VCQUpwQjtDQXVOQyxBQXBORCxJQW9OQztTQWpOWSxZQUFZO2tEQUFaLFlBQVk7Y0FIeEIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXb3JrYm9vayB9IGZyb20gJ2V4Y2VsanMnO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmaWxlLXNhdmVyJztcclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRXhjZWxTZXJ2aWNlIHtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICB9XHJcblxyXG4gIGdlbmVyYXRlRXhjZWwoZXhjZWxPYmplY3QsIGV4Y2VsU2VhcmNoRmlsdGVyRmllbGRzKSB7XHJcblxyXG4gICAgLy9DcmVhdGUgd29ya2Jvb2sgYW5kIHdvcmtzaGVldFxyXG4gICAgbGV0IHdvcmtib29rID0gbmV3IFdvcmtib29rKCk7XHJcbiAgICAvLyBjcmVhdGUgbmV3IHNoZWV0IHdpdGggcGFnZVNldHVwIHNldHRpbmdzIGZvciBBNCAtIGxhbmRzY2FwZVxyXG4gICAgbGV0IHdvcmtzaGVldCA9IHdvcmtib29rLmFkZFdvcmtzaGVldChleGNlbE9iamVjdC5leGNlbFdvcmtTaGVldE5hbWUsIHtcclxuICAgICAgcGFnZVNldHVwOiB7IHBhcGVyU2l6ZTogOSwgb3JpZW50YXRpb246ICdsYW5kc2NhcGUnIH1cclxuICAgIH0pO1xyXG4gICAgd29ya3NoZWV0LnByb3BlcnRpZXMuZGVmYXVsdENvbFdpZHRoID0gMjA7XHJcblxyXG4gICAgLy9BZGQgUm93IGFuZCBmb3JtYXR0aW5nXHJcbiAgICBsZXQgZXhjZWxXb3JrU2hlZXRUaXRsZSA9IHdvcmtzaGVldC5hZGRSb3coW2V4Y2VsT2JqZWN0LnRpdGxlXSk7XHJcbiAgICBleGNlbFdvcmtTaGVldFRpdGxlLmZvbnQgPSB7XHJcbiAgICAgIG5hbWU6ICdDYWxpYnJpJyxcclxuICAgICAgZmFtaWx5OiA0LFxyXG4gICAgICBzaXplOiAyMCxcclxuICAgICAgdW5kZXJsaW5lOiBmYWxzZSxcclxuICAgICAgYm9sZDogdHJ1ZVxyXG4gICAgfVxyXG4gICAgZXhjZWxXb3JrU2hlZXRUaXRsZS5hbGlnbm1lbnQgPSB7XHJcbiAgICAgIGhvcml6b250YWw6ICdsZWZ0JyxcclxuICAgICAgdmVydGljYWw6ICdtaWRkbGUnXHJcbiAgICB9XHJcblxyXG4gICAgd29ya3NoZWV0LmFkZFJvdyhbXSk7XHJcblxyXG4gICAgLy8gTWVyZ2UgY2VsbHMgYmV0d2VlbiBBMSB0byBOMlxyXG4gICAgd29ya3NoZWV0Lm1lcmdlQ2VsbHMoJ0ExOk4yJyk7XHJcblxyXG4gICAgLy9CbGFuayBSb3cgXHJcbiAgICB3b3Jrc2hlZXQuYWRkUm93KFtdKTtcclxuXHJcblxyXG4gICAgLyogXHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBTZWFyY2ggZmlsdGVyIGZpZWxkcyAgLSBTdGFydHMgaGVyZVxyXG4gICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgKi9cclxuXHJcbiAgICBpZiAoZXhjZWxTZWFyY2hGaWx0ZXJGaWVsZHMuc2VhcmNoRmlsdGVyS2V5c1ZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgLy9BZGQgUm93IGFuZCBmb3JtYXR0aW5nXHJcbiAgICAgIGxldCBzZWFyY2hDcml0ZXJpYVRleHQgPSB3b3Jrc2hlZXQuYWRkUm93KFtleGNlbFNlYXJjaEZpbHRlckZpZWxkcy5zZWFyY2hDcml0ZXJpYVRleHRdKTtcclxuICAgICAgc2VhcmNoQ3JpdGVyaWFUZXh0LmZvbnQgPSB7XHJcbiAgICAgICAgbmFtZTogJ0NhbGlicmknLFxyXG4gICAgICAgIGZhbWlseTogNCxcclxuICAgICAgICBzaXplOiAxNixcclxuICAgICAgICBib2xkOiB0cnVlXHJcbiAgICAgIH1cclxuICAgICAgZXhjZWxXb3JrU2hlZXRUaXRsZS5hbGlnbm1lbnQgPSB7XHJcbiAgICAgICAgaG9yaXpvbnRhbDogJ2xlZnQnLFxyXG4gICAgICAgIHZlcnRpY2FsOiAnbWlkZGxlJ1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgZXhjZWxTZWFyY2hGaWx0ZXJGaWVsZHNEYXRhID0gZXhjZWxTZWFyY2hGaWx0ZXJGaWVsZHMuc2VhcmNoRmlsdGVyS2V5c1ZhbHVlcztcclxuXHJcblxyXG4gICAgICBleGNlbFNlYXJjaEZpbHRlckZpZWxkc0RhdGEuZm9yRWFjaChkID0+IHtcclxuICAgICAgICBsZXQgcm93ID0gd29ya3NoZWV0LmFkZFJvdyhkKTtcclxuICAgICAgICAvLyBDZWxsIFN0eWxlIGZvciBUYWJsZSBoZWFkZXIgZGF0YSA6IEZpbGwgYW5kIEJvcmRlciBhbmQgRm9udFxyXG4gICAgICAgIHJvdy5lYWNoQ2VsbCgoY2VsbCwgbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICBjZWxsLmZvbnQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdDYWxpYnJpJyxcclxuICAgICAgICAgICAgZmFtaWx5OiA0LFxyXG4gICAgICAgICAgICBib2xkOiBmYWxzZSxcclxuICAgICAgICAgICAgc2l6ZTogMTJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChudW1iZXIgPT0gMSkge1xyXG4gICAgICAgICAgICBjZWxsLmZvbnQuYm9sZCA9IHRydWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKiBcclxuICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgU2VhcmNoIGZpbHRlciBmaWVsZHMgIC0gZW5kcyBoZXJlXHJcbiAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAqL1xyXG5cclxuICAgIHdvcmtzaGVldC5hZGRSb3coW10pO1xyXG5cclxuICAgIC8qIFxyXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICBDcmVhdGluZyBSb3cgZm9yIFRhYmxlIGhlYWRlciBhbmQgZGlzcGxheSBpbiBFeGNlbCBzaGVldCAgLSBTdGFydHMgaGVyZVxyXG4gICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICovXHJcblxyXG4gICAgLy9BZGQgSGVhZGVyIFJvd1xyXG4gICAgbGV0IGV4Y2VsVGFibGVIZWFkZXJOYW1lcyA9IHdvcmtzaGVldC5hZGRSb3coZXhjZWxPYmplY3QudGFibGVIZWFkZXJOYW1lcyk7XHJcblxyXG4gICAgLy8gQ2VsbCBTdHlsZSBmb3IgVGFibGUgaGVhZGVyIGRhdGEgOiBGaWxsIGFuZCBCb3JkZXIgYW5kIEZvbnRcclxuICAgIGV4Y2VsVGFibGVIZWFkZXJOYW1lcy5lYWNoQ2VsbCgoY2VsbCwgbnVtYmVyKSA9PiB7XHJcbiAgICAgIGNlbGwuZmlsbCA9IHtcclxuICAgICAgICB0eXBlOiAncGF0dGVybicsXHJcbiAgICAgICAgcGF0dGVybjogJ3NvbGlkJyxcclxuICAgICAgICBmZ0NvbG9yOiB7IGFyZ2I6ICdGMkRFRkYnIH0sXHJcbiAgICAgICAgLy8gYmdDb2xvcjogeyBhcmdiOiAnRkYwMDAwRkYnIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY2VsbC5mb250ID0ge1xyXG4gICAgICAgIG5hbWU6ICdDYWxpYnJpJyxcclxuICAgICAgICBmYW1pbHk6IDQsXHJcbiAgICAgICAgYm9sZDogdHJ1ZSxcclxuICAgICAgICBzaXplOiAxMlxyXG4gICAgICB9XHJcblxyXG4gICAgICBjZWxsLmJvcmRlciA9IHsgdG9wOiB7IHN0eWxlOiAndGhpbicgfSwgbGVmdDogeyBzdHlsZTogJ3RoaW4nIH0sIGJvdHRvbTogeyBzdHlsZTogJ3RoaW4nIH0sIHJpZ2h0OiB7IHN0eWxlOiAndGhpbicgfSB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8qIFxyXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICBDcmVhdGluZyBSb3cgZm9yIFRhYmxlIGhlYWRlciBhbmQgZGlzcGxheSBpbiBFeGNlbCBzaGVldCAtICBFbmRzIGhlcmVcclxuICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAqL1xyXG5cclxuXHJcbiAgICAvKiBcclxuICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBBZGQgdGFibGUgYm9keSBkYXRhIGFuZCBkaXNwbGF5IGluIEV4Y2VsIC0gU3RhcnRzIGhlcmUgXHJcbiAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAqL1xyXG5cclxuICAgIGxldCBleGNlbFRhYmxlQm9keURhdGEgPSBleGNlbE9iamVjdC50YWJsZUJvZHlEYXRhO1xyXG5cclxuICAgIGV4Y2VsVGFibGVCb2R5RGF0YS5mb3JFYWNoKGQgPT4ge1xyXG4gICAgICBsZXQgcm93ID0gd29ya3NoZWV0LmFkZFJvdyhkKTtcclxuXHJcbiAgICAgIC8vIENlbGwgU3R5bGUgZm9yIFRhYmxlIGhlYWRlciBkYXRhIDogRmlsbCBhbmQgQm9yZGVyIGFuZCBGb250XHJcbiAgICAgIHJvdy5lYWNoQ2VsbCgoY2VsbCwgbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgY2VsbC5maWxsID0ge1xyXG4gICAgICAgICAgdHlwZTogJ3BhdHRlcm4nLFxyXG4gICAgICAgICAgcGF0dGVybjogJ3NvbGlkJyxcclxuICAgICAgICAgIGZnQ29sb3I6IHsgYXJnYjogJ0ZGRkZGRicgfSxcclxuICAgICAgICAgIC8vIGJnQ29sb3I6IHsgYXJnYjogJ0ZGMDAwMEZGJyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNlbGwuZm9udCA9IHtcclxuICAgICAgICAgIG5hbWU6ICdDYWxpYnJpJyxcclxuICAgICAgICAgIGZhbWlseTogNCxcclxuICAgICAgICAgIGJvbGQ6IGZhbHNlLFxyXG4gICAgICAgICAgc2l6ZTogMTJcclxuICAgICAgICB9XHJcbiAgICAgICAgY2VsbC5ib3JkZXIgPSB7IHRvcDogeyBzdHlsZTogJ3RoaW4nIH0sIGxlZnQ6IHsgc3R5bGU6ICd0aGluJyB9LCBib3R0b206IHsgc3R5bGU6ICd0aGluJyB9LCByaWdodDogeyBzdHlsZTogJ3RoaW4nIH0gfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8qIFxyXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICBBZGQgdGFibGUgYm9keSBkYXRhIGFuZCBkaXNwbGF5IGluIEV4Y2VsIC0gIEVuZHMgaGVyZVxyXG4gICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICovXHJcblxyXG4gICAgd29ya3NoZWV0LmFkZFJvdyhbXSk7XHJcblxyXG4gICAgLyogXHJcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgIEZvb3RlciBSb3cgLSBTdGFydHMgaGVyZVxyXG4gICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICovXHJcblxyXG4gICAgbGV0IGV4Y2VsRm9vdGVyUm93ID0gd29ya3NoZWV0LmFkZFJvdyhbJ0Rpc2NsYWltZXI6IFRoaXMgaXMgc3lzdGVtIGdlbmVyYXRlZCByZXBvcnQuJ10pO1xyXG4gICAgZXhjZWxGb290ZXJSb3cuZ2V0Q2VsbCgxKS5maWxsID0ge1xyXG4gICAgICB0eXBlOiAncGF0dGVybicsXHJcbiAgICAgIHBhdHRlcm46ICdub25lJyxcclxuICAgICAgZmdDb2xvcjogeyBhcmdiOiAnRkZGRkZGJyB9XHJcbiAgICB9O1xyXG4gICAgZXhjZWxGb290ZXJSb3cuZ2V0Q2VsbCgxKS5mb250ID0ge1xyXG4gICAgICBuYW1lOiAnQ2FsaWJyaScsXHJcbiAgICAgIGZhbWlseTogNCxcclxuICAgICAgYm9sZDogdHJ1ZSxcclxuICAgICAgc2l6ZTogMTJcclxuICAgIH1cclxuICAgIC8vIGV4Y2VsRm9vdGVyUm93LmdldENlbGwoMSkuYm9yZGVyID0geyB0b3A6IHsgc3R5bGU6ICd0aGluJyB9LCBsZWZ0OiB7IHN0eWxlOiAndGhpbicgfSwgYm90dG9tOiB7IHN0eWxlOiAndGhpbicgfSwgcmlnaHQ6IHsgc3R5bGU6ICd0aGluJyB9IH1cclxuXHJcbiAgICAvL01lcmdlIENlbGxzXHJcbiAgICB3b3Jrc2hlZXQubWVyZ2VDZWxscyhgQSR7ZXhjZWxGb290ZXJSb3cubnVtYmVyfTpGJHtleGNlbEZvb3RlclJvdy5udW1iZXJ9YCk7XHJcblxyXG4gICAgLyogXHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBGb290ZXIgUm93IC0gRW5kcyBoZXJlXHJcbiAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICovXHJcblxyXG4gICAgLyogXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgR2VuZXJhdGUgRXhjZWwgRmlsZSB3aXRoIGdpdmVuIG5hbWUgLSBTdGFydHMgaGVyZVxyXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgKi9cclxuXHJcbiAgICB3b3JrYm9vay54bHN4LndyaXRlQnVmZmVyKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBsZXQgYmxvYiA9IG5ldyBCbG9iKFtkYXRhXSwgeyB0eXBlOiAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnIH0pO1xyXG4gICAgICBmcy5zYXZlQXMoYmxvYiwgZXhjZWxPYmplY3QuZmlsZU5hbWUgKyAnLnhsc3gnKTtcclxuICAgIH0pXHJcblxyXG4gICAgLyogXHJcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIEdlbmVyYXRlIEV4Y2VsIEZpbGUgd2l0aCBnaXZlbiBuYW1lIC0gRW5kcyBoZXJlXHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKi9cclxuXHJcbiAgfVxyXG59Il19