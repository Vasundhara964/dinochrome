let score = 0;
let cross = true;

function Startgame() {

    let Start = document.getElementById('btn')
    let player = document.querySelector('.player');
    let gameover = document.querySelector('.gameover');
    let gamestart = document.getElementById('gamestart');
    let dragon = document.querySelector('.dragon');
    let anidrag = document.querySelector('.movedragon');

    let button = document.querySelector('#btn');
    let st = document.querySelector('.beforecontent');
    let root = document.querySelector(':root');
    anidrag.style.animationPlayState = 'running';
    button.style.display = 'none';
    st.style.display = 'none';
    // st.style.opacity='2';
    root.style.setProperty("--grey", 'transparent');
    let playagain = document.getElementById('btn2');
    playagain.style.display = 'none';
    gamestart.play();



    // bd.before.style
}

let b = setInterval(() => {

    let Start = document.getElementById('btn')
    let player = document.querySelector('.player');
    let gameover = document.querySelector('.gameover');
    let dragon = document.querySelector('.dragon');
    let dragon2 = document.querySelector('.dragon2');
    let anidrag = document.querySelector('.movedragon');
    let anidrag2 = document.querySelector('.movedragon2');
    let gamestart = document.getElementById('gamestart');

    let ans = isCollide(player, dragon);
    let ans2 = isCollide(player, dragon2);
    console.log(ans);
    if (ans || ans2) {
        console.log("exit")
        gameover.style.display = 'block';
        anidrag.style.animationPlayState = 'paused';
        anidrag2.style.animationPlayState = 'paused';
        let gover = document.getElementById('gameo');
        gover.play();
        player.classList.add('losted');

        gameover.innerHTML = "Your Score is " + score;
        // dragon.style.reset();

        let playagain = document.getElementById('btn2');
        playagain.style.display = 'block';
        gamestart.pause();

        clearInterval(b);
    }
    else {
        if (cross) {


            if (Start.style.display == 'none') {
                score += 1;
                let sc = document.querySelector('.score');
                sc.innerHTML = "Your Score : " + score;
            }
            cross = false;
            setTimeout(() => {
                cross = true;
            }, 3000)

            anidur = parseFloat(window.getComputedStyle(dragon,null).getPropertyValue('animation-duration'));

            if(score>5)
            {
                let newanimdur = anidur-0.1;
                dragon.style.anmationDuration=newanimdur+'s';
                console.log(dragon.style.anmationDuration);
                anidrag2.style.animationPlayState = 'running';

            }
            if(score>10)
            {
                let newanimdur = anidur-0.5;
                dragon.style.anmationDuration=newanimdur+'s';
                console.log(dragon.style.anmationDuration);
                
            }
            if(score>15)
            {
                let newanimdur = anidur-1.0;
                dragon.style.anmationDuration=newanimdur+'s';
                console.log(dragon.style.anmationDuration);
                
            }

        }
    }
}, 10);

document.onkeydown = function (a) {
    console.log(a.keyCode);
    if (a.keyCode == 38)                       //38 for up key
    {
        let play = document.querySelector('.player');
        play.classList.add('animatejump');
        let jumpp = document.getElementById('jump_audio');
        jumpp.play();
        setTimeout(() => {
            play.classList.remove('animatejump');
        }, 1800);
    }
    else if (a.keyCode == 39)              //39 for right
    {
        let play = document.querySelector('.player');
        console.log(play.left);
        let playleft = parseInt(window.getComputedStyle(play, null).getPropertyValue('left'));
        console.log(playleft);
        // parseInt(playleft);
        // play=playleft+5+"px";
        play.style.left = playleft + 30 + "px";;
        console.log(playleft);
    }
    else if (a.keyCode == 37)              //37 for left
    {
        let play = document.querySelector('.player');
        console.log(play.left);
        let playleft = parseInt(window.getComputedStyle(play, null).getPropertyValue('left'));
        console.log(playleft);
        // parseInt(playleft);
        // play=playleft+5+"px";
        play.style.left = playleft - 30 + "px";;
        console.log(playleft);
    }
}





function isCollide(a, b) {
    var aRect = a.getBoundingClientRect();
    var bRect = b.getBoundingClientRect();

    return !(
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))
    );
}
