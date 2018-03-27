import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { routering } from './data-hendler/routering';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { FirebaseConfig } from './data-hendler/firebaseConfig';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataService } from './data-hendler/data.service';
import { HomedashComponent } from './homedash/homedash.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginpageComponent,
    LoginAdminComponent,
    DashboardComponent,
    HomedashComponent
  ],
  imports: [
    BrowserModule , RouterModule.forRoot(routering), AngularFireModule.initializeApp(FirebaseConfig),
    FormsModule, AngularFirestoreModule.enablePersistence(),AngularFireModule,ToastrModule.forRoot(),
    CommonModule
  ],
  providers: [AngularFireAuth , DataService , ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
