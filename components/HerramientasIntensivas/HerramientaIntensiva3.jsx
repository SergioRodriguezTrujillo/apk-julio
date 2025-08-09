import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { documentosStyles as styles } from "../DocumentosStyles";
import VideoPlayer from "../VideoPlayer";

const { width, height } = Dimensions.get("window");

export default function HerramientaIntensiva3({ route }) {
  const { showOnlyNewContent, showOnlyOriginalContent } = route.params || {};
  const navigation = useNavigation();

  const openPowerPoint = () => {
    navigation.navigate("LessonPowerPoint", {
      lessonName: "",
    });
  };

  const openWord = () => {
    navigation.navigate("WordIntensiva3");
  };

  const newContent = (
    <>
      <View style={styles.videoPlayerContainer}>
        <VideoPlayer source={require("../../assets/videos/Intensiva3.mp4")} />
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
        <Text style={styles.subtitle}>Hierro con hierro</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>
            • <Text style={styles.keyword}>PROPOSITO</Text> Soluciona problemas
            y trabas
          </Text>
          <Text style={styles.listItem}>
            • <Text style={styles.keyword}>ENFOQUE</Text> Gente perdida
          </Text>
          <Text style={styles.listItem}>
            • <Text style={styles.keyword}>Regla</Text> Atacar el plan no a la
            persona o el proceso.
          </Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.keyword}>1 REPORTES (20min)</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>
            • <Text style={styles.keyword}>¿Has pasado tiempo con Dios?</Text>{" "}
            (Si/No)
          </Text>
          <Text style={styles.listItem}>
            •{" "}
            <Text style={styles.keyword}>
              ¿Hay algún conflicto con tu equipo?
            </Text>{" "}
            (conflictos interpersonales)
          </Text>
          <Text style={styles.listItem}>
            • <Text style={styles.keyword}>Visión</Text> (¿A dónde Dios te esta
            mandando?)
          </Text>
          <Text style={styles.listItem}>
            •{" "}
            <Text style={styles.keyword}>
              ¿Cuántas veces comparten el evangelio como equipo?
            </Text>
          </Text>
          <Text style={styles.listItem}>
            •{" "}
            <Text style={styles.keyword}>
              ¿Cuántas personas entrenaron en los últimos tres meses?
            </Text>
          </Text>
          <Text style={styles.listItem}>
            •{" "}
            <Text style={styles.keyword}>
              ¿Qué herramienta estas usando en cada campo?
            </Text>
          </Text>
        </View>
        <Image
          source={require("../../assets/fotos/HI31.png")}
          style={estilosIndividual.toolImage}
        />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.list}>
          <Text style={styles.listItem}>
            • <Text style={styles.keyword}>Habla de tu trabajo local</Text>{" "}
            (Usar mapa Generacional y planilla de M.A.M.L)
          </Text>
          <Text style={styles.listItem}>
            • <Text style={styles.keyword}>Problemas y trabas</Text> (¿Cuales
            son los problemas y trabas que no te permiten multiplicar lideres y
            grupos?)
          </Text>
        </View>
        <Image
          source={require("../../assets/fotos/HI32.png")}
          style={estilosIndividual.toolImage}
        />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.list}>
          <Text style={styles.keyword}>2 ALENTAR (5 MIN)</Text>
          <Text style={styles.paragraph}>
            <Text style={styles.keyword}>
              3 PREGUNTAS PARA ACLARAR (10 MIN)
            </Text>{" "}
            (Observación del trabajo usar Mapa Generacional y hoja M.A.M.L)
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.keyword}>4 CONCLUSIONES (5 MIN)</Text>{" "}
            (Discutir: barreras encontradas y posibles soluciones)
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.keyword}>
              5 COMPARTIR 2 O 3 ACCIONES A TOMAR (5 MIN)
            </Text>{" "}
            (Compartir acciones sacadas del punto 4 ¿A quien vas a rendir
            cuentas?)
          </Text>
          <Text style={styles.keyword}>6 ORAR (5 MIN)</Text>
        </View>
        <Image
          source={require("../../assets/fotos/HI33.png")}
          style={estilosIndividual.toolImage}
        />
      </View>
    </>
  );

  return (
    <ImageBackground
      source={require("../../assets/icons/fondo1.jpg")}
      style={styles.container}
    >
      <ScrollView>{showOnlyNewContent ? newContent : newContent}</ScrollView>
    </ImageBackground>
  );
}

const estilosIndividual = StyleSheet.create({
  toolImage: {
    width: width - 32,
    height: width - 70,
    borderRadius: 10,
    marginBottom: 8,
  },
});
