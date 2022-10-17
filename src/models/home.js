
export const delay = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));

export default {
  // 定义 model 的初始 state
  state: {
    name: '',
    id: '',
  },

  // 定义改变该模型状态的纯函数
  reducers: {
    update(prevState, payload) {
      return {
        ...prevState,
        ...payload,
      };
    },
  },

  // 定义处理该模型副作用的函数
  effects: (dispatch) => ({
    async getUserInfo(payload, rootState) {
      await delay(1000);
      console.log('rootState.home.name:', rootState.home.name);
      this.update({
        name: `demo${rootState.home.name}`,
        id: `123${rootState.home.id}`,
      });
    },
  }),
};
