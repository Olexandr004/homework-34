import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [emojis, setEmojis] = useState([
        {emoji: '👍', count: 0},
        {emoji: '👎', count: 0},
        {emoji: '❤️', count: 0}
    ]);

    const [winner, setWinner] = useState('');

    const handleEmojiClick = (index) => {
        const newEmojis = [...emojis];
        newEmojis[index].count++;
        setEmojis(newEmojis);
    };

    const showResult = () => {
        const counts = emojis.map(emoji => emoji.count);
        const totalClicks = counts.reduce((acc, curr) => acc + curr, 0);
        const maxCount = Math.max(...counts);
        const winners = emojis.filter(emoji => emoji.count === maxCount);

        if (winners.length === emojis.length || totalClicks === 0) {
            setWinner('No Winner');
        } else if (winners.length === 1) {
            setWinner(winners[0].emoji);
        } else {
            setWinner('No Winner');
        }
    };

    return (
        <div>
            <h1>Emoji clicker</h1>
            <div>
                {emojis.map((emoji, index) => (
                    <span key={index} onClick={() => handleEmojiClick(index)}
                          style={{fontSize: '3em', cursor: 'pointer'}}>
                            {emoji.emoji} - {emoji.count}
                    </span>
                ))}
            </div>
            <button onClick={showResult}>Show Results</button>
            {winner && <h2>Winner: {winner}</h2>}
        </div>
    )
}

export default App;
