import { IconButton } from '@components/Button/Button'
import { Divider } from '@components/Utilities/Utilities'
import React, {useState} from 'react'
import styled from 'styled-components'
import { BiChevronRight, BiChevronLeft} from "react-icons/bi";

const CarouselContainer = styled.div`
  padding: 2rem 4rem;
`

const Carousel = ({children}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex(prevIndex => prevIndex + 1)
  }

  const previousImage = () => {
    setCurrentIndex(prevIndex => prevIndex - 1)
  }

  return (
    <CarouselContainer>
      {currentIndex !== 0 &&
        <IconButton borderRadius='50%' onClick={previousImage}>
            <BiChevronLeft />
        </IconButton>
      }
      <Divider>
        {/* {children.map((child) => {
          child
          console.log(child.props.child)
          })} */}
        
      </Divider>
      {currentIndex !== children.length - 1 &&
        <IconButton borderRadius='50%' onClick={nextImage}>
            <BiChevronRight />
        </IconButton>
      }
    </CarouselContainer>
  )
}

export default Carousel
