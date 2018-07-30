import { Component, OnInit } from '@angular/core';
import { DepartmentService } from './department.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departments: Array<any>;
  department: any;

  constructor(private service: DepartmentService) {}

  ngOnInit() {
    this.department = {};

    this.service
      .list()
      .subscribe(res => (this.departments = res));
  }

  criar(frm: FormGroup) {
    this.service.criar(this.department).subscribe(res => {
      this.departments.push(res[0]);

      frm.reset();
    });
  }
}
