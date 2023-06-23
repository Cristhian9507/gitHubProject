export interface GitHubResponse {
  total_count: string;
  incomplete_results: number;
  items: Perfil[];
  login: string;
  id: number;
}

export interface Perfil {
  login: string;
  id: number;
}

export interface PerfilEncontrado {
  login: string;
  id: number;
  avatar_url: string;
  followers_url: string;
  type: string;
  followers: number;
}
