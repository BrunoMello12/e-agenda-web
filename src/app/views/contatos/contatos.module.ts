import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirContatoComponent } from './inserir-contato/inserir-contato.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ContatosService } from './services/contatos.service';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';
import { RouterModule } from '@angular/router';
import { EditarContatoComponent } from './editar-contato/editar-contato.component';
import { ExcluirContatoComponent } from './excluir-contato/excluir-contato.component';
import { CardContatoComponent } from './card-contato/card-contato.component';
import 'src/app/extensions/form-group.extensions';
import { ContatosRoutingModule } from './contatos-routing.module';


@NgModule({
  declarations: [
    InserirContatoComponent,
    ListarContatosComponent,
    EditarContatoComponent,
    ExcluirContatoComponent,
    CardContatoComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContatosRoutingModule
  ],
  providers: [ContatosService]
})
export class ContatosModule { }
