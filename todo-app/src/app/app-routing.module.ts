import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditsComponent } from './credits/credits.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TodosComponent } from './todos/todos.component';
import { WildcardHandlerComponent } from './wildcard-handler/wildcard-handler.component';

const routes: Routes = [
  {
    path:"",
    component:TodosComponent
  },
  {
    path:"credits",
    component:CreditsComponent
  },
  {
    path:"feedback",
    component:FeedbackComponent
  },
  {
    path:"todos",
    component:TodosComponent
  },
  {
    path:"**",
    component:WildcardHandlerComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
