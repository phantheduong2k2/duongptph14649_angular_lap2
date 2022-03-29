import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  id: undefined|string;
  student: any;
  constructor(

    private studentService:StudentService,
    private router: Router,
    private activateRoute: ActivatedRoute

    ) { }

  newStudent = {
    "name":"",
    "class":""
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.studentService.getStudent(this.id).subscribe(data =>{
      this.student = data;
    })
  }


  onSubmit(obj: {name: string, class: string}){
    console.log(this.newStudent);
if(this.id){
  return this.studentService.updateStudent(this.id, obj). subscribe(data => {
    this.router.navigate(['/students']);
  });
}
    return  this.studentService.storeStudent(this.newStudent).subscribe(res=>{
        alert("add success!")
      });

  }

}
