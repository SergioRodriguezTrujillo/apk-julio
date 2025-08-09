import { View, Text, ScrollView, ImageBackground, Image, TouchableOpacity, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { documentosStyles as styles } from "../DocumentosStyles"
import VideoPlayer from "../VideoPlayer"

const { width, height } = Dimensions.get("window")

export default function Herramienta11({ route }) {
  const { showOnlyNewContent, showOnlyOriginalContent } = route.params || {}
  const navigation = useNavigation()

  const openPowerPoint = () => {
    navigation.navigate("PowerPoint", {
      toolName: "Her 11: Hierro Sobre Hierro",
    })
  }

  const openWord = () => {
    navigation.navigate("WordHerramienta11")
  }

  const newContent = (
    <>
      <View style={styles.videoPlayerContainer}>
        <VideoPlayer source={require("../../assets/videos/Herramienta11.mp4")} style={styles.videoContainer} />
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
        <Text style={styles.title}>CÓMO DESARROLLAR LÍDERES QUE SE MULTIPLIQUEN</Text>
        <Text style={styles.subtitle}>HIERRO SOBRE HIERRO</Text>

        <Text style={styles.paragraph}>
          <Text style={styles.keyword}>Propósito:</Text> aprender de otros profesionales mientras se abordan los atascos
          (barreras) y se aclaran los pasos de acción que abordan los atascos.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.keyword}>Reglas:</Text> Ataca el plan, no al hombre.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.keyword}>Enfoque:</Text>: Haga esto teniendo en cuenta a los perdidos de su comunidad.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.keyword}>Programa propuesto:</Text>: (60 minutos, asigne un facilitador y un cronometrador
          para mantener las cosas encaminadas)
        </Text>
        <View style={styles.list}>
          <Text style={styles.keyword}></Text>
          <Text style={styles.keyword}>1. Informe / Actualización (30 min)</Text>
          <Text style={styles.keyword}></Text>
          <Text style={styles.listItem}>
            <Text style={styles.keyword}>• Permanecer:</Text> ¿Permanece personalmente en Jesús con regularidad? (Si /
            No)
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.keyword}>• Conflicto:</Text> ¿Hay alguna falta de perdón en su corazón o un conflicto no
            resuelto en su equipo? (Si / No)
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.keyword}>• Visión:</Text> ¿Cuál es la visión local por la que está trabajando?"
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.keyword}>• Contexto</Text>: describe tu contexto (ciudad, grupos de personas, etc.)
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.keyword}>• Herramientas</Text>: comparta brevemente qué herramientas está utilizando en
            cada uno de los 4 campos.{" "}
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.keyword}>• Ritmo del ministerio semanal:</Text> comparta brevemente su ritmo semanal
            (oración, compartir, discipulado, iglesia, entrenamiento)
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.keyword}>• Mapa relacional:</Text> se centra en las corrientes más fructíferas (o en el
            mapa / lista relacional si todavía no tienes uno)
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.keyword}>• Atascos:</Text> asegúrese de compartir los atascos / barreras que enfrenta en
            el camino hacia la multiplicación de discípulos e iglesias saludables y firmes.
          </Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.keyword}>2. Ánimo (5 min)</Text>
          <Text style={styles.keyword}></Text>
          <Text style={styles.keyword}>3. Haga preguntas aclaratorias (5 min)</Text>
          <Text style={styles.keyword}></Text>
          <Text style={styles.keyword}>
            4. Discutir soluciones para abordar las barreras (15 min) - Escrituras, historias y sugerencias
          </Text>
          <Text style={styles.keyword}></Text>
          <Text style={styles.keyword}>5. Comparta 2-3 elementos de acción y su plan de compromiso (3 min).</Text>
          <Text style={styles.keyword}></Text>
          <Text style={styles.keyword}>6. Orar por ellos (2 min)</Text>
        </View>
      </View>
    </>
  )

  return (
    <ImageBackground source={require("../../assets/icons/fondo1.jpg")} style={styles.container}>
      <View>
        <Image source={require("../../assets/marcadores/campo5.png")} style={styles.marker} />
      </View>
      <ScrollView>{newContent}</ScrollView>
    </ImageBackground>
  )
}
