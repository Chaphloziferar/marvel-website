import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { switchMap } from "rxjs";
import { CharactersService } from "../services/characters.service";
import * as characterActions from '../action/character.action';
import { Character } from "../model/character.model";

@Injectable()
export class CharacterEffect {
  constructor(
    private characterService: CharactersService,
    private action$: Actions
  ){}

  characters: Character[] = [];

  loadCharactersRequestEffect$ = createEffect<any, any, any, any>(
    () => this.action$.pipe(
      ofType(characterActions.loadCharactersAction),
      switchMap(action => {
        return this.characterService.getCharacters().then(res =>{
          if(res && res.code !== 200) {
            return characterActions.loadCharactersActionFailure(res.data);
          } else {
            this.characters = res.data;
            let data = characterActions.loadCharactersActionSuccess({characters: this.characters});
            return data;
          }
        }).catch(error => {
          return characterActions.loadCharactersActionFailure(error);
        })
      })
    )
  )
}
