import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ResultDetailComponent } from './quiz-detail/result-detail/result-detail.component';

const routes: Routes = [
  //  {path:"result", component:ResultDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
