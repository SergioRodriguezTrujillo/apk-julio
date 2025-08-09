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
import { useNavigation } from "@react-navigation/native";
import { documentosStyles as styles } from "../DocumentosStyles";
import VideoPlayer from "../VideoPlayer";

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
    navigation.navigate("WordIntensiva8");
  };

  const newContent = (
    <>
      <View style={styles.videoPlayerContainer}>
        <VideoPlayer source={require("../../assets/videos/Intensiva8.mp4")} />
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
        <Text style={styles.title}>
          Efesios 4:11 Movilización desde la etapa numero 4
        </Text>
        <Image
          source={require("../../assets/fotos/HI81.png")}
          style={estilosIndividual.toolImage1}
        />
      </View>

      <View style={styles.contentContainer}>
        <Image
          source={require("../../assets/fotos/HI82.png")}
          style={estilosIndividual.toolImage2}
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={estilosIndividual.subtitle}>
          Entrenamiento Básico 3 Toques
        </Text>

        <Image
          source={require("../../assets/fotos/HI83.png")}
          style={estilosIndividual.toolImage3}
        />
        <Text style={styles.subtitle}>
          Intensivo 4 días Intermedio{" "}
          <Text style={estilosIndividual.mayuscula}>H.C.H</Text>
        </Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>fase 1</Text>
        <Text style={estilosIndividual.subtitle}>Multiplicación</Text>
        <Image
          source={require("../../assets/fotos/HI84.png")}
          style={estilosIndividual.toolImage4}
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>fase 2</Text>
        <Text style={estilosIndividual.subtitle}>
          Fundamentos Desarrollo Pastoral
        </Text>
        <Image
          source={require("../../assets/fotos/HI85.png")}
          style={estilosIndividual.toolImage5}
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>fase 3</Text>
        <Text style={estilosIndividual.subtitle}>
          Confesiones Desarrollo Doctrina
        </Text>
        <Image
          source={require("../../assets/fotos/HI85.png")}
          style={estilosIndividual.toolImage5}
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
  toolImage1: {
    width: width - 32,
    height: width - 60,
    borderRadius: 10,
    marginBottom: 8,
  },
  toolImage2: {
    width: width - 32,
    height: width - 80,
    borderRadius: 10,
    marginBottom: 8,
  },
  toolImage3: {
    width: width - 32,
    height: width - 40,
    borderRadius: 10,
    marginBottom: 8,
  },
  toolImage4: {
    width: width - 32,
    height: width - 32,
    borderRadius: 10,
    marginBottom: 8,
  },
  toolImage5: {
    width: width - 32,
    height: width - 100,
    borderRadius: 10,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 22,
    fontFamily: "Lora-SemiBold",
    textTransform: "capitalize",
    textAlign: "center",
    color: "#003366",
    marginBottom: 8,
  },
  mayuscula: {
    textTransform: "uppercase",
    fontSize: 22,
    fontFamily: "Lora-SemiBold",
    textAlign: "center",
    color: "#003366",
    marginBottom: 8,
  },
});
