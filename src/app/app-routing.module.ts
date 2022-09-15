import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/auth.guard';
import { DiagnosticGuard } from './_guards/diagnostic.guard';

/**
 * Routes
 *
 * AuthGuard is used to redirect unauthentified patients.
 * DiagnosticGuard is used to redirect unsupported browsers.
 */
const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'diagnostic', loadChildren: () => import('./diagnostic/diagnostic.module').then(m => m.DiagnosticPageModule) },
  { path: 'test-call', loadChildren: () => import('./test/test.module').then(m => m.TestModule) },
  // { path: 'video/:roomName', loadChildren: './video-room/video-room.module#VideoRoomPageModule' ,canActivate: [DiagnosticGuard, AuthGuard]},
  { path: 'info', loadChildren: () => import('./info/info.module').then(m => m.InfoPageModule), canActivate: [DiagnosticGuard, AuthGuard] },
  { path: 'history', loadChildren: () => import('./consultations/consultations.module').then(m => m.ConsultationsPageModule), data: { title: '', status: 'closed' }, canActivate: [DiagnosticGuard, AuthGuard] },
  { path: 'consultation/:id', loadChildren: () => import('./consultation/consultation.module').then(m => m.ConsultationPageModule), canActivate: [DiagnosticGuard, AuthGuard] },
  { path: 'pending-active', loadChildren: () => import('./consultations/consultations.module').then(m => m.ConsultationsPageModule), data: { title: '', status: 'pending|active' }, canActivate: [DiagnosticGuard, AuthGuard] },
  { path: 'incommingCall', loadChildren: () => import('./incomming-call/incomming-call.module').then(m => m.IncommingCallPageModule), canActivate: [DiagnosticGuard, AuthGuard] },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule), canActivate: [DiagnosticGuard] },
  { path: 'closing-screen/:id', loadChildren: () => import('./closing-screen/closing-screen.module').then(m => m.ClosingScreenPageModule) },
  { path: 'cgu', loadChildren: () => import('./cgu/cgu.module').then(m => m.CguPageModule) },
  { path: 'await-consultation', loadChildren: () => import('./await-consultation/await-consultation.module').then(m => m.AwaitConsultationPageModule) },
  { path: 'translation/:id', loadChildren: () => import('./translation/translation.module').then(m => m.TranslationPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
