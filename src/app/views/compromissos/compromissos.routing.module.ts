import { NgModule, inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterModule, Routes } from "@angular/router";
import { EditarCompromissoComponent } from "./editar-compromisso/editar-compromisso.component";
import { ExcluirCompromissoComponent } from "./excluir-compromisso/excluir-compromisso.component";
import { InserirCompromissoComponent } from "./inserir-compromisso/inserir-compromisso.component";
import { ListarCompromissosComponent } from "./listar-compromissos/listar-compromissos.component";
import { FormsCompromissosViewModel } from "./models/forms-compromisso.view-model";
import { CompromissoService } from "./services/compromissos.service";
import { ListarCompromissosViewModel } from "./models/listar-compromisso.view-model";
import { VisualizarCompromissoViewModel } from "./models/visualizar-compromisso.view-model";

const listarCompromissosResolver: ResolveFn<ListarCompromissosViewModel[]> = () => {
  return inject(CompromissoService).selecionarTodos();
};

const formsCompromissoResolver: ResolveFn<FormsCompromissosViewModel> = (
  route: ActivatedRouteSnapshot
) => {
  return inject(CompromissoService).selecionarPorId(route.paramMap.get('id')!);
};

const visualizarCompromissoResolver: ResolveFn<VisualizarCompromissoViewModel> = (
  route: ActivatedRouteSnapshot
) => {
  return inject(CompromissoService).selecionarCompromissoCompletoPorId(
    route.paramMap.get('id')!
  );
};

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  },
  {
    path: 'listar',
    component: ListarCompromissosComponent,
    resolve: { compromissos: listarCompromissosResolver }
  },
  {
    path: 'inserir',
    component: InserirCompromissoComponent,
  },
  {
    path: 'editar/:id',
    component: EditarCompromissoComponent,
    resolve: { compromissos: formsCompromissoResolver }
  },
  {
    path: 'excluir/:id',
    component: ExcluirCompromissoComponent,
    resolve: { compromissos: visualizarCompromissoResolver }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompromissosRoutingModule{}