import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompromissoService } from '../services/compromissos.service';
import { VisualizarContatoViewModel } from '../../contatos/models/visualizar-contato.view-model';
import { VisualizarCompromissoViewModel } from '../models/visualizar-compromisso.view-model';

@Component({
  selector: 'app-excluir-compromisso',
  templateUrl: './excluir-compromisso.component.html',
  styleUrls: ['./excluir-compromisso.component.css']
})
export class ExcluirCompromissoComponent implements OnInit {
  compromissoVM: VisualizarCompromissoViewModel;
  idSelecionado: string | null = null;

  constructor(private compromissoService: CompromissoService,
    private route: ActivatedRoute,
    private router: Router) {
      this.compromissoVM = new VisualizarCompromissoViewModel('',0, '', '', '', new Date(), '','');
    }

  ngOnInit(): void {
    this.idSelecionado = this.route.snapshot.paramMap.get('id')!;

    if(!this.idSelecionado) return;

    this.compromissoService.selecionarCompromissoCompletoPorId(this.idSelecionado)
      .subscribe(res => {
        this.compromissoVM = res;
      })
  }

  gravar(){
    this.compromissoService.excluir(this.idSelecionado!)
      .subscribe(res => { this.router.navigate(['/compromissos/listar'])})
  }
}
