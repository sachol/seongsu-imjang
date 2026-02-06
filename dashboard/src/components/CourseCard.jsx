import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

function CourseCard({ course }) {
  return (
    <Link to={`/courses/${course.id}`} className={`card card--clickable course-card course-card--${course.color}`}>
      <div className="course-card__header">
        <span className={`course-card__badge course-card__badge--${course.color}`}>
          {course.team}
        </span>
        <span className="course-card__title">{course.theme}</span>
        <ChevronRight size={16} style={{ marginLeft: 'auto', color: '#A3A3A3' }} />
      </div>
      <div className="course-card__route">
        {course.startPoint} → ... → {course.endPoint}
      </div>
    </Link>
  );
}

export default CourseCard;
