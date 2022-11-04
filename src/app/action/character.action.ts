import { createAction, props } from "@ngrx/store";
import { Character } from "../model/character.model";

export enum ActionTypes {
  LOAD_CHARACTERS = 'Load Characters',
  LOAD_CHARACTERS_SUCCESS = 'Load Characters Success',
  LOAD_CHARACTERS_FAILURE = 'Load Characters Failure',
}

export const loadCharactersAction = createAction(
  ActionTypes.LOAD_CHARACTERS
);

export const loadCharactersActionSuccess = createAction(
  ActionTypes.LOAD_CHARACTERS_SUCCESS,
  props<{
    characters: Character[]
  }>()
);

export const loadCharactersActionFailure = createAction(
  ActionTypes.LOAD_CHARACTERS_SUCCESS,
  props<{
    error: String
  }>()
);

export const listCharacterActions = {
  loadCharactersAction,
  loadCharactersActionSuccess,
  loadCharactersActionFailure
}
