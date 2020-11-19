import Sensor from "./sensor"

class Alarm {
  private _LowPressureThreshold: number = 17.0
  private _HighPressureThreshold: number = 21.0
  private _sensor: Sensor = new Sensor()
  private _isAlarmOn: boolean = false

  check() {
    const psiPressureValue = this._sensor.popNextPressurePsiValue()

    if (psiPressureValue < this._LowPressureThreshold || this._HighPressureThreshold < psiPressureValue) {
      this._isAlarmOn = true
    }
  }

  isAlarmOn(): boolean {
    return this._isAlarmOn
  }
}

export = Alarm