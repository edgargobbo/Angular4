import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { AppRoutingModule } from './app.routing.module';
import { CursosModule } from './cursos/cursos.module';
import { AlunosModule } from './alunos/alunos.module';
=======
import { CursosComponent } from './cursos/cursos.component';
import { routing } from './app.routing';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos/cursos.service';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
>>>>>>> parent of 82a3bc1... rotas


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    FormsModule,
    HttpModule,
    CursosModule,
    AlunosModule,
    AppRoutingModule
=======
    routing
>>>>>>> parent of 82a3bc1... rotas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
