import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// url
const apiURl = 'http://localhost:3000/students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // define http
  constructor(private http:HttpClient) { }

  // handle call api(define methods get data)

  getStudents(){
    return this.http.get(apiURl);
  }

  getStudent(id:undefined|string){
    return this.http.get(`${apiURl}/${id}`); //https://localhost:3000/students/1
  }

  // create
  storeStudent(data:any) {
    return this.http.post(apiURl,data);
  }

  // remove
  removeStudent(id:number | string){
    return this.http.delete(`${apiURl}/${id}`); //https://localhost:3000/students/1
  }
  
 creatStudent(obj: {name: string, class: string}){
   return this.http.post(apiURl, obj);
 }
 updateStudent(id: number|string, obj:{name: string, class: string}){
    return this.http.put(`${apiURl}/${id}`, obj);
  }

}
