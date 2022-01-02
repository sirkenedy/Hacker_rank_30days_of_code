function main() {
    const S = readLine();
    try {
        let num = parseInt(S) || error
        console.log(num)
    }catch(e) {
        console.log("Bad String")
    }
}