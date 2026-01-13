import { Peliculas } from "./types/Types";

// URL de la fake API (json-server)
// Si usas dispositivo físico, cambia localhost por tu IP
const API_URL = "http://localhost:3000";

// Ejercicio 61-62: Función getPeliculas
export async function getPeliculas(): Promise<Peliculas> {
  const response = await fetch(`${API_URL}/peliculas`);
  const data = await response.json();
  return data;
}

// Función para obtener el banner
export async function getBanner(id: string): Promise<string> {
  const response = await fetch(`${API_URL}/banners`);
  const data = await response.json();
  const banner = data.find((b: any) => b.id === id);
  return banner ? banner.urlFoto : "";
}
