import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCompromissosComponent } from './listar-compromissos/listar-compromissos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InserirCompromissoComponent } from './inserir-compromisso/inserir-compromisso.component';
import { EditarCompromissoComponent } from './editar-compromisso/editar-compromisso.component';
import { ExcluirCompromissoComponent } from './excluir-compromisso/excluir-compromisso.component';
import { CardCompromissoComponent } from './card-compromisso/card-compromisso.component';



@NgModule({
  declarations: [
    ListarCompromissosComponent,
    InserirCompromissoComponent,
    EditarCompromissoComponent,
    ExcluirCompromissoComponent,
    CardCompromissoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class CompromissosModule { }
