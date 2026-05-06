// Interface representing a voting item in the application
export interface VoteItem {

  // Unique identifier for each item
  id: number

  // Name of the voting item
  name: string

  // Short description about the item
  description: string

  // Current vote count
  votes: number
}