//worked with oswaldo almazo 
let whoWon = function(arr){
//solution for VERTICAL addition

for(i=0;i<3; i++){
var result =arr.reduce((sum,value)=>{
return sum+value[i];
},0);
if(result==3){
    alert('Player One has won!!')
    location.reload();

    break;
} else if(result ==-3){
    alert('Player Two has won!!')
    location.reload();
}
}


// HORIZONTAL SOLUTION
 var result=0;
 var hel=0;
 for(i=0;i<3; i++){
  result = arr[i].reduce((sum,val) =>{
    //   console.log(sum, val);
     return sum + val;
},0);
if(result ==3 ||result == -3)
{
    console.log(result);
    break;
}
 }
if(result==3){
    alert('Player One has won!!')
    location.reload();

} else if(result ==-3){
    alert('Player Two has won!!')
}


// console.log(result);

//DIAGONAL LEFT TO RIGHT 
var sum =0;
arr.forEach((val,index) =>{
    for(i =0; i< val.length; i++){
        if(i==index){
            sum+=val[i];
        }
    }
});

if(sum==3){
    alert('Player One has won!!')
    location.reload();
} else if(sum ==-3){
    alert('player2 won!!')
    location.reload();
}



//DIAGONAL RIGHT TO LEFT
var sum =0;
arr.forEach((val,index) =>{
    for(i =2; i >= 0; i--){
        if(index ==0 && i ==2){
            sum+=val[i];
            console.log(val[i]);
        } else if(index ==1 && i==1){
            sum+=val[i];
            console.log(val[i]);
        } else if(index ==2 && i==0){
            sum+= val[i];
            console.log(val[i]);
        }
    }
});
if(sum==3){
    alert('Player One has won!!')
    location.reload();
} else if(sum ==-3){
    alert('Player Two has won!!')
    location.reload();
}

}

let ticTacA = [[0,0,0],[0,0,0],[0,0,0]];


// let p1 = document.createElement('p');
// p1.innerHTML = "X";
// let p2 = document.createElement('p');
// p2.innerHTML = "O";

let turn = false;

let input = function(pos) {
    if(turn == false){
        switch(pos){
            case 1:
            ticTacA[0][0]=1;
            document.querySelector('.row1 .box1').innerHTML= '<p class="boxStyle"> X </p>';
            turn = true;
            break;
            case 2:
            ticTacA[0][1]=1;
            document.querySelector('.row1 .box2').innerHTML= '<p class="boxStyle"> X </p>';
            turn = true;
            break;
            case 3:
            ticTacA[0][2]=1;
            document.querySelector('.row1 .box3').innerHTML= '<p class="boxStyle"> X </p>';
            turn = true;
            break;
            case 4:
            ticTacA[1][0]=1;
            document.querySelector('.row2 .box1').innerHTML= '<p class="boxStyle"> X </p>';
            turn = true;
            break;
            case 5:
            ticTacA[1][1]=1;
            document.querySelector('.row2 .box2').innerHTML= '<p class="boxStyle"> X </p>';
            turn = true;
            break;
            case 6:
            ticTacA[1][2]=1;
            document.querySelector('.row2 .box3').innerHTML= '<p class="boxStyle"> X </p>';
            turn = true;
            break;
            case 7:
            ticTacA[2][0]=1;
            document.querySelector('.row3 .box1').innerHTML= '<p class="boxStyle"> X </p>';
            turn = true;
            break;
            case 8:
            ticTacA[2][1]=1;
            document.querySelector('.row3 .box2').innerHTML= '<p class="boxStyle"> X </p>';
            turn = true;
            break;
            case 9:
            ticTacA[2][2]=1;
            document.querySelector('.row3 .box3').innerHTML= '<p class="boxStyle"> X </p>';
            turn = true;
            break;

        }
    } else {
        switch(pos){
            case 1:
            ticTacA[0][0]=-1;
            document.querySelector('.row1 .box1').innerHTML= '<p class="boxStyle"> O </p>';
            turn = false;
            break;
            case 2:
            ticTacA[0][1]=-1;
            document.querySelector('.row1 .box2').innerHTML= '<p class="boxStyle"> O </p>';
            turn = false;
            break;
            case 3:
            ticTacA[0][2]=-1;
            document.querySelector('.row1 .box3').innerHTML= '<p class="boxStyle"> O </p>';
            turn = false;
            break;
            case 4:
            ticTacA[1][0]=-1;
            document.querySelector('.row2 .box1').innerHTML= '<p class="boxStyle"> O </p>';
            turn = false;
            break;
            case 5:
            ticTacA[1][1]=-1;
            document.querySelector('.row2 .box2').innerHTML= '<p class="boxStyle"> O </p>';
            turn = false;
            break;
            case 6:
            ticTacA[1][2]=-1;
            document.querySelector('.row2 .box3').innerHTML= '<p class="boxStyle"> O </p>';
            turn = false;
            break;
            case 7:
            ticTacA[2][0]=-1;
            document.querySelector('.row3 .box1').innerHTML= '<p class="boxStyle"> O </p>';
            turn = false;
            break;
            case 8:
            ticTacA[2][1]=-1;
            document.querySelector('.row3 .box2').innerHTML= '<p class="boxStyle"> O </p>';
            turn = false;
            break;
            case 9:
            ticTacA[2][2]=-1;
            document.querySelector('.row3 .box3').innerHTML= '<p class="boxStyle"> O </p>';
            turn = false;
            break;
        }
    }       
        // console.log(turn);
        whoWon(ticTacA);
            // console.log(ticTacA);
}


