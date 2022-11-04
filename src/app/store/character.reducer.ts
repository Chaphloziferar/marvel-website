import { createReducer, on } from "@ngrx/store";
import * as fromCharacter from "../action/character.action";
import { initialState } from "../state/character.state";


export const characterReducer = createReducer(
  initialState,

  on(fromCharacter.loadCharactersAction, state => ({
    ...state,
    isLoading: true
  })),

  on(fromCharacter.loadCharactersActionSuccess, (state, {characters}) => ({
    ...state,
    isLoading: false,
    characters: characters
  })),

  on(fromCharacter.loadCharactersActionFailure, (state, {error}) => ({
    ...state,
    isLoading: false,
    error: error
  }))
)
