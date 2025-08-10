import { View, Text, ScrollView, ImageBackground, Image, TouchableOpacity, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { documentosStyles as styles } from "../DocumentosStyles"
import VideoPlayer from "../VideoPlayer"

const { width, height } = Dimensions.get("window")

export default function Herramienta2({ route }) {
  const { showOnlyNewContent, showOnlyOriginalContent } = route.params || {}
  const navigation = useNavigation()

  const openPowerPoint = () => {
    navigation.navigate("PowerPoint", {
      toolName: "Her 2: Casa de Paz",
    })
  }

  const openWord = () => {
    navigation.navigate("WordHerramienta2")
  }

  const newContent = (
    <>
      <View style={styles.videoPlayerContainer}>
        <VideoPlayer source={require("../../assets/videos/Herramienta2.mp4")}/>
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
        <Text style={styles.subtitle}>PERSONA/CASA DE PAZ</Text>

        <Text style={styles.paragraph}>
          Lea Lucas 10: 1-9 y divida la página en dos columnas como en el siguiente ejemplo, luego responda las
          siguientes preguntas del pasaje:
        </Text>

        <Text style={styles.paragraph}>1) ¿Qué le dijo Jesús a los discípulos que hicieran?</Text>
        <Text style={styles.paragraph}>2) ¿Qué le dijo Jesús a los discípulos que no hicieran?</Text>

        <View style={styles.list}>
          <Text style={styles.subtitle}>SÍ</Text>
          <Text style={styles.listItem}>• Orar, ir, 2x2</Text>
          <Text style={styles.listItem}>• Decir "paz sea a esta casa"</Text>
          <Text style={styles.listItem}>• Quedarse en esa casa,</Text>
          <Text style={styles.listItem}>• Comer/beber lo que les ofrecieran</Text>
          <Text style={styles.listItem}>• Sanar al enfermo</Text>
          <Text style={styles.listItem}>• Decir "el reino está cerca"</Text>
          <Text style={styles.listItem}>•¿No son bienvenidos?</Text>
          <Text style={styles.listItem}>• Sacúdanse el polvo.</Text>
        </View>

        <Text style={styles.subtitle}>NO</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• No llevar bolsa</Text>
          <Text style={styles.listItem}>• No llevar alforja</Text>
          <Text style={styles.listItem}>• No llevar calzado</Text>
          <Text style={styles.listItem}>• No saludar por el camino</Text>
          <Text style={styles.listItem}>• No pasarse de casa en casa</Text>
        </View>
        <Text style={styles.paragraph}>
          <Text style={styles.keyword}>NOTA:</Text> No llevar cartera significa llevar cero presupuesto, necesario para
          compartir el evangelio. Sin bolsos ni sandalias significa confianza y depender de las provisiones de Dios. No
          saludar significa que no se distraiga. No moverse de casa en casa significa que cuando encuentre a una persona
          de paz o casa de paz DETÉNGASE y dé tiempo a esa familia y no se apresure hasta que el evangelio haya sido
          predicado a todos.
        </Text>

        <Text style={styles.subtitleDos}>EJEMPLOS DE PERSONAS DE PAZ:</Text>
        <Text style={styles.paragraph}>
          (Mujer junto al pozo Jn. 4), (Leví Mc. 2) (Zaqueo Lc. 19) (El Eunuco Hechos 8) (Cornelio Hechos 10) (Lidia y
          el Carcelero Hechos 16)
        </Text>

        <Text style={styles.subtitleDos}>CARACTERÍSTICAS DE UNA PERSONA DE PAZ:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Reciben al mensajero</Text>
          <Text style={styles.listItem}>• Reciben el mensaje</Text>
          <Text style={styles.listItem}>• Reciben la misión</Text>
        </View>
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
