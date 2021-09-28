function add(n1: number,n2: number, showResult: boolean, phrase: string) {
    const total = n1 + n2
    if (showResult) {
        console.log(phrase + total)
    } else {
        return total
    }
}

const number = 2
const number2 = 2
const printResult = true
const resultPhrase = 'Result is: '

add(number, number2, printResult, resultPhrase);