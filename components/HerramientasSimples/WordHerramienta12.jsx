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

export default function WordHerramienta12() {
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
          <Text style={styles.title}>Herramienta 12: Ciclo de Oración</Text>
          <Text style={styles.paragraph}>
          Bienvenido al <Text style={styles.keyword}>MOVIMIENTO DE ALCANCE MUNDIAL <Text style={styles.mayuscula}>M.A.M</Text></Text>. El entrenamiento de multiplicación de los cuatro campos de un discipulado. Enfocado en cómo desarrollar líderes que se multipliquen. Esta es la lección número dieciséis y la herramienta número doce, titulada "Principio Me a Hoy", que se encuentra en la página veintidós de tu manual de entrenamiento. Esta herramienta es para líderes y está ubicada en el círculo central de los cuatro campos.  
          </Text>
          <Text style={styles.paragraph}>
          El principio <Text style={styles.mayuscula}>"MAOI"</Text> se basa en modelar, ayudar y observar. Si has estado aquí para otros, lo que realmente has estado haciendo es modelar para ellos. Es por esto que es importante trabajar en la cosecha, ya que todo comienza modelando. El siguiente paso es asistir y ayudar a otros mientras ellos también te ayudan a ti. Luego llega el tiempo en el cual solo observas a los demás hacer el trabajo y finalmente, el momento de dejar que crezcan. 
          </Text>
          <Text style={styles.paragraph}>
          Esta herramienta es genial para transferir conocimientos y habilidades. Es lo que hicieron los apóstoles, y es lo que hacen electricistas, plomeros, y otros en diversas labores. Se trata de equipar y transferir herramientas. El Principio <Text style={styles.mayuscula}>"MAOI"</Text> se puede comparar con el proceso de enseñar a un niño o niña a andar en bicicleta. Primero, el niño observa cómo te subes a la bicicleta, cómo pedalear y cómo mantener el equilibrio. Luego, ayudas al niño a subirse a su bicicleta, a sentarse, a tomar el manubrio, a poner los pies en los pedales y a sujetar la bicicleta mientras intenta equilibrarse.
          </Text>
          <Text style={styles.paragraph}>
          Con el tiempo, comienzas a soltar la bicicleta, pero el niño aún no puede hacerlo solo del todo. A menudo todavía tiene dificultades al dar vueltas o al pasar sobre algunas banquetas. Por ello, continúas ayudando y observando de cerca. Más adelante, observarás cómo el niño puede andar en bicicleta por sí solo, y es entonces que llega el momento de que lo haga libremente y tú puedas irte. Esto implica equipar, transferir herramientas y liberar a la persona para que actúe. 
          </Text>
          <Text style={styles.paragraph}>
          Dios quiere usar a sus hijos para sus propósitos. Sin embargo, el problema es que muchos líderes, en lugar de equipar y liberar, lo que hacen es controlar, como si tuvieran a los demás como posesiones. Es decir, nunca sueltan la bicicleta, aunque el niño ya tenga veinte años. Este principio es simple, bíblico y reproducible. 
          </Text>
          <Text style={styles.paragraph}>
          Hay varios ejemplos en las Escrituras sobre este principio. En Marcos 1, vemos a Jesús predicando, sanando y anunciando de pueblo en pueblo. Lo que realmente hace Jesús es modelar a sus discípulos para que ellos hagan lo mismo. También observamos a Pablo en Hechos capítulo trece al veinte, donde realiza sus viajes misioneros. Va de pueblo en pueblo predicando, discipulando, plantando iglesias y confirmando la fe de otros, todo ello modelando lo que un siervo del Señor debe ser. 
          </Text>
          <Text style={styles.paragraph}>
          En segundo lugar, ayudar. Jesús en Marcos capítulo seis ayuda a sus discípulos alimentando a los cinco mil. No los dejó solos; les pide que alimenten a la multitud mientras observa. Pablo, en primera de Tesalonicenses capítulo tres, llega a Corinto y escribe una carta pidiendo ayuda para llevar su mensaje a Tesalónica, viendo a Timoteo llevando esa carta, ayudándose mutuamente.
          </Text>
          <Text style={styles.paragraph}>
          En tercer lugar, observar. Jesús en Juan capítulo cuatro es mencionado como el que bautizaba más discípulos que Juan, aunque en realidad eran sus discípulos quienes realizaban los bautismos. Jesús observaba su progreso, al igual que Pablo en Segunda de Timoteo 2:2, observando a Timoteo mientras él escribía esa carta desde la distancia. 
          </Text>
          <Text style={styles.paragraph}>
          Finalmente, irse. En Hechos capítulo uno, Jesús le dice a sus discípulos que serán testigos hasta los confines de la tierra y luego se va. Pablo, en Hechos 20, se despide de los ancianos de Éfeso. Hemos visto a Jesús y a Pablo modelar, ayudar, observar y luego irse. 
          </Text>
          <Text style={styles.paragraph}>
          El principio <Text style={styles.mayuscula}>"MAOI"</Text> en tu entrenamiento de los cuatro campos es muy necesario para los líderes, ya que muchas veces, en lugar de equipar y liberar, muchos optan por controlar. La multiplicación de líderes se trata de equipar, transferir herramientas y liberar a otros para que también puedan hacer lo mismo. 
          </Text>
          <Text style={styles.paragraph}>
          <Text style={styles.keyword}>Que la Gracia de nuestro Señor Jesucristo sea con todos nosotros</Text> mientras continuamos con las herramientas del <Text style={styles.keyword}>4to campo de la cosecha. El círculo del medio</Text>, llamado <Text style={styles.keyword}>el liderazgo</Text>. Para entrenar a otros que entren a otros con esta herramienta simple, bíblica y fácil de reproducir. <Text style={styles.keyword}>La próxima herramienta 13. DINAMICA DE COMO FUNCIONA LA MULTIPLICACION.</Text>
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
