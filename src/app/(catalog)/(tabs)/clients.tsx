import { Redirect, router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { useAuth } from "../../../context/AuthContext";
import { clients } from "../../../data/Client";

export default function ClientsScreen() {
  const { user } = useAuth();

  if (user?.role !== "admin") {
    return <Redirect href="/articles" />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Clients</Text>
      {clients.map((client) => (
        <Pressable
          key={client.id}
          onPress={() =>
            router.push({
              pathname: "/detail-client",
              params: { id: String(client.id) },
            })
          }
          style={styles.card}
        >
          <Text style={styles.name}>{client.nom}</Text>
          <Text>{client.ville}</Text>
          <Text>{client.telephone}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F6FA",
    padding: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
  },
  name: {
    fontWeight: "bold",
    marginBottom: 4,
  },
});
