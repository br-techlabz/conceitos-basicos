import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemlista';

@Component({
  selector: 'app-lista-compras',
  imports: [ FormsModule ],
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

  limparLista(){
    this.lista = [];
  }
}
