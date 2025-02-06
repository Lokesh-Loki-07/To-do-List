import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { UsersComponent } from './users/users.component';
import { EditingComponent } from './editing/editing.component';
import { authGuard } from './auth.guard';
 
const routes: Routes = [
  { path: '**', redirectTo: 'signin' },
  { path: '', redirectTo: '/signin', pathMatch: 'full' }, // Default route
  { path: 'register', component: SignupComponent}, // Default route
  // { path: 'register', component: RegisterComponent },
  { path: 'signin', component: SigninComponent },
   
  { path: 'users', component:UsersComponent},
  { path: 'editing', component:EditingComponent}
  // { path: '**', redirectTo: '/register' } // Fallback route
  // { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: '**', redirectTo: '' } // Wildcard route for unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
