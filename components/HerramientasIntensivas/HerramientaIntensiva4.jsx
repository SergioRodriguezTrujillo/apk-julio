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

export default function HerramientaIntensiva4({ route }) {
  const { showOnlyNewContent, showOnlyOriginalContent } = route.params || {};
  const navigation = useNavigation();

  const openPowerPoint = () => {
    navigation.navigate("LessonPowerPoint", {
      lessonName: "",
    });
  };

  const openWord = () => {
    navigation.navigate("WordIntensiva4");
  };

  const newContent = (
    <>
      <View style={styles.videoPlayerContainer}>
        <VideoPlayer source={require("../../assets/videos/Intensiva4.mp4")} />
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
        <Text style={styles.title}>Manos Guías</Text>
        <Image
          source={require("../../assets/fotos/HI41.png")}
          style={estilosIndividual.toolImage1}
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>IGLESIA SALUDABLE</Text>
        <Image
          source={require("../../assets/fotos/HI42.png")}
          style={estilosIndividual.toolImage2}
        />
        <Text style={styles.subtitle}>Mano Izquierda</Text>
        <View style={styles.list}>
          <Text style={estilosIndividual.keyword}>1</Text>
          <Text style={styles.listItem}>• 1 Corintios 12:12-31</Text>
          <Text style={styles.listItem}>• Efesios 5:22-23</Text>
          <Text style={styles.listItem}>• Hechos 2:41</Text>
          <Text style={styles.listItem}>• 1 Pedro 2:4-10</Text>
        </View>
        <View style={styles.list}>
          <Text style={estilosIndividual.keyword}>2</Text>
          <Text style={styles.listItem}>• 1 Hechos 2:36-47</Text>
        </View>
        <View style={styles.list}>
          <Text style={estilosIndividual.keyword}>3</Text>
          <Text style={styles.listItem}>• Colosenses 4:15</Text>
          <Text style={styles.listItem}>• Filemón 1:1-2</Text>
          <Text style={styles.listItem}>• Hechos 16:40</Text>
          <Text style={styles.listItem}>• Hechos 19:9</Text>
        </View>
        <View style={styles.list}>
          <Text style={estilosIndividual.keyword}>4</Text>
          <Text style={styles.listItem}>• Hechos 2:46</Text>
        </View>
        <View style={styles.list}>
          <Text style={estilosIndividual.keyword}>5</Text>
          <Text style={styles.listItem}>• 1 Corintios 10:31</Text>
          <Text style={styles.listItem}>• Hebreos 10:24-25</Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>IGLESIA MADURA</Text>
        <Image
          source={require("../../assets/fotos/HI43.png")}
          style={estilosIndividual.toolImage2}
        />
        <Text style={styles.subtitle}>Mano Derecha</Text>
        <View style={styles.list}>
          <Text style={estilosIndividual.keyword}>1</Text>
          <Text style={styles.listItem}>• Efesios 1:22-23</Text>
        </View>
        <View style={styles.list}>
          <Text style={estilosIndividual.keyword}>2</Text>
          <Text style={styles.listItem}>• 2 Timoteo 3:16-17</Text>
          <Text style={styles.listItem}>• Juan 14:26</Text>
        </View>
        <View style={styles.list}>
          <Text style={estilosIndividual.keyword}>3</Text>
          <Text style={styles.listItem}>• Hechos 6:2-3</Text>
          <Text style={styles.listItem}>• Tito 1:6-7</Text>
          <Text style={styles.listItem}>• 1Pedro 2:9</Text>
        </View>
        <View style={styles.list}>
          <Text style={estilosIndividual.keyword}>4</Text>
          <Text style={styles.keyword}>4.1 Autogobernable</Text>
          <Text style={styles.listItem}>• Hechos 6:1-7</Text>
          <Text style={styles.listItem}>• Hechos 11:29</Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.keyword}>4.2 Autosustentable</Text>
          <Text style={styles.listItem}>• Hechos 2:44-46</Text>
          <Text style={styles.listItem}>• Hechos 4:34-35</Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.keyword}>4.3 Autorreproducible</Text>
          <Text style={styles.listItem}>• 1 Tesalonicenses 1:7-8</Text>
          <Text style={styles.listItem}>• Hechos 16:5</Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.keyword}>4.4 Autocorregible</Text>
          <Text style={styles.listItem}>• 2 Timoteo 3:16-17</Text>
        </View>
        <View style={styles.list}>
          <Text style={estilosIndividual.keyword}>5</Text>
          <Text style={styles.listItem}>• Efesios 4:11-12</Text>
        </View>
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
    height: width + 120,
    borderRadius: 10,
    marginBottom: 8,
  },
  toolImage2: {
    width: width - 32,
    height: width + 10,
    borderRadius: 10,
    marginBottom: 8,
  },
  keyword: {
    fontFamily: "Lora-SemiBoldItalic",
    textTransform: "capitalize",
    color: "#003366",
    fontSize: 20,
  },
});
