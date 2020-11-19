import TelemetryClient from './telemetryclient'

class TelemetryDiagnosticControls {
    private _diagnosticChannelConnectionString = "*111#"
    private _telemetryClient: TelemetryClient
    private _diagnosticInfo: string = ""

    constructor() {
        this._telemetryClient = new TelemetryClient()
    }

    checkTransmission() {
      this._diagnosticInfo = ""
      this._telemetryClient.disconnect()

      let retryLeft = 3
      while (this._telemetryClient.onlineStatus === false && retryLeft > 0) {
          this._telemetryClient.connect(this._diagnosticChannelConnectionString)
          retryLeft -= 1
      }

      if (this._telemetryClient.onlineStatus === false) {
          throw Error("Unable to connect.")
      }

      this._telemetryClient.send(TelemetryClient.DIAGNOSTIC_MESSAGE)
      this._diagnosticInfo = this._telemetryClient.receive()
  }

  get diagnosticInfo(): string {
    return this._diagnosticInfo
  }
}

export = TelemetryDiagnosticControls