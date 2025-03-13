import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VideosComponent } from './components/videos/videos.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsComponent } from './components/news/news.component';
import { TecnologiaComponent } from './components/tecnologia/tecnologia.component';
import { CienciaComponent } from './components/ciencia/ciencia.component';
import { DemosComponent } from './components/demos/demos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { CursosComponent } from './components/cursos/cursos.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CursoPythonComponent } from './components/curso-python/curso-python.component';
import { CursoJavascriptComponent } from './components/curso-javascript/curso-javascript.component';
import { CursoJavaComponent } from './components/curso-java/curso-java.component';
import { CursoAngularComponent } from './components/curso-angular/curso-angular.component';
import { CursoPhpComponent } from './components/curso-php/curso-php.component';
import { CursoHtmlComponent } from './components/curso-html/curso-html.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideosComponent,
    FooterComponent,
    NewsComponent,
    TecnologiaComponent,
    CienciaComponent,
    DemosComponent,
    ContactoComponent,
    CursosComponent,
    CursoPythonComponent,
    CursoJavascriptComponent,
    CursoJavaComponent,
    CursoAngularComponent,
    CursoPhpComponent,
    CursoHtmlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    YouTubePlayerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
