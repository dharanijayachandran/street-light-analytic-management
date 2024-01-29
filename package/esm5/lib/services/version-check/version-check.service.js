import { Injectable } from '@angular/core';
import 'rxjs/add/operator/first';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var VersionCheckService = /** @class */ (function () {
    function VersionCheckService(http) {
        this.http = http;
        // this will be replaced by actual hash post-build.js
        this.currentHash = '{{POST_BUILD_ENTERS_HASH_HERE}}';
    }
    /**
     * Checks in every set frequency the version of frontend application
     * @param url
     * @param {number} frequency - in milliseconds, defaults to 30 minutes
     */
    VersionCheckService.prototype.initVersionCheck = function (url, frequency) {
        var _this = this;
        if (frequency === void 0) { frequency = 3000; }
        setInterval(function () {
            _this.checkVersion(url);
        }, frequency);
    };
    /**
     * Will do the call and check if the hash has changed or not
     * @param url
     */
    VersionCheckService.prototype.checkVersion = function (url) {
        var _this = this;
        // timestamp these requests to invalidate caches
        // this.http.get(url + '?t=' + new Date().getTime())
        this.http.get(url)
            // .first()
            .subscribe(function (response) {
            var hash = response.hash;
            var hashChanged = _this.hasHashChanged(_this.currentHash, hash);
            // If new version, do something
            if (hashChanged) {
                // ENTER YOUR CODE TO DO SOMETHING UPON VERSION CHANGE
                // for an example: 
                location.reload();
            }
            // store the new hash so we wouldn't trigger versionChange again
            // only necessary in case you did not force refresh
            _this.currentHash = hash;
        }, function (err) {
            console.error(err, 'Could not get version');
        });
    };
    /**
     * Checks if hash has changed.
     * This file has the JS hash, if it is a different one than in the version.json
     * we are dealing with version change
     * @param currentHash
     * @param newHash
     * @returns {boolean}
     */
    VersionCheckService.prototype.hasHashChanged = function (currentHash, newHash) {
        if (!currentHash || currentHash === '{{POST_BUILD_ENTERS_HASH_HERE}}') {
            return false;
        }
        return currentHash !== newHash;
    };
    VersionCheckService.ɵfac = function VersionCheckService_Factory(t) { return new (t || VersionCheckService)(i0.ɵɵinject(i1.HttpClient)); };
    VersionCheckService.ɵprov = i0.ɵɵdefineInjectable({ token: VersionCheckService, factory: VersionCheckService.ɵfac, providedIn: 'root' });
    return VersionCheckService;
}());
export { VersionCheckService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(VersionCheckService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyc2lvbi1jaGVjay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2xvYmFsLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3ZlcnNpb24tY2hlY2svdmVyc2lvbi1jaGVjay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyx5QkFBeUIsQ0FBQzs7O0FBRWpDO0lBT0ksNkJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFIcEMscURBQXFEO1FBQzdDLGdCQUFXLEdBQUcsaUNBQWlDLENBQUM7SUFFaEIsQ0FBQztJQUV6Qzs7OztPQUlHO0lBQ0ksOENBQWdCLEdBQXZCLFVBQXdCLEdBQUcsRUFBRSxTQUFnQjtRQUE3QyxpQkFJQztRQUo0QiwwQkFBQSxFQUFBLGdCQUFnQjtRQUN6QyxXQUFXLENBQUM7WUFDUixLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssMENBQVksR0FBcEIsVUFBcUIsR0FBRztRQUF4QixpQkF3QkM7UUF2QkcsZ0RBQWdEO1FBQ2hELG9EQUFvRDtRQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDZCxXQUFXO2FBQ1YsU0FBUyxDQUNOLFVBQUMsUUFBYTtZQUNWLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDM0IsSUFBTSxXQUFXLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRWhFLCtCQUErQjtZQUMvQixJQUFJLFdBQVcsRUFBRTtnQkFDYixzREFBc0Q7Z0JBQ3RELG1CQUFtQjtnQkFDbkIsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3JCO1lBQ0QsZ0VBQWdFO1lBQ2hFLG1EQUFtRDtZQUNuRCxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUM1QixDQUFDLEVBQ0QsVUFBQyxHQUFHO1lBQ0EsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQ0osQ0FBQztJQUNWLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ssNENBQWMsR0FBdEIsVUFBdUIsV0FBVyxFQUFFLE9BQU87UUFDdkMsSUFBSSxDQUFDLFdBQVcsSUFBSSxXQUFXLEtBQUssaUNBQWlDLEVBQUU7WUFDbkUsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxPQUFPLFdBQVcsS0FBSyxPQUFPLENBQUM7SUFDbkMsQ0FBQzswRkE3RFEsbUJBQW1COytEQUFuQixtQkFBbUIsV0FBbkIsbUJBQW1CLG1CQUZoQixNQUFNOzhCQUx0QjtDQXFFQyxBQWpFRCxJQWlFQztTQTlEWSxtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQUgvQixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpcnN0JztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVmVyc2lvbkNoZWNrU2VydmljZSB7XHJcbiAgICAvLyB0aGlzIHdpbGwgYmUgcmVwbGFjZWQgYnkgYWN0dWFsIGhhc2ggcG9zdC1idWlsZC5qc1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50SGFzaCA9ICd7e1BPU1RfQlVJTERfRU5URVJTX0hBU0hfSEVSRX19JztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGluIGV2ZXJ5IHNldCBmcmVxdWVuY3kgdGhlIHZlcnNpb24gb2YgZnJvbnRlbmQgYXBwbGljYXRpb25cclxuICAgICAqIEBwYXJhbSB1cmxcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBmcmVxdWVuY3kgLSBpbiBtaWxsaXNlY29uZHMsIGRlZmF1bHRzIHRvIDMwIG1pbnV0ZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXRWZXJzaW9uQ2hlY2sodXJsLCBmcmVxdWVuY3kgPSAzMDAwICkge1xyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1ZlcnNpb24odXJsKTtcclxuICAgICAgICB9LCBmcmVxdWVuY3kpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2lsbCBkbyB0aGUgY2FsbCBhbmQgY2hlY2sgaWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQgb3Igbm90XHJcbiAgICAgKiBAcGFyYW0gdXJsXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2hlY2tWZXJzaW9uKHVybCkge1xyXG4gICAgICAgIC8vIHRpbWVzdGFtcCB0aGVzZSByZXF1ZXN0cyB0byBpbnZhbGlkYXRlIGNhY2hlc1xyXG4gICAgICAgIC8vIHRoaXMuaHR0cC5nZXQodXJsICsgJz90PScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSlcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KHVybClcclxuICAgICAgICAgICAgLy8gLmZpcnN0KClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzaCA9IHJlc3BvbnNlLmhhc2g7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzaENoYW5nZWQgPSB0aGlzLmhhc0hhc2hDaGFuZ2VkKHRoaXMuY3VycmVudEhhc2gsIGhhc2gpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBuZXcgdmVyc2lvbiwgZG8gc29tZXRoaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc2hDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVOVEVSIFlPVVIgQ09ERSBUTyBETyBTT01FVEhJTkcgVVBPTiBWRVJTSU9OIENIQU5HRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3IgYW4gZXhhbXBsZTogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSB0aGUgbmV3IGhhc2ggc28gd2Ugd291bGRuJ3QgdHJpZ2dlciB2ZXJzaW9uQ2hhbmdlIGFnYWluXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb25seSBuZWNlc3NhcnkgaW4gY2FzZSB5b3UgZGlkIG5vdCBmb3JjZSByZWZyZXNoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SGFzaCA9IGhhc2g7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLCAnQ291bGQgbm90IGdldCB2ZXJzaW9uJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgaGFzaCBoYXMgY2hhbmdlZC5cclxuICAgICAqIFRoaXMgZmlsZSBoYXMgdGhlIEpTIGhhc2gsIGlmIGl0IGlzIGEgZGlmZmVyZW50IG9uZSB0aGFuIGluIHRoZSB2ZXJzaW9uLmpzb25cclxuICAgICAqIHdlIGFyZSBkZWFsaW5nIHdpdGggdmVyc2lvbiBjaGFuZ2VcclxuICAgICAqIEBwYXJhbSBjdXJyZW50SGFzaFxyXG4gICAgICogQHBhcmFtIG5ld0hhc2hcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhc0hhc2hDaGFuZ2VkKGN1cnJlbnRIYXNoLCBuZXdIYXNoKSB7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50SGFzaCB8fCBjdXJyZW50SGFzaCA9PT0gJ3t7UE9TVF9CVUlMRF9FTlRFUlNfSEFTSF9IRVJFfX0nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjdXJyZW50SGFzaCAhPT0gbmV3SGFzaDtcclxuICAgIH1cclxufSJdfQ==