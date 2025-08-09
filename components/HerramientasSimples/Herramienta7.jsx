import { View, Text, ScrollView, ImageBackground, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { documentosStyles as styles } from "../DocumentosStyles"
import VideoPlayer from "../VideoPlayer"

const { width, height } = Dimensions.get("window")

export default function Herramienta7({ route }) {
  const { showOnlyNewContent, showOnlyOriginalContent } = route.params || {}
  const navigation = useNavigation()

  const openPowerPoint = () => {
    navigation.navigate("PowerPoint", {
      toolName: "Her 7: Los 3 Tercios",
    })
  }

  const openWord = () => {
    navigation.navigate("WordHerramienta7")
  }

  const newContent = (
    <>
      <View style={styles.videoPlayerContainer}>
        <VideoPlayer source={require("../../assets/videos/Herramienta7.mp4")} style={styles.videoContainer} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={openPowerPoint}>
          <Text style={styles.buttonText}>PowerPoint</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={openWord}>
          <Text style={styles.buttonText}>Word</Text>
        </TouchableOpacity>
      </View>

      {/* Primer Tercio - REUNIRSE */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>CÓMO ENSEÑAR A UN DISCÍPULO</Text>
        <Text style={styles.subtitle}>EL PATRÓN DE DISCIPULADO DE LOS TRES TERCIOS</Text>
        <Text style={estilosIndividual.tableHeader}>REUNIRSE</Text>
        <View style={estilosIndividual.tableContainer}>
          <Text style={styles.subtitle}>TIEMPO MUTUO</Text>
          <Text style={styles.paragraph}>• ¿Cómo te sientes?</Text>
          <Text style={styles.paragraph}>• 6 Emociones</Text>
          <Text style={styles.paragraph}>• Feliz, emocionado, amoroso, asustado, triste y enojado.</Text>

          <Text style={styles.subtitle}>ADORACIÓN</Text>
          <Text style={styles.paragraph}>Cantos | Oración | Cena del Señor | Ofrenda</Text>

          <Text style={styles.subtitle}>APOYO AMOROSO</Text>
          <Text style={styles.paragraph}>
            ¿Cómo te fue con "LO HARÉ" con respecto al último mensaje y también con respecto a las metas que fijaste de
            orar, compartir y entrenar a otros?
          </Text>

          <Text style={styles.subtitle}>VISIÓN</Text>
          <Text style={styles.paragraph}>
            Mantenga el corazón y la visión de Dios frente a las personas desde Génesis hasta Apocalipsis o ejemplos de
            personas comunes que siguen a Jesús.
          </Text>
        </View>
      </View>

      {/* Segundo Tercio - CRECER */}
      <View style={styles.contentContainer}>
        <Text style={estilosIndividual.tableHeader}>CRECER</Text>
        <View style={estilosIndividual.tableContainer}>
          <Text style={styles.subtitle}>NUEVA LECCIÓN BÍBLICA</Text>
          <Text style={styles.paragraph}>Abrir la palabra de Dios basada en el descubrimiento</Text>

          <Text style={styles.subtitle}>MÉTODO ESPADA</Text>
          <Image source={require("../../assets/fotos/herramienta007.png")} style={estilosIndividual.toolImage} />
          <Text style={styles.paragraph}>¿Qué aprendemos acerca de Dios?</Text>
          <Text style={styles.paragraph}>¿Qué aprendemos sobre el hombre?</Text>
          <Text style={styles.paragraph}>¿Hay alguna orden que obedecer?</Text>
          <Text style={styles.paragraph}>¿Hay algún ejemplo a seguir?</Text>

          <Text style={styles.paragraph}>Termina con "Esta semana LO HARÉ"</Text>
        </View>
      </View>

      {/* Tercer Tercio - IR */}
      <View style={styles.contentContainer}>
        <Text style={estilosIndividual.tableHeader}>IR</Text>
        <View style={estilosIndividual.tableContainer}>
          <Text style={styles.subtitle}>PRACTIQUE EL DISCIPULADO</Text>
          <Text style={styles.paragraph}>Practicar en 1 minuto:</Text>
          <Text style={styles.paragraph}>• Los 4 campos y su significado</Text>
          <Text style={styles.paragraph}>• Visión Global Gen-Apoc.</Text>
          <Text style={styles.paragraph}>• Mapa Relacional</Text>
          <Text style={styles.paragraph}>• Persona/casa de Paz</Text>
          <Text style={styles.paragraph}>• Testimonio 15 segundos</Text>
          <Text style={styles.paragraph}>• Los 3 Círculos</Text>
          <Text style={styles.paragraph}>• El 411</Text>
          <Text style={styles.paragraph}>• Tres Tercios</Text>
          <Text style={styles.paragraph}>• Círculo Saludable</Text>
          <Text style={styles.paragraph}>• Guía de la Mano Izquierda</Text>
          <Text style={styles.paragraph}>• Herramientas del Liderazgo</Text>

          <Text style={styles.subtitle}>FIJE METAS</Text>
          <Text style={styles.paragraph}>
            Ore con valentía ............ para que el Espíritu Santo muestre a cada persona lo que debe perseguir.
          </Text>
          <Text style={styles.paragraph}>• ¿Con quién orarás esta semana?</Text>
          <Text style={styles.paragraph}>• ¿Con quién compartirás esta semana?</Text>
          <Text style={styles.paragraph}>• ¿A quién entrenarás esta semana?</Text>
          <Text style={styles.paragraph}>• ¿Quién puede reproducir esto y comenzar un nuevo grupo?</Text>
        </View>
      </View>
    </>
  )

  return (
    <ImageBackground source={require("../../assets/icons/fondo1.jpg")} style={styles.container}>
      <View>
        <Image source={require("../../assets/marcadores/campo3.png")} style={styles.marker} />
      </View>
      <ScrollView>{showOnlyNewContent ? newContent : newContent}</ScrollView>
    </ImageBackground>
  )
}

const estilosIndividual = StyleSheet.create({
  tableContainer: {
    borderWidth: 1,
    borderColor: "#1C4F7C",
    padding: 15,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  tableHeader: {
    fontSize: 20,
    textAlign: "center",
    color: "#1C4F7C",
    borderWidth: 1,
    borderColor: "#1C4F7C",
    fontFamily: "Lora-Bold",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  toolImage: {
    marginBottom: 8,
    width: width - 65, // Se ajusta el ancho al contenedor con margen de 8 en cada lado (8 * 2)
    height: (width - 40) / 1.1, // Ajusta la altura automáticamente manteniendo la proporción
    borderRadius: 10,
  },
})
