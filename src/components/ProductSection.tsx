import React from 'react';
import styles from './ProductSection.module.css'; // For custom styles

const ProductSection = ({ title, links, linkColor, buttonLink }) => {
  const gridLinks = links.slice(0, 8);
  const overflowLinks = links.slice(8);

  return (
    <div className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <div className={styles.grid}>
        {gridLinks.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            className={styles.gridItem} 
            style={{ color: linkColor }}
          >
            {item.text}
          </a>
        ))}
      </div>

      {overflowLinks.length > 0 && (
        <div className={styles.buttonContainer}>
          <a href={buttonLink} className={styles.button}>
            View all {gridLinks.length + overflowLinks.length}
          </a>
        </div>
      )}
    </div>
  );
};

export default ProductSection;
