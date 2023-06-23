import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../services/perfil.service';
import { GitHubResponse, Perfil, PerfilEncontrado } from '../interfaces/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css']
})
export class PerfilComponent implements OnInit{
  termino: string = '';
  lastTermino: string = '';
  perfiles: GitHubResponse[] = [];
  perfilesRes: Perfil[] = [];
  login: string = '';
  perfil: PerfilEncontrado[] = [];
  errorMinlength: boolean = false;
  errorPattern: boolean = false;

  constructor(
    private perfilService: PerfilService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // if (!localStorage.getItem('myNombreUsuario')) {
    //   this.router.navigate(['/musica/perfiles']);
    // }
    // this.usuario = localStorage.getItem('myNombreUsuario')!;
    // this.actualizarFavoritos();
  }

  buscar() {
    this.errorMinlength = this.termino.length < 4 ? true : false;
    this.errorPattern = this.termino == 'doublevpartners' ? true : false;
    if (!this.termino || this.errorMinlength || this.errorPattern) {
      return;
    }
    this.perfilService.listar(this.termino).subscribe(resp => {
      this.perfilesRes = resp.slice(0,10);
      console.log(this.perfilesRes)
      // this.actualizarEstrellas();
    });
    this.lastTermino = this.termino;
  }

  irAPerfil(login: string, event: Event) {
    event.preventDefault();
    this.perfilService.findByLogin(login).subscribe(resp => {
      this.perfil = resp;
      console.log(this.perfil)
      // this.actualizarEstrellas();
    });
    this.lastTermino = this.termino;
  }
}
