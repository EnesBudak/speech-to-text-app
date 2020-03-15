import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

const state = {
  isActiveUploadModal:false,
  companyName: "Enes Budak",
  userToken: null,
  isLogged: false,
  transcribes: [
    {
      title:"Grup Toplantısı kaydı",
      duration:"12m",
      uploadDate:"12.03.2020"
    },
    {
      title:"Seyhan Belediyesi kayıt 2",
      duration:"27m",
      uploadDate:"14.03.2020"
    }
  ],
  detailTranscribe: {
    transcribe:"",
    wordInfos: [
      {
        wordStart:"0.0",
        wordEnd:"1.7",
        word:"Başkanım"
      },
      {
        wordStart:"1.7",
        wordEnd:"3.0",
        word:"Cemalpaşa"
      },
      {
        wordStart:"3.0",
        wordEnd:"5.1",
        word:"Mahallesi"
      }
    ]
  }
};

const getters = {
  getIsActiveUploadModal: state => state.isActiveUploadModal,
  getCompanyName: state => state.companyName,
  getUserToken: state => state.userToken,
  getDetailTranscribe: state => state.detailTranscribe,
  getTranscribes: state => state.transcribes
};

const mutations = {
  setIsActiveUploadModal(state, payload) {
    state.isActiveUploadModal = payload
  },
  setLogin(state, token) {
    state.userToken = token;
    state.isLogged = true;
  },
  setLogout(state) {
    state.isLogged = false;
    state.userToken = null;
  },
  setTranscribes(state, payload) {
    state.transcribes = payload
  },
  addTranscribe(state, payload) {
    state.transcribes.push(payload);
  },
  updateWord(state, payload) {
    state.detailTranscribe.wordInfos[payload.index].word = payload.word
  }
};

const actions = {
  async LOGIN({ commit }, payload) {
    const url = "user/login";
    try {
      const { data, status } = await axios.post(url, payload);
      if (status === 200) {
        const token = data.token;
        localStorage.setItem("token", token);
        commit("setLogin", token);
        return {status,data}
      }
    } catch (error) {
      commit("setLogout");
      return error;
    }
  },
  LOGOUT({ commit }) {
    commit("setLogout");
    localStorage.removeItem("token");
  }
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;
