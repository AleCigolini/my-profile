import {Component, HostListener} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translateService: TranslateService) {
    const userLang = navigator.language || 'pt';
    let languageCode = userLang.split('-')[0];
    this.translateService.setDefaultLang(languageCode);
    this.translateService.use(languageCode);
  }

  public isDesktopView = window.innerWidth >= 1024;

  @HostListener('window:resize', ['$event'])
  private onResize(event: { target: { innerWidth: any; }; }): void {
    this.isDesktopView = event.target.innerWidth >= 1024;
  }
}
