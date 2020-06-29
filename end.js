const username= document.getElementById('username');
const saveScoreButton = document.getElementById('saveScoreButton');
const finalScore= document.getElementById('finalScore');
const mostRecentScore = window.localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;

const highScore = JSON.parse(localStorage.getItem('highScore')) || [];

username.addEventListener('keyup',()=>{
    saveScoreButton.disabled= !(username.value);
})

saveHighScore=(e)=>{
    e.preventDefault();
    
    const info= {
        score:mostRecentScore,
        user: username.value
    }
    highScore.push(info);
    highScore.sort((a,b)=>{
        return b.score-a.score;
    })
    highScore.splice(5);
    
    localStorage.setItem('highScore',JSON.stringify(highScore));

    window.location.assign('/');
}