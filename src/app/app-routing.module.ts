import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbstractsComponent } from './abstracts/abstracts.component';
import { AbstractDetailComponent } from './abstract-detail/abstract-detail.component';

const routes: Routes = [
  { path: 'abstracts', component: AbstractsComponent },
  { path: 'detail/:id', component: AbstractDetailComponent},
  { path: '', redirectTo: '/abstracts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }