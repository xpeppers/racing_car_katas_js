import Random from './random'

class TelemetryClient {
  static DIAGNOSTIC_MESSAGE = "AT#UD"

  private _onlineStatus: boolean = false
  private _diagnosticMessageResult: string = ""
  private _connectionEventsSimulator = new Random()

  get onlineStatus(): boolean {
    return this._onlineStatus
  }

  connect(telemetryServerConnectionString: string) {
    if (telemetryServerConnectionString === null || telemetryServerConnectionString === "") {
      throw Error('missing telemetryServerConnectionString parameter')
    }

    // simulate the operation on a real modem
    const success = this._connectionEventsSimulator.nextInt(1, 10) <= 8

    this._onlineStatus = success
  }

  disconnect() {
    this._onlineStatus = false
  }

  send(message: string) {
    if (message === null || "" === message) {
      throw Error("missing message parameter")
    }

    if (message === TelemetryClient.DIAGNOSTIC_MESSAGE) {
        // simulate a status report
        this._diagnosticMessageResult = ("LAST TX rate................ 100 MBPS\r\n"
                + "HIGHEST TX rate............. 100 MBPS\r\n"
                + "LAST RX rate................ 100 MBPS\r\n"
                + "HIGHEST RX rate............. 100 MBPS\r\n"
                + "BIT RATE.................... 100000000\r\n"
                + "WORD LEN.................... 16\r\n"
                + "WORD/FRAME.................. 511\r\n"
                + "BITS/FRAME.................. 8192\r\n"
                + "MODULATION TYPE............. PCM/FM\r\n"
                + "TX Digital Los.............. 0.75\r\n"
                + "RX Digital Los.............. 0.10\r\n"
                + "BEP Test.................... -5\r\n"
                + "Local Rtrn Count............ 00\r\n"
                + "Remote Rtrn Count........... 00")

        return
    }
    // here should go the real Send operation (not needed for this exercise)
  }

  receive(): string {
    let message: string = ""

    if (this._diagnosticMessageResult === null || this._diagnosticMessageResult === "") {
        // simulate a received message (just for illustration - not needed for this exercise)
        const messageLength = this._connectionEventsSimulator.nextInt(50, 110)
        for (let i= messageLength; i >= 0; --i) {
            message += this._connectionEventsSimulator.nextInt(40, 126).toString()
        }
    } else {
        message = this._diagnosticMessageResult
        this._diagnosticMessageResult = ""
    }

    return message
  }
}

export = TelemetryClient
