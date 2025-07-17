import { fetchNewsDetail } from '@/api/news.api';
import { news } from '@/types/news';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { PrimaryButton } from '../../../components/PrimaryButton';
import { TextInputComponent } from '../../../components/textInputComponent';

export default function Index() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [item, setItem] = useState<news>({ id: '0', title: "" });
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchNewsDetail(id);
        setItem(data);
        setTitle(data.title);
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
      <View style={[{ justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, padding:16, backgroundColor:'pink' }}>
          <View style={{ flex: 1 }}>
            <TextInputComponent
              value={title}
              onChangeText={setTitle}
              placeholder="Nhập tiêu đề"
              keyboardType="default"
            />
          </View>
          <View style={style.btnUpdate}>
            <PrimaryButton
              title="Cập nhật"
              onPress={() => alert('Cập nhật!')}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const style = StyleSheet.create({
  btnUpdate: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  contain: {
    flex: 1,
    padding: 1,
    //backgroundColor: "black"
    // justifyContent: "center",
    // alignItems: "center",
  },

})
