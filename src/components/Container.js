import React from 'react'
import TextInput from './TextInput'
import ExampleBefore from '../example-before.json'
import ExampleAfter from '../example-after.json'
import GenerateDiff from '../generate-diff'

class Container extends React.Component {
  constructor (props) {
    super(props)

    this.textInputChange = this.textInputChange.bind(this)
    this.getDiff = this.getDiff.bind(this)

    this.state = {
      packageBefore: JSON.stringify(ExampleBefore, null, 2),
      packageAfter: JSON.stringify(ExampleAfter, null, 2),
      diff: []
    }
  }

  textInputChange ({ id, value }) {
    this.setState({ [id]: value })
  }

  getDiff () {
    try {
      const before = JSON.parse(this.state.packageBefore).dependencies
      const after = JSON.parse(this.state.packageAfter).dependencies

      const result = GenerateDiff(before, after)
      this.setState({ diff: result })
    } catch (e) {
      console.log('ERROR')
      console.log(e)
    }
  }

  render () {
    return (
      <div>
        <div style={{paddingBottom: '20px'}}>
          This is just something small to help generate changes for release stories on clubhouse rather than have to manually write it :)
        </div>

        <TextInput id="packageBefore" value={this.state.packageBefore} onTextInputChange={this.textInputChange} title="Paste package.json here BEFORE ncu -u" />
        <TextInput id="packageAfter" value={this.state.packageAfter} onTextInputChange={this.textInputChange} title="Paste package.json here AFTER ncu -u" />

        <button onClick={this.getDiff}>Get diff</button>

        <div>
          <h3>{this.state.diff.length ? 'Output:' : ''}</h3>

          {this.state.diff.map(e => {
            return (
              <div>{e}</div>
            )
          })}
        </div>

        {
          this.state.diff.length
            ? <button onClick={() => navigator.clipboard.writeText(this.state.diff.join('\n'))}>Copy to clipboard</button>
            : ''
        }
      </div>
    )
  }
}

export default Container
