# Frontend Developer Hiring Task

Welcome to the frontend developer hiring task! We're excited to evaluate your skills and see how you approach building features on the client side. This task involves creating a simple Express.js server that serves data and filters based on certain criteria.

## Project Overview

This project sets up a basic Express.js server to handle two endpoints:

1. `/list`: Retrieves a list of opportunities with optional filters for countries, count, and start.

2. `/filters`: Retrieves a list of unique countries available in the dataset.

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the server:

   ```bash
   npm start
   ```

   The server will be running on [http://localhost:5000](http://localhost:5000).

## Endpoints

### 1. List Opportunities

- **Endpoint:** `/list`
- **Method:** `GET`
- **Query Parameters:**
  - `count` (optional): Number of opportunities to retrieve (default: 10).
  - `start` (optional): Starting index for pagination (default: 0).
  - `country` (optional): Array of countries to filter opportunities.

**Example Request:**

```bash
curl http://localhost:5000/list?count=5&start=0&country=USA&country=Canada
```

**Example Response:**

```json
[
  {
    "id": 1,
    "title": "Opportunity 1",
    "countries": ["USA", "Canada"]
    // Other opportunity properties
  },
  // Additional opportunities
]
```

### 2. Get Filters

- **Endpoint:** `/filters`
- **Method:** `GET`

**Example Request:**

```bash
curl http://localhost:5000/filters
```

**Example Response:**

```json
[
  "USA",
  "Canada",
  "UK",
  // Other unique countries
]
```

## Developer Notes

- Ensure that the `data.json` file is populated with the necessary data.
- Review the provided code in `index.js` and make any necessary improvements or modifications.
- Feel free to add error handling, logging, or any other improvements you see fit.
- Once you are done, submit your completed code or a link to your repository.

Happy coding! If you have any questions, feel free to reach out.