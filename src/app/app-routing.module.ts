import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserScreenComponent } from './Components/user-screen/user-screen.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'users',
        component: UserScreenComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
