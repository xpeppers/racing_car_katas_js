class Sensor {
  private _offset: number = 16.0

  popNextPressurePsiValue(): number {
      return this._offset + this._samplePressure()
  }

  private _samplePressure(): number {
    // placeholder implementation that simulate a real sensor in a real tire
    return 6 * Math.random() * Math.random()
  }
}

export = Sensor