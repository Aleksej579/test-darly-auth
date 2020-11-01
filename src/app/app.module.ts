import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScreenSignInComponent } from './screen-sign-in/screen-sign-in.component';

//new
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { PageAuthComponent } from './page-auth/page-auth.component';
import { PageRegComponent } from './page-reg/page-reg.component';
import { PageTargetComponent } from './page-target/page-target.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ScreenSignInComponent,
    PageAuthComponent,
    PageRegComponent,
    PageTargetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //new
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
