import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prospecto } from 'src/app/models/prospectos';
import { Observable } from 'rxjs';
import { Observaciones } from 'src/app/models/observaciones';

@Injectable({
  providedIn: 'root'
})
export class ProspectosService {
  public arraytempo: any = null
  constructor(private httpClient:HttpClient) { }
  URL:string = 'http://prospectos28032022.somee.com/api/Prospecto';
  getProspectos(){
    return this.httpClient.get(this.URL);
  }
  AgregarProspectos(prospectos:Prospecto):Observable<Prospecto>{
    return this.httpClient.post<Prospecto>(this.URL, prospectos);
  }
  
  AceptarProspecto(id:any, observaciones:Observaciones):Observable<Observaciones>{
    return this.httpClient.put<Observaciones>(this.URL + "/" + id, observaciones);
  }
  RechazarProspecto(id:any, observaciones:Observaciones):Observable<Observaciones>{
    return this.httpClient.put<Observaciones>("http://prospectos28032022.somee.com/api/Documentos/" + id, observaciones);
  }
}
