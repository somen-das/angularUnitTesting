import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UserTableComponent } from './components/user-table/user-table.component';

const routes: Routes = [
  { path: "userlanding", component: UserTableComponent },
  { path: "not-found", component: NotfoundComponent },
  { path: "", redirectTo: "userlanding", pathMatch: "full"},
  { path: "**", redirectTo: "not-found", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
