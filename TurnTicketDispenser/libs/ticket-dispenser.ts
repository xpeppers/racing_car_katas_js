import TurnNumberSequence from './turn-number-sequence'
import TurnTicket from './turn-ticket'

class TicketDispenser {
  turnTicket(): TurnTicket {
    return new TurnTicket(TurnNumberSequence.nextTurnNumber)
  }
}

export = TicketDispenser