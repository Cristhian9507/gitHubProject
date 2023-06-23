import axios, { AxiosResponse } from 'axios';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GitHubResponse, Perfil, PerfilEncontrado } from '../interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class PerfilService {
  private baseUrl: string = environment.baseUrl;

  listar(nombre: string): Observable<Perfil[]> {
    const params = new URLSearchParams([['q', nombre]]);
    const url = `${this.baseUrl}/search/users`;
    return new Observable<Perfil[]>((observer) => {
      axios
        .get<GitHubResponse>(url, { params })
        .then((response: AxiosResponse<GitHubResponse>) => {
          observer.next(response.data.items);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  findByLogin(login: string): Observable<PerfilEncontrado[]> {
    const url = `${this.baseUrl}/users/${login}`;
    return new Observable<PerfilEncontrado[]>((observer) => {
      axios
        .get<PerfilEncontrado[]>(url)
        .then((response: AxiosResponse<PerfilEncontrado[]>) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }
}
