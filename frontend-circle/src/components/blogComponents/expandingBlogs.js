import React from 'react'
import styled from 'styled-components';


const blogContainer = styled.div`
display: flex;
`

const blogItem = styled.div `
display: flex;
`

const blogContent = styled.div `
display: flex;
flex-direction: column;

`

export default function expandingBlogs() {
  return (
    <blogContainer>
        <blogItem>
            <blogContent>

            </blogContent>
        </blogItem>
        <blogItem>
            <blogContent>
                
            </blogContent>
        </blogItem>
        <blogItem>
            <blogContent>
                
            </blogContent>
        </blogItem>
    </blogContainer>
  )
}
