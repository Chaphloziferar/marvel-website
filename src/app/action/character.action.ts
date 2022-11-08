import { createAction, props } from "@ngrx/store";
import { Character } from "../model/character.model";

export enum ActionTypes {
  LOAD_CHARACTERS = 'Load Characters',
  LOAD_CHARACTERS_SUCCESS = 'Load Characters Success',
  LOAD_CHARACTERS_FAILURE = 'Load Characters Failure',

  SELECT_CHARACTER = 'Select Character',
  SELECT_CHARACTER_FAILURE = 'Select Character Failure',

  SHOW_MODAL = "Show Modal",
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

export const selectCharacterAction = createAction(
  ActionTypes.SELECT_CHARACTER,
  props<{
    character: Character
  }>()
);

export const selectCharacterActionFailure = createAction(
  ActionTypes.SELECT_CHARACTER_FAILURE,
  props<{
    error: String
  }>()
);

export const showModalAction = createAction(
  ActionTypes.SHOW_MODAL,
  props<{
    showModal: boolean
  }>()
);

export const listCharacterActions = {
  loadCharactersAction,
  loadCharactersActionSuccess,
  loadCharactersActionFailure,
  selectCharacterAction,
  selectCharacterActionFailure,
  showModalAction
}
