import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IfModule } from './if/if.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForModule } from './for/for.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IfModule,
    ForModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
