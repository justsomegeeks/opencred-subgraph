// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CourseCreated extends ethereum.Event {
  get params(): CourseCreated__Params {
    return new CourseCreated__Params(this);
  }
}

export class CourseCreated__Params {
  _event: CourseCreated;

  constructor(event: CourseCreated) {
    this._event = event;
  }

  get bootcamp(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get courseId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get courseURI(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class Graduate extends ethereum.Event {
  get params(): Graduate__Params {
    return new Graduate__Params(this);
  }
}

export class Graduate__Params {
  _event: Graduate;

  constructor(event: Graduate) {
    this._event = event;
  }

  get bootcamp(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get courseId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get merkleRoot(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get graduatesURI(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Review extends ethereum.Event {
  get params(): Review__Params {
    return new Review__Params(this);
  }
}

export class Review__Params {
  _event: Review;

  constructor(event: Review) {
    this._event = event;
  }

  get bootcamp(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get reviewer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get courseId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get reviewURI(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class OpenCred extends ethereum.SmartContract {
  static bind(address: Address): OpenCred {
    return new OpenCred("OpenCred", address);
  }

  bootcampURI(): string {
    let result = super.call("bootcampURI", "bootcampURI():(string)", []);

    return result[0].toString();
  }

  try_bootcampURI(): ethereum.CallResult<string> {
    let result = super.tryCall("bootcampURI", "bootcampURI():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  courseCount(): BigInt {
    let result = super.call("courseCount", "courseCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_courseCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("courseCount", "courseCount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  graduations(param0: BigInt, param1: Bytes): boolean {
    let result = super.call(
      "graduations",
      "graduations(uint256,bytes32):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromFixedBytes(param1)
      ]
    );

    return result[0].toBoolean();
  }

  try_graduations(param0: BigInt, param1: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "graduations",
      "graduations(uint256,bytes32):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromFixedBytes(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isCertified(
    courseId: BigInt,
    proof: Array<Bytes>,
    leaf: Bytes,
    root: Bytes
  ): boolean {
    let result = super.call(
      "isCertified",
      "isCertified(uint256,bytes32[],bytes32,bytes32):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(courseId),
        ethereum.Value.fromFixedBytesArray(proof),
        ethereum.Value.fromFixedBytes(leaf),
        ethereum.Value.fromFixedBytes(root)
      ]
    );

    return result[0].toBoolean();
  }

  try_isCertified(
    courseId: BigInt,
    proof: Array<Bytes>,
    leaf: Bytes,
    root: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isCertified",
      "isCertified(uint256,bytes32[],bytes32,bytes32):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(courseId),
        ethereum.Value.fromFixedBytesArray(proof),
        ethereum.Value.fromFixedBytes(leaf),
        ethereum.Value.fromFixedBytes(root)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class AddCourseCall extends ethereum.Call {
  get inputs(): AddCourseCall__Inputs {
    return new AddCourseCall__Inputs(this);
  }

  get outputs(): AddCourseCall__Outputs {
    return new AddCourseCall__Outputs(this);
  }
}

export class AddCourseCall__Inputs {
  _call: AddCourseCall;

  constructor(call: AddCourseCall) {
    this._call = call;
  }

  get courseURI(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class AddCourseCall__Outputs {
  _call: AddCourseCall;

  constructor(call: AddCourseCall) {
    this._call = call;
  }
}

export class GraduateCall extends ethereum.Call {
  get inputs(): GraduateCall__Inputs {
    return new GraduateCall__Inputs(this);
  }

  get outputs(): GraduateCall__Outputs {
    return new GraduateCall__Outputs(this);
  }
}

export class GraduateCall__Inputs {
  _call: GraduateCall;

  constructor(call: GraduateCall) {
    this._call = call;
  }

  get graduatesURI(): string {
    return this._call.inputValues[0].value.toString();
  }

  get root(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get courseId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class GraduateCall__Outputs {
  _call: GraduateCall;

  constructor(call: GraduateCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bootcampURI(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class ReviewCall extends ethereum.Call {
  get inputs(): ReviewCall__Inputs {
    return new ReviewCall__Inputs(this);
  }

  get outputs(): ReviewCall__Outputs {
    return new ReviewCall__Outputs(this);
  }
}

export class ReviewCall__Inputs {
  _call: ReviewCall;

  constructor(call: ReviewCall) {
    this._call = call;
  }

  get courseId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get reviewURI(): string {
    return this._call.inputValues[1].value.toString();
  }

  get proof(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
  }

  get root(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class ReviewCall__Outputs {
  _call: ReviewCall;

  constructor(call: ReviewCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
