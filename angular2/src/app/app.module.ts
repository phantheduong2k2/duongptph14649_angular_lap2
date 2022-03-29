

import { PostComponent } from './components/post/post.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { ProductComponent } from './components/product/product.component';

// connect api
import {HttpClientModule} from '@angular/common/http';

// import module form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { StudentComponent } from './components/student/student.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { StudentFormComponent } from './components/student-form/student-form.component';

// service
import { StudentService } from './services/student.service';
import { LayoutModule } from './layout/layout.module';

import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostFormComponent } from './components/post-form/post-form.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserDetailComponent,
    ProductComponent,
    ProductDetailComponent,
    StudentComponent,
    StudentDetailComponent,
    StudentFormComponent,
    PostComponent,
    PostDetailComponent,
    PostFormComponent

  ],
  imports: [
    ReactiveFormsModule,
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,// dua vao de cac component con su dung duoc,
    HttpClientModule //https
  ],
  // noi cung cap bl bla (api)
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
