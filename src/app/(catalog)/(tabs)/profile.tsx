import { Pressable, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../../context/AuthContext";

export default function ProfileScreen() {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil</Text>
      <Text style={styles.label}>Connecté en tant que : {user?.login}</Text>
      <Text>Nom : {user?.nom}</Text>
      <Text>Fonction : {user?.fonction}</Text>
      <Pressable
        accessibilityRole="button"
        onPress={logout}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Se déconnecter</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F3F6FA",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DC2626",
    borderRadius: 8,
    marginTop: 16,
    padding: 12,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
