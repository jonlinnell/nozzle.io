import React, { Component } from 'react'
import { rehydrate } from 'glamor'
import glamorous from 'glamorous'
//
import 'glamor-reset'
import Navbar from './Navbar'
import Footer from './Footer'
import Theme from '../utils/Theme'

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

const PageStyles = glamorous.div({
  fontFamily: '"Overpass", sans-serif',
  fontWeight: Theme.weights.regular,
  minHeight: '100%',
})

const ContentStyled = glamorous.div({
  paddingTop: 50,
  color: Theme.colors.text,
  background: 'white',
})

export default class Page extends Component {
  render () {
    const { children } = this.props
    return (
      <PageStyles>
        <Navbar />
        <ContentStyled>
          {children}
        </ContentStyled>
        <Footer />
      </PageStyles>
    )
  }
}
