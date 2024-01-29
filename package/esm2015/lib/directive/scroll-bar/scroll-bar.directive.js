import { isPlatformBrowser } from '@angular/common';
import { Directive, EventEmitter, HostListener, Inject, Input, Optional, Output, PLATFORM_ID } from '@angular/core';
import $ from 'jquery';
import PerfectScrollbar from 'perfect-scrollbar';
import ResizeObserver from 'resize-observer-polyfill';
import { fromEvent, Subject } from 'rxjs';
import { auditTime, takeUntil } from 'rxjs/operators';
import { Geometry, PerfectScrollbarConfig, PerfectScrollbarEvents, PERFECT_SCROLLBAR_CONFIG, Position } from './scroll-bar.interfaces';
import * as i0 from "@angular/core";
export class ScrollbarDirective {
    constructor(zone, differs, elementRef, platformId, defaults, el) {
        this.zone = zone;
        this.differs = differs;
        this.elementRef = elementRef;
        this.platformId = platformId;
        this.defaults = defaults;
        this.el = el;
        this.instance = null;
        this.ro = null;
        this.timeout = null;
        this.animation = null;
        this.configDiff = null;
        this.ngDestroy = new Subject();
        this.disabled = false;
        this.psScrollY = new EventEmitter();
        this.psScrollX = new EventEmitter();
        this.psScrollUp = new EventEmitter();
        this.psScrollDown = new EventEmitter();
        this.psScrollLeft = new EventEmitter();
        this.psScrollRight = new EventEmitter();
        this.psYReachEnd = new EventEmitter();
        this.psYReachStart = new EventEmitter();
        this.psXReachEnd = new EventEmitter();
        this.psXReachStart = new EventEmitter();
    }
    ngOnInit() {
        if (!this.disabled && isPlatformBrowser(this.platformId)) {
            const config = new PerfectScrollbarConfig(this.defaults);
            config.assign(this.config); // Custom configuration
            this.zone.runOutsideAngular(() => {
                this.instance = new PerfectScrollbar(this.elementRef.nativeElement, config);
            });
            if (!this.configDiff) {
                this.configDiff = this.differs.find(this.config || {}).create();
                this.configDiff.diff(this.config || {});
            }
            this.zone.runOutsideAngular(() => {
                this.ro = new ResizeObserver(() => {
                    this.update();
                });
                if (this.elementRef.nativeElement.children[0]) {
                    this.ro.observe(this.elementRef.nativeElement.children[0]);
                }
                this.ro.observe(this.elementRef.nativeElement);
            });
            this.zone.runOutsideAngular(() => {
                PerfectScrollbarEvents.forEach((eventName) => {
                    const eventType = eventName.replace(/([A-Z])/g, (c) => `-${c.toLowerCase()}`);
                    fromEvent(this.elementRef.nativeElement, eventType)
                        .pipe(auditTime(20), takeUntil(this.ngDestroy))
                        .subscribe((event) => {
                        this[eventName].emit(event);
                    });
                });
            });
        }
    }
    ngOnDestroy() {
        if (isPlatformBrowser(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.complete();
            if (this.ro) {
                this.ro.disconnect();
            }
            if (this.timeout && typeof window !== 'undefined') {
                window.clearTimeout(this.timeout);
            }
            this.zone.runOutsideAngular(() => {
                if (this.instance) {
                    this.instance.destroy();
                }
            });
            this.instance = null;
        }
    }
    ngDoCheck() {
        if (!this.disabled && this.configDiff && isPlatformBrowser(this.platformId)) {
            const changes = this.configDiff.diff(this.config || {});
            if (changes) {
                this.ngOnDestroy();
                this.ngOnInit();
            }
        }
    }
    ngOnChanges(changes) {
        if (changes['disabled'] && !changes['disabled'].isFirstChange() && isPlatformBrowser(this.platformId)) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === true) {
                    this.ngOnDestroy();
                }
                else if (changes['disabled'].currentValue === false) {
                    this.ngOnInit();
                }
            }
        }
    }
    ps() {
        return this.instance;
    }
    update() {
        if (typeof window !== 'undefined') {
            if (this.timeout) {
                window.clearTimeout(this.timeout);
            }
            this.timeout = window.setTimeout(() => {
                if (!this.disabled && this.configDiff) {
                    try {
                        this.zone.runOutsideAngular(() => {
                            if (this.instance) {
                                this.instance.update();
                            }
                        });
                    }
                    catch (error) {
                        // Update can be finished after destroy so catch errors
                    }
                }
            }, 0);
        }
    }
    geometry(prefix = 'scroll') {
        return new Geometry(this.elementRef.nativeElement[prefix + 'Left'], this.elementRef.nativeElement[prefix + 'Top'], this.elementRef.nativeElement[prefix + 'Width'], this.elementRef.nativeElement[prefix + 'Height']);
    }
    position(absolute = false) {
        if (!absolute && this.instance) {
            return new Position(this.instance.reach.x || 0, this.instance.reach.y || 0);
        }
        else {
            return new Position(this.elementRef.nativeElement.scrollLeft, this.elementRef.nativeElement.scrollTop);
        }
    }
    scrollable(direction = 'any') {
        const element = this.elementRef.nativeElement;
        if (direction === 'any') {
            return element.classList.contains('ps--active-x') ||
                element.classList.contains('ps--active-y');
        }
        else if (direction === 'both') {
            return element.classList.contains('ps--active-x') &&
                element.classList.contains('ps--active-y');
        }
        else {
            return element.classList.contains('ps--active-' + direction);
        }
    }
    scrollTo(x, y, speed) {
        if (!this.disabled) {
            if (y == null && speed == null) {
                this.animateScrolling('scrollTop', x, speed);
            }
            else {
                if (x != null) {
                    this.animateScrolling('scrollLeft', x, speed);
                }
                if (y != null) {
                    this.animateScrolling('scrollTop', y, speed);
                }
            }
        }
    }
    scrollToX(x, speed) {
        this.animateScrolling('scrollLeft', x, speed);
    }
    scrollToY(y, speed) {
        this.animateScrolling('scrollTop', y, speed);
    }
    scrollToTop(offset, speed) {
        this.animateScrolling('scrollTop', (offset || 0), speed);
    }
    scrollToLeft(offset, speed) {
        this.animateScrolling('scrollLeft', (offset || 0), speed);
    }
    scrollToRight(offset, speed) {
        const left = this.elementRef.nativeElement.scrollWidth -
            this.elementRef.nativeElement.clientWidth;
        this.animateScrolling('scrollLeft', left - (offset || 0), speed);
    }
    scrollToBottom(offset, speed) {
        const top = this.elementRef.nativeElement.scrollHeight -
            this.elementRef.nativeElement.clientHeight;
        this.animateScrolling('scrollTop', top - (offset || 0), speed);
    }
    scrollToElement(qs, offset, speed) {
        const element = this.elementRef.nativeElement.querySelector(qs);
        if (element) {
            const elementPos = element.getBoundingClientRect();
            const scrollerPos = this.elementRef.nativeElement.getBoundingClientRect();
            if (this.elementRef.nativeElement.classList.contains('ps--active-x')) {
                const currentPos = this.elementRef.nativeElement['scrollLeft'];
                const position = elementPos.left - scrollerPos.left + currentPos;
                this.animateScrolling('scrollLeft', position + (offset || 0), speed);
            }
            if (this.elementRef.nativeElement.classList.contains('ps--active-y')) {
                const currentPos = this.elementRef.nativeElement['scrollTop'];
                const position = elementPos.top - scrollerPos.top + currentPos;
                this.animateScrolling('scrollTop', position + (offset || 0), speed);
            }
        }
    }
    animateScrolling(target, value, speed) {
        if (this.animation) {
            window.cancelAnimationFrame(this.animation);
            this.animation = null;
        }
        if (!speed || typeof window === 'undefined') {
            this.elementRef.nativeElement[target] = value;
        }
        else if (value !== this.elementRef.nativeElement[target]) {
            let newValue = 0;
            let scrollCount = 0;
            let oldTimestamp = performance.now();
            let oldValue = this.elementRef.nativeElement[target];
            const cosParameter = (oldValue - value) / 2;
            const step = (newTimestamp) => {
                scrollCount += Math.PI / (speed / (newTimestamp - oldTimestamp));
                newValue = Math.round(value + cosParameter + cosParameter * Math.cos(scrollCount));
                // Only continue animation if scroll position has not changed
                if (this.elementRef.nativeElement[target] === oldValue) {
                    if (scrollCount >= Math.PI) {
                        this.animateScrolling(target, value, 0);
                    }
                    else {
                        this.elementRef.nativeElement[target] = newValue;
                        // On a zoomed out page the resulting offset may differ
                        oldValue = this.elementRef.nativeElement[target];
                        oldTimestamp = newTimestamp;
                        this.animation = window.requestAnimationFrame(step);
                    }
                }
            };
            window.requestAnimationFrame(step);
        }
    }
    onClick(event) {
        if ($(event.target).hasClass('cancelActionButton') ||
            $(event.target).hasClass('backActionButton') ||
            $(event.target).hasClass('reviewAndSaveActionButton') ||
            $(event.target).hasClass('saveActionButton')) {
            this.scrollPositionToTop();
        }
    }
    // Scroll to top position
    scrollPositionToTop() {
        document.querySelector('#containerTop').scrollTop = 0;
    }
}
ScrollbarDirective.ɵfac = function ScrollbarDirective_Factory(t) { return new (t || ScrollbarDirective)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.KeyValueDiffers), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(PERFECT_SCROLLBAR_CONFIG, 8), i0.ɵɵdirectiveInject(i0.ElementRef)); };
ScrollbarDirective.ɵdir = i0.ɵɵdefineDirective({ type: ScrollbarDirective, selectors: [["", "appScrollbarDirective", ""]], hostBindings: function ScrollbarDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function ScrollbarDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { disabled: "disabled", config: ["perfectScrollbar", "config"] }, outputs: { psScrollY: "psScrollY", psScrollX: "psScrollX", psScrollUp: "psScrollUp", psScrollDown: "psScrollDown", psScrollLeft: "psScrollLeft", psScrollRight: "psScrollRight", psYReachEnd: "psYReachEnd", psYReachStart: "psYReachStart", psXReachEnd: "psXReachEnd", psXReachStart: "psXReachStart" }, exportAs: ["ngxPerfectScrollbar"], features: [i0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ScrollbarDirective, [{
        type: Directive,
        args: [{
                selector: '[appScrollbarDirective]',
                exportAs: 'ngxPerfectScrollbar'
            }]
    }], function () { return [{ type: i0.NgZone }, { type: i0.KeyValueDiffers }, { type: i0.ElementRef }, { type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [PERFECT_SCROLLBAR_CONFIG]
            }] }, { type: i0.ElementRef }]; }, { disabled: [{
            type: Input
        }], config: [{
            type: Input,
            args: ['perfectScrollbar']
        }], psScrollY: [{
            type: Output
        }], psScrollX: [{
            type: Output
        }], psScrollUp: [{
            type: Output
        }], psScrollDown: [{
            type: Output
        }], psScrollLeft: [{
            type: Output
        }], psScrollRight: [{
            type: Output
        }], psYReachEnd: [{
            type: Output
        }], psYReachStart: [{
            type: Output
        }], psXReachEnd: [{
            type: Output
        }], psXReachStart: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['click', ["$event"]]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWJhci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nbG9iYWwvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlL3Njcm9sbC1iYXIvc2Nyb2xsLWJhci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFDbEMsS0FBSyxFQUV5QixRQUFRLEVBQ3RDLE1BQU0sRUFBRSxXQUFXLEVBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUN2QixPQUFPLGdCQUFnQixNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sY0FBYyxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUNMLFFBQVEsRUFBRSxzQkFBc0IsRUFDVCxzQkFBc0IsRUFBRSx3QkFBd0IsRUFBRSxRQUFRLEVBQ2xGLE1BQU0seUJBQXlCLENBQUM7O0FBWWpDLE1BQU0sT0FBTyxrQkFBa0I7SUE2QjdCLFlBQW9CLElBQVksRUFBVSxPQUF3QixFQUN6RCxVQUFzQixFQUErQixVQUFrQixFQUN4QixRQUF5QyxFQUN2RixFQUFjO1FBSEosU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQ3pELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBK0IsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFpQztRQUN2RixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBL0JoQixhQUFRLEdBQTRCLElBQUksQ0FBQztRQUV6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QUFXLHdCQUM5Qix3QkFBd0I7dURBL0JuQyxrQkFBa0I7OztrREFBbEIsa0JBQWtCO2NBSjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUUscUJBQXFCO2FBQ2hDO2tIQStCMkUsTUFBTTtzQkFBOUMsTUFBTTt1QkFBQyxXQUFXOztzQkFDakQsUUFBUTs7c0JBQUksTUFBTTt1QkFBQyx3QkFBd0I7O2tCQW5CN0MsS0FBSzs7a0JBRUwsS0FBSzttQkFBQyxrQkFBa0I7O2tCQUV4QixNQUFNOztrQkFDTixNQUFNOztrQkFFTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFFTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFzUk4sWUFBWTttQkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIERvQ2hlY2ssIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIEluamVjdCxcclxuICBJbnB1dCxcclxuICBLZXlWYWx1ZURpZmZlciwgS2V5VmFsdWVEaWZmZXJzLCBOZ1pvbmUsXHJcbiAgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LCBQTEFURk9STV9JRCwgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgUGVyZmVjdFNjcm9sbGJhciBmcm9tICdwZXJmZWN0LXNjcm9sbGJhcic7XHJcbmltcG9ydCBSZXNpemVPYnNlcnZlciBmcm9tICdyZXNpemUtb2JzZXJ2ZXItcG9seWZpbGwnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgYXVkaXRUaW1lLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7XHJcbiAgR2VvbWV0cnksIFBlcmZlY3RTY3JvbGxiYXJDb25maWcsIFBlcmZlY3RTY3JvbGxiYXJDb25maWdJbnRlcmZhY2UsXHJcbiAgUGVyZmVjdFNjcm9sbGJhckV2ZW50LCBQZXJmZWN0U2Nyb2xsYmFyRXZlbnRzLCBQRVJGRUNUX1NDUk9MTEJBUl9DT05GSUcsIFBvc2l0aW9uXHJcbn0gZnJvbSAnLi9zY3JvbGwtYmFyLmludGVyZmFjZXMnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwU2Nyb2xsYmFyRGlyZWN0aXZlXScsXHJcbiAgZXhwb3J0QXM6ICduZ3hQZXJmZWN0U2Nyb2xsYmFyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2Nyb2xsYmFyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2ssIE9uQ2hhbmdlcyB7XHJcbiAgcHJpdmF0ZSBpbnN0YW5jZTogUGVyZmVjdFNjcm9sbGJhciB8IG51bGwgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIHJvOiBSZXNpemVPYnNlcnZlciB8IG51bGwgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIHRpbWVvdXQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgYW5pbWF0aW9uOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBjb25maWdEaWZmOiBLZXlWYWx1ZURpZmZlcjxzdHJpbmcsIGFueT4gfCBudWxsID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBuZ0Rlc3Ryb3k6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoJ3BlcmZlY3RTY3JvbGxiYXInKSBjb25maWc/OiBQZXJmZWN0U2Nyb2xsYmFyQ29uZmlnSW50ZXJmYWNlO1xyXG5cclxuICBAT3V0cHV0KCkgcHNTY3JvbGxZOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBwc1Njcm9sbFg6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSBwc1Njcm9sbFVwOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBwc1Njcm9sbERvd246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHBzU2Nyb2xsTGVmdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgcHNTY3JvbGxSaWdodDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHBzWVJlYWNoRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBwc1lSZWFjaFN0YXJ0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBwc1hSZWFjaEVuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgcHNYUmVhY2hTdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHByaXZhdGUgZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzLFxyXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChQRVJGRUNUX1NDUk9MTEJBUl9DT05GSUcpIHByaXZhdGUgZGVmYXVsdHM6IFBlcmZlY3RTY3JvbGxiYXJDb25maWdJbnRlcmZhY2UsXHJcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG4gICAgICBjb25zdCBjb25maWcgPSBuZXcgUGVyZmVjdFNjcm9sbGJhckNvbmZpZyh0aGlzLmRlZmF1bHRzKTtcclxuXHJcbiAgICAgIGNvbmZpZy5hc3NpZ24odGhpcy5jb25maWcpOyAvLyBDdXN0b20gY29uZmlndXJhdGlvblxyXG5cclxuICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNvbmZpZyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLmNvbmZpZ0RpZmYpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ0RpZmYgPSB0aGlzLmRpZmZlcnMuZmluZCh0aGlzLmNvbmZpZyB8fCB7fSkuY3JlYXRlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29uZmlnRGlmZi5kaWZmKHRoaXMuY29uZmlnIHx8IHt9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgICB0aGlzLnJvID0gbmV3IFJlc2l6ZU9ic2VydmVyKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXSkge1xyXG4gICAgICAgICAgdGhpcy5yby5vYnNlcnZlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucm8ub2JzZXJ2ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgICBQZXJmZWN0U2Nyb2xsYmFyRXZlbnRzLmZvckVhY2goKGV2ZW50TmFtZTogUGVyZmVjdFNjcm9sbGJhckV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBldmVudFR5cGUgPSBldmVudE5hbWUucmVwbGFjZSgvKFtBLVpdKS9nLCAoYykgPT4gYC0ke2MudG9Mb3dlckNhc2UoKX1gKTtcclxuXHJcbiAgICAgICAgICBmcm9tRXZlbnQ8RXZlbnQ+KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBldmVudFR5cGUpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgIGF1ZGl0VGltZSgyMCksXHJcbiAgICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMubmdEZXN0cm95KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXNbZXZlbnROYW1lXS5lbWl0KGV2ZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG4gICAgICB0aGlzLm5nRGVzdHJveS5uZXh0KCk7XHJcbiAgICAgIHRoaXMubmdEZXN0cm95LmNvbXBsZXRlKCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5ybykge1xyXG4gICAgICAgIHRoaXMucm8uZGlzY29ubmVjdCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy50aW1lb3V0ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5jb25maWdEaWZmICYmIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuICAgICAgY29uc3QgY2hhbmdlcyA9IHRoaXMuY29uZmlnRGlmZi5kaWZmKHRoaXMuY29uZmlnIHx8IHt9KTtcclxuXHJcbiAgICAgIGlmIChjaGFuZ2VzKSB7XHJcbiAgICAgICAgdGhpcy5uZ09uRGVzdHJveSgpO1xyXG5cclxuICAgICAgICB0aGlzLm5nT25Jbml0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzWydkaXNhYmxlZCddICYmICFjaGFuZ2VzWydkaXNhYmxlZCddLmlzRmlyc3RDaGFuZ2UoKSAmJiBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VzWydkaXNhYmxlZCddLmN1cnJlbnRWYWx1ZSAhPT0gY2hhbmdlc1snZGlzYWJsZWQnXS5wcmV2aW91c1ZhbHVlKSB7XHJcbiAgICAgICAgaWYgKGNoYW5nZXNbJ2Rpc2FibGVkJ10uY3VycmVudFZhbHVlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICB0aGlzLm5nT25EZXN0cm95KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaGFuZ2VzWydkaXNhYmxlZCddLmN1cnJlbnRWYWx1ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBwcygpOiBQZXJmZWN0U2Nyb2xsYmFyIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgaWYgKHRoaXMudGltZW91dCkge1xyXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy50aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiB0aGlzLmNvbmZpZ0RpZmYpIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UudXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBjYW4gYmUgZmluaXNoZWQgYWZ0ZXIgZGVzdHJveSBzbyBjYXRjaCBlcnJvcnNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdlb21ldHJ5KHByZWZpeDogc3RyaW5nID0gJ3Njcm9sbCcpOiBHZW9tZXRyeSB7XHJcbiAgICByZXR1cm4gbmV3IEdlb21ldHJ5KFxyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFtwcmVmaXggKyAnTGVmdCddLFxyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFtwcmVmaXggKyAnVG9wJ10sXHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50W3ByZWZpeCArICdXaWR0aCddLFxyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFtwcmVmaXggKyAnSGVpZ2h0J11cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcG9zaXRpb24oYWJzb2x1dGU6IGJvb2xlYW4gPSBmYWxzZSk6IFBvc2l0aW9uIHtcclxuICAgIGlmICghYWJzb2x1dGUgJiYgdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm4gbmV3IFBvc2l0aW9uKFxyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UucmVhY2gueCB8fCAwLFxyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UucmVhY2gueSB8fCAwXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbmV3IFBvc2l0aW9uKFxyXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQsXHJcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2Nyb2xsYWJsZShkaXJlY3Rpb246IHN0cmluZyA9ICdhbnknKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2FueScpIHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcy0tYWN0aXZlLXgnKSB8fFxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcy0tYWN0aXZlLXknKTtcclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnYm90aCcpIHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcy0tYWN0aXZlLXgnKSAmJlxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcy0tYWN0aXZlLXknKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncHMtLWFjdGl2ZS0nICsgZGlyZWN0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzY3JvbGxUbyh4OiBudW1iZXIsIHk/OiBudW1iZXIsIHNwZWVkPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgaWYgKHkgPT0gbnVsbCAmJiBzcGVlZCA9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRlU2Nyb2xsaW5nKCdzY3JvbGxUb3AnLCB4LCBzcGVlZCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHggIT0gbnVsbCkge1xyXG4gICAgICAgICAgdGhpcy5hbmltYXRlU2Nyb2xsaW5nKCdzY3JvbGxMZWZ0JywgeCwgc3BlZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgdGhpcy5hbmltYXRlU2Nyb2xsaW5nKCdzY3JvbGxUb3AnLCB5LCBzcGVlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2Nyb2xsVG9YKHg6IG51bWJlciwgc3BlZWQ/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuYW5pbWF0ZVNjcm9sbGluZygnc2Nyb2xsTGVmdCcsIHgsIHNwZWVkKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzY3JvbGxUb1koeTogbnVtYmVyLCBzcGVlZD86IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5hbmltYXRlU2Nyb2xsaW5nKCdzY3JvbGxUb3AnLCB5LCBzcGVlZCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2Nyb2xsVG9Ub3Aob2Zmc2V0PzogbnVtYmVyLCBzcGVlZD86IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5hbmltYXRlU2Nyb2xsaW5nKCdzY3JvbGxUb3AnLCAob2Zmc2V0IHx8IDApLCBzcGVlZCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2Nyb2xsVG9MZWZ0KG9mZnNldD86IG51bWJlciwgc3BlZWQ/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuYW5pbWF0ZVNjcm9sbGluZygnc2Nyb2xsTGVmdCcsIChvZmZzZXQgfHwgMCksIHNwZWVkKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzY3JvbGxUb1JpZ2h0KG9mZnNldD86IG51bWJlciwgc3BlZWQ/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IGxlZnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aCAtXHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xyXG5cclxuICAgIHRoaXMuYW5pbWF0ZVNjcm9sbGluZygnc2Nyb2xsTGVmdCcsIGxlZnQgLSAob2Zmc2V0IHx8IDApLCBzcGVlZCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2Nyb2xsVG9Cb3R0b20ob2Zmc2V0PzogbnVtYmVyLCBzcGVlZD86IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgdG9wID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC1cclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuYW5pbWF0ZVNjcm9sbGluZygnc2Nyb2xsVG9wJywgdG9wIC0gKG9mZnNldCB8fCAwKSwgc3BlZWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNjcm9sbFRvRWxlbWVudChxczogc3RyaW5nLCBvZmZzZXQ/OiBudW1iZXIsIHNwZWVkPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3Rvcihxcyk7XHJcblxyXG4gICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgY29uc3QgZWxlbWVudFBvcyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICBjb25zdCBzY3JvbGxlclBvcyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncHMtLWFjdGl2ZS14JykpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UG9zID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRbJ3Njcm9sbExlZnQnXTtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBlbGVtZW50UG9zLmxlZnQgLSBzY3JvbGxlclBvcy5sZWZ0ICsgY3VycmVudFBvcztcclxuXHJcbiAgICAgICAgdGhpcy5hbmltYXRlU2Nyb2xsaW5nKCdzY3JvbGxMZWZ0JywgcG9zaXRpb24gKyAob2Zmc2V0IHx8IDApLCBzcGVlZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3BzLS1hY3RpdmUteScpKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBvcyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50WydzY3JvbGxUb3AnXTtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBlbGVtZW50UG9zLnRvcCAtIHNjcm9sbGVyUG9zLnRvcCArIGN1cnJlbnRQb3M7XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0ZVNjcm9sbGluZygnc2Nyb2xsVG9wJywgcG9zaXRpb24gKyAob2Zmc2V0IHx8IDApLCBzcGVlZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYW5pbWF0ZVNjcm9sbGluZyh0YXJnZXQ6IHN0cmluZywgdmFsdWU6IG51bWJlciwgc3BlZWQ/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xyXG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb24pO1xyXG5cclxuICAgICAgdGhpcy5hbmltYXRpb24gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghc3BlZWQgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRbdGFyZ2V0XSA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRbdGFyZ2V0XSkge1xyXG4gICAgICBsZXQgbmV3VmFsdWUgPSAwO1xyXG4gICAgICBsZXQgc2Nyb2xsQ291bnQgPSAwO1xyXG5cclxuICAgICAgbGV0IG9sZFRpbWVzdGFtcCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICBsZXQgb2xkVmFsdWUgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFt0YXJnZXRdO1xyXG5cclxuICAgICAgY29uc3QgY29zUGFyYW1ldGVyID0gKG9sZFZhbHVlIC0gdmFsdWUpIC8gMjtcclxuXHJcbiAgICAgIGNvbnN0IHN0ZXAgPSAobmV3VGltZXN0YW1wOiBudW1iZXIpID0+IHtcclxuICAgICAgICBzY3JvbGxDb3VudCArPSBNYXRoLlBJIC8gKHNwZWVkIC8gKG5ld1RpbWVzdGFtcCAtIG9sZFRpbWVzdGFtcCkpO1xyXG5cclxuICAgICAgICBuZXdWYWx1ZSA9IE1hdGgucm91bmQodmFsdWUgKyBjb3NQYXJhbWV0ZXIgKyBjb3NQYXJhbWV0ZXIgKiBNYXRoLmNvcyhzY3JvbGxDb3VudCkpO1xyXG5cclxuICAgICAgICAvLyBPbmx5IGNvbnRpbnVlIGFuaW1hdGlvbiBpZiBzY3JvbGwgcG9zaXRpb24gaGFzIG5vdCBjaGFuZ2VkXHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50W3RhcmdldF0gPT09IG9sZFZhbHVlKSB7XHJcbiAgICAgICAgICBpZiAoc2Nyb2xsQ291bnQgPj0gTWF0aC5QSSkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVTY3JvbGxpbmcodGFyZ2V0LCB2YWx1ZSwgMCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFt0YXJnZXRdID0gbmV3VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAvLyBPbiBhIHpvb21lZCBvdXQgcGFnZSB0aGUgcmVzdWx0aW5nIG9mZnNldCBtYXkgZGlmZmVyXHJcbiAgICAgICAgICAgIG9sZFZhbHVlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRbdGFyZ2V0XTtcclxuXHJcbiAgICAgICAgICAgIG9sZFRpbWVzdGFtcCA9IG5ld1RpbWVzdGFtcDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbXCIkZXZlbnRcIl0pXHJcbiAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBpZiAoJChldmVudC50YXJnZXQpLmhhc0NsYXNzKCdjYW5jZWxBY3Rpb25CdXR0b24nKSB8fFxyXG4gICAgICAkKGV2ZW50LnRhcmdldCkuaGFzQ2xhc3MoJ2JhY2tBY3Rpb25CdXR0b24nKSB8fFxyXG4gICAgICAkKGV2ZW50LnRhcmdldCkuaGFzQ2xhc3MoJ3Jldmlld0FuZFNhdmVBY3Rpb25CdXR0b24nKSB8fFxyXG4gICAgICAkKGV2ZW50LnRhcmdldCkuaGFzQ2xhc3MoJ3NhdmVBY3Rpb25CdXR0b24nKSkge1xyXG4gICAgICB0aGlzLnNjcm9sbFBvc2l0aW9uVG9Ub3AoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFNjcm9sbCB0byB0b3AgcG9zaXRpb25cclxuICBzY3JvbGxQb3NpdGlvblRvVG9wKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lclRvcCcpLnNjcm9sbFRvcCA9IDA7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=