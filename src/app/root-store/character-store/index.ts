import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CharacterState } from "src/app/state/character.state";
import { AppState } from "src/app/app.reducers";

export const selectCharacter = createFeatureSelector<CharacterState>('character');

const CharacterFeature = (state: AppState) => {
  return state.characterStore
}

export const getCharacters = createSelector(
  CharacterFeature,
  (state: CharacterState) => state.characters
);

export const getLoading = createSelector(
  CharacterFeature,
  (state: CharacterState) => state.isLoading
);

export const getError = createSelector(
  CharacterFeature,
  (state: CharacterState) => state.error
);

export const characterSelectors = {
  getCharacters,
  getLoading,
  getError
}
