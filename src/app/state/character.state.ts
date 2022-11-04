import { Character } from '../model/character.model';

export interface CharacterState {
  characters: Character[],
  isLoading: boolean,
  error: any
}

export const initialState: CharacterState = {
  characters: [],
  isLoading: false,
  error: null
}
