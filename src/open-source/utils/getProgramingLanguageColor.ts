export function getProgramingLanguageColor(programingLanguage: string): string {
  switch (programingLanguage) {
    case "TypeScript":
      return "#2b7489";
    case "JavaScript":
      return "#f1e05a";
    case "HTML":
      return "#e34c26";
    case "CSS":
      return "#563d7c";
    case "SCSS":
      return "#c6538c";
    case "Python":
      return "#3572A5";
    case "C#":
      return "#178600";
    case "C++":
      return "#f34b7d";
    case "Java":
      return "#b07219";
    case "PHP":
      return "#4F5D95";
    case "Ruby":
      return "#701516";
    case "Shell":
      return "#89e051";
    default:
      return "#000";
  }
}
