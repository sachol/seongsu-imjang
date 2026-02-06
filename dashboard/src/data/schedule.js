// 타임라인 일정 데이터
export const schedule = [
  {
    id: 1,
    time: '14:00',
    endTime: '14:30',
    title: '팀 편성 및 사전 브리핑',
    description: '임장 목적, 코스, 체크포인트 공유',
    icon: '📋',
    isActive: false,
  },
  {
    id: 2,
    time: '14:30',
    endTime: '17:30',
    title: '팀별 테마 임장',
    description: '상권 조사, 사진 기록, 체크리스트 작성',
    icon: '🚶',
    isActive: false,
  },
  {
    id: 3,
    time: '17:30',
    endTime: '18:00',
    title: '전체 집결 및 중간 정리',
    description: '현장 인사이트 공유',
    icon: '🤝',
    isActive: false,
  },
  {
    id: 4,
    time: '18:00',
    endTime: '',
    title: '네트워킹 행사',
    description: '임장 소감, 질의응답',
    icon: '🎉',
    isActive: false,
  },
];

// 임장 행동 수칙
export const guidelines = [
  {
    id: 1,
    title: '편한 복장',
    description: '걷기 편한 신발과 활동성 있는 복장 필수',
    icon: '👟',
  },
  {
    id: 2,
    title: '휴대폰 충전',
    description: '지도 확인, 사진 촬영, 메모 활용 대비',
    icon: '🔋',
  },
  {
    id: 3,
    title: '신호 엄수',
    description: '도로 횡단 시 교통 신호 준수',
    icon: '🚦',
  },
  {
    id: 4,
    title: '팀워크 유지',
    description: '단독 행동 금지, 팀 단위 이동',
    icon: '👥',
  },
  {
    id: 5,
    title: '위험지역 주의',
    description: '공사장, 차량 진출입 구간 주의',
    icon: '⚠️',
  },
  {
    id: 6,
    title: '현지 매너',
    description: '주민·상인과의 마찰 금지, 예의 유지',
    icon: '🙏',
  },
];

// 이벤트 정보
export const eventInfo = {
  title: 'RSA 총동문회 성수 실전임장',
  subtitle: '핫플인데 개발까지? 성수 임장',
  date: '2026년 2월 22일 (일)',
  time: '오후 2시 ~ 6시',
  location: '서울 성동구 성수동 일대',
};
