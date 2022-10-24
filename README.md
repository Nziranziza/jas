# Simple Job Application System(jas)

## System process flow

- [x] Consider that an applicant wants to submit his / her profile and CV
- [x] The HR is able to view the list of applicants
- [x] That list should show only the first 10 items
- [x] And that list should be sorted alphabetically
- [x] The HR should be able to select an applicant and view his/her details
- [x] Last, the HR must have option to change the application status (Dropped, Passed)
  
## Tools, Libraries and Framework used

- [x] ReactJs
- [x] NodeJs/ExpressJs
- [x] React Query
- [x] Sass
- [x] Joi
- [x] MomentJs
- [x] PostgreSQL

## Installation

### Prerequisite

- [ ] PostgreSQL server need to be installed, a remote connection string is also fine
- [ ] NodeJs also need to be installed on your system
  
### Steps for installation

- [ ] Clone the repository
  ```bash
   git clone https://github.com/Nziranziza/jas.git
  ```
- [ ] Install dependencies with yarn or npm
  ```bash
  cd jas && yarn or cd jas && npm i
  ```
- [ ] Create a .env file and copy .env.example file to .env and replace with your own values
- [ ] Start the server
  ```bash
  yarn start or npm start
  ```
- [ ] The app should be accessible from `http://localhost:3000`