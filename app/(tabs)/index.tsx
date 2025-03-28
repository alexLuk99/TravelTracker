import { Image, StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Mapbox from '@rnmapbox/maps';
import { Stack } from 'expo-router';
import Map from '@/components/Map';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{  title: 'Home' }} />
      <Map />
    </SafeAreaView>
  );
}
