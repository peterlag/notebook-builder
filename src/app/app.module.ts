import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './layout/container/container.component';
import { SlideViwerComponent } from '@components/slide-viewer/slide-viewer.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FrontPageDesignComponent } from '@components/step-by-step/front-page-design/front-page-design.component';
import { SizeDesignComponent } from '@components/step-by-step/size-design/size-design.component';
import { SheetDesignComponent } from '@components/step-by-step/sheet-design/sheet-design.component';
import { SendNotificationComponent } from '@components/step-by-step/send-notification/send-notification.component';
import { StepProcessComponent } from './components/step-process/step-process.component';
import { WelcomeViewComponent } from '@layout/welcome-view/welcome-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    FooterComponent,
    SlideViwerComponent,
    FrontPageDesignComponent,
    SizeDesignComponent,
    SheetDesignComponent,
    SendNotificationComponent,
    StepProcessComponent,
    WelcomeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
