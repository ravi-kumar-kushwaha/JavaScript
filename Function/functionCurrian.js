//method 1
const mul = (a) => (b) => (c) => (d) => (e) => {
    return a * b * c * d * e
}
const result = mul(2)(3)(4)(5)(6);
console.log("result:", result)


//method 2
const sum = (a) => {
    return (b) => {
        return (c) => {
            return (d) => {
                return (e) => {
                    return a + b + c + d + e
                }
            }
        }
    }
}
const result2 = sum(2)(3)(4)(5)(6);
console.log("sum :", result2);

//method 3
function Mul(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function (e) {
                    return function (f) {
                        return a * b * c * d * e * f
                    }
                }
            }
        }
    }
}
const result1 = Mul(2)(3)(4)(5)(6)(7);
console.log("result1:", result1);
