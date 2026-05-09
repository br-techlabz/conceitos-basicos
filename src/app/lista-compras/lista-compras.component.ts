import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemlista';
import { NgClass } from "../../../node_modules/@angular/common/common_module.d-NEF7UaHr";

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, NgClass],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {
  
  item: string = '';
  lista: ItemLista[] = [];

  adicionarItem(){
    let itemlista = new ItemLista();    
    itemlista.id = this.lista.length + 1;
    itemlista.nome = this.item;
    this.lista.push(itemlista);

    console.log("item adicionado: ", this.item);
    console.table(this.lista);
    this.item = "";
  }

  riscarItem(item: ItemLista){ 
    item.comprado = !item.comprado;
  }

  limparLista(){
    this.lista = [];
  }
}
