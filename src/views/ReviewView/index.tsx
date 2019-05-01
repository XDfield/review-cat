import * as React from 'react';
import * as monacoApi from 'monaco-editor/esm/vs/editor/editor.api';
import ReviewEditor from '../../components/editor';

interface IProps {}

class ReviewView extends React.Component<IProps> {
  private editorEle: ReviewEditor | undefined;
  private editor: monacoApi.editor.IStandaloneDiffEditor | undefined;
  private navi: monacoApi.editor.IDiffNavigator | undefined;

  componentDidMount() {
    if (this.editorEle) {
      this.editor = this.editorEle.getEditor();
      this.navi = this.editorEle.getNavi();
    }

    window.addEventListener('resize', this.changeLayout);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.changeLayout);
  }

  changeLayout = () => {
    this.editor && this.editor.layout();
  };

  assignEditorEle = (ele: ReviewEditor) => {
    if (ele && !this.editorEle) {
      this.editorEle = ele;
    }
  };

  render() {
    return (
      <ReviewEditor
        ref={this.assignEditorEle}
        originalValue=""
        modifiedValue=""
        language="python"
      />
    );
  }
}

export default ReviewView;
