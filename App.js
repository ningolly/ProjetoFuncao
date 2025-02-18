import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.first}>
          <Text style={styles.wiki}>DEVELOPERS</Text>
          <View style={styles.line}>
          </View>
        </View>
        <StatusBar style="auto" />
        <View>
          <Text style={styles.title}>
            Programador Junior
          </Text>
          <Text style={styles.content}>
            Geralmente, são profissionais iniciantes ou com pouca experiência (até 2 anos). Eles ainda estão aprendendo e precisam de orientação frequente. As tarefas que executam são mais simples e o foco é o desenvolvimento de habilidades técnicas e conhecimento de processos.
          </Text>
          <Image style={styles.image} source={require('./assets/programadorjr.png')} />
          <Text style={styles.title}>
            Programador Pleno
          </Text>
          <Text style={styles.content}>
            Já o Programador Pleno possui mais experiência, normalmente entre 2 a 5 anos, e assume responsabilidades maiores. Ele trabalha de maneira mais autônoma, lidando com tarefas mais complexas e, muitas vezes, liderando pequenos projetos. Seu conhecimento técnico é sólido, e ele já toma decisões mais complexas e contribui ativamente para a resolução de problemas.
          </Text>
          <Image style={styles.image} source={require('./assets/programadorpl.jpeg')} />
          <Text style={styles.title}>
            Programador Sênior
          </Text>
          <Text style={styles.content}>
            Profissionais com mais de 5 anos de experiência. São responsáveis por decisões arquiteturais, resolução de problemas complexos e, muitas vezes, liderança técnica. Espera-se que eles mentoram a equipe, tragam soluções inovadoras e tenham uma visão estratégica do desenvolvimento, além de uma profunda expertise técnica.          </Text>
          <Image style={styles.image} source={require('./assets/programadorsr.png')} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  first: {
    backgroundColor: 'black',
  },
  wiki: {
    color: 'white',
    fontSize: 33,
    fontWeight: 800,
    textAlign: 'center',
    marginTop: 22,

  },
  line: {
    backgroundColor: 'black',
    width: '100%',
    height: 1,
    marginTop: 15,
    backgroundColor: 'white',
  },
  title: {
    marginLeft: 20,
    fontSize: 27,
    marginTop: 20,
    fontWeight: 800,
  },
  content: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 15,
  },
  image: {
    width: 290,
    height: 250,
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 10,
    marginBottom: 20,
  }
});
