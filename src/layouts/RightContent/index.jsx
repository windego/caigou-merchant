import React from 'react';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu, Spin } from 'antd';
import { useHistory } from 'react-router';
import { useStore, useDispatch } from '@hooks/useStore';
import HeaderDropdown from '@components/HeaderDropdown';
import { logout } from '@store/modules/basic.module';
import styles from './index.less';

const GlobalHeaderRight = () => {
  const {
    theme,
    layout,
    userInfo: { nickName, avatarUrl },
  } = useStore('basic');
  let className = styles.right;
  if (theme === 'dark' && layout === 'topmenu') {
    className = `${styles.right}  ${styles.dark}`;
  }

  const history = useHistory();
  const dispatch = useDispatch();

  const onMenuClick = (event) => {
    const { key } = event;

    if (key === 'logout') {
      dispatch(logout());
      history.push('/login');
    }
  };

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
      <Menu.Item key="center">
        <UserOutlined />
        个人中心
      </Menu.Item>

      <Menu.Item key="settings">
        <SettingOutlined />
        个人设置
      </Menu.Item>

      <Menu.Divider />

      <Menu.Item key="logout">
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={className}>
      {nickName ? (
        <HeaderDropdown overlay={menuHeaderDropdown}>
          <span className={`${styles.action} ${styles.account}`}>
            <Avatar size="small" className={styles.avatar} src={avatarUrl} alt="avatar" />
            <span className={styles.name}>{nickName}</span>
          </span>
        </HeaderDropdown>
      ) : (
        <span className={`${styles.action} ${styles.account}`}>
          <Spin
            size="small"
            style={{
              marginLeft: 8,
              marginRight: 8,
            }}
          />
        </span>
      )}
    </div>
  );
};

export default GlobalHeaderRight;
