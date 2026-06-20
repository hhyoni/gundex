import { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { getGunsByCategory } from '../lib/gunData';
import { CATEGORIES } from '../data/categories';
import GunCard from '../components/GunCard';

const FILTERS = [{ code: 'all', label: '전체' }, ...CATEGORIES];

export default function ListScreen({ navigation }) {
  const [selected, setSelected] = useState('all');
  const guns = getGunsByCategory(selected);

  return (
    <View style={styles.container}>
      <View style={styles.filters}>
        {FILTERS.map((f) => (
          <TouchableOpacity key={f.code} onPress={() => setSelected(f.code)}>
            <Text style={[styles.filter, selected === f.code && styles.filterActive]}>
              {f.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={guns}
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
  filters: { flexDirection: 'row', flexWrap: 'wrap', padding: 8, gap: 8 },
  filter: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#eee',
    fontSize: 13,
  },
  filterActive: { backgroundColor: '#333', color: '#fff' },
});
