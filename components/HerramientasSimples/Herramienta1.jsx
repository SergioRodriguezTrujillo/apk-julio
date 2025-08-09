import { View, Text, ScrollView, ImageBackground, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { documentosStyles as styles } from "../DocumentosStyles"
import VideoPlayer from "../VideoPlayer"

const { width, height } = Dimensions.get("window")

export default function Herramienta1({ route }) {
  const { showOnlyNewContent, showOnlyOriginalContent } = route.params || {}
  const navigation = useNavigation()

  const openPowerPoint = () => {
    navigation.navigate("PowerPoint", {
      toolName: "Her 1: Mapa Relacional",
    })
  }

  const openWord = () => {
    navigation.navigate("WordHerramienta1")
  }

  const newContent = (
    <>
      <View style={styles.videoPlayerContainer}>
        <VideoPlayer source={require("../../assets/videos/Herramienta1.mp4")} style={styles.videoContainer} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={openPowerPoint}>
          <Text style={styles.buttonText}>PowerPoint</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={openWord}>
          <Text style={styles.buttonText}>Word</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>CÓMO ENTRAR A UN CAMPO VACÍO</Text>
        <Text style={styles.subtitle}>MAPA RELACIONAL</Text>
        <Image source={require("../../assets/fotos/herramienta001.png")} style={estilosIndividual.toolImage} />
        <Text style={styles.paragraph}>
          <Text style={styles.keyword}>Nota: </Text>Tu red de relaciones es una de las mejores formas para que el
          evangelio se difunda y para que aprendas a ingresar en campos vacíos. Este parece ser un método intencional y
          estratégico utilizado tanto por Jesús como por los Apóstoles (Jn. 1,35-51, Hechos 10,34-48; 16,14-15, 30-33).
        </Text>
        <Text style={styles.paragraph}>
          En su formación, anime a los que está enseñando a trazar su red relacional. Aquellos en su red deben ser
          personas que usted conozca y que estén lejos de Dios. Son estas mismas personas las que son porteros de otras
          personas que están lejos de Dios.
        </Text>
      </View>
    </>
  )

  return (
    <ImageBackground source={require("../../assets/icons/fondo1.jpg")} style={styles.container}>
      <View>
        <Image source={require("../../assets/marcadores/campo1.png")} style={styles.marker} />
      </View>
      <ScrollView>{newContent}</ScrollView>
    </ImageBackground>
  )
}

const estilosIndividual = StyleSheet.create({
  toolImage: {
    width: width - 32, // Se ajusta el ancho al contener con margen de 8 (8 * 2)
    height: width / 1.7, // Ajusta la altura automáticamente
    borderRadius: 10,
    marginBottom: 8,
  },
})
