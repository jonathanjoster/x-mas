const data = [
  {
    "title": "Moon River",
    "src": "https://www.youtube.com/embed/L_jgIezosVA",
    "song": "Andy Williams",
    "lyrics": `Moon river, wider than a mile<br>
    I'm crossing you in style some day<br>
    Oh, dream maker,<br>you heart breaker<br>
    Wherever you're goin',<br>I'm goin' your way<br>
    <br>
    Two drifters, off to see the world<br>
    There's such a lot of world to see<br>
    We're after the same rainbow's end,<br>waitin' 'round the bend<br>
    My huckleberry friend,<br>moon river, and me`
  }
];

document.querySelector('iframe').src = data[0]['src']
document.querySelector('#title').innerHTML = data[0]['title']
document.querySelector('#song').innerHTML = data[0]['song']
document.querySelector('#lyrics').innerHTML = data[0]['lyrics']