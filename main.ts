input.onPinPressed(TouchPin.P0, function () {
    basic.setLedColor(0xff0000)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString("Kopf oder Zahl", 150)
    basic.turnRgbLedOff()
    Anzahl_Münzwurf = 1
    Anzahl_Kopf = 1
    Anzahl_Zahl = 1
    Anzahl_SSPSpiel = 0
    Anzahl_Stein = 0
    Anzahl_Schere = 0
    Anzahl_Papier = 0
    Anzahl_Kugelzug = 0
    Anzahl_blau = 0
    Anzahl_grün = 0
    Anzahl_rot = 0
    Anzahl_gelb = 0
    basic.pause(1000)
    for (let index = 0; index < randint(3, 10); index++) {
        Anzahl_Münzwurf += 1
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Chessboard, 50)
            basic.showIcon(IconNames.SmallDiamond, 50)
        }
        if (randint(0, 1) == 0) {
            Anzahl_Kopf += 1
            basic.showLeds(`
                . # . # .
                . # . # .
                . # # . .
                . # . # .
                . # . # .
                `)
        } else {
            Anzahl_Zahl += 1
            basic.showLeds(`
                . # # # .
                . . . # .
                . . # . .
                . # . . .
                . # # # .
                `)
        }
        basic.pause(1000)
    }
    basic.showNumber(Math.abs(Anzahl_Münzwurf) - 1)
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    Anzahl_1 = 0
    Anzahl_2 = 0
    Anzahl_3 = 0
    Anzahl_4 = 0
    Anzahl_5 = 0
    Anzahl_6 = 0
    for (let index = 0; index < 100; index++) {
        basic.showIcon(IconNames.Chessboard)
        Ergebnis_Würfel = randint(1, 6)
        if (Ergebnis_Würfel == 1) {
            Anzahl_1 += 1
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.pause(500)
        } else if (Ergebnis_Würfel == 2) {
            Anzahl_2 += 1
            basic.showLeds(`
                . . . . .
                . # . . .
                . . . . .
                . . . # .
                . . . . .
                `)
            basic.pause(500)
        } else if (Ergebnis_Würfel == 3) {
            Anzahl_3 += 1
            basic.showLeds(`
                . . . . .
                . # . . .
                . . # . .
                . . . # .
                . . . . .
                `)
            basic.pause(500)
        } else if (Ergebnis_Würfel == 4) {
            Anzahl_4 += 1
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                . . . . .
                `)
            basic.pause(500)
        } else if (Ergebnis_Würfel == 5) {
            Anzahl_5 += 1
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
            basic.pause(500)
        } else {
            Anzahl_6 += 1
            basic.showLeds(`
                . . . . .
                . # . # .
                . # . # .
                . # . # .
                . . . . .
                `)
            basic.pause(500)
        }
    }
    basic.showString("Ergebnisse")
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showNumber(Math.abs(Anzahl_1))
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . . . # .
        . . . . .
        `)
    basic.pause(500)
    basic.showNumber(Math.abs(Anzahl_2))
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . .
        `)
    basic.pause(500)
    basic.showNumber(Math.abs(Anzahl_3))
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . . . .
        `)
    basic.pause(500)
    basic.showNumber(Math.abs(Anzahl_4))
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.pause(500)
    basic.showNumber(Math.abs(Anzahl_5))
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . # . # .
        . . . . .
        `)
    basic.showNumber(Math.abs(Anzahl_6))
    basic.pause(2000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P3, function () {
    TCS34725.start()
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(5000)
    if (TCS34725.getSensorData(RGB.RED) > 100) {
        basic.setLedColor(0xff0000)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showString("Kopf oder Zahl", 150)
        basic.turnRgbLedOff()
        Anzahl_Münzwurf = 1
        Anzahl_Kopf = 1
        Anzahl_Zahl = 1
        Anzahl_SSPSpiel = 0
        Anzahl_Stein = 0
        Anzahl_Schere = 0
        Anzahl_Papier = 0
        Anzahl_Kugelzug = 0
        Anzahl_blau = 0
        Anzahl_grün = 0
        Anzahl_rot = 0
        Anzahl_gelb = 0
        basic.pause(1000)
        for (let index = 0; index < randint(3, 10); index++) {
            Anzahl_Münzwurf += 1
            for (let index = 0; index < 3; index++) {
                basic.showIcon(IconNames.Chessboard, 50)
                basic.showIcon(IconNames.SmallDiamond, 50)
            }
            if (randint(0, 1) == 0) {
                Anzahl_Kopf += 1
                basic.showLeds(`
                    . # . # .
                    . # . # .
                    . # # . .
                    . # . # .
                    . # . # .
                    `)
            } else {
                Anzahl_Zahl += 1
                basic.showLeds(`
                    . # # # .
                    . . . # .
                    . . # . .
                    . # . . .
                    . # # # .
                    `)
            }
            basic.pause(1000)
        }
        basic.showNumber(Math.abs(Anzahl_Münzwurf) - 1)
        basic.pause(1000)
        basic.clearScreen()
    } else if (TCS34725.getSensorData(RGB.GREEN) > 100) {
        basic.setLedColor(0x00ff00)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showString("S, S, P", 150)
        basic.turnRgbLedOff()
        Anzahl_Münzwurf = 0
        Anzahl_Kopf = 0
        Anzahl_Zahl = 0
        Anzahl_SSPSpiel = 1
        Anzahl_Stein = 1
        Anzahl_Schere = 1
        Anzahl_Papier = 1
        Anzahl_Kugelzug = 0
        Anzahl_blau = 0
        Anzahl_grün = 0
        Anzahl_rot = 0
        Anzahl_gelb = 0
        basic.pause(1000)
        for (let index = 0; index < randint(3, 10); index++) {
            Anzahl_SSPSpiel += 1
            for (let index = 0; index < 3; index++) {
                basic.showIcon(IconNames.Chessboard, 50)
                basic.showIcon(IconNames.SmallDiamond, 50)
            }
            Ergebnis_SSP = randint(0, 2)
            if (Ergebnis_SSP == 0) {
                Anzahl_Stein += 1
                basic.showLeds(`
                    . . . . .
                    . # # # .
                    . # # # .
                    . # # # .
                    . . . . .
                    `)
            } else if (Ergebnis_SSP == 1) {
                Anzahl_Schere += 1
                basic.showLeds(`
                    # . . # #
                    . # . # #
                    . . # # .
                    . # . # #
                    # . . # #
                    `)
            } else {
                Anzahl_Papier += 1
                basic.showLeds(`
                    . # # # .
                    . # # # .
                    . # # # .
                    . # # # .
                    . # # # .
                    `)
            }
            basic.pause(1000)
        }
        basic.showNumber(Math.abs(Anzahl_SSPSpiel) - 1)
        basic.pause(2000)
        basic.clearScreen()
    } else if (TCS34725.getSensorData(RGB.BLUE) > 100) {
        basic.setLedColor(0x0000ff)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showString("Kugelzug", 150)
        basic.turnRgbLedOff()
        Anzahl_Münzwurf = 0
        Anzahl_Kopf = 0
        Anzahl_Zahl = 0
        Anzahl_SSPSpiel = 0
        Anzahl_Stein = 0
        Anzahl_Schere = 0
        Anzahl_Papier = 0
        Anzahl_Kugelzug = 1
        Anzahl_blau = 1
        Anzahl_grün = 1
        Anzahl_rot = 1
        Anzahl_gelb = 1
        basic.pause(1000)
        for (let index = 0; index < randint(3, 10); index++) {
            Anzahl_Kugelzug += 1
            for (let index = 0; index < 3; index++) {
                basic.showIcon(IconNames.Chessboard, 50)
                basic.showIcon(IconNames.SmallDiamond, 50)
            }
            Ergebnis_Kugelzug = randint(0, 3)
            if (Ergebnis_Kugelzug == 0) {
                Anzahl_blau += 1
                basic.setLedColor(0x0000ff)
            } else if (Ergebnis_Kugelzug == 1) {
                Anzahl_gelb += 1
                basic.setLedColor(0xffff00)
            } else if (Ergebnis_Kugelzug == 2) {
                Anzahl_grün += 1
                basic.setLedColor(0x00ff00)
            } else {
                Anzahl_rot += 1
                basic.setLedColor(0xff0000)
            }
            basic.pause(1000)
            basic.turnRgbLedOff()
        }
        basic.showNumber(Math.abs(Anzahl_Kugelzug) - 1)
        basic.pause(2000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    if (Math.abs(Anzahl_Kopf) != 0) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # . .
            . # . # .
            . # . # .
            `)
        basic.pause(500)
        basic.showNumber(Math.abs(Anzahl_Kopf) - 1, 150)
        basic.pause(1000)
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . # . . .
            . # # # .
            `)
        basic.pause(500)
        basic.showNumber(Math.abs(Anzahl_Zahl) - 1, 150)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Math.abs(Anzahl_Papier) != 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(500)
        basic.showNumber(Math.abs(Anzahl_Stein) - 1, 150)
        basic.pause(2000)
        basic.showLeds(`
            # . . # #
            . # . # #
            . . # . .
            . # . # #
            # . . # #
            `)
        basic.pause(500)
        basic.showNumber(Math.abs(Anzahl_Schere) - 1, 150)
        basic.pause(2000)
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.pause(500)
        basic.showNumber(Math.abs(Anzahl_Papier) - 1, 150)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Math.abs(Anzahl_blau) != 0) {
        basic.setLedColor(0x0000ff)
        basic.pause(500)
        basic.showNumber(Math.abs(Anzahl_blau) - 1, 150)
        basic.pause(2000)
        basic.setLedColor(0x00ff00)
        basic.pause(500)
        basic.showNumber(Math.abs(Anzahl_grün) - 1, 150)
        basic.pause(2000)
        basic.setLedColor(0xff0000)
        basic.pause(500)
        basic.showNumber(Math.abs(Anzahl_rot) - 1, 150)
        basic.pause(2000)
        basic.setLedColor(0xffff00)
        basic.pause(500)
        basic.showNumber(Math.abs(Anzahl_gelb) - 1, 150)
        basic.pause(2000)
        basic.clearScreen()
    }
})
input.onPinPressed(TouchPin.P2, function () {
    basic.setLedColor(0x0000ff)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString("Kugelzug", 150)
    basic.turnRgbLedOff()
    Anzahl_Münzwurf = 0
    Anzahl_Kopf = 0
    Anzahl_Zahl = 0
    Anzahl_SSPSpiel = 0
    Anzahl_Stein = 0
    Anzahl_Schere = 0
    Anzahl_Papier = 0
    Anzahl_Kugelzug = 1
    Anzahl_blau = 1
    Anzahl_grün = 1
    Anzahl_rot = 1
    Anzahl_gelb = 1
    basic.pause(1000)
    for (let index = 0; index < randint(3, 10); index++) {
        Anzahl_Kugelzug += 1
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Chessboard, 50)
            basic.showIcon(IconNames.SmallDiamond, 50)
        }
        Ergebnis_Kugelzug = randint(0, 3)
        if (Ergebnis_Kugelzug == 0) {
            Anzahl_blau += 1
            basic.setLedColor(0x0000ff)
        } else if (Ergebnis_Kugelzug == 1) {
            Anzahl_gelb += 1
            basic.setLedColor(0xffff00)
        } else if (Ergebnis_Kugelzug == 2) {
            Anzahl_grün += 1
            basic.setLedColor(0x00ff00)
        } else {
            Anzahl_rot += 1
            basic.setLedColor(0xff0000)
        }
        basic.pause(1000)
        basic.turnRgbLedOff()
    }
    basic.showNumber(Math.abs(Anzahl_Kugelzug) - 1)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (Math.abs(Anzahl_Kopf) != 0) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # . .
            . # . # .
            . # . # .
            `)
        basic.pause(500)
        basic.showNumber(Math.round((Math.abs(Anzahl_Kopf) - 1) * (100 / (Math.abs(Anzahl_Münzwurf) - 1))), 150)
        basic.pause(1000)
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . # . . .
            . # # # .
            `)
        basic.pause(500)
        basic.showNumber(Math.round((Math.abs(Anzahl_Zahl) - 1) * (100 / (Math.abs(Anzahl_Münzwurf) - 1))), 150)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Math.abs(Anzahl_Papier) != 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(500)
        basic.showNumber(Math.round((Math.abs(Anzahl_Stein) - 1) * (100 / (Math.abs(Anzahl_SSPSpiel) - 1))), 150)
        basic.pause(2000)
        basic.showLeds(`
            # . . # #
            . # . # #
            . . # . .
            . # . # #
            # . . # #
            `)
        basic.pause(500)
        basic.showNumber(Math.round((Math.abs(Anzahl_Schere) - 1) * (100 / (Math.abs(Anzahl_SSPSpiel) - 1))), 150)
        basic.pause(2000)
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.pause(500)
        basic.showNumber(Math.round((Math.abs(Anzahl_Papier) - 1) * (100 / (Math.abs(Anzahl_SSPSpiel) - 1))), 150)
        basic.pause(2000)
        basic.clearScreen()
    } else if (Math.abs(Anzahl_blau) != 0) {
        basic.setLedColor(0x0000ff)
        basic.pause(500)
        basic.showNumber(Math.round((Math.abs(Anzahl_blau) - 1) * (100 / (Math.abs(Anzahl_Kugelzug) - 1))), 150)
        basic.pause(2000)
        basic.setLedColor(0x00ff00)
        basic.pause(500)
        basic.showNumber(Math.round((Math.abs(Anzahl_grün) - 1) * (100 / (Math.abs(Anzahl_Kugelzug) - 1))), 150)
        basic.pause(2000)
        basic.setLedColor(0xff0000)
        basic.pause(500)
        basic.showNumber(Math.round((Math.abs(Anzahl_rot) - 1) * (100 / (Math.abs(Anzahl_Kugelzug) - 1))), 150)
        basic.pause(2000)
        basic.setLedColor(0xffff00)
        basic.pause(500)
        basic.showNumber(Math.round((Math.abs(Anzahl_gelb) - 1) * (100 / (Math.abs(Anzahl_Kugelzug) - 1))), 150)
        basic.pause(2000)
        basic.clearScreen()
    }
})
input.onPinPressed(TouchPin.P1, function () {
    basic.setLedColor(0x00ff00)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString("S, S, P", 100)
    basic.turnRgbLedOff()
    Anzahl_Münzwurf = 0
    Anzahl_Kopf = 0
    Anzahl_Zahl = 0
    Anzahl_SSPSpiel = 1
    Anzahl_Stein = 1
    Anzahl_Schere = 1
    Anzahl_Papier = 1
    Anzahl_Kugelzug = 0
    Anzahl_blau = 0
    Anzahl_grün = 0
    Anzahl_rot = 0
    Anzahl_gelb = 0
    basic.pause(1000)
    for (let index = 0; index < randint(3, 10); index++) {
        Anzahl_SSPSpiel += 1
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Chessboard, 50)
            basic.showIcon(IconNames.SmallDiamond, 50)
        }
        Ergebnis_SSP = randint(0, 2)
        if (Ergebnis_SSP == 0) {
            Anzahl_Stein += 1
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        } else if (Ergebnis_SSP == 1) {
            Anzahl_Schere += 1
            basic.showLeds(`
                # . . # #
                . # . # #
                . . # # .
                . # . # #
                # . . # #
                `)
        } else {
            Anzahl_Papier += 1
            basic.showLeds(`
                . # # # .
                . # # # .
                . # # # .
                . # # # .
                . # # # .
                `)
        }
        basic.pause(1000)
    }
    basic.showNumber(Math.abs(Anzahl_SSPSpiel) - 1)
    basic.pause(2000)
    basic.clearScreen()
})
let Ergebnis_Kugelzug = 0
let Ergebnis_SSP = 0
let Ergebnis_Würfel = 0
let Anzahl_6 = 0
let Anzahl_5 = 0
let Anzahl_4 = 0
let Anzahl_3 = 0
let Anzahl_2 = 0
let Anzahl_1 = 0
let Anzahl_gelb = 0
let Anzahl_rot = 0
let Anzahl_grün = 0
let Anzahl_blau = 0
let Anzahl_Kugelzug = 0
let Anzahl_Papier = 0
let Anzahl_Schere = 0
let Anzahl_Stein = 0
let Anzahl_SSPSpiel = 0
let Anzahl_Zahl = 0
let Anzahl_Kopf = 0
let Anzahl_Münzwurf = 0
basic.showString("HALLO", 150)
