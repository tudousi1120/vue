import Vue from 'vue';      //依赖引入
import Vuex from 'vuex';

import state from './state';    //文件引入:同级目录下加  ./
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import modules from './modules';

Vue.use(Vuex);


export default new Vuex.Store({
   state,
   getters,
   mutations,
   actions,
   modules
})