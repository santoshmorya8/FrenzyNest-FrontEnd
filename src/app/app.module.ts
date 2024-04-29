import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { VideoCallComponent } from './video-call/video-call.component';
import { NewsComponent } from './news/news.component';
import { AdsComponent } from './ads/ads.component';
import { GroupChatComponent } from './group-chat/group-chat.component';
import {Route, RouterModule, Routes} from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {NgOptimizedImage} from "@angular/common";
import { FooterComponent } from './footer/footer.component';
import { LogMainComponent } from './log-main/log-main.component';
import { LiveStreamingComponent } from './live-streaming/live-streaming.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SignupComponent } from './signup/signup.component';

// const appRoute:Routes=[
//   {path:'',redirectTo:'home',pathMatch:'full'},
//   {path:'shopping',component:ShoppingComponent},
//   {path:'home',component:HomePageComponent},
//   {path:'signup',component:SignupComponent},
//   {path:'livestreaming',component:LiveStreamingComponent},
//   {path:'**',component:PageNotFoundComponent}
// ];

const appRoute:Routes=[
  {path:'shopping',component:ShoppingComponent},
  {path:'home',component:HomePageComponent},
  {path:'livestreaming',component:LiveStreamingComponent},
  {path:'login123',component:LogMainComponent},
  {path:'signup',component:SignupComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    HeaderComponent,
    HomePageComponent,
    ShoppingComponent,
    VideoCallComponent,
    NewsComponent,
    AdsComponent,
    GroupChatComponent,
    PageNotFoundComponent,
    FooterComponent,
    LogMainComponent,
    LiveStreamingComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoute),
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
