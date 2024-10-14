import MarkdownEditorComponent from "./components/MarkdownEditorComponent";
import MarkdownExplorerComponent from "./components/MarkdownExplorerComponent";
import MarkdownRendererComponent from "./components/MarkdownRendererComponent";

export default function MarkdownFeatureComponent() {
  return (
    <div id="markdown-wrapper">
      <MarkdownExplorerComponent />
      <MarkdownEditorComponent />
      <MarkdownRendererComponent />
    </div>
  )
}
