import React from "react";
import { View, Text, ScrollView, ImageBackground } from "react-native";
import { documentosStyles as styles } from "../DocumentosStyles";

export default function WordLeccion1() {
  return (
    <ImageBackground
      source={require("../../assets/icons/fondo1.jpg")}
      style={styles.container}
    >
      <ScrollView>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Lección 1: Bosquejo del Entrenamiento</Text>
          <Text style={styles.paragraph}>
            Bienvenido al <Text style={styles.keyword}>MOVIMIENTO DE ALCANCE MUNDIAL <Text style={styles.mayuscula}>M.A.M</Text></Text>. El entrenamiento de
            multiplicación de los cuatro campos de un discipulado. Cuando
            comienza, en un entrenamiento lo que debes hacer es presentar el
            bosquejo de este entrenamiento, y este es básicamente nuestro
            bosquejo. Trabajamos dentro de estos parámetros. Esto es genial porque
            toda la idea de ser discípulos y de multiplicar tiene la base de ser
            simple, bíblico y fácil de reproducir.
          </Text>
          <Text style={styles.paragraph}>
            La idea es introducir al lector al entrenamiento de multiplicación
            enfocado en el discipulado. Explica que el entrenamiento se basa en un
            bosquejo que se presentará y que sigue una estructura específica. La
            simplicidad, base bíblica y la reproducibilidad son destacadas como
            características esenciales del proceso, preparando al lector para el
            contenido de la formación.
          </Text>
          <Text style={styles.paragraph}>
            Antes de que podamos entrenar a alguien en compartir el evangelio,
            tenemos que entender la gran visión de Dios. Es grande, es del tamaño
            de Dios y no de nuestra limitada perspectiva. A veces, simplemente
            reducimos el reino de Dios al tamaño de nuestros pensamientos, pero lo
            que debemos entender es que Dios tiene una gran visión. Y esta es <Text style={styles.keyword}>global</Text>. Miraremos desde Génesis hasta Apocalipsis; también es <Text style={styles.keyword}>local</Text>. Echaremos un vistazo a algunos hechos impactantes sobre nuestras áreas; y también es <Text style={styles.keyword}>personal.</Text> Todos estamos conectados y relacionados
            con otras personas.
          </Text>
          <Text style={styles.paragraph}>
            Es necesario enfatizar la necesidad de comprender la visión expansiva
            de Dios antes de entrenar a otros. Se menciona que esta visión es
            global, local y personal, lo que resalta la conectividad entre las
            personas y la importancia de ver el evangelio desde una perspectiva
            amplia. La referencia a Génesis y Apocalipsis sugiere que la visión de
            Dios trasciende el tiempo y el espacio.
          </Text>
          <Text style={styles.paragraph}>
            Antes de que consideremos equipar con diferentes herramientas,
            aclaremos que <Text style={styles.keyword}>Dios tiene una gran visión</Text>. Luego, en el <Text style={styles.keyword}>paso libre</Text>,
            trabajamos dentro de los cuatro campos: cómo entrar a un campo vacío,
            cómo sembrar la semilla, cómo ayudar a crecer haciendo discípulos que
            hagan otros discípulos, y cómo juntar la cosecha; sí, como reunir
            grupos en la comunidad que se multipliquen de manera saludable. En la <Text style={styles.keyword}>parte del centro se encuentra el liderazgo.</Text> Así que <Text style={styles.keyword}>gran visión, paso libre</Text> y, a medida que se equipa y se avanza en el entrenamiento, están las dos herramientas simples que obtendrás y podrás poner en tu corazón, que podrás poner en tu caja de herramientas, en tu bolsillo; y a medida que los discípulos van por la vida, pueden usar estas herramientas al entrar en campos corazones vacíos y al sembrar la semilla.
          </Text>
          <Text style={styles.paragraph}>
            Se debe describir bien las acciones específicas que se llevarán a cabo
            en el entrenamiento, centrándose en los <Text style={styles.keyword}>"cuatro campos"</Text> del discipulado: <Text style={styles.keyword}>entrar en campos vacíos, sembrar, ayudar a crecer y cosechar</Text>. Es necesario mencionar la centralidad del liderazgo y la importancia de las herramientas prácticas que los participantes podrán usar a lo largo de su vida para compartir el evangelio.
          </Text>
          <Text style={styles.paragraph}>
            Les animamos a revisar el bosquejo presentado, con los recursos que se
            proporcionan en la aplicación móvil, tales como videos ilustrativos,
            imágenes y PowerPoint.
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.keyword}>Que la Gracia de nuestro Señor Jesucristo sea con todos nosotros</Text> mientras eches un vistazo a nuestro bosquejo: <Text style={styles.keyword}>gran visión, paso libre y herramientas simples</Text>.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
