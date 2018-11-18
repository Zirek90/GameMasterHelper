import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormListComponent } from './form-list/form-list.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { MonsterListComponent } from './monster-list/monster-list.component';
import { ToDoComponent } from './to-do/to-do.component';
import { NoteBarComponent } from './note-bar/note-bar.component';
import { DicesComponent } from './monster-list/dices/dices.component';

@NgModule({
  declarations: [
    AppComponent,
    FormListComponent,
    FormComponent,
    HeaderComponent,
    MonsterListComponent,
    ToDoComponent,
    NoteBarComponent,
    DicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
