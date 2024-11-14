import { RouterModule, Routes } from '@angular/router';
import { ChambreListComponent } from './componed/chambre-list/chambre-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'chambres', component: ChambreListComponent },
  { path: '', redirectTo: '/chambres', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
