import { View, Text, TextInput, StyleSheet } from "react-native";
import Boton from "./Boton";

// Ejercicio 44 - Sugerencia: objeto styles con estilos que puedan repetirse
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#9ca3af", // gray-400
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 16, // px-4
    paddingVertical: 8,    // py-2
    fontSize: 14,          // text-sm
  },
});

// Ejercicio 42-44: Diseño del Buscador
export default function Buscador() {
  return (
    <View className="px-4 py-2 bg-gray-200">
      {/* Tres botones con separación 2, primero relleno, otros dos no */}
      <View className="flex-row gap-2">
        <Boton texto="YA A LA VENTA" relleno={true} onPress={() => {}} />
        <Boton texto="HOY" relleno={false} onPress={() => {}} />
        <Boton texto="PROXIMAMENTE" relleno={false} onPress={() => {}} />
      </View>

      {/* Text "Cine" con color b4a494 y negrita */}
      <Text className="text-[#b4a494] font-bold mt-4">Cine</Text>
      <TextInput
        style={styles.input}
        placeholder="- SELECCIONA UN CINE -"
        placeholderTextColor="#7782B7"
      />

      {/* Text "Fecha" con color b4a494 y negrita */}
      <Text className="text-[#b4a494] font-bold mt-4">Fecha</Text>
      <TextInput
        style={styles.input}
        placeholder="- ELEGIR FECHA -"
        placeholderTextColor="#7782B7"
      />
    </View>
  );
}
