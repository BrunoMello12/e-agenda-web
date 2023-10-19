import { Component, OnInit } from '@angular/core';
import { ListarContatoViewModel } from '../models/listar-contato.view-model';
import { ActivatedRoute } from '@angular/router';
import { ContatosService } from '../services/contatos.service';

@Component({
  selector: 'app-listar-contatos',
  templateUrl: './listar-contatos.component.html',
  styleUrls: ['./listar-contatos.component.css'],
})
export class ListarContatosComponent implements OnInit {
  contatos: ListarContatoViewModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private contatosService: ContatosService
  ) {}

  ngOnInit(): void {
    this.contatos = this.route.snapshot.data['contatos'];
  }

  filtrarFavoritos(){
    this.contatosService.selecionarContatosFavoritos().subscribe(res => {
      this.contatos = res;
    })
  }

  selecionarTodos(){
    this.contatosService.selecionarTodos().subscribe(res => {
      this.contatos = res;
    })
  }
}
