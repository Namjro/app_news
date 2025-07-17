import { fetchNewsDetail } from '@/api/news.api';
import { news } from '@/types/news';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [item, setItem] = useState<news>({ id: '0', title: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchNewsDetail(id);
        setItem(data);
      } catch (err) {
        console.error('Fetch news failed', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const handRemove = () => {
    alert('delete')
  }
  const handEdit = () => {
    router.push({
      pathname: "/(tabs)/home/edit",
      params: { id: item.id }
    });
  }

  // 👉 UI cho trạng thái loading
  if (loading) {
    return (
      <View style={[style.contain, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <View style={[style.item, { backgroundColor: 'pink' }]}>
      <Image
        style={style.image}
        source="https://picsum.photos/seed/696/3000/2000"
        contentFit="cover"
        transition={1000}
      />
      <View style={style.bodyItem}>
        <Text style={style.itemTitle}>{item.title}</Text>
      </View>
      <View style={style.action}>
        <AntDesign style={style.actionItem} name="delete" size={24} color="black" onPress={handRemove} />
        <AntDesign style={style.actionItem} name="edit" size={24} color="black" onPress={handEdit} />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  actionItem: {
    padding: 5
  },
  action: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 5
  },
  contain: {
    flex: 1,
    padding: 1,
    //backgroundColor: "black"
    // justifyContent: "center",
    // alignItems: "center",
  },
  item: {
    flex: 1,
    //height: 200,
    padding: 8,
    marginVertical: 5,
    borderRadius: 5
  },
  image: {
    height: "80%",
    width: "100%",
    backgroundColor: '#0553',
    borderRadius: 10
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 600
  },
  bodyItem: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    padding: 5
  }
})
