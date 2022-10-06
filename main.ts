input.onButtonPressed(Button.A, function () {
    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 50)
    maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 50)
})
input.onButtonPressed(Button.B, function () {
    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 0)
    maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 0)
})
