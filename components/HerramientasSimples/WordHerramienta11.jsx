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

export default function WordHerramienta11() {
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
          HERRAMIENTA 11: HIERRO SOBRE HIERRO
          </Text>
          <Text style={styles.paragraph}>
          Bienvenido al <Text style={styles.keyword}>MOVIMIENTO DE ALCANCE MUNDIAL <Text style={styles.mayuscula}>M.A.M</Text></Text>. El entrenamiento de multiplicación de los cuatro campos de un discipulado. Enfocado en cómo desarrollar líderes que se multipliquen. Esta es la lección número quince y la herramienta número once, titulada <Text style={styles.keyword}>"Hierro sobre Hierro"</Text>, que se encuentra en la página veintiuno del manual de entrenamiento. Esta herramienta es fundamental para líderes y se ubica en el círculo central de los cuatro campos. Dado que estamos equipando a otros para que a su vez equipen a otros, necesitamos contar con un enfoque que nos permita animar a quienes estamos formando, ayudándoles a superar obstáculos, barreras y problemas.
          </Text>
          <Text style={styles.paragraph}>
          <Text style={styles.keyword}>"Hierro sobre Hierro"</Text> es una herramienta de resolución de conflictos. <Text style={styles.keyword}>Como dice Proverbios 27:17, "como el hierro afila el hierro, así una persona afila a otra"</Text>. El propósito de esta herramienta es aprender de otros líderes. Cuando te sientes con otros líderes, practicas el "hierro sobre hierro". Esto es increíble porque aprendes sobre diversas áreas en las que la otra persona está trabajando, lo que te permite ayudarlos con los atascos que puedan encontrar en su camino. Al practicar "hierro sobre hierro", asegúrate de centrarte en el plan y no en la persona; se trata del área laboral y de las dificultades.
          </Text>
          <Text style={styles.paragraph}>
          Para utilizar esta herramienta, necesitarás un facilitador y alguien que controle el tiempo, ya que la sesión no debe durar más de sesenta minutos. "Hierro sobre Hierro" se basa en una serie de preguntas. Se recomienda reunir de cuatro a seis practicantes, aunque la entrevista debe enfocarse solo en uno de los líderes. El facilitador comenzará a hacer algunas preguntas y permitirá que el entrevistado hable, mientras que los demás se limitan a escuchar.
          </Text>
          <Text style={styles.paragraph}>
          Invierte treinta minutos haciendo preguntas sobre las siguientes áreas: **Permanecer, conflicto, visión, contexto, herramientas, ritmo del ministerio y atascos**. Por ejemplo, pregúntale sobre su conexión personal con Jesús, si hay faltas de perdón o conflictos no resueltos en su equipo, cuál es la visión local por la que trabaja, y qué herramientas está utilizando en los cuatro campos. Además, comparte brevemente sobre su ritmo semanal, incluyendo oración, compartir y entrenamientos. También es importante que hable sobre sus grupos, corrientes o movimientos.
          </Text>
          <Text style={styles.paragraph}>
          Una vez que hayas permitido que el líder entrevistado hable, ha llegado el momento de que los otros líderes ofrezcan apoyo. Durante cinco minutos, los otros cinco o seis líderes deben animar al líder entrevistado, mostrándole apoyo amoroso y alentándolo a seguir adelante. Luego, se destinan cinco minutos para aclarar dudas. Esto les permitirá a los otros líderes hacer preguntas que ayuden a aclarar la información discutida.
          </Text>
          <Text style={styles.paragraph}>
          Durante los siguientes quince minutos, planteen soluciones a los atascos y barreras existentes. Las soluciones pueden provenir de las Escrituras, historias o sugerencias de los participantes. Después, permite que el líder entrevistado comparta dos o tres planes de acción que pudo haber descubierto durante la sesión, junto con su plan de responsabilidad. Finalmente, cierra la sesión en dos minutos asegurándote de que el líder entrevistado salga muy animado en su ministerio.
          </Text>
          <Text style={styles.paragraph}>
          La herramienta "Hierro sobre Hierro" es de gran importancia en el liderazgo. Mientras trabajas en los cuatro campos de entrenamiento, habrá líderes que se levantarán y que necesitarán ser confirmados y animados más adelante. Es fundamental que confirmes sus dones, talentos y habilidades, liberándolos para que realicen cosas maravillosas para Dios. Reúnete con ellos de vez en cuando y practica "Hierro sobre Hierro" con ellos. Si solo hay dos líderes, pueden darse la vuelta y practicar esta herramienta juntos.
          </Text>
          <Text style={styles.paragraph}>
          Recuerda que es esencial no atacar a la persona, sino al plan. Cuando te alejes de estas reuniones, lo harás entendiendo al líder y su trabajo, con compasión por lo que hace y reconociendo la mano de Dios en su ministerio. Esto es asombroso. Así que, mientras entrenas a otros con esta herramienta, dedica tiempo a discutir esta información. No lo hagas con alguien si no estás comprometido, porque no funcionará. 
          </Text>
          <Text style={styles.paragraph}>
          "Hierro sobre Hierro" es la herramienta número 11. 
          </Text>
          <Text style={styles.paragraph}>
          <Text style={styles.keyword}>Que la Gracia de nuestro Señor Jesucristo sea con todos nosotros</Text> mientras continuamos con las herramientas del <Text style={styles.keyword}>4to campo de la cosecha</Text>. <Text style={styles.keyword}>El círculo del medio</Text>, llamado <Text style={styles.keyword}>el liderazgo</Text>. Para entrenar a otros que entren a otros con esta herramienta simple, bíblica y fácil de reproducir. <Text style={styles.keyword}>La próxima herramienta 12. MAOI</Text>.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
