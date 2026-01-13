import { View, Text, Image } from "react-native";
import { cssInterop } from "nativewind";
import { MaterialIcons } from "@expo/vector-icons";
import { Pelicula } from "../types/Types";

cssInterop(Image, { className: "style" });

// Ejercicio 51: Prop pelicula de tipo Pelicula
type VisorPeliculaProps = {
  pelicula: Pelicula;
};

// Ejercicio 53: Diseño del VisorPelicula
export default function VisorPelicula({ pelicula }: VisorPeliculaProps) {
  return (
    // Contenedor principal w-1/2, padding 2
    <View className="w-1/2 p-2">
      {/* Imagen dentro de contenedor w-full, h-auto */}
      <View className="w-full h-auto">
        <Image
          source={{ uri: pelicula.urlFoto }}
          className="w-full aspect-[2/3]"
          resizeMode="cover"
        />
      </View>

      {/* Contenedor debajo: w-full, h-28, blanco, borde gray-200 */}
      <View className="w-full h-28 bg-white border border-gray-200">
        {/* Texto xl, negrita con título */}
        <Text className="text-xl font-bold p-2" numberOfLines={2}>
          {pelicula.titulo}
        </Text>

        {/* Al fondo del contenedor, fila con iconos */}
        <View className="flex-1 flex-row items-end justify-between p-2">
          <MaterialIcons name="visibility" size={24} color="#FF4F2E" />
          <MaterialIcons name="favorite" size={24} color="#FF4F2E" />
        </View>
      </View>
    </View>
  );
}
