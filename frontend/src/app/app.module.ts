import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';
import { FilterComponent } from './filter/filter.component';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem, SharedModule} from 'primeng/api';
import {InputTextModule} from "primeng/inputtext";
import {ListboxModule} from "primeng/listbox";
import {RadioButtonModule} from "primeng/radiobutton";
import {RippleModule} from "primeng/ripple";
import {TagModule} from "primeng/tag";
@NgModule({
  declarations: [
    AppComponent,
    TutorialListComponent,
    NavbarComponent,
    TutorialDetailsComponent,
    AddTutorialComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    SharedModule,
    ListboxModule,
    RadioButtonModule,
    RippleModule,
    TagModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
