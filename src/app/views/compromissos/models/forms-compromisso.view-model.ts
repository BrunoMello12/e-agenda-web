import { ListarContatoViewModel } from "../../contatos/models/listar-contato.view-model";

export class FormsCompromissosViewModel{
  assunto: string;
  tipoLocal: number;
  linkCompromisso: string;
  local: string;
  data: Date;
  horaInicio: string;
  horaTermino: string;
  contatoId: string;

  constructor(
    assunto: string,
    tipoLocal: number,
    linkCompromisso: string,
    local: string,
    Data: Date,
    HoraInicio: string,
    HoraTermino: string,
    contatoId: string
    ) 
    {
      this.assunto = assunto;
      this.tipoLocal = tipoLocal;
      this.linkCompromisso = linkCompromisso;
      this.local = local;
      this.data = Data;
      this.horaInicio = HoraInicio;
      this.horaTermino= HoraTermino;
      this.contatoId = contatoId;
    }
  
}