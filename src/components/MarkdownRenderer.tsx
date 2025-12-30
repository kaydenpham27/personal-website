import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import type { Components } from "react-markdown";
import "highlight.js/styles/github.css";
import Typography from "./ui/typography";
import { cn } from "@/lib/utils";

const components: Components = {
  h1: ({ children }) => (
    <Typography.H1 className="text-start mb-4">{children}</Typography.H1>
  ),
  h2: ({ children }) => (
    <Typography.H2 className="text-start mb-4">{children}</Typography.H2>
  ),
  h3: ({ children }) => (
    <Typography.H3 className="text-start">{children}</Typography.H3>
  ),
  h4: ({ children }) => (
    <Typography.H4 className="text-start">{children}</Typography.H4>
  ),
  p: ({ children }) => (
    <Typography.P className="text-start mb-4">{children}</Typography.P>
  ),
  code: ({ className, children }) => {
    return (
      <Typography.InlineCode className={className}>
        {children}
      </Typography.InlineCode>
    );
  },
  ul: ({ children }) => (
    <ul className="flex flex-col items-start list-disc list-inside mb-4 space-y-2">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
  ),
  li: ({ children }) => <li className="ml-4 text-gray-800">{children}</li>,
};

type MarkdownRendererProps = {
  content: string;
  className?: string;
};

export const MarkdownRenderer = ({
  content,
  className,
}: MarkdownRendererProps) => {
  return (
    <div className={cn("text-start", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
