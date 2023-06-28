 import Cell from './cell'
import Tetris from './tetris'
import React from 'react';
import {useState} from 'react'
import {useEffect} from 'react'
let Gamearea=()=>{
  let [pos,setpos]=useState(0)
 // let [obj,setobj]=useState()
  let [a,seta]=useState('')
  let [height,setheight]=useState(a.height);
  let[storeobj,updatestoreobj]=useState([]);
 //let[gameboxheight,setgameheight]=useState(70)
  let [leftpos,setleftpos]=useState(a.left);
 // let [show,setshow]=useState(false)
    let arr=[1,2,3,4,5,6,7,8,9,10,11,12];
    let arr2=[...arr,1,2,3,4,5],
  
   style1={
        width:'18vw',
        height:`70vh`,
        border:'1px solid green',
        margin:'10px',
        backgroundColor:'black',
       position:'relative',
        outline:'none'
    } 
   
 // gridAutoRows:' minmax(2px, auto)'

    useEffect(()=>{
      let x=Tetris();
      if(a==''){
        seta(x);
      }
      if(a==''){
        console.log(1);
        return ;
      }
     console.log(a);
      setleftpos(a.left);
      
      let checkcollison=[...storeobj];
      let arr=[...storeobj,a];

      updatestoreobj(arr);
      a.height=a.storeheight;
       
      let ar= setInterval(() => {
        if(pos>=439.5-a.height){
         console.log(2);
          a.top=pos;
       
          
         
          clearInterval(ar)
        let x1=Tetris();
        setpos(0);
          seta(x1);
         
        }
        else{
          // checkcollison.map((x)=>{
          //    if(x.top-a.top<=a.height && )
          // })
          pos=pos+5;
        setpos(pos);   
        a.top=pos;
    
        
        }
       },100);
     
     
    },[a])
    
    
    
    
    
    // let printtetris=()=>{
    //   let s1='<div>';

    // }
    
   
    return(
       
        <div  style={{outline:'none'}} onKeyDown={(e)=>{
           if(e.key=='ArrowRight'){
              leftpos=leftpos+10;
              setleftpos(leftpos);
              a.left=leftpos;
           }
           else if(e.key=='ArrowLeft'){
            leftpos=leftpos-10;
              setleftpos(leftpos);
              a.left=leftpos;
        
           }
           else if(e.key=='Enter'){
            // console.log(leftpos);
            let arr=a.shape;
            
            let totcount=0;
            let copya=arr.map((_,index)=>{
              let count=0; 
             let b= arr.map((x)=>{
                    if(x[index]==0){
                      count++;
                    }
                  return  x[index]
             })
               if(count==3){
                totcount++;
               }
                 return b;
            })
           
            
           // setobj(copya);
           a.shape=copya;
           let updatehi=(copya.length-totcount)*20;
          
            a.height=updatehi
            
           // setshow(true)
           }
        }}   tabIndex="0">
          <div style={style1}>
          {
            arr2.map((x)=>{
            
              return( 
                <div style={{display:'flex'}}>
              { arr.map((x)=>{

                    return(
                        <Cell/>
                    )
                })
            }
                </div>
              )
            })
          } 
        {  storeobj.map((obj)=>(
          <div style={{position:'absolute',top:obj.top,left:obj.left}} className='shape' >
          {
             obj.shape?.map((x)=>{
               return(
                 <div style={{display:'flex',margin:0}}>
              {
                  x?.map((y)=>{
                   return( 
                     y==0? <div>&emsp;&nbsp;&nbsp;</div>:<div style={{width:20,height:20,backgroundColor:'blue',textAlign:'center',border:'1px solid green'}}>*</div>
                   )
                  
                  })
                 }
                 </div>
                 
               )
             })
           }
         
        
          </div>
          )) 
        }
            
      
     
          </div>
            
      </div> 
    )
        }

export default Gamearea