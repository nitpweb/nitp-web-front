import React from "react"
import styled from "styled-components"


const Initial_popup = () => (
    <>
        <Container>
            <Popup_Image_div id="popup_image" class="popup_image">
                <Popup_Image src="https://bit.ly/3cH8lb5" id="ur_img" />
            </Popup_Image_div>
            <div>
                <p><font size="+4" >#harghartiranga </font> <font size="+4" color="blue">Let's hoist our national flag during 13-15th August!</font></p>
            </div>
        </Container>
    </>
)

export default Initial_popup

const Container = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        background-color: white;
        animation: fadeOutAnimation 2s ease-in-out;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-delay: 5s;
        text-align: center;
        font: bold;
        color: red;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

            
    @keyframes fadeOutAnimation {
        0% {
            opacity: 1;
        }
        90% {
            z-index: 10;
        }
        100% {
            opacity: 0;
            z-index: -10;
        }
    }
`

const Popup_Image_div = styled.div`
    width: 100%;
    max-height: 90%;
`
const Popup_Image = styled.img`
    max-height: 100%;
    object-fit: contain;
`
