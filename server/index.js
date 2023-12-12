const express = require('express');
const data = require('./data.json');

const app = express();
const port = 3001;

const getFilters = (req, res) => {
  const uniqueCountries = Array.from(
    new Set(data.flatMap((opportunity) => opportunity.countries))
  );

  return res.status(200).send(uniqueCountries);
};

const getOpportunities = (req, res) => {
  const limit = parseInt(req?.query?.count) || 10,
    skip = parseInt(req?.query?.start) || 0,
    countryArr = req?.query?.country.split(',');
    
  let filtered = data;

  if (Array.isArray(countryArr) && countryArr?.length > 0) {
    filtered = data.filter((opportunity) =>
      opportunity?.countries?.some((item) => countryArr.includes(item))
    );
  }

  const result = filtered.slice(skip, limit + skip);

  return res.status(200).send(result);
};

app.get('/list', getOpportunities);
app.get('/filters', getFilters);

app.listen(port, () => console.log(`Listening on port ${port}`));
