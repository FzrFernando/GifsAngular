import { Component} from '@angular/core';
import { GiftservicesService } from '../services/giftservices.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})

export class BusquedaComponent {

  constructor(private giftService:GiftservicesService) { }
  cadena:string="";

  addGift(query:string):void{
    this.giftService.addGift(query);
    this.cadena = "";
  }
}
