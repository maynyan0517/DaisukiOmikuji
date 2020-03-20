'use strict';

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        const results = ['ちゅき','だいしゅき','しゅきぃ','すきっ','♡','にゃん','にゃわん'];
        btn.textContent = results[Math.floor(Math.random() * results.length)];
        // const n = Math.random();
        // if (n <0.2) {
        //     btn.textContent = 'だいちゅき';
        // } else if (n<0.9) {
        //     btn.textContent = 'しゅき';
        // } else {
        //     btn.textContent = 'にゃん'
        //}

       
    })
}