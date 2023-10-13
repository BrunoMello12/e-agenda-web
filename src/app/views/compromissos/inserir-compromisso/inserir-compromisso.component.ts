import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormsCompromissosViewModel } from '../models/forms-compromisso.view-model';
import { Router } from '@angular/router';
import { CompromissoService } from '../services/compromissos.service';
import { ContatosService } from '../../contatos/services/contatos.service';
import { ListarContatoViewModel } from '../../contatos/models/listar-contato.view-model';
import { ToastrService } from 'ngx-toastr';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-inserir-compromisso',
  templateUrl: './inserir-compromisso.component.html',
  styleUrls: ['./inserir-compromisso.component.css'],
})
export class InserirCompromissoComponent implements OnInit {
  form!: FormGroup;
  compromissoVM!: FormsCompromissosViewModel;
  contatos: ListarContatoViewModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private compromissoService: CompromissoService,
    private router: Router,
    private contatoService: ContatosService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      assunto: new FormControl('', [Validators.required]),
      tipoLocal: new FormControl(0),
      link: new FormControl('', [Validators.required]),
      local: new FormControl(''),
      data: new FormControl(new Date()),
      horaInicio: new FormControl('08:00'),
      horaTermino: new FormControl('09:00'),
      contatoId: new FormControl('', [Validators.required]),
    });

    this.form
      .get('tipoLocal')
      ?.valueChanges.pipe(startWith(0))
      .subscribe((value) => {
        if (value === 0) {
          this.form.get('local')?.disable();
          this.form.get('link')?.enable();

          this.form.get('link')?.addValidators([Validators.required]);

          this.form.get('local')?.removeValidators([Validators.required]);

          this.form.get('local')?.setValue('');
        } else {
          this.form.get('link')?.disable();
          this.form.get('local')?.enable();

          this.form.get('link')?.removeValidators([Validators.required]);

          this.form.get('local')?.addValidators([Validators.required]);

          this.form.get('link')?.setValue('');
        }

        this.form.get('link')?.updateValueAndValidity();
        this.form.get('local')?.updateValueAndValidity();
      });

    this.contatoService.selecionarTodos().subscribe((res) => {
      this.contatos = res;
    });
  }

  get assunto() {
    return this.form.get('assunto');
  }

  get contato() {
    return this.form.get('contatoId');
  }

  get link() {
    return this.form.get('link');
  }

  get local() {
    return this.form.get('local');
  }

  gravar() {
    if (this.form.invalid) {
      for (let erro of this.form.validate()) this.toastrService.warning(erro);

      return;
    }

    this.compromissoVM = this.form.value;

    this.compromissoService.inserir(this.compromissoVM).subscribe((res) => {
      this.router.navigate(['/compromissos/listar']);
    });
  }
}
