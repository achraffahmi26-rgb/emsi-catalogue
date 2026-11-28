import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function LoginScreen() {
  const { login } = useAuth();
  const [identifiant, setIdentifiant] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [erreur, setErreur] = useState("");

  function seConnecter() {
    if (!login(identifiant, motDePasse)) {
      setErreur("Login ou mot de passe incorrect.");
      return;
    }

    setErreur("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Catalogue EMSI</Text>
      <Text style={styles.sousTitre}>Connexion</Text>
      <Text style={styles.avertissement}>
        Comptes fictifs réservés au TP. Ne pas utiliser en production.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Login"
        value={identifiant}
        onChangeText={setIdentifiant}
        autoCapitalize="none"
        autoCorrect={false}
        accessibilityLabel="Login"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={motDePasse}
        onChangeText={setMotDePasse}
        secureTextEntry
        onSubmitEditing={seConnecter}
        accessibilityLabel="Mot de passe"
      />
      {erreur !== "" ? <Text style={styles.erreur}>{erreur}</Text> : null}
      <Pressable
        style={[
          styles.bouton,
          !identifiant.trim() || !motDePasse ? styles.boutonDesactive : null,
        ]}
        onPress={seConnecter}
        disabled={!identifiant.trim() || !motDePasse}
        accessibilityRole="button"
      >
        <Text style={styles.texteBouton}>Se connecter</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
    backgroundColor: "#F3F6FA",
  },
  titre: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#172B4D",
    textAlign: "center",
  },
  sousTitre: {
    fontSize: 18,
    color: "#475569",
    textAlign: "center",
    marginBottom: 12,
  },
  avertissement: {
    color: "#526071",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  erreur: {
    color: "#DC2626",
    marginBottom: 15,
    textAlign: "center",
  },
  bouton: {
    backgroundColor: "#1D4ED8",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  boutonDesactive: {
    opacity: 0.5,
  },
  texteBouton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
