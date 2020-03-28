import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Section from '@components/Section';
import mediaqueries from '@styles/media';
import CommitList from './CommitList';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const tmp = [
  {
    content: 'content',
    reply: [
      {
        content: 'reply content',
      },
    ],
  },
  {
    content: 'content2',
    reply: [
      {
        content: 'reply content',
      },
    ],
  },
];

const Input: React.FC<{}> = () => {
  return (
    <InputContainer>
      <div className="group">
        <input type="text" required />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>Name</label>
      </div>
    </InputContainer>
  );
};

const Discussion: React.FC<{}> = preProps => {
  const [editorState, setEditorState] = useState('');
  const [discussionData, setDiscussionData] = useState([]);

  const onEditorStateChange = (value: string) => {
    console.log('value====>', value);
    setEditorState(value);
  };

  useEffect(() => {
    setDiscussionData(tmp);
  });

  return (
    <Section narrow>
      <DiscussionContainer>
        <CommitList data={tmp} />
        <EditorContainer>
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
          />
        </EditorContainer>
        <PanelContainer>
          <Input />
          <Input />
          <button>submit</button>
        </PanelContainer>
      </DiscussionContainer>
    </Section>
  );
};

export default Discussion;

const InputContainer = styled.div`
  box-sizing: border-box;
  margin: 30px auto 0;
  display: block;
  background: #fff;
  padding: 10px 50px 50px;
  position: relative;
  .group {
    position: relative;
  }
  input {
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 300px;
    border: none;
    border-bottom: 1px solid #757575;
  }
  input:focus {
    outline: none;
  }
  /* LABEL ======================================= */
  label {
    color: #999;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  /* active state */
  input:focus ~ label,
  input:valid ~ label {
    top: -20px;
    font-size: 14px;
    color: #5264ae;
  }

  /* BOTTOM BARS ================================= */
  .bar {
    position: relative;
    display: block;
    width: 300px;
  }
  .bar:before,
  .bar:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #5264ae;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }
  .bar:before {
    left: 50%;
  }
  .bar:after {
    right: 50%;
  }

  /* active state */
  input:focus ~ .bar:before,
  input:focus ~ .bar:after {
    width: 50%;
  }

  /* HIGHLIGHTER ================================== */
  .highlight {
    position: absolute;
    height: 60%;
    width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  }

  /* active state */
  input:focus ~ .highlight {
    animation: inputHighlighter 0.3s ease;
  }

  /* ANIMATIONS ================ */
  @keyframes inputHighlighter {
    from {
      background: #5264ae;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
`;
const DiscussionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 64px 0 55px;
  margin: 10px auto 100px;
  background: #fff;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  z-index: 1;
`;

const EditorContainer = styled.div`
  height: 400px;
  margin: 10px 30px;
  overflow-y: scroll;
  border: 1px solid ${p => p.theme.colors.grey};
`;
const PanelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 35px;
`;
