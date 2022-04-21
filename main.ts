input.onButtonPressed(Button.A, function () {
    Oktav += -1
})
input.onGesture(Gesture.ScreenDown, function () {
    Oktav = 4
})
input.onButtonPressed(Button.AB, function () {
    if (Spill == 0) {
        Spill = 1
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
    } else {
        Spill = 0
        basic.showLeds(`
            . # . . .
            . # # . .
            . # # # .
            . # # . .
            . # . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    Oktav += 1
})
let Spill = 0
let Oktav = 0
Oktav = 4
Spill = 1
basic.forever(function () {
    if (Spill == 0) {
        music.setTempo(90 + input.rotation(Rotation.Pitch) * 2)
        music.playTone(45 * Oktav + input.rotation(Rotation.Roll) * 2, music.beat(BeatFraction.Half))
    }
})
