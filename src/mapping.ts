import { ipfs, log } from "@graphprotocol/graph-ts";
import {
  BootcampCreated,
  OwnershipTransferred,
} from "../generated/OpenCredFactory/OpenCredFactory";
import { Bootcamp } from "../generated/schema";

export function handleBootcampCreated(event: BootcampCreated): void {
  let entity = new Bootcamp(event.params.bootcamp.toHex());

  // TODO: Handle ipfs
  // Entity fields can be set based on event parameters

  entity.owner = event.params._owner;
  entity.address = event.params.bootcamp;
  entity.uri = event.params._bootcampURI;

  // Entities can be written to the store with `.save()`
  entity.save();

  let ipfsData = ipfs.cat(event.params._bootcampURI);
  log.debug("Time: {}", [event.block.timestamp.toString()]);
  log.debug("IpfsData: {}", [ipfsData.toString()]);
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
