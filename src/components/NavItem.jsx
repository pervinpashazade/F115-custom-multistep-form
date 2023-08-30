import React from 'react'
import { Button } from 'reactstrap'

function NavItem({
  isActive,
  text,
  onClick
}) {
  return (
    <div className={`nav-item ${isActive ? "active" : ""}`}>
      <Button
        onClick={onClick}
      >
        {text}
      </Button>
    </div>
  )
}

export default NavItem