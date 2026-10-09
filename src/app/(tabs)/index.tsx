import { Button, ButtonText } from "@/components/ui/button";
import { Text, View, StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';


export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
      <Button variant="default" size="default"><ButtonText>Submit</ButtonText></Button>
      <AntDesign name="aim" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
