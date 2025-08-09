import { View, Text, ScrollView, ImageBackground, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { documentosStyles as styles } from "../DocumentosStyles"
import VideoPlayer from "../VideoPlayer"

const { width, height } = Dimensions.get("window")

export default function Herramienta8({ route }) {
  const { showOnlyNewContent, showOnlyOriginalContent } = route.params || {}
  const navigation = useNavigation()

  const openPowerPoint = () => {
    navigation.navigate("PowerPoint", {
      toolName: "Her 8: El Círculo Saludable",
    })
  }

  const openWord = () => {
    navigation.navigate("WordHerramienta8")
  }

  const newContent = (
    <>
      <View style={styles.videoPlayerContainer}>
        <VideoPlayer source={require("../../assets/videos/Herramienta8.mp4")} style={styles.videoContainer} />
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
        <Text style={styles.title}>CÓMO JUNTAR DISCÍPULOS EN GRUPOS</Text>
        <Text style={styles.subtitle}>CÍRCULO SALUDABLE DE LA IGLESIA</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.keyword}>Nota:</Text> Vaya a Hechos 2: 36-47 y léalo con su grupo y dibuje un círculo
          punteado roto y deje que el grupo descubra lo que hizo la iglesia primitiva y coloque los símbolos dentro del
          círculo. Ejemplo, ¿qué vimos allí? Bautismo, oración, discipulado, amor, alabar a Dios, partir el pan, dar, la
          palabra de Dios y el liderazgo. 9 cosas y cuando una tiene todas las 9, puede dibujar un círculo sólido que
          indique que es una iglesia saludable.
        </Text>
        <Image source={require("../../assets/fotos/herramienta008.png")} style={estilosIndividual.toolImage} />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.subtitle}>Componentes del círculo saludable</Text>
        <View style={styles.list}>
          <View style={estilosIndividual.imageTextContainer}>
            <Image source={require("../../assets/fotos/element 01.png")} style={estilosIndividual.toolImage2} />
            <View style={estilosIndividual.textContainer}>
              <Text style={styles.keyword}>1. Jesucristo es Señor: Hechos 5:31</Text>
              <Text style={styles.paragraph}>• Historia: (Exaltación de Cristo) Filipenses 2:6-11</Text>
              <Text style={styles.paragraph}>• Adicional: Hechos 4:11-12</Text>
            </View>
          </View>
        </View>

        <View style={styles.list}>
          <View style={estilosIndividual.imageTextContainer}>
            <Image source={require("../../assets/fotos/element 02.png")} style={estilosIndividual.toolImage2} />
            <View View style={estilosIndividual.textContainer}>
              <Text style={styles.keyword}>2. Arrepiéntete y Cree: Mateo 4:17</Text>
              <Text style={styles.paragraph}>• Historia: (Zaqueo) Lucas 19:1-10</Text>
              <Text style={styles.paragraph}>• Adicional: Romanos 3:23 / 6:23 /</Text>
            </View>
          </View>
        </View>

        <View style={styles.list}>
          <View style={estilosIndividual.imageTextContainer}>
            <Image source={require("../../assets/fotos/element 03.png")} style={estilosIndividual.toolImage2} />
            <View style={estilosIndividual.textContainer}>
              <Text style={styles.keyword}>3. Se Bautizado: Mateo 28:19</Text>
              <Text style={styles.paragraph}>• Historia: (Felipe y el Etíope) Hechos 8:26-39</Text>
              <Text style={styles.paragraph}>• Adicional: Romanos 6:3-4, Mateo 3:13-16, Hechos 2:38</Text>
            </View>
          </View>
        </View>

        <View style={styles.list}>
          <View style={estilosIndividual.imageTextContainer}>
            <Image source={require("../../assets/fotos/element 04.png")} style={estilosIndividual.toolImage2} />
            <View style={estilosIndividual.textContainer}>
              <Text style={styles.keyword}>4. Espíritu Santo: Lucas 11:13</Text>
              <Text style={styles.paragraph}>• Historia: (La promesa del Espíritu Santo) Juan 14:12-26</Text>
              <Text style={styles.paragraph}>• Adicional: Mateo 3:11 / Hechos 11:16</Text>
            </View>
          </View>
        </View>

        <View style={styles.list}>
          <View style={estilosIndividual.imageTextContainer}>
            <Image source={require("../../assets/fotos/element 05.png")} style={estilosIndividual.toolImage2} />
            <View style={estilosIndividual.textContainer}>
              <Text style={styles.keyword}>5. Perseverar en la Doctrina: 1 Timoteo 4:13</Text>
              <Text style={styles.paragraph}>• Historia: (El alboroto en Tesalónica) Hechos 17:1-12</Text>
              <Text style={styles.paragraph}>• Adicional: 2 Timoteo 3:16/Romanos 15:4</Text>
            </View>
          </View>
        </View>

        <View style={styles.list}>
          <View style={estilosIndividual.imageTextContainer}>
            <Image source={require("../../assets/fotos/element 06.png")} style={estilosIndividual.toolImage2} />
            <View style={estilosIndividual.textContainer}>
              <Text style={styles.keyword}>6. Amor: Mateo 22:37-39</Text>
              <Text style={styles.paragraph}>• Historia: (El Buen Samaritano) Lucas 10:25-37</Text>
              <Text style={styles.paragraph}>
                • Adicional: Juan 15:13, 1 Corintios 13, Juan 13:34-35, Mateo 22:37-39, Juan 14:15/21:17
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.list}>
          <View style={estilosIndividual.imageTextContainer}>
            <Image source={require("../../assets/fotos/element 07.png")} style={estilosIndividual.toolImage2} />
            <View style={estilosIndividual.textContainer}>
              <Text style={styles.keyword}>7. Santa Cena: Lucas 22:19-20</Text>
              <Text style={styles.paragraph}>
                •Historia: (Institución de la Cena del Señor) Lucas 22:7-20/1 Corintios. 11:23-29
              </Text>
              <Text style={styles.paragraph}>• Adicional: Hechos 4:11-12</Text>
            </View>
          </View>
        </View>

        <View style={styles.list}>
          <View style={estilosIndividual.imageTextContainer}>
            <Image source={require("../../assets/fotos/element 08.png")} style={estilosIndividual.toolImage2} />
            <View style={estilosIndividual.textContainer}>
              <Text style={styles.keyword}>8. Orar: Mateo 6:9-13</Text>
              <Text style={styles.paragraph}>• Historia: (Jesús nos enseña a orar) Mateo 6:5-15</Text>
              <Text style={styles.paragraph}>• Adicional: Lucas 10:2</Text>
            </View>
          </View>
        </View>

        <View style={styles.list}>
          <View style={estilosIndividual.imageTextContainer}>
            <Image source={require("../../assets/fotos/element 09.png")} style={estilosIndividual.toolImage2} />
            <View style={estilosIndividual.textContainer}>
              <Text style={styles.keyword}>9. Señales y Prodigios: Mateo 10:8</Text>
              <Text style={styles.paragraph}>• Historia: (Jesús sana al siervo de un Centurión) Lucas 7:1-10</Text>
              <Text style={styles.paragraph}>• Adicional: 1 Juan 3:8/Marcos 1:34</Text>
            </View>
          </View>
        </View>

        <View style={styles.list}>
          <View style={estilosIndividual.imageTextContainer}>
            <Image source={require("../../assets/fotos/element 10.png")} style={estilosIndividual.toolImage2} />
            <View style={estilosIndividual.textContainer}>
              <Text style={styles.keyword}>10. Dar: Mateo 6:1-4</Text>
              <Text style={styles.paragraph}>• Historia: (La viuda que da) Marcos 12:41-44</Text>
              <Text style={styles.paragraph}>• Adicional: 2 Corintios 9:6-7, Mateo 6:1-4, Hechos 4:34-35</Text>
            </View>
          </View>
        </View>

        <View style={styles.list}>
          <View style={estilosIndividual.imageTextContainer}>
            <Image source={require("../../assets/fotos/element 11.png")} style={estilosIndividual.toolImage2} />
            <View style={estilosIndividual.textContainer}>
              <Text style={styles.keyword}>11. . Alabanza: Mateo 4:10</Text>
              <Text style={styles.paragraph}>• Historia: (Pablo y Silas) Hechos 16:25-34</Text>
              <Text style={styles.paragraph}>• Adicional: Santiago 5:13/Hebreos 13:15</Text>
            </View>
          </View>
        </View>

        <View style={styles.list}>
          <View style={estilosIndividual.imageTextContainer}>
            <Image source={require("../../assets/fotos/element 12.png")} style={estilosIndividual.toolImage2} />
            <View style={estilosIndividual.textContainer}>
              <Text style={styles.keyword}>12. Ve...Haz Discípulos: Mateo 28:19-20</Text>
              <Text style={styles.paragraph}>• Historia: (La Mujer Samaritana) Juan 4:4-42</Text>
              <Text style={styles.paragraph}>• Adicional: Lucas 10:1-11</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  )

  return (
    <ImageBackground source={require("../../assets/icons/fondo1.jpg")} style={styles.container}>
      <View>
        <Image source={require("../../assets/marcadores/campo4.png")} style={styles.marker} />
      </View>
      <ScrollView>{showOnlyNewContent ? newContent : newContent}</ScrollView>
    </ImageBackground>
  )
}

const estilosIndividual = StyleSheet.create({
  toolImage: {
    width: width - 28,
    height: width - 28,
    borderRadius: 10,
    marginBottom: 8,
  },
  toolImage2: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginTop: 20,
    marginRight: 10,
    resizeMode: "stretch",
  },
  imageTextContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#003366",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    marginLeft: -8,
  },
  textContainer: {
    flex: 1,
  },
})
