import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { EmployeeService } from './servicios/employee.service';
import { ConsultaComponent } from './consulta/consulta.component';
import { ListadoComponent } from './listado/listado.component';
import { MadridComponent } from './madrid/madrid.component';
import { ToledoComponent } from './toledo/toledo.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    ListadoComponent,
    MadridComponent,
    ToledoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
