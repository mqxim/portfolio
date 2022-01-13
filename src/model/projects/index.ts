import Compiler from "./compiler/Compiler";
import Slides from "./slides/Slides";
import AJPerformance from "./app-testing/AJPerformance";
import MoneyCare from "./money-care/MoneyCare";

interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  images: {
    light: string[];
    dark: string[];
  };
}

const projects: Project[] = [Compiler, Slides, AJPerformance, MoneyCare];

export default projects;
