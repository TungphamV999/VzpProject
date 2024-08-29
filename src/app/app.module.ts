import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslationService } from './service/translation.service';
import { HttpClientModule } from '@angular/common/http';
import { TranslationPipe } from './pipes/translation.pipe';

@NgModule({
  declarations: [AppComponent, TranslationPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [TranslationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
