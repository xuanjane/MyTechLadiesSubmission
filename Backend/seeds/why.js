const { tableName } = require('../src/models/why')

const SEED_WHYS = [
  {
    email: 'xuanjane88@gmail.com',
//    reason: 'testing',
    reason: 'I will like to pick up practical coding skills and explore a \
            programming career.\n\
            In my present job, our work hinges on a customised database of\
            medical equipment which we use on a daily basis. I have always\
            wanted to dwelve deeper into the database but have been limited\
            as an end-user.\n\
            I find the bootcamp assignment and workshops fascinating as they\
            uncover both the backend (database) and\
            frontend (user-experience) sides of the story.\
            There is so much to discover, learn and apply. I also love that\
            we are using open-source software that we can easily access to.\n\
            That our bootcamp project will be for an NGO is a great source\
            of motivation for me as I have also been volunteering with RDA\
            Singapore for the past 5 years. I can identify with Chor Yi\
            on the need to make Case Management easier for NGOs. Many times,\
            our coordinators have to spend immense effort and time on updating \
            and sharing case notes for our beneficiaries. I am excited for this\
            project and hope that I can be part of the team to create something\
            that can improve NGO case work management. It would be especially\
            awesome for me as I have not been able to join in the RDA volunteering\
            sesssions this year due to COVID-19. This project will allow me to\
            contribute back in a different way.\n\
            Sincerely hope that you will consider my submission. Thank you :) ',
  },
  {
    email: 'tarzan@jungle.com',
    reason: 'Tarzan likes bootcamps!',
  }
]


exports.seed = (knex) => {
  return knex(tableName)
    // Deletes all existing entries
    .del()
    .then(function () {
      // Inserts seed user entries
      return knex(tableName).insert(SEED_WHYS)
    })
};
