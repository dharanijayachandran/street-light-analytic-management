import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import * as i0 from "@angular/core";
export class ExcelService {
    constructor() {
    }
    generateExcel(excelObject, excelSearchFilterFields) {
        //Create workbook and worksheet
        let workbook = new Workbook();
        // create new sheet with pageSetup settings for A4 - landscape
        let worksheet = workbook.addWorksheet(excelObject.excelWorkSheetName, {
            pageSetup: { paperSize: 9, orientation: 'landscape' }
        });
        worksheet.properties.defaultColWidth = 20;
        //Add Row and formatting
        let excelWorkSheetTitle = worksheet.addRow([excelObject.title]);
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
            let searchCriteriaText = worksheet.addRow([excelSearchFilterFields.searchCriteriaText]);
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
            let excelSearchFilterFieldsData = excelSearchFilterFields.searchFilterKeysValues;
            excelSearchFilterFieldsData.forEach(d => {
                let row = worksheet.addRow(d);
                // Cell Style for Table header data : Fill and Border and Font
                row.eachCell((cell, number) => {
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
        let excelTableHeaderNames = worksheet.addRow(excelObject.tableHeaderNames);
        // Cell Style for Table header data : Fill and Border and Font
        excelTableHeaderNames.eachCell((cell, number) => {
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
        let excelTableBodyData = excelObject.tableBodyData;
        excelTableBodyData.forEach(d => {
            let row = worksheet.addRow(d);
            // Cell Style for Table header data : Fill and Border and Font
            row.eachCell((cell, number) => {
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
        let excelFooterRow = worksheet.addRow(['Disclaimer: This is system generated report.']);
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
        worksheet.mergeCells(`A${excelFooterRow.number}:F${excelFooterRow.number}`);
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
        workbook.xlsx.writeBuffer().then((data) => {
            let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            fs.saveAs(blob, excelObject.fileName + '.xlsx');
        });
        /*
      ========================================================
        Generate Excel File with given name - Ends here
        ========================================================
     */
    }
}
ExcelService.ɵfac = function ExcelService_Factory(t) { return new (t || ExcelService)(); };
ExcelService.ɵprov = i0.ɵɵdefineInjectable({ token: ExcelService, factory: ExcelService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExcelService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsb2JhbC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9leGNlbC9leGNlbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNuQyxPQUFPLEtBQUssRUFBRSxNQUFNLFlBQVksQ0FBQzs7QUFJakMsTUFBTSxPQUFPLFlBQVk7SUFHdkI7SUFFQSxDQUFDO0lBRUQsYUFBYSxDQUFDLFdBQVcsRUFBRSx1QkFBdUI7UUFFaEQsK0JBQStCO1FBQy9CLElBQUksUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFDOUIsOERBQThEO1FBQzlELElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFO1lBQ3BFLFNBQVMsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRTtTQUN0RCxDQUFDLENBQUM7UUFDSCxTQUFTLENBQUMsVUFBVSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFFMUMsd0JBQXdCO1FBQ3hCLElBQUksbUJBQW1CLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLG1CQUFtQixDQUFDLElBQUksR0FBRztZQUN6QixJQUFJLEVBQUUsU0FBUztZQUNmLE1BQU0sRUFBRSxDQUFDO1lBQ1QsSUFBSSxFQUFFLEVBQUU7WUFDUixTQUFTLEVBQUUsS0FBSztZQUNoQixJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUE7UUFDRCxtQkFBbUIsQ0FBQyxTQUFTLEdBQUc7WUFDOUIsVUFBVSxFQUFFLE1BQU07WUFDbEIsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FBQTtRQUVELFNBQVMs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QVM7WUFDZixNQUFNLEVBQUUsQ0FBQztZQUNULElBQUksRUFBRSxJQUFJO1lBQ1YsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFBO1FBQ0QsOElBQThJO1FBRTlJLGFBQWE7UUFDYixTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksY0FBYyxDQUFDLE1BQU0sS0FBSyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUU1RTs7OztTQUlDO1FBRUQ7Ozs7UUFJQTtRQUVBLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDeEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxtRUFBbUUsRUFBRSxDQUFDLENBQUM7WUFDM0csRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQTtRQUVGOzs7O09BSUQ7SUFFRCxDQUFDOzt3RUFoTlUsWUFBWTtvREFBWixZQUFZLFdBQVosWUFBWSxtQkFGWCxNQUFNO2tEQUVQLFlBQVk7Y0FIeEIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXb3JrYm9vayB9IGZyb20gJ2V4Y2VsanMnO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmaWxlLXNhdmVyJztcclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRXhjZWxTZXJ2aWNlIHtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICB9XHJcblxyXG4gIGdlbmVyYXRlRXhjZWwoZXhjZWxPYmplY3QsIGV4Y2VsU2VhcmNoRmlsdGVyRmllbGRzKSB7XHJcblxyXG4gICAgLy9DcmVhdGUgd29ya2Jvb2sgYW5kIHdvcmtzaGVldFxyXG4gICAgbGV0IHdvcmtib29rID0gbmV3IFdvcmtib29rKCk7XHJcbiAgICAvLyBjcmVhdGUgbmV3IHNoZWV0IHdpdGggcGFnZVNldHVwIHNldHRpbmdzIGZvciBBNCAtIGxhbmRzY2FwZVxyXG4gICAgbGV0IHdvcmtzaGVldCA9IHdvcmtib29rLmFkZFdvcmtzaGVldChleGNlbE9iamVjdC5leGNlbFdvcmtTaGVldE5hbWUsIHtcclxuICAgICAgcGFnZVNldHVwOiB7IHBhcGVyU2l6ZTogOSwgb3JpZW50YXRpb246ICdsYW5kc2NhcGUnIH1cclxuICAgIH0pO1xyXG4gICAgd29ya3NoZWV0LnByb3BlcnRpZXMuZGVmYXVsdENvbFdpZHRoID0gMjA7XHJcblxyXG4gICAgLy9BZGQgUm93IGFuZCBmb3JtYXR0aW5nXHJcbiAgICBsZXQgZXhjZWxXb3JrU2hlZXRUaXRsZSA9IHdvcmtzaGVldC5hZGRSb3coW2V4Y2VsT2JqZWN0LnRpdGxlXSk7XHJcbiAgICBleGNlbFdvcmtTaGVldFRpdGxlLmZvbnQgPSB7XHJcbiAgICAgIG5hbWU6ICdDYWxpYnJpJyxcclxuICAgICAgZmFtaWx5OiA0LFxyXG4gICAgICBzaXplOiAyMCxcclxuICAgICAgdW5kZXJsaW5lOiBmYWxzZSxcclxuICAgICAgYm9sZDogdHJ1ZVxyXG4gICAgfVxyXG4gICAgZXhjZWxXb3JrU2hlZXRUaXRsZS5hbGlnbm1lbnQgPSB7XHJcbiAgICAgIGhvcml6b250YWw6ICdsZWZ0JyxcclxuICAgICAgdmVydGljYWw6ICdtaWRkbGUnXHJcbiAgICB9XHJcblxyXG4gICAgd29ya3NoZWV0LmFkZFJvdyhbXSk7XHJcblxyXG4gICAgLy8gTWVyZ2UgY2VsbHMgYmV0d2VlbiBBMSB0byBOMlxyXG4gICAgd29ya3NoZWV0Lm1lcmdlQ2VsbHMoJ0ExOk4yJyk7XHJcblxyXG4gICAgLy9CbGFuayBSb3cgXHJcbiAgICB3b3Jrc2hlZXQuYWRkUm93KFtdKTtcclxuXHJcblxyXG4gICAgLyogXHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBTZWFyY2ggZmlsdGVyIGZpZWxkcyAgLSBTdGFydHMgaGVyZVxyXG4gICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgKi9cclxuXHJcbiAgICBpZiAoZXhjZWxTZWFyY2hGaWx0ZXJGaWVsZHMuc2VhcmNoRmlsdGVyS2V5c1ZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgLy9BZGQgUm93IGFuZCBmb3JtYXR0aW5nXHJcbiAgICAgIGxldCBzZWFyY2hDcml0ZXJpYVRleHQgPSB3b3Jrc2hlZXQuYWRkUm93KFtleGNlbFNlYXJjaEZpbHRlckZpZWxkcy5zZWFyY2hDcml0ZXJpYVRleHRdKTtcclxuICAgICAgc2VhcmNoQ3JpdGVyaWFUZXh0LmZvbnQgPSB7XHJcbiAgICAgICAgbmFtZTogJ0NhbGlicmknLFxyXG4gICAgICAgIGZhbWlseTogNCxcclxuICAgICAgICBzaXplOiAxNixcclxuICAgICAgICBib2xkOiB0cnVlXHJcbiAgICAgIH1cclxuICAgICAgZXhjZWxXb3JrU2hlZXRUaXRsZS5hbGlnbm1lbnQgPSB7XHJcbiAgICAgICAgaG9yaXpvbnRhbDogJ2xlZnQnLFxyXG4gICAgICAgIHZlcnRpY2FsOiAnbWlkZGxlJ1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgZXhjZWxTZWFyY2hGaWx0ZXJGaWVsZHNEYXRhID0gZXhjZWxTZWFyY2hGaWx0ZXJGaWVsZHMuc2VhcmNoRmlsdGVyS2V5c1ZhbHVlcztcclxuXHJcblxyXG4gICAgICBleGNlbFNlYXJjaEZpbHRlckZpZWxkc0RhdGEuZm9yRWFjaChkID0+IHtcclxuICAgICAgICBsZXQgcm93ID0gd29ya3NoZWV0LmFkZFJvdyhkKTtcclxuICAgICAgICAvLyBDZWxsIFN0eWxlIGZvciBUYWJsZSBoZWFkZXIgZGF0YSA6IEZpbGwgYW5kIEJvcmRlciBhbmQgRm9udFxyXG4gICAgICAgIHJvdy5lYWNoQ2VsbCgoY2VsbCwgbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICBjZWxsLmZvbnQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdDYWxpYnJpJyxcclxuICAgICAgICAgICAgZmFtaWx5OiA0LFxyXG4gICAgICAgICAgICBib2xkOiBmYWxzZSxcclxuICAgICAgICAgICAgc2l6ZTogMTJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChudW1iZXIgPT0gMSkge1xyXG4gICAgICAgICAgICBjZWxsLmZvbnQuYm9sZCA9IHRydWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKiBcclxuICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgU2VhcmNoIGZpbHRlciBmaWVsZHMgIC0gZW5kcyBoZXJlXHJcbiAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAqL1xyXG5cclxuICAgIHdvcmtzaGVldC5hZGRSb3coW10pO1xyXG5cclxuICAgIC8qIFxyXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICBDcmVhdGluZyBSb3cgZm9yIFRhYmxlIGhlYWRlciBhbmQgZGlzcGxheSBpbiBFeGNlbCBzaGVldCAgLSBTdGFydHMgaGVyZVxyXG4gICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICovXHJcblxyXG4gICAgLy9BZGQgSGVhZGVyIFJvd1xyXG4gICAgbGV0IGV4Y2VsVGFibGVIZWFkZXJOYW1lcyA9IHdvcmtzaGVldC5hZGRSb3coZXhjZWxPYmplY3QudGFibGVIZWFkZXJOYW1lcyk7XHJcblxyXG4gICAgLy8gQ2VsbCBTdHlsZSBmb3IgVGFibGUgaGVhZGVyIGRhdGEgOiBGaWxsIGFuZCBCb3JkZXIgYW5kIEZvbnRcclxuICAgIGV4Y2VsVGFibGVIZWFkZXJOYW1lcy5lYWNoQ2VsbCgoY2VsbCwgbnVtYmVyKSA9PiB7XHJcbiAgICAgIGNlbGwuZmlsbCA9IHtcclxuICAgICAgICB0eXBlOiAncGF0dGVybicsXHJcbiAgICAgICAgcGF0dGVybjogJ3NvbGlkJyxcclxuICAgICAgICBmZ0NvbG9yOiB7IGFyZ2I6ICdGMkRFRkYnIH0sXHJcbiAgICAgICAgLy8gYmdDb2xvcjogeyBhcmdiOiAnRkYwMDAwRkYnIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY2VsbC5mb250ID0ge1xyXG4gICAgICAgIG5hbWU6ICdDYWxpYnJpJyxcclxuICAgICAgICBmYW1pbHk6IDQsXHJcbiAgICAgICAgYm9sZDogdHJ1ZSxcclxuICAgICAgICBzaXplOiAxMlxyXG4gICAgICB9XHJcblxyXG4gICAgICBjZWxsLmJvcmRlciA9IHsgdG9wOiB7IHN0eWxlOiAndGhpbicgfSwgbGVmdDogeyBzdHlsZTogJ3RoaW4nIH0sIGJvdHRvbTogeyBzdHlsZTogJ3RoaW4nIH0sIHJpZ2h0OiB7IHN0eWxlOiAndGhpbicgfSB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8qIFxyXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICBDcmVhdGluZyBSb3cgZm9yIFRhYmxlIGhlYWRlciBhbmQgZGlzcGxheSBpbiBFeGNlbCBzaGVldCAtICBFbmRzIGhlcmVcclxuICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAqL1xyXG5cclxuXHJcbiAgICAvKiBcclxuICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBBZGQgdGFibGUgYm9keSBkYXRhIGFuZCBkaXNwbGF5IGluIEV4Y2VsIC0gU3RhcnRzIGhlcmUgXHJcbiAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAqL1xyXG5cclxuICAgIGxldCBleGNlbFRhYmxlQm9keURhdGEgPSBleGNlbE9iamVjdC50YWJsZUJvZHlEYXRhO1xyXG5cclxuICAgIGV4Y2VsVGFibGVCb2R5RGF0YS5mb3JFYWNoKGQgPT4ge1xyXG4gICAgICBsZXQgcm93ID0gd29ya3NoZWV0LmFkZFJvdyhkKTtcclxuXHJcbiAgICAgIC8vIENlbGwgU3R5bGUgZm9yIFRhYmxlIGhlYWRlciBkYXRhIDogRmlsbCBhbmQgQm9yZGVyIGFuZCBGb250XHJcbiAgICAgIHJvdy5lYWNoQ2VsbCgoY2VsbCwgbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgY2VsbC5maWxsID0ge1xyXG4gICAgICAgICAgdHlwZTogJ3BhdHRlcm4nLFxyXG4gICAgICAgICAgcGF0dGVybjogJ3NvbGlkJyxcclxuICAgICAgICAgIGZnQ29sb3I6IHsgYXJnYjogJ0ZGRkZGRicgfSxcclxuICAgICAgICAgIC8vIGJnQ29sb3I6IHsgYXJnYjogJ0ZGMDAwMEZGJyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNlbGwuZm9udCA9IHtcclxuICAgICAgICAgIG5hbWU6ICdDYWxpYnJpJyxcclxuICAgICAgICAgIGZhbWlseTogNCxcclxuICAgICAgICAgIGJvbGQ6IGZhbHNlLFxyXG4gICAgICAgICAgc2l6ZTogMTJcclxuICAgICAgICB9XHJcbiAgICAgICAgY2VsbC5ib3JkZXIgPSB7IHRvcDogeyBzdHlsZTogJ3RoaW4nIH0sIGxlZnQ6IHsgc3R5bGU6ICd0aGluJyB9LCBib3R0b206IHsgc3R5bGU6ICd0aGluJyB9LCByaWdodDogeyBzdHlsZTogJ3RoaW4nIH0gfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8qIFxyXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICBBZGQgdGFibGUgYm9keSBkYXRhIGFuZCBkaXNwbGF5IGluIEV4Y2VsIC0gIEVuZHMgaGVyZVxyXG4gICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICovXHJcblxyXG4gICAgd29ya3NoZWV0LmFkZFJvdyhbXSk7XHJcblxyXG4gICAgLyogXHJcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgIEZvb3RlciBSb3cgLSBTdGFydHMgaGVyZVxyXG4gICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICovXHJcblxyXG4gICAgbGV0IGV4Y2VsRm9vdGVyUm93ID0gd29ya3NoZWV0LmFkZFJvdyhbJ0Rpc2NsYWltZXI6IFRoaXMgaXMgc3lzdGVtIGdlbmVyYXRlZCByZXBvcnQuJ10pO1xyXG4gICAgZXhjZWxGb290ZXJSb3cuZ2V0Q2VsbCgxKS5maWxsID0ge1xyXG4gICAgICB0eXBlOiAncGF0dGVybicsXHJcbiAgICAgIHBhdHRlcm46ICdub25lJyxcclxuICAgICAgZmdDb2xvcjogeyBhcmdiOiAnRkZGRkZGJyB9XHJcbiAgICB9O1xyXG4gICAgZXhjZWxGb290ZXJSb3cuZ2V0Q2VsbCgxKS5mb250ID0ge1xyXG4gICAgICBuYW1lOiAnQ2FsaWJyaScsXHJcbiAgICAgIGZhbWlseTogNCxcclxuICAgICAgYm9sZDogdHJ1ZSxcclxuICAgICAgc2l6ZTogMTJcclxuICAgIH1cclxuICAgIC8vIGV4Y2VsRm9vdGVyUm93LmdldENlbGwoMSkuYm9yZGVyID0geyB0b3A6IHsgc3R5bGU6ICd0aGluJyB9LCBsZWZ0OiB7IHN0eWxlOiAndGhpbicgfSwgYm90dG9tOiB7IHN0eWxlOiAndGhpbicgfSwgcmlnaHQ6IHsgc3R5bGU6ICd0aGluJyB9IH1cclxuXHJcbiAgICAvL01lcmdlIENlbGxzXHJcbiAgICB3b3Jrc2hlZXQubWVyZ2VDZWxscyhgQSR7ZXhjZWxGb290ZXJSb3cubnVtYmVyfTpGJHtleGNlbEZvb3RlclJvdy5udW1iZXJ9YCk7XHJcblxyXG4gICAgLyogXHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBGb290ZXIgUm93IC0gRW5kcyBoZXJlXHJcbiAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICovXHJcblxyXG4gICAgLyogXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgR2VuZXJhdGUgRXhjZWwgRmlsZSB3aXRoIGdpdmVuIG5hbWUgLSBTdGFydHMgaGVyZVxyXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgKi9cclxuXHJcbiAgICB3b3JrYm9vay54bHN4LndyaXRlQnVmZmVyKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBsZXQgYmxvYiA9IG5ldyBCbG9iKFtkYXRhXSwgeyB0eXBlOiAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnIH0pO1xyXG4gICAgICBmcy5zYXZlQXMoYmxvYiwgZXhjZWxPYmplY3QuZmlsZU5hbWUgKyAnLnhsc3gnKTtcclxuICAgIH0pXHJcblxyXG4gICAgLyogXHJcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIEdlbmVyYXRlIEV4Y2VsIEZpbGUgd2l0aCBnaXZlbiBuYW1lIC0gRW5kcyBoZXJlXHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKi9cclxuXHJcbiAgfVxyXG59Il19