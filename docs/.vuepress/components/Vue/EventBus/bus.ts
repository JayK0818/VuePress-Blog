import mitt from 'mitt'
type Events<T = any> = {
  starting_up: T,
  bench: T
}

const bus = mitt<Events>()
export default bus