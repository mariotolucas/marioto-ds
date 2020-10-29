import React from 'react'
import { ButtonStyled } from './ButtonStyled'
import { ThemeProvider } from 'styled-components'

export default function Button (props) {
    let theme = {}
    switch (props.variant) {
        case 'dark':
            theme = {
                backgroundColor: '#404040',
                color: 'white',
                borderColor: '#404040'
            }
            break;
        case 'primary':
            theme = {
                backgroundColor: 'white',
                color: '#2567D4',
                borderColor: '#2567D4'
            }
            break;
        case 'success':
            theme = {
                backgroundColor: 'white',
                color: '#219636',
                borderColor: '#219636'
            }
            break;
        case 'danger':
            theme = {
                backgroundColor: 'white',
                color: '#D61F1F',
                borderColor: '#D61F1F'
            }
            break;
        case 'warning':
            theme = {
                backgroundColor: 'white',
                color: '#EABD33',
                borderColor: '#EABD33'
            }
            break;
        default:
            theme = {
                backgroundColor: 'white',
                color: '#7F8C8D',
                borderColor: '#7F8C8D'
            }
            break;
    }

    const invertColors = ({ backgroundColor, color }) => ({
        backgroundColor: color,
        color: backgroundColor,
        borderColor: color === 'white'? backgroundColor : color
    })

    if (props.inverse) {
        theme = invertColors(theme)
    }

    return (
        <ThemeProvider theme={theme}>
            <ButtonStyled>{props.children}</ButtonStyled>
        </ThemeProvider>
    )
}
