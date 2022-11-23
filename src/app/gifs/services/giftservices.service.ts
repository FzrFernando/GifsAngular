import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GifsSearchResponse } from '../interfaces/searchResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class GiftservicesService {
  private _giftHistorial:string[]=[];
  private api_key: string = 'iqzR8nrgLndHp5RQIdA3Hb5Gq35kEtIC';
  private url: string = 'https://api.giphy.com/v1/gifs/search';
  results: Gif[] = [];

  constructor(private http: HttpClient) { 
    this._giftHistorial = JSON.parse(localStorage.getItem('history')!) || [];
  }

  get gift():String[]{
    return [...this._giftHistorial]
  }

  addGift(query:string){
    let clean = query.trim().toLowerCase();
    if (clean!=='' && !this._giftHistorial.includes(clean)){
      this._giftHistorial.unshift(query);
      this._giftHistorial = this._giftHistorial.splice(0,10);

      localStorage.setItem('history',JSON.stringify(this._giftHistorial));
    }
    const params = new HttpParams()
    .set('api_key',this.api_key)
    .set('q',query)
    .set('limit',10)

    //params.set('atributo3',3) Devuelve un objeto params con ese atributo

    this.http.get<GifsSearchResponse>(this.url,{params})
    .subscribe((resp)=> this.results = resp.data
       
    )
  }

}
