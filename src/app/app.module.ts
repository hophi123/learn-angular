import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { UserFormComponent } from './user-form/user-form.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }