// Python code
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.showString("CLOCKWISE")
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.showString("ANTICLOCKWISE")
    basic.pause(2000)
})
