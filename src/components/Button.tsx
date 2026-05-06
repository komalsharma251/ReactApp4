// Interface for Button component props
interface ButtonProps {

  // Text displayed inside the button
  label: string

  // Function executed when button is clicked
  onClick: () => void

  // Optional button style variant
  variant?: 'primary' | 'secondary'
}

// Reusable Button component
function Button({
  label,
  onClick,
  variant = 'primary',
}: ButtonProps) {

  return (

    // Dynamic class name based on button variant
    <button
      className={`btn ${variant}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

// Export Button component
export default Button