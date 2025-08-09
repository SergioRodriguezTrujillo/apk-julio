"use client";
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
import VideoPlayer from "../VideoPlayer";
import { useNavigation } from "@react-navigation/native";
import { documentosStyles as styles } from "../DocumentosStyles";

const { width, height } = Dimensions.get("window");

export default function Leccion1({ route }) {
  const { showOnlyNewContent } = route.params || {};
  const navigation = useNavigation();

  const openPowerPoint = () => {
    navigation.navigate("LessonPowerPoint", {
      lessonName: "",
    });
  };

  const openWord = () => {
    navigation.navigate("WordIntensiva11");
  };

  const newContent = (
    <>
      <View style={styles.videoPlayerContainer}>
        <VideoPlayer source={require("../../assets/videos/Intensiva11.mp4")} />
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
        <Text style={styles.title}>Herramienta 1-3-9</Text>
        <Text style={styles.subtitle}>Principio: 2 Timoteo 2:2</Text>

        <Image
          source={require("../../assets/fotos/HI011.png")}
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
      <ScrollView>{newContent}</ScrollView>
    </ImageBackground>
  );
}

const estilosIndividual = StyleSheet.create({
  toolImage: {
    width: width - 32,
    height: width + 345,
    borderRadius: 10,
    marginBottom: 8,
  },
});
