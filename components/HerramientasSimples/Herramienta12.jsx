import { View, Text, ScrollView, ImageBackground, Image, TouchableOpacity, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { documentosStyles as styles } from "../DocumentosStyles"
import VideoPlayer from "../VideoPlayer"

const { width, height } = Dimensions.get("window")

export default function Herramienta12({ route }) {
  const { showOnlyNewContent, showOnlyOriginalContent } = route.params || {}
  const navigation = useNavigation()

  const openPowerPoint = () => {
    navigation.navigate("PowerPoint", {
      toolName: "Her 12: MAOI",
    })
  }

  const openWord = () => {
    navigation.navigate("WordHerramienta12")
  }

  const newContent = (
    <>
      <View style={styles.videoPlayerContainer}>
        <VideoPlayer source={require("../../assets/videos/Herramienta12.mp4")} style={styles.videoContainer} />
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
        <Text style={styles.title}>CÓMO DESARROLLAR LÍDERES QUE SE MULTIPLICAN</Text>
        <Text style={styles.subtitle}>PRINCIPIO MAOI</Text>

        <Text style={styles.paragraph}>
          <Text style={styles.keyword}>Nota: </Text>MAOI es el acrónimo de Modelar, Ayudar, Observar e Irse y es una
          excelente manera de transferir habilidades y equipar a otros y vemos que Jesús y los discípulos usaron esto.
          Esto es común con comerciantes como electricistas, plomeros y oficios similares.
        </Text>
        <Text style={styles.paragraph}>
          Me gusta compararme con un padre que enseña a un niño a andar en bicicleta. El padre primero montará la
          bicicleta en frente del niño para MODELAR y así el niño pueda ver lo que el padre quiere que haga. Luego, los
          padres AYUDARÁN al niño sujetando el sillón y ayudando al niño a mantener el equilibrio, pero también lo
          ayudarán a pedalear. Luego, el padre MIRARÁ al niño andar en bicicleta y cuando ese niño pueda viajar, el
          padre SE IRÁ.
        </Text>

        <Text style={styles.subtitle}>Ejemplos en las escrituras:</Text>

        <Text style={styles.paragraph}>
          <Text style={styles.keyword}>MODELAR </Text>Jesús en Marcos 1: modeló la predicación, oración, sanación y el
          traslado de pueblo en pueblo.
          <Text style={styles.paragraph}>
            Pablo en Hechos 13 hasta Hechos 20 modeló cómo plantar iglesias y desarrollar equipos.
          </Text>
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.keyword}>AYUDAR </Text>Jesús en Marcos 6: 35-41 ayudó a sus discípulos alimentando a los
          5000 y luego vemos que Jesús les pide a ellos que los alimenten.
        </Text>
        <Text style={styles.paragraph}>
          Pablo en 1 Tesalonicenses 3: 6 llega a Corinto y escribe una carta. Cuando necesita ayuda para llevar la carta
          a Tesalónica, se la confía a Timoteo.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.keyword}>OBSERVAR </Text>A Jesús en Juan 4:2 se le culpa por bautizar a más discípulos que
          Juan. De hecho, no era Jesús quien bautizaba, sino sus discípulos. Él estaba mirando y delegando. Pablo en 2
          Timoteo 2:2 estaba mirando a Timoteo desde la distancia mientras se acercaba.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.keyword}>IRSE </Text>Vemos a Jesús en Hechos 1:7-11 irse y dice que ustedes serán mis
          testigos hasta los confines de la tierra y las hojas.
        </Text>
        <Text style={styles.paragraph}>Y Pablo en Hechos 20:18-35 se despide de los ancianos de Efesios.</Text>
      </View>
    </>
  )

  return (
    <ImageBackground source={require("../../assets/icons/fondo1.jpg")} style={styles.container}>
      <View>
        <Image source={require("../../assets/marcadores/campo5.png")} style={styles.marker} />
      </View>
      <ScrollView>
        {showOnlyOriginalContent ? (
          <View style={styles.contentContainer}>
            <Text style={styles.paragraph}>No hay contenido original disponible.</Text>
          </View>
        ) : showOnlyNewContent ? (
          newContent
        ) : (
          newContent
        )}
      </ScrollView>
    </ImageBackground>
  )
}
