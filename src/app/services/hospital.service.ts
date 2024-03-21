import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HospitalResponse } from '../models/hospitalResponse.interface';
import { HospitalRequest } from '../models/hospitalRequest.interface';
import { HospitalSearchRequest } from '../models/hospitalSearchRequest.interface';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  private http = inject(HttpClient);

  getHospitales(){
    return this.http.get('http://localhost:8080/api/hospital')
  }
  getHospitalById(id:number){
    return this.http.get(`http://localhost:8080/api/hospital?id=${id}`)
  }
  searchByParams(hospital:HospitalSearchRequest){
    console.log('service',hospital)
    const url = `http://localhost:8080/api/hospital/params?nombre=${hospital.nombre}&distrito=${hospital.idDistrito}&provincia=&sede=${hospital.idSede}&gerente=${hospital.idGerente}&condicion=${hospital.idCondicion}`
    console.log(url)
    return this.http.get<HospitalResponse[]>(url)
  }
  create(hospital:any){
    return this.http.post('http://localhost:8080/api/hospital', hospital)
  }
  update(id:number, hospital:HospitalRequest){
    return this.http.put(`http://localhost:8080/api/hospital?id=${id}`, hospital)
  }
  delete(id:number){
    return this.http.delete(`http://localhost:8080/api/hospital?id=${id}`)
  }


}
