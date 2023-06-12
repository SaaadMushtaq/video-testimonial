import styled from 'styled-components'

export const VideoTestimonialCardContainer = styled.div`
width: 90%;
height: 400px;
align-self: center;
display: grid;
grid-template-columns: 1fr 2fr;
position: relative;
margin-top: 5px;
border-radius: 15px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
background-color: white;
`

export const VideoContainer = styled.div`
width: 100%;
height: 100%;
`

export const Video = styled.video`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 5px;

`

export const QuoteContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const Quote = styled.p`
text-align: center;
font-size: 40px;
font-weight: bold;
padding-right: 10px;
color: #1877f2;
font-family: 'Explora', cursive;
`
export const QuoteBy = styled.p`
align-self: flex-end;
font-size: 25px;
padding-right: 10px;
font-family: 'Neucha', cursive;
color: #1877f2;
`

export const SkipButton = styled.button`
position: absolute;
bottom: 5px;
left: 50%;
padding: 10px 30px;
outline: none;
border: none;
background-color: white;
color: #1877f2;
border-radius: 20px;
cursor: pointer;
transition: 0.4s ease-out;
font-weight: bold;

&:hover{
    background-color: #1877f2;
    color: white;
}
`