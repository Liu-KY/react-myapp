/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */

//1. 引入redux,
//2. createStore( reducer )
import { createStore,combineReducers,applyMiddleware,compose } from "redux";
import reduxThunk from 'redux-thunk'   //回调函数中间件
import reduxPromise from 'redux-promise'  //promise中间件
import { persistStore, persistReducer } from 'redux-persist'  //持久化store 持久化规则
import storage from 'redux-persist/lib/storage' // 设置到storage里面

import TabbarShow from './storeList/TabbarShow'
import CityChange from './storeList/CityChange'
import listCinema from './storeList/listCinema'

const persistConfig = {
  key:'yyds',
  storage,
  whitelist:['CityChange']
}

const reducer = combineReducers({
  TabbarShow,
  CityChange,
  listCinema
})

const persistedReducer = persistReducer(persistConfig,reducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(persistedReducer,composeEnhancers(applyMiddleware(reduxThunk,reduxPromise)));
let persistor = persistStore(store)

export  {
  store,
  persistor
}
