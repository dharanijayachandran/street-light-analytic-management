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
const matRangeLabelIntl = (page, pageSize, length) => {
    if (length === 0 || pageSize === 0) {
        return $localize `:@@paginator.zeroRange:0 of ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return $localize `:@@paginator.rangeOfLabel:${startIndex + 1} - ${endIndex} of ${length}`;
};
export function MyPaginatorIntl() {
    const paginatorIntl = new MatPaginatorIntl();
    paginatorIntl.itemsPerPageLabel = $localize `:@@paginator.displayPerPage:Items per page`;
    paginatorIntl.nextPageLabel = $localize `:@@paginator.nextPage:Next page`;
    paginatorIntl.previousPageLabel = $localize `:@@paginator.prevPage:Prev page`;
    paginatorIntl.lastPageLabel = $localize `:@@paginator.lastPage:Last page`;
    paginatorIntl.firstPageLabel = $localize `:@@paginator.firstPage:First page`;
    paginatorIntl.getRangeLabel = matRangeLabelIntl;
    return paginatorIntl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpYy1leHBvcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nbG9iYWwvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2dlbmVyaWMtZXhwb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLHdCQUF3QixDQUFDO0FBRWhDLGdEQUFnRDtBQUNoRCxNQUFNLFVBQVUsZ0NBQWdDO0lBRTVDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDTixJQUFJLEVBQUU7WUFDRixXQUFXLEVBQUU7Z0JBQ1QsbUJBQW1CLEVBQUUsd0JBQXdCO2FBQ2hEO1lBQ0QsWUFBWSxFQUFDO2dCQUNULGlCQUFpQixFQUFFLHdCQUF3QjthQUM5QztTQUNKLEVBQUUsSUFBSSxFQUFFO1lBQ0wsV0FBVyxFQUFFO2dCQUNULG1CQUFtQixFQUFFLGdCQUFnQjthQUN4QztZQUNELFlBQVksRUFBRTtnQkFDVixpQkFBaUIsRUFBRSxnQkFBZ0I7YUFDdEM7U0FDSjtLQUNKLENBQUMsQ0FBQztBQUNQLENBQUM7QUFHRCxNQUFNLGlCQUFpQixHQUFHLENBQUMsSUFBWSxFQUFFLFFBQWdCLEVBQUUsTUFBYyxFQUFFLEVBQUU7SUFDekUsSUFBSSxNQUFNLEtBQUssQ0FBQyxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7UUFDaEMsT0FBTyxTQUFTLENBQUEsK0JBQStCLE1BQU0sRUFBRSxDQUFBO0tBQzFEO0lBQ0QsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzVCLE1BQU0sVUFBVSxHQUFHLElBQUksR0FBRyxRQUFRLENBQUE7SUFFbEMsMkZBQTJGO0lBQzNGLE1BQU0sUUFBUSxHQUFHLFVBQVUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQTtJQUN2RyxPQUFPLFNBQVMsQ0FBQSw2QkFBNkIsVUFBVSxHQUFHLENBQUMsTUFBTSxRQUFRLE9BQU8sTUFBTSxFQUFFLENBQUE7QUFDNUYsQ0FBQyxDQUFBO0FBR0QsTUFBTSxVQUFVLGVBQWU7SUFDM0IsTUFBTSxhQUFhLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFBO0lBRTVDLGFBQWEsQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUEsNENBQTRDLENBQUE7SUFDdkYsYUFBYSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUEsaUNBQWlDLENBQUE7SUFDeEUsYUFBYSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQSxpQ0FBaUMsQ0FBQTtJQUM1RSxhQUFhLENBQUMsYUFBYSxHQUFDLFNBQVMsQ0FBQSxpQ0FBaUMsQ0FBQTtJQUN0RSxhQUFhLENBQUMsY0FBYyxHQUFDLFNBQVMsQ0FBQSxtQ0FBbUMsQ0FBQTtJQUN6RSxhQUFhLENBQUMsYUFBYSxHQUFHLGlCQUFpQixDQUFBO0lBRS9DLE9BQU8sYUFBYSxDQUFBO0FBQ3hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMMTBuIH0gZnJvbSBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCI7XHJcbmltcG9ydCB7IE1hdFBhZ2luYXRvckludGwgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xyXG5pbXBvcnQgJ0Bhbmd1bGFyL2xvY2FsaXplL2luaXQnO1xyXG5cclxuLy8gU3luY2Z1c2lvbiAtIGRyb3Bkb3duIGxpc3QgLSBObyBSZWNvcmRzIEZvdW5kXHJcbmV4cG9ydCBmdW5jdGlvbiBzeW5jRHJvcGRvd25Ob1JlY29yZHNGb3VuZExvY2FsZSgpIHtcclxuICAgXHJcbiAgICBMMTBuLmxvYWQoe1xyXG4gICAgICAgICdoaSc6IHtcclxuICAgICAgICAgICAgJ2Ryb3Bkb3ducyc6IHtcclxuICAgICAgICAgICAgICAgICdub1JlY29yZHNUZW1wbGF0ZSc6IFwi4KSV4KWL4KSIIOCksOCkv+CkleClieCksOCljeCkoSDgpKjgpLngpYDgpIIg4KSu4KS/4KSy4KS+IVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRyb3Bkb3dudHJlZTp7XHJcbiAgICAgICAgICAgICAgICBub1JlY29yZHNUZW1wbGF0ZTogXCLgpJXgpYvgpIgg4KSw4KS/4KSV4KWJ4KSw4KWN4KShIOCkqOCkueClgOCkgiDgpK7gpL/gpLLgpL4hXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sICdhcic6IHtcclxuICAgICAgICAgICAgJ2Ryb3Bkb3ducyc6IHtcclxuICAgICAgICAgICAgICAgICdub1JlY29yZHNUZW1wbGF0ZSc6IFwi2YTYpyDYqtmI2KzYryDYs9is2YTYp9iqIVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRyb3Bkb3dudHJlZToge1xyXG4gICAgICAgICAgICAgICAgbm9SZWNvcmRzVGVtcGxhdGU6IFwi2YTYpyDYqtmI2KzYryDYs9is2YTYp9iqIVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4gXHJcblxyXG5jb25zdCBtYXRSYW5nZUxhYmVsSW50bCA9IChwYWdlOiBudW1iZXIsIHBhZ2VTaXplOiBudW1iZXIsIGxlbmd0aDogbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAobGVuZ3RoID09PSAwIHx8IHBhZ2VTaXplID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuICRsb2NhbGl6ZWA6QEBwYWdpbmF0b3IuemVyb1JhbmdlOjAgb2YgJHtsZW5ndGh9YFxyXG4gICAgfVxyXG4gICAgbGVuZ3RoID0gTWF0aC5tYXgobGVuZ3RoLCAwKVxyXG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IHBhZ2UgKiBwYWdlU2l6ZVxyXG5cclxuICAgIC8vIElmIHRoZSBzdGFydCBpbmRleCBleGNlZWRzIHRoZSBsaXN0IGxlbmd0aCwgZG8gbm90IHRyeSBhbmQgZml4IHRoZSBlbmQgaW5kZXggdG8gdGhlIGVuZC5cclxuICAgIGNvbnN0IGVuZEluZGV4ID0gc3RhcnRJbmRleCA8IGxlbmd0aCA/ICBNYXRoLm1pbihzdGFydEluZGV4ICsgcGFnZVNpemUsIGxlbmd0aCkgOiBzdGFydEluZGV4ICsgcGFnZVNpemVcclxuICAgIHJldHVybiAkbG9jYWxpemVgOkBAcGFnaW5hdG9yLnJhbmdlT2ZMYWJlbDoke3N0YXJ0SW5kZXggKyAxfSAtICR7ZW5kSW5kZXh9IG9mICR7bGVuZ3RofWBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNeVBhZ2luYXRvckludGwoKSB7XHJcbiAgICBjb25zdCBwYWdpbmF0b3JJbnRsID0gbmV3IE1hdFBhZ2luYXRvckludGwoKVxyXG5cclxuICAgIHBhZ2luYXRvckludGwuaXRlbXNQZXJQYWdlTGFiZWwgPSAkbG9jYWxpemVgOkBAcGFnaW5hdG9yLmRpc3BsYXlQZXJQYWdlOkl0ZW1zIHBlciBwYWdlYFxyXG4gICAgcGFnaW5hdG9ySW50bC5uZXh0UGFnZUxhYmVsID0gJGxvY2FsaXplYDpAQHBhZ2luYXRvci5uZXh0UGFnZTpOZXh0IHBhZ2VgXHJcbiAgICBwYWdpbmF0b3JJbnRsLnByZXZpb3VzUGFnZUxhYmVsID0gJGxvY2FsaXplYDpAQHBhZ2luYXRvci5wcmV2UGFnZTpQcmV2IHBhZ2VgXHJcbiAgICBwYWdpbmF0b3JJbnRsLmxhc3RQYWdlTGFiZWw9JGxvY2FsaXplYDpAQHBhZ2luYXRvci5sYXN0UGFnZTpMYXN0IHBhZ2VgXHJcbiAgICBwYWdpbmF0b3JJbnRsLmZpcnN0UGFnZUxhYmVsPSRsb2NhbGl6ZWA6QEBwYWdpbmF0b3IuZmlyc3RQYWdlOkZpcnN0IHBhZ2VgXHJcbiAgICBwYWdpbmF0b3JJbnRsLmdldFJhbmdlTGFiZWwgPSBtYXRSYW5nZUxhYmVsSW50bFxyXG4gXHJcbiAgICByZXR1cm4gcGFnaW5hdG9ySW50bFxyXG59XHJcbiAgXHJcbiAiXX0=