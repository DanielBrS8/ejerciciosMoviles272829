import { Text, Pressable } from "react-native";

// Ejercicio 14-15: Props texto y onPress
// Ejercicio 16-17: Prop relleno opcional, por defecto true
// Ejercicio 20: Prop className para añadir estilos al Boton
type BotonProps = {
  texto: string;
  onPress: () => void;
  relleno?: boolean;
  className?: string;
};

export default function Boton({ texto, onPress, relleno = true, className }: BotonProps) {
  return (
    // Ejercicio 18: Pressable con estilos según relleno
    <Pressable
      onPress={onPress}
      className={`px-4 py-2 rounded-md ${
        relleno ? "bg-[#F5A623]" : "bg-white border border-[#F5A623]"
      } ${className}`}
    >
      {/* Ejercicio 19: Texto blanco/negrita si relleno, #FF4F2E/seminegrita si no */}
      <Text
        className={`text-center ${
          relleno ? "text-white font-bold" : "text-[#FF4F2E] font-semibold"
        }`}
      >
        {texto}
      </Text>
    </Pressable>
  );
}
