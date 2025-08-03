import React from 'react';
import { Paper, Tabs, Tab } from '@mui/material';
import { Web as WebIcon, Dashboard as DashboardIcon, Analytics as AnalyticsIcon } from '@mui/icons-material';
import './ProductsTabs.css';

const ProductsTabs = ({ selectedTab, onTabChange }) => {
  const productCategories = [
    { label: 'Website Templates', value: 0, icon: <WebIcon /> },
    { label: 'Dashboard UI', value: 1, icon: <DashboardIcon /> },
    { label: 'Analytics Boards', value: 2, icon: <AnalyticsIcon /> }
  ];

  return (
    <Paper className="products__tabs-container" elevation={4}>
      <Tabs
        value={selectedTab}
        onChange={onTabChange}
        centered
        variant="fullWidth"
        className="products__category-tabs"
      >
        {productCategories.map((category, index) => (
          <Tab
            key={index}
            label={category.label}
            icon={category.icon}
            iconPosition="start"
            className="products__category-tab"
          />
        ))}
      </Tabs>
    </Paper>
  );
};

export default ProductsTabs;