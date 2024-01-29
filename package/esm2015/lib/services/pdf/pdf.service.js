import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as i0 from "@angular/core";
export class PdfService {
    constructor() {
    }
    generatePDF(pdfObject, pdfSearchFilterFields) {
        let head = [pdfObject.tableHeaderNames];
        let pdfTableBodyData = pdfObject.tableBodyData;
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
            let pdfSearchFilterFieldsData = pdfSearchFilterFields.searchFilterKeysValues;
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
                didParseCell: data => {
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
        let finalY = doc.lastAutoTable.finalY + 15; // The y position on the page
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
    }
}
PdfService.ɵfac = function PdfService_Factory(t) { return new (t || PdfService)(); };
PdfService.ɵprov = i0.ɵɵdefineInjectable({ token: PdfService, factory: PdfService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PdfService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nbG9iYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcGRmL3BkZi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8saUJBQWlCLENBQUM7O0FBS3pCLE1BQU0sT0FBTyxVQUFVO0lBRXJCO0lBQWdCLENBQUM7SUFHakIsV0FBVyxDQUFDLFNBQVMsRUFBRSxxQkFBcUI7UUFFMUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUV4QyxJQUFJLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFFL0Msd0JBQXdCO1FBRXhCLElBQUksR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFckMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQixHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWxDOzs7O1FBSUE7UUFFQSxJQUFJLHFCQUFxQixDQUFDLHNCQUFzQixDQUFDLE1BQU0sRUFBRTtZQUN2RCxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRTNELElBQUkseUJBQXlCLEdBQUcscUJBQXFCLENBQUMsc0JBQXNCLENBQUM7WUFFNUUsR0FBVyxDQUFDLFNBQVMsQ0FBQztnQkFDckIsSUFBSSxFQUFFLHlCQUF5QjtnQkFDL0IsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsTUFBTSxFQUFFO29CQUNOLFNBQVMsRUFBRSxHQUFHO2lCQUNmO2dCQUNELFVBQVUsRUFBRTtvQkFDVixRQUFRLEVBQUUsRUFBRTtpQkFDYjtnQkFDRCxVQUFVLEVBQUU7b0JBQ1YsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7Z0JBQ0QsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsWUFBWSxFQUFFLElBQUksQ0FBQyxFQUFFO29CQUNuQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTt3QkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQTtxQkFDcEM7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO3dCQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7cUJBQzNCO2dCQUNILENBQUM7YUFDRixDQUFDLENBQUM7U0FDSjtRQUdEOzs7O1FBSUE7UUFFQTs7OztRQUlBO1FBRUMsR0FBVyxDQUFDLFNBQVMsQ0FBQztZQUNyQixVQUFVLEVBQUU7Z0JBQ1YsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixTQUFTLEVBQUUsQ0FBQztnQkFDWixTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBQ3JCLFFBQVEsRUFBRSxFQUFFO2FBQ2I7WUFDRCxJQUFJLEVBQUUsSUFBSTtZQUNWLElBQUksRUFBRSxnQkFBZ0I7WUFDdEIsVUFBVSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtZQUM1QixLQUFLLEVBQUUsTUFBTTtZQUNiLFlBQVksRUFBRSxVQUFVLElBQUksRUFBRSxJQUFJO2dCQUNoQyxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssTUFBTSxFQUFFO29CQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFBO2lCQUN2QztZQUNILENBQUM7U0FDRixDQUFDLENBQUE7UUFHRjs7OztVQUlFO1FBR0YsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQixJQUFJLE1BQU0sR0FBSSxHQUFXLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyw2QkFBNkI7UUFDbEYsR0FBRyxDQUFDLElBQUksQ0FBQyw4Q0FBOEMsRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFHcEU7Ozs7UUFJQTtRQUNBLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLG1DQUFtQztRQUVuQzs7OztNQUlGO0lBRUEsQ0FBQzs7b0VBbkhVLFVBQVU7a0RBQVYsVUFBVSxXQUFWLFVBQVUsbUJBRlQsTUFBTTtrREFFUCxVQUFVO2NBSHRCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCBqc1BERiBmcm9tICdqc3BkZic7XHJcbmltcG9ydCAnanNwZGYtYXV0b3RhYmxlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZlNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuXHJcbiAgZ2VuZXJhdGVQREYocGRmT2JqZWN0LCBwZGZTZWFyY2hGaWx0ZXJGaWVsZHMpIHtcclxuXHJcbiAgICBsZXQgaGVhZCA9IFtwZGZPYmplY3QudGFibGVIZWFkZXJOYW1lc107XHJcblxyXG4gICAgbGV0IHBkZlRhYmxlQm9keURhdGEgPSBwZGZPYmplY3QudGFibGVCb2R5RGF0YTtcclxuXHJcbiAgICAvLyBDcmVhdGUgT2JqZWN0IGZvciBQREZcclxuXHJcbiAgICB2YXIgZG9jID0gbmV3IGpzUERGKCdsJywgJ21tJywgXCJhMVwiKTtcclxuXHJcbiAgICBkb2Muc2V0Rm9udFNpemUoMjApO1xyXG4gICAgZG9jLnRleHQocGRmT2JqZWN0LnRpdGxlLCAxNSwgMTApO1xyXG5cclxuICAgIC8qIFxyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIFNlYXJjaCBmaWx0ZXIgZmllbGRzICAtIFN0YXJ0cyBoZXJlXHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICovXHJcblxyXG4gICAgaWYgKHBkZlNlYXJjaEZpbHRlckZpZWxkcy5zZWFyY2hGaWx0ZXJLZXlzVmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICBkb2Muc2V0Rm9udFNpemUoMTYpO1xyXG4gICAgICBkb2MudGV4dChwZGZTZWFyY2hGaWx0ZXJGaWVsZHMuc2VhcmNoQ3JpdGVyaWFUZXh0LCAxNSwgMjQpO1xyXG5cclxuICAgICAgbGV0IHBkZlNlYXJjaEZpbHRlckZpZWxkc0RhdGEgPSBwZGZTZWFyY2hGaWx0ZXJGaWVsZHMuc2VhcmNoRmlsdGVyS2V5c1ZhbHVlcztcclxuXHJcbiAgICAgIChkb2MgYXMgYW55KS5hdXRvVGFibGUoe1xyXG4gICAgICAgIGJvZHk6IHBkZlNlYXJjaEZpbHRlckZpZWxkc0RhdGEsXHJcbiAgICAgICAgdGhlbWU6ICdwbGFpbicsXHJcbiAgICAgICAgaGVhZDogbnVsbCxcclxuICAgICAgICBzdHlsZXM6IHtcclxuICAgICAgICAgIGNlbGxXaWR0aDogMTAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keVN0eWxlczoge1xyXG4gICAgICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZFN0eWxlczoge1xyXG4gICAgICAgICAgZm9udFNpemU6IDEyXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGFydFk6IDI1LFxyXG4gICAgICAgIGRpZFBhcnNlQ2VsbDogZGF0YSA9PiB7XHJcbiAgICAgICAgICBpZiAoZGF0YS5jb2x1bW4uaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgZGF0YS5jZWxsLnN0eWxlcy5mb250U3R5bGUgPSBcImJvbGRcIlxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0YS5jZWxsLm1pbldpZHRoID0gMjAwO1xyXG4gICAgICAgICAgICBkYXRhLmNlbGwuY2VsbFdpZHRoID0gMjAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qIFxyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIFNlYXJjaCBmaWx0ZXIgZmllbGRzICAtIGVuZHMgaGVyZVxyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAqL1xyXG5cclxuICAgIC8qIFxyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgQWRkIHRhYmxlIGJvZHkgZGF0YSBhbmQgZGlzcGxheSBpbiBQREYgLSBTdGFydHMgaGVyZSBcclxuICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAqL1xyXG5cclxuICAgIChkb2MgYXMgYW55KS5hdXRvVGFibGUoe1xyXG4gICAgICBoZWFkU3R5bGVzOiB7XHJcbiAgICAgICAgY2VsbFdpZHRoOiAnYXV0bycsXHJcbiAgICAgICAgb3ZlcmZsb3c6ICd2aXNpYmxlJyxcclxuICAgICAgICBsaW5lV2lkdGg6IDEsXHJcbiAgICAgICAgbGluZUNvbG9yOiBbJ0YwRUVFRSddLFxyXG4gICAgICAgIGZvbnRTaXplOiAxMlxyXG4gICAgICB9LFxyXG4gICAgICBoZWFkOiBoZWFkLFxyXG4gICAgICBib2R5OiBwZGZUYWJsZUJvZHlEYXRhLFxyXG4gICAgICBib2R5U3R5bGVzOiB7IGZvbnRTaXplOiAxMiB9LFxyXG4gICAgICB0aGVtZTogJ2dyaWQnLFxyXG4gICAgICBkaWRQYXJzZUNlbGw6IGZ1bmN0aW9uIChjZWxsLCBkYXRhKSB7XHJcbiAgICAgICAgaWYgKGNlbGwuc2VjdGlvbiA9PT0gJ2hlYWQnKSB7XHJcbiAgICAgICAgICBjZWxsLmNlbGwuc3R5bGVzLmZpbGxDb2xvciA9IFwiI2YyZjNmNFwiO1xyXG4gICAgICAgICAgY2VsbC5jZWxsLnN0eWxlcy50ZXh0Q29sb3IgPSBcIiMwMDAwMDBcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pXHJcblxyXG5cclxuICAgIC8qIFxyXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICBBZGQgdGFibGUgYm9keSBkYXRhIGFuZCBkaXNwbGF5IGluIFBERiAtICBFbmRzIGhlcmVcclxuICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAqL1xyXG5cclxuXHJcbiAgICBkb2Muc2V0Rm9udFNpemUoMTIpO1xyXG4gICAgbGV0IGZpbmFsWSA9IChkb2MgYXMgYW55KS5sYXN0QXV0b1RhYmxlLmZpbmFsWSArIDE1OyAvLyBUaGUgeSBwb3NpdGlvbiBvbiB0aGUgcGFnZVxyXG4gICAgZG9jLnRleHQoXCJEaXNjbGFpbWVyOiBUaGlzIGlzIHN5c3RlbSBnZW5lcmF0ZWQgcmVwb3J0LlwiLCAxNSwgZmluYWxZKVxyXG5cclxuXHJcbiAgICAvKiBcclxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgR2VuZXJhdGUgUERGIEZpbGUgd2l0aCBnaXZlbiBuYW1lIC0gU3RhcnRzIGhlcmVcclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgKi9cclxuICAgIGRvYy5zYXZlKHBkZk9iamVjdC5maWxlTmFtZSk7XHJcbiAgICAvLyBkb2Mub3V0cHV0KCdkYXRhdXJsbmV3d2luZG93Jyk7IFxyXG5cclxuICAgIC8qIFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5HZW5lcmF0ZSBQREYgRmlsZSB3aXRoIGdpdmVuIG5hbWUgLSBFbmRzIGhlcmVcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKi9cclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==