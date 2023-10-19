import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListarTarefaViewModel } from '../models/listar-tarefa.view-model';
import { TarefasService } from '../services/tarefas.service';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {
  tarefas: ListarTarefaViewModel[] = [];

  constructor(private route: ActivatedRoute, private tarefasService: TarefasService){}

  ngOnInit(): void {
    this.tarefas = this.route.snapshot.data['tarefas'];
  }

  selecionarTarefasConcluidas(){
    this.tarefasService.selecionarTarefasConcluidas().subscribe(res => {
      this.tarefas = res;
    })
  }

  selecionarTarefasPendentes(){
    this.tarefasService.selecionarTarefasPendentes().subscribe(res => {
      this.tarefas = res;
    })
  }

  selecionarTodas(){
    this.tarefasService.selecionarTodos().subscribe(res => {
      this.tarefas = res;
    })
  }
}
