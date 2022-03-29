import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

 const apiURl = "http://localhost:3000/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getPost(){
     return this.http.get(apiURl);
  }
  removePost(id:number | string){
    return this.http.delete(`${apiURl}/${id}`); //https://localhost:3000/students/1
  };
  storePost(obj: {title: string, content: string, status: string}) {
    return this.http.post(apiURl,obj);
  }
}
