
const noteFunction = () => {

    const url = `https://api.adviceslip.com/advice`
    fetch(url)
        .then(res => res.json())
        .then(data => note(data.slip))

}






const note = (fol) => {

    const container = document.getElementById('container');
    const viewTheContainer = document.createElement('div');

    console.log(fol.advice)
    viewTheContainer.innerHTML = `
    
    <h2>${fol.advice}</h2>
    
    `

    container.appendChild(viewTheContainer)

}
noteFunction()