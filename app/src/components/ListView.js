import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const ListView = ({ todos }) => {
  return (
    <ListGroup>
      {todos.map((todo, index) => {
        return <ListGroupItem key={index}>{todo.name}</ListGroupItem>
      })}
    </ListGroup>
  )
}

export default ListView