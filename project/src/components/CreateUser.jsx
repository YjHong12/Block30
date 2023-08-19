const COHORT_NAME = "2306-GHP-ET-WEB-FT-SF";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const users = [];

App.post(`${BASE_URL}/signup`, async (req, res) => {
    const { username, password } = req.body;
    console.log({ username, password })
})