"use client"

import { useState, useRef, useEffect } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  Easing,
  Vibration,
  Platform,
} from "react-native"

const { width, height } = Dimensions.get("window")

const PasswordDialog = ({ isVisible, onClose, onSubmit }) => {
  const [password, setPassword] = useState(["", "", "", "", ""])
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const inputRefs = useRef([])

  // Animaciones
  const overlayOpacity = useRef(new Animated.Value(0)).current
  const dialogScale = useRef(new Animated.Value(0.3)).current
  const dialogOpacity = useRef(new Animated.Value(0)).current
  const shakeAnimation = useRef(new Animated.Value(0)).current
  const loadingRotation = useRef(new Animated.Value(0)).current
  const successScale = useRef(new Animated.Value(0)).current
  const inputAnimations = useRef(password.map(() => new Animated.Value(1))).current
  const errorOpacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (isVisible) {
      showDialog()
    } else {
      hideDialog()
    }
  }, [isVisible])

  useEffect(() => {
    if (isLoading) {
      startLoadingAnimation()
    } else {
      stopLoadingAnimation()
    }
  }, [isLoading])

  const showDialog = () => {
    setPassword(["", "", "", "", ""])
    setError("")
    setIsSuccess(false)
    setIsLoading(false)

    Animated.parallel([
      Animated.timing(overlayOpacity, {
        toValue: 1,
        duration: 300,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.timing(dialogOpacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.spring(dialogScale, {
          toValue: 1,
          tension: 100,
          friction: 8,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      // Focus en el primer input después de la animación
      setTimeout(() => {
        inputRefs.current[0]?.focus()
      }, 100)
    })
  }

  const hideDialog = () => {
    Animated.parallel([
      Animated.timing(overlayOpacity, {
        toValue: 0,
        duration: 250,
        easing: Easing.in(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(dialogScale, {
        toValue: 0.3,
        duration: 250,
        easing: Easing.in(Easing.back(1.7)),
        useNativeDriver: true,
      }),
      Animated.timing(dialogOpacity, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start()
  }

  const startLoadingAnimation = () => {
    const spin = () => {
      loadingRotation.setValue(0)
      Animated.timing(loadingRotation, {
        toValue: 1,
        duration: 600,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(spin)
    }
    spin()
  }

  const stopLoadingAnimation = () => {
    loadingRotation.stopAnimation()
  }

  const animateInputFocus = (index) => {
    Animated.spring(inputAnimations[index], {
      toValue: 1.1,
      tension: 300,
      friction: 10,
      useNativeDriver: true,
    }).start()
  }

  const animateInputBlur = (index) => {
    Animated.spring(inputAnimations[index], {
      toValue: 1,
      tension: 300,
      friction: 10,
      useNativeDriver: true,
    }).start()
  }

  const showError = (message) => {
    setError(message)

    // Vibración en dispositivos móviles
    if (Platform.OS !== "web") {
      Vibration.vibrate([0, 100, 50, 100])
    }

    // Animación de shake
    const shakeSequence = [
      Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 0, duration: 50, useNativeDriver: true }),
    ]

    // Animación de error en inputs
    const inputShakes = inputAnimations.map((anim) =>
      Animated.sequence([
        Animated.timing(anim, { toValue: 0.9, duration: 100, useNativeDriver: true }),
        Animated.spring(anim, { toValue: 1, tension: 300, friction: 10, useNativeDriver: true }),
      ]),
    )

    // Mostrar error con fade in
    Animated.timing(errorOpacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start()

    Animated.parallel([Animated.sequence(shakeSequence), ...inputShakes]).start()

    // Ocultar error después de 3 segundos
    setTimeout(() => {
      Animated.timing(errorOpacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => setError(""))
    }, 3000)
  }

  const showSuccess = () => {
    setIsSuccess(true)

    Animated.sequence([
      Animated.spring(successScale, {
        toValue: 1.2,
        tension: 200,
        friction: 10,
        useNativeDriver: true,
      }),
      Animated.spring(successScale, {
        toValue: 1,
        tension: 200,
        friction: 10,
        useNativeDriver: true,
      }),
    ]).start()

    setTimeout(() => {
      onSubmit(password.join(""))
      hideDialog()
    }, 1500)
  }

  const handleInputChange = (text, index) => {
    const newPassword = [...password]
    newPassword[index] = text
    setPassword(newPassword)

    if (text.length === 1 && index < 4) {
      inputRefs.current[index + 1]?.focus()
    }

    // Limpiar error si existe
    if (error) {
      Animated.timing(errorOpacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => setError(""))
    }
  }

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && index > 0 && password[index] === "") {
      const newPassword = [...password]
      newPassword[index - 1] = ""
      setPassword(newPassword)
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleSubmit = async () => {
    const fullPassword = password.join("")

    if (fullPassword.length !== 5) {
      showError("Por favor complete todos los campos")
      return
    }

    setIsLoading(true)

    // Simular verificación de contraseña - más rápido
    setTimeout(() => {
      setIsLoading(false)

      if (fullPassword === "12025") {
        showSuccess()
      } else {
        showError("Contraseña incorrecta")
      }
    }, 800)
  }

  const handleClose = () => {
    hideDialog()
    setTimeout(onClose, 250)
  }

  if (!isVisible) return null

  const spin = loadingRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  })

  return (
    <Animated.View style={[styles.overlay, { opacity: overlayOpacity }]}>
      <TouchableOpacity style={styles.overlayTouchable} activeOpacity={1} onPress={handleClose} />

      <Animated.View
        style={[
          styles.dialog,
          {
            transform: [{ scale: dialogScale }, { translateX: shakeAnimation }],
            opacity: dialogOpacity,
          },
        ]}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLine} />
          <Text style={styles.title}>Acceso Nivel Superior</Text>
          <Text style={styles.subtitle}>Ingrese su código de 5 dígitos</Text>
        </View>

        {/* Error Message */}
        {error ? (
          <Animated.View style={[styles.errorContainer, { opacity: errorOpacity }]}>
            <Text style={styles.errorText}>{error}</Text>
          </Animated.View>
        ) : null}

        {/* Success Message */}
        {isSuccess && (
          <Animated.View style={[styles.successContainer, { transform: [{ scale: successScale }] }]}>
            <Text style={styles.successText}>✓ Acceso Concedido</Text>
          </Animated.View>
        )}

        {/* Input Container */}
        <View style={styles.inputContainer}>
          {password.map((digit, index) => (
            <Animated.View
              key={index}
              style={[styles.inputWrapper, { transform: [{ scale: inputAnimations[index] }] }]}
            >
              <TextInput
                ref={(el) => (inputRefs.current[index] = el)}
                style={[
                  styles.input,
                  error ? styles.inputError : null,
                  digit ? styles.inputFilled : null,
                  isSuccess ? styles.inputSuccess : null,
                ]}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleInputChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                onFocus={() => animateInputFocus(index)}
                onBlur={() => animateInputBlur(index)}
                secureTextEntry
                editable={!isLoading && !isSuccess}
                selectTextOnFocus
              />
              {digit && !isSuccess && <View style={styles.inputDot} />}
            </Animated.View>
          ))}
        </View>

        {/* Button Container */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.confirmButton, (isLoading || isSuccess) && styles.buttonDisabled]}
            onPress={handleSubmit}
            disabled={isLoading || isSuccess}
            activeOpacity={0.8}
          >
            {isLoading ? (
              <Animated.View style={{ transform: [{ rotate: spin }] }}>
                <Text style={styles.loadingText}>⟳</Text>
              </Animated.View>
            ) : (
              <Text style={styles.confirmButtonText}>{isSuccess ? "✓ Verificado" : "Verificar"}</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.closeButton} onPress={handleClose} activeOpacity={0.8} disabled={isLoading}>
            <Text style={styles.closeButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Código de acceso requerido</Text>
        </View>
      </Animated.View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 40,
  },
  overlayTouchable: {
    ...StyleSheet.absoluteFillObject,
  },
  dialog: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    width: width * 0.85,
    maxWidth: 400,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  headerLine: {
    width: 40,
    height: 4,
    backgroundColor: "#16A6FA",
    borderRadius: 2,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontFamily: "Lora-Bold",
    color: "#2C3E50",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Lora-Regular",
    color: "#7F8C8D",
    textAlign: "center",
  },
  errorContainer: {
    backgroundColor: "#FFE6E6",
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    width: "100%",
    borderLeftWidth: 4,
    borderLeftColor: "#F4493C",
  },
  errorText: {
    color: "#F4493C",
    fontSize: 14,
    fontFamily: "Lora-SemiBold",
    textAlign: "center",
  },
  successContainer: {
    backgroundColor: "#E8F5E8",
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    width: "100%",
    borderLeftWidth: 4,
    borderLeftColor: "#27AE60",
  },
  successText: {
    color: "#27AE60",
    fontSize: 16,
    fontFamily: "Lora-Bold",
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 30,
    paddingHorizontal: 0,
  },
  inputWrapper: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  input: {
    width: 40,
    height: 50,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Lora-Bold",
    backgroundColor: "#FAFAFA",
    color: "transparent",
  },
  inputFilled: {
    borderColor: "#16A6FA",
    backgroundColor: "#F0F8FF",
  },
  inputError: {
    borderColor: "#F4493C",
    backgroundColor: "#FFF5F5",
  },
  inputSuccess: {
    borderColor: "#27AE60",
    backgroundColor: "#F0FFF0",
  },
  inputDot: {
    position: "absolute",
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#2C3E50",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: "#16A6FA",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    flex: 1,
    marginRight: 10,
    shadowColor: "#16A6FA",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonDisabled: {
    backgroundColor: "#BDC3C7",
    shadowOpacity: 0,
    elevation: 0,
  },
  confirmButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Lora-Bold",
  },
  loadingText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Lora-Bold",
  },
  closeButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#F4493C",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    flex: 1,
    marginLeft: 10,
  },
  closeButtonText: {
    fontFamily: "Lora-Bold",
    color: "#F4493C",
    fontSize: 16,
    textAlign: "center",
  },
  footer: {
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    fontFamily: "Lora-Regular",
    color: "#95A5A6",
  },
})

export default PasswordDialog
