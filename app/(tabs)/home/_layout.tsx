import { Stack } from "expo-router";

export default function HomeLayout() {
    return (<Stack>
        <Stack.Screen name="index" options={{ title: "Trang chủ" }} />
        <Stack.Screen name="detail" options={{ title: "Chi tiết" }} />
        <Stack.Screen name="edit" options={{ title: "Chỉnh sửa" }} />
    </Stack>);
}
