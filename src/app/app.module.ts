import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutModule} from "./components/about/about.module";
import {JobModule} from "./components/job/job.module";
import {ResumeModule} from "./components/resume/resume.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    JobModule,
    ResumeModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
