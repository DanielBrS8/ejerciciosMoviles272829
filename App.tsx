import "./global.css";
import { ScrollView } from "react-native";
import Toolbar from "./components/Toolbar";
import Banner from "./components/Banner";
import Buscador from "./components/Buscador";
import VisorPeliculas from "./components/VisorPeliculas";
import { Peliculas } from "./types/Types";
import React, { useState, useEffect } from "react";
import { getBanner, getPeliculas } from "Utils/Data";


const [peliculas, setPeliculas] = useState<Peliculas>([]);
const [bannerUrl, setBannerUrl] = useState<string>("");

useEffect(() => {
  getPeliculas().then((data) => setPeliculas(data));
  getBanner("superior").then((url) => setBannerUrl(url));
}, []);

// Ejercicio 23: Contenedor principal ScrollView
export default function App() {
  return (
    <ScrollView>
      
      <Toolbar />

      
      <Banner
        source="https://image.tmdb.org/t/p/original/628Dep6AxENDKoqV6pVQNrcTBnE.jpg"
        className="h-48"
      />

      
      <Buscador />

      
      <VisorPeliculas peliculas={peliculas} />
    </ScrollView>
  );
}
