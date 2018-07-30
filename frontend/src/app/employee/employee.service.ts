import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  employeesUrl = "http://localhost:8000/employee";

  constructor(private http: HttpClient) {}

  listEmployee() {
    return this.http.get<Array<any>>(this.employeesUrl);
  }

  createEmployee(employee: any) {
    return this.http.post(this.employeesUrl, employee);
  }
}
