import { View, Text, ScrollView, ImageBackground, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { documentosStyles as styles } from "../DocumentosStyles"
import VideoPlayer from "../VideoPlayer"

const { width, height } = Dimensions.get("window")

export default function Leccion1({ route }) {
  const navigation = useNavigation()

  const openPowerPoint = () => {
    navigation.navigate("LessonPowerPoint", {
      lessonName: "Leccion1: Bosquejo del Entrenamiento",
    })
  }

  const openWord = () => {
    navigation.navigate("WordLeccion1")
  }

  const newContent = (
    <>
      <View style={estilosIndividual.videoPlayerContainer}>
        <VideoPlayer source={require("../../assets/videos/Leccion1.mp4")} style={styles.videoContainer} />
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
        <Text style={styles.title}>CARACTERÍSTICAS DE LOS MOVIMIENTOS DE MULTIPLICACIÓN DE LA IGLESIA</Text>
        <Text style={styles.paragraph}>
          Mateo 28:18-20 Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y
          del Hijo, y del Espíritu Santo; enseñándoles que guarden todas las cosas que os he mandado.
        </Text>
        <Text style={styles.subtitle}>GRAN VISIÓN</Text>
        <Text style={styles.paragraph}>• Global Génesis ___________ Apocalipsis</Text>
        <Text style={styles.paragraph}>• Local ____________ Hechos impactantes</Text>
        <Text style={styles.paragraph}>• Personal ____________ Mapa relacional</Text>
        <Text style={styles.subtitle}>PASOS CLAROS</Text>
        <Image source={require("../../assets/fotos/leccion1.png")} style={estilosIndividual.toolImage} />
        <Text style={styles.subtitle}>HERRAMIENTAS SIMPLES</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Mapa relacional</Text>
          <Text style={styles.listItem}>• Casa de Paz</Text>
          <Text style={styles.listItem}>• Testimonio 15s</Text>
          <Text style={styles.listItem}>• Los 3 Circulos</Text>
          <Text style={styles.listItem}>• El Semáforo</Text>
          <Text style={styles.listItem}>• EL 4.1.1</Text>
          <Text style={styles.listItem}>• Los 3 Tercios</Text>
          <Text style={styles.listItem}>• El Círculo saludable</Text>
          <Text style={styles.listItem}>• Guía de la Mano Isquierda</Text>
          <Text style={styles.listItem}>• 5 Niveles del Liderazgo</Text>
          <Text style={styles.listItem}>• Hierro Sobre Hierro</Text>
          <Text style={styles.listItem}>• MAOI</Text>
          <Text style={styles.listItem}>• Dinámica de cómo funciona la multiplicación</Text>
        </View>
      </View>
    </>
  )

  return (
    <ImageBackground source={require("../../assets/icons/fondo1.jpg")} style={styles.container}>
      <ScrollView>{newContent}</ScrollView>
    </ImageBackground>
  )
}

const estilosIndividual = StyleSheet.create({
  toolImage: {
    width: width - 34,
    height: width / 1.1,
    borderRadius: 10,
    marginBottom: 8,
  },
  videoPlayerContainer: {
    position: "relative",
    zIndex: 1,
  },
})
