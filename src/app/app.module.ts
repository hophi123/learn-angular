import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { UserFormComponent } from './user-form/user-form.component';
import { from } from 'rxjs';
import { StructComponent } from './struct/struct.component';
import { WordsComponent } from './words/words.component';
import { LoginComponent } from './login/login.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component'

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    UserFormComponent,
    StructComponent,
    WordsComponent,
    LoginComponent,
    PersonComponent,
    ListPersonComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
