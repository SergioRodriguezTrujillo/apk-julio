import { StyleSheet, Dimensions, ScrollView, ImageBackground } from "react-native"
import VideoPlayer from "./VideoPlayer"

const { width, height } = Dimensions.get("window")

export default function TestimoniosScreen() {
  return (
    <ImageBackground source={require("../assets/icons/fondo1.jpg")} style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <VideoPlayer source={require("../assets/videos/Testimonio1.mp4")} style={styles.videoPlayerContainer} />
        <VideoPlayer source={require("../assets/videos/Testimonio2.mp4")} style={styles.videoPlayerContainer} />
        <VideoPlayer source={require("../assets/videos/Testimonio3.mp4")} style={styles.videoPlayerContainer} />
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  scrollContainer: {
    flex: 1,
  },

})
