// na každé 5 měření dole => 1 měření US senzoru 50 - 10 Hz reakcemi za sekundu
// nevolat digitalReadPin víckrát
radio.setGroup(112)

let s1 = new Servo(PCAmotor.Servos.S1, 550, 2700, 1650, 10)
let spidx = .50
let autoModeEnabled = true
let whiteLine = 0

const pinC = DigitalPin.P15
const pinL = DigitalPin.P14 // zkontrolovat piny
const pinR = DigitalPin.P13

pins.setPull(pinC, PinPullMode.PullNone)
pins.setPull(pinL, PinPullMode.PullNone)
pins.setPull(pinR, PinPullMode.PullNone)

s1.stop()

basic.forever(function () {
    if (autoModeEnabled) {
        let c = (whiteLine ^ pins.digitalReadPin(pinC)) == 0 ? false : true
        let l = (whiteLine ^ pins.digitalReadPin(pinL)) == 0 ? false : true
        let r = (whiteLine ^ pins.digitalReadPin(pinR)) == 0 ? false : true

        if (c) {
            PCAmotor.MotorRun(PCAmotor.Motors.M1, 150)
            PCAmotor.MotorRun(PCAmotor.Motors.M4, -150)
        } else if (l) {
            PCAmotor.MotorRun(PCAmotor.Motors.M1, 50)
            PCAmotor.MotorRun(PCAmotor.Motors.M4, -150)
        } else if (r) {
            PCAmotor.MotorRun(PCAmotor.Motors.M1, 150)
            PCAmotor.MotorRun(PCAmotor.Motors.M4, -50)
        }
    }
    
})
