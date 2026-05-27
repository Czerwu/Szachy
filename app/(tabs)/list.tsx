// imput na prawie cała szerokośc ekranu z lewej strony 16 odstepuu pozniej ikona i 16 odstepu, kolor tej ikony na niebieski
// przeczytać co to jest flatlist

import { SendHorizonal } from "lucide-react-native";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type ItemProps = { tekst: string; nadawaca: number; id: string };

const wiadomosci = [
    { tekst: "Czesc", nadawaca: 1, id: "1" },
    { tekst: "Czesc", nadawaca: 2, id: "2" },
    { tekst: "Co tam ", nadawaca: 1, id: "3" },
    { tekst: "Jestem właśnie w skelpie", nadawaca: 2, id: "4" },
  ];

export default function TabThreeScreen() {
  const [text, setText] = useState("");
  const [messages, setmessages] = useState(wiadomosci);

  function wyslij() {
    setmessages (prev =>[...prev, {tekst: text, nadawaca: 2, id: (messages.length + 1).toString()}])
    setText ("")
  }

  const Item = ({ tekst, nadawaca }: ItemProps) => (
    <View
      style={[
        styles.item,
        {
          backgroundColor: nadawaca === 1 ? "white" : "lightblue", alignSelf: nadawaca === 1 ? "flex-start" : "flex-end"
        },
      ]}
    >
      <Text>{tekst}</Text>
    </View>
  );
  

  return (
    <View style={styles.container}>
      <FlatList
      contentContainerStyle = {styles.flatlistcontainer}
        data={messages}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.containertwo}>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder="Aa"
        />

        <Pressable onPress={wyslij}>
          <SendHorizonal size={40} color="blue" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    justifyContent: "center",
    paddingBottom: 16,
    paddingTop: 50,
  },

  containertwo: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    gap: 16,
  },

  input: {
    flex: 1,
    borderColor: "black",
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  item: {
    padding: 20,
    borderRadius: 12,
    flex: 1, 
    
  },
  flatlistcontainer: {
    gap:12, 
    paddingHorizontal: 16,
  }
});
