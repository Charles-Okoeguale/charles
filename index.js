
var i = 0;
var txt = 'I am a Software Engineer with solid experience building products across different domains. I have a deep foundation in AI. I have trained my own language model from scratch, understand the full arc from pre-training and fine-tuning to orchestration and agents.';
var speed = 28;

window.addEventListener('load', function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
});

const toggle = document.querySelector('#toggle');
const toggle_background_color = document.querySelector('.toggle_container');
const container = document.querySelector('#container');

function switchMode() {
    switch (toggle.className) {
        //SWITCHES TO LIGHT MODE
        case "toggle_dark":
            toggle.className = 'toggle_light';
            container.className = 'container_light';
            document.querySelectorAll('.bold_text_dark').forEach((header) => {
                header.className = "bold_text_light";
            })
            document.querySelectorAll('.light_text').forEach((text) => {
                text.className = "damp_text";
            })
            toggle_background_color.style.backgroundColor = 'gray';
            break
        //SWITCHES TO DARK MODE
        case "toggle_light":
            toggle.className = 'toggle_dark';
            container.className = 'container_dark';
            document.querySelectorAll('.bold_text_light').forEach((header) => {
                header.className = "bold_text_dark";
            })
            document.querySelectorAll('.damp_text').forEach((text) => {
                text.className = "light_text";
            })
            toggle_background_color.style.backgroundColor = '#BAE67D'
            break
    }
}