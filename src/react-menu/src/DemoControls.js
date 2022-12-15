import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Form = styled.form`
 
  > div {
 
  }

  input {
 
  }
  label + label input {
 
  }
  b {
 
  }
`

class DemoControls extends Component {
  static propTypes = {
    duration: PropTypes.number
  }

  render() {
    const { duration } = this.props
    return (
      <Form ref={el => (this.el = el)}>
        <div>
          <b>Speed</b>
          {[["normal", 300], ["slow (for debugging)", 1000]].map(
            ([label, value]) => {
              return (
                <label key={value}>
                  <input
                    type="radio"
                    name="duration"
                    value={value}
                    checked={duration === value}
                    onChange={e => {
                      if (e.target.checked) {
                        this.props.onChange({ duration: value })
                      }
                    }}
                  />
                  {label}
                </label>
              )
            }
          )}
        </div>
      </Form>
    )
  }
}

export default DemoControls
