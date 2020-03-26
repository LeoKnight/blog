import React,{useState,useEffect} from "react";
import styled from "@emotion/styled";
import Section from "@components/Section";
import mediaqueries from "@styles/media";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const tmp = [
  {
    content:'content',
    reply:[
      {
        content:'reply content'
      }
    ]
  },{
    content:'content2',
    reply:[
      {
        content:'reply content'
      }
    ]
  }
]

const Discussion: React.FC<{}> = (preProps) => {
  const [editorState, setEditorState] = useState("");
  const [discussionData, setDiscussionData] = useState([]);

  const onEditorStateChange =(value:string)=>{
    console.log('value====>',value)
    setEditorState(value)
  }

  useEffect(()=>{
    setDiscussionData(tmp)
  })

  return(
    <Section narrow>
      <DiscussionContainer>
        
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
        <input/>
        <button>
          submit
        </button>
      </PanelContainer>
      </DiscussionContainer>
    </Section>
  )
};

export default Discussion;


const DiscussionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 64px 0 55px;
  margin: 10px auto 100px;
  background: #fff;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  z-index: 1;
`

const EditorContainer = styled.div`
  height:400px;
  margin: 10px 30px;
  overflow-y: scroll;
  border: 1px solid ${p => p.theme.colors.grey};
`
const PanelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 35px;
  input {
    width: 30px;
    margin: 0 18px;
    margin-bottom: 5px;
  }
`