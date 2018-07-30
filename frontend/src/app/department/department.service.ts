import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  departmentsUrl = 'http://localhost:8000/department';

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Array<any>>(this.departmentsUrl);
  }

  criar(department: any) {
    return this.http.post(this.departmentsUrl, department);
  }
}
