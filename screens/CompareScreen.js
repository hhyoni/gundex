import { View, Text, Image, ScrollView, Button, StyleSheet } from 'react-native';
import { categoryLabel } from '../data/categories';
import { useCompare } from '../context/CompareContext';

const SPECS = [
  { label: '분류', format: (g) => categoryLabel(g.category) },
  { label: '구경', format: (g) => g.caliber },
  { label: '무게', format: (g) => g.weight },
  { label: '길이', format: (g) => g.length },
  { label: '연도', format: (g) => String(g.year) },
  { label: '제조국', format: (g) => g.country },
];

export default function CompareScreen() {
  const { compareList, clearCompare } = useCompare();

  if (compareList.length < 2) {
    return (
      <View style={styles.center}>
        <Text>비교할 총기를 2개 담아주세요. (현재 {compareList.length}개)</Text>
      </View>
    );
  }

  const [a, b] = compareList;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerRow}>
        <View style={styles.col}>
          <Image source={{ uri: a.imageUrl }} style={styles.thumb} />
          <Text style={styles.name}>{a.name}</Text>
        </View>
        <View style={styles.col}>
          <Image source={{ uri: b.imageUrl }} style={styles.thumb} />
          <Text style={styles.name}>{b.name}</Text>
        </View>
      </View>
      {SPECS.map((spec) => (
        <View key={spec.label} style={styles.row}>
          <Text style={styles.label}>{spec.label}</Text>
          <Text style={styles.val}>{spec.format(a)}</Text>
          <Text style={styles.val}>{spec.format(b)}</Text>
        </View>
      ))}
      <View style={styles.clear}>
        <Button title="비교함 비우기" onPress={clearCompare} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 12 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  headerRow: { flexDirection: 'row' },
  col: { flex: 1, alignItems: 'center' },
  thumb: { width: 80, height: 80, borderRadius: 8, backgroundColor: '#ddd' },
  name: { fontWeight: 'bold', marginTop: 6, textAlign: 'center' },
  row: { flexDirection: 'row', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  label: { width: 64, color: '#666' },
  val: { flex: 1, textAlign: 'center' },
  clear: { marginTop: 16 },
});
