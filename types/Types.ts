// Ejercicio 46-48: Modelo para la Película

export type Pelicula = {
  id: number;
  titulo: string;
  urlFoto: string;
};

export type Peliculas = Array<Pelicula>;
