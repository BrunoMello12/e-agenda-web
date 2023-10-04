import { Component, OnInit } from '@angular/core';
import { ListarCompromissosViewModel } from '../models/listar-compromisso.view-model';
import { CompromissoService } from '../services/compromissos.service';

@Component({
  selector: 'app-listar-compromissos',
  templateUrl: './listar-compromissos.component.html',
  styleUrls: ['./listar-compromissos.component.css']
})
export class ListarCompromissosComponent implements OnInit {
  compromissos: ListarCompromissosViewModel[] = [];

  constructor(private compromissoService: CompromissoService){}

  ngOnInit(): void {
    this.compromissoService.selecionarTodos().subscribe(res => {
      this.compromissos = res;
      console.log(this.compromissos);
    })
  }
}
