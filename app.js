var goolibib = {

    check: function(){
        console.log("Goolibib is a company");
        console.log(this === goolibib);
    }
}

function check(){
    console.log("Microsoft is a bigger company");
    console.log(this === global);
}

goolibib.check();
check();

