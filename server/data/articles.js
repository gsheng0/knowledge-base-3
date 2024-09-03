const pool = require('../config/db');

const getAllArticles = async() => {
  return (await pool.query('SELECT * FROM articles')).rows;
}

const getArticleById = async(id) => {
  return (await pool.query('SELECT * FROM articles WHERE id=$1', [id])).rows;
}

const insertArticle = async(title, content, tags) => {
  return (await pool.query('INSERT INTO articles (title, content, tags) VALUES ($1, $2, $3) RETURNING *', 
    [title, content, tags]
  )).rows[0];
}

const deleteArticle = async(id) => {
  await pool.query('DELETE FROM articles WHERE id=$1', [id])
}




module.exports = {
  getAllArticles,
  getArticleById,
  insertArticle,
  deleteArticle
}