import { registerRootComponent } from 'expo';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';

// LOGO OFICIAL DE MICROPIA
const LOGO_URL = 'https://static.prod-images.emergentagent.com/jobs/b09505ba-190e-4ca7-9d47-23f73249f18b/images/ead6be8a705c5bff1249e23b0e7accce78ef17c453ae9a93a98fbca30f7ed3ae.png';

// LINKS OFICIALES DE TUS ISLAS (CABLEADO FINAL)
const ISLANDS = [
  { id: 100, name: 'Orígenes', url: 'https://micropia-m100.onrender.com' },
  { id: 101, name: 'El Zoo Invisible', url: 'https://micropia-zoo.onrender.com' },
  { id: 102, name: 'Escudo Inmune', url: '#' }, // Próximamente
  { id: 103, name: 'Micro-Chef', url: '#' },
  { id: 104, name: 'Sinfonía', url: '#' },
  { id: 105, name: 'Micro-Mentes', url: '#' },
  { id: 106, name: 'Aliens en Casa', url: '#' },
  { id: 107, name: 'Futuro Bio-Digital', url: '#' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('Mapa');

  const openIsland = (url) => {
    if (url !== '#') {
      Linking.openURL(url);
    } else {
      alert("Este sector está en construcción. ¡Pronto podrás viajar aquí!");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: LOGO_URL }} style={styles.logo} />
        <Text style={styles.slogan}>UN MUNDO DENTRO DE TU MUNDO</Text>
      </View>

      <View style={styles.navBar}>
        {['Mapa', 'Álbum', 'Tienda', 'Mensaje'].map(tab => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)} style={styles.navBtn}>
            <Text style={{color: activeTab === tab ? '#00FFFF' : '#FFF'}}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.mapContainer}>
        <Text style={styles.title}>Mapa del Imperio</Text>
        <Text style={styles.description}>Toca una isla para iniciar el viaje</Text>
        
        <View style={styles.islandsGrid}>
          {ISLANDS.map(island => (
            <TouchableOpacity 
              key={island.id} 
              style={[styles.islandCard, island.url === '#' && {opacity: 0.5}]} 
              onPress={() => openIsland(island.url)}
            >
              <Text style={styles.islandId}>M{island.id}</Text>
              <Text style={styles.islandName}>{island.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  header: { padding: 30, alignItems: 'center' },
  logo: { width: 150, height: 150, borderRadius: 75 },
  slogan: { color: '#00FFFF', marginTop: 10, fontWeight: 'bold' },
  navBar: { flexDirection: 'row', justifyContent: 'space-around', padding: 15, backgroundColor: '#111' },
  navBtn: { padding: 10 },
  mapContainer: { padding: 20 },
  title: { color: '#FFF', fontSize: 24, textAlign: 'center', marginTop: 20 },
  description: { color: '#AAA', textAlign: 'center', marginBottom: 20 },
  islandsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  islandCard: { 
    width: '45%', backgroundColor: '#1a1a2e', padding: 20, margin: 5, borderRadius: 15, 
    borderLeftWidth: 5, borderLeftColor: '#00FFFF', alignItems: 'center' 
  },
  islandId: { color: '#00FFFF', fontWeight: 'bold', fontSize: 18 },
  islandName: { color: '#FFF', fontSize: 14, textAlign: 'center', marginTop: 5 }
});

registerRootComponent(App);