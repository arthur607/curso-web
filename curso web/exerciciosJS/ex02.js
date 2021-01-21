function classtriangulo(L1,L2,L3) {
    if (L1 == L2 & L3) {                // & = e
        console.log('Triagulo Equilátero')
    }
    else if(L1 == L2 && L1 != L3){
        console.log('triangulo Isósceles')
    }
    else if (L1 != L2 & L3){
        console.log('Triangulo Escaleno')
    }
}

classtriangulo(3,3,3)
classtriangulo(3,3,2)
classtriangulo(3,2,1)