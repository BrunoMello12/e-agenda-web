import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../services/categorias.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VisualizarCategoriaViewModel } from '../models/visualizar-categoria.views-model';

@Component({
  selector: 'app-excluir-categoria',
  templateUrl: './excluir-categoria.component.html',
  styleUrls: ['./excluir-categoria.component.css']
})
export class ExcluirCategoriaComponent implements OnInit {
  categoriaVM!: VisualizarCategoriaViewModel;

  constructor(private categoriaService: CategoriasService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.categoriaVM = this.route.snapshot.data['categoria'];
  }

  gravar(){
    const id = this.route.snapshot.paramMap.get('id')!;

    if (!id) return;

    this.categoriaService.excluir(id!)
      .subscribe(res => { this.router.navigate(['/categorias/listar'])})
  }
}
