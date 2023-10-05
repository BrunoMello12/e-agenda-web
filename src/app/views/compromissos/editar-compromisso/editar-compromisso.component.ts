import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ContatosService } from '../../contatos/services/contatos.service';
import { ActivatedRoute, Router } from '@angular/router';

import { ListarContatoViewModel } from '../../contatos/models/listar-contato.view-model';
import { FormsCompromissosViewModel } from '../models/forms-compromisso.view-model';
import { CompromissoService } from '../services/compromissos.service';

@Component({
  selector: 'app-editar-compromisso',
  templateUrl: './editar-compromisso.component.html',
  styleUrls: ['./editar-compromisso.component.css']
})
export class EditarCompromissoComponent implements OnInit{

    form!: FormGroup;
    compromissoVM!: FormsCompromissosViewModel;
    idSelecionado: string | null = null;
    contatos: ListarContatoViewModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private compromissoService: CompromissoService,
    private router: Router,
    private route: ActivatedRoute,
    private contatoService: ContatosService) {}


    ngOnInit(): void {
      
      this.form = this.formBuilder.group({
        assunto: new FormControl('', [Validators.required]),
        tipoLocal: new FormControl('', [Validators.required]),
        link: new FormControl('', [Validators.required]),
        local: new FormControl('', [Validators.required]),
        data: new FormControl('', [Validators.required]),
        horaInicio: new FormControl('', [Validators.required]),
        horaTermino: new FormControl('', [Validators.required]),
        contatoId: new FormControl('',)
      })

      this.form.get('tipoLocal')?.valueChanges.subscribe((value) => {
        if (value === 0) {
          this.form.get('local')?.disable();
          this.form.get('link')?.enable(); 
          
          this.form.get('local')?.setValue('');
        } else {
          this.form.get('link')?.disable();
          this.form.get('local')?.enable(); 
          
          this.form.get('link')?.setValue('');
        }
      });
  
      this.contatoService.selecionarTodos().subscribe(res => {
        this.contatos = res;
      })

      this.idSelecionado = this.route.snapshot.paramMap.get('id');

      if (!this.idSelecionado) return;
  
      this.compromissoService.selecionarPorId(this.idSelecionado).subscribe((res) => {
        this.form.patchValue(res);
        console.log(res);
        this.form.get('data')?.setValue(res.data.toString().substring(0, 10))
      });
    }

    gravar() {

      this.compromissoVM = this.form.value;
  
      
      this.compromissoService
        .editar(this.idSelecionado!, this.compromissoVM)
        .subscribe((res) => {
          console.log(res);
  
          this.router.navigate(['/compromissos/listar']);
        });
    }
}
