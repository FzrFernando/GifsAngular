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
    if (!this._giftHistorial.includes(query)){
      if (this._giftHistorial.length == 10){
        this._giftHistorial.splice(0,1);
        this._giftHistorial.unshift(query);
      }
      else{
        this._giftHistorial.unshift(query);
      }
    }
  }

  
}
