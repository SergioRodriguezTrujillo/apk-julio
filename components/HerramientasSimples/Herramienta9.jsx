import { View, Text, ScrollView, ImageBackground, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { documentosStyles as styles } from "../DocumentosStyles"
import VideoPlayer from "../VideoPlayer"

const { width, height } = Dimensions.get("window")

export default function Herramienta9({ route }) {
  const { showOnlyNewContent, showOnlyOriginalContent } = route.params || {}
  const navigation = useNavigation()

  const openPowerPoint = () => {
    navigation.navigate("PowerPoint", {
      toolName: "Her 9: Guía de la Mano Izquierda",
    })
  }

  const openWord = () => {
    navigation.navigate("WordHerramienta9")
  }

  const newContent = (
    <>
      <View style={styles.videoPlayerContainer}>
        <VideoPlayer source={require("../../assets/videos/Herramienta9.mp4")} style={styles.videoContainer} />
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
        <Text style={styles.title}>CÓMO JUNTAR DISCÍPULOS EN GRUPOS</Text>
        <Text style={styles.subtitle}>GUÍA DE LA MANO IZQUIERDAbPARA EL INICIO DE IGLESIA</Text>
        <Image source={require("../../assets/fotos/herramienta009.png")} style={estilosIndividual.toolImage} />
        <Text style={styles.subtitle}>Preguntas</Text>

        <Text style={styles.keyword}>¿Quién es la iglesia?</Text>
        <Text style={styles.paragraph}>
          CREYENTES ARREPENTIDOS Y BAUTIZADOS: Para responder esta pregunta por primera vez, hemos elegido un pasaje de
          las Escrituras. Hechos 2: 36-47 que nos muestra el punto de entrada para la formación de las primeras iglesias
          del Nuevo Testamento. La iglesia consiste en creyentes bautizados arrepentidos
        </Text>

        <Text style={styles.keyword}>¿Qué hace una iglesia?</Text>
        <Text style={styles.paragraph}>
          CÍRCULO SALUDABLE DE LA IGLESIA: Aquí necesitamos hacer una lista simple de las actividades de la primera
          iglesia que se registraron para nosotros en Hechos 2: 36-47 y podemos consultar el Círculo Saludable de la
          Iglesia que se encuentra en la página 18.
        </Text>

        <Text style={styles.keyword}>¿Dónde se reúnen las iglesias?</Text>
        <Text style={styles.paragraph}>
          EN CUALQUIER LUGAR: La respuesta se encuentra en las siguientes escrituras. Hechos 2: 46 / 5: 42 / 16: 40 /
          17: 5-7 / 18:7 / 19: 9 / 20: 20 / Romanos 16: 1-5. 1 Cor. 16:19 / Col. 4:15 / Filemón 1: 1-2
        </Text>

        <Text style={styles.keyword}>¿Cuándo se reúnen?</Text>
        <Text style={styles.paragraph}>
          EN CUALQUIER MOMENTO: Aquí la respuesta no está escrita en piedra; de hecho, el precedente de la primera
          iglesia señalará las reuniones diarias (ver Hechos 2:46) y el primer día de la semana (Hechos 20: 7). Sin
          embargo, lo que se puede afirmar es la necesidad de un plan regular de reuniones. Hebreos 10: 24-25.
        </Text>

        <Text style={styles.keyword}>¿Por qué se reúnen?</Text>
        <Text style={styles.paragraph}>
          PARA GLORIFICAR A DIOS Y ANIMARSE UNOS A OTROS: La respuesta aquí es nuestro motivo principal. 1 Cor. 10:31
          dice: "Así que, ya sea que coman o beban o hagan cualquier otra cosa, háganlo para la gloria de Dios" hebreos
          10:24 y Juan 17: 20-21
        </Text>
      </View>
    </>
  )

  return (
    <ImageBackground source={require("../../assets/icons/fondo1.jpg")} style={styles.container}>
      <View>
        <Image source={require("../../assets/marcadores/campo4.png")} style={styles.marker} />
      </View>
      <ScrollView>{showOnlyNewContent ? newContent : newContent}</ScrollView>
    </ImageBackground>
  )
}

const estilosIndividual = StyleSheet.create({
  toolImage: {
    width: width - 32, // Se ajusta el ancho al contener con margen de 8 (8 * 2)
    height: width / 1.7, // Ajusta la altura automáticamente
    borderRadius: 10,
    marginBottom: 40,
  },
})
