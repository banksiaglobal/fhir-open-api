import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApiComponent } from './api/api.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: ApiComponent, pathMatch: 'full' },
  // {
  //   path: 'path',
  //   component: Component,
  //   children: [{ path: '**', component: Component }],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  bootstrap: [AppComponent],
})
export class AppRoutingModule {}
