import React from "react";
import { Link } from "react-router-dom";
import './MarkdownExplorerComponent.scss';
import { MARKDOWN_DOCUMENTS_HARDCODED } from "@Const/markdown";
import { IMarkdownDocument } from "@Types/markdown";

export default function MarkdownExplorerComponent() {
  const documents = GetMarkdownDocuments();
  const markdownRowElements = documents.map((document) => CreateMarkdownRowElement(document));

  return (
    <div id="markdown-explorer">
      <h2>Markdown Explorer</h2>
      <div className="markdown-row-container">
        <React.Fragment>
          {markdownRowElements}
        </React.Fragment>
      </div>
    </div>
  )
}

function GetMarkdownDocuments() {
  const documents: IMarkdownDocument[] = [ ...MARKDOWN_DOCUMENTS_HARDCODED ];
  return documents;
}

function CreateMarkdownRowElement(markdownDocument: IMarkdownDocument): JSX.Element {
  return (
    <div className="markdown-row" key={markdownDocument.id}>
      <Link to={'/'}>
        <div className="markdown-row-title">{markdownDocument.title}</div>
      </Link>
    </div>
  )
}
