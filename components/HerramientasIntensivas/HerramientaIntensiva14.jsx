"use client";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
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
    navigation.navigate("WordIntensiva14");
  };

  const newContent = (
    <>
      <View style={styles.videoPlayerContainer}>
        <VideoPlayer source={require("../../assets/videos/Intensiva14.mp4")} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={openPowerPoint}>
          <Text style={styles.buttonText}>PowerPoint</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={openWord}>
          <Text style={styles.buttonText}>Word</Text>
        </TouchableOpacity>
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
