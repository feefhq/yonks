function mockWindow (search, pathname) {
  Object.defineProperty(global, 'window', {
    value: {
      Worker: {
        search,
        pathname
      }
    },
    writable: true
  })
}
