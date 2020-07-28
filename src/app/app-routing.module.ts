import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {LogInComponent} from "./auth/log-in/log-in.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/items'},
  {path: 'auth', component: AuthComponent},
  {path: 'log-in', component: LogInComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
