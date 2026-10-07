import { useState } from 'react';
import {
  Button,
  I18nManager,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

const ITEMS = Array.from({ length: 12 }, (_, i) => i + 1);

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <View style={styles.container}>
      <Text>{`isRTL=${I18nManager.isRTL}`}</Text>
      <Button
        title={visible ? 'Unmount' : 'Mount'}
        onPress={() => setVisible(v => !v)}
      />
      {visible && (
        <ScrollView horizontal style={styles.scroll}>
          {ITEMS.map(n => (
            <View key={n} style={styles.item}>
              <Text style={styles.itemText}>{n}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 80, backgroundColor: '#fff' },
  scroll: { flexGrow: 0 },
  item: {
    width: 90,
    height: 90,
    margin: 6,
    backgroundColor: '#4a7dff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: { color: '#fff', fontSize: 28 },
});

export default App;
