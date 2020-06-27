import fs from "fs";
import path from "path";
const resumeDirectory = path.join(process.cwd(), "resume");

export async function getResumeData() {
   const fullPath = path.join(resumeDirectory, `resume.json`);
   const fileContents = fs.readFileSync(fullPath, "utf8");

   // Combine the data with the id and contentHtml
   const resume = JSON.parse(fileContents);
   return resume;
}
