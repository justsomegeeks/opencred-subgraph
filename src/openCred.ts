import { log } from "@graphprotocol/graph-ts";
import {
  CourseCreated,
  Review as ReviewEvent,
  Graduate as GraduateEvent,
} from "../generated/OpenCred/OpenCred";

import { Review, Graduate, Course } from "../generated/schema";

export function handleReview(event: ReviewEvent): void {
  let review = new Review(event.transaction.hash.toHex());
  review.bootcampAddress = event.params.bootcamp;
  review.uri = event.params.reviewURI;
  review.courseId = event.params.courseId;
  review.reviewer = event.params.reviewer;

  review.save();
}

export function handleGraduate(event: GraduateEvent): void {
  let graduate = new Graduate(event.transaction.hash.toHex());
  // Unique id
  // event.params.courseId.toHex() +
  //   event.params.merkleRoot.toHex() +
  //   event.params.bootcamp.toHex();

  graduate.courseId = event.params.courseId;
  graduate.bootcampAddress = event.params.bootcamp;
  graduate.root = event.params.merkleRoot;
  graduate.uri = event.params.graduatesURI;
  graduate.graduatedAt = event.block.timestamp;

  graduate.save();
}

export function handleCourseCreated(event: CourseCreated): void {
  let course = new Course(event.transaction.hash.toHex());

  // event.transaction.from.toHex() +
  //   event.params.courseId.toHex() +
  //   event.params.bootcamp.toHex();

  course.courseId = event.params.courseId;
  course.uri = event.params.courseURI;
  course.bootcampAddress = event.params.bootcamp;

  course.save();
}
