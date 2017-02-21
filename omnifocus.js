module.exports = (pluginContext) => {
  return (query, env = {}) => {
    return new Promise((resolve, reject) => {
      resolve([
        {
          icon: '',
          title: 'New Task',
          subtitle: 'OmniFocus Inbox',
          value: query,
        }
      ])
    })
  }
}