import { Character } from '../model/character.model';

export interface CharacterState {
  characters: Character[],
  selectedCharacter: Character | null,
  isLoading: boolean,
  error: any
}

export const initialState: CharacterState = {
  characters: [],
  selectedCharacter: null,
  isLoading: false,
  error: null
}
