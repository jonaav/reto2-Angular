import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Sede } from "../models/sede.interface";

@Injectable({
  providedIn: 'root'
})
export class SedeService {

  private http = inject(HttpClient);

  getSedes(){
    return this.http.get<Sede[]>('http://localhost:8080/api/sede')
  }

}
