# Subgraph for OpenCred contracts
## Setup 
* ### local graph node
    1. clone [graph-node](https://github.com/graphprotocol/graph-node)
    2. cd graph-node/docker
    3. ./setup.sh
    4. change docker-compose.yml line 20 `host.docker.internal` to Host IP you get while running ./setup.sh (**Note:** In my case its `172:18.0.1`) 
    5. start a local node (```hh node --hostname 0.0.0.0``` || ```ganache-cli -h 0.0.0.0```) (**Note:** Make sure you have installed [hardhat shorthand](https://hardhat.org/guides/shorthand.html))
    6. docker-compose up 

* ### deploy contract
  1. clone and install dependencies [opencred-contracts](https://github.com/justsomegeeks/opencred-contracts)
  2. ```hh deploy:OpenCredFactory --network localhost``` 

* ### deploy subgraph
  1. clone this repo and install dependencies
  2. replace OpenCredFactory source address in `subgraph.yaml` with your deployed OpenCredFactory address
  3. run `yarn codegen`
  4. run `yarn build`
  5. run `yarn create-local`
  6. run `yarn deploy-local`

* ### Run scripts that makes contract to emit events
  1. Replace `scripts/createBootcamp.ts` line 5 with your OpenCredFactory deployed address 
  2. from opencred-contracts repo run `hh run scripts/createBootcamp.ts --network localhost`
  3. Replace `line 8` of `scripts/callCredFunctions.ts` with any of the address of bootcamp emitted by `createBootcamp.ts`
  4. from opencred-contracts repo run `hh run scripts/callCredFunctions.ts --network localhost`



**Note:** got to `http://localhost:8000/subgraphs/id/yourSubgraphID/graphql` and query 

* For Bootcamps
```javascript
{
  bootcamps{
    address,id,uri,owner
  }
}
```
* For Reviews
```javascript
{
reviews{
  uri,reviewer, bootcampAddress
}
}
```
* For Courses
```javascript
{
courses{
  uri, bootcampAddress, courseId
}
}
```
* For Graduates
```javascript
{
graduates{
  uri, bootcampAddress, courseId, root
}
}
```
Cheers! your emitted events has been indexed 