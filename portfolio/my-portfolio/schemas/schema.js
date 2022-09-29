
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import projects from './projects'
import skills from './skills'
import event from './event'
import experience from './experience'
import about from './about'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    projects,
    skills,
    event,
    about,
    experience
  ]),
})
