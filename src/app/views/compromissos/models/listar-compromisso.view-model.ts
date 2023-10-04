import { ListarContatoViewModel } from "../../contatos/models/listar-contato.view-model";

export class ListarCompromissosViewModel{
  id: string;
  assunto: string;
  data: Date;
  horaInicio: string;
  horaTermino: string;
  nomeContato: string;

  constructor(
    id: string,
    assunto: string,
    data: Date,
    horaInicio: string,
    horaTermino: string,
    contato: string
    ) 
    {
      this.id = id;
      this.assunto = assunto;
      this.data = data;
      this.horaInicio = horaInicio;
      this.horaTermino= horaTermino;
      this.nomeContato = contato;
    }
  
}