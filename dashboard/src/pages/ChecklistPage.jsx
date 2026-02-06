import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { checklists } from '../data/checklist';

function ChecklistPage() {
  const [activeTab, setActiveTab] = useState('common');
  const [checkedItems, setCheckedItems] = useState(() => {
    // localStorage에서 체크 상태 불러오기
    const saved = localStorage.getItem('rsa-checklist');
    return saved ? JSON.parse(saved) : {};
  });

  // 체크 상태 저장
  useEffect(() => {
    localStorage.setItem('rsa-checklist', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const handleCheck = (itemId) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const tabs = [
    { id: 'common', label: '공통' },
    { id: 'housing', label: '주거' },
    { id: 'branding', label: '상권' },
    { id: 'it', label: 'IT' },
    { id: 'popup', label: '팝업' },
  ];

  const currentChecklist = checklists[activeTab];
  
  // 진행률 계산
  const totalItems = currentChecklist?.items.length || 0;
  const checkedCount = currentChecklist?.items.filter(item => checkedItems[item.id]).length || 0;
  const progress = totalItems > 0 ? (checkedCount / totalItems) * 100 : 0;

  return (
    <div>
      {/* 탭 메뉴 */}
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 진행률 */}
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginBottom: 'var(--space-2)',
          fontSize: '0.75rem',
          color: 'var(--gray-600)'
        }}>
          <span>{currentChecklist?.title}</span>
          <span>{checkedCount} / {totalItems}</span>
        </div>
        <div className="progress">
          <div className="progress__bar" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* 체크리스트 */}
      <div className="card checklist">
        {currentChecklist?.items.map((item) => {
          const isChecked = checkedItems[item.id];
          return (
            <div 
              key={item.id} 
              className="checklist__item"
              onClick={() => handleCheck(item.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className={`checklist__checkbox ${isChecked ? 'checked' : ''}`}>
                {isChecked && <Check size={14} />}
              </div>
              <span className={`checklist__label ${isChecked ? 'checked' : ''}`}>
                {item.text}
              </span>
            </div>
          );
        })}
      </div>

      {/* 초기화 버튼 */}
      <button 
        className="btn btn--outline btn--full"
        style={{ marginTop: 'var(--space-4)' }}
        onClick={() => {
          if (confirm('체크 상태를 초기화하시겠습니까?')) {
            const clearedItems = { ...checkedItems };
            currentChecklist?.items.forEach(item => {
              delete clearedItems[item.id];
            });
            setCheckedItems(clearedItems);
          }
        }}
      >
        이 체크리스트 초기화
      </button>
    </div>
  );
}

export default ChecklistPage;
