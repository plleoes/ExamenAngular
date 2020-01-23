import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../servicios/employee.service';
import { Employee } from '../clases/employee';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  empleados:Employee[];
  constructor(private emp:EmployeeService) { }

  ngOnInit() {
    this.verListadoEmp();
  }

  verListadoEmp(){
    this.emp.getEmployees().subscribe((empe)=>{this.empleados=empe["data"]});
  }

}
