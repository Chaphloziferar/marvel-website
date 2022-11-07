import { Component, OnInit, Input } from '@angular/core';

import { Store } from '@ngrx/store';

import { Character } from 'src/app/model/character.model';

import { listCharacterActions } from '../../action/character.action';
import { AppState } from '../../app.reducers';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() character: any;

  constructor(
    private store$: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  selectCharacter(character: Character){
    this.store$.dispatch(listCharacterActions.selectCharacterAction({character: character}));
  }

}
