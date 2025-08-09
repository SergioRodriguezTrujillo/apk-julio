import { View, Text, ScrollView, ImageBackground, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { documentosStyles as styles } from "../DocumentosStyles"
import VideoPlayer from "../VideoPlayer"

const { width, height } = Dimensions.get("window")

export default function Leccion3A({ route }) {
  const navigation = useNavigation()

  const openPowerPoint = () => {
    navigation.navigate("LessonPowerPoint", {
      lessonName: "Leccion3A: Método Espada",
    })
  }

  const openWord = () => {
    navigation.navigate("WordLeccion3A")
  }

  const newContent = (
    <>
      <View style={estilosIndividual.videoPlayerContainer}>
        <VideoPlayer source={require("../../assets/videos/Leccion3A.mp4")} style={styles.videoContainer} />
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
        <Text style={styles.title}>método espada de descubrimiento bíblico</Text>
        <Image source={require("../../assets/fotos/leccion3a.png")} style={estilosIndividual.toolImage} />
        <Text style={styles.paragraph}>Despues de leer un pasaje, pregunta:</Text>
        <Text style={styles.subtitle}>en este pasaje...</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>
            1. ¿Qué aprenderemos acerca de <Text style={styles.keyword}>Dios</Text>?"
          </Text>
          <Text style={styles.listItem}>
            2. ¿Qué aprenderemos acerca del <Text style={styles.keyword}>Hombre</Text>?"
          </Text>
          <Text style={styles.listItem}>
            3. ¿Hay algún <Text style={styles.keyword}>ejemplo</Text> a seguir?"
          </Text>
          <Text style={styles.listItem}>
            4. ¿Hay algún <Text style={styles.keyword}>Mandamiento</Text> a obedecer?"
          </Text>
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
  videoPlayerContainer: {
    position: "relative",
    zIndex: 1,
  },
  toolImage: {
    width: width - 28,
    height: width - 100,
    borderRadius: 10,
    marginBottom: 8,
  },
})
