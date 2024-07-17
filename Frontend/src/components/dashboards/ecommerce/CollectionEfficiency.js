import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Box } from '@mui/material';
import { IconGridDots } from '@tabler/icons';

import DashboardCard from '../../shared/DashboardCard';

const CollectionEfficiency = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const primarylight = theme.palette.primary.light;
  const textColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#2A3547';

  const optionscolumnchart = {
    chart: {
      type: 'donut',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      toolbar: {
        show: false,
      },
      height: 275,
    },
    labels: ["Efficiency", "Inefficiency"],
    colors: [primary, primarylight],
    plotOptions: {
      pie: {
        donut: {
          size: '89%',
          background: 'transparent',
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 7,
            },
            value: {
              show: false,
            },
            total: {
              show: true,
              color: textColor,
              fontSize: '20px',
              fontWeight: '600',
              label: '58%',
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
    legend: {
      show: false,
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
  };
  const seriescolumnchart = [58, 42];

  const monthData = [
    { month: 'March', value: '45%', color: 'primary' },
    { month: 'April', value: '48%', color: 'secondary' },
    { month: 'May', value: '52%', color: 'warning' },
    { month: 'June', value: '58%', color: 'success' },
  ];

  return (
    <DashboardCard title="Collection Efficiency" subtitle="58%">
      <>
        <Box mt={3}>
          <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type="donut"
            height="275px"
          />
        </Box>

        <Stack direction="row" spacing={2} justifyContent="space-between" mt={7}>
          {monthData.map((item, index) => (
            <Stack key={index} direction="row" spacing={1} alignItems="center">
              <Box
                width={30}
                height={30}
                bgcolor={`${item.color}.light`}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography
                  color={`${item.color}.main`}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <IconGridDots width={18} />
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" fontWeight="600" fontSize="0.875rem">
                  {item.value}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" fontSize="0.75rem">
                  {item.month}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      </>
    </DashboardCard>
  );
};

export default CollectionEfficiency;