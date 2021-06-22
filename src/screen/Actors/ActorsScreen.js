import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CardMultimedia from "../../components/CardMultimedia";

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  viewScroll: {
    paddingTop: 15,
    paddingBottom: 50,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "900",
    marginTop: 10,
    marginLeft: 10,
  },
});

const ActorsScreen = () => {
  return (
    <View style={styles.content}>
      <View>
        <Text style={styles.titulo}>Rinking de actores</Text>
        <ScrollView vertical>
          <View style={styles.viewScroll}>
            <CardMultimedia key={1} />
            <CardMultimedia key={2} />
            <CardMultimedia key={3} />
            <CardMultimedia key={4} />
            <CardMultimedia key={5} />
            <CardMultimedia key={6} />
            <CardMultimedia key={7} />
            <CardMultimedia key={8} />
            <CardMultimedia key={9} />
            <CardMultimedia key={10} />
            <CardMultimedia key={11} />
            <CardMultimedia key={12} />
            <CardMultimedia key={13} />
            <CardMultimedia key={14} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ActorsScreen;
