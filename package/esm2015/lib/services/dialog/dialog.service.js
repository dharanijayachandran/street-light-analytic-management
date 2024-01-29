import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import * as i0 from "@angular/core";
export class DialogService {
    constructor() {
        this.navigateAwaySelection$ = new Subject();
    }
    /**
     * Ask user to confirm an action. `message` explains the action and choices.
     * Returns Prmose resolving to `true`=confirm or `false`=cancel
     */
    //  Warning - when unsaved changes done ask user to confirm/cancel. 
    alertMessage(title, text) {
        return new Promise((resolve) => {
            Swal.fire({
                title: "Are you sure?",
                text: text,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Ok',
                cancelButtonText: 'Cancel',
                reverseButtons: true,
                showCloseButton: true,
                customClass: {
                    confirmButton: 'btn btn-warning',
                    container: 'warning_info',
                }
            }).then((result) => {
                if (result.value) {
                    this.navigateAwaySelection$.next(true);
                    return resolve(true);
                }
            });
        });
    }
}
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(); };
DialogService.ɵprov = i0.ɵɵdefineInjectable({ token: DialogService, factory: DialogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DialogService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nbG9iYWwvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZGlhbG9nL2RpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLElBQUksTUFBTSxhQUFhLENBQUM7O0FBSy9CLE1BQU0sT0FBTyxhQUFhO0lBSDFCO1FBS0UsMkJBQXNCLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7S0FnQ25FO0lBOUJDOzs7T0FHRztJQUVILG9FQUFvRTtJQUNwRSxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUk7UUFDdEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ1IsS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxTQUFTO2dCQUNmLGdCQUFnQixFQUFFLElBQUk7Z0JBQ3RCLGlCQUFpQixFQUFFLElBQUk7Z0JBQ3ZCLGdCQUFnQixFQUFFLFFBQVE7Z0JBQzFCLGNBQWMsRUFBRSxJQUFJO2dCQUNwQixlQUFlLEVBQUUsSUFBSTtnQkFDckIsV0FBVyxFQUFFO29CQUNYLGFBQWEsRUFBRSxpQkFBaUI7b0JBQ2hDLFNBQVMsRUFBRSxjQUFjO2lCQUMxQjthQUNGLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDakIsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO29CQUNoQixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN2QyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDdEI7WUFDSCxDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQzs7MEVBaENVLGFBQWE7cURBQWIsYUFBYSxXQUFiLGFBQWEsbUJBRlosTUFBTTtrREFFUCxhQUFhO2NBSHpCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFsb2dTZXJ2aWNlIHtcclxuXHJcbiAgbmF2aWdhdGVBd2F5U2VsZWN0aW9uJDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFzayB1c2VyIHRvIGNvbmZpcm0gYW4gYWN0aW9uLiBgbWVzc2FnZWAgZXhwbGFpbnMgdGhlIGFjdGlvbiBhbmQgY2hvaWNlcy5cclxuICAgKiBSZXR1cm5zIFBybW9zZSByZXNvbHZpbmcgdG8gYHRydWVgPWNvbmZpcm0gb3IgYGZhbHNlYD1jYW5jZWxcclxuICAgKi9cclxuXHJcbiAgLy8gIFdhcm5pbmcgLSB3aGVuIHVuc2F2ZWQgY2hhbmdlcyBkb25lIGFzayB1c2VyIHRvIGNvbmZpcm0vY2FuY2VsLiBcclxuICBhbGVydE1lc3NhZ2UodGl0bGUsIHRleHQpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgdGl0bGU6IFwiQXJlIHlvdSBzdXJlP1wiLFxyXG4gICAgICAgIHRleHQ6IHRleHQsXHJcbiAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxyXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdPaycsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXHJcbiAgICAgICAgcmV2ZXJzZUJ1dHRvbnM6IHRydWUsXHJcbiAgICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi13YXJuaW5nJyxcclxuICAgICAgICAgIGNvbnRhaW5lcjogJ3dhcm5pbmdfaW5mbycsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICB0aGlzLm5hdmlnYXRlQXdheVNlbGVjdGlvbiQubmV4dCh0cnVlKTtcclxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=