import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Condicion } from "../models/condicion.interface";

@Injectable({
  providedIn: 'root'
})
export class CondicionService {

  private http = inject(HttpClient);

  getCondiciones(){
    return this.http.get<Condicion[]>('http://localhost:8080/api/condicion')
  }

}
