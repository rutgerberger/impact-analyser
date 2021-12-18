import React from 'react'

const Button = ({ className, text, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`btn-${className}`}>
        {text}
      </button>
    )
  }

export default Button