import React from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

type NewsItem = {
    id: string;
    title: string;
    image?: string;
    description?: string;
    date?: string;
};

type NewsListProps = {
    data: NewsItem[];
    onPressItem?: (item: NewsItem) => void;
};

const NewsList: React.FC<NewsListProps> = ({ data, onPressItem }) => {
    const renderItem = ({ item }: { item: NewsItem }) => (
        <TouchableOpacity
            onPress={() => onPressItem?.(item)}
            style={styles.card}
            activeOpacity={0.8}
        >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text numberOfLines={3} style={styles.description}>
                    {item.description}
                </Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ padding: 16 }}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default NewsList;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 16,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    image: {
        width: '100%',
        height: 180,
    },
    content: {
        padding: 12,
    },
    date: {
        fontSize: 12,
        color: '#999',
        marginBottom: 4,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 6,
        color: '#333',
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
});
