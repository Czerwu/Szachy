// sciagnac kursor

// Zrobić sachownice i do wszystkich figur wszystkie ruchy. Ruch w osobnych tablicach. Zamiast czerwonego podsweitlenia ma byc złote.
import {
  ChessBishop,
  ChessKing,
  ChessKnight,
  ChessPawn,
  ChessQueen,
  ChessRook,
} from "lucide-react-native";
import { useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
const windowWidth = Dimensions.get("window").width;
const szerokoscpola = (windowWidth - 48) / 8;
type Taktywnafigura = "Pawn" | "Knight" | "Bishop" | "Rook" | "Queen" | "King";
const szachownica = [
  ["1a", "1b", "1c", "1d", "1e", "1f", "1g", "1h"],
  ["2a", "2b", "2c", "2d", "2e", "2f", "2g", "2h"],
  ["3a", "3b", "3c", "3d", "3e", "3f", "3g", "3h"],
  ["4a", "4b", "4c", "4d", "4e", "4f", "4g", "4h"],
  ["5a", "5b", "5c", "5d", "5e", "5f", "5g", "5h"],
  ["6a", "6b", "6c", "6d", "6e", "6f", "6g", "6h"],
  ["7a", "7b", "7c", "7d", "7e", "7f", "7g", "7h"],
  ["8a", "8b", "8c", "8d", "8e", "8f", "8g", "8h"],
];
const polestartowe = "5e";
const figury = {
  Pawn: <ChessPawn />,
  Knight: <ChessKnight />,
  Bishop: <ChessBishop />,
  Rook: <ChessRook />,
  Queen: <ChessQueen />,
  King: <ChessKing />,
};
const mozliweruchy = {
  Pawn: ["4e"],
  Knight: ["4c", "3d", "3f", "4g", "6g", "7f", "7d", "6c"],
  Bishop: [
    "4d",
    "3c",
    "2b",
    "1a",
    "6f",
    "7g",
    "8h",
    "4f",
    "3g",
    "2h",
    "6d",
    "7c",
    "8b",
  ],
  Rook: [
    "4e",
    "3e",
    "2e",
    "1e",
    "6e",
    "7e",
    "8e",
    "5f",
    "5g",
    "5h",
    "5d",
    "5c",
    "5b",
    "5a",
  ],
  Queen: [
    "5a",
    "5b",
    "5c",
    "5d",
    "5f",
    "5g",
    "5h",
    "1e",
    "2e",
    "3e",
    "4e",
    "6e",
    "7e",
    "8e",
    "4d",
    "3c",
    "2b",
    "1a",
    "4f",
    "3g",
    "2h",
    "6d",
    "7c",
    "8b",
    "6f",
    "7g",
    "8h",
  ],
  King: ["4d", "4e", "4f", "5d", "5f", "6d", "6e", "6f"],
};

export default function TabTwoScreen() {
  const [aktywnafigura, setaktywnafigura] = useState<Taktywnafigura | null>(
    null,
  );

  function ustawianieaktywnejfigury(nazwafigury: Taktywnafigura) {
    setaktywnafigura(nazwafigury);
  }
  function sprawdzKolorPola(indexpole: number, indexrzad: number) {
    if (indexrzad % 2 === 0) {
      return indexpole % 2 === 0 ? styles.whiteSquare : styles.blackSquare;
    } else {
      return indexpole % 2 === 0 ? styles.blackSquare : styles.whiteSquare;
    }
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
      <View style={styles.board}>
        {szachownica.map((rzad, indexrzad) => (
          <View style={styles.row}>
            {rzad.map((pole, indexpole) => (
              <View
                style={[
                  sprawdzKolorPola(indexpole, indexrzad),
                  !!aktywnafigura &&
                    mozliweruchy[aktywnafigura].includes(pole) &&
                    styles.poleruchu,
                ]}
              >
                {polestartowe === pole && !!aktywnafigura
                  ? figury[aktywnafigura]
                  : null}
              </View>
            ))}
          </View>
        ))}
      </View>
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
  board: {
    borderWidth: 4,
    borderColor: "black:",
    marginTop: 24,
  },
  row: {
    flexDirection: "row",
  },
  poleruchu: {
    borderWidth: 3,
    borderColor: "red",
   
  },
  blackSquare: {
    width: szerokoscpola,
    height: szerokoscpola,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  whiteSquare: {
    width: szerokoscpola,
    height: szerokoscpola,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
