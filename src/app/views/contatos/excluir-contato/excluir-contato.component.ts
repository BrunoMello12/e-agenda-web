import { Component, OnInit } from '@angular/core';
import { VisualizarContatoViewModel } from '../models/visualizar-contato.view-model';
import { ContatosService } from '../services/contatos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-contato',
  templateUrl: './excluir-contato.component.html',
  styleUrls: ['./excluir-contato.component.css'],
})
export class ExcluirContatoComponent implements OnInit {
  contatoVM: VisualizarContatoViewModel;

  constructor(
    private contatoService: ContatosService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.contatoVM = new VisualizarContatoViewModel('', '', '', '', '', '');
  }

  ngOnInit(): void {
    this.contatoVM = this.route.snapshot.data['contato'];
  }

  gravar() {
    const id = this.route.snapshot.paramMap.get('id')!;

    if (!id) return;

    this.contatoService.excluir(id).subscribe((res) => {
      this.router.navigate(['/contatos/listar']);
    });
  }
}
