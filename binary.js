function convertBinary() {
    var output = document.getElementById("outputBinary");
    var input = document.getElementById("inputBinary").value;
    output.value = "";
    for (i=0; i < input.length; i++) {var e=input[i].charCodeAt(0);var s = "";
    do{
        var a =e%2;
        e=(e-a)/2;
        s=a+s;
        }while(e!=0);
        while(s.length<8){s="0"+s;}
        output.value+=s;
    }
}
