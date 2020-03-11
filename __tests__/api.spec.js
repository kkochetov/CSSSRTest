const frisby = require('frisby');
const Joi = frisby.Joi;

it('GET /superheroes', function () {
    return frisby.get('https://superhero.qa-test.csssr.com/superheroes')
      .expect('status', 200);
  });

it('GET /superheroes/1 one hero', function () {
    return frisby.get('https://superhero.qa-test.csssr.com/superheroes/1')
      .expect('status', 200)

      .expect('jsonTypes', "id", Joi.number())
      .expect('jsonTypes', "fullName", Joi.string())
      .expect('jsonTypes', "birthDate", Joi.string())
      .expect('jsonTypes', "city", Joi.string())
      .expect('jsonTypes', "mainSkill", Joi.string())
      .expect('jsonTypes', "gender", Joi.string())
      .expect('json','id', 1)
});
