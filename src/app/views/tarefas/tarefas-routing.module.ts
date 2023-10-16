import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { InserirTarefaComponent } from './inserir-tarefa/inserir-tarefa.component';
import { ListarTarefasComponent } from './listar-tarefas/listar-tarefas.component';
import { TarefasService } from './services/tarefas.service';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';

const listarTarefasResolver = () => {
  return inject(TarefasService).selecionarTodos();
}

const formsTarefasResolver = (route: ActivatedRouteSnapshot) => {
  return inject(TarefasService).selecionarPorId(route.paramMap.get('id')!);
}

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full',
  },
  {
    path: 'listar',
    component: ListarTarefasComponent,
    resolve: {tarefas: listarTarefasResolver}
  },
  {
    path: 'inserir',
    component: InserirTarefaComponent,
  },
  {
    path: 'editar/:id',
    component: EditarTarefaComponent,
    resolve: {tarefa: formsTarefasResolver}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarefasRoutingModule { }
