import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
const PORT = process.env.PORT || 3000;

const __fileName = url.fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === "GET") {
      let filePath;
      let contentType = "text/html";

      if (req.url === "/") {
        filePath = path.join(__dirName, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirName, "public", "about.html");
      } else if (req.url.startsWith("/public/")) {
        // serve static files like CSS/JS/images
        filePath = path.join(__dirName, req.url);

        // set proper content type
        const ext = path.extname(filePath);
        switch (ext) {
          case ".css":
            contentType = "text/css";
            break;
          case ".js":
            contentType = "text/javascript";
            break;
          case ".json":
            contentType = "application/json";
            break;
          case ".png":
            contentType = "image/png";
            break;
          case ".jpg":
          case ".jpeg":
            contentType = "image/jpeg";
            break;
          default:
            contentType = "application/octet-stream";
        }
      } else {
        filePath = path.join(__dirName, "public", "not-found.html");
      }

      const data = await fs.readFile(filePath);
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
