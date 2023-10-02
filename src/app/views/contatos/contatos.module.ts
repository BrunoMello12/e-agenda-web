import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirContatoComponent } from './inserir-contato/inserir-contato.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InserirContatoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ContatosModule { }
