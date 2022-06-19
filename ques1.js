function sum_of_positive_no() {
    const input = [1, -5, 2, 10, -30, 29, 50];
    let negative = [];
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            negative.push(input[i]);
        }
        else {

            document.getElementById("output").innerText = ("Sum of all positive no in an Array is", sum = sum + input[i]);
        }
    }
}

sum_of_positive_no();