// Import reusable Button component
import Button from './Button'

// Interface for VoteCard component props
interface VoteCardProps {

  // Unique ID for each voting item
  id: number

  // Name of the voting item
  name: string

  // Description of the voting item
  description: string

  // Current vote count
  votes: number

  // Function to handle voting action
  onVote: (id: number) => void
}

// Reusable VoteCard component
function VoteCard({
  id,
  name,
  description,
  votes,
  onVote,
}: VoteCardProps) {

  return (

    // Individual voting card container
    <div className="vote-card">

      {/* Display item name */}
      <h2>{name}</h2>

      {/* Display item description */}
      <p>{description}</p>

      {/* Display current vote count */}
      <div className="vote-count">
        Votes: <strong>{votes}</strong>
      </div>

      {/* Vote button */}
      <Button
        label="Vote"
        onClick={() => onVote(id)}
      />

    </div>
  )
}

// Export VoteCard component
export default VoteCard