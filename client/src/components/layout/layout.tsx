import { FunctionComponent, ReactChild } from 'react'
import styled from 'styled-components'

const AppBody = styled.div`
  width: 70vw;
  min-height: 100vh;
  margin: 0 auto
`

type LayoutProps = {
  children: ReactChild
}

const AppLayout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <AppBody>
      {children}
    </AppBody>
  )
}

export default AppLayout