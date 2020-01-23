import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../servicios/employee.service';
import { Employee } from '../clases/employee';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  private empleados:Employee[];
  private ipc:number=0;
  private nuevosalario:number;
  constructor(private emp:EmployeeService) { }

  ngOnInit() {
    this.verListadoEmp();
  }

  verListadoEmp(){
    this.emp.getEmployees().subscribe((empe)=>{this.empleados=empe["data"]});
  }

  calcular(ipcc:string){
    this.nuevosalario=parseFloat(this.empleados[2].employee_salary)*((this.ipc/100)+1);

  }


}
