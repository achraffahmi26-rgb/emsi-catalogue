import { router, useLocalSearchParams } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";
import { clients } from "../../data/Client";

export default function ClientDetails() {
  const { id: routeId } = useLocalSearchParams<{ id?: string | string[] }>();
  const id = Array.isArray(routeId) ? routeId[0] : routeId;
  const client = clients.find((item) => String(item.id) === id);

  if (!client) {
    return <Text>Client introuvable</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{client.nom}</Text>
      <Text>Ville : {client.ville}</Text>
      <Text>Téléphone : {client.telephone}</Text>
      <Button title="Retour aux clients" onPress={() => router.back()} />
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
    marginBottom: 20,
  },
});
