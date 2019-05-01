import * as React from 'react';
import * as monacoApi from 'monaco-editor/esm/vs/editor/editor.api';

const DEFAULT_EDITOR_OPTIONS: monacoApi.editor.IDiffEditorOptions = {
  readOnly: true,
  renderWhitespace: 'boundary',
};
const DEFAULT_EDITOR_NAVI_OPTIONS: monacoApi.editor.IDiffNavigatorOptions = {};
const DEFAULT_EDITOR_STYLE: React.CSSProperties = {
  height: '100%',
  width: '100%',
};

interface IProps {
  originalValue: string;
  modifiedValue: string;
  language: string;
  theme?: string;
  editorOptions?: monacoApi.editor.IDiffEditorOptions;
  editorNaviOptions?: monacoApi.editor.IDiffNavigatorOptions;
  editorDidMount?(editor: monacoApi.editor.IStandaloneDiffEditor): void;
  style?: React.CSSProperties;
}

class ReviewEditor extends React.Component<IProps> {
  private editor: monacoApi.editor.IStandaloneDiffEditor | undefined;
  private navi: monacoApi.editor.IDiffNavigator | undefined;
  private containerEle: HTMLDivElement | undefined;

  static defaultProps: Partial<IProps> = {
    originalValue: '',
    modifiedValue: '',
    language: 'plaintext',
    theme: 'vs-dark',
  };

  componentDidMount() {
    this.initEditor();
  }

  componentDidUpdate(prevProps: IProps) {
    if (this.editor) {
      const { theme, originalValue, modifiedValue, language } = this.props;

      if (
        prevProps.originalValue !== originalValue ||
        prevProps.modifiedValue !== modifiedValue
      ) {
        this.editor.setModel({
          original: monacoApi.editor.createModel(originalValue, language),
          modified: monacoApi.editor.createModel(modifiedValue, language),
        });
      }

      if (theme && prevProps.theme !== theme) {
        monacoApi.editor.setTheme(theme);
      }

      this.editor.layout();
    }
  }

  componentWillUnmount() {
    if (this.editor) {
      this.editor.dispose();
    }
    if (this.navi) {
      this.navi.dispose();
    }
  }

  assignRef = (ele: HTMLDivElement) => {
    if (ele && !this.containerEle) {
      this.containerEle = ele;
    }
  };

  initEditor = () => {
    if (this.containerEle) {
      const {
        editorDidMount,
        theme,
        language,
        originalValue,
        modifiedValue,
      } = this.props;
      this.editor = monacoApi.editor.createDiffEditor(
        this.containerEle,
        this.editorOptions
      );
      editorDidMount && editorDidMount(this.editor);

      this.navi = monacoApi.editor.createDiffNavigator(
        this.editor,
        this.editorNaviOptions
      );

      this.editor.setModel({
        original: monacoApi.editor.createModel(originalValue, language),
        modified: monacoApi.editor.createModel(modifiedValue, language),
      });

      if (theme) {
        monacoApi.editor.setTheme(theme);
      }
    }
  };

  getEditor = () => {
    return this.editor;
  };

  getNavi = () => {
    return this.navi;
  };

  get editorOptions(): monacoApi.editor.IDiffEditorOptions {
    return Object.assign(DEFAULT_EDITOR_OPTIONS, this.props.editorOptions);
  }

  get editorNaviOptions(): monacoApi.editor.IDiffNavigatorOptions {
    return Object.assign(
      DEFAULT_EDITOR_NAVI_OPTIONS,
      this.props.editorNaviOptions
    );
  }

  get editorStyle(): React.CSSProperties {
    return Object.assign(DEFAULT_EDITOR_STYLE, this.props.style);
  }

  render() {
    return <div ref={this.assignRef} style={this.editorStyle} />;
  }
}

export default ReviewEditor;
