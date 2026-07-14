import React from 'react';
import styles from './three-d-card.module.css';

export interface ThreeDCardProps {
  title: string;
  content: string;
  month?: string;
  date?: string;
  color?: string;
  link?: string;
}

export const ThreeDCard: React.FC<ThreeDCardProps> = ({ 
  title, 
  content, 
  month = '', 
  date = '', 
  color = '#8ed500',
  link = '#'
}) => {
  return (
    <div className={styles.styledWrapper} style={{ '--card-color': color } as React.CSSProperties}>
      <div className={styles.parent}>
        <div className={styles.card}>
          <div className={styles.contentBox}>
            <span className={styles.cardTitle}>{title}</span>
            <p className={styles.cardContent}>
              {content}
            </p>
            <a href={link} className={styles.seeMore}>See More</a>
          </div>
          {(month || date) && (
            <div className={styles.dateBox}>
              {month && <span className={styles.month}>{month}</span>}
              {date && <span className={styles.date}>{date}</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThreeDCard;
