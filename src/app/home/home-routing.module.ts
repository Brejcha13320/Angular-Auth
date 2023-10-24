import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { UsersComponent } from './components/users/users.component';
import { AboutComponent } from './components/about/about.component';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'task',
        pathMatch: 'full',
      },
      {
        path: 'task',
        component: TaskComponent,
      },
      {
        path: 'category',
        component: CategoryComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
