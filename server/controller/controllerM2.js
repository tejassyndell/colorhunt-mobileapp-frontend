/* eslint-disable */
 const axios = require('axios');
 const {promisify } = require('util');
 const uid = 26
 const connection = require('../database/database.js')


 //Full Article data
 exports.getArticles = async (req, res) => {
    const query =
      "SELECT a.ArticleNumber, a.StyleDescription, a.ArticleRate, ap.Name AS Photos, c.Title AS Category, sc.Name AS Subcategory FROM article AS a INNER JOIN articlerate AS ar ON a.Id = ar.ArticleId INNER JOIN articlephotos AS ap ON a.Id = ap.ArticlesId INNER JOIN category AS c ON a.CategoryId = c.Id INNER JOIN subcategory AS sc ON a.SubCategoryId = sc.Id";
  
    connection.query(query, (error, productData) => {
      if (error) {
        console.log("Error executing query:", error);
        res.status(210).json("error")
        return;
      }else{
        res.status(200).json(productData)
      }
    //   res.json(results);
    });
  };
exports.getCategory = async (req, res) => {
  const query = "SELECT title FROM category"
  
  connection.query(query, (err, categorydata) => {
    if (err) {
      console.log("Error executing query:", err);
      res.status(210).json("Error")
      return;
    }
    else {
      res.status(200).json(categorydata)
    }
  });
  }