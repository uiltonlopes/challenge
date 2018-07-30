import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  departmentsUrl = 'http://localhost:8000/department';

  constructor(private http: HttpClient) {}

  listDepartment() {
    return this.http.get<Array<any>>(this.departmentsUrl);
  }

  createDepartment(department: any) {
    return this.http.post(this.departmentsUrl, department);
  }
}
