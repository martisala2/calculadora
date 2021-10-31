input.onPinPressed(TouchPin.P0, function () {
    Cambiar = 1
    basic.showString("Cambiarx" + Cambiar)
})
input.onButtonPressed(Button.A, function () {
    if (namber == 1) {
        _1 += Cambiar
    } else {
        if (namber == 2) {
            _2 += Cambiar
        }
    }
    if (namber == 3) {
        Namba += 1
    }
})
input.onPinPressed(TouchPin.P2, function () {
    Cambiar = 1000
    basic.showString("Cambiarx" + Cambiar)
})
input.onButtonPressed(Button.B, function () {
    namber += 1
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    Cambiar = 100
    basic.showString("Cambiarx" + Cambiar)
})
let Cambiar = 0
let namber = 0
let _1 = 1
namber = 1
let Namba = 1
let _2 = 1
Cambiar = 1
basic.forever(function () {
    if (namber == 1) {
        basic.showNumber(_1)
        basic.showString("-")
    } else {
        if (namber == 2) {
            basic.showNumber(_2)
            basic.showString("-")
        }
    }
    if (namber == 3) {
        if (Namba == 1) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . . # . .
                . . # . .
                `)
        }
        if (Namba == 2) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        }
        if (Namba == 3) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
        }
        if (Namba == 4) {
            basic.showLeds(`
                . . # . .
                . . . . .
                # # # # #
                . . . . .
                . . # . .
                `)
        }
    }
    if (namber == 4) {
        if (Namba == 1) {
            basic.showNumber(_1 + _2)
        } else {
            if (Namba == 2) {
                basic.showNumber(_1 * _2)
            } else {
                if (Namba == 3) {
                    basic.showNumber(_1 - _2)
                } else {
                    if (Namba == 4) {
                        basic.showNumber(Math.idiv(_1, _2))
                    }
                }
            }
        }
    }
})
