const { insertArticle } = require("./data/articles");

const availableTags = [
  'c++',
  'java',
  'javascript',
  'vue',
  'git',
  'svn',
  'sql'
]

const getRandomTags = (arr, numTags) => {
  const result = [];
  const arrayCopy = [...arr];
  const length = arrayCopy.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * (length - i));
    result.push(arrayCopy[randomIndex]);
    arrayCopy[randomIndex] = arrayCopy[length - i - 1];
  }

  return result.slice(0, numTags);
}

const populate = async(articleCount) => {
  for(let i = 0; i < articleCount; i++){
    await insertArticle(
      `Article #${i + 1}`,
      `Content of article #${i + 1}................. \nMore content coming`,
      getRandomTags(availableTags, 2)
    )
  }
}

populate(10);