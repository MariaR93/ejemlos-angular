import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../models/pedidos';

@Component({
  selector: 'b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {

  pedidos: Pedidos[] = null;

  constructor() { }

  ngOnInit() {
    this.pedidos = [
      new Pedidos(1, 'Pedido1', 100),
      new Pedidos(2, 'Pedido2', 200),
      new Pedidos(3, 'Pedido3', 300),
      new Pedidos(4, 'Pedido4', 400),
    ];
  }

}
