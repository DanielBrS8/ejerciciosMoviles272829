import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Boton from "./Boton";

// Ejercicio 21-22: Diseño de la Toolbar
export default function Toolbar() {
  return (
    <View className="w-full bg-[#3782A3] flex-row items-center justify-between px-4 pt-8 pb-2">
      {/* Menú, estrella y logotipo alineados a izquierda con separación 2 */}
      <View className="flex-row items-center gap-2">
        <MaterialIcons name="menu" size={24} color="white" />
        <MaterialIcons name="star" size={50} color="gold" />
        <Text className="text-white text-2xl font-bold tracking-[0.5em]">CINÉPOLIS</Text>
      </View>

      {/* Lupa y botón entrar alineados a derecha con separación 2 */}
      <View className="flex-row items-center gap-2">
        <MaterialIcons name="search" size={24} color="white" />
        <Boton texto="Entrar" onPress={() => {}} />
      </View>
    </View>
  );
}
