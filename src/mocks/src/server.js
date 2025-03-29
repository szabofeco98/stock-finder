/* eslint-disable @typescript-eslint/no-require-imports */
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Enable CORS for all origins
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Sample route
app.get('/query', (req, res) => {
  const { function: func, symbol, apikey } = req.query;

  // Validate required parameters
  if (!func || !symbol || !apikey) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  let mockResponse = {};

  if (func === 'GLOBAL_QUOTE') {
    mockResponse = {
      'Global Quote': {
        '01. symbol': symbol,
        '02. open': '20.1500',
        '03. high': '20.2614',
        '04. low': '19.6400',
        '05. price': '19.8400',
        '06. volume': '3964320',
        '07. latest trading day': '2025-03-26',
        '08. previous close': '20.1800',
        '09. change': '-0.3400',
        '10. change percent': '-1.6848%',
      },
    };
  }

  if (func === 'OVERVIEW') {
    mockResponse = {
      Symbol: 'S',
      AssetType: 'Common Stock',
      Name: 'SentinelOne Inc',
      Description:
        'SentinelOne, Inc. is a cybersecurity provider in the United States. The company is headquartered in Mountain View, California.',
      CIK: '1583708',
      Exchange: 'NYSE',
      Currency: 'USD',
      Country: 'USA',
      Sector: 'TECHNOLOGY',
      Industry: 'SERVICES-PREPACKAGED SOFTWARE',
      Address: '444 CASTRO STREET, SUITE 400, MOUNTAIN VIEW, CA, US',
      OfficialSite: 'https://www.sentinelone.com',
      FiscalYearEnd: 'January',
      LatestQuarter: '2025-01-31',
      MarketCapitalization: '6375426000',
      EBITDA: '-282887008',
      PERatio: 'None',
      PEGRatio: 'None',
      BookValue: '5.19',
      DividendPerShare: 'None',
      DividendYield: 'None',
      EPS: '-0.92',
      RevenuePerShareTTM: '2.609',
      ProfitMargin: '-0.351',
      OperatingMarginTTM: '-0.352',
      ReturnOnAssetsTTM: '-0.0861',
      ReturnOnEquityTTM: '-0.177',
      RevenueTTM: '821461000',
      GrossProfitTTM: '611419000',
      DilutedEPSTTM: '-0.92',
      QuarterlyEarningsGrowthYOY: '0',
      QuarterlyRevenueGrowthYOY: '0.295',
      AnalystTargetPrice: '24.7',
      AnalystRatingStrongBuy: '4',
      AnalystRatingBuy: '21',
      AnalystRatingHold: '10',
      AnalystRatingSell: '0',
      AnalystRatingStrongSell: '0',
      TrailingPE: '-',
      ForwardPE: '104.17',
      PriceToSalesRatioTTM: '7.76',
      PriceToBookRatio: '3.819',
      EVToRevenue: '6.98',
      EVToEBITDA: '-10.97',
      Beta: '0.782',
      '52WeekHigh': '29.29',
      '52WeekLow': '14.33',
      '50DayMovingAverage': '21.76',
      '200DayMovingAverage': '23.01',
      SharesOutstanding: '306512000',
      DividendDate: 'None',
      ExDividendDate: 'None',
    };
  }

  res.json(mockResponse);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
