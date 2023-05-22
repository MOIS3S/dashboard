import React from 'react';
import { CourseContainer, CourseTitle, ContainerProgress, CourseProgress, CourseProgressValue, CourseDate } from './styles';
import { Course } from '../../interfaces';

interface CoursesUserListProps {
  courses: Course[];
}

export function UserListCourses({ courses }: CoursesUserListProps ){
  return (
    <>
      {courses.length > 0 &&
        courses.map((course: Course, i: number) => (
          <CourseContainer key={course._id}>
            <CourseTitle>Course {i}</CourseTitle>
            <ContainerProgress>
              <CourseProgress>
                <CourseProgressValue style={{width: `${course.percentCompleted}%`}}></CourseProgressValue>
              </CourseProgress>
              <div style={{ fontSize: '13px'}}>{`${course.percentCompleted}%`}</div>
            </ContainerProgress>
            <CourseDate>Fecha de inscripción: {course.inscriptionDate}</CourseDate>
          </CourseContainer>
        ))}
    </>
  );
};