import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 Posts :any
  constructor( private postService:PostService ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.postService.getPost().subscribe((data) => {
    this.Posts = data;
    console.log(data);
    })
  };

  remove(id:number | string){
    this.postService.removePost(id).subscribe((data)=>{
     this.getList();
    });
  }
}
