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

export default function HerramientaIntensiva1({ route }) {
  const { showOnlyNewContent, showOnlyOriginalContent } = route.params || {};
  const navigation = useNavigation();

  const openPowerPoint = () => {
    navigation.navigate("LessonPowerPoint", {
      lessonName: "",
    });
  };

  const openWord = () => {
    navigation.navigate("WordIntensiva1");
  };

  const newContent = (
    <>
      <View style={styles.videoPlayerContainer}>
        <VideoPlayer source={require("../../assets/videos/Intensiva1.mp4")} />
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
        <Image
          source={require("../../assets/fotos/HI11.png")}
          style={estilosIndividual.toolImage1}
        />
      </View>

      <View style={styles.contentContainer}>
        <Image
          source={require("../../assets/fotos/HI12.png")}
          style={estilosIndividual.toolImage2}
        />
      </View>

      <View style={styles.contentContainer}>
        <Image
          source={require("../../assets/fotos/HI13.png")}
          style={estilosIndividual.toolImage3}
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
  toolImage1: {
    width: width - 32,
    height: width + 40,
    borderRadius: 10,
    marginBottom: 8,
  },
  toolImage2: {
    width: width - 32,
    height: width - 70,
    borderRadius: 10,
    marginBottom: 8,
  },
  toolImage3: {
    width: width - 32,
    height: width - 30,
    borderRadius: 10,
    marginBottom: 8,
  },
});
