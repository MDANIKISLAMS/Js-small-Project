
 let index = 0;
 
 function clickHere(){
    let colors = ["red","blue","orange","pink","yellow","green","purple"];

    document.getElementsByTagName("body")[0].style.background = colors[index++];

    if( index > colors.length-1 ){
        index = 0;
    }
}