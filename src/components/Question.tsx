import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { shuffle } from '../utils/shuffle';

interface QuestionProps {
  question: string;
  answers: string[];
  onAnswer: (index: number) => void;
}

const Question: React.FC<QuestionProps> = ({ question, answers, onAnswer }) => {
  const shuffledAnswers = useMemo(() => shuffle([...answers]), [answers]);

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      {shuffledAnswers.map((answer, index) => (
        <TouchableOpacity key={index} style={styles.answer} onPress={() => onAnswer(index)}>
          <Text>{answer}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  question: { fontSize: 18, fontWeight: 'bold' },
  answer: { marginTop: 10, padding: 10, backgroundColor: '#eee' },
});

export default Question;
