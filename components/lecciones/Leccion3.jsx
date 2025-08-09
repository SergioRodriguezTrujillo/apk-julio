import { View, Text, ScrollView, ImageBackground, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { documentosStyles as styles } from "../DocumentosStyles"
import VideoPlayer from "../VideoPlayer"

const { width, height } = Dimensions.get("window")

export default function Leccion3({ route }) {
  const navigation = useNavigation()

  const openPowerPoint = () => {
    navigation.navigate("LessonPowerPoint", {
      lessonName: "Leccion3: Gran Visión Local",
    })
  }

  const openWord = () => {
    navigation.navigate("WordLeccion3")
  }

  const newContent = (
    <>
      <View style={estilosIndividual.videoPlayerContainer}>
        <VideoPlayer source={require("../../assets/videos/Leccion3.mp4")} style={styles.videoContainer} />
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
        <Text style={styles.title}>la gran visión</Text>
        <Text style={styles.subtitle}>hechos impactantes............ es local</Text>
        <Text style={styles.subtitleDos}>hechos 19:8-10</Text>
        <Text style={styles.paragraph}>
          • Habitantes en tu region o ciudad ={" "}
          <Text style={estilosIndividual.underline}>Supongamos 100 000 habitantes</Text>
        </Text>
        <Text style={styles.paragraph}>
          • Suponiendo que el 90% esta alejado de Dios: multiplicado * 0.9 ={" "}
          <Text style={estilosIndividual.underline}>90 000 perdidos</Text>
        </Text>
        <Text style={styles.paragraph}>
          • ¿Cuantas congregaciones de 50 miembros se necesitan para alcanzar ese 90%? (Divide el último número que
          obtuviste entre 50) = <Text style={estilosIndividual.underline}>1800 Congregaciones de 50 miembros</Text>
        </Text>
        <Text style={styles.paragraph}>
          • Suponiendo que nos pongamos la meta de alcanzar solo el 10% de los perdidos. (Multiplica el último número
          que obtuviste * 0.1) ={" "}
          <Text style={estilosIndividual.underline}>180 Congregaciones para alcanzar el 10%</Text>
        </Text>
        <Text style={styles.paragraph}>
          • ¿Cuantas congregaciones de 50 miembros hay actualmente en tu area? ={" "}
          <Text style={estilosIndividual.underline}>Supongamos que hay 10 Congregaciones</Text>
        </Text>
        <Text style={styles.paragraph}>
          • ¿Cuantas congregaciones de 50 miembros faltan para ganar solo el 10% de los perdidos? ={" "}
          <Text style={estilosIndividual.underline}>170 congregaciones</Text>
        </Text>
        <Text style={styles.paragraph}>
          • ¿Cuantos lideres se necesitan equipar?= <Text style={estilosIndividual.underline}> 170 Lideres</Text>
        </Text>
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
  underline: {
    textDecorationLine: "underline",
    textDecorationColor: "black",
    textDecorationStyle: "solid",
    fontFamily: "Lora-SemiBoldItalic",
    textTransform: "capitalize",
    color: "#003366",
    fontSize: 16,
  },
})
