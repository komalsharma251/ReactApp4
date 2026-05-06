// Import testing utilities from React Testing Library
import { render, screen, fireEvent } from '@testing-library/react'

// Import main App component
import App from '../../App'

// Group all test cases for the Voting App
describe('Voting App', () => {

  // Test if the application title renders correctly
  test('renders the app title', () => {

    // Render App component
    render(<App />)

    // Check if title exists in the document
    expect(
      screen.getByText(/Favorite Tech Tools Voting App/i)
    ).toBeInTheDocument()
  })

  // Test if voting items appear on screen
  test('renders voting items', () => {

    // Render App component
    render(<App />)

    // Verify voting items are displayed
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Angular')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  // Test vote functionality
  test('increases vote count when vote button is clicked', () => {

    // Render App component
    render(<App />)

    // Get all Vote buttons
    const voteButtons = screen.getAllByText('Vote')

    // Click first Vote button
    fireEvent.click(voteButtons[0])

    // Verify total votes increased
    expect(screen.getByText('Total Votes: 1')).toBeInTheDocument()
  })

  // Test total votes after multiple voting actions
  test('shows total votes after voting', () => {

    // Render App component
    render(<App />)

    // Get all Vote buttons
    const voteButtons = screen.getAllByText('Vote')

    // Simulate multiple vote clicks
    fireEvent.click(voteButtons[0])
    fireEvent.click(voteButtons[1])

    // Verify total vote count
    expect(screen.getByText('Total Votes: 2')).toBeInTheDocument()
  })

  // Test reset button functionality
  test('resets all votes', () => {

    // Render App component
    render(<App />)

    // Get all Vote buttons
    const voteButtons = screen.getAllByText('Vote')

    // Add one vote
    fireEvent.click(voteButtons[0])

    // Find reset button
    const resetButton = screen.getByText('Reset Votes')

    // Click reset button
    fireEvent.click(resetButton)

    // Verify votes reset back to zero
    expect(screen.getByText('Total Votes: 0')).toBeInTheDocument()
  })
})