// sciagnac kursor
import {
  ChessBishop,
  ChessKing,
  ChessKnight,
  ChessPawn,
  ChessQueen,
  ChessRook,
} from "lucide-react-native";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Taktywnafigura = "Pawn" | "Knight" | "Bishop" | "Rook" | "Queen" | "King";

export default function TabTwoScreen() {
  const [aktywnafigura, setaktywnafigura] = useState<Taktywnafigura | null>(
    null,
  );

  function ustawianieaktywnejfigury(nazwafigury: Taktywnafigura) {
    setaktywnafigura(nazwafigury);
  }

  return (
    <View style={styles.container}>
      <View style={styles.figury}>
        <Pressable
          style={[
            styles.kontenerfigury,
            {
              backgroundColor: aktywnafigura === "Pawn" ? "white" : "lightgray",
            },
          ]}
          onPress={() => ustawianieaktywnejfigury("Pawn")}
        >
          <ChessPawn />
        </Pressable>
        <Pressable
          style={[
            styles.kontenerfigury,
            {
              backgroundColor:
                aktywnafigura === "Knight" ? "white" : "lightgray",
            },
          ]}
          onPress={() => ustawianieaktywnejfigury("Knight")}
        >
          <ChessKnight />
        </Pressable>
        <Pressable
          style={[
            styles.kontenerfigury,
            {
              backgroundColor:
                aktywnafigura === "Bishop" ? "white" : "lightgray",
            },
          ]}
          onPress={() => ustawianieaktywnejfigury("Bishop")}
        >
          <ChessBishop />
        </Pressable>
        <Pressable
          style={[
            styles.kontenerfigury,
            {
              backgroundColor: aktywnafigura === "Rook" ? "white" : "lightgray",
            },
          ]}
          onPress={() => ustawianieaktywnejfigury("Rook")}
        >
          <ChessRook />
        </Pressable>
        <Pressable
          style={[
            styles.kontenerfigury,
            {
              backgroundColor:
                aktywnafigura === "Queen" ? "white" : "lightgray",
            },
          ]}
          onPress={() => ustawianieaktywnejfigury("Queen")}
        >
          <ChessQueen />
        </Pressable>
        <Pressable
          style={[
            styles.kontenerfigury,
            {
              backgroundColor: aktywnafigura === "King" ? "white" : "lightgray",
            },
          ]}
          onPress={() => ustawianieaktywnejfigury("King")}
        >
          <ChessKing />
        </Pressable>
      </View>
      <Text style={styles.text}>{aktywnafigura}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "moccasin",
    justifyContent: "center",
    alignItems: "center",
  },
  figury: {
    flexDirection: "row",
    gap: 12,
  },
  kontenerfigury: {
    padding: 16,
    borderRadius: 12,
  },
  text: {
    fontSize: 24,
    fontWeight: 800,
    marginTop: 24,
  },
});
