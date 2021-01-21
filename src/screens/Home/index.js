import React from "react";
import { View, StyleSheet } from "react-native";
import Categoria from "../../components/Categoria";

export default function () {
  return (
    <View style={style.container}>
      <Categoria categoriaNome="Vendas" />
      <Categoria categoriaNome="Compras" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 30
  },
});
