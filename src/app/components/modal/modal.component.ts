import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Character } from '../../model/character.model';

import { characterSelectors } from '../../root-store/character-store';
import { listCharacterActions } from '../../action/character.action';
import { AppState } from '../../app.reducers';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  character$: Observable<Character | null>;

  character: Character | null = null;

  constructor(
    private store$: Store<AppState>
  ) {
    this.character$ = this.store$.select(characterSelectors.getSelectedCharacter);

    this.character$.subscribe(character => {
      this.character = character
    });
  }

  ngOnInit(): void {
  }

  closeModal(){
    this.store$.dispatch(listCharacterActions.showModalAction({showModal: false}));
  }
}
