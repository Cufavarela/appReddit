export const formatDate = (date: number) => {
  return new Date(date * 1000).toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
