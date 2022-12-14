import { Component } from '@angular/core';
import { GiftservicesService } from 'src/app/gifs/services/giftservices.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor(private giftService:GiftservicesService) { }

  get gift():String[]{
    return this.giftService.gift;
  }

  giftClick(){
    this.giftService.results
  }
}
