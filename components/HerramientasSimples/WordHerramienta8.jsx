import React from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import { documentosStyles as styles } from "../DocumentosStyles";

export default function WordHerramienta8() {
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
            HERRAMIENTA 8: CÍRCULO SALUDABLE IGLESIA
          </Text>
          <Text style={styles.paragraph}>
            Bienvenido al{" "}
            <Text style={styles.keyword}>
              MOVIMIENTO DE ALCANCE MUNDIAL{" "}
              <Text style={styles.mayuscula}>M.A.M</Text>
            </Text>
            . El entrenamiento de multiplicación de los cuatro campos de un
            discipulado. <Text style={styles.keyword}>Herramienta número 8</Text>.
            Hoy abordaremos el entrenamiento de multiplicación, campo número 4,
            que trata sobre la cosecha: cómo juntar discípulos en grupos. Esta es{" "}
            <Text style={styles.keyword}>
              la herramienta número 8, el "círculo saludable" de la iglesia
            </Text>
            .
          </Text>
          <Text style={styles.paragraph}>
            El campo cuatro,{" "}
            <Text style={styles.keyword}>el campo de la cosecha</Text>, también es
            conocido como la iglesia. Así como un agricultor lleva la voz a la
            cosecha y la recoge, nosotros reunimos a los creyentes en grupos de
            una manera saludable. Recuerda que has estado aquí formando nuevos
            discípulos con herramientas simples. Cuando un discípulo es parte de
            un grupo de "tres tercios", algunos de ellos pueden estar pensando en
            iniciar un nuevo grupo pequeño, y eso es hermoso: grupos que se
            multiplican. Por ello, es importante enseñarles lo que es una iglesia
            saludable, según la Biblia, para que al iniciar su grupo pequeño sepan
            qué cosas deben hacer.
          </Text>
          <Text style={styles.paragraph}>
            En este entrenamiento, pide a tus participantes que escriban en la
            parte superior de la hoja la cita bíblica de Hechos 2:36-47. En este
            pasaje podemos encontrar lo que la iglesia en la Biblia predicaba y
            practicaba, y lo que debemos hacer hoy. Cuando pidas a tus
            participantes leer este pasaje, diles que descubran las cosas que la
            iglesia primitiva hacía. Pide a los participantes que dibujen en su
            hoja un círculo con una línea punteada; este círculo simboliza un
            círculo no saludable. A medida que van leyendo el pasaje, irán
            haciendo nueve dibujos; al finalizar, marcarán el círculo punteado
            hasta que quede completamente cerrado con una línea sólida, lo que
            significará un círculo saludable.
          </Text>
          <Text style={styles.paragraph}>
            A continuación, haré aquí algunas observaciones. En Hechos 2:38, vemos
            que Pedro dice "arrepentíos". Por lo tanto, en una iglesia saludable
            se predica y practica el arrepentimiento. Aquí buscamos una flecha
            afuera del círculo que simboliza el arrepentimiento y un cambio de
            dirección. En el versículo 38 también leemos sobre el bautismo; así
            que dibujemos una forma de agua que simboliza el bautismo: nacer del
            agua y del espíritu.
          </Text>
          <Text style={styles.paragraph}>
            Una iglesia saludable está compuesta por creyentes bautizados. En
            Hechos 2:42 leemos que perseveraban en la oración; aquí los
            participantes pueden dibujar un ícono que simbolice una iglesia de
            oración. En Hechos 2:47 leemos que el Señor añadía cada día a la
            iglesia; por lo tanto, pídeles que dibujen algo que simbolice el
            discipulado. En una iglesia saludable hay multiplicación.
          </Text>
          <Text style={styles.paragraph}>
            En Hechos 2:44 leemos sobre el amor que tenían los unos por los otros
            y cómo estaban juntos en comunión. Pídeles que dibujen un corazón y
            diles que en una iglesia saludable, los miembros se cuidan mutuamente
            buscando el bien de los demás. En Hechos 2:47 se menciona que alababan
            a Dios; por ello, pídeles que dibujen algo que represente la alabanza.
            Una iglesia saludable alaba y exalta a Dios, no a los hombres.
          </Text>
          <Text style={styles.paragraph}>
            En Hechos 2:42 leemos que perseveraban en el partimiento del pan;
            pídeles que hagan este dibujo, pues una iglesia saludable recuerda
            constantemente el sacrificio de Jesús a través de la Cena del Señor.
            En Hechos 2:45 vemos que los creyentes ofrecían de corazón, vendían
            sus cosas y las repartían según la necesidad; pídeles que dibujen algo
            que represente la ofrenda, ya que en una iglesia saludable los
            discípulos ofrendan de corazón y de manera voluntaria.
          </Text>
          <Text style={styles.paragraph}>
            En Hechos 2:42 leemos que la iglesia perseveraba en la doctrina de los
            apóstoles; pídeles que hagan este dibujo porque una iglesia saludable
            se edifica en las enseñanzas del Nuevo Testamento. Hechos 2:42 y 43
            nos enseñan que la iglesia tenía líderes; diles que dibujen algo
            relacionado con liderazgo. Una iglesia saludable tiene líderes que no
            manipulan ni controlan, sino que tienen el carácter de Cristo y animan
            a otros con amor.
          </Text>
          <Text style={styles.paragraph}>
            Al final, diles a tus participantes que marquen el círculo con una
            línea sólida. Con esta herramienta, los nuevos discípulos aprenden lo
            que es una iglesia saludable para que puedan comenzar sus grupos
            pequeños saludables que se multiplican.
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.keyword}>
              Que la Gracia de nuestro Señor Jesucristo sea con todos nosotros
            </Text>{" "}
            mientras fomentas entre unos y otros el uso de herramientas simples,
            bíblicas y reproducibles.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
