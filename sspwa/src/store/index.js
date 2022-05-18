import { createStore } from 'vuex'
import metamask from '../utils/metamask'
import MetaMaskOnboarding from '@metamask/onboarding'
import contract from '@truffle/contract'
import artifacts from '../../build/contracts/LuckDApp.json'
const LuckDApp = contract(artifacts)

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
      address: null,
      ldna: null
    }
  },
  getters: {
  },
  mutations: {
    updateMetamask (state, payload) {
      let result = payload;
      let metamaskCopy = state.metamask;
      metamaskCopy.installed = result.installed;
      metamaskCopy.connected = result.connected;
      metamaskCopy.address = result.address;
      metamaskCopy.network = result.ethereum.networkVersion;
      metamaskCopy.ethereum = result.ethereum;
      metamaskCopy.web3 = result.web3;
      state.metamask = metamaskCopy;
    }
  },
  actions: {
    setMetamask ({commit}) {
      metamask.then(result => {
        console.log(result);
        commit('updateMetamask', result);
      }).catch(e => {
        console.log('error updating MetaMask', e);
      })
    },
    installMetamask () {
      var onboarding = new MetaMaskOnboarding();
      onboarding.startOnboarding();
    },
    connectMetamask (context, payload) {
      context.state.metamask.ethereum.request({ method: 'eth_requestAccounts' }).then(result => {
        context.state.metamask.connected = true;
        context.state.metamask.address = result[0];
        // context.state.metamask.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0x539' }] }).then(result => {
        //   context.state.metamask.network = 5777;
        // }).catch(e => {
        //   console.log('error changing network', e);
        // })
        LuckDApp.setProvider(context.state.metamask.web3.currentProvider);
        // console.log(LuckDApp.deployed());
        // LuckDApp.deployed().then((instance) => instance.ldnaExists.call('0', '0', '0', '0')).then((exists) => {
        //   console.log(exists);
        // });
        LuckDApp.deployed().then((instance) => instance.newPlayer(payload.name)).then(function(result){
          console.log(result);
          context.state.player.name = payload.name;
          context.state.player.address = context.state.metamask.address;
        }).catch(function(error){
          console.error(error);
        });
        // LuckDApp.deployed().then((instance) => console.log(result[0], instance));
        // LuckDApp.deployed().then((instance) => instance.newPlayer().sendTransaction({from: result[0]}));
        // LuckDApp.deployed().then((instance) => instance.send()).then((result) => {
        //   console.log(result);
        //   // context.state.player.name = payload.name;
        //   // context.state.player.address = context.state.metamask.address;
        //   // context.state.player.ldna = player.playerLDNA;
        // });
      }).catch(e => {
        console.log('error connecting MetaMask', e);
      })
    },
    switchNetwork (context) {
      context.state.metamask.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0x1' }] }).then(result => {
        context.state.metamask.network = 1;
      }).catch(e => {
        console.log('error changing network', e);
      })
    }
  },
  modules: {
  }
})
