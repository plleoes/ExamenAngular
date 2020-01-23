import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamenAngular';
  constructor(private router:Router){

  }

  consulta(){
    this.router.navigate(["consulta"])
  }

  listado(){
    this.router.navigate(["listado"])
  }

  madrid(){
    this.router.navigate(["madrid"])
  }

  toledo(){
    this.router.navigate(["toledo"])
  }



}
