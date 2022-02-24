import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

/**
 * The diagnostic guard tests the browser support for WebRTC.
 */
@Injectable({
  providedIn: 'root'
})
export class DiagnosticGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.hasWebRtcSupport()) {
      return this.router.parseUrl('/diagnostic');
    }
    return true;
  }
  
  /**
   * Tests whether the browser supports WebRTC or not.
   * 
   * @returns {boolean}
   */
  hasWebRtcSupport(): boolean {
    return Boolean(
      (window as any).RTCPeerConnection
      || (window as any).webkitRTCPeerConnection
      || (window as any).mozRTCPeerConnection
      || (window as any).RTCIceGatherer
    );
  }
}
