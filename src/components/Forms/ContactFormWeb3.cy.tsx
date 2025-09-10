import React from 'react'
import ContactFormWeb3 from './ContactFormWeb3'

describe('<ContactFormWeb3 />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ContactFormWeb3 />)
  })
})