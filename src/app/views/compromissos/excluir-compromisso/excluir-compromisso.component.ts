import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompromissoService } from '../services/compromissos.service';
import { VisualizarCompromissoViewModel } from '../models/visualizar-compromisso.view-model';

@Component({
  selector: 'app-excluir-compromisso',
  templateUrl: './excluir-compromisso.component.html',
  styleUrls: ['./excluir-compromisso.component.css']
})
export class ExcluirCompromissoComponent implements OnInit {
  compromissoVM: VisualizarCompromissoViewModel;

  constructor(private compromissoService: CompromissoService,
    private route: ActivatedRoute,
    private router: Router) {
      this.compromissoVM = new VisualizarCompromissoViewModel('',0, '', '', '', new Date(), '','');
    }

  ngOnInit(): void {
      this.compromissoVM = this.route.snapshot.data['compromissos'];
  }

  gravar(){

    const id = this.route.snapshot.paramMap.get('id')!;

    if (!id) return;

    this.compromissoService.excluir(id!)
      .subscribe(res => { this.router.navigate(['/compromissos/listar'])})
  }
}
