function calculateTriangleArea(){
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
    
    const area = 0.5 * base * height;
    setInnerText('triangle-area',area);
}

function calculatorRectangleArea(){
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');

    const area = width * length;
    setInnerText('rectangle-area',area);
}

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    const area = base * height;
    setInnerText('parallelogram-area',area);
}

function calculateEllipseArea(){
    const firstRadius = getInputValue('ellipse-first-radius');
    const secondRadius = getInputValue('ellipse-second-redius');

    const areaPoint = 3.1416 * firstRadius * secondRadius;
    const area = areaPoint.toFixed(2);
    setInnerText('ellipse-area',area);
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

