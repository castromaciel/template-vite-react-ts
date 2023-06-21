import { render, screen } from '@testing-library/react'
import { describe, test } from 'vitest'
import Avatar from './Avatar'

describe('Avatar Tests', () => {
  test('Should render avatar', () => {
    render(<Avatar />)

    const element = screen.getByText('Avatar')
    expect(element.textContent).toBe('Avatar')
  })
})
