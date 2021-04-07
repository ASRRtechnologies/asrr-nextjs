import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

const Wrapper = styled('div')`
  background-color: #fff;
  //box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.23);

  p, a {
    color: #1a1a1a !important;
  }
  
  &:hover{
    background-color: #f5f5f5;
  }

`

function NavigationButtonWhite({className, title, to, custom, ...props}) {

    return (
        <>
            <Wrapper {...props} className={`button ${className}`}>
                <Link href={to}><a className="navigation-font">{title}</a></Link>
            </Wrapper>
        </>
    )
}

export default NavigationButtonWhite
