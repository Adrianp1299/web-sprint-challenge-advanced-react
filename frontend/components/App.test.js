// Write your tests here
import React from "react"
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AppClass from "./AppClass"
import { reset } from "nodemon"

const updateStatelessSelectors = document => {
  up = document.querySelector('#up')
  down = document.querySelector('#down')
  left = document.querySelector('#left')
  right = document.querySelector('#right')
  reset = document.querySelector('#reset')
  submit = document.querySelector('#submit')
}

const updateStatefulSelectors = document => {
  squares = document.querySelectorAll('.square')
  coordinates = document.querySelector('#coordinates')
  steps = document.querySelector('#steps')
  message = document.querySelector('#message')
  email = document.querySelector('#email')
}

test('renders without errors', () => {
  render(<AppClass/>);
})

test('can enter email', () => {
  render(<AppClass/>);

  fireEvent.change(email, { target: { value: 'adrianp1299@gmail.com' } })
  expect(email).toHaveValue('adrianp1299@gmail.com')
})

test('not entering a valid email results in an error', async () => {
  render(<AppClass/>);
  fireEvent.click(submit);
  await screen.findByText('Ouch: email is required')
})

test('Has Coordinates', () => {
  render(<AppClass/>);

  expect(coordinates.textContent).toMatch(/\(2.*2\)$/)
})



test('sanity', () => {
  expect(true).toBe(true)
})
