import { Provider, useSelector, useDispatch } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { Fragment, memo } from 'react'
import store, { add_good, delete_good, increment_good, decrement_good } from './store.js'
import phone from './images/phone.jpeg'
import mac from './images/mac.png'
import watch from './images/watch.jpeg'
import pods from './images/pods.png'
import pods_max from './images/pods-max.png'
import mouse from './images/mouse.jpeg'
import keyboard from './images/keyboard.jpeg'
import pad from './images/pad.png'
import styles from './styles/index.module.scss'

const url_map = {
  phone,
  mac,
  watch,
  pods,
  pods_max,
  mouse,
  keyboard,
  pad,
}

const goods_list = [
  {
    url: url_map.phone,
    price: '7999',
    description: 'iPhone巅峰之作',
    title: 'iPhone13 Pro',
    id: 1,
    _key: 'phone'
  },
  {
    url: url_map.mac,
    price: '9499',
    description: 'M2 芯片机型',
    title: 'MacBook Air',
    id: 2,
    _key: 'mac'
  },
  {
    url: url_map.watch,
    price: '2999',
    title: 'Apple Watch',
    description: '全天候视网膜显示屏',
    id: 3,
    _key: 'watch'
  },
  {
    url: url_map.pods,
    price: '1399',
    title: 'AirPods',
    description: '第三代',
    id: 4,
    _key: 'pods'
  },
  {
    url: url_map.pods_max,
    price: '4399',
    title: 'AirPods Max',
    description: '主动降噪与通透模式',
    id: 5,
    _key: 'pods_max'
  },
  {
    url: url_map.mouse,
    price: '699',
    description: '黑色多点触控表面',
    title: '妙控鼠标',
    id: 6,
    _key: 'mouse'
  },
  {
    url: url_map.keyboard,
    price: '899',
    description: '带有数字小键盘的妙控键盘',
    title: '妙控键盘',
    id: 7,
    _key: 'keyboard'
  },
  {
    url: url_map.pad,
    price: '4399',
    description: '凭实力出彩',
    title: 'iPad Air',
    id: 8,
    _key: 'pad'
  }
]

const GoodList = memo(() => {
  const dispatch = useDispatch()
  const handleAddGood = (good) => {
    dispatch(add_good({...good}))
  }
  return (
    <div className={styles.goods_list}>
      { goods_list.length > 0 && goods_list.map(good => (
          <div key={good.id} className={styles.good_item}>
            <img src={good.url}/>
            <div className={styles.title}>{good.title}</div>
            <div className={styles.description}>{good.description}</div>
            <div className={styles.price}>{good.price}</div>
            <div>
              <button
                className={[styles.button, 'primary-button'].join(' ')}
                onClick={handleAddGood.bind(null, good)}
              >购买</button>
            </div>
          </div>
        ))
      }
    </div>
  )
})

const CartList = memo(() => {
  const goods = useSelector(state => state)
  const total_count = useSelector(state => state).reduce((prev,next) => prev + next.count*1, 0)
  const total_price = useSelector(state => state).reduce((prev,next) => prev + next.count*next.price, 0)
  const dispatch = useDispatch()
  const handleDeleteGood = (id) => {
    dispatch(delete_good(id))
  }
  const handleDecrement = (good) => {
    if(good.count === 1) {
      window.$message.warning('数量不能小于1')
      return
    }
    dispatch(decrement_good(good.id))
  }
  const handleIncrement = (id) => {
    dispatch(increment_good(id))
  }
  return (
    <div className={styles.cart_wrapper}>
      <div className={styles.title}>购物车</div>
      { goods.length > 0 ? (
        <div>
          <div className={styles.header}>
            <span>商品</span><span>图片</span><span>单价</span><span>数量</span><span>总价</span><span>操作</span>
          </div>
          {
            goods.map(good => (
              <div key={good.id} className={styles.cart_item}>
                <div>{good.title}</div>
                <div><img src={url_map[good._key]} className={styles.img}/></div>
                <div className={styles.price}>{good.price}</div>
                <div className={styles.control}>
                  <button className={[styles.button, 'primary-button'].join(' ')} onClick={handleDecrement.bind(null, good)}>-</button>
                  <span className={styles.count}>{good.count}</span>
                  <button className={[styles.button, 'primary-button'].join(' ')} onClick={handleIncrement.bind(null,good.id)}>+</button>
                </div>
                <div>{good.price * good.count}</div>
                <div><span className={styles.delete_icon} onClick={handleDeleteGood.bind(null, good.id)}>删除</span></div>
              </div>
            ))
          }
          <div className={styles.footer}>
            <span>已选择 {total_count} 件商品, </span>
            <span>总计 RMB {total_price}</span>
          </div>
        </div>
        ) : <div style={{textAlign: 'center', padding: '10px 0'}}>
          <span><svg className="ant-empty-img-simple" width="64" height="41" viewBox="0 0 64 41"><g transform="translate(0 1)" fill="none" fillRule="evenodd"><ellipse className="ant-empty-img-simple-ellipse" fill="#F5F5F5" cx="32" cy="33" rx="32" ry="7"></ellipse><g className="ant-empty-img-simple-g" fillRule="nonzero" stroke="#D9D9D9"><path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path><path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" fill="#FAFAFA" className="ant-empty-img-simple-path"></path></g></g></svg></span>
          <div>暂无数据</div>
        </div>}
    </div>
  )
})

function App() {
  return (
    <Fragment>
      <GoodList/>
      <CartList/>
    </Fragment>
  )
}

if(!__VUEPRESS_SSR__) {
  const root = createRoot(document.querySelector('._redux_shopping_cart'))
  root.render(
    <Provider store={store}>
      <App/>
    </Provider>
  )
}
