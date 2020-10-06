import React from 'react'

class TextInput extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.props.onTextInputChange({ id: this.props.id, value: event.target.value })
  }

  render () {
    return (
      <div style={{paddingBottom: '20px'}}>
        <div>
          {this.props.title}
        </div>
        <textarea onChange={this.handleChange} defaultValue={this.props.value} />
      </div>
    )
  }
}

export default TextInput
