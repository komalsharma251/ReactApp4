// Import React hook for state management
import { useState } from 'react'

// Import reusable components
import Header from './components/Header'
import VoteList from './components/VoteList'
import TotalVotes from './components/TotalVotes'
import Button from './components/Button'

// Import TypeScript interface for vote items
import type { VoteItem } from './components/types/VoteItem'

// Import application styles
import './App.css'

// Initial voting data for the application
const initialItems: VoteItem[] = [
  {
    id: 1,
    name: 'React',
    description: 'A JavaScript library for building user interfaces.',
    votes: 0,
  },
  {
    id: 2,
    name: 'Angular',
    description: 'A TypeScript-based framework for web applications.',
    votes: 0,
  },
  {
    id: 3,
    name: 'Vue',
    description: 'A progressive framework for building UI.',
    votes: 0,
  },
  {
    id: 4,
    name: 'Firebase',
    description: 'A backend platform for authentication and databases.',
    votes: 0,
  },
  {
    id: 5,
    name: 'TypeScript',
    description: 'JavaScript with strong typing.',
    votes: 0,
  },
]

// Main App component
function App() {

  // Store voting items in component state
  const [items, setItems] = useState<VoteItem[]>(initialItems)

  // Function to increase vote count for a selected item
  const handleVote = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, votes: item.votes + 1 }
          : item
      )
    )
  }

  // Reset all votes back to zero
  const handleReset = () => {
    setItems(initialItems)
  }

  // Calculate total votes using reduce method
  const totalVotes = items.reduce(
    (total, item) => total + item.votes,
    0
  )

  // Find the item with the highest votes
  const topItem =
    items.reduce(
      (top, item) => (item.votes > top.votes ? item : top),
      items[0]
    ).votes === 0
      ? 'No votes yet'
      : items.reduce(
          (top, item) => (item.votes > top.votes ? item : top),
          items[0]
        ).name

  // Render application UI
  return (
    <main className="app">

      {/* Header section */}
      <Header />

      {/* Display total votes and top voted item */}
      <TotalVotes
        totalVotes={totalVotes}
        topItem={topItem}
      />

      {/* Reset votes button */}
      <div className="reset-wrapper">
        <Button
          label="Reset Votes"
          onClick={handleReset}
          variant="secondary"
        />
      </div>

      {/* Display all voting cards */}
      <VoteList
        items={items}
        onVote={handleVote}
      />

    </main>
  )
}

// Export App component
export default App