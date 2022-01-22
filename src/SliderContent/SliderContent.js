/** @jsx jsx */

import React from 'react'
import { css, jsx } from '@emotion/react'

function SliderContent(props) {
    return (
        //tansform: translateX --> animation zum verschieben entlang der x achse
        //transition: sorgt für eine zeitliche verzögerung der translate animation
        <div
            css={css`
        transform: translateX(-${props.translate}px);
        transition: transform ease-out ${props.transition}s;
        height: 100%;
        width: ${props.width}px;
        display: flex;
        overflow:hidden;
      `}>
            {props.children}
        </div>
    )
}

export default SliderContent;
