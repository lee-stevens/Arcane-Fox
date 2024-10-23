
import MarkdownExplorerComponent from '../../Features/Markdown/Explorer/MarkdownExplorerComponent';
import MarkdownRendererComponent from '../../Features/Markdown/Renderer/MarkdownRendererComponent';
import './MarkdownFeatureComponent.scss';
import { MARKDOWN_DOCUMENTS_HARDCODED } from '@Const/markdown';

export default function MarkdownFeatureComponent() {
  const documents = MARKDOWN_DOCUMENTS_HARDCODED;

  return (
    <div id="markdown-feature-wrapper">
      <MarkdownExplorerComponent />
      {/* <MarkdownEditorComponent /> */}
      <MarkdownRendererComponent documents={documents} />
    </div>
  )
}
