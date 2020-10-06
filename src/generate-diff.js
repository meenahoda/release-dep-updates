export default (before, after) => {
  const removed = []
  const updated = []
  const added = []

  for (const dep of Object.keys(before)) {
    if (!after[dep]) {
      removed.push(dep)
    } else {
      if (before[dep] !== after[dep]) {
        updated.push(dep)
      }
    }
  }

  for (const dep of Object.keys(after)) {
    if (!before[dep]) {
      added.push(dep)
    }
  }

  const output = []

  output.push('Removed:')

  for (const dep of removed) {
    output.push(`> ${dep}`)
  }

  if (!removed.length) output.push('N/A')

  output.push('\nAdded:')

  for (const dep of added) {
    output.push(`> ${dep} [${after[dep]}](https://github.com/${dep.substring(1)}/blob/master/CHANGELOG.md)`)
  }

  if (!added.length) output.push('N/A')

  output.push('\nUpdated:')

  for (const dep of updated) {
    output.push(`> ${dep} ${before[dep]} -> [${after[dep]}](https://github.com/${dep.substring(1)}/blob/master/CHANGELOG.md)`)
  }

  if (!updated.length) output.push('N/A')

  return output
}
