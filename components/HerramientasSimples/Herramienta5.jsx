import { View, Text, ScrollView, ImageBackground, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { documentosStyles as styles } from "../DocumentosStyles"
import VideoPlayer from "../VideoPlayer"

const { width, height } = Dimensions.get("window")

export default function Herramienta5({ route }) {
  const { showOnlyNewContent, showOnlyOriginalContent } = route.params || {}
  const navigation = useNavigation()

  const openPowerPoint = () => {
    navigation.navigate("PowerPoint", {
      toolName: "Her 5: El Semáforo",
    })
  }

  const openWord = () => {
    navigation.navigate("WordHerramienta5")
  }

  const newContent = (
    <>
      <View style={styles.videoPlayerContainer}>
        <VideoPlayer source={require("../../assets/videos/Herramienta5.mp4")}/>
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
        <Text style={styles.subtitle}>las 4 respuestas del evangelio</Text>
        <Text style={styles.subtitle}>hechos 17:32-34</Text>

        <Text style={styles.paragraph}>
          <Image source={require("../../assets/fotos/herramienta51.png")} style={estilosIndividual.toolImage} /> V.32 Y
          como oyeron la resurrección de los muertos, unos se burlaban
        </Text>

        <Text style={styles.paragraph}>
          <Image source={require("../../assets/fotos/herramienta52.png")} style={estilosIndividual.toolImage} /> V.32 Y
          otros decían: Te oiremos acerca de esto otra vez.
        </Text>

        <Text style={styles.paragraph}>
          <Image source={require("../../assets/fotos/herramienta53.png")} style={estilosIndividual.toolImage} /> V.33 Y
          así Pablo salió de en medio de ellos. V.34 Mas algunos creyeron, juntándose con él.
        </Text>
        <Image source={require("../../assets/fotos/herramienta54.png")} style={estilosIndividual.toolImage2} />
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
    width: 15,
    height: 15,
    borderRadius: 10,
    marginBottom: 8,
  },
  toolImage2: {
    left: -6,
    width: 365,
    height: 500,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 16,
    resizeMode: "stretch",
  },
})
