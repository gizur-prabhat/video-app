import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from '../css/components/navigation';

const cx = classNames.bind(styles);

const Navigation = () => {
    return (
      <nav className={cx('navigation')} role="navigation">
        <Link className={cx('item')} to="/video" activeClassName={cx('active')}>Video</Link>
        <Link to="/about" className={cx('item')} activeClassName={cx('active')}>About</Link>
      </nav>
    );
};

export default Navigation;
