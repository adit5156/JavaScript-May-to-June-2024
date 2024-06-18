const form = document.querySelector('form');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value) / 100;
    const weight = parseInt(document.querySelector('#weight').value);
    const bmi = ((weight) / (height ** 2)).toFixed(2);
    
    const result = document.querySelector('#results')
    result.innerText = `${bmi} = `;

    if(bmi < 18.6) {
        result.appendChild(document.createTextNode('Under Weight'));
    }
    else if(bmi >= 18.6 && bmi < 24.9) {
        result.appendChild(document.createTextNode('Normal Range'));
    }
    else if(bmi > 24.9) {
        result.appendChild(document.createTextNode("Overweight"));
    }
});