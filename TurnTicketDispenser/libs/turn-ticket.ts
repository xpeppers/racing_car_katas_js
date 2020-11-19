class TurnTicket {
  private _turnNumber: number

  constructor(turnNumber: number) {
    this._turnNumber = turnNumber
  }

  get turnNumber(): number {
    return this._turnNumber
  }
}

export = TurnTicket