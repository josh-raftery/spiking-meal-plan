const Recipe = require('../model/recipeModel');

const getRecipes = (req, res) => {
  Recipe.find({})
    .then(recipes => {
      console.log('Fetched recipes:', recipes);
      res.json(recipes);
    })
    .catch(error => {
      console.error('Error fetching recipes:', error);
      res.status(500).json({ message: "Error fetching recipes", error });
    });
};

const getRecipeById = (req, res) => {
    const { recipe_id } = req.params;
  
    Recipe.findOne({ recipe_id: recipe_id })
      .then(recipe => {
        if (recipe) {
          console.log('Fetched recipe:', recipe);
          res.json(recipe);
        } else {
          res.status(404).json({ message: "Recipe not found" });
        }
      })
      .catch(error => {
        console.error('Error fetching recipe by ID:', error);
        res.status(500).json({ message: "Error fetching recipe by ID", error });
      });
  };
  

module.exports = {
  getRecipes,
  getRecipeById
};