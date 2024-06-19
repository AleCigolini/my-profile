import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobComponent} from './job.component';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    JobComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
  ],
  exports: [JobComponent]
})
export class JobModule { }
