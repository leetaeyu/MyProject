function chartCustom(elementsId, chartColor, dataMax, dataValue){
    const elements = document.getElementById(elementsId)
    let elementsWidth = elements.offsetWidth;
    let options = {
        value:  dataValue,
        size: elementsWidth,
        lineWidth: 10,
        rotate: 0,
        max: dataMax,
        units: dataValue +'/'+ dataMax
    };

    const canvas = document.createElement('canvas');
    const units = document.createElement('span');
    
    units.textContent = options.units;
    units.classList.add('chart-units');
    
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.height = options.size;
    
    elements.appendChild(units);
    elements.appendChild(canvas);
    
    ctx.translate(options.size / 2, options.size / 2);
    ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI);
    
    const radius = (options.size - options.lineWidth) / 2;
    
    function drawCircle(color, lineWidth, value) {
        value = Math.min(Math.max(0, value || 1), 1);
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2 * value, false);
        ctx.strokeStyle = color;
        ctx.lineCap = 'round';
        ctx.lineWidth = lineWidth;
        ctx.stroke();
    };
    
    drawCircle('#f1f1f1', options.lineWidth, 100 / 100);
    drawCircle(chartColor, options.lineWidth, options.value / options.max);
}