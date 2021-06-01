import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { baseUrl } from '@core/constants';
import { HeadersInterceptor } from '@core/headers.interceptor';
import { HeaderModule } from '@shared/header/header.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDosModule } from './to-dos/to-dos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule,
    ToDosModule
  ],
  providers: [
    { provide: baseUrl, useValue: 'https://localhost:5001/' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
