

import {
  ChessBishop,
  ChessKing,
  ChessKnight,
  ChessPawn,
  ChessQueen,
  ChessRook,
} from "lucide-react-native";
import { useEffect, useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
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
const startowebiale = {
  Pawn: ["2a", "2b", "2c", "2d", "2e", "2f", "2g", "2h"],
  Bishop: ["1c", "1f"],
  King: ["1e"],
  Queen: ["1d"],
  Knight: ["1b", "1g"],
  Rook: ["1a", "1h"],
};
const startoweczarne = {
  Pawn: ["7a", "7b", "7c", "7d", "7e", "7f", "7g", "7h"],
  Bishop: ["8c", "8f"],
  King: ["8e"],
  Queen: ["8d"],
  Knight: ["8b", "8g"],
  Rook: ["8a", "8h"],
};
const windowWidth = Dimensions.get("window").width;
const szerokoscpola = (windowWidth - 48) / 8;

export default function HomeScreen() {
  const [aktywnafigura, setaktywnafigura] = useState<string | null>(null);
  const [aktywnygracz, setaktywnygracz] = useState("bialy");
  const [mozliweruchy, setmozliweruchy] = useState<string[]>([]);
  const [figuryczarne, setfiguryczarne] = useState(startoweczarne);
  const [figurybiale, setfigurybiale] = useState(startowebiale);

  function sprawdzKolorPola(indexpole: number, indexrzad: number) {
    if (indexrzad % 2 === 0) {
      return indexpole % 2 === 0 ? styles.whiteSquare : styles.blackSquare;
    } else {
      return indexpole % 2 === 0 ? styles.blackSquare : styles.whiteSquare;
    }
  }

  function ustawaktywnafigure(pole: string) {
    if (
      aktywnygracz === "bialy" &&
      Object.values(figurybiale).flat().includes(pole)
    )
      setaktywnafigura(pole);
    if (
      aktywnygracz === "czarny" &&
      Object.values(figuryczarne).flat().includes(pole)
    )
      setaktywnafigura(pole);
  }
  function ruchpionka(pole: string) {
    if (
      aktywnygracz === "bialy" &&
      mozliweruchy.includes(pole) &&
      !!aktywnafigura
    ) {
      setfigurybiale((prev) => ({
        ...prev,
        Pawn: [...figurybiale.Pawn.filter((el) => el !== aktywnafigura), pole],
      }));
      setaktywnafigura(null)
      setmozliweruchy([]) 
      setaktywnygracz("czarny")
    }
  }
  function dodawaniefigurnapole(pole: string) {
    if (figurybiale.Pawn.includes(pole)) {
      return (
        <Pressable onPress={() => ustawaktywnafigure(pole)}>
          <ChessPawn color={pole === aktywnafigura ? "gold" : "red"} />
        </Pressable>
      );
    }
    if (figurybiale.Rook.includes(pole)) {
      return (
        <Pressable onPress={() => ustawaktywnafigure(pole)}>
          <ChessRook color={pole === aktywnafigura ? "gold" : "red"} />;
        </Pressable>
      );
    }
    if (figurybiale.King.includes(pole)) {
      return (
        <Pressable onPress={() => ustawaktywnafigure(pole)}>
          <ChessKing color={pole === aktywnafigura ? "gold" : "red"} />;
        </Pressable>
      );
    }
    if (figurybiale.Knight.includes(pole)) {
      return (
        <Pressable onPress={() => ustawaktywnafigure(pole)}>
          <ChessKnight color={pole === aktywnafigura ? "gold" : "red"} /> ;
        </Pressable>
      );
    }
    if (figurybiale.Queen.includes(pole)) {
      return (
        <Pressable onPress={() => ustawaktywnafigure(pole)}>
          <ChessQueen color={pole === aktywnafigura ? "gold" : "red"} />;
        </Pressable>
      );
    }
    if (figurybiale.Bishop.includes(pole)) {
      return (
        <Pressable onPress={() => ustawaktywnafigure(pole)}>
          <ChessBishop color={pole === aktywnafigura ? "gold" : "red"} />;
        </Pressable>
      );
    }
    if (figuryczarne.Pawn.includes(pole)) {
      return (
        <Pressable onPress={() => ustawaktywnafigure(pole)}>
          <ChessPawn color={pole === aktywnafigura ? "gold" : "blue"} />
        </Pressable>
      );
    }
    if (figuryczarne.Rook.includes(pole)) {
      return (
        <Pressable onPress={() => ustawaktywnafigure(pole)}>
          <ChessRook color={pole === aktywnafigura ? "gold" : "blue"} />
        </Pressable>
      );
    }
    if (figuryczarne.King.includes(pole)) {
      return (
        <Pressable onPress={() => ustawaktywnafigure(pole)}>
          <ChessKing color={pole === aktywnafigura ? "gold" : "blue"} />
        </Pressable>
      );
    }
    if (figuryczarne.Knight.includes(pole)) {
      return (
        <Pressable onPress={() => ustawaktywnafigure(pole)}>
          <ChessKnight color={pole === aktywnafigura ? "gold" : "blue"} />
        </Pressable>
      );
    }
    if (figuryczarne.Queen.includes(pole)) {
      return (
        <Pressable onPress={() => ustawaktywnafigure(pole)}>
          <ChessQueen color={pole === aktywnafigura ? "gold" : "blue"} />
        </Pressable>
      );
    }
    if (figuryczarne.Bishop.includes(pole)) {
      return (
        <Pressable onPress={() => ustawaktywnafigure(pole)}>
          <ChessBishop color={pole === aktywnafigura ? "gold" : "blue"} />
        </Pressable>
      );
    }
  }
// Można dopisać obliczanie możliwych ruchów dla wszystkich figur, aktualnie działa tylko i wyłącznie dla pionków.
  useEffect(() => {
    const ruch = aktywnafigura?.split("");
    if (ruch?.length) {
      const nastepnyruch = +ruch[0] + (aktywnygracz === "bialy" ? 1: -1) + ruch[1];
      setmozliweruchy([nastepnyruch]);
    }
  }, [aktywnafigura, aktywnygracz]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aktywny gracz:{aktywnygracz} </Text>
      <View style={styles.board}>
        {szachownica.map((rzad, indexrzad) => (
          <View style={styles.row}>
            {rzad.map((pole, indexpole) => (
              <Pressable
                onPress={() => ruchpionka(pole)}
                style={[
                  sprawdzKolorPola(indexpole, indexrzad),
                  mozliweruchy.includes(pole) && styles.poleruchu,
                ]}
              >
                {dodawaniefigurnapole(pole)}
              </Pressable>
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
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
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
  row: {
    flexDirection: "row",
  },
  board: {
    borderWidth: 4,
    borderColor: "black:",
  },
  text: {
    fontSize: 24,
    fontWeight: 800,
    marginBottom: 24,
  },
  poleruchu: {
    borderWidth: 4,
    borderColor: "red",
  },
});
