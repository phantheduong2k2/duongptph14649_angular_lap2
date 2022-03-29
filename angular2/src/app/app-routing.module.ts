import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UsersComponent } from './components/users/users.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { StudentComponent } from './components/student/student.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  // define routing
  {'path':'home',component:HomeComponent},
  {'path':'user',component:UsersComponent},
  {'path':'user-detail/:id',component:UserDetailComponent},
  {'path':'product',component:ProductComponent},
  {'path':'product/:id',component:ProductDetailComponent},
  {'path':'students',component:StudentComponent},
  {'path':'student-create',component:StudentFormComponent},
  {'path':'student-detail/:id',component:StudentDetailComponent},
  {'path': 'posts', component:PostComponent},
  {'path': 'posts-form',component:PostFormComponent},
  {'path': 'posts-form/:id',component: PostFormComponent}
]


@NgModule({

  // forROot nhan vao 1 mang route =>
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
