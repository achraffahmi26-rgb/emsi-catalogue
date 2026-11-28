import { Pressable, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../context/AuthContext";

export default function SettingsScreen() {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paramètres</Text>
      <Text>Utilisateur : {user?.nom}</Text>
      <Text>Login : {user?.login}</Text>
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
