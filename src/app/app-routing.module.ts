import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashComponent } from './components/dashboard/dash/dash.component';


const routes: Routes = [
  // {
  //   path:'',
  //   component:AppComponent
  // },
  {path:'dash',component:DashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
