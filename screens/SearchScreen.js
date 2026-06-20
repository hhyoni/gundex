import { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import { searchGuns } from '../lib/gunData';
import GunCard from '../components/GunCard';

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const results = searchGuns(query);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="총기 이름 검색"
        value={query}
        onChangeText={setQuery}
      />
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GunCard gun={item} onPress={() => navigation.navigate('Detail', { id: item.id })} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  input: {
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 15,
  },
});
