import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inserir-contato',
  templateUrl: './inserir-contato.component.html',
  styleUrls: ['./inserir-contato.component.css']
})
export class InserirContatoComponent implements OnInit{
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: new FormControl(''),
      email: new FormControl(''),
      telefone: new FormControl(''),
      cargo: new FormControl(''),
      empresa: new FormControl(''),
    })
  }

  gravar(){
    
  }
}
