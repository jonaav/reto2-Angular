import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Gerente } from "../models/gerente.interface";

@Injectable({
  providedIn: 'root'
})
export class GerenteService {

  private http = inject(HttpClient);

  getGerentes(){
    return this.http.get<Gerente[]>('http://localhost:8080/api/gerente')
  }

}
