import { View, Text, ScrollView, ImageBackground, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { documentosStyles as styles } from "../DocumentosStyles"
import VideoPlayer from "../VideoPlayer"

const { width, height } = Dimensions.get("window")

export default function Leccion4({ route }) {
  const navigation = useNavigation()

  const openPowerPoint = () => {
    navigation.navigate("LessonPowerPoint", {
      lessonName: "Leccion4: Panorama 4 Campos",
    })
  }

  const openWord = () => {
    navigation.navigate("WordLeccion4")
  }

  const newContent = (
    <>
      <View style={styles.videoPlayerContainer}>
        <VideoPlayer source={require("../../assets/videos/Leccion4.mp4")}/>
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
        <Text style={styles.title}>descripción general de las 5 partes en los 4 campos</Text>
        <Text style={styles.subtitle}>13 herramientas simples:</Text>
        <View style={estilosIndividual.tableContainer}>
          <View style={estilosIndividual.tableRow}>
            <View style={estilosIndividual.tableCell}>
              <Text style={estilosIndividual.keyword}>1. Campo vacío</Text>
              <Text style={estilosIndividual.cellText}>• Mapa relacional</Text>
              <Text style={estilosIndividual.cellText}>• Persona/casa de paz</Text>
            </View>
            <View style={estilosIndividual.tableCell}>
              <Text style={estilosIndividual.keyword}>2. Campo siembra</Text>
              <Text style={estilosIndividual.cellText}>• Testimonio 15seg</Text>
              <Text style={estilosIndividual.cellText}>• Tres círculos</Text>
              <Text style={estilosIndividual.cellText}>• El semáforo</Text>
            </View>
          </View>
          <View style={estilosIndividual.tableRow}>
            <View style={estilosIndividual.tableCell2}>
              <Text style={estilosIndividual.keyword}>4. Campo cosecha</Text>
              <Text style={estilosIndividual.cellText}>• Círculo saludable de la iglesia</Text>
              <Text style={estilosIndividual.cellText}>• Guía de la mano izquierda</Text>
            </View>
            <View style={estilosIndividual.tableCell2}>
              <Text style={estilosIndividual.keyword}>3. Campo crecimiento</Text>
              <Text style={estilosIndividual.cellText}>• El 4.1.1</Text>
              <Text style={estilosIndividual.cellText}>• Los tres tercios (3/3)</Text>
            </View>
          </View>
          <View style={estilosIndividual.centerCircle}>
            <Text style={estilosIndividual.keyword}>Liderazgo</Text>
            <Text style={[estilosIndividual.cellText, estilosIndividual.liderazgoSubText]}>• 5 niveles liderazgo</Text>
            <Text style={[estilosIndividual.cellText, estilosIndividual.liderazgoSubText]}>• Hierro sobre hierro</Text>
            <Text style={[estilosIndividual.cellText, estilosIndividual.liderazgoSubText]}>• Principio MAOI</Text>
            <Text style={[estilosIndividual.cellText, estilosIndividual.liderazgoSubText]}>
              • Dinámica de la multiplicación
            </Text>
          </View>
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
  tableContainer: {
    width: "100%",
    aspectRatio: 0.7,
    position: "relative",
  },
  tableRow: {
    flexDirection: "row",
    height: "50%",
  },
  tableCell: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#003366",
    padding: 4,
    paddingTop: "15%",
  },
  tableCell2: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#003366",
    padding: 4,
    paddingTop: "25%",
  },
  cellText: {
    fontSize: 13,
    lineHeight: 16,
    color: "#333",
    marginBottom: 8,
    textAlign: "any",
    fontFamily: "Lora-Regular",
  },
  centerCircle: {
    position: "absolute",
    top: "33%",
    left: "25%",
    width: "51%",
    height: "35%",
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#003366",
    backgroundColor: "rgba(255,255,255,255)",
    justifyContent: "center",
    padding: 10,
  },
  keyword: {
    textAlign: "center",
    fontFamily: "Lora-SemiBoldItalic",
    textTransform: "capitalize",
    color: "#003366",
    fontSize: 16,
    marginBottom: 12,
  },
  liderazgoSubText: {
    marginLeft: 18,
    fontSize: 13,
  },
})
