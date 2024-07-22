export const questions = [
  {
    question: 'What is the capital of Spain?',
    answers: ['Madrid', 'Lisbon', 'Rome', 'Athens'],
    correct: 0,
  },
  {
    question: 'What is the capital of Germany?',
    answers: ['Berlin', 'Vienna', 'Zurich', 'Prague'],
    correct: 0,
  },
  {
    question: 'What is the capital of Italy?',
    answers: ['Rome', 'Paris', 'Madrid', 'Berlin'],
    correct: 0,
  },
  {
    question: 'What is the capital of Portugal?',
    answers: ['Lisbon', 'Madrid', 'Rome', 'Athens'],
    correct: 0,
  },
  {
    question: 'What is the capital of Greece?',
    answers: ['Athens', 'Rome', 'Istanbul', 'Sofia'],
    correct: 0,
  },
  {
    question: 'What is the capital of the United Kingdom?',
    answers: ['London', 'Edinburgh', 'Dublin', 'Cardiff'],
    correct: 0,
  },
  {
    question: 'What is the capital of the United States?',
    answers: ['Washington, D.C.', 'New York', 'Los Angeles', 'Chicago'],
    correct: 0,
  },
  {
    question: 'What is the capital of Canada?',
    answers: ['Ottawa', 'Toronto', 'Vancouver', 'Montreal'],
    correct: 0,
  },
  {
    question: 'What is the capital of Australia?',
    answers: ['Canberra', 'Sydney', 'Melbourne', 'Brisbane'],
    correct: 0,
  },
  {
    question: 'What is the capital of Japan?',
    answers: ['Tokyo', 'Osaka', 'Kyoto', 'Nagoya'],
    correct: 0,
  },
  {
    question: 'What is the capital of China?',
    answers: ['Beijing', 'Shanghai', 'Hong Kong', 'Guangzhou'],
    correct: 0,
  },
  {
    question: 'What is the capital of India?',
    answers: ['New Delhi', 'Mumbai', 'Bangalore', 'Kolkata'],
    correct: 0,
  },
  {
    question: 'What is the capital of Brazil?',
    answers: ['Brasília', 'Rio de Janeiro', 'São Paulo', 'Salvador'],
    correct: 0,
  },
  {
    question: 'What is the capital of Russia?',
    answers: ['Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg'],
    correct: 0,
  },
  {
    question: 'What is the capital of South Africa?',
    answers: ['Pretoria', 'Cape Town', 'Johannesburg', 'Durban'],
    correct: 0,
  },
  {
    question: 'What is the capital of Egypt?',
    answers: ['Cairo', 'Alexandria', 'Giza', 'Luxor'],
    correct: 0,
  },
  {
    question: 'What is the capital of Argentina?',
    answers: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza'],
    correct: 0,
  },
  {
    question: 'What is the capital of Mexico?',
    answers: ['Mexico City', 'Guadalajara', 'Monterrey', 'Cancun'],
    correct: 0,
  },
  {
    question: 'What is the capital of Turkey?',
    answers: ['Ankara', 'Istanbul', 'Izmir', 'Antalya'],
    correct: 0,
  },
  {
    question: 'What is the capital of Saudi Arabia?',
    answers: ['Riyadh', 'Jeddah', 'Mecca', 'Medina'],
    correct: 0,
  },
];

export function getRandomQuestions(number: number) {
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, number);
}
