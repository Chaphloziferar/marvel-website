import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Redux
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './app.reducers';

// Effects
import { CharacterEffect } from './effects/character.effect';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { environment } from '../environments/environment';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([
      CharacterEffect
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [
    CharacterEffect
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
