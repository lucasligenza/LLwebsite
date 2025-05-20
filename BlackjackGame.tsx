'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

type Card = {
  suit: '♠' | '♥' | '♣' | '♦'
  value: string
  numericValue: number
}

export default function BlackjackGame({ onWin }: { onWin: () => void }) {
  const [playerHand, setPlayerHand] = useState<Card[]>([])
  const [dealerHand, setDealerHand] = useState<Card[]>([])
  const [deck, setDeck] = useState<Card[]>([])
  const [gameState, setGameState] = useState<'betting' | 'playing' | 'dealerTurn' | 'gameOver'>('betting')
  const [result, setResult] = useState<string>('')
  const [hasWonBefore, setHasWonBefore] = useState(false)

  const createDeck = () => {
    const suits: ('♠' | '♥' | '♣' | '♦')[] = ['♠', '♥', '♣', '♦']
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    const newDeck: Card[] = []

    for (const suit of suits) {
      for (const value of values) {
        const numericValue = value === 'A' ? 11 : ['J', 'Q', 'K'].includes(value) ? 10 : parseInt(value)
        newDeck.push({ suit, value, numericValue })
      }
    }

    // Shuffle deck
    for (let i = newDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]]
    }

    return newDeck
  }

  const startNewGame = () => {
    const newDeck = createDeck()
    const playerCards = [newDeck.pop()!, newDeck.pop()!]
    const dealerCards = [newDeck.pop()!]
    
    setDeck(newDeck)
    setPlayerHand(playerCards)
    setDealerHand(dealerCards)
    setGameState('playing')
    setResult('')
  }

  const calculateHandValue = (hand: Card[]) => {
    let value = 0
    let aces = 0

    for (const card of hand) {
      if (card.value === 'A') {
        aces += 1
      }
      value += card.numericValue
    }

    while (value > 21 && aces > 0) {
      value -= 10
      aces -= 1
    }

    return value
  }

  const hit = () => {
    if (gameState !== 'playing') return

    const newCard = deck.pop()!
    const newHand = [...playerHand, newCard]
    setPlayerHand(newHand)
    setDeck(deck)

    if (calculateHandValue(newHand) > 21) {
      setGameState('gameOver')
      setResult('Bust! Try again!')
    }
  }

  const stand = async () => {
    if (gameState !== 'playing') return

    setGameState('dealerTurn')
    let currentDealerHand = [...dealerHand]
    let currentDeck = [...deck]

    while (calculateHandValue(currentDealerHand) < 17) {
      const newCard = currentDeck.pop()!
      currentDealerHand = [...currentDealerHand, newCard]
      await new Promise(resolve => setTimeout(resolve, 500))
      setDealerHand(currentDealerHand)
    }

    const playerValue = calculateHandValue(playerHand)
    const dealerValue = calculateHandValue(currentDealerHand)

    setGameState('gameOver')
    if (dealerValue > 21 || playerValue > dealerValue) {
      setResult('You win! Contact form unlocked!')
      setHasWonBefore(true)
      onWin()
    } else if (playerValue === dealerValue) {
      setResult('Push! Try again!')
    } else {
      setResult('Dealer wins! Try again!')
    }
  }

  useEffect(() => {
    startNewGame()
  }, [])

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto p-6 bg-green-800 rounded-xl shadow-xl text-white"
    >
      <h3 className="text-2xl font-bold mb-6 text-center">Beat the Dealer to Unlock Contact Form</h3>
      
      <div className="mb-8">
        <h4 className="text-xl mb-2">Dealer&apos;s Hand ({gameState === 'gameOver' ? calculateHandValue(dealerHand) : '??'})</h4>
        <div className="flex gap-2">
          {dealerHand.map((card, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-white text-black p-4 rounded-lg min-w-[60px] text-center"
            >
              <span className={card.suit === '♥' || card.suit === '♦' ? 'text-red-600' : 'text-black'}>
                {card.value}{card.suit}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-xl mb-2">Your Hand ({calculateHandValue(playerHand)})</h4>
        <div className="flex gap-2">
          {playerHand.map((card, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-white text-black p-4 rounded-lg min-w-[60px] text-center"
            >
              <span className={card.suit === '♥' || card.suit === '♦' ? 'text-red-600' : 'text-black'}>
                {card.value}{card.suit}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {result && (
        <motion.p 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-xl text-center mb-4 font-bold"
        >
          {result}
        </motion.p>
      )}

      <div className="flex justify-center gap-4">
        {gameState === 'playing' && (
          <>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-800 px-6 py-2 rounded-full font-bold"
              onClick={hit}
            >
              Hit
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-800 px-6 py-2 rounded-full font-bold"
              onClick={stand}
            >
              Stand
            </motion.button>
          </>
        )}
        {gameState === 'gameOver' && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-green-800 px-6 py-2 rounded-full font-bold"
            onClick={startNewGame}
          >
            Play Again
          </motion.button>
        )}
      </div>
    </motion.div>
  )
} 