import { Component} from '@angular/core';
import { Gif } from '../interfaces/searchResponse.interface';
import { GiftservicesService } from '../services/giftservices.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent {

  constructor(private gifsService:GiftservicesService) { }
  

  get results():Gif[]{
    return this.gifsService.results
  }

}
