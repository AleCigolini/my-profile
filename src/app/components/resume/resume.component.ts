import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  public isPtLanguage = false;

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    this.isPtLanguage = this.translateService.currentLang == "pt";
  }

}
