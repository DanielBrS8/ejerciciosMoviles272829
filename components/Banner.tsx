import { View, Image } from "react-native";
import { cssInterop } from "nativewind";

// Ejercicio 27: Permite a Nativewind procesar Image
cssInterop(Image, { className: "style" });

// Ejercicio 28: Props source y className opcional
type BannerProps = {
  source: string;
  className?: string;
};

// Ejercicio 29-30: View con w-full, Image con w-full h-full
export default function Banner({ source, className }: BannerProps) {
  return (
    <View className={`w-full ${className}`}>
      <Image
        source={{ uri: source }}
        className="w-full h-full"
        resizeMode="cover"
      />
    </View>
  );
}
