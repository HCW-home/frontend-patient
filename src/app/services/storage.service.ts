import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  clear(): void {
    const language = localStorage.getItem('hhp-lang');
    localStorage.clear();
    if (language) {
      localStorage.setItem('hhp-lang', language);
    } else {
      localStorage.setItem('hhp-lang', 'en');
    }
  }
}
