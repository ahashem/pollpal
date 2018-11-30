import React, { Component } from 'react';
import { Layout } from 'antd';
import AppHeader from './AppHeader';
import AppContent from './AppContent';

/**
 * Application layout using AntD layout components
 */
class AppLayout extends Component {
  state = {
    collapsed: false,
  };

  /**
   * Toggle Side menu view
   */
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const renderHeader = false;

    return (
      <Layout>
        <Layout>
          {renderHeader ? <AppHeader /> : ''}
          <AppContent>
            {this.props.children}
          </AppContent>
        </Layout>
      </Layout>
    );
  }
}

export default AppLayout;
