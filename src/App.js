import React, { Component } from "react";
import { message } from "antd";
import { UploadZone } from "./UploadZone";
import { ResultZone } from "./ResultZone";
import "antd/dist/antd.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1>
            <span role="img" aria-label="hotdog">
              🌭
            </span>{" "}
            or{" "}
            <span role="img" aria-label="hot legs">
              🦵🦵
            </span>
          </h1>
        </header>
        <main className="app__main">
          <UploadZone
            className="app__upload-zone"
            props={{
              name: "file",
              multiple: false,
              action: "//jsonplaceholder.typicode.com/posts/",
              onChange(info) {
                const status = info.file.status;
                if (status !== "uploading") {
                  console.log(info.file, info.fileList);
                }
                if (status === "done") {
                  message.success(
                    `${info.file.name} file uploaded successfully.`
                  );
                } else if (status === "error") {
                  message.error(`${info.file.name} file upload failed.`);
                }
              }
            }}
          />
          <ResultZone className="app__result-zone" />
        </main>
      </div>
    );
  }
}

export default App;
