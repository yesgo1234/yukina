const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready',()=>{
    consol.log("봇이 준비되었습니다.")
})
client.on('message',msg=>{
    if(msg.content === '/도움말'){
        msg.reply
        ('\n사용법은 숫자를 제외하고 써주시면 됩니다.\n ex) /용어 질문\n1. 용어 질문\n2.\n3. \n4..') 
    }
})
client.on('message',msg=>{
    if(msg.content === '/용어 질문'){
        msg.reply
        ('\n1. 찐파츠\n2. 하이스코어 레이팅\n3. 드페 \n4. 기크\n5. 음크\n6. 천장') 
    }
})

client.on('message',msg=>{
    if(msg.content === '/찐파츠'){
        msg.reply
        ('\n찐파츠란?\n스코어업이 가장 잘 되는 카드를 "찐파츠"라고 부릅니다.') 
    }
})
client.on('message',msg=>{
    if(msg.content === '/하이스코어 레이팅'){
        msg.reply
        ('\n하이스코어 레이팅이란??\n밴드 별 하이스코어 레이팅은 밴드 별 노래에서 상위 3곡의 하이스코어를 합해서 15000으로 나눈 값을 의미합니다.') 
    }
})
client.on('message',msg=>{
    if(msg.content === '/드페'){
        msg.reply
        ('\n드페란??\n드페는 "드림페스티벌 뽑기"의 줄임말로 4성카드 확률이 2배인 6%가 됩니다.\n따라서 드페 기간동안 가챠를 하는 게 4성을 많이 얻을 수 있습니다.') 
    }
})
client.on('message',msg=>{
    if(msg.content === '/기크'){
        msg.reply
        ('\n기크란??\n"기적의 크리스탈"의 줄임말 입니다.\n기적의 크리스탈로 에어리어 아이템, 각종 멤버의 특훈에 재료로 쓰입니다.') 
    }
})
client.on('message',msg=>{
    if(msg.content === '/음크'){
        msg.reply
        ('\n음크란??\n"음색의 크리스탈"의 줄임말 입니다.\n음색의 크리스탈로 음악상점에서 각종 커버곡들을 살 수 있습니다.') 
    }
})
client.on('message',msg=>{
    if(msg.content === '/천장'){
        msg.reply
        ('\n천장이란??\n뽑기에서 픽업 카드를 뽑지 못한 유저들을 위한 장치입니다.\n300번 연속으로 뽑기 했는데도 픽업 카드를 얻지 못하면 원하는 픽업 카드를 선택해서 가질 수 있습니다.\n이렇게 300번동안 뽑기에 실패한 경우 "천장을 찍었다." 라고 표현을 합니다. ') 
    }
})

        
client.login('ODE5MTY0MTY5MDU5NDM0NDk2.YEioFQ.AQzoO-2lBwBYCtZ2H29rqG-jcoo')