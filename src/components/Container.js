import React from 'react'
import TextInput from './TextInput'
import ExampleBefore from '../example-before.json'
import ExampleAfter from '../example-after.json'
import GenerateDiff from '../generate-diff'

class Container extends React.Component {
  constructor (props) {
    super(props)

    this.textInputChange = this.textInputChange.bind(this)
    this.compare = this.compare.bind(this)

    this.state = {
      packageBefore: JSON.stringify(ExampleBefore, null, 2),
      packageAfter: JSON.stringify(ExampleAfter, null, 2),
      diff: []
    }
  }

  textInputChange ({ id, value }) {
    this.setState({ [id]: value })
  }

  compare () {
    try {
      const before = JSON.parse(this.state.packageBefore).dependencies
      const after = JSON.parse(this.state.packageAfter).dependencies

      const result = GenerateDiff(before, after, 'table')
      console.log(result)
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
          Generates difference in dependencies between 2 states of a package.json file.
        </div>
        <div style={{paddingBottom: '20px'}}>
          Use this to help produce documentation for a release.
        </div>

        <TextInput id="packageBefore" value={this.state.packageBefore} onTextInputChange={this.textInputChange} title="Paste package.json here BEFORE ncu -u (e.g. master branch)" />
        <TextInput id="packageAfter" value={this.state.packageAfter} onTextInputChange={this.textInputChange} title="Paste package.json here AFTER ncu -u (e.g. release branch)" />

        <button onClick={this.compare} style={{marginRight: '10px'}}>Compare</button>

        {
          this.state.diff.length
            ? <button onClick={() => navigator.clipboard.writeText(this.state.diff.join('\n'))}>Copy to clipboard</button>
            : ''
        }

        <div>
          <h3>{this.state.diff.length ? 'Output:' : ''}</h3>

          {this.state.diff.map((e, i) => {
            return (
              <div key={i}>{e}</div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Container
