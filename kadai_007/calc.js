let num = 16;
switch (true) {
    case num % 3 == 0 && num % 5 == 0:
            console.log('3と5の倍数です');
        break;
     case num % 3 == 0:   
        console.log('3の倍数です');
        break;
    case num % 5 == 0:
    console.log ('５の倍数です');
    break;
    default:
        console.log(num);
        break;          
}