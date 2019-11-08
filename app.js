
const shortCutUrl = () => {
let word = 'holi';
// let pathname = window.location.href;
let abc = encodeURI(word);
return abc;
}

document.getElementById('root').innerHTML = 
`
<button id="change-url">click me</button>
<h1 id="url-text">${window.location.pathname}<h1>
`

document.getElementById('change-url').addEventListener('click', () => {
    document.getElementById('url-text').innerHTML = `${shortCutUrl()}`;
})