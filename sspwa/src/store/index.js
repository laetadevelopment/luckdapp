import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'
import metamask from '../utils/metamask'
import MetaMaskOnboarding from '@metamask/onboarding'
import contract from '@truffle/contract'
import artifacts from '../../build/contracts/LuckDApp.json'
const LuckDApp = contract(artifacts)
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: state => ({ player: state.player })
})

export default createStore({
  state: {
    metamask: {
      installed: false,
      connected: false,
      address: null,
      network: null,
      ethereum: null,
      web3: null
    },
    player: {
      name: null,
      ldna: null,
      ldnaDetails: []
    }
  },
  getters: {
  },
  mutations: {
    updateMetamask (state, payload) {
      state.metamask.installed = payload.installed;
      state.metamask.connected = payload.connected;
      state.metamask.address = payload.address;
      state.metamask.network = payload.network;
      state.metamask.ethereum = payload.ethereum;
      state.metamask.web3 = payload.web3;
    },
    updatePlayer (state, payload) {
      state.player.name = payload.name;
      state.player.ldna = payload.ldna;
    },
    updatePlayerLDNA (state, payload) {
      let exists = state.player.ldnaDetails.findIndex(object => object.ldna === payload.ldna);
      if (exists === -1) {
        state.player.ldnaDetails.push(payload);
      }
    }
  },
  actions: {
    setMetamask ({commit}) {
      metamask.then(result => {
        commit('updateMetamask', result);
      }).catch(e => {
        console.error('Error setting MetaMask:', e);
      })
    },
    installMetamask () {
      var onboarding = new MetaMaskOnboarding();
      onboarding.startOnboarding();
    },
    createPlayer (context, payload) {
      context.state.metamask.ethereum.request({ method: 'eth_requestAccounts' }).then(result => {
        context.state.metamask.connected = true;
        context.state.metamask.address = result[0];
        context.state.metamask.network = context.state.metamask.web3.currentProvider.networkVersion;
        LuckDApp.defaults({
          from: result[0]
        });
        LuckDApp.setProvider(context.state.metamask.web3.currentProvider);
        LuckDApp.deployed().then((instance) => instance.playerToName.call(context.state.metamask.address)).then((name) => {
          if (!name) {
            LuckDApp.deployed().then((instance) => instance.newPlayer(payload.name)).then((result) => {
              LuckDApp.deployed().then((instance) => instance.playerLDNA.call(context.state.metamask.address)).then((ldna) => {
                context.commit('updatePlayer', {
                  name: payload.name,
                  ldna: ldna.toString()
                });
              });
            });
          } else {
            LuckDApp.deployed().then((instance) => instance.playerLDNA.call(context.state.metamask.address)).then((ldna) => {
              console.error('There is already a player associated with this wallet.');
              context.commit('updatePlayer', {
                name: name,
                ldna: ldna.toString()
              });
            });
          }
        });
      }).catch(e => {
        console.error('Error connecting MetaMask:', e);
      })
    },
    playerLDNA (context) {
      LuckDApp.setProvider(context.state.metamask.web3.currentProvider);
      let ldna = context.state.player.ldna.split(',');
      ldna.forEach(getLDNA);
      function getLDNA(item) {
        LuckDApp.deployed().then((instance) => instance.luckDNA.call(item)).then((result) => {
          let ldnaDetail = {
            ldna: item,
            r: result.r,
            g: result.g,
            b: result.b,
            a: result.a
          };
          context.commit('updatePlayerLDNA', ldnaDetail);
        });
      }
    },
    startLuckChallenge (context, payload) {
      LuckDApp.setProvider(context.state.metamask.web3.currentProvider);
      LuckDApp.deployed().then((instance) => instance.luckChallenge(payload)).then((result) => {
        console.log(result.toNumber());
      });
    },
    switchNetwork (context) {
      context.state.metamask.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0x539' }] }).then(result => {
        context.state.metamask.network = 5777;
      }).catch(e => {
        console.error('Error changing network:', e);
      })
    }
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
