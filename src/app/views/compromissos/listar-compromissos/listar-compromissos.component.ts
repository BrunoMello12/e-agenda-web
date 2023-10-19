import { Component, OnInit } from '@angular/core';
import { ListarCompromissosViewModel } from '../models/listar-compromisso.view-model';
import { ActivatedRoute } from '@angular/router';
import { CompromissoService } from '../services/compromissos.service';

@Component({
  selector: 'app-listar-compromissos',
  templateUrl: './listar-compromissos.component.html',
  styleUrls: ['./listar-compromissos.component.css']
})
export class ListarCompromissosComponent implements OnInit {
  compromissos: ListarCompromissosViewModel[] = [];

  constructor(private route: ActivatedRoute, private compromissoService: CompromissoService){}

  ngOnInit(): void {
    this.compromissos = this.route.snapshot.data['compromissos'];
  }

  selecionarCompromissosHoje() {
    this.compromissoService.selecionarCompromissosHoje().subscribe(res => {
      this.compromissos = res;
    })
  }

  selecionarTodos() {
    this.compromissoService.selecionarTodos().subscribe(res => {
      this.compromissos = res;
    })
  }
}
