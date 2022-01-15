import {
  CourseCreated,
  Review as ReviewEvent,
  Graduate as GraduateEvent,
  OwnershipTransferred,
} from "../generated/OpenCred/OpenCred";
import { Review, Graduate, Course } from "../generated/schema";

export function handleReview(event: ReviewEvent): void {
  let entity = new Review(event.block.hash.toHex());

  entity.bootcampAddress = event.params.bootcamp;
  entity.uri = event.params.reviewURI;
  entity.courseId = event.params.courseId;
  entity.reviewer = event.params.reviewer;

  entity.save();
}

export function handleGraduate(event: GraduateEvent): void {
  let entity = new Graduate(event.block.hash.toHex());

  entity.courseId = event.params.courseId;
  entity.bootcampAddress = event.params.bootcamp;
  entity.root = event.params.merkleRoot;
  entity.uri = event.params.graduatesURI;
  entity.graduatedAt = event.block.timestamp;

  entity.save();
}

export function handleCourseCreated(event: CourseCreated): void {
  let entity = new Course(event.block.hash.toHex());

  entity.courseId = event.params.courseId;
  entity.uri = event.params.courseURI;
  entity.bootcampAddress = event.params.bootcamp;

  entity.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
