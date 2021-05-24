import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { AppRoutingModule } from './app-routing.modules';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, CandidatesComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
