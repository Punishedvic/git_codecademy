// Grab values from the submitted form in the URL
const words = new URLSearchParams(window.location.search);

// Cleans up and capitalizes the names of the characters
function cleanAndCap(str) {
    if (!str) return null
    let temp = str.trim()
    return temp[0].toUpperCase() + temp.substring(1)
}

// Assigning the variables with values used in the story
const firstChar = cleanAndCap(words.get('char-1'));
const secondChar = 'Zaramay';

const answer = cleanAndCap(words.get('answer'));
const conjunction = answer === 'Yes' ? 'and' : 'but';

const speed = words.get('speed');
const adj1 = words.get('adj-1');

const thirdChar = cleanAndCap(words.get('char-3'));
const quote = words.get('quote');

const verb1 = words.get('verb-1');
const num1 = words.get('num-1');
const message = words.get('message');

// The string containing HTML and text which will populate the story.html page
const story = `<p><span class="word" title="id: char-1">${firstChar}</span> lo estaba bardeando al <span class="word" title="id: char-2">${secondChar}</span> en un vivo de Instagram.</p>

<p>"Que te hacés el narco si sos un fantasma" tiró <span class="word" title="id: char-1">${firstChar}</span>.</p>

<p>"<span class="word" title="id: answer">${answer}</span>," dijo el <span class="word" title="id: char-2">${secondChar}</span>, pero la hice <span class="word" title="id: speed">${speed}</span> mientras vos mirás la peli."</p>

<p><span class="word" title="id: char-1">${firstChar} </span>se sintió re <span class="word" title="id: adj-1">${adj1}</span> y se quedó mirando al <span class="word" title="id: char-2">${secondChar}</span>, cuando de pronto <span class="word" title="id: char-3">${thirdChar}</span>, que estaba observado la situación, gritó a lo lejos: "<span class="word" title="id: quote">${quote}</span>".</p>

<p>The <span class="word" title="id: char-1">${firstChar}</span> was soon far out of sight, and to make the <span class="word" title="id: char-2">${secondChar}</span> feel very deeply how ridiculous it was for him to try a race with a <span class="word" title="id: char-1">${firstChar}</span>, he went off the course to practice <span class="word" title="id: verb-1">${verb1}</span> for <span class="word" title="id: num-1">${num1}</span> hours until the <span class="word" title="id: char-2">${secondChar}</span> should catch up.</p>

<p>The <span class="word" title="id: char-2">${secondChar}</span> meanwhile kept going slowly but steadily, and, after a time, passed the place where the <span class="word" title="char-1">${firstChar}</span> was <span class="word" title="id: verb-1">${verb1}</span>. The <span class="word" title="id: char-1">${firstChar}</span> was so caught up in <span class="word" title="id: verb-1">${verb1}</span>; and when at last he did stop, the <span class="word" title="id: char-2">${secondChar}</span> was near the goal. The <span class="word" title="id: char-1">${firstChar}</span> now ran his swiftest, but he could not overtake the <span class="word" title="id: char-2">${secondChar}</span> in time.</p>`;

// Grabbing the title element
const title = document.getElementById('title');
// Populating the title element with text
title.innerHTML = `<span class="word" title="id: char-1">${firstChar}</span> y el <span class="word" title="id: char-2">${secondChar}</span>`;

// Grabbing the story element
const storyEl = document.getElementById('story');
// Populating the story element with the value of the story variable
storyEl.innerHTML = story;

// Grabbing the moral-message element
const moralMessage = document.getElementById('moral-message');
// Populating the moral-message element with text
moralMessage.innerHTML = `<span class="italics" title="id: message">"${message}"</span>`;