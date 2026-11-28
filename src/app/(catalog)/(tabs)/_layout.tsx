import { Tabs } from "expo-router";
import { useAuth } from "../../../context/AuthContext";

export default function TabsLayout() {
  const { user } = useAuth();

  return (
    <Tabs screenOptions={{ tabBarPosition: "bottom", headerShown: false }}>
      <Tabs.Screen name="articles" options={{ title: "Articles" }} />
      <Tabs.Screen
        name="clients"
        options={{
          title: "Clients",
          href: user?.role === "admin" ? undefined : null,
        }}
      />
      <Tabs.Screen name="profile" options={{ title: "Profil" }} />
    </Tabs>
  );
}
