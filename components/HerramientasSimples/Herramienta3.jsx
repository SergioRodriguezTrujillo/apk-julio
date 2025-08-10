import { View, Text, ScrollView, ImageBackground, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { documentosStyles as styles } from "../DocumentosStyles"
import VideoPlayer from "../VideoPlayer"

const { width, height } = Dimensions.get("window")

export default function Herramienta3({ route }) {
  const { showOnlyNewContent, showOnlyOriginalContent } = route.params || {}
  const navigation = useNavigation()

  const openPowerPoint = () => {
    navigation.navigate("PowerPoint", {
      toolName: "Her 3: Testimonio 15s",
    })
  }

  const openWord = () => {
    navigation.navigate("WordHerramienta3")
  }

  const newContent = (
    <>
      <View style={styles.videoPlayerContainer}>
        <VideoPlayer source={require("../../assets/videos/Herramienta3.mp4")}/>
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
        <Text style={styles.title}>CÓMO SEMBRAR LA SEMILLA</Text>
        <Text style={styles.subtitle}>CONOZCA SU HISTORIA</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.keyword}>Nota: </Text>¡Su testimonio personal es muy poderoso porque demuestra que Dios
          tiene poder para cambiar nuestras vidas! Es una historia de contrastes entre tu antigua vida y tu nueva vida
          en Cristo. Pero uno de los mayores errores al compartir nuestro testimonio es que compartimos demasiados
          detalles y demasiado tiempo. Hay poder en tu historia.
        </Text>
        <Image source={require("../../assets/fotos/herramienta003.jpg")} style={estilosIndividual.toolImage} />
        <Text style={styles.paragraph}>
          Piense en DOS PALABRAS que describan su vida antes de conocer a Jesús. Luego piense en DOS PALABRAS que
          describan su conversión. Luego, DOS PALABRAS que describen tu vida después de convertirte en cristiano.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.keyword}>EJEMPLO: </Text>
          "Hubo un tiempo en mi vida en el que estaba inseguro y enojado. Luego conocí a Jesús, puse mi confianza en Él
          y lo hice número uno en mi vida. Ahora estoy a salvo y lleno de alegría.
        </Text>
        <Text style={styles.keyword}>¿Tienes una historia como esta?"</Text>
        <Text style={styles.paragraph}>
          Esa última pregunta es muy importante, ya que invita a la otra persona a compartir su propia experiencia.
          Cuando practique este método en un grupo, use esa última frase para pasársela a alguien más en el grupo para
          que la practique… y así sucesivamente.
        </Text>
      </View>
    </>
  )

  return (
    <ImageBackground source={require("../../assets/icons/fondo1.jpg")} style={styles.container}>
      <View>
        <Image source={require("../../assets/marcadores/campo2.png")} style={styles.marker} />
      </View>
      <ScrollView>{newContent}</ScrollView>
    </ImageBackground>
  )
}

const estilosIndividual = StyleSheet.create({
  toolImage: {
    marginVertical: 8,
    width: width - 32, // Se ajusta el ancho al contenedor con margen de 8 en cada lado (8 * 2)
    height: (width - 32) / 2.4, // Ajusta la altura automáticamente manteniendo la proporción
    borderRadius: 10,
  },
})
