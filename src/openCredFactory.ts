import { BootcampCreated } from "../generated/OpenCredFactory/OpenCredFactory";
import { Bootcamp } from "../generated/schema";
import { OpenCred } from "../generated/templates";

export function handleBootcampCreated(event: BootcampCreated): void {
  let bootcamp = new Bootcamp(event.params.bootcamp.toHex());

  // TODO: Handle ipfs
  // Entity fields can be set based on event parameters

  bootcamp.owner = event.params.owner;
  bootcamp.address = event.params.bootcamp;
  bootcamp.uri = event.params.bootcampURI;

  // Entities can be written to the store with `.save()`
  bootcamp.save();

  OpenCred.create(event.params.bootcamp);
}
