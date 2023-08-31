const text = document.querySelector('#inputText');
const btn = document.querySelector('#speech')

btn.addEventListener('click', function () {
    speechText = text.value;
    const data = new SpeechSynthesisUtterance();
    data.text = speechText;
    speechSynthesis.speak(data);
})