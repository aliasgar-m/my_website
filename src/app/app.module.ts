import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
// import { ProjectsComponent } from './projects/projects.component';
// import { BarComponent } from './bar/bar.component';
// import { HomeComponent } from './home/home.component';
// import { ContactComponent } from './contact/contact.component';
// import { AboutComponent } from './about/about.component';

// import { ExperienceComponent } from './experience/experience.component';
// import { CertificatesComponent } from './certificates/certificates.component';


@NgModule({
  declarations: [
    AppComponent
    // AppComponent,
    // BarComponent,
    // HomeComponent,
    // AboutComponent,
    // ProjectsComponent,
    // ContactComponent,
    // ExperienceComponent,
    // CertificatesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
