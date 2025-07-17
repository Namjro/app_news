import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { NewsDataType } from "@/types";
import { Colors } from "@/constants/Colors";
import Loading from "./Loading";
import { Link, router } from "expo-router";

type Props = {
  newsList: NewsDataType[];
};

const NewsList = ({ newsList }: Props) => {
  return (
    <View style={styles.container}>
      {newsList.length == 0 ? (
        <Loading size="large" color={"#FF4C4C"} />
      ) : (
        newsList.map((item, index) => (
          <TouchableOpacity activeOpacity={1}
            key={item.article_id}
            onPress={() => router.push(`/news/${item.article_id}`)}>
            <NewsItem item={item} />
          </TouchableOpacity>
        ))
      )}
    </View>
  );
};

export default NewsList;

export const NewsItem = ({ item }: { item: NewsDataType }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image_url }} style={styles.itemImage} />
      <View style={styles.itemInformation}>
        <Text style={styles.itemCategory}>{item.category}</Text>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <View style={styles.itemSourceInformation}>
          <Image
            source={{ uri: item.source_icon }}
            style={styles.itemSourceImage}
          />
          <Text style={styles.itemSourceName}>{item.source_name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 50,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    flex: 1,
    gap: 10,
  },
  itemImage: {
    width: 90,
    height: 100,
    borderRadius: 20,
    marginRight: 10,
  },
  itemInformation: {
    flex: 1,
    gap: 10,
    justifyContent: "space-between",
  },
  itemCategory: {
    fontSize: 12,
    color: Colors.darkGrey,
    textTransform: "capitalize",
  },
  itemTitle: {
    fontSize: 12,
    color: Colors.black,
    fontWeight: "600",
  },
  itemSourceInformation: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  itemSourceImage: {
    width: 20,
    height: 20,
    borderRadius: 20,
  },
  itemSourceName: {
    fontSize: 12,
    fontWeight: "400",
    color: Colors.darkGrey,
  },
});
