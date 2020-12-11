import React from 'react';

export const PushedAt = ({ pushedAt }) => {
  const pushedYear = pushedAt.slice(0, 4);
  const pushedMonth = pushedAt.slice(5, 7);
  const pushedDay = pushedAt.slice(8, 10);
  const pushedAtData = `${pushedDay}.${pushedMonth}.${pushedYear}`;
  const pushedAtTime = pushedAt.slice(11, 19);
  return (
    <div style={{ display: 'fles' }}>
      <p>{pushedAtData}</p>
      <p>{pushedAtTime}</p>
    </div>
  );
};
