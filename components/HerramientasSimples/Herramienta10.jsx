import { View, Text, ScrollView, ImageBackground, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { documentosStyles as styles } from "../DocumentosStyles"
import VideoPlayer from "../VideoPlayer"

const { width, height } = Dimensions.get("window")

export default function Herramienta10({ route }) {
  const { showOnlyNewContent, showOnlyOriginalContent } = route.params || {}
  const navigation = useNavigation()

  const openPowerPoint = () => {
    navigation.navigate("PowerPoint", {
      toolName: "Her 10: 5 Niveles del Liderazgo",
    })
  }

  const openWord = () => {
    navigation.navigate("WordHerramienta10")
  }

  const newContent = (
    <>
      <View style={styles.videoPlayerContainer}>
        <VideoPlayer source={require("../../assets/videos/Herramienta10.mp4")}/>
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
        <Text style={styles.subtitle}>LOS 5 NIVELES DEL LIDERAZGO</Text>

        <Text style={styles.subtitle}>N 1: sembrador de semilla</Text>
        <Image source={require("../../assets/fotos/herramienta00101.png")} style={estilosIndividual.toolImage2} />
        <Text style={styles.subtitleDos}>Un discípulo que</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Difunde el evangelio entre familiares y amigos.</Text>
          <Text style={styles.listItem}>• Domina herramientas sencillas y eficaces para compartir el evangelio.</Text>
          <Text style={styles.listItem}>• Ama a las personas perdidas</Text>
          <Text style={styles.listItem}>• Modela la siembra de semillas para otros</Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.subtitle}>N 2: plantador de grupo pequeño</Text>
        <Image source={require("../../assets/fotos/herramienta00102.png")} style={estilosIndividual.toolImage2} />
        <Text style={styles.subtitleDos}>Un líder de nivel 1 que</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Aprende cómo hacer discípulos y plantar iglesias.</Text>
          <Text style={styles.listItem}>• Entrena a trabajadores de nivel 1 para compartir el evangelio</Text>
          <Text style={styles.listItem}>• Forma a los discípulos en grupos que se convierten en iglesias</Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.subtitle}>N 3: Multiplicador de Grupos pequeños</Text>
        <Image source={require("../../assets/fotos/herramienta00103.png")} style={estilosIndividual.toolImage} />
        <Text style={styles.subtitleDos}>Un líder de nivel 2 que</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Comienza iglesias que reproducen iglesias hasta cuatro generaciones.</Text>
          <Text style={styles.listItem}>• Equipa líderes de nivel 1 y nivel 2</Text>
          <Text style={styles.listItem}>
            • Garantiza la salud de las iglesias y otorga autoridad a los líderes locales.
          </Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.subtitle}>N 4: Entrenador de Multiplicación</Text>
        <Image source={require("../../assets/fotos/herramienta00104.png")} style={estilosIndividual.toolImage} />
        <Text style={styles.subtitleDos}> Un líder de nivel 3 que</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>
            • Produce cuatro generaciones de nuevas iglesias a través de múltiples corrientes de plantación de iglesias.
          </Text>
          <Text style={styles.listItem}>
            • Se involucra más allá de la propia red del líder para proyectar una visión y entrenar para la
            multiplicación.
          </Text>
          <Text style={styles.listItem}>• Identifica y resuelve las barreras de la multiplicación.</Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.subtitle}>N 5: Catalizador Movimiento</Text>
        <Image source={require("../../assets/fotos/herramienta00105.png")} style={estilosIndividual.toolImage} />
        <Text style={styles.subtitleDos}>Un líder de nivel 4 que</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>
            • Se convierte en un catalizador para múltiples corrientes de plantación de iglesias entre grupos étnicos no
            alcanzados.
          </Text>
          <Text style={styles.listItem}>
            • Equipa a líderes de nivel 3 y nivel 4 para facilitar múltiples corrientes de múltiples generaciones de
            plantación de iglesias
          </Text>
          <Text style={styles.listItem}>• Se especializa en redes, recursos y proyección de visión</Text>
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

const estilosIndividual = StyleSheet.create({
  toolImage: {
    width: width - 32, // Se ajusta el ancho al contener con margen de 8 (8 * 2)
    height: width, // Ajusta la altura automáticamente
    borderRadius: 10,
    marginBottom: 8,
  },
  toolImage2: {
    width: width - 32, // Se ajusta el ancho al contener con margen de 8 (8 * 2)
    height: width / 2, // Ajusta la altura automáticamente
    borderRadius: 10,
    marginBottom: 8,
  },
})
