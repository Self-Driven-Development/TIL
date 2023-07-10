import React from 'react';
import DocItem from '@theme-original/DocItem';
import Comment from '@site/src/components/Comment';

export default function DocItemWrapper(props) {
  return (
    <>
      <DocItem {...props} />
      <Comment />
    </>
  );
}
