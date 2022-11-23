let num = 0
let temperature = 0
input.onButtonPressed(Button.A, function () {
    num = 1
    basic.showString("" + (num))
    for (let index = 0; index < 9; index++) {
        num += 2
        basic.showString("" + (num))
    }
})
input.onButtonPressed(Button.AB, function () {
    temperature = input.temperature()
    if (input.temperature() < 25) {
        basic.showString("Switch off Air Conditioner")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("20211156")
})
