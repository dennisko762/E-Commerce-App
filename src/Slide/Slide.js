/** @jsx jsx */

import React, { memo } from 'react'
import { css, jsx } from '@emotion/react'

function Slide({ content }) {
    return (
        <div
            css={css`

        height: 100%;
        width:100%;
        background-image: url('${content}');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;

      `}
        >








        </div>
    )
}

export default memo(Slide)
