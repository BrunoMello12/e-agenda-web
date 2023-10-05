import { ListarContatoViewModel } from "../../contatos/models/listar-contato.view-model";

export class VisualizarCompromissoViewModel {
  id: string;
  tipoLocal: number;
  assunto: string;
  link: string;
  data: Date;
  local: string;
  horaInicio: string;
  horaTermino: string;
  contato?: ListarContatoViewModel;

  constructor(
    id: string,
    tipoLocal: number,
    assunto: string,
    local: string,
    link: string,
    data: Date,
    horaInicio: string,
    horaTermino: string,
    contato?: ListarContatoViewModel,
  ) {
    this.id = id;
    this.tipoLocal = tipoLocal
    this.assunto = assunto;
    this.local = local;
    this.link = link;
    this.data = data;
    this.horaInicio = horaInicio;
    this.horaTermino = horaTermino;
    this.contato = contato;
  }
}