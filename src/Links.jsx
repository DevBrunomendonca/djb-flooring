import { ContentLinks } from "./LinksStyle"

const Links = ({href, name } ) => {
  return (
    <ContentLinks href={href}>{name}</ContentLinks>
  )
}

export default Links