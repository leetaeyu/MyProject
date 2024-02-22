window.addEventListener('load', () => {
    const quotes = [
        {
            quote:'천국의 평화란 진정 정의롭고 자비로운 전쟁에서 칼을 드는 자들의 것이다.',
            author:'William Shakespeare'
        },
        {
            quote:'이 세상에 보장된 것은 아무것도 없으며 오직 기회만 있을 뿐이다.',
            author:'General Douglas MacArthur'
        },
        {
            quote:'음악으로도 누그러지지 않는 감정이라면 극도의 공포나 슬픔 빼고는 없다.',
            author:'lee tae yu'
        },
        {
            quote:'진정한 여행자는 걸어서 다니는 자이며, 걸으면서도 자주 앉는다.',
            author:'William'
        },
        {
            quote:'제우스신은 모든 인간의 계획을 성취시키지 않는다.',
            author:'Shakespeare'
        },
        {
            quote:'이 세상에서 정말 위대해지는 방법은 없다. 우리는 모두 모진 환경의 지배를 받는다.',
            author:'yuYu'
        },
        {
            quote:'세상에 대해 더 많이 알면 알수록 세상을 조소할 일이 많아진다.',
            author:'이태유'
        },
        {
            quote:'적을 선택하는 신중함에 있어서 지나침이란 없다.',
            author:'이태유'
        },
        {
            quote:'당신이 원하는 것이 당신이 그럴 것이라고 꿈꾸었던 것과 같지 않음을 알게 되면 상처받게 된다.',
            author:'이태유'
        },
        {
            quote:'나는 결국 실패할 대의를 추구하여 승리하기보다는 결국 승리할 대의를 따르다 실패하겠다.',
            author:'이태유'
        },
    ];
    
    const quote = document.querySelector('#quote span:first-child');
    const author = document.querySelector('#quote span:last-child');
    
    const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    quote.innerText = todayQuote.quote;
    author.innerText = todayQuote.author;

})