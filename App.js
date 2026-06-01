import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

// LOGO OFICIAL DE MICROPIA
const LOGO_URL = 'https://static.prod-images.emergentagent.com/jobs/b09505ba-190e-4ca7-9d47-23f73249f18b/images/ead6be8a705c5bff1249e23b0e7accce78ef17c453ae9a93a98fbca30f7ed3ae.png';

export default function App() {
  const [activeTab, setActiveTab] = useState('Mapa');

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

      {/* AQUÍ VA EL MAPA CIRCULAR MAESTRO */}
      <View style={styles.mapContainer}>
        <Text style={styles.title}>Portal Maestro</Text>
        <Text style={styles.description}>Selecciona una isla para viajar</Text>
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
  title: { color: '#FFF', fontSize: 24, textAlign: 'center', marginTop: 20 },
  description: { color: '#AAA', textAlign: 'center' }
});