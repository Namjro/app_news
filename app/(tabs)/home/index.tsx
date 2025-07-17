import { fetchNewsList } from '@/api/news.api';
import NewsList from '@/components/NewsList';
import { news } from '@/types/news';
import { router } from "expo-router";
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [items, setItems] = useState<news[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchNewsList();
        setItems(data);
      } catch (err) {
        console.error('Fetch news failed', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  // 👉 UI cho trạng thái loading
  if (loading) {
    return (
      <View style={[style.contain, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  // 👉 UI khi danh sách rỗng
  if (!items.length) {
    return (
      <View style={[style.contain, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ color: '#fff' }}>Danh sách trống</Text>
      </View>
    );
  }
  return (
    <View
      style={style.contain}
    >
      <NewsList data={items}
        onPressItem={(item) => router.push({
          pathname: '/(tabs)/home/detail',
          params: { id: item.id }
        })}
      />
    </View>
  );
}
const style = StyleSheet.create({
  contain: {
    flex: 1,
    padding: 1,
  },
  text: {
    color: "#fff"
  },
  body: {
    flex: 1,
  },
  item: {
    flex: 1,
    height: 200,
    padding: 8,
    marginVertical: 5,
    borderRadius: 5
  },
  image: {
    height: "80%",
    width: "100%",
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
