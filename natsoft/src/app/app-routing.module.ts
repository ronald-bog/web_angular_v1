import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CienciaComponent } from './components/ciencia/ciencia.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { DemosComponent } from './components/demos/demos.component';
import { TecnologiaComponent } from './components/tecnologia/tecnologia.component';
import { VideosComponent } from './components/videos/videos.component';
import { CursoPythonComponent } from './components/curso-python/curso-python.component';
import { CursoJavascriptComponent } from './components/curso-javascript/curso-javascript.component';
import { CursoJavaComponent } from './components/curso-java/curso-java.component';
import { CursoPhpComponent } from './components/curso-php/curso-php.component';
import { CursoHtmlComponent } from './components/curso-html/curso-html.component';
import { CursoAngularComponent } from './components/curso-angular/curso-angular.component';

const routes: Routes = [
  { path: '', component: TecnologiaComponent },
  { path: 'tecnologia', component: TecnologiaComponent },
  { path: 'ciencia', component: CienciaComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'demos', component: DemosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'cursos/python', component: CursoPythonComponent },
  { path: 'cursos/javascript', component: CursoJavascriptComponent },
  { path: 'cursos/java', component: CursoJavaComponent },
  { path: 'cursos/angular', component: CursoAngularComponent },
  { path: 'cursos/html', component: CursoHtmlComponent },
  { path: 'cursos/php', component: CursoPhpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
