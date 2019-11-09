import Vue from 'vue'
import App from './App.vue'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
//import VueRouter from 'vue-router'

Vue.config.productionTip = false

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
});

const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
});

Vue.use(VueApollo);
//Vue.use(VueRouter);

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

// const routes = [
//     { path: '/', component: App },
// ];

//const router = new VueRouter({ routes });

new Vue({
    apolloProvider,
    //router
    render: h => h(App)
}).$mount('#app')










