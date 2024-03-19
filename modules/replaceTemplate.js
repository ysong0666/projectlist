module.exports = (temp, project) => {
  let output = temp.replace(/{%PROJECTNAME%}/g, project.name);
  output = output.replace(/{%IMAGE%}/g, project.image);
  output = output.replace(/{%DATE%}/g, project.date);
  output = output.replace(/{%LANGUAGES%}/g, project.languages);
  output = output.replace(/{%TECHSTACKS%}/g, project.techStacks);
  output = output.replace(/{%DESCRIPTION%}/g, project.description);
  output = output.replace(/{%ID%}/g, project.id);
  
  if(!project.done) output = output.replace(/{%NOT_DONE%}/g, 'not-done');
  return output;
}