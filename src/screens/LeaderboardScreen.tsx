import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { getLeaderboard } from '../utils/LeaderboardStorage';
import { useNavigation } from '@react-navigation/native';

const LeaderboardScreen: React.FC = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadLeaderboard() {
      const data = await getLeaderboard();
      setLeaderboard(data);
    }
    loadLeaderboard();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Leaderboard</Text>
      <FlatList
        data={leaderboard}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.entry}>
            <Text style={styles.rank}>{index + 1}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.score}>{item.score}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  entry: { flexDirection: 'row', justifyContent: 'space-between', padding: 10 },
  rank: { fontSize: 18, fontWeight: 'bold' },
  name: { fontSize: 18 },
  score: { fontSize: 18, fontWeight: 'bold' },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default LeaderboardScreen;
