import * as React from 'react';
import { MemberEntityVm } from './member-collection.vm';

interface Props {
  memberCollection: MemberEntityVm[];
}

export const MemberListPage = (props: Props) => {
  const { memberCollection } = props;

  return (
    <>
      {
        memberCollection.map((member) =>
          <>
            <h4 key={member.id}>{member.name}</h4>
            <img src={member.avatarUrl} />
          </>)
      }
    </>
  )
}
