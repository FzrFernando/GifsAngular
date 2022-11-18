import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GiftservicesService {
  private _giftHistorial:String[]=[];

  constructor() { }

  get gift():String[]{
    return [...this._giftHistorial]
  }

  addGift(query:String){
    this._giftHistorial.unshift(query);
  }
}
