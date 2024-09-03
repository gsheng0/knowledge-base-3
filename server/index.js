const express = require('express');
const app = express();
const cors = require("cors");
const { getAllArticles, getArticleById, insertArticle, deleteArticle } = require('./data/articles');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
app.get('/articles', async(req, res) => {
  try{
    res.json(await getAllArticles());
  } catch(error){
    console.log(error);
    res.status(500).json({error: 'An error while retrieving articles'})
  }
 
});

app.get('/articles/:id', async(req, res) => {
  try{
    const { id } = req.params;
    res.json(await getArticleById(id));  
  } catch(error){
    console.log(error);
    res.status(500).json({error: 'An error occured while retrieving the article'})
  }
})

app.post('/articles', async(req, res) => {
  try{
    console.log(req.body);
    const { title, content, tags } = req.body;
    res.json(await insertArticle(title, content, tags));
  } catch(error){
    console.log(error);
    res.status(500).json({error: 'An error occured while inserting article'})
  }
})

app.delete('/articles', async(req, res) => {
  try{
    const { id } = req.body;
    await deleteArticle(id);
    res.json('Article successfully deleted')
  } catch(error){
    console.log(error);
    res.status(500).json({error: 'An error occured while deleting article'})
  }
})

// app.get('/users', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM users');
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// app.post('/users', async (req, res) => {
//   try {
//     const { name, email } = req.body;
//     const result = await pool.query(
//       'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
//       [name, email]
//     );
//     res.json(result.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// app.put('/users/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, email } = req.body;
//     const result = await pool.query(
//       'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
//       [name, email, id]
//     );
//     res.json(result.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// app.delete('/users/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     await pool.query('DELETE FROM users WHERE id = $1', [id]);
//     res.json({ message: 'User deleted' });
//   } catch (err) {
//     console.error(err.message);
//   }
// });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
