const { tableName } = require('../src/models/userdetails')

const SEED_USERDETAILS = [
  {
    email: 'xuanjane88@gmail.com',
    workplace: 'Sengkang General Hospital',
    jobtitle: 'Biomedical Engineer',
    interestingfact: 'In my free time, I volunteer at Riding For The Disabled Association of Singapore (RDA Singapore). ',
    image: 'https://en.wikipedia.org/wiki/G.I._Jane#/media/File:Gijane.jpg',
    github: 'https://github.com/xuanjane',
    linkedin: 'https://www.linkedin.com/in/quek-yu-xuan-jane-620a5564/',
  },
  {
    email: 'tarzan@jungle.com',
    workplace: 'Jungle',
    jobtitle: 'Tree Swinger',
    interestingfact: 'In my free time, I ride elephants. ',
    image: 'https://www.gettyimages.com/detail/news-photo/the-new-animated-movie-tarzan-news-photo/51096832?adppopup=true',
    github: '',
    linkedin: ''  
  }
]


exports.seed = (knex) => {
  return knex(tableName)
    // Deletes all existing entries
    .del()
    .then(function () {
      // Inserts seed user entries
      return knex(tableName).insert(SEED_USERDETAILS)
    })
};
