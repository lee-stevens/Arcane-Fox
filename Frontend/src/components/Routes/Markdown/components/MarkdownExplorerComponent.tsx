import React from "react";
import { Link } from "react-router-dom";
import './MarkdownExplorerComponent.scss';
import { MARKDOWN_DOCUMENTS_HARDCODED } from "@Const/markdown";
import { IMarkdownDocument } from "@Types/markdown";
import { FaFolderTree } from "react-icons/fa6";
import HeaderWithIconComponent from "../../../Shared/HeaderWithIconComponent";

export default function MarkdownExplorerComponent() {
  const documents = GetMarkdownDocuments();
  const markdownRowElements = documents.map((document) => CreateMarkdownRowElement(document));

  return (
    <div id="markdown-explorer">
      <HeaderWithIconComponent IconComponent={FaFolderTree} title={'Explorer'} />
      <div className="markdown-row-container">
        {markdownRowElements}
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
    <React.Fragment key={markdownDocument.id}>
      <div className="markdown-row" key={markdownDocument.id}>
        <Link to={'/markdown'}>
          <div className="markdown-row-title">{markdownDocument.title}</div>
        </Link>
      </div>
    </React.Fragment>
  )
}
