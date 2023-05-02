import mitt from 'mitt'
const bus = mitt<{
  update: any
  clear: any
}>()

export default bus