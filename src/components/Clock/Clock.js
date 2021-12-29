/**
 * A simple minute and second clock display.
 *
 * @param {Object} props
 * @param {number} props.delta
 */
const Clock = props => {
  const { delta } = props
  const minutes = ~~(((delta / 1000) % 3600) / 60)
  const seconds = ~~(delta / 1000) % 60

  const partials = [
    minutes < 10 ? '0' : '',
    minutes,
    ':',
    seconds < 10 ? '0' : '',
    seconds
  ]

  return <div>{partials.join('')}</div>
}

export default Clock
