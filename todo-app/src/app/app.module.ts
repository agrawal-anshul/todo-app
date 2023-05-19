import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from "@clr/angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodosItemComponent } from './todos/todos-item/todos-item.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CreditsComponent } from './credits/credits.component';
import { WildcardHandlerComponent } from './wildcard-handler/wildcard-handler.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosItemComponent,
    FeedbackComponent,
    CreditsComponent,
    WildcardHandlerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
