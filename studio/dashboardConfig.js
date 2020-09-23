export default {
  widgets: [
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
                  buildHookId: '5f6af8ea0c3806b7944eef36',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-2-studio-8zhdsz9o',
                  apiId: 'e19838ae-ad80-41da-8b70-f5b8a9e77036'
                },
                {
                  buildHookId: '5f6af8ea0c3806b7944eef37',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-2-web-4et19om3',
                  apiId: 'f603c8b4-ea8d-49b5-ac0a-53b459403207'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/strategicallynicole/sanity-kitchen-sink2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-2-web-4et19om3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
