function King() {
  if (!new.target) {
    throw 'King must be instantiated using new'
  }
  console.log(new.target === arguments.callee)
}
new King()
King()