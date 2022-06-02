export interface Comentario {
  date: Date;
  text: string;
  userName: string;
}

export type Comentarios = Array<Comentario>;
