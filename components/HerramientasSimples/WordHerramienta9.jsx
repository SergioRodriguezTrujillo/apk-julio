import React from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import { documentosStyles as styles } from "../DocumentosStyles";

export default function WordHerramienta9() {
  return (
    <ImageBackground
      source={require("../../assets/icons/fondo1.jpg")}
      style={styles.container}
    >
      <View>
        <Image
          source={require("../../assets/marcadores/campo4.png")}
          style={styles.marker}
        />
      </View>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>
          HERRAMIENTA 9: GUIA MANO IZQUIERDA PARA INICIAR GRUPO DE IGLESIA
          </Text>
          <Text style={styles.paragraph}>
          Bienvenido al <Text style={styles.keyword}>MOVIMIENTO DE ALCANCE MUNDIAL <Text style={styles.mayuscula}>M.A.M</Text></Text>. El entrenamiento de multiplicación de los cuatro campos de un discipulado. <Text style={styles.keyword}>Herramienta número 9</Text> en tu manual de entrenamiento. En este entrenamiento de multiplicación, abordaremos el campo número cuatro: la cosecha y cómo juntar discípulos en grupos. En la lección anterior, estudiamos la herramienta número 8, el "círculo saludable" de la iglesia. Ahora presentaremos la herramienta número nueve: la guía de la mano izquierda para iniciar un grupo de iglesia. Esta es la lección número trece, página diecinueve de tu manual de entrenamiento.
          </Text>
          <Text style={styles.paragraph}>
          El campo cuatro es el campo de la cosecha, también llamado la iglesia. Durante el entrenamiento, pide a tus participantes que tomen una hoja de papel, que pongan su mano izquierda encima y marquen el contorno de su mano y de sus dedos. Luego, pídeles que escriban una pregunta sobre cada dedo, en específico, que escriban "quién", "qué", "dónde", "cuándo" y "por qué". Es importante enseñar esto a los nuevos discípulos, especialmente si alguno de ellos está pensando en empezar un grupo pequeño de crecimiento.
          </Text>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.subtitle}>Comencemos con las preguntas:</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}><Text style={styles.keyword}>Número 1: ¿Quiénes son la iglesia? En Hechos 2:36-47</Text>, vemos que la iglesia está compuesta por personas: creyentes arrepentidos y bautizados.</Text>
            <Text style={styles.listItem}><Text style={styles.keyword}>Número 2: ¿Qué hace la iglesia? En Hechos 2:36-47</Text> también encontramos lo que la iglesia de la Biblia hacía, que es reflejado en el círculo saludable de la iglesia. </Text>
            <Text style={styles.listItem}><Text style={styles.keyword}>Número 3: ¿Dónde se reúne la iglesia? Hechos 2:46, 5:42 y 16:40. </Text>Por lo tanto, la iglesia se reúne en cualquier lugar: en un edificio, en casas, en el parque, etc.</Text>
            <Text style={styles.listItem}><Text style={styles.keyword}>Número 4: ¿Cuándo se reúne la iglesia? Hechos 2:46</Text> señala las reuniones de oración, y <Text style={styles.keyword}>Hechos 20:7</Text> indica el primer día de la semana. Así que la iglesia se reúne en cualquier momento, sin dejar de congregarse como dice <Text style={styles.keyword}>Hebreos 10:25</Text>.</Text>
          </View>
          <Text style={styles.listItem}><Text style={styles.keyword}>Número 5: ¿Por qué se reúne la iglesia? En 1 Corintios 10:31</Text> se nos dice que hagamos todo para la gloria de Dios, y Hebreos 10:24 nos anima a motivarnos unos a otros hacia las buenas obras. Por ello, la iglesia se reúne para glorificar a Dios y para animarse mutuamente.</Text>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.subtitle}>Recapitulando:</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}><Text style={styles.keyword}>¿Quiénes son la iglesia? </Text>Los creyentes arrepentidos y bautizados.</Text>
            <Text style={styles.listItem}><Text style={styles.keyword}>¿Qué hace la iglesia?</Text> Lo que indica el círculo saludable de la iglesia.</Text>
            <Text style={styles.listItem}><Text style={styles.keyword}>¿Dónde se reúne la iglesia? </Text>En cualquier lugar. </Text>
            <Text style={styles.listItem}><Text style={styles.keyword}>¿Cuándo se reúne la iglesia? </Text>En cualquier momento.</Text>
            <Text style={styles.listItem}><Text style={styles.keyword}>¿Por qué se reúne la iglesia?</Text> Para glorificar a Dios y animarse unos a otros. </Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.paragraph}>
          Estamos en el campo de la cosecha y aprendiendo a juntar a los discípulos en grupos saludables. Ahora es tiempo de practicar: divide a tus participantes en grupos de dos personas y pídeles que se describan mutuamente esta herramienta. Al finalizar, que levanten su mano izquierda y ambos choquen sus manos como señal de haber terminado con esta herramienta. Así, los nuevos discípulos sabrán la información básica que deben conocer sobre la iglesia para que puedan comenzar sus grupos pequeños de "tres tercios", es decir, grupos de iglesias saludables que se multiplican.
          </Text>
          <Text style={styles.paragraph}>
          <Text style={styles.keyword}>Que la Gracia de nuestro Señor Jesucristo sea con todos nosotros</Text> mientras estamos en la última herramienta del <Text style={styles.keyword}>4to campo del crecimiento</Text>. Listo para entrar al <Text style={styles.keyword}>círculo del medio</Text>, llamado <Text style={styles.keyword}>el liderazgo</Text>. Para entrenar a otros que entren a otros con esta herramienta simple, bíblica y fácil de reproducir. <Text style={styles.keyword}>La próxima herramienta 10. Los 5 Niveles del Liderazgo</Text>
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
