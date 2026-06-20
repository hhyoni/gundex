import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CompareProvider } from './context/CompareContext';
import ListScreen from './screens/ListScreen';
import SearchScreen from './screens/SearchScreen';
import CompareScreen from './screens/CompareScreen';
import DetailScreen from './screens/DetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="도감" component={ListScreen} />
      <Tab.Screen name="검색" component={SearchScreen} />
      <Tab.Screen name="비교" component={CompareScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <CompareProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name="Detail" component={DetailScreen} options={{ title: '상세 정보' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </CompareProvider>
  );
}
