const actions = {
    create: 'Create',
    update: 'Update',
    remove: 'Remove',
    find: 'Find',
    findAll: 'Find All'
  }
  
  const models = {
    board: {
      name: 'Board',
      endpoint: 'boards',
      useCustomRoutes: true
    },
    user: {
      name: 'User',
      endpoint: 'users',
      preventDefaultApi: true,
      useCustomRoutes: true
    },
   todo: {
      name: 'Todo',
      endpoint: 'todos'
    }
  }
  
  
  module.exports = {
    actions,
    models
  }