import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';

function CourseList() {
  return (
    <div>
      <p style={{ 
        fontSize: '0.875rem', 
        color: 'var(--gray-600)', 
        marginBottom: 'var(--space-4)',
        lineHeight: 1.6
      }}>
        4개 조별로 다른 테마의 임장 코스를 진행합니다.<br />
        본인의 조를 확인하고 경로를 숙지하세요.
      </p>
      
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default CourseList;
