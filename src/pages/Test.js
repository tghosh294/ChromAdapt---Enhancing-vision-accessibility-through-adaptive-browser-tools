// src/pages/Test.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import IshiharaTest from '../components/test/IshiharaTest';
import TestResults from '../components/test/TestResults';
import './Test.css';

const Test = ({ setUser, setCvdType, setSeverity }) => {
  const [currentTest, setCurrentTest] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [testData, setTestData] = useState(null);
  const navigate = useNavigate();

  // Sample Ishihara plates data
  const ishiharaPlates = [
  { id: 1, correctAnswer: '12', type: 'normal' },
  { id: 2, correctAnswer: '8', type: 'deuteranopia' },
  { id: 3, correctAnswer: '6', type: 'protanopia' },
  { id: 4, correctAnswer: '29', type: 'normal' },
  { id: 5, correctAnswer: '57', type: 'tritanopia' },
  { id: 6, correctAnswer: '5', type: 'achromatopsia' },
];

  useEffect(() => {
    // Initialize test data
    setTestData({
      plates: ishiharaPlates,
      startTime: new Date(),
      completed: false
    });
  }, []);

  const handleAnswer = (answer) => {
    const newAnswers = [...userAnswers, {
      plateId: ishiharaPlates[currentTest].id,
      userAnswer: answer,
      correctAnswer: ishiharaPlates[currentTest].correctAnswer,
      isCorrect: answer === ishiharaPlates[currentTest].correctAnswer
    }];

    setUserAnswers(newAnswers);

    if (currentTest < ishiharaPlates.length - 1) {
      setCurrentTest(currentTest + 1);
    } else {
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (answers) => {
    const results = {
      totalQuestions: answers.length,
      correctAnswers: answers.filter(a => a.isCorrect).length,
      accuracy: (answers.filter(a => a.isCorrect).length / answers.length) * 100,
      suspectedType: determineCVDType(answers),
      severity: calculateSeverity(answers),
      testDate: new Date().toISOString()
    };

    setTestData(prev => ({ ...prev, results, completed: true }));
    setShowResults(true);

    // Create user profile
    const userProfile = {
      id: Date.now(),
      testResults: results,
      preferences: getDefaultPreferences(results.suspectedType),
      createdAt: new Date().toISOString()
    };

    setUser(userProfile);
    setCvdType(results.suspectedType);
    setSeverity(results.severity);
    
    // Save to localStorage
    localStorage.setItem('colorBlindUser', JSON.stringify(userProfile));
  };

  const determineCVDType = (answers) => {
    // Simplified logic - in real implementation, this would be more sophisticated
    const errorPattern = answers.filter(a => !a.isCorrect).map(a => 
      ishiharaPlates.find(p => p.id === a.plateId)?.type
    );
    
    if (errorPattern.includes('protanopia')) return 'protanopia';
    if (errorPattern.includes('deuteranopia')) return 'deuteranopia';
    if (errorPattern.includes('tritanopia')) return 'tritanopia';
    if (errorPattern.includes('achromatopsia')) return 'achromatopsia';
    return 'normal';
  };

  const calculateSeverity = (answers) => {
    const accuracy = (answers.filter(a => a.isCorrect).length / answers.length) * 100;
    if (accuracy >= 90) return 'mild';
    if (accuracy >= 70) return 'moderate';
    return 'severe';
  };

  const getDefaultPreferences = (type) => {
    const basePreferences = {
      filterStrength: 0.7,
      contrast: 1.0,
      brightness: 1.0,
      visualCues: true,
      theme: 'auto'
    };

    const typeSpecific = {
      protanopia: { redBoost: 0.8, greenReduce: 0.3 },
      deuteranopia: { redReduce: 0.3, greenBoost: 0.8 },
      tritanopia: { blueBoost: 0.7, yellowAdjust: 0.5 },
      achromatopsia: { saturation: 0.1, contrast: 1.5 }
    };

    return { ...basePreferences, ...typeSpecific[type] };
  };

  const retakeTest = () => {
    setCurrentTest(0);
    setUserAnswers([]);
    setShowResults(false);
    setTestData(prev => ({ ...prev, completed: false, results: null }));
  };

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  if (!testData) {
    return <div className="test-loading">Loading test...</div>;
  }

  return (
    <div className="test-page">
      <div className="container">
        <header className="test-header">
          <h1>Color Vision Test</h1>
          <p>Take our online Ishihara test to determine your color vision type and severity</p>
        </header>

        {!showResults ? (
          <IshiharaTest
            currentTest={currentTest}
            totalTests={ishiharaPlates.length}
            plate={ishiharaPlates[currentTest]}
            onAnswer={handleAnswer}
          />
        ) : (
          <TestResults
            results={testData.results}
            onRetake={retakeTest}
            onContinue={goToDashboard}
          />
        )}
      </div>
    </div>
  );
};

export default Test;