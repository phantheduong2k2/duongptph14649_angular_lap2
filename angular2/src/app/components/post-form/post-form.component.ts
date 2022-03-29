import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
postForm: FormGroup;

id: undefined | string
posts: any;
  constructor(private postService:PostService,
    private router: Router,
    private activateRoute: ActivatedRoute
    ) {
    this.postForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ]),
      status: new FormControl(0)
    })
   }

  ngOnInit(): void {
    this.getList();
  }
 newPost ={
  "title": "",
  "content": "",
  "status": ""

 }

  getList(){
    this.postService.getPost().subscribe((data)=>{
      this.posts = data;
    })
  }

  onSubmit(obj: {title: string, content: string, status: string}){
    console.log(this.newPost);
        return  this.postService.storePost(obj).subscribe(data =>{
            alert("add success!")
          });

      }
  }


