import { ActionReducerMap } from "@ngrx/store";

// States
import * as fromCharacterState from './state/character.state';

// Reducer
import * as fromCharacterReducer from './store/character.reducer';

export interface AppState {
  characterStore: fromCharacterState.CharacterState;
}

export const appReducers: ActionReducerMap<AppState> = {
  characterStore: fromCharacterReducer.characterReducer
}
