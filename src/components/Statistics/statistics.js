import React from 'react';
import PropTypes from 'prop-types';
import '../Statistics/statistics.css';
const colors = ['#00BCD4', '#9C27B0', '#E91E63', '#009688'];

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map((stat, index) => (
          <li
            key={stat.id}
            className="item"
            style={{ backgroundColor: colors[index % colors.length] }}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
