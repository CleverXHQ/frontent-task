const express = require("express");
const data = require("./data.json");

const app = express();
const port = 5000;

const getFilters = (req, res) => {
  const uniqueCountries = Array.from(new Set(data.flatMap((opportunity) => opportunity.countries)));

  return res.status(200).send(uniqueCountries);
};

const getOpportunities = (req, res) => {
  const limit = req?.body?.count || 10,
    skip = req?.body?.start || 0;

  let filtered = data;

  if (Array.isArray(req?.body?.country) && req?.body?.country?.length > 0) {
    filtered = data.filter((opportunity) => opportunity?.countries?.some((item) => req.body.country.includes(item)));
  }

  const result = filtered.slice(skip, skip + limit);

  return res.status(200).send(result);
};

app.get("/list", getOpportunities);

console.log(getFilters());

app.listen(port, () => console.log(`Listening on port ${port}`));
