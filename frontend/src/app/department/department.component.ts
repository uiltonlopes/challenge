import { Component, OnInit } from '@angular/core';
import { DepartmentService } from './department.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: "app-department",
  templateUrl: "./department.component.html",
  styleUrls: ["./department.component.css"]
})
export class DepartmentComponent implements OnInit {
  departments: Array<any>;
  department: any;

  constructor(private service: DepartmentService) {}

  ngOnInit() {
    this.department = {};

    this.service
      .listDepartment()
      .subscribe(res => (this.departments = res));
  }

  createDepartment(frm: FormGroup) {
    this.service.createDepartment(this.department).subscribe(res => {
      this.departments.push(res[0]);

      frm.reset();
    });
  }
}
