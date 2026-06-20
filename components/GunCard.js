import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { categoryLabel } from '../data/categories';

export default function GunCard({ gun, onPress }) {
  return (
    <TouchableOpacity testID="gun-card" style={styles.card} onPress={onPress}>
      <Image source={{ uri: gun.imageUrl }} style={styles.thumb} />
      <View style={styles.info}>
        <Text style={styles.name}>{gun.name}</Text>
        <Text style={styles.meta}>
          {categoryLabel(gun.category)} · {gun.caliber}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  thumb: { width: 64, height: 64, borderRadius: 8, backgroundColor: '#ddd' },
  info: { marginLeft: 12, flex: 1 },
  name: { fontSize: 16, fontWeight: 'bold' },
  meta: { fontSize: 13, color: '#666', marginTop: 4 },
});
