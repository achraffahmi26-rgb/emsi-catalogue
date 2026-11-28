import {
  Drawer,
  DrawerContentScrollView,
  DrawerItemList,
  type DrawerContentComponentProps,
} from "expo-router/drawer";
import { Pressable, Text } from "react-native";
import { useAuth } from "../../context/AuthContext";

function DrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function CatalogLayout() {
  const { user, logout } = useAuth();

  return (
    <Drawer
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerActiveTintColor: "#1D4ED8",
        headerRight: () => (
          <Pressable
            accessibilityRole="button"
            onPress={logout}
            style={{ marginRight: 15 }}
          >
            <Text style={{ color: "#DC2626", fontWeight: "bold" }}>
              Déconnexion
            </Text>
          </Pressable>
        ),
        headerStyle: { backgroundColor: "#FFFFFF" },
        headerTintColor: "#172B4D",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: `Bonjour ${user?.nom ?? ""}`,
          drawerLabel: "Accueil",
        }}
      />
      <Drawer.Screen name="settings" options={{ title: "Paramètres" }} />
      <Drawer.Screen name="about" options={{ title: "À propos" }} />
      <Drawer.Screen
        name="details"
        options={{
          title: "Détails article",
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="detail-client"
        options={{
          title: "Détail client",
          drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer>
  );
}
