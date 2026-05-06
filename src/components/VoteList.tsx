// Import reusable VoteCard component
import VoteCard from './VoteCard'

// Import VoteItem TypeScript interface
import type { VoteItem } from './types/VoteItem'

// Interface for VoteList component props
interface VoteListProps {

  // Array of voting items
  items: VoteItem[]

  // Function to handle voting action
  onVote: (id: number) => void
}

// Component to display all voting cards
function VoteList({
  items,
  onVote,
}: VoteListProps) {

  return (

    // Grid container for vote cards
    <section className="vote-grid">

      {/* Loop through all items and render VoteCard component */}
      {items.map((item) => (

        <VoteCard
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          votes={item.votes}
          onVote={onVote}
        />

      ))}

    </section>
  )
}

// Export VoteList component
export default VoteList