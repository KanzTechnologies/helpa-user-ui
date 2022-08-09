import styled from 'styled-components'
import { useState } from 'react'

const TabHeadWrapper = styled.ul`
  background: ${({ theme}) => theme.body};
  padding: 2rem 2rem;
  display: flex;
  gap: 3rem;
`

const TabHeadItem = styled.li`
  list-style: none;
  cursor: pointer;
  
`

const TabBody = styled.div``

const borderStyle = {
  borderBottom: '1px solid orange'
}

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label)

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab)
  }


  return (
    <>
      <TabHeadWrapper>
        {children.map((tabLabel, i) => {
          const label = tabLabel.props.label
          return(
            <TabHeadItem
              onClick={e => handleClick(e, label)}
              key={i}
            >
              {label}
            </TabHeadItem>
          )
        })}
      </TabHeadWrapper>
      <TabBody>
        {children.map((tab, i) =>{
          if(tab.props.label === activeTab) 
          return(
            <TabBody key={i}>{tab}</TabBody>
          )
        })}
      </TabBody>
    </>
  )
}

export default Tabs
