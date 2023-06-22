import { render, screen } from '@testing-library/react'
import ImageLink from './ImageLink'

const dummyImageLink = {
  src: '/vite.svg',
  href: 'https://vitejs.dev/',
  alt: 'Vite logo'
}

describe('Image Link Test', () => {
  test('should render vite image', () => {
    render(<ImageLink {...dummyImageLink} />)

    const image = screen.getByAltText('Vite logo')
    screen.debug()
    expect(image).toBeInTheDocument()
  })
})
