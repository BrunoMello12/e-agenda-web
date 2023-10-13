import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsCategoriaViewModel } from '../models/forms-categoria.view-model';
import { CategoriasService } from '../services/categorias.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent {
  form!: FormGroup;
  categoriaVM!: FormsCategoriaViewModel;

  constructor(private formBuilder: FormBuilder,
    private categoriasService: CategoriasService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: new FormControl('', [Validators.required])
    })

    this.form.patchValue(this.route.snapshot.data['categoria']);
  }

  campoEstaInvalido(nome: string){
    return this.form.get(nome)!.touched && this.form.get(nome)!.invalid;
  }

  gravar(){
    if(this.form?.invalid){
      for(let erro of this.form.validate()) {
        this.toastrService.warning(erro);
        console.log(erro)
      }

      return;
    }

    const id = this.route.snapshot.paramMap.get('id')!;

    this.categoriaVM = this.form.value;

    this.categoriasService.editar(id, this.categoriaVM).subscribe({
      next: (categoria: FormsCategoriaViewModel) => this.processarSucesso(categoria),
      error: (err: Error) => this.processarFalha(err),
    });
  }

  processarSucesso(categoria: FormsCategoriaViewModel){
    this.toastrService.success(`A categoria ${categoria.titulo} foi editada com sucesso!`, 'Sucesso')
    this.router.navigate(['/categorias/listar'])
  }

  processarFalha(erro: Error){
    this.toastrService.error(`${erro.message}`,'Error')
  }
}
