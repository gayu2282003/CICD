import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaticContent } from './static-content/static-content';

const routes: Routes = [
{path: '', component: StaticContent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
