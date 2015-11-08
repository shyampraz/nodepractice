function placeorder(ordernum){
    console.log("placed order ",ordernum);
    cookandwait(function(){
        console.log("delivered order ",ordernum);
    });
}
function cookandwait(deliver){

    setTimeout(deliver,5000);
}

placeorder(5);
placeorder(4);
placeorder(3);