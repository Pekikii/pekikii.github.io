import React, { useState, useEffect, useRef } from 'react';
import './ArtikdleGame.css';
import csvData from './ArtikdleData'; // adjust path as needed

function parseCSV(data) {
    const lines = data.trim().split('\n');
    const [headerLine, ...rows] = lines;
    const headers = headerLine.split(',');
    return rows.map(row => {
        const values = row.split(',');
        return {
            [headers[0]]: values[0].trim(),
            [headers[1]]: values[1].trim()
        };
    });
}

function getSeedFromDate() {
    const now = new Date();
    return now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
}

function getDeterministicRandomIndices(arrayLength, count, seed) {
    const indices = [];
    let current = seed;
    while (indices.length < count) {
        current = (current * 9301 + 49297) % 233280;
        const index = Math.floor((current / 233280) * arrayLength);
        if (!indices.includes(index)) {
            indices.push(index);
        }
    }
    return indices;
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function getTodayKey() {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    return `quiz-done-${yyyy}-${mm}-${dd}`;

}

const ElapsedTimeDisplay = ({ startTime, submitted }) => {
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (!startTime || submitted) return;

        const update = () => {
            const newElapsed = Math.floor((Date.now() - startTime) / 1000);
            setTime(newElapsed);
        };

        update();
        intervalRef.current = setInterval(update, 1000);

        return () => clearInterval(intervalRef.current);
    }, [startTime, submitted]);

    return <span>{formatTime(time)}</span>;
};

const ArtikdleGame = () => {
    const [quizEntries, setQuizEntries] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});
    const [startTime, setStartTime] = useState(null);
    const [finalTime, setFinalTime] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [completedData, setCompletedData] = useState(null);
    useEffect(() => {
        console.log('quizEntries changed:', quizEntries);
    }, [quizEntries]);
    console.log('ArtikdleGame render');

    useEffect(() => {
        const allEntries = parseCSV(csvData);
        const seed = getSeedFromDate();
        const selectedIndices = getDeterministicRandomIndices(allEntries.length, 5, seed);
        const selected = selectedIndices.map(i => allEntries[i]);

        setQuizEntries(selected);

        const todayKey = getTodayKey();
        const stored = localStorage.getItem(todayKey);
        if (stored) {
            const data = JSON.parse(stored);
            setCompletedData(data);
            setScore(data.score);
            setFinalTime(data.time);
            setSubmitted(true);
        } else {
            setStartTime(Date.now());
        }
    }, []);


    const mapUserInput = (input) => {
        const normalized = (input || '').trim().toLowerCase();
        if (normalized === 'der') return 'm';
        if (normalized === 'die') return 'f';
        if (normalized === 'das') return 'n';
        if (normalized === 'plural') return 'p';
        return '';
    };

    const handleChange = (index, value) => {
        setUserAnswers(prev => ({ ...prev, [index]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const endTime = Date.now();
        const totalElapsed = Math.floor((endTime - startTime) / 1000);
        setFinalTime(totalElapsed);

        let correct = 0;
        quizEntries.forEach((entry, index) => {
            const answer = mapUserInput(userAnswers[index] || '');
            if (answer === entry.art.toLowerCase()) {
                correct++;
            }
        });

        setScore(correct);
        setSubmitted(true);

        const todayKey = getTodayKey();
        localStorage.setItem(todayKey, JSON.stringify({
            score: correct,
            total: quizEntries.length,
            time: totalElapsed
        }));
    };

    const Countdown = () => {
        const [timeLeft, setTimeLeft] = useState('');
        useEffect(() => {
            const update = () => {
                const now = new Date();
                const midnight = new Date();
                midnight.setDate(midnight.getDate() + 1);
                midnight.setHours(0, 0, 0, 0);
                const diff = Math.floor((midnight - now) / 1000);
                const hours = Math.floor(diff / 3600);
                const minutes = Math.floor((diff % 3600) / 60);
                const seconds = diff % 60;
                setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
            };
            update();
            const id = setInterval(update, 1000);
            return () => clearInterval(id);
        }, []);
        return <p className="countdown">⏳ Nächstes Quiz in: {timeLeft}</p>;
    };

    const QuizContent = () => (

        <form className="quiz-box" onSubmit={handleSubmit}>
            {quizEntries.map((entry, index) => (
                <div className="quiz-row" key={`${entry.word}-${index}`}>
                    <input
                        type="text"
                        value={userAnswers[index] || ''}
                        onChange={(e) => handleChange(index, e.target.value)}
                        disabled={submitted}
                        className={
                            submitted
                                ? mapUserInput(userAnswers[index]) === entry.art.toLowerCase()
                                    ? 'correct'
                                    : 'incorrect'
                                : ''
                        }
                    />
                    <span className="quiz-word">{entry.word}</span>
                </div>
            ))}
            {!submitted && <button type="submit">Antworten abschicken</button>}
            {submitted && (
                <>
                    <div className="feedback">
                        {quizEntries.map((entry, index) => {
                            const answer = mapUserInput(userAnswers[index]);
                            const correct = entry.art.toLowerCase();
                            const correctWord = correct === 'm' ? 'der' : correct === 'f' ? 'die' : correct === 'n' ? 'das' : 'Plural';
                            return answer === correct
                                ? <div key={index}>✅ "{entry.word}": Richtig!</div>
                                : <div key={index}>❌ "{entry.word}": Die richtige Antwort ist "{correctWord}"</div>;
                        })}
                    </div>
                    <p className="score">
                        Du hast {score} von {quizEntries.length} richtig
                        {finalTime !== null && ` in ${formatTime(finalTime)}.`}
                    </p>
                        </>
            )}
        </form>
    );

    return (
        <div className="artikdle-container">
            <div className="quiz-content-inside-frame">
                <h1>Artikdle</h1>
                <div className="subtitle-timer-bar">
                    <div className="subtitle">der, die, das, oder Plural?</div>
                    {!submitted && !completedData && (
                    <div className="timer">
                    {completedData ? (
                        formatTime(completedData.time)
                    ) : (
                        <ElapsedTimeDisplay startTime={startTime} submitted={submitted} />
                    )}
                    </div>
                    )}
                </div>
                {completedData ? (
                    <div className="quiz-box">
                        <h2>✅ Du hast das heutige Quiz bereits abgeschlossen!</h2>
                        <p className="score">
                          Du hast {score} von {quizEntries.length} richtig
                          {finalTime !== null && ` in ${formatTime(finalTime)}.`}
                        </p>
                        <Countdown />
                    </div>
                    ) : (
                        <QuizContent />
                    )}
                </div>
        </div>
    );
};

export default ArtikdleGame;
