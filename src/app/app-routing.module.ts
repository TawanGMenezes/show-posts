import { CardUserComponent } from './components/card-user/card-user.component';
import { CardPostComponent } from './components/card-post/card-post.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: CardPostComponent},
  {path: 'posts', component: CardPostComponent},
  {path: 'users', component: CardUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
