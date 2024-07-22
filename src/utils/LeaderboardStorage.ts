import AsyncStorage from '@react-native-async-storage/async-storage';

const LEADERBOARD_KEY = 'LEADERBOARD';

interface LeaderboardEntry {
  name: string;
  score: number;
}

export const getLeaderboard = async (): Promise<LeaderboardEntry[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(LEADERBOARD_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Error reading leaderboard', e);
    return [];
  }
};

export const saveLeaderboard = async (leaderboard: LeaderboardEntry[]) => {
  try {
    const jsonValue = JSON.stringify(leaderboard);
    await AsyncStorage.setItem(LEADERBOARD_KEY, jsonValue);
  } catch (e) {
    console.error('Error saving leaderboard', e);
  }
};

export const addLeaderboardEntry = async (entry: LeaderboardEntry) => {
  const leaderboard = await getLeaderboard();
  leaderboard.push(entry);
  leaderboard.sort((a, b) => b.score - a.score); // Sort by score descending
  await saveLeaderboard(leaderboard);
};
