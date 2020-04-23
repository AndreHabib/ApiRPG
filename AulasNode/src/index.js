const express = require('express');
//const {uuid} = require('uuidv4');

const app = express();

const PORT = process.env.PORT || 8877;

app.use(express.json());

const monsters = [{"id":"1","tittle":" Lobo","description":"Um animal selvagem comum muito traçoeiro.","img":"https://i.pinimg.com/564x/7b/c0/d1/7bc0d1dca2fe1524e5da98e200c7ebe0.jpg","category":"floresta"},
{"id":"2","tittle":"Ente","description":"Uma árvore viva guardiã da floresta.","img":"https://i.pinimg.com/564x/8a/30/cf/8a30cfa1cb6bdb0945c55e4f784cbfbe.jpg","category":"floresta"},
{"id":"3","tittle":"Ghost","description":"Um espírito vagante.","img":"https://i.pinimg.com/564x/64/2d/8a/642d8a2db18204edc824d43847839504.jpg","category":"submundo"},
{"id":"4","tittle":"Baphomet","description":"Um demônio de alto nível semelhante a um bode.","img":"https://i.pinimg.com/564x/6d/e5/bf/6de5bf3c4b68e3277dadf10eb97b7da5.jpg","category":"submundo"},
{"id":"5","tittle":"Tubarão","description":"Um animal perigoso dos mares.","img":"https://i.pinimg.com/564x/4b/32/58/4b32588f0323ecf20f9076124b565457.jpg","category":"agua"},
{"id":"6","tittle":"Kraken","description":"Uma criatura mitológica dos mares.","img":"https://i.pinimg.com/564x/6a/58/70/6a587063397e80a192a9889a9e6216fc.jpg","category":"agua"}
];

app.get('/about', (request,response) => {

  return response.json({monsters});
});

app.listen(PORT, () =>{
  console.log('Back-End Started');

})


// const  {tittle, description, img, category } = Request.query;
  //const {category} = Request.query;

  //const results = category ? monsters.filter(monster => monster.category.includes(category)) : monster; 

  //console.log(tittle);
  //console.log(descriptio);
  //console.log(img);
  //console.log(categor);


//function logRequests(Request,response, next){
  //const {method, url } = Request;

  //const logLabel = `[${method.toUpperCase()}] ${url}`;

  //console.log(logLabel);

  //return next();
//}

//app.use(logRequests);



//app.post('/monsters', (Request,response) => {
  //const  {tittle, description, img, category } = Request.body;

  //const monster = {id: uuid(),tittle, description, img, category};

  //monsters.push(monster);

  //return response.json(monster);
//});

//app.put('/monsters/:id', (Request,response) => {
  //const {id} = Request.params;
  //const  {tittle, description, img, category } = Request.body;

  //const monsterIndex = monsters.findIndex(monster => monster.id == id);

  //if(monsterIndex < 0){
    //return response.status(400).json({ error: 'Monster not found.' })
    
  //}

  //const monster = {
    //id,
    //tittle, 
    //description, 
    //img,
    //category,
  //}

  //monsters[monsterIndex] = monster;

  //return response.json(monster);
//});

//app.delete('/monsters/:id', (Request,response) => {
  //const {id} = Request.params;

  //const monsterIndex = monsters.findIndex(monster => monster.id == id);

  //if(monsterIndex < 0){
    //return response.status(400).json({ error: 'Monster not found.' })
    
  //}

  //monsters.splice(monsterIndex, 1);

  //return response.status(204).send();
//});

