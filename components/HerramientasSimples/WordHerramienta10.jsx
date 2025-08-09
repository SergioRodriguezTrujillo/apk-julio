import React from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { documentosStyles as styles } from "../DocumentosStyles";

export default function WordHerramienta10() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require("../../assets/icons/fondo1.jpg")}
      style={styles.container}
    >
      <View>
        <Image
          source={require("../../assets/marcadores/campo5.png")}
          style={styles.marker}
        />
      </View>
      <ScrollView>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>
            Herramienta 10: los 5 Niveles del Liderazgo
          </Text>
          <Text style={styles.paragraph}>
          Bienvenido al <Text style={styles.keyword}>MOVIMIENTO DE ALCANCE MUNDIAL <Text style={styles.mayuscula}>M.A.M</Text></Text>. En esta ocasión, abordaremos la herramienta número diez: desarrollando líderes que se multipliquen. Esta herramienta se llama <Text style={styles.keyword}>"Los 5 niveles de liderazgo"</Text> y destaca la multiplicación de movimientos. Al finalizar este entrenamiento, tus participantes comprenderán que tenemos un gran y hermoso trabajo que hacer en el mundo y que hay un potencial enorme en sus vidas para servir a Dios de manera más grande y mejor, dependiendo de los talentos, dones y habilidades que Dios les ha dado
          </Text>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.subtitle}>
          Los cinco niveles de liderazgo son: 
          </Text>
          <Text style={styles.paragraph}>
          <Text style={styles.keyword}>El nivel 1</Text> es el sembrador de semilla. Este individuo es obediente al esparcir el evangelio de Jesucristo; sale y siembra la semilla. A veces, ocurre algo triste: no muchas personas son sembradores de semilla. De hecho, se dice que el 97% de los creyentes no comparten el evangelio ni su fe con otros. Aquí vemos que, como iglesia, tenemos un gran problema. 
          </Text>
          <Text style={styles.paragraph}>
          <Text style={styles.keyword}>El nivel 2</Text> es el iniciador de grupo pequeño; este individuo no solo es obediente al evangelio, sino que también inicia un grupo pequeño. Esto es hermoso, porque comienza a plantar una iglesia.  
          </Text>
          <Text style={styles.paragraph}>
          <Text style={styles.keyword}>El nivel 3</Text> es el multiplicador de grupos pequeños. Esta persona no solo inicia un grupo, sino que también sabe cómo hacerlo y comienza a capacitar a otras personas. Así, inicia otro grupo, y luego otro, multiplicando su impacto. Para convertirse en un plantador de grupos pequeños, uno puede hacerlo usando sus dones y talentos, pero para ser un multiplicador, es fundamental creer, confiar y empoderar a otras personas, lo cual es muy poderoso. 
          </Text>
          <Text style={styles.paragraph}>
          <Text style={styles.keyword}>El nivel 4</Text> es el entrenador de multiplicación. Este individuo es obediente a los niveles 1, 2 y 3, y busca trabajar fuera de su movimiento. Inicia una corriente y llega a la tercera o cuarta generación de la iglesia inicial. Un entrenador de multiplicación, después de haberlo logrado una vez, inicia múltiples corrientes, creando así un movimiento.  
          </Text>
          <Text style={styles.paragraph}>
          <Text style={styles.keyword}>El nivel 5</Text> es el catalizador de movimiento. Este es el tipo de liderazgo que tuvo el apóstol Pablo, quien fue un evangelista imparable. Es un individuo que opera en múltiples movimientos, ganando diferentes áreas, regiones o países. 
          </Text>
          <Text style={styles.paragraph}>
          Alguien puede preguntarse cómo llegar a este nivel cinco. La respuesta es sencilla: comienza desde el nivel 1. Esto es hermoso porque si eres un evangelista, puedes crecer y desarrollar una corriente, e incluso un movimiento. Es importante comprender que a la izquierda de una línea que trazamos, solo hay adición, pero al cruzar hacia la derecha, se encuentra la multiplicación, que es la creación de un movimiento. 
          </Text>
          <Text style={styles.paragraph}>
          Al observar los cuatro campos bajo el <Text style={styles.keyword}>nivel 1</Text> consideramos qué herramientas necesita un sembrador de semilla. Para un sembrador de semilla, es crucial saber cómo ingresar a un campo vacío utilizando el mapa relacional y la casa de la persona de paz. También es esencial saber cómo sembrar la semilla a través del testimonio de quince segundos, los tres círculos y el semáforo. Así, el sembrador de semilla comienza a crecer en obediencia. 
          </Text>
          <Text style={styles.paragraph}>
          Ahora, pasamos al <Text style={styles.keyword}>nivel 2</Text>, el plantador de grupo pequeño. Las herramientas necesarias para ser un plantador de un grupo pequeño incluyen las herramientas para entrar en un campo vacío, las herramientas de siembra y las del crecimiento, como <Text style={styles.keyword}>el 4.1.1</Text> y <Text style={styles.keyword}>los 3/3</Text>. También son necesarias las herramientas de <Text style={styles.keyword}>la cosecha</Text>, como <Text style={styles.keyword}>el círculo saludable de la iglesia y la guía de la mano izquierda para comenzar una iglesia</Text>. Sin embargo, para pasar de la adición a la multiplicación, necesitarás las herramientas del centro que son de desarrollo de liderazgo y multiplicación.
          </Text>
          <Text style={styles.paragraph}>
          La herramienta de los cinco niveles de liderazgo es realmente maravillosa y útil para evangelistas, misioneros y líderes. Les ayudará a comprender la importancia de equipar a los miembros de la iglesia. No todos en la iglesia se convertirán en un catalizador de movimiento o en un entrenador de multiplicación, ni en plantadores de grupos pequeños. Pero lo que queremos lograr con este entrenamiento es equipar a los miembros para que al menos sean sembradores de semilla, obedientes al compartir el evangelio de Jesucristo en el lugar donde se encuentran.
          </Text>
          <Text style={styles.paragraph}>
          Durante tu entrenamiento, divide a los participantes en grupos y pídeles que dibujen los cinco niveles de liderazgo, para que así puedan comprender y discutir en grupo. En la iglesia, las personas tienen diferentes dones, habilidades y talentos, y hay algunos evangelistas que están ansiosos por plantar más iglesias y activar un movimiento de multiplicación. Esta herramienta está diseñada para ellos, y podemos alcanzar nuestra región, comunidad y país, tal como lo hizo la iglesia del primer siglo. 
          </Text>
          <Text style={styles.paragraph}>
          Dios te bendiga mientras entrenas y equipas a otros. Necesitamos hacerlo porque la mies es mucha y pocos los obreros. Al hablar de la iglesia, no la llenes solo de información; necesitamos modelar cómo entrenamos y equipamos a los demás para liberarlos para su servicio. Así, serás un modelo para otros y ellos seguirán tu ejemplo, equipando y liberando a alguien más. Así es como logramos la multiplicación de iglesias. Necesitamos muchos multiplicadores de iglesias.  
          </Text>
          <Text style={styles.paragraph}>
          <Text style={styles.keyword}>Que la Gracia de nuestro Señor Jesucristo sea con todos nosotros</Text> mientras continuamos con las herramientas del <Text style={styles.keyword}>4to campo de la cosecha</Text>. <Text style={styles.keyword}>El círculo del medio</Text>, llamado <Text style={styles.keyword}>el liderazgo</Text>. Para entrenar a otros que entren a otros con esta herramienta simple, bíblica y fácil de reproducir. <Text style={styles.keyword}>La próxima herramienta 11. Hierro con Hierro</Text>. 
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
