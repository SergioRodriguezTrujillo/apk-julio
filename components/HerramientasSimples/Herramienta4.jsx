import { View, Text, ScrollView, ImageBackground, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { documentosStyles as styles } from "../DocumentosStyles"
import VideoPlayer from "../VideoPlayer"

const { width, height } = Dimensions.get("window")

export default function Herramienta4({ route }) {
  const { showOnlyNewContent, showOnlyOriginalContent } = route.params || {}
  const navigation = useNavigation()

  const openPowerPoint = () => {
    navigation.navigate("PowerPoint", {
      toolName: "Her 4: Los 3 Círculos",
    })
  }

  const openWord = () => {
    navigation.navigate("WordHerramienta4")
  }

  const newContent = (
    <>
      <View style={styles.videoPlayerContainer}>
        <VideoPlayer source={require("../../assets/videos/Herramienta4.mp4")} style={styles.videoContainer} />
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
        <Text style={styles.subtitle}>CONOZCA LA HISTORIA DE JESUS</Text>
        <Image source={require("../../assets/fotos/herramienta004.jpg")} style={estilosIndividual.toolImage} />
        <Text style={styles.paragraph}>
          <Text style={styles.keyword}>Nota: </Text>Esta es una manera maravillosa de compartir el evangelio con alguien
          que está lejos de Dios y una excelente manera de hacerlo, es preguntarle a alguien si puede mostrarle algo que
          cambió su vida y especialmente después de contarle su testimonio de 15 segundos.
        </Text>
        <Text style={styles.paragraph}>
          Hay 3 círculos y el de la derecha representa el mundo quebrantado. Entonces, cuando comience, explique lo
          siguiente: No cabe duda que vivimos en un mundo quebrantado, hay aflicción, dolor, enfermedad y muerte. Sin
          embargo, Dios nunca tuvo la intención de que viviéramos en un mundo quebrantado. Al principio en el mundo que
          Dios creó todo era bueno (circulo de la izquierda), no había nada de lo que hay ahora. Pero Adán y Eva y todos
          nosotros por el pecado nos alejamos del diseño original de Dios e hicimos este mundo quebrantado. Es muy
          difícil vivir en quebrantamiento, por ello las personas buscan escapar a través de muchas cosas (flechas que
          apuntan hacia afuera), a través de los vicios, fiestas, éxito, bienes materiales, etc. Pero no lo logran
          porque regresan con más ímpetu al quebrantamiento. Dios desde un principio tenía preparado un plan para
          rescatarnos y a su tiempo envió a su Hijo Jesús (circulo de abajo), Jesús vino, murió por nuestros pecados,
          fue sepultado y al tercer día resucitó, para que todos los que en El crean, se arrepientan y se bautizan sean
          salvos y salgan del mundo de pecado recibiendo su perdón y haciéndolo el Rey de sus vidas, ahora la imagen de
          Dios es restaurada en Cristo siendo nuevas criaturas y volviendo al diseño original de Dios en comunión con
          El. Ahora, Dios nos vuelve a enviar al mundo quebrantado, pero ya no quebrantados para hablarles a las
          personas de que hay una puerta y un camino: Jesucristo. Al final haga las dos preguntas:
        </Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>1. En cuál de los dos círculos de arriba te encuentras tú?</Text>
          <Text style={styles.listItem}>2. Que te impide hacer a Jesús el Rey de tu vida?</Text>
          <Text style={styles.listItem}>
            3. Si la persona te responde que nada le impide, es hora de pasar a la oracion de Fe.
          </Text>
        </View>
      </View>
    </>
  )

  return (
    <ImageBackground source={require("../../assets/icons/fondo1.jpg")} style={styles.container}>
      <View>
        <Image source={require("../../assets/marcadores/campo2.png")} style={styles.marker} />
      </View>
      <ScrollView>{showOnlyNewContent ? newContent : newContent}</ScrollView>
    </ImageBackground>
  )
}

const estilosIndividual = StyleSheet.create({
  toolImage: {
    marginBottom: 8,
    width: width - 32, // Se ajusta el ancho al contenedor con margen de 8 en cada lado (8 * 2)
    height: (width - 32) / 1.4, // Ajusta la altura automáticamente manteniendo la proporción
    borderRadius: 10,
  },
})
