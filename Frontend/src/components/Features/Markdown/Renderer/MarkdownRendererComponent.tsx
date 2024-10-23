import './MarkdownRendererComponent.scss'
import MarkdownSearchbarComponent from '../components/MarkdownSearchbarComponent'
import { IMarkdownDocument } from '@Types/markdown'

export default function MarkdownRendererComponent(
  { documents }: { documents: IMarkdownDocument[] }
) {
  const RenderViewComponent = CreateView(documents[0]);

  return (

    <div id="markdown-renderer-view">
      <div className="renderer-view__overlay">
        <MarkdownSearchbarComponent />
      </div>
      <div className="renderer-view__content">
        {RenderViewComponent}
      </div>
    </div>
  )
}

function CreateView(markdownDocument: IMarkdownDocument): JSX.Element {
  return (
    <div className="markdown-renderer-view">
      <div className="markdown-renderer-date">{markdownDocument.created}</div>
      <div className="markdown-renderer-title">{markdownDocument.title}</div>
      <div className="markdown-renderer-content">{markdownDocument.content}</div>
    </div>
  )
}
