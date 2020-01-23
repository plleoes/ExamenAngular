import { Injectable } from '@angular/core';
import { Responsee } from '../clases/responsee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployees(){
     return this.http.get<Responsee>('https://dummy.restapiexample.com/api/v1/employees');
  }
}
