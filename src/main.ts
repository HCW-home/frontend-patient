// localStorage.debug = '*'
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { defineCustomElements } from '@ionic/pwa-elements/loader';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => {
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