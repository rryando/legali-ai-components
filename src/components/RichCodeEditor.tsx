import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { json } from '@codemirror/lang-json';
import { sql } from '@codemirror/lang-sql';
import { githubDark } from '@uiw/codemirror-theme-github';
import { cn } from '@/lib/utils';

export interface RichCodeEditorProps {
  value: string;
  onChange?: (value: string) => void;
  language?: 'javascript' | 'typescript' | 'python' | 'json' | 'sql';
  readOnly?: boolean;
  className?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
}

const getLanguageExtension = (lang: RichCodeEditorProps['language']) => {
  switch (lang) {
    case 'javascript':
    case 'typescript':
      return javascript({ jsx: true, typescript: lang === 'typescript' });
    case 'python':
      return python();
    case 'json':
      return json();
    case 'sql':
      return sql();
    default:
      return javascript();
  }
};

export const RichCodeEditor: React.FC<RichCodeEditorProps> = ({
  value,
  onChange,
  language = 'javascript',
  readOnly = false,
  className,
  height = "auto",
  minHeight = "100px",
  maxHeight = "600px",
}) => {
  const extensions = [getLanguageExtension(language)];

  return (
    <div
      className={cn(
        "rounded-md border border-input bg-background overflow-hidden focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
        className
      )}
    >
      <CodeMirror
        value={value}
        height={height}
        minHeight={minHeight}
        maxHeight={maxHeight}
        theme={githubDark}
        extensions={extensions}
        onChange={(val) => onChange?.(val)}
        readOnly={readOnly}
        editable={!readOnly}
        basicSetup={{
            lineNumbers: true,
            highlightActiveLineGutter: true,
            highlightSpecialChars: true,
            history: true,
            foldGutter: true,
            drawSelection: true,
            dropCursor: true,
            allowMultipleSelections: true,
            indentOnInput: true,
            syntaxHighlighting: true,
            bracketMatching: true,
            closeBrackets: true,
            autocompletion: true,
            rectangularSelection: true,
            crosshairCursor: true,
            highlightActiveLine: true,
            highlightSelectionMatches: true,
            closeBracketsKeymap: true,
            defaultKeymap: true,
            searchKeymap: true,
            historyKeymap: true,
            foldKeymap: true,
            completionKeymap: true,
            lintKeymap: true,
        }}
        className="text-sm"
      />
    </div>
  );
};
