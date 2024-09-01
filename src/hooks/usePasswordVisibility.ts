import { useState } from 'react';

export const usePasswordToggle = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return { showPassword, togglePasswordVisibility };
};
