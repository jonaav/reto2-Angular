import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import HospitalComponent from '../hospital/hospital.component';
import { Sede } from '../../models/sede.interface';
import { CommonModule } from '@angular/common';
import { SedeService } from '../../services/sede.service';
import { Distrito } from '../../models/distrito.interface';
import { Gerente } from '../../models/gerente.interface';
import { Condicion } from '../../models/condicion.interface';
import { DistritoService } from '../../services/distrito.service';
import { GerenteService } from '../../services/gerente.service';
import { CondicionService } from '../../services/condicion.service';

@Component({
  selector: 'app-hospital-search-form',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './hospital-search-form.component.html',
  styleUrl: './hospital-search-form.component.css'
})
export class HospitalSearchFormComponent implements OnInit{


  private fb = inject(FormBuilder);
  private hospitalComponent = inject(HospitalComponent);
  private sedeService = inject(SedeService);
  private distritoService = inject(DistritoService);
  private gerenteService = inject(GerenteService);
  private condicionService = inject(CondicionService);

  public distritos:Distrito[] = [];
  public sedes:Sede[] = [];
  public gerentes:Gerente[] = [];
  public condiciones:Condicion[] = [];

  form = this.fb.group({
    nombre:['', [Validators.required]],
    idDistrito:['', [Validators.required]],
    idSede:['', [Validators.required]],
    idGerente:['', [Validators.required]],
    idCondicion:['', [Validators.required]],
  })

  ngOnInit(): void {
    this.getSedes(this.sedes)
    this.getDistritos()
    this.getGerentes()
    this.getCondiciones()
  }

  searchBy() {
    // console.log(this.form.value);
    const hospital= this.form.value;
    this.hospitalComponent.search(hospital);
  }

  trackByIdSede(index: number, sede: Sede): number {
    return sede.idSede;
  }

  getSedes(sedes:Sede[]){
    this.sedeService.getSedes().subscribe((data)=>{
      this.sedes = data;
    })
  }

  trackByIdDistrito(index: number, distrito: Distrito): number {
    return distrito.idDistrito;
  }

  getDistritos(){
    this.distritoService.getDistritos().subscribe((data)=>{
      this.distritos = data;
    })
  }

  trackByIdGerente(index: number, gerente: Gerente): number {
    return gerente.idGerente;
  }

  getGerentes(){
    this.gerenteService.getGerentes().subscribe((data)=>{
      this.gerentes = data;
    })
  }

  trackByIdCondicion(index: number, condicion: Condicion): number {
    return condicion.idCondicion;
  }

  getCondiciones(){
    this.condicionService.getCondiciones().subscribe((data)=>{
      this.condiciones = data;
    })
  }



}
