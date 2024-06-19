import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [
    ResumeComponent
  ],
    imports: [
        CommonModule,
        TranslateModule
    ],
  exports: [ResumeComponent]
})
export class ResumeModule { }
