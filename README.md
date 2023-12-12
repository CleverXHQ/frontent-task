# Frontend Developer Hiring Task

Welcome to the frontend developer hiring task! We're excited to evaluate your skills and see how you approach building features on the client side. This task involves creating a frontend, which utilizes existing APIs.

## Task details

1. Design link: https://www.figma.com/file/1yPIQ27BkIAZRLeuLdeG0N/Task

2. Implement the responsive pixel perfect design as per the Figma file. Tech stack to be used: React(can use NextJS), Tailwind CSS, rest is upto you.

3. Filters/state should persist on reload. Pagination, items per page should work.

5. Create an API for the main search field, user should be able to search any field.

6. In the `/list` API, add the industries filter and it should function same as countries filter. 

7. Review the provided code in `server/index.js` and make any necessary improvements or modifications.

8. Feel free to add error handling, logging, or any other improvements you see fit in the existing code.

9. Once you are done, submit your completed code or a link to your repository.

Happy coding! If you have any questions, feel free to reach out on wellfound.

## Project Overview

This project sets up a basic Express.js server to handle two endpoints:

1. `/list`: Retrieves a list of opportunities with optional filters for countries, and pagination.

2. `/filters`: Retrieves a list of unique countries available in the opportunities.

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
    "title": "Opportunity 1",
    "countries": ["USA", "Canada"]
    // Other opportunity properties
  }
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
  "UK"
  // Other unique countries
]
```
