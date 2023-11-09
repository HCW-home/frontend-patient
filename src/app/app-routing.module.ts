import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/auth.guard';
import { DiagnosticGuard } from './_guards/diagnostic.guard';
import {RequestPageModule} from "./request/request.module";
import {NurseGuard} from "./_guards/nurse.guard";
import {ProfileModule} from "./profile/profile.module";

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
  { path: 'requester', loadChildren: () => import('./request/request.module').then(m => m.RequestPageModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'register-success', loadChildren: () => import('./success/success.module').then(m => m.SuccessModule) },
  { path: 'fail', loadChildren: () => import('./failure/failure.module').then(m => m.FailureModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule), canActivate: [NurseGuard] },
  { path: 'request-consultation', loadChildren: () => import('./request-consultation/request-consultation.module').then(m => m.RequestConsultationModule), canActivate: [NurseGuard] },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule), canActivate: [NurseGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
