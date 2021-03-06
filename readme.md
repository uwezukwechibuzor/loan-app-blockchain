# loan
**loan** is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://github.com/tendermint/starport).

## Get started

```
starport chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

### Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Starport docs](https://docs.starport.network).

### Launch

To launch your blockchain live on multiple nodes, use `starport network` commands. Learn more about [Starport Network](https://github.com/tendermint/spn).

### Web Frontend

Starport has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Starport front-end development](https://github.com/tendermint/vue).

## Release
To release a new version of your blockchain, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

### Install
To install the latest version of your blockchain node's binary, execute the following command on your machine:

```
curl https://get.starport.network/cosmonaut/loan@latest! | sudo bash
```
`cosmonaut/loan` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).

## Learn more

- [Starport](https://github.com/tendermint/starport)
- [Starport Docs](https://docs.starport.network)
- [Cosmos SDK documentation](https://docs.cosmos.network)
- [Cosmos SDK Tutorials](https://tutorials.cosmos.network)
- [Discord](https://discord.gg/cosmosnetwork)




Scaffold a blockchain

Scaffold a module

Scaffold a list for loan objects

Create messages in your module to interact with the loan object

Interact with other modules in your module

Use an escrow module account

Add application messages for a loan system

Request Loan

Approve Loan

Repay Loan

Liquidate Loan

Cancel Loan


<img width="1440" alt="Screenshot 2022-01-16 at 07 46 56" src="https://user-images.githubusercontent.com/66339097/149650302-3de7332a-92d3-4f1b-8695-eda4d7750849.png">
<img width="1440" alt="Screenshot 2022-01-16 at 07 45 13" src="https://user-images.githubusercontent.com/66339097/149650310-6e61a7e1-3743-4420-81ce-25b6ceae75e4.png">






