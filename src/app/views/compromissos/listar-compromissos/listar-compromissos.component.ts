import { Component, OnInit } from '@angular/core';
import { ListarCompromissosViewModel } from '../models/listar-compromisso.view-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-compromissos',
  templateUrl: './listar-compromissos.component.html',
  styleUrls: ['./listar-compromissos.component.css']
})
export class ListarCompromissosComponent implements OnInit {
  compromissos: ListarCompromissosViewModel[] = [];

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.compromissos = this.route.snapshot.data['compromissos'];
  }
}
