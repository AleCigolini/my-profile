import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./components/about/about.component";
import {JobComponent} from "./components/job/job.component";
import {ResumeComponent} from "./components/resume/resume.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "job",
    component: JobComponent
  },
  {
    path: "resume",
    component: ResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
