"use client"

import { useState, useRef, useEffect } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Modal, StatusBar } from "react-native"
import { Video } from "expo-av"
import Slider from "@react-native-community/slider"
import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import * as ScreenOrientation from "expo-screen-orientation"

const { width, height } = Dimensions.get("window")

export default function VideoPlayer({ source, style }) {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [position, setPosition] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [isSliding, setIsSliding] = useState(false)
  const [volume, setVolume] = useState(1.0)
  const [showVolumeSlider, setShowVolumeSlider] = useState(false)

  useEffect(() => {
    let timer
    if (showControls && isPlaying) {
      timer = setTimeout(() => {
        setShowControls(false)
      }, 3000)
    }
    return () => clearTimeout(timer)
  }, [showControls, isPlaying])

  const togglePlayPause = async () => {
    if (videoRef.current) {
      try {
        if (isPlaying) {
          await videoRef.current.pauseAsync()
          setIsPlaying(false)
        } else {
          await videoRef.current.playAsync()
          setIsPlaying(true)
        }
        setShowControls(true)
      } catch (error) {
        console.error("Error toggling play/pause:", error)
      }
    }
  }

  const skipForward = async () => {
    if (videoRef.current) {
      try {
        const status = await videoRef.current.getStatusAsync()
        if (status.isLoaded) {
          const newPosition = Math.min(status.positionMillis + 10000, status.durationMillis)
          await videoRef.current.setPositionAsync(newPosition)
          setPosition(newPosition)
        }
        setShowControls(true)
      } catch (error) {
        console.error("Error skipping forward:", error)
      }
    }
  }

  const skipBackward = async () => {
    if (videoRef.current) {
      try {
        const status = await videoRef.current.getStatusAsync()
        if (status.isLoaded) {
          const newPosition = Math.max(status.positionMillis - 10000, 0)
          await videoRef.current.setPositionAsync(newPosition)
          setPosition(newPosition)
        }
        setShowControls(true)
      } catch (error) {
        console.error("Error skipping backward:", error)
      }
    }
  }

  const toggleMute = async () => {
    if (videoRef.current) {
      try {
        const newMutedState = !isMuted
        await videoRef.current.setIsMutedAsync(newMutedState)
        setIsMuted(newMutedState)
        setShowControls(true)
      } catch (error) {
        console.error("Error toggling mute:", error)
      }
    }
  }

  const handleVolumeChange = async (newVolume) => {
    if (videoRef.current) {
      try {
        await videoRef.current.setVolumeAsync(newVolume)
        setVolume(newVolume)
        setIsMuted(newVolume === 0)
        setShowControls(true)
      } catch (error) {
        console.error("Error changing volume:", error)
      }
    }
  }

  const toggleFullscreen = async () => {
    try {
      if (!isFullscreen) {
        // Entrar a pantalla completa - cambiar a landscape
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
        setIsFullscreen(true)
      } else {
        // Salir de pantalla completa - volver a portrait
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
        setIsFullscreen(false)
      }
      setShowControls(true)
    } catch (error) {
      console.error("Error toggling fullscreen:", error)
      // Fallback si no se puede cambiar la orientación
      setIsFullscreen(!isFullscreen)
      setShowControls(true)
    }
  }

  const handleVideoPress = () => {
    if (isPlaying) {
      setShowControls(!showControls)
    } else {
      setShowControls(true)
    }
  }

  const onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded && !isSliding) {
      setPosition(status.positionMillis || 0)
      setDuration(status.durationMillis || 0)
      setIsPlaying(status.isPlaying || false)
    }
  }

  const onSliderValueChange = async (value) => {
    if (videoRef.current && duration > 0) {
      try {
        const newPosition = value * duration
        setPosition(newPosition)
      } catch (error) {
        console.error("Error updating slider:", error)
      }
    }
  }

  const onSlidingStart = () => {
    setIsSliding(true)
    setShowControls(true)
  }

  const onSlidingComplete = async (value) => {
    if (videoRef.current && duration > 0) {
      try {
        const newPosition = value * duration
        await videoRef.current.setPositionAsync(newPosition)
        setPosition(newPosition)
        setIsSliding(false)
      } catch (error) {
        console.error("Error seeking video:", error)
        setIsSliding(false)
      }
    }
  }

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000)
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    }
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return "volume-mute-outline"
    if (volume < 0.3) return "volume-low-outline"
    if (volume < 0.7) return "volume-medium-outline"
    return "volume-high-outline"
  }

  const renderVideoPlayer = () => (
    <View style={[styles.videoContainer, isFullscreen && styles.fullscreenVideoContainer, !isFullscreen && style]}>
      <TouchableOpacity activeOpacity={1} onPress={handleVideoPress} style={styles.videoWrapper}>
        <Video
          ref={videoRef}
          source={source}
          rate={1.0}
          volume={volume}
          isMuted={isMuted}
          resizeMode="contain"
          shouldPlay={isPlaying}
          isLooping
          style={styles.video}
          onPlaybackStatusUpdate={onPlaybackStatusUpdate}
          progressUpdateIntervalMillis={100}
        />

        {/* YouTube-style controls overlay */}
        {showControls && (
          <View style={styles.controlsOverlay}>
            {/* Main controls bar */}
            <LinearGradient colors={["transparent", "rgba(0,0,0,0.8)"]} style={styles.controlsGradient}>
              <View style={styles.progressSection}>
                <Slider
                  style={styles.youtubeProgressBar}
                  minimumValue={0}
                  maximumValue={1}
                  value={duration > 0 ? position / duration : 0}
                  onValueChange={onSliderValueChange}
                  onSlidingStart={onSlidingStart}
                  onSlidingComplete={onSlidingComplete}
                  minimumTrackTintColor="#FFF"
                  maximumTrackTintColor="rgba(255,255,255,0.8)"
                  thumbTintColor="#FFF"
                  thumbStyle={styles.progressThumb}
                  trackStyle={styles.progressTrack}
                />
              </View>
              <View style={styles.controlsBar}>
                {/* Left side controls */}
                <View style={styles.leftControls}>
                  <TouchableOpacity onPress={togglePlayPause} style={styles.youtubeButton}>
                    <Ionicons name={isPlaying ? "pause" : "play"} size={isFullscreen ? 32 : 28} color="white" />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={skipBackward} style={styles.youtubeButton}>
                    <Ionicons name="play-back" size={isFullscreen ? 28 : 24} color="white" />
                    <Text style={[styles.skipText, isFullscreen && styles.skipTextFullscreen]}>10</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={skipForward} style={styles.youtubeButton}>
                    <Ionicons name="play-forward" size={isFullscreen ? 28 : 24} color="white" />
                    <Text style={[styles.skipText, isFullscreen && styles.skipTextFullscreen]}>10</Text>
                  </TouchableOpacity>

                  {/* Volume control */}
                  <View style={styles.volumeContainer}>
                    <TouchableOpacity
                      onPress={toggleMute}
                      onLongPress={() => setShowVolumeSlider(!showVolumeSlider)}
                      style={styles.youtubeButton}
                    >
                      <Ionicons name={getVolumeIcon()} size={isFullscreen ? 28 : 24} color="white" />
                    </TouchableOpacity>

                    {showVolumeSlider && (
                      <View
                        style={[styles.volumeSliderContainer, isFullscreen && styles.volumeSliderContainerFullscreen]}
                      >
                        <Slider
                          style={styles.volumeSlider}
                          minimumValue={0}
                          maximumValue={1}
                          value={volume}
                          onValueChange={handleVolumeChange}
                          minimumTrackTintColor="white"
                          maximumTrackTintColor="rgba(255,255,255,0.3)"
                          thumbTintColor="white"
                        />
                      </View>
                    )}
                  </View>

                  {/* Time display */}
                  <Text style={[styles.youtubeTimeText, isFullscreen && styles.youtubeTimeTextFullscreen]}>
                    {formatTime(position)} / {formatTime(duration)}
                  </Text>
                </View>

                {/* Right side controls */}
                <View style={styles.rightControls}>
                  <TouchableOpacity onPress={toggleFullscreen} style={styles.youtubeButton}>
                    <Ionicons
                      name={isFullscreen ? "contract-outline" : "expand-outline"}
                      size={isFullscreen ? 28 : 24}
                      color="white"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </LinearGradient>
          </View>
        )}
      </TouchableOpacity>
    </View>
  )

  return (
    <>
      {/* Normal video player */}
      {!isFullscreen && renderVideoPlayer()}

      {/* Fullscreen modal */}
      <Modal
        visible={isFullscreen}
        transparent={true}
        animationType="fade"
        onRequestClose={toggleFullscreen}
        supportedOrientations={["landscape", "portrait"]}
      >
        <StatusBar hidden={true} />
        {renderVideoPlayer()}
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  videoContainer: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.8)",
    overflow: "hidden",
    marginBottom: 16,
    position: "relative",
  },
  fullscreenVideoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 9999,
    borderRadius: 0,
    marginBottom: 0,
    backgroundColor: "#000000cc",
  },
  videoWrapper: {
    flex: 1,
    position: "relative",
  },
  video: {
    width: "100%",
    height: "101%",
  },
  controlsOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  youtubeProgressBar: {
    width: "100%",
    height: 20,
  },
  progressThumb: {
    width: 14,
    height: 14,
    backgroundColor: "#EEE",
  },
  progressTrack: {
    height: 4,
    borderRadius: 2,
  },
  controlsGradient: {
    paddingTop: 20,
    paddingBottom: 8,
    paddingHorizontal: 8,
  },
  controlsBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftControls: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  rightControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  youtubeButton: {
    padding: 8,
    paddingTop: 0,
    marginHorizontal: 4,
    position: "relative",
  },
  skipText: {
    position: "absolute",
    bottom: 0,
    right: 12,
    fontSize: 10,
    color: "white",
    fontWeight: "bold",
  },
  skipTextFullscreen: {
    fontSize: 12,
    right: 14,
  },
  volumeContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  volumeSliderContainer: {
    position: "absolute",
    left: 40,
    bottom: 0,
    width: 100,
    height: 40,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  volumeSliderContainerFullscreen: {
    width: 120,
    height: 45,
    left: 45,
  },
  volumeSlider: {
    width: 80,
    height: 20,
  },
  youtubeTimeText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 12,
    fontFamily: "monospace",
  },
  youtubeTimeTextFullscreen: {
    fontSize: 16,
    marginLeft: 16,
  },
  progressSection: {
    marginBottom: 8,
  },
})
