import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResumoComponent } from './planos/resumo/resumo.component';
import { PlanosComponent } from './planos/planos.component';
import { CategoriasComponent } from './planos/categorias/categorias.component';
import { ItensComponent } from './planos/categorias/itens/itens.component';
import { SobreComponent } from './sobre/sobre.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResumoComponent,
    PlanosComponent,
    CategoriasComponent,
    ItensComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
