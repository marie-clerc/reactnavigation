// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Podcast</Text>
    </View>
  );
}

function DirectScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Direct</Text>
      </View>
    );
  }

function SearchScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Recherche</Text>
      </View>
    );
  }

function LibraryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bibliothèque</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Podcast') {
              iconName = focused
                ? 'ios-play'
                : 'ios-play-outline';
            } if (route.name === 'Direct') {
                iconName = focused
                ? 'ios-radio'
                : 'ios-radio-outline';
            } if (route.name === 'Recherche') {
                iconName = focused
                ? 'ios-search'
                : 'ios-search-outline';
            }
            else if (route.name === 'Bibliothèque') {
              iconName = focused 
                ? 'ios-reorder-three' 
                : 'ios-reorder-three-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#1DB558',
          tabBarInactiveTintColor: '#646470',
        })}
      >
        <Tab.Screen name="Podcast" component={HomeScreen} options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="Direct" component={DirectScreen} />
        <Tab.Screen name="Recherche" component={SearchScreen} />
        <Tab.Screen name="Bibliothèque" component={LibraryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
