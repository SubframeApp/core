const path = require("path");

function kebabCaseToPascalCase(str) {
  return str
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function defaultIndexTemplate(filePaths) {
  let iconMap = "export const icons = {\n";
  filePaths.forEach(({ path: filePath }) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = /^\d/.test(basename)
      ? `Svg${kebabCaseToPascalCase(basename)}`
      : kebabCaseToPascalCase(basename);
    iconMap += `${exportName}: () => import("./${basename}"),\n`;
  });
  iconMap += "};\n";

  const exportEntries = filePaths.map(({ path: filePath, originalPath }) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = /^\d/.test(basename)
      ? `Svg${kebabCaseToPascalCase(basename)}`
      : kebabCaseToPascalCase(basename);
    return `export { default as ${exportName} } from './${basename}'`;
  });
  return `${exportEntries.join("\n")}\n${iconMap}\n`;
}

module.exports = defaultIndexTemplate;
