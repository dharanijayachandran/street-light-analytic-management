import { __makeTemplateObject } from "tslib";
import { L10n } from "@syncfusion/ej2-base";
import { MatPaginatorIntl } from '@angular/material/paginator';
import '@angular/localize/init';
// Syncfusion - dropdown list - No Records Found
export function syncDropdownNoRecordsFoundLocale() {
    L10n.load({
        'hi': {
            'dropdowns': {
                'noRecordsTemplate': "कोई रिकॉर्ड नहीं मिला!"
            },
            dropdowntree: {
                noRecordsTemplate: "कोई रिकॉर्ड नहीं मिला!"
            }
        }, 'ar': {
            'dropdowns': {
                'noRecordsTemplate': "لا توجد سجلات!"
            },
            dropdowntree: {
                noRecordsTemplate: "لا توجد سجلات!"
            }
        }
    });
}
var matRangeLabelIntl = function (page, pageSize, length) {
    if (length === 0 || pageSize === 0) {
        return $localize(templateObject_1 || (templateObject_1 = __makeTemplateObject([":@@paginator.zeroRange:0 of ", ""], [":@@paginator.zeroRange:0 of ", ""])), length);
    }
    length = Math.max(length, 0);
    var startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return $localize(templateObject_2 || (templateObject_2 = __makeTemplateObject([":@@paginator.rangeOfLabel:", " - ", " of ", ""], [":@@paginator.rangeOfLabel:", " - ", " of ", ""])), startIndex + 1, endIndex, length);
};
export function MyPaginatorIntl() {
    var paginatorIntl = new MatPaginatorIntl();
    paginatorIntl.itemsPerPageLabel = $localize(templateObject_3 || (templateObject_3 = __makeTemplateObject([":@@paginator.displayPerPage:Items per page"], [":@@paginator.displayPerPage:Items per page"])));
    paginatorIntl.nextPageLabel = $localize(templateObject_4 || (templateObject_4 = __makeTemplateObject([":@@paginator.nextPage:Next page"], [":@@paginator.nextPage:Next page"])));
    paginatorIntl.previousPageLabel = $localize(templateObject_5 || (templateObject_5 = __makeTemplateObject([":@@paginator.prevPage:Prev page"], [":@@paginator.prevPage:Prev page"])));
    paginatorIntl.lastPageLabel = $localize(templateObject_6 || (templateObject_6 = __makeTemplateObject([":@@paginator.lastPage:Last page"], [":@@paginator.lastPage:Last page"])));
    paginatorIntl.firstPageLabel = $localize(templateObject_7 || (templateObject_7 = __makeTemplateObject([":@@paginator.firstPage:First page"], [":@@paginator.firstPage:First page"])));
    paginatorIntl.getRangeLabel = matRangeLabelIntl;
    return paginatorIntl;
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpYy1leHBvcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nbG9iYWwvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2dlbmVyaWMtZXhwb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyx3QkFBd0IsQ0FBQztBQUVoQyxnREFBZ0Q7QUFDaEQsTUFBTSxVQUFVLGdDQUFnQztJQUU1QyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ04sSUFBSSxFQUFFO1lBQ0YsV0FBVyxFQUFFO2dCQUNULG1CQUFtQixFQUFFLHdCQUF3QjthQUNoRDtZQUNELFlBQVksRUFBQztnQkFDVCxpQkFBaUIsRUFBRSx3QkFBd0I7YUFDOUM7U0FDSixFQUFFLElBQUksRUFBRTtZQUNMLFdBQVcsRUFBRTtnQkFDVCxtQkFBbUIsRUFBRSxnQkFBZ0I7YUFDeEM7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsaUJBQWlCLEVBQUUsZ0JBQWdCO2FBQ3RDO1NBQ0o7S0FDSixDQUFDLENBQUM7QUFDUCxDQUFDO0FBR0QsSUFBTSxpQkFBaUIsR0FBRyxVQUFDLElBQVksRUFBRSxRQUFnQixFQUFFLE1BQWM7SUFDckUsSUFBSSxNQUFNLEtBQUssQ0FBQyxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7UUFDaEMsT0FBTyxTQUFTLHFHQUFBLDhCQUErQixFQUFNLEVBQUUsS0FBUixNQUFNLEVBQUU7S0FDMUQ7SUFDRCxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDNUIsSUFBTSxVQUFVLEdBQUcsSUFBSSxHQUFHLFFBQVEsQ0FBQTtJQUVsQywyRkFBMkY7SUFDM0YsSUFBTSxRQUFRLEdBQUcsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFBO0lBQ3ZHLE9BQU8sU0FBUyxrSEFBQSw0QkFBNkIsRUFBYyxLQUFNLEVBQVEsTUFBTyxFQUFNLEVBQUUsS0FBM0MsVUFBVSxHQUFHLENBQUMsRUFBTSxRQUFRLEVBQU8sTUFBTSxFQUFFO0FBQzVGLENBQUMsQ0FBQTtBQUdELE1BQU0sVUFBVSxlQUFlO0lBQzNCLElBQU0sYUFBYSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQTtJQUU1QyxhQUFhLENBQUMsaUJBQWlCLEdBQUcsU0FBUywrR0FBQSw0Q0FBNEMsSUFBQSxDQUFBO0lBQ3ZGLGFBQWEsQ0FBQyxhQUFhLEdBQUcsU0FBUyxvR0FBQSxpQ0FBaUMsSUFBQSxDQUFBO0lBQ3hFLGFBQWEsQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLG9HQUFBLGlDQUFpQyxJQUFBLENBQUE7SUFDNUUsYUFBYSxDQUFDLGFBQWEsR0FBQyxTQUFTLG9HQUFBLGlDQUFpQyxJQUFBLENBQUE7SUFDdEUsYUFBYSxDQUFDLGNBQWMsR0FBQyxTQUFTLHNHQUFBLG1DQUFtQyxJQUFBLENBQUE7SUFDekUsYUFBYSxDQUFDLGFBQWEsR0FBRyxpQkFBaUIsQ0FBQTtJQUUvQyxPQUFPLGFBQWEsQ0FBQTtBQUN4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTDEwbiB9IGZyb20gXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiO1xyXG5pbXBvcnQgeyBNYXRQYWdpbmF0b3JJbnRsIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcclxuaW1wb3J0ICdAYW5ndWxhci9sb2NhbGl6ZS9pbml0JztcclxuXHJcbi8vIFN5bmNmdXNpb24gLSBkcm9wZG93biBsaXN0IC0gTm8gUmVjb3JkcyBGb3VuZFxyXG5leHBvcnQgZnVuY3Rpb24gc3luY0Ryb3Bkb3duTm9SZWNvcmRzRm91bmRMb2NhbGUoKSB7XHJcbiAgIFxyXG4gICAgTDEwbi5sb2FkKHtcclxuICAgICAgICAnaGknOiB7XHJcbiAgICAgICAgICAgICdkcm9wZG93bnMnOiB7XHJcbiAgICAgICAgICAgICAgICAnbm9SZWNvcmRzVGVtcGxhdGUnOiBcIuCkleCli+CkiCDgpLDgpL/gpJXgpYngpLDgpY3gpKEg4KSo4KS54KWA4KSCIOCkruCkv+CksuCkviFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkcm9wZG93bnRyZWU6e1xyXG4gICAgICAgICAgICAgICAgbm9SZWNvcmRzVGVtcGxhdGU6IFwi4KSV4KWL4KSIIOCksOCkv+CkleClieCksOCljeCkoSDgpKjgpLngpYDgpIIg4KSu4KS/4KSy4KS+IVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAnYXInOiB7XHJcbiAgICAgICAgICAgICdkcm9wZG93bnMnOiB7XHJcbiAgICAgICAgICAgICAgICAnbm9SZWNvcmRzVGVtcGxhdGUnOiBcItmE2Kcg2KrZiNis2K8g2LPYrNmE2KfYqiFcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkcm9wZG93bnRyZWU6IHtcclxuICAgICAgICAgICAgICAgIG5vUmVjb3Jkc1RlbXBsYXRlOiBcItmE2Kcg2KrZiNis2K8g2LPYrNmE2KfYqiFcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIFxyXG5cclxuY29uc3QgbWF0UmFuZ2VMYWJlbEludGwgPSAocGFnZTogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyLCBsZW5ndGg6IG51bWJlcikgPT4ge1xyXG4gICAgaWYgKGxlbmd0aCA9PT0gMCB8fCBwYWdlU2l6ZSA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAkbG9jYWxpemVgOkBAcGFnaW5hdG9yLnplcm9SYW5nZTowIG9mICR7bGVuZ3RofWBcclxuICAgIH1cclxuICAgIGxlbmd0aCA9IE1hdGgubWF4KGxlbmd0aCwgMClcclxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBwYWdlICogcGFnZVNpemVcclxuXHJcbiAgICAvLyBJZiB0aGUgc3RhcnQgaW5kZXggZXhjZWVkcyB0aGUgbGlzdCBsZW5ndGgsIGRvIG5vdCB0cnkgYW5kIGZpeCB0aGUgZW5kIGluZGV4IHRvIHRoZSBlbmQuXHJcbiAgICBjb25zdCBlbmRJbmRleCA9IHN0YXJ0SW5kZXggPCBsZW5ndGggPyAgTWF0aC5taW4oc3RhcnRJbmRleCArIHBhZ2VTaXplLCBsZW5ndGgpIDogc3RhcnRJbmRleCArIHBhZ2VTaXplXHJcbiAgICByZXR1cm4gJGxvY2FsaXplYDpAQHBhZ2luYXRvci5yYW5nZU9mTGFiZWw6JHtzdGFydEluZGV4ICsgMX0gLSAke2VuZEluZGV4fSBvZiAke2xlbmd0aH1gXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTXlQYWdpbmF0b3JJbnRsKCkge1xyXG4gICAgY29uc3QgcGFnaW5hdG9ySW50bCA9IG5ldyBNYXRQYWdpbmF0b3JJbnRsKClcclxuXHJcbiAgICBwYWdpbmF0b3JJbnRsLml0ZW1zUGVyUGFnZUxhYmVsID0gJGxvY2FsaXplYDpAQHBhZ2luYXRvci5kaXNwbGF5UGVyUGFnZTpJdGVtcyBwZXIgcGFnZWBcclxuICAgIHBhZ2luYXRvckludGwubmV4dFBhZ2VMYWJlbCA9ICRsb2NhbGl6ZWA6QEBwYWdpbmF0b3IubmV4dFBhZ2U6TmV4dCBwYWdlYFxyXG4gICAgcGFnaW5hdG9ySW50bC5wcmV2aW91c1BhZ2VMYWJlbCA9ICRsb2NhbGl6ZWA6QEBwYWdpbmF0b3IucHJldlBhZ2U6UHJldiBwYWdlYFxyXG4gICAgcGFnaW5hdG9ySW50bC5sYXN0UGFnZUxhYmVsPSRsb2NhbGl6ZWA6QEBwYWdpbmF0b3IubGFzdFBhZ2U6TGFzdCBwYWdlYFxyXG4gICAgcGFnaW5hdG9ySW50bC5maXJzdFBhZ2VMYWJlbD0kbG9jYWxpemVgOkBAcGFnaW5hdG9yLmZpcnN0UGFnZTpGaXJzdCBwYWdlYFxyXG4gICAgcGFnaW5hdG9ySW50bC5nZXRSYW5nZUxhYmVsID0gbWF0UmFuZ2VMYWJlbEludGxcclxuIFxyXG4gICAgcmV0dXJuIHBhZ2luYXRvckludGxcclxufVxyXG4gIFxyXG4gIl19