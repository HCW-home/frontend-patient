import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { DiagnosticGuard } from './_guards/diagnostic.guard';
import { NurseGuard } from "./_guards/nurse.guard";

const routes: Routes = [
  { path: 'test-call', loadChildren: () => import('./test/test.module').then(m => m.TestModule) },
  { path: 'acknowledge-invite/:inviteToken', loadChildren: () => import('./acknowledge-invite/acknowledge-invite.module').then(m => m.AcknowledgeInviteModule) },
  { path: 'acknowledge-invite', loadChildren: () => import('./acknowledge-invite/acknowledge-invite.module').then(m => m.AcknowledgeInviteModule) },
  { path: 'consultation/:id', loadChildren: () => import('./consultation/consultation.module').then(m => m.ConsultationPageModule), canActivate: [DiagnosticGuard, AuthGuard] },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule), canActivate: [DiagnosticGuard] },
  { path: 'closing-screen/:id', loadChildren: () => import('./closing-screen/closing-screen.module').then(m => m.ClosingScreenPageModule) },
  { path: 'cgu', loadChildren: () => import('./cgu/cgu.module').then(m => m.CguPageModule) },
  { path: 'requester', loadChildren: () => import('./request/request.module').then(m => m.RequestPageModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'register-success', loadChildren: () => import('./success/success.module').then(m => m.SuccessModule) },
  { path: 'fail', loadChildren: () => import('./failure/failure.module').then(m => m.FailureModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule), canActivate: [NurseGuard] },
  { path: 'request-consultation', loadChildren: () => import('./request-consultation/request-consultation.module').then(m => m.RequestConsultationModule), canActivate: [NurseGuard] },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule), canActivate: [NurseGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
