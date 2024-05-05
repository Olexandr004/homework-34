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
        const maxCount = Math.max(...emojis.map(emoji => emoji.count));
        const winEmoji = emojis.find(emoji => emoji.count === maxCount);
        setWinner(winEmoji.emoji);
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
