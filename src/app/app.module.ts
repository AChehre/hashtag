import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { TagInputModule } from 'ng2-tag-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 


import { HashtagComponent } from './hashtag/hashtag.component';

@NgModule({
  declarations: [
    AppComponent,
    HashtagComponent
  ],
  imports: [
    TagInputModule, BrowserAnimationsModule,
    BrowserModule,
    FormsModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
