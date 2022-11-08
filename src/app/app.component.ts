import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Character } from './model/character.model';

import { characterSelectors } from './root-store/character-store';
import { listCharacterActions } from './action/character.action';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  characters$: Observable<Character[]>;
  showModal$: Observable<boolean>;

  characters: Character[] = [];
  showModal: boolean = false;

  constructor(
    private store$: Store<AppState>
  ){

    this.store$.dispatch(listCharacterActions.loadCharactersAction());

    this.characters$ = this.store$.select(characterSelectors.getCharacters);
    this.showModal$ = this.store$.select(characterSelectors.getShowModal);

    this.characters$.subscribe(characters => {
      this.characters = characters
    });

    this.showModal$.subscribe(showModal => {
      this.showModal = showModal
    });
  }
}
