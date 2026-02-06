import React, { useState, useEffect } from 'react';

const PasswordGate = ({ children }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  // 1시간 동안 인증 유지 (데모용)
  const AUTH_KEY = 'sungsu_dashboard_auth';
  const EXPIRY_KEY = 'sungsu_dashboard_auth_expiry';

  useEffect(() => {
    const authStatus = localStorage.getItem(AUTH_KEY);
    const expiry = localStorage.getItem(EXPIRY_KEY);
    
    if (authStatus === 'true' && expiry) {
      if (new Date().getTime() < parseInt(expiry)) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem(AUTH_KEY);
        localStorage.removeItem(EXPIRY_KEY);
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctPassword = import.meta.env.VITE_APP_PASSWORD || '1234'; // 기본값 1234

    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError('');
      // 1시간 뒤 만료되도록 설정
      const expiryTime = new Date().getTime() + 60 * 60 * 1000;
      localStorage.setItem(AUTH_KEY, 'true');
      localStorage.setItem(EXPIRY_KEY, expiryTime.toString());
    } else {
      setError('비밀번호가 올바르지 않습니다.');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return children;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-900 bg-opacity-95 p-4 text-white">
      <div className="w-full max-w-sm rounded-2xl bg-gray-800 p-8 shadow-2xl border border-gray-700">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-blue-400 mb-2">접속 제한</h2>
          <p className="text-gray-400 text-sm">성수 임장 대시보드 접근을 위해<br/>비밀번호를 입력해 주세요.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full rounded-lg bg-gray-700 border border-gray-600 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-center tracking-widest"
              autoFocus
            />
          </div>
          
          {error && (
            <p className="text-red-400 text-sm text-center animate-pulse">{error}</p>
          )}
          
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700 transition-colors active:scale-95 transform"
          >
            확인
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">© 2026 RSA Seongsu Dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default PasswordGate;
