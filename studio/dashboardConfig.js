export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d1342c2f0e7fc96a40f6592',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-f2js4ndw',
                  apiId: 'ca594ff1-c623-4c75-adcb-0d503e2acca0'
                },
                {
                  buildHookId: '5d1342c317586720ffcbb56c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-uw7hu7iq',
                  apiId: '87db6940-38c6-48f0-ad66-664a4f86fced'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/d4v1d82/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-uw7hu7iq.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
