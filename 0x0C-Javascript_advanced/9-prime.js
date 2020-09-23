function countPrimeNumbers() {
    let limit = 100;
    let n = [...Array(limit).keys()];

    for (let i = 2; i * i <= limit; i++) {
        if (n[i] !== "1") {
            for (let j = i * i; j <= limit; j += i) {
                n[j] = "1";
            }
        }
    }

    let primes = [];
    for (let i = 0; i < n.length; i++) {
        if (n[i] > 1) {
            primes.push(n[i]);
        }
    }

    return primes.length;
};

let ts = performance.now();
countPrimeNumbers();
let tf = performance.now();
console.log("Execution time of printing countPrimeNumbers was " + (tf - ts) + " milliseconds.");
