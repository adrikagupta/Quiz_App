const highScoreList = document.getElementById('highScoreList');
const highScores= JSON.parse(localStorage.getItem('highScore'));

highScoreList.innerHTML = highScores.map(score=>{
    return `<li class="userScoreList">${score.user} - ${score.score}</li>`;
}).join("");