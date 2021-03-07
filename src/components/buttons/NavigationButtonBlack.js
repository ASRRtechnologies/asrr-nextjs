import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

const Wrapper = styled('div')`
  background-color: #0a0a0a;
 
  p, a {
    color: #fff !important;
  }
  
  &:hover{
    background-color: #f5f5f5;
  }

`

function NavigationButtonBlack({className, title, to, custom, ...props}) {

    return (
        <>
            <Wrapper {...props} className={`button ${className}`}>
                <Link href={to}><a className="navigation-font">{title}</a></Link>
            </Wrapper>
        </>
    )
}

export default NavigationButtonBlack
