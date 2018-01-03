import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersProvider } from '../providers/user/user';

import { CreateAccountPageModule } from './../pages/create-account/create-account.module';
import { LoginPageModule } from './../pages/login/login.module';
import { UserListPageModule } from './../pages/user-list/user-list.module';
import { UserEditPageModule } from './../pages/user-edit/user-edit.module';
import { UserDetailPageModule } from './../pages/user-detail/user-detail.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CreateAccountPageModule,
    LoginPageModule,
    UserEditPageModule,
    UserDetailPageModule,
    UserListPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider
  ]
})
export class AppModule {}
