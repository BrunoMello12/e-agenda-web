import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment";
import { FormsCompromissosViewModel } from "../models/forms-compromisso.view-model";
import { ListarCompromissosViewModel } from "../models/listar-compromisso.view-model";
import { VisualizarCompromissoViewModel } from "../models/visualizar-compromisso.view-model";
import { LocalStorageService } from "src/app/core/auth/services/local-storage.service";



@Injectable({
  providedIn: 'root'
})
export class CompromissoService{
  private endpoint: string = 
  'https://e-agenda-web-api.onrender.com/api/compromissos/';

  constructor(private http: HttpClient, private localStorage: LocalStorageService){}

  public inserir(compromisso: FormsCompromissosViewModel): Observable<FormsCompromissosViewModel>{
    return this.http.post<any>(this.endpoint, compromisso);
  }

  public editar(id: string, compromisso: FormsCompromissosViewModel){
    return this.http.put<any>(
      this.endpoint + id,
       compromisso
       ).pipe(map(res => res.dados));
  }

  public excluir(id: string): Observable<any>{
    return this.http.delete(this.endpoint + id);
  }

  public selecionarTodos(): Observable<ListarCompromissosViewModel[]>{
    return this.http.get<any>(this.endpoint)
      .pipe(map(res => res.dados));
  }

  public selecionarCompromissosHoje(): Observable<ListarCompromissosViewModel[]>{
    return this.http.get<any>(this.endpoint + 'hoje')
      .pipe(map(res => res.dados));
  }
  

  public selecionarPorId(id: string): Observable<FormsCompromissosViewModel>{
    return this.http.get<any>(this.endpoint + id)
    .pipe(map(res => res.dados));
  }

  public selecionarCompromissoCompletoPorId(id: string): Observable<VisualizarCompromissoViewModel>{
    return this.http.get<any>(this.endpoint + 'visualizacao-completa/' + id)
    .pipe(map(res => res.dados));
  }
}