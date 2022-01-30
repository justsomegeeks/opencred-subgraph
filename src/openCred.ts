import {
  CourseCreated,
  Review as ReviewEvent,
  Graduate as GraduateEvent,
} from "../generated/templates/OpenCred/OpenCred";

import { Review, Graduate, Course, Bootcamp } from "../generated/schema";

// TODO: Implement this if there's a chance the user wants to update it's review in later time
// export function getOrCreateReview(event: ReviewEvent): Review {
//   return;
// }

export function handleReview(event: ReviewEvent): void {
  let course = Course.load(
    event.address.toHex() + event.params.courseId.toHex()
  );
  let review = new Review(
    event.params.reviewer.toHex() +
      event.params.courseId.toHex() +
      event.address.toHex()
  );
  review.bootcampAddress = event.address;
  review.uri = event.params.reviewURI;
  review.courseId = event.params.courseId;
  review.reviewer = event.params.reviewer;
  review.save();

  let reviews = course.reviews;
  reviews.push(review.id);
  course.reviews = reviews;
  course.save();
}

export function handleGraduate(event: GraduateEvent): void {
  let course = Course.load(
    event.address.toHex() + event.params.courseId.toHex()
  );
  let graduate = new Graduate(
    event.params.courseId.toHex() +
      event.params.merkleRoot.toHex() +
      event.address.toHex()
  );

  graduate.courseId = event.params.courseId;
  graduate.bootcampAddress = event.address;
  graduate.root = event.params.merkleRoot;
  graduate.uri = event.params.graduatesURI;
  graduate.graduatedAt = event.block.timestamp;
  graduate.save();

  let graduates = course.graduates;
  graduates.push(graduate.id);
  course.graduates = graduates;
  course.save();
}

export function handleCourseCreated(event: CourseCreated): void {
  let bootcamp = Bootcamp.load(event.address.toHex());
  let courses = bootcamp.courses;

  let course = new Course(
    event.address.toHex() + event.params.courseId.toHex()
  );

  course.courseId = event.params.courseId;
  course.uri = event.params.courseURI;
  course.bootcampAddress = event.address;
  course.reviews = [];
  course.graduates = [];
  course.save();

  courses.push(course.id);
  bootcamp.courses = courses;
  bootcamp.save();
}
