
import MarkdownExplorerComponent from './components/MarkdownExplorerComponent';
import MarkdownRendererComponent from './components/MarkdownRendererComponent';
import './MarkdownFeatureComponent.scss';

export default function MarkdownFeatureComponent() {
  return (
    <div id="markdown-feature-wrapper">
      <MarkdownExplorerComponent />
      {/* <MarkdownEditorComponent /> */}
      <MarkdownRendererComponent />
    </div>
  )
}
