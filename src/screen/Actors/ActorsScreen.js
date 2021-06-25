import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CardPerson from "../../components/CardPerson";
import { ActorsContext } from "../../contexts/ActorsContextProvider";

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  flatStyle: {
    paddingTop: 15,
    paddingBottom: 50,
    alignItems: "center",
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
  const { dataTopActors } = useContext(ActorsContext);

  return (
    <View style={styles.content}>
      <Text style={styles.titulo}>Rinking de actores</Text>
      <View style={styles.flatStyle}>
        <FlatList
          data={dataTopActors}
          renderItem={({ item: { id, profile_path, name, popularity } }) => (
            <CardPerson
              imagen={profile_path}
              name={name}
              votes={popularity}
              id={id}
              keyExtractor={(item) => item.id}
            />
          )}
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default ActorsScreen;
