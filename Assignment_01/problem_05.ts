interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (course: Course[], minStudents: number): Course[] => {

    let result: Course[] = [];

    for (let i = 0; i < course.length; i++) {

        if (course[i].isPublished === true && course[i].students >= minStudents) {

            result.push(course[i]);

        }

    }

    return result;
};

