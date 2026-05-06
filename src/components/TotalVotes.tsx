// Interface for TotalVotes component props
interface TotalVotesProps {

  // Total number of votes across all items
  totalVotes: number

  // Name of the item with highest votes
  topItem: string
}

// Component to display voting summary information
function TotalVotes({
  totalVotes,
  topItem,
}: TotalVotesProps) {

  return (

    // Summary container
    <div className="summary-box">

      {/* Display total votes */}
      <h3>Total Votes: {totalVotes}</h3>

      {/* Display top voted item */}
      <p>
        Top Tool: <strong>{topItem}</strong>
      </p>

    </div>
  )
}

// Export TotalVotes component
export default TotalVotes