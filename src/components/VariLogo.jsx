import React from 'react'

const Collapsed = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='377.477'
      height='494'
      viewBox='0 0 377.477 494'
      aria-label='Main menu branding'
      role='svg'
      style={{
        maxHeight: '4em',
        maxWidth: '4em',
        transform: 'translate(-2em, -0.8em',
      }}
    >
      <g transform='translate(8.728 6.5)'>
        <g transform='translate(0 -0.166)'>
          <path
            className='gavlogo-path'
            d='M370.74,377.89l-178.889-360L10.74,377.89'
            transform='translate(-10.74 -17.724)'
          />
          <path
            className='gavlogo-path'
            d='M370.74,134.779l-180,351.111-180-360'
            transform='translate(-10.74 -4.724)'
          />
          <path
            className='gavlogo-path'
            d='M84.563,217.907H327.506'
            transform='translate(-4.209 -17.74)'
          />
        </g>
        <path
          className='gavlogo-path'
          d='M321.4,216.209v79.859c-18.668,36.2-79.878,77.871-136.758,77.563C122.17,373.292,79.736,341.74,44.71,296.068S17.561,174.325,17.561,174.325,15.122,138.1,44.71,94.188s89.672-76.9,139.932-72.5,97.552,11.786,136.758,72.5'
          transform='translate(-3.315 -11.907)'
        />
      </g>
    </svg>
  )
}

const Expanded = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 107.493 43.725'
      aria-label='Main menu branding'
      role='svg'
    >
      <path d='M77.511 41.709L57.634 1.944 37.511 41.709M105.472 2.996l-20 38.783-20-39.765' />
      <path d='M70.206 24.199H35.068v10.154c-4.326 7.961-17.774 10.054-25.362 4.311-4.41-3.338-6.626-6.259-7.718-11.127a29.348 29.348 0 01-.293-9.289 16.314 16.314 0 014.707-10.09c4.136-4.143 7.979-6.214 14.333-6.214 6.341-.26 9.923 2.225 14.333 6.676' />
    </svg>
  )
}

class VariLogo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
    }
  }

  componentDidMount() {
    if (this.props.viewport >= 640 || this.props.route === '/') {
      this.setState({ expanded: true })
    }
  }

  render() {
    return this.state.expanded === true ? <Expanded /> : <Collapsed />
  }
}

export default VariLogo
