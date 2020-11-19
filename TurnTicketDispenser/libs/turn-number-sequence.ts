class TurnNumberSequence {
  private static _turnNumber: number = 0

  static get nextTurnNumber(): number {
    return ++this._turnNumber
  }
}

export = TurnNumberSequence