import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Question from '../components/Question';
import { getRandomQuestions } from '../utils/questions';
import { addLeaderboardEntry } from '../utils/LeaderboardStorage';
import { styles } from '../styles';

const QuizScreen: React.FC = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [name, setName] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    setQuestions(getRandomQuestions(20));
  }, []);

  const handleAnswer = (index: number) => {
    const correctAnswerIndex = questions[currentQuestionIndex].correct;
    if (correctAnswerIndex === index) {
      setScore(score + 1);
      Alert.alert('Correct!', 'You have answered correctly.');
    } else {
      Alert.alert('Incorrect', `The correct answer was ${questions[currentQuestionIndex].answers[correctAnswerIndex]}.`);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleSaveScore = async () => {
    if (name) {
      await addLeaderboardEntry({ name, score });
      Alert.alert('Success', 'Your score has been saved to the leaderboard!');
      navigation.navigate('Leaderboard');
    } else {
      Alert.alert('Error', 'Please enter your name.');
    }
  };

  if (questions.length === 0) {
    return <Text>Loading...</Text>;
  }

  if (quizFinished) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Quiz Finished!</Text>
        <Text style={styles.score}>Your Score: {score}</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
        <TouchableOpacity style={styles.button} onPress={handleSaveScore}>
          <Text style={styles.buttonText}>Save to Leaderboard</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.questionCounter}>
        Question {currentQuestionIndex + 1} of {questions.length}
      </Text>
      <Question question={currentQuestion.question} answers={currentQuestion.answers} onAnswer={handleAnswer} />
      <Text style={styles.score}>Score: {score}</Text>
    </View>
  );
};

export default QuizScreen;
