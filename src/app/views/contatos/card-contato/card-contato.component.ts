import { Component, Input } from '@angular/core';
import { ListarContatoViewModel } from '../models/listar-contato.view-model';
import { ContatosService } from '../services/contatos.service';

@Component({
  selector: 'app-card-contato',
  templateUrl: './card-contato.component.html',
  styleUrls: ['./card-contato.component.css']
})
export class CardContatoComponent {
  @Input( {required: true} ) contato!: ListarContatoViewModel;

  constructor(private contatosService: ContatosService) {}

  favoritar(){
    this.contato.favorito = !this.contato.favorito;

    this.contatosService.favoritarContato(this.contato.id, this.contato).subscribe(res => {})
  }
}
