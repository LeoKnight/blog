import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

interface CommitListProps {
  data: object[];
}

const Comment: React.FC<{}> = () => {
  return (
    <CommentContent>
      <p className="comment_name">name</p>
      <p className="comment_body">comment_body</p>
      <p className="comment_bottom">comment_bottom</p>
    
    {/* <CommitList data={[]}/> */}
    </CommentContent>
  );
};

const CommitList: React.FC<CommitListProps> = (props) => {
//   const { data } = props;
//   console.log(data);
  return (
    <Ul>
      <Li>
        <Avatar>avatar</Avatar>
        <Comment />
      </Li>
    </Ul>
  );
};

export default CommitList;

const Ul = styled.ul`
  margin-top: 20px;
  padding-left: 0;
  list-style: none;
`;
const Li = styled.li`
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
`;
const Avatar = styled.div`
  margin-right: 1em;
`;

const CommentContent = styled.div`
  flex: 1;
  p {
    margin: 12px 0;
  }
  .comment_body {
    word-break: break-all;
  }
`;
