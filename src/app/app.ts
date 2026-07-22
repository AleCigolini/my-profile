import { Component, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

type Lang = 'pt' | 'en';

@Component({
  selector: 'app-root',
  imports: [TranslatePipe],
  templateUrl: './app.html',
})
export class App {
  private static readonly STORAGE_KEY = 'lang';

  protected readonly currentLang = signal<Lang>('pt');

  constructor(private readonly translate: TranslateService) {
    this.translate.setFallbackLang('pt');
    this.switchLang(this.resolveInitialLang());
  }

  protected switchLang(lang: Lang): void {
    this.currentLang.set(lang);
    this.translate.use(lang);
    try {
      localStorage.setItem(App.STORAGE_KEY, lang);
    } catch {
      // localStorage indisponível (modo privado) — ignora
    }
  }

  private resolveInitialLang(): Lang {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(App.STORAGE_KEY);
    } catch {
      stored = null;
    }
    if (stored === 'pt' || stored === 'en') {
      return stored;
    }
    return this.translate.getBrowserLang() === 'en' ? 'en' : 'pt';
  }
}
