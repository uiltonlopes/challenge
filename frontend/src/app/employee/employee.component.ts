import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { FormGroup } from '@angular/forms';
import { DepartmentService } from '../department/department.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  departments: Array<any>;
  employees: Array<any>;
  employee: any;

  constructor(private service: EmployeeService, private service_dep: DepartmentService) {}

  ngOnInit() {
    this.employee = {};

    this.service.listEmployee().subscribe(res => (this.employees = res));
    this.service_dep
      .listDepartment()
      .subscribe(res => (this.departments = res));
  }

  createEmployee(frm: FormGroup) {
    this.service.createEmployee(this.employee).subscribe(res => {
      this.employees.push(res[0]);

      frm.reset();
    });
  }
}
