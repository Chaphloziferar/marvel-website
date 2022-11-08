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

export const getSelectedCharacter = createSelector(
  CharacterFeature,
  (state: CharacterState) => state.selectedCharacter
);

export const getLoading = createSelector(
  CharacterFeature,
  (state: CharacterState) => state.isLoading
);

export const getError = createSelector(
  CharacterFeature,
  (state: CharacterState) => state.error
);

export const getShowModal = createSelector(
  CharacterFeature,
  (state: CharacterState) => state.showModal
);

export const characterSelectors = {
  getCharacters,
  getSelectedCharacter,
  getLoading,
  getError,
  getShowModal
}
