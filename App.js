import { registerRootComponent } from 'expo';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';

// LOGO OFICIAL DE MICROPIA
const LOGO_URL = 'https://static.prod-images.emergentagent.com/jobs/b09505ba-190e-4ca7-9d47-23f73249f18b/images/ead6be8a705c5bff1249e23b0e7accce78ef17c453ae9a93a98fbca30f7ed3ae.png';

// LINKS OFICIALES ACTUALIZADOS (CABLEADO DE TU IMPERIO)
const ISLANDS = [
  { id: 100, name: 'Orígenes', url: 'https://micropia-m100.onrender.com' },
  { id: 101, name: 'El Zoo Invisible', url: 'https://micropia-zoo.onrender.com' },
  { id: 102, name: 'Escudo Inmune', url: 'https://micropia-m102.onrender.com' },
  { id: 103, name: 'Micro-Chef', url: 'https://micropia-m103.onrender.com' },
  { id: 104, name: 'Sinfonía', url: 'https://micropia-m104.onrender.com' },
  { id: 105, name: 'Micro-Mentes', url: '#' }, // Próximamente (Estamos en ello)
  { id: 106, name: 'Aliens en Casa', url: '#' },
  { id: 107, name: 'Futuro Bio-Digital', url: '#' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('Mapa');

  const openIsland = (url) => {
    if (url !== '#') {
      Linking.openURL(url);
    } else {
      alert("¡Sector en construcción! La Dra. Micra está preparando esta sala.");
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
            <Text style={{color: activeTab === tab ? '#00FFFF' : '#FFF', fontWeight: 'bold'}}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.mapContainer}>
        <Text style={styles.title}>Mapa del Imperio</Text>
        <Text style={styles.description}>Toca una isla para viajar a través de lo invisible</Text>
        
        <View style={styles.islandsGrid}>
          {ISLANDS.map(island => (
            <TouchableOpacity 
              key={island.id} 
              style={[styles.islandCard, island.url === '#' && {opacity: 0.4}]} 
              onPress={() => openIsland(island.url)}
            >
              <Text style={styles.islandId}>M{island.id}</Text>
              <Text style={styles.islandName}>{island.name}</Text>
              {island.url !== '#' && <Text style={styles.onlineBadge}>EN LÍNEA</Text>}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.founderText}>"Nunca, nunca, pero nunca te des por vencido."</Text>
        <Text style={styles.founderName}>- Nando, Fundador</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  header: { padding: 40, alignItems: 'center', backgroundColor: '#050505' },
  logo: { width: 150, height: 150, borderRadius: 75 },
  slogan: { color: '#00FFFF', marginTop: 15, fontWeight: 'bold', fontSize: 14, letterSpacing: 2 },
  navBar: { flexDirection: 'row', justifyContent: 'space-around', padding: 15, backgroundColor: '#111', borderBottomWidth: 1, borderBottomColor: '#333' },
  navBtn: { padding: 10 },
  mapContainer: { padding: 20 },
  title: { color: '#FFF', fontSize: 26, textAlign: 'center', marginTop: 20, fontWeight: 'bold' },
  description: { color: '#888', textAlign: 'center', marginBottom: 30, fontSize: 14 },
  islandsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  islandCard: { 
    width: '45%', backgroundColor: '#111', padding: 20, margin: 8, borderRadius: 20, 
    borderWidth: 1, borderColor: '#333', alignItems: 'center', elevation: 5
  },
  islandId: { color: '#00FFFF', fontWeight: 'bold', fontSize: 22 },
  islandName: { color: '#FFF', fontSize: 14, textAlign: 'center', marginTop: 5, fontWeight: '500' },
  onlineBadge: { color: '#00FF00', fontSize: 10, marginTop: 10, fontWeight: 'bold' },
  footer: { padding: 50, alignItems: 'center', borderTopWidth: 1, borderTopColor: '#222' },
  founderText: { color: '#CCFF00', fontSize: 16, fontStyle: 'italic', textAlign: 'center' },
  founderName: { color: '#666', fontSize: 12, marginTop: 10 }
});

registerRootComponent(App);