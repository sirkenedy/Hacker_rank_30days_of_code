class Calculator {
    power(n, p) {
        try{
            this.nonNegative(n, p)
            return Math.pow(n, p)
        }catch(e) {
            return e
        }
    }
    
    nonNegative (n, p) {
        if(n < 0 || p < 0){
            throw 'n and p should be non-negative'
        }
    }
}