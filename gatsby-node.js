const path = require(`path`)
const slash = require(`slash`)

const navigations = require('./src/assets/mock-data/navigation.json');

exports.createPages = ({ boundActionCreators: { createPage } }) => {

  navigations.forEach((n) => {
    const template = path.resolve(`./src/pages/${n.label.replace(/\s/ig, '').toLowerCase()}/index.js`);

    createPage({
      path: n.link,
      component: slash(template)
    });
  })
};
