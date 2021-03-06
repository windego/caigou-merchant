import { Button, Col } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import typeMap from './constants';

import styles from './Exception.scss';

const Exception = ({ type = 404, infoText, actions, hideBack = false }) => {
  const { img, title, desc } = typeMap[type];

  return (
    <div className={styles.container}>
      <div style={{ width: '100%', height: '100%' }}>
        <Col xs={24} sm={12}>
          <div className={styles.img} style={{ backgroundImage: `url(${img})` }} />
        </Col>
        <Col xs={24} sm={12} className={styles.content}>
          <h1>{title}</h1>
          <div className={styles.desc}>{desc}</div>
          <div className={styles.desc}>{infoText}</div>
          <div className={styles.actions}>
            {actions}
            {!hideBack && (
              <Link to="/">
                <Button type="primary">返回首页</Button>
              </Link>
            )}
          </div>
        </Col>
      </div>
    </div>
  );
};

export default Exception;
