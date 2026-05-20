export const USER_STORAGE_KEY = 'hintro_selected_user';
export const FEEDBACK_STORAGE_KEY = 'hintro_feedback_submitted';

export const getStoredUser = () => {
  return localStorage.getItem(USER_STORAGE_KEY) || 'u1';
};

export const setStoredUser = (userId) => {
  localStorage.setItem(USER_STORAGE_KEY, userId);
};

export const getFeedbackStatus = () => {
  return localStorage.getItem(FEEDBACK_STORAGE_KEY) === 'true';
};

export const setFeedbackStatus = (status) => {
  localStorage.setItem(FEEDBACK_STORAGE_KEY, status);
};
