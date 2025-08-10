import { View, Text, ScrollView, ImageBackground, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { documentosStyles as styles } from "../DocumentosStyles"
import VideoPlayer from "../VideoPlayer"

const { width, height } = Dimensions.get("window")

export default function Leccion2({ route }) {
  const navigation = useNavigation()

  const openPowerPoint = () => {
    navigation.navigate("LessonPowerPoint", {
      lessonName: "Leccion2: Gran Visión Global",
    })
  }

  const openWord = () => {
    navigation.navigate("WordLeccion2")
  }

  const newContent = (
    <>
      <View style={styles.videoPlayerContainer}>
        <VideoPlayer source={require("../../assets/videos/Leccion2.mp4")}/>
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
        <Text style={styles.title}>LA GRAN VISIÓN</Text>
        <Text style={styles.subtitle}>DESDE GÉNESIS HASTA APOCALIPSIS...Es Global</Text>
        <Text style={styles.paragraph}>Génesis 1:26-28 (Génesis 3) Génesis 6:1, 5 Génesis 9:1 Génesis 11:4</Text>
        <View style={estilosIndividual.tableContainer}>
          <View style={estilosIndividual.tableRow}>
            <View style={estilosIndividual.tableHeaderCell}>
              <Text style={estilosIndividual.tableHeaderText}>REFERENCIA</Text>
            </View>
            <View style={estilosIndividual.tableHeaderCell}>
              <Text style={estilosIndividual.tableHeaderText}>¿QUIÉN?</Text>
            </View>
            <View style={estilosIndividual.tableHeaderCell}>
              <Text style={estilosIndividual.tableHeaderText}>¿CUÁN GRANDE?</Text>
            </View>
          </View>

          {[
            ["Génesis 12:1-3", "Abram", "Toda la tierra"],
            ["Éxodo 19:5-6", "Israel", "Toda la tierra"],
            ["Salmo 67", "Israel", "Toda Nación"],
            ["Isaías 49:5-6", "Jesús (Profetizado)", "Todo el mundo"],
            ["Mateo 28:19-20", "Discípulos", "Toda Nación"],
            ["Hechos 1:8", "Discípulos", "Toda la tierra"],
            ["2 Corintios 5:18-20", "Iglesia", "Todo el mundo"],
            ["Apocalipsis 7:9-10", "Multitudes", "Toda Nación"],
          ].map((row, index) => (
            <View key={index} style={estilosIndividual.tableRow}>
              <View style={estilosIndividual.tableCell}>
                <Text style={estilosIndividual.tableCellText}>{row[0]}</Text>
              </View>
              <View style={estilosIndividual.tableCell}>
                <Text style={estilosIndividual.tableCellText}>{row[1]}</Text>
              </View>
              <View style={estilosIndividual.tableCell}>
                <Text style={estilosIndividual.tableCellText}>{row[2]}</Text>
              </View>
            </View>
          ))}
        </View>

        <Text style={[estilosIndividual.paragraph]}>
          <Text style={estilosIndividual.keyword}>NOTA: </Text>
          Predique las primeras 5 escrituras acerca de cómo Dios creó al hombre a su propia imagen y quiso que el hombre
          se multiplicara y revelara su imagen y gloria hasta los confines de la tierra. Incluso cuando el pecado entró
          en el mundo, hubo juicio, luego gracia y vemos a Dios decidido a llevar su gloria hasta los confines de la
          tierra mientras usa a diferentes personas para lograr su imagen y gloria. ENTONCES, deje de predicar y enseñar
          y haga que las personas a las que está capacitando se sienten en grupos y lean las siguientes escrituras y
          descubran por sí mismos A QUIÉN ESTABA USANDO DIOS y CUÁN GRANDE ERA LA VISIÓN. Luego, después de 15 minutos,
          abra la sala y discuta lo que ha aprendido.
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
  tableContainer: {
    marginVertical: 15,
    borderWidth: 1,
    borderColor: "#003366",
    borderRadius: 10,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomColor: "#003366",
  },
  tableHeaderCell: {
    flex: 1,
    padding: 4,
    backgroundColor: "#00336622",
    borderBottomWidth: 1,
    borderRightColor: "#003366",
  },
  tableCell: {
    flex: 1,
    padding: 4,
    borderRightColor: "#003366",
  },
  tableHeaderText: {
    fontSize: 20,
    fontFamily: "Lora-SemiBold",
    textTransform: "capitalize",
    textAlign: "center",
    color: "#003366",
  },
  tableCellText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 8,
    fontFamily: "Lora-Regular",
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 8,
    textAlign: "justify",
    fontFamily: "Lora-Regular",
  },
  keyword: {
    fontFamily: "Lora-SemiBoldItalic",
    textTransform: "capitalize",
    color: "#1C4F7C",
    fontSize: 20,
  },
})
