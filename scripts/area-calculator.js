function calculateTriangleArea(){
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
    
    if(isNaN(base) || isNaN(height)){
        alert('Please insert a number');
        return;
    }
    const area = 0.5 * base * height;
    setInnerText('triangle-area',area);

    // add to calculation 
    addToCalculationEntry('Triangle', area);
}

function calculatorRectangleArea(){
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');

    if(isNaN(width) || isNaN(length)){
        alert('Please insert a number');
        return;
    }
    const area = width * length;
    setInnerText('rectangle-area',area);
 
    // add to calculation 
    addToCalculationEntry('Rectangle', area);
}

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    if(isNaN(base) || isNaN(height)){
        alert('Please insert a number');
        return; 
    }
    const area = base * height;
    setInnerText('parallelogram-area',area);
     
    // add to calculation 
    addToCalculationEntry('Parallelogram', area);
}

function calculateEllipseArea(){
    const firstRadius = getInputValue('ellipse-first-radius');
    const secondRadius = getInputValue('ellipse-second-redius');

    if(isNaN(firstRadius) || isNaN(secondRadius)){
        alert('Please insert a number');
        return; 
    }
    const areaPoint = 3.1416 * firstRadius * secondRadius;
    const area = areaPoint.toFixed(2);
    setInnerText('ellipse-area',area);

    // add to calculation 
    addToCalculationEntry('Ellipse', area);
}

// reusable funcction --> reduce duplicate code 

function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    inputField.value = '';
    return value;
}

function setInnerText(textId,area){
    const textElement =  document.getElementById(textId);
    textElement.innerText = area;
}

// add to calculation entry 
/*

*/

function addToCalculationEntry(areaType,area){
    console.log('hi');
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    //p.innerHTML = areaType + ' ' + area;
    p.classList.add('my-4')
    p.innerHTML = `
    ${count+1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm">convert</button>
    `;
    calculationEntry.appendChild(p);
}