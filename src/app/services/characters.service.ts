import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor() { }

  async getCharacters() {
    const options: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*'
      }
    }

    const res = await fetch('http://localhost:3000/api/character/getAllCharacters', options);
    let data = await res.json();

    return data;
  }
}
