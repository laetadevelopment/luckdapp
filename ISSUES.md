# Issues


## DApp

### LDNA struct

- need to store token design so it shows when you load the NFT

### newPlayer function

- should this function return anything or emit an event?

### luckChallenge function

- estimated gas is not enough to complete transaction sometimes

### playerLDNA function

- this function loops through all LDNA to find which ones are owned by the address provided

### getLDNA function

- this function can be run even if player does not exist


## SSPWA

### intro view

- need to add button to unmute video

### app header view

- need the Connect MetaMask button to reload main SSPWA component instead of reloading entire page

### create player view

- need to provide visual effect while transaction is pending
- failed transaction needs to be indicated and Create Player button needs to be enabled again

### dapp header view

- need the Disconnect MetaMask button to disconnect wallet before resetting player state

### luck challenge view

- tokens are not always displayed in correct order and you have to hit refresh button a few times
- should the order of tokens be by LDNA # or by opacity?
- should there be different sorting options for tokens?
- need to figure out best way to display more than five tokens
- incorrect token is removed after loosing challenge sometimes
- selected token does not stick when you select Let's Go! button
- transactions that finish too slowly return a console error
- need to disable Let's Go! button and provide visual effect while transaction is pending
- need to display fee to get one more LDNA when you have zero LDNA

### ldna view

- tokens are not always displayed in correct order and you have to hit refresh button a few times
- should the order of tokens be by LDNA # or by opacity?
- should there be different sorting options for tokens?
- need to figure out best way to display more than five tokens
- need to display fee to get one more LDNA when you have zero LDNA
