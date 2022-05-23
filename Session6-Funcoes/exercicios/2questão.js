function classificarTriangulo(a, b, c){
    if(a == b && b == c){
        return 'Equilátero'
    } else if (a == b || b == c || a == c) {
        return 'Isósceles'        
    }else { 
        return 'Escaleno'
    }
}
classificarTriangulo(5, 9, 10)