import {
  ScrollView, View, Text, Image, Button, StyleSheet, Linking, Alert,
} from 'react-native';
import { getGunById } from '../lib/gunData';
import { categoryLabel } from '../data/categories';
import { useCompare } from '../context/CompareContext';

function Row({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
  );
}

export default function DetailScreen({ route }) {
  const { id } = route.params;
  const gun = getGunById(id);
  const { addToCompare } = useCompare();

  if (!gun) {
    return (
      <View style={styles.center}>
        <Text>총기 정보를 찾을 수 없어요.</Text>
      </View>
    );
  }

  const handleAdd = () => {
    const added = addToCompare(gun);
    if (!added) {
      Alert.alert('담지 못했어요', '이미 담겼거나 비교함이 가득 찼어요 (최대 2개).');
    } else {
      Alert.alert('비교함에 담았어요', '비교 탭에서 확인하세요.');
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image source={{ uri: gun.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{gun.name}</Text>
      <Row label="분류" value={categoryLabel(gun.category)} />
      <Row label="제조사" value={gun.manufacturer} />
      <Row label="제조국" value={gun.country} />
      <Row label="구경" value={gun.caliber} />
      <Row label="무게" value={gun.weight} />
      <Row label="길이" value={gun.length} />
      <Row label="연도" value={String(gun.year)} />
      <Text style={styles.desc}>{gun.description}</Text>
      <Text style={styles.credit}>사진 출처: {gun.imageCredit}</Text>
      <View style={styles.buttons}>
        <Button title="더 알아보기" onPress={() => Linking.openURL(gun.sourceUrl)} />
        <Button title="비교함에 담기" onPress={handleAdd} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 16 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  image: { width: '100%', height: 200, borderRadius: 8, backgroundColor: '#ddd' },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 12 },
  row: { flexDirection: 'row', paddingVertical: 6, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  rowLabel: { width: 80, color: '#666' },
  rowValue: { flex: 1, fontWeight: '500' },
  desc: { marginTop: 16, lineHeight: 22 },
  credit: { marginTop: 12, fontSize: 12, color: '#999' },
  buttons: { marginTop: 16, gap: 8 },
});
