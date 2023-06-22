import { FC } from 'react'

interface Props {
  src: string
  href: string
  alt: string
}

const ImageLink: FC<Props> = ({
  alt, href, src
}) => (
  <a href={href} target="_blank" rel="noreferrer">
    <img src={src} className="logo" alt={alt} />
  </a>
)

export default ImageLink
