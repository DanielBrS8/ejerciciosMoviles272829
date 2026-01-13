import { View, FlatList } from "react-native";
import { Peliculas } from "../types/Types";
import VisorPelicula from "./VisorPelicula";

// Ejercicio 57: Prop peliculas de tipo Peliculas
type VisorPeliculasProps = {
  peliculas: Peliculas;
};

// Ejercicio 58-59: FlatList dentro de View
export default function VisorPeliculas({ peliculas }: VisorPeliculasProps) {
  return (
    <View className="bg-slate-100 p-4">
      <FlatList
        data={peliculas}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <VisorPelicula pelicula={item} />}
        scrollEnabled={false}
      />
    </View>
  );
}
