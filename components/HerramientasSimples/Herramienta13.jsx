import { View, Text, ScrollView, ImageBackground, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { documentosStyles as styles } from "../DocumentosStyles"
import VideoPlayer from "../VideoPlayer"

const { width, height } = Dimensions.get("window")

export default function Herramienta13({ route }) {
  const { showOnlyNewContent, showOnlyOriginalContent } = route.params || {}
  const navigation = useNavigation()

  const openPowerPoint = () => {
    navigation.navigate("PowerPoint", {
      toolName: "Her 13: Descripción General",
    })
  }

  const openWord = () => {
    navigation.navigate("WordHerramienta13")
  }

  const newContent = (
    <>
      <View style={styles.videoPlayerContainer}>
        <VideoPlayer source={require("../../assets/videos/Herramienta13.mp4")}/>
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
        <Text style={styles.subtitle}>Tabla de Crecimiento de una multiplicación</Text>
        <View style={estilosIndividual.tabla}>
          <View style={estilosIndividual.encabezado}>
            <Text style={estilosIndividual.headerCell}>Siclos</Text>
            <Text style={estilosIndividual.headerCell}>Maestros (Líderes)</Text>
            <Text style={estilosIndividual.headerCell}>Discípulos (Nuevos Creyentes)</Text>
            <Text style={estilosIndividual.headerCell}>Total (Maestros + Discípulos)</Text>
          </View>
          {[
            [1, 1, 1, 2],
            [2, 2, 2, 4],
            [3, 4, 4, 8],
            [4, 8, 8, 16],
            [5, 16, 16, 32],
            [6, 32, 32, 64],
            [7, 64, 64, 128],
            [8, 128, 128, 256],
            [9, 256, 256, 512],
            [10, 512, 512, 1024],
            [11, 1024, 1024, 2048],
            [12, 2048, 2048, 4096],
          ].map((row, index) => (
            <View key={index} style={estilosIndividual.fila}>
              {row.map((cell, cellIndex) => (
                <Text key={cellIndex} style={estilosIndividual.celda}>
                  {cell}
                </Text>
              ))}
            </View>
          ))}
        </View>
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

const estilosIndividual = StyleSheet.create({
  tabla: {
    marginVertical: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#003366",
  },
  encabezado: {
    flexDirection: "row",
    backgroundColor: "#00336622",
    borderBottomWidth: 2,
    borderColor: "#003366",
  },
  headerCell: {
    flex: 1,
    paddingVertical: 8,
    fontFamily: "Lora-SemiBoldItalic",
    textTransform: "capitalize",
    // color:'#1C4F7C',
    color: "#003366",
    fontSize: 16,
    textAlign: "center",
    borderRightWidth: 1,
    borderColor: "#003366",
  },
  fila: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#003366",
  },
  celda: {
    fontSize: 16,
    lineHeight: 22,
    color: "#333",
    textAlign: "justify",
    fontFamily: "Lora-Regular",
    flex: 1,
    padding: 8,
    textAlign: "center",
    borderRightWidth: 1,
    borderColor: "#003366",
  },
  mayuscula: {
    textTransform: "uppercase",
  },
})
