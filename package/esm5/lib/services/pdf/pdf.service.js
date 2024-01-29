import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as i0 from "@angular/core";
var PdfService = /** @class */ (function () {
    function PdfService() {
    }
    PdfService.prototype.generatePDF = function (pdfObject, pdfSearchFilterFields) {
        var head = [pdfObject.tableHeaderNames];
        var pdfTableBodyData = pdfObject.tableBodyData;
        // Create Object for PDF
        var doc = new jsPDF('l', 'mm', "a1");
        doc.setFontSize(20);
        doc.text(pdfObject.title, 15, 10);
        /*
        ========================================================
        Search filter fields  - Starts here
        ========================================================
      */
        if (pdfSearchFilterFields.searchFilterKeysValues.length) {
            doc.setFontSize(16);
            doc.text(pdfSearchFilterFields.searchCriteriaText, 15, 24);
            var pdfSearchFilterFieldsData = pdfSearchFilterFields.searchFilterKeysValues;
            doc.autoTable({
                body: pdfSearchFilterFieldsData,
                theme: 'plain',
                head: null,
                styles: {
                    cellWidth: 100,
                },
                bodyStyles: {
                    fontSize: 12,
                },
                headStyles: {
                    fontSize: 12
                },
                startY: 25,
                didParseCell: function (data) {
                    if (data.column.index === 0) {
                        data.cell.styles.fontStyle = "bold";
                    }
                    else {
                        data.cell.minWidth = 200;
                        data.cell.cellWidth = 200;
                    }
                }
            });
        }
        /*
        ========================================================
        Search filter fields  - ends here
        ========================================================
      */
        /*
        ========================================================
          Add table body data and display in PDF - Starts here
          ========================================================
      */
        doc.autoTable({
            headStyles: {
                cellWidth: 'auto',
                overflow: 'visible',
                lineWidth: 1,
                lineColor: ['F0EEEE'],
                fontSize: 12
            },
            head: head,
            body: pdfTableBodyData,
            bodyStyles: { fontSize: 12 },
            theme: 'grid',
            didParseCell: function (cell, data) {
                if (cell.section === 'head') {
                    cell.cell.styles.fillColor = "#f2f3f4";
                    cell.cell.styles.textColor = "#000000";
                }
            },
        });
        /*
         ========================================================
           Add table body data and display in PDF -  Ends here
           ========================================================
        */
        doc.setFontSize(12);
        var finalY = doc.lastAutoTable.finalY + 15; // The y position on the page
        doc.text("Disclaimer: This is system generated report.", 15, finalY);
        /*
      ========================================================
        Generate PDF File with given name - Starts here
        ========================================================
      */
        doc.save(pdfObject.fileName);
        // doc.output('dataurlnewwindow'); 
        /*
    ========================================================
    Generate PDF File with given name - Ends here
    ========================================================
    */
    };
    PdfService.ɵfac = function PdfService_Factory(t) { return new (t || PdfService)(); };
    PdfService.ɵprov = i0.ɵɵdefineInjectable({ token: PdfService, factory: PdfService.ɵfac, providedIn: 'root' });
    return PdfService;
}());
export { PdfService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PdfService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nbG9iYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcGRmL3BkZi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8saUJBQWlCLENBQUM7O0FBRXpCO0lBS0U7SUFBZ0IsQ0FBQztJQUdqQixnQ0FBVyxHQUFYLFVBQVksU0FBUyxFQUFFLHFCQUFxQjtRQUUxQyxJQUFJLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRXhDLElBQUksZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUUvQyx3QkFBd0I7UUFFeEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVyQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFbEM7Ozs7UUFJQTtRQUVBLElBQUkscUJBQXFCLENBQUMsc0JBQXNCLENBQUMsTUFBTSxFQUFFO1lBQ3ZELEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDcEIsR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFM0QsSUFBSSx5QkFBeUIsR0FBRyxxQkFBcUIsQ0FBQyxzQkFBc0IsQ0FBQztZQUU1RSxHQUFXLENBQUMsU0FBUyxDQUFDO2dCQUNyQixJQUFJLEVBQUUseUJBQXlCO2dCQUMvQixLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsSUFBSTtnQkFDVixNQUFNLEVBQUU7b0JBQ04sU0FBUyxFQUFFLEdBQUc7aUJBQ2Y7Z0JBQ0QsVUFBVSxFQUFFO29CQUNWLFFBQVEsRUFBRSxFQUFFO2lCQUNiO2dCQUNELFVBQVUsRUFBRTtvQkFDVixRQUFRLEVBQUUsRUFBRTtpQkFDYjtnQkFDRCxNQUFNLEVBQUUsRUFBRTtnQkFDVixZQUFZLEVBQUUsVUFBQSxJQUFJO29CQUNoQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTt3QkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQTtxQkFDcEM7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO3dCQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7cUJBQzNCO2dCQUNILENBQUM7YUFDRixDQUFDLENBQUM7U0FDSjtRQUdEOzs7O1FBSUE7UUFFQTs7OztRQUlBO1FBRUMsR0FBVyxDQUFDLFNBQVMsQ0FBQztZQUNyQixVQUFVLEVBQUU7Z0JBQ1YsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixTQUFTLEVBQUUsQ0FBQztnQkFDWixTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBQ3JCLFFBQVEsRUFBRSxFQUFFO2FBQ2I7WUFDRCxJQUFJLEVBQUUsSUFBSTtZQUNWLElBQUksRUFBRSxnQkFBZ0I7WUFDdEIsVUFBVSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtZQUM1QixLQUFLLEVBQUUsTUFBTTtZQUNiLFlBQVksRUFBRSxVQUFVLElBQUksRUFBRSxJQUFJO2dCQUNoQyxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssTUFBTSxFQUFFO29CQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFBO2lCQUN2QztZQUNILENBQUM7U0FDRixDQUFDLENBQUE7UUFHRjs7OztVQUlFO1FBR0YsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQixJQUFJLE1BQU0sR0FBSSxHQUFXLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyw2QkFBNkI7UUFDbEYsR0FBRyxDQUFDLElBQUksQ0FBQyw4Q0FBOEMsRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFHcEU7Ozs7UUFJQTtRQUNBLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLG1DQUFtQztRQUVuQzs7OztNQUlGO0lBRUEsQ0FBQzt3RUFuSFUsVUFBVTtzREFBVixVQUFVLFdBQVYsVUFBVSxtQkFGVCxNQUFNO3FCQU5wQjtDQStIQyxBQTFIRCxJQTBIQztTQXZIWSxVQUFVO2tEQUFWLFVBQVU7Y0FIdEIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IGpzUERGIGZyb20gJ2pzcGRmJztcclxuaW1wb3J0ICdqc3BkZi1hdXRvdGFibGUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG5cclxuICBnZW5lcmF0ZVBERihwZGZPYmplY3QsIHBkZlNlYXJjaEZpbHRlckZpZWxkcykge1xyXG5cclxuICAgIGxldCBoZWFkID0gW3BkZk9iamVjdC50YWJsZUhlYWRlck5hbWVzXTtcclxuXHJcbiAgICBsZXQgcGRmVGFibGVCb2R5RGF0YSA9IHBkZk9iamVjdC50YWJsZUJvZHlEYXRhO1xyXG5cclxuICAgIC8vIENyZWF0ZSBPYmplY3QgZm9yIFBERlxyXG5cclxuICAgIHZhciBkb2MgPSBuZXcganNQREYoJ2wnLCAnbW0nLCBcImExXCIpO1xyXG5cclxuICAgIGRvYy5zZXRGb250U2l6ZSgyMCk7XHJcbiAgICBkb2MudGV4dChwZGZPYmplY3QudGl0bGUsIDE1LCAxMCk7XHJcblxyXG4gICAgLyogXHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgU2VhcmNoIGZpbHRlciBmaWVsZHMgIC0gU3RhcnRzIGhlcmVcclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgKi9cclxuXHJcbiAgICBpZiAocGRmU2VhcmNoRmlsdGVyRmllbGRzLnNlYXJjaEZpbHRlcktleXNWYWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgIGRvYy5zZXRGb250U2l6ZSgxNik7XHJcbiAgICAgIGRvYy50ZXh0KHBkZlNlYXJjaEZpbHRlckZpZWxkcy5zZWFyY2hDcml0ZXJpYVRleHQsIDE1LCAyNCk7XHJcblxyXG4gICAgICBsZXQgcGRmU2VhcmNoRmlsdGVyRmllbGRzRGF0YSA9IHBkZlNlYXJjaEZpbHRlckZpZWxkcy5zZWFyY2hGaWx0ZXJLZXlzVmFsdWVzO1xyXG5cclxuICAgICAgKGRvYyBhcyBhbnkpLmF1dG9UYWJsZSh7XHJcbiAgICAgICAgYm9keTogcGRmU2VhcmNoRmlsdGVyRmllbGRzRGF0YSxcclxuICAgICAgICB0aGVtZTogJ3BsYWluJyxcclxuICAgICAgICBoZWFkOiBudWxsLFxyXG4gICAgICAgIHN0eWxlczoge1xyXG4gICAgICAgICAgY2VsbFdpZHRoOiAxMDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5U3R5bGVzOiB7XHJcbiAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkU3R5bGVzOiB7XHJcbiAgICAgICAgICBmb250U2l6ZTogMTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0YXJ0WTogMjUsXHJcbiAgICAgICAgZGlkUGFyc2VDZWxsOiBkYXRhID0+IHtcclxuICAgICAgICAgIGlmIChkYXRhLmNvbHVtbi5pbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICBkYXRhLmNlbGwuc3R5bGVzLmZvbnRTdHlsZSA9IFwiYm9sZFwiXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhLmNlbGwubWluV2lkdGggPSAyMDA7XHJcbiAgICAgICAgICAgIGRhdGEuY2VsbC5jZWxsV2lkdGggPSAyMDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyogXHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgU2VhcmNoIGZpbHRlciBmaWVsZHMgIC0gZW5kcyBoZXJlXHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICovXHJcblxyXG4gICAgLyogXHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBBZGQgdGFibGUgYm9keSBkYXRhIGFuZCBkaXNwbGF5IGluIFBERiAtIFN0YXJ0cyBoZXJlIFxyXG4gICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICovXHJcblxyXG4gICAgKGRvYyBhcyBhbnkpLmF1dG9UYWJsZSh7XHJcbiAgICAgIGhlYWRTdHlsZXM6IHtcclxuICAgICAgICBjZWxsV2lkdGg6ICdhdXRvJyxcclxuICAgICAgICBvdmVyZmxvdzogJ3Zpc2libGUnLFxyXG4gICAgICAgIGxpbmVXaWR0aDogMSxcclxuICAgICAgICBsaW5lQ29sb3I6IFsnRjBFRUVFJ10sXHJcbiAgICAgICAgZm9udFNpemU6IDEyXHJcbiAgICAgIH0sXHJcbiAgICAgIGhlYWQ6IGhlYWQsXHJcbiAgICAgIGJvZHk6IHBkZlRhYmxlQm9keURhdGEsXHJcbiAgICAgIGJvZHlTdHlsZXM6IHsgZm9udFNpemU6IDEyIH0sXHJcbiAgICAgIHRoZW1lOiAnZ3JpZCcsXHJcbiAgICAgIGRpZFBhcnNlQ2VsbDogZnVuY3Rpb24gKGNlbGwsIGRhdGEpIHtcclxuICAgICAgICBpZiAoY2VsbC5zZWN0aW9uID09PSAnaGVhZCcpIHtcclxuICAgICAgICAgIGNlbGwuY2VsbC5zdHlsZXMuZmlsbENvbG9yID0gXCIjZjJmM2Y0XCI7XHJcbiAgICAgICAgICBjZWxsLmNlbGwuc3R5bGVzLnRleHRDb2xvciA9IFwiIzAwMDAwMFwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgLyogXHJcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgIEFkZCB0YWJsZSBib2R5IGRhdGEgYW5kIGRpc3BsYXkgaW4gUERGIC0gIEVuZHMgaGVyZVxyXG4gICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICovXHJcblxyXG5cclxuICAgIGRvYy5zZXRGb250U2l6ZSgxMik7XHJcbiAgICBsZXQgZmluYWxZID0gKGRvYyBhcyBhbnkpLmxhc3RBdXRvVGFibGUuZmluYWxZICsgMTU7IC8vIFRoZSB5IHBvc2l0aW9uIG9uIHRoZSBwYWdlXHJcbiAgICBkb2MudGV4dChcIkRpc2NsYWltZXI6IFRoaXMgaXMgc3lzdGVtIGdlbmVyYXRlZCByZXBvcnQuXCIsIDE1LCBmaW5hbFkpXHJcblxyXG5cclxuICAgIC8qIFxyXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBHZW5lcmF0ZSBQREYgRmlsZSB3aXRoIGdpdmVuIG5hbWUgLSBTdGFydHMgaGVyZVxyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAqL1xyXG4gICAgZG9jLnNhdmUocGRmT2JqZWN0LmZpbGVOYW1lKTtcclxuICAgIC8vIGRvYy5vdXRwdXQoJ2RhdGF1cmxuZXd3aW5kb3cnKTsgXHJcblxyXG4gICAgLyogXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbkdlbmVyYXRlIFBERiBGaWxlIHdpdGggZ2l2ZW4gbmFtZSAtIEVuZHMgaGVyZVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qL1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcbn1cclxuIl19