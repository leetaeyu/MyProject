let startY ="";
const targetElements = document.getElementById('box');
const mapElements = document.querySelector('.block');
targetElements.addEventListener('touchstart', (event) => {
    startY = event.touches[0].clientY;
})
targetElements.addEventListener('touchmove', (event) => {
    let currentY = event.touches[0].clientY;
    if(currentY > startY) {
        mapElements.classList.add('map-active');
    } else if(currentY < startY) {
        mapElements.classList.remove('map-active');
    }
})




(async () => {
    document.body.classList.add('scroll-hidden');
    
    let mapgl = await mapboxGl();
    let startY ="";
    const targetElements = document.getElementById('mccContent');
    const mapElements = document.getElementById('mccMapContainer');
    
    targetElements.addEventListener('touchstart', (event) => {
        startY = event.touches[0].clientY;
    })
    
    targetElements.addEventListener('touchmove', (event) => {
        let currentY = event.touches[0].clientY;
        if(currentY > startY) {
            mapElements.classList.add('map-active');
        } else if(currentY < startY) {
            mapElements.classList.remove('map-active');
        }
        setTimeout(()=>{
            mapgl.resize();
        }, 400);
    })
})()


(async () => {
    document.body.classList.add('scroll-hidden');
    
    let mapgl = await mapboxGl();
    let startY = '';
    let startHeight = '';
    const targetElements = document.getElementById('mccContent');
    const mapElements = document.getElementById('mccMapContainer');
    const surveyBox = document.getElementById('surveyInner');
    
    targetElements.addEventListener('touchstart', (event) => {
        startY = event.touches[0].clientY;
        startHeight = targetElements.offsetHeight;
    })
    
    targetElements.addEventListener('touchmove', (event) => {
        const currentY = event.touches[0].clientY;
        const deltaY = currentY - startY;
        const mapEleHeight = mapElements.clientHeight;
        const currentResult = Math.floor(deltaY);
        const mapEleSize = mapEleHeight + currentResult + 'px';
        
        let mapEleBounding = mapElements.getBoundingClientRect();
        let mapEleBottom = mapEleBounding.bottom;
        let mapEleBottomResult = Math.floor(mapEleBottom);
        let windowHeight = window.innerHeight - 176;
        
        if(currentY > startY) {
            if(mapEleBottomResult < windowHeight) {
                mapElements.style.height = mapEleSize;
            }
        } else if(currentY < startY) {
             mapElements.style.height = mapEleSize;
        }
        setTimeout(() => {
            mapgl.resize();
        }, 400);
        
        mapElements.style.maxHeight = windowHeight + 'px';
        mapElements.style.minHeight = '100px';
    })
})()