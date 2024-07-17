import React from 'react';
import { Grid } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import ATCCServiceBand from '../../../components/dashboards/ecommerce/ATCCServiceBand';
import BillingEfficiencyServiceBand from '../../../components/dashboards/ecommerce/BillingEfficiencyServiceBand';
import CollectionEfficiencyServiceBand from '../../../components/dashboards/ecommerce/CollectionEfficiencyServiceBand';
import CustomerResponseRateServiceBand from '../../../components/dashboards/ecommerce/CustomerResponseRateServiceBand';
<<<<<<< HEAD
import BreakdownCommercialSBT from '../../../components/commercial-components/service-band-charts-cards/commercial-breakdown-sb';
import ATCCCommercialSBT from '../../../components/commercial-components/service-band-charts-cards/atcc-breakdown-sb'
import StateFilter from '../../../layouts/full/shared/breadcrumb/StateFilter';
=======
import EnergyCommercialServiceBand from '../../../components/widgets/charts/EnergyCommercialServiceBand';
import StateFilter from 'src/layouts/full/shared/breadcrumb/StateFilter'
>>>>>>> 326bedd12cbaf49d9d312fa19f6f48880d6756c2

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'State',
  },
  {
    title: 'Commercial Service Band',
  },
];

const CommercialServiceBand = () => {
  return (
    <PageContainer title="Commercial Service Band" description="this is Charts page">
      {/* breadcrumb */}
      <Breadcrumb title="Commercial Service Band" items={BCrumb} />
      {/* end breadcrumb */}
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <StateFilter />
        </Grid>
        <Grid item xs={12}>
          <BreakdownCommercialSBT />
        </Grid>
        <Grid item xs={12}>
          <ATCCCommercialSBT />
        </Grid>
        
        <Grid item xs={12} lg={6}>
          <ATCCServiceBand />
        </Grid>
        <Grid item xs={12} lg={6}>
          <BillingEfficiencyServiceBand />
        </Grid>
        <Grid item xs={12} lg={6}>
          <CollectionEfficiencyServiceBand />
        </Grid>
        <Grid item xs={12} lg={6}>
          <CustomerResponseRateServiceBand />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default CommercialServiceBand;
