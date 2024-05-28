const shortName = (name: string) => {
  const slplietitle = name.split(" ");

  const newName = `${slplietitle[0]} ${slplietitle[1]}`;
  return newName;
};

export { shortName };
