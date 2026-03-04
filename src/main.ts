// localStorage.debug = '*'
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { defineCustomElements } from '@ionic/pwa-elements/loader';


if (environment.production) {
  enableProdMode();
}

alert('A1: main.ts - before bootstrap');

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => {
    alert('A2: main.ts - bootstrap SUCCESS');
  })
  .catch(err => {
    alert('A3: main.ts - bootstrap ERROR: ' + (err?.message || err));
    if (/Loading chunk|ChunkLoadError/.test(err?.message || '')) {
      try {
        const reloaded = sessionStorage.getItem('chunk-reload');
        if (!reloaded) {
          sessionStorage.setItem('chunk-reload', '1');
          window.location.reload();
          return;
        }
        sessionStorage.removeItem('chunk-reload');
      } catch {}
    }
    console.log(err);
  });

defineCustomElements(window);