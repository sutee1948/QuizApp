import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button title="Start Quiz" onPress={() => navigation.navigate('Quiz')} />
      <Button title="Leaderboard" onPress={() => navigation.navigate('Leaderboard')} />
    </View>
  );
};

export default HomeScreen;
