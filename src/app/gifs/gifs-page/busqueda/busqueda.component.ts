import { Component} from '@angular/core';
import { GiftservicesService } from '../../giftservices.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  constructor(private giftService:GiftservicesService) { }
  cadena:String="";

  addGift(query:String):void{
    this.giftService.addGift(query);
  }
}
