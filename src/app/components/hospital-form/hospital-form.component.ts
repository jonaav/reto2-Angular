import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HospitalService } from '../../services/hospital.service';
import { HospitalRequest } from '../../models/hospitalRequest.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hospital-form',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './hospital-form.component.html',
  styleUrl: './hospital-form.component.css'
})
export default class HospitalFormComponent implements OnInit{


  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private hospitalService = inject(HospitalService);
  public title = 'Registrar nuevo hospital';
  public flujo = '';


  form = this.fb.group({
    idHospital:[0, [Validators.required]],
    nombre:['', [Validators.required]],
    antiguedad:['', [Validators.required]],
    area:['', [Validators.required]],
    idDistrito:['', [Validators.required]],
    idSede:['', [Validators.required]],
    idGerente:['', [Validators.required]],
    idCondicion:['', [Validators.required]],
  })

  ngOnInit(): void {
    this.title = this.route.snapshot.data['title'];
    this.flujo = this.route.snapshot.data['flujo'];
  }

  save() {
    const id = this.form.value.idHospital;
    (id && id >0 )? this.updateHospital():this.create();
  }

  create() {
    console.log('Nuevo registro')
    console.log(this.form.value);
    const hospital: HospitalRequest = {
      idHospital: 0,
      nombre: this.form.value.nombre!,
      antiguedad: parseInt(this.form.value.antiguedad!),
      area: parseInt(this.form.value.area!),
      idDistrito: parseInt(this.form.value.idDistrito!),
      idSede: parseInt(this.form.value.idSede!),
      idGerente: parseInt(this.form.value.idGerente!),
      idCondicion: parseInt(this.form.value.idCondicion!),
    };
    this.hospitalService.create(hospital)
    .subscribe(()=>{
      this.router.navigate(['/home/search']);
    })
  }

  updateHospital() {
    const hospital: HospitalRequest = {
      idHospital: this.form.value.idHospital!,
      nombre: this.form.value.nombre!,
      antiguedad: parseInt(this.form.value.antiguedad!),
      area: parseInt(this.form.value.area!),
      idDistrito: parseInt(this.form.value.idDistrito!),
      idSede: parseInt(this.form.value.idSede!),
      idGerente: parseInt(this.form.value.idGerente!),
      idCondicion: parseInt(this.form.value.idCondicion!),
    };
    console.log('Modifica registro')
    console.log(hospital);
    this.hospitalService.update(hospital.idHospital,hospital)
    .subscribe(()=>{
      this.router.navigate(['/home/search']);
    })
  }

  searchById(){
    const idHospital = this.form.value.idHospital!;
    this.hospitalService.getHospitalById(idHospital).subscribe((data:any)=>{
      console.log('Buscando id:', idHospital)
      console.log(data)
    })
  }

}
