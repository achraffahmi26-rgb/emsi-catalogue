import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { articles, calculerTTC, getEtatStock } from "../../../data/Article";

export default function ArticlesScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titre}>Articles</Text>
      {articles.map((article) => (
        <Pressable
          key={article.code}
          onPress={() =>
            router.push({
              pathname: "/details",
              params: { code: article.code },
            })
          }
          style={styles.carte}
        >
          <Text>
            <Text style={{ fontWeight: "bold" }}>{article.nom}</Text>
            {"\n"}{article.marque} — {getEtatStock(article)}
            {"\n"}Prix TTC : {calculerTTC(article)} MAD
          </Text>
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
  titre: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  carte: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
  },
});