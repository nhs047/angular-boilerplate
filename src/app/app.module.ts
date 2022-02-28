import { routes } from './root/routes';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from './component/app.component';
import { MatRippleModule } from "@angular/material/core";
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { SharedPipeModule } from './shared/pipes/shared-pipe.module';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { ApiInterceptor } from './shared/interceptors/http.interceptor';
import { NotFoundComponent } from './root/not-found/not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatMenuModule,
    MatRippleModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    HttpClientModule,
    MatSidenavModule,
    SharedPipeModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    FlexLayoutModule.withConfig({
      useColumnBasisZero: false,
      printWithBreakpoints: ["xs", "sm", "md", "lg", "xl", "lt-sm", "lt-md", "lt-lg", "lt-xl", "gt-xs", "gt-sm", "gt- md", "gt-lg"]
    }),
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: 'BASE_API_URL', useValue: environment.apiUrl },
  { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
