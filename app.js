//cambio la url por una frase
const shortCutUrl = () => {
let word = 'holi';
// let pathname = window.location.href;
let result = encodeURI(word);
return result;
}

//Creo HTML
document.getElementById('root').innerHTML = 
`
<button id="change-url">click me</button>
<h1 id="url-text">${window.location.pathname}<h1>
`

//Hago que el evento click cambie el pathname por una frase
document.getElementById('change-url').addEventListener('click', () => {
    document.getElementById('url-text').innerHTML = `${shortCutUrl()}`;
})