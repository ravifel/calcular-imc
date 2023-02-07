import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

export default function App() {
  //Gerenciamento de Estado
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  function handlerSubmit() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
      alert("Abaixo do peso! " + imc.toFixed(2));
    } else if (imc >= 18.6 && imc <= 24.9) {
      alert("Peso normal! " + imc.toFixed(2));
    } else if (imc >= 25 && imc < 29.9) {
      alert("Acima do peso! " + imc.toFixed(2));
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://cdn2.iconfinder.com/data/icons/sports-and-games-vol-01/32/heart-activity-fitness-passion-love-health-512.png",
        }}
      />
      <Text style={styles.title}>Calcule seu IMC</Text>
      <Text style={styles.subTitle}>Olá, seja bem-vindo ao App!</Text>
      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={(peso) => setPeso(peso)}
        placeholder="Peso (KG)"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={(altura) => setAltura(altura)}
        placeholder="Altura (CM)"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handlerSubmit}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  //Grupos de Estilo
  container: {
    flex: 1,
    backgroundColor: "#ADD8E6",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
  },
  subTitle: {
    textAlign: "center",
    fontSize: "18px",
    color: "#808080",
    marginTop: 2,
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    margin: 15,
    padding: 10,
    fontSize: 23,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    backgroundColor: "#1E90FF",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 25,
  },
  logo: {
    marginLeft: "32%",
    marginTop: "26%",
    width: 150,
    height: 150,
  },
});
