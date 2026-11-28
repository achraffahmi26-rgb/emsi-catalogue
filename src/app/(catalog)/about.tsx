import { StyleSheet, Text, View } from "react-native";
export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>À propos</Text>
      <Text>Application commerciale EMSI Catalogue.</Text>
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
    marginBottom: 8,
  },
});
