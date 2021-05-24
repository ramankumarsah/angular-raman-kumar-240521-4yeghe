import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CandidatesComponent } from './candidates/candidates.component';

const appRoutes: Routes = [
  { path: '', component: CandidatesComponent },
  { path: 'candidates', component: CandidatesComponent },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
