import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Distrito } from "../models/distrito.interface";

@Injectable({
  providedIn: 'root'
})
export class DistritoService {

  private http = inject(HttpClient);

  getDistritos(){
    return this.http.get<Distrito[]>('http://localhost:8080/api/distrito')
  }

}
