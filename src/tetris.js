let Tetris=()=>{
    let tetrisobj={
       
        I:{
          shape: [
            [0,'i',0],[0,'i',0],[0,'i',0]
        ],
        height:60,
        storeheight:60,
        top:0,
        left:Math.floor(Math.random()*200),
        collison:false,
        
        },
        J:{
         shape:[
            [0,'j',0],[0,'j',0],['j','j',0]
        ],
        height:60, 
        storeheight:60,
        top:0,
        left:Math.floor(Math.random()*200) ,
        collison:false  
        },
        
        L:{
            shape:[
                [0,'l',0],[0,'l',0],[0,'l','l']
            ],
            height:60,
            storeheight:60,
            top:0,
           left: Math.floor(Math.random()*200),
           collison:false
        },
        
        O:{
            shape:[
                ['o','o','o'],['o','o','o'],[0,0,0]
            ],
            height:40,
            storeheight:60,
            top:0,
        left:Math.floor(Math.random()*200),
        collison:false
        },
        P:{
            shape:[
                [0,'p','p'],[0,'p','p'],[0,'p',0]
            ],
            height:60,
            storeheight:60,
            top:0,
        left:Math.floor(Math.random()*200),
        collison:false 
        },
        q:{
          shape:[
            ['q','q',0],['q','q',0],[0,'q',0]
        ],
        height:60,
        storeheight:60,
        top:0,
        left:Math.floor(Math.random()*200),
        collison:false 
        },
        S:{
            shape:[
                [0,'s','s'],['s','s',0],[0,0,0]
            ],
            height:40,
            storeheight:40,
            top:0,
        left:Math.floor(Math.random()*200) ,
        collison:false
        },
        T:{
        shape:[
            ['t','t','t'],[0,'t',0],[0,'t',0]
        ],
        height:60,
        storeheight:60,
        top:0,
        left:Math.floor(Math.random()*200) ,
        collison:false
        },
        Z:{
            shape:[
                ['z','z',0],[0,'z','z'],[0,0,0]
            ],
            height:40,
            storeheight:40,
            top:0,
        left:Math.floor(Math.random()*200), 
        collison:false
        }
        
    }
    let tetrisstring='IJLOPqSTZ';
    let selecttetris=  tetrisstring[Math.floor(Math.random()*9)];
    return(
        tetrisobj[selecttetris]
    )
}
export default Tetris