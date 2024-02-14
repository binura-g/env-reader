const filterKeysBy = process.env.FILTER_KEY;

const filteredEnv = Object.entries(process.env).filter(([key, value]) => {
  if (filterKeysBy) {
    return key.includes(filterKeysBy);
  }
  return true;
});

console.log(filteredEnv);

process.exit(0);
