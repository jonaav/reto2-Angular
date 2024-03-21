
import { Component, inject, OnInit } from '@angular/core';
import { HospitalService } from '../../services/hospital.service';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HospitalSearchFormComponent } from "../hospital-search-form/hospital-search-form.component";
import { HospitalResponse } from '../../models/hospitalResponse.interface';
import { HospitalRequest } from '../../models/hospitalRequest.interface';

@Component({
    selector: 'app-hospital',
    standalone: true,
    templateUrl: './hospital.component.html',
    styleUrl: './hospital.component.css',
    imports: [DatePipe, RouterModule, HospitalSearchFormComponent]
})
export default class HospitalComponent implements OnInit{
  private hospitalService = inject(HospitalService);

  hospitales:HospitalResponse[] = [];

  ngOnInit(): void {
    const myHospital = {
      nombre: "",
      idDistrito: "",
      idSede: "",
      idGerente: "",
      idCondicion: "",
    };
    this.search(myHospital);
  }

  search(hospital:any): void {
    const myHospital = {
      nombre: hospital.nombre,
      idDistrito: hospital.idDistrito,
      idSede: hospital.idSede,
      idGerente: hospital.idGerente,
      idCondicion: hospital.idCondicion,
    };
    console.log('METODO SEARCH de HospitalComponent',myHospital)
    this.hospitalService.searchByParams(myHospital)
      .subscribe((data: any) => {
        // Aquí maneja la respuesta de la búsqueda
        console.log(data);
        this.hospitales = data.hospitales;
      });
  }

  delete(id:number): void {
    console.log('Eliminando id: ',id)
    this.hospitalService.delete(id).subscribe((data:any)=>{
      console.log(data);
      this.hospitales = this.hospitales.filter(h=>h.idHospital!==id)
    })
  }
}
