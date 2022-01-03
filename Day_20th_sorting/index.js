function main() {
    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    // Write your code here
    let length = n;
    let arr = a;
    let totalSwap = 0;
    for(let i=0; i < arr.length; i++) {
        let swaps = 0;
        for(let j=0; j<arr.length-1; j++) {
            if(arr[j] > arr[j+1]) {
                let max = arr[j]
                arr[j] = arr[j+1];
                arr[j+1] = max
                swaps++
            }
        }
        
        if(swaps == 0) {
            break;
        }
        totalSwap = totalSwap+swaps
    }
}