import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './gifs-page/busqueda/busqueda.component';
import { ResultadosComponent } from './gifs-page/resultados/resultados.component';
import { GiftservicesService } from './giftservices.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BusquedaComponent,
    GifsPageComponent,
    ResultadosComponent
  ],
  providers: [
    GiftservicesService
  ]
})
export class GifsModule { }
