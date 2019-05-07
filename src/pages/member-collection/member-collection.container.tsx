import * as React from 'react';
import { MemberListPage } from './member-collection.component';
import { MemberEntityVm } from './member-collection.vm';
import { MemberCollectionMockData } from './member-collection.mock';


export const MemberListContainer = () => {
  const [memberCollection, setMemberCollection] = React.useState<MemberEntityVm[]>(MemberCollectionMockData);
  return (
    <MemberListPage memberCollection={memberCollection} />
  );
}