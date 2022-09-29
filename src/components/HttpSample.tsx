import React from "react"
import axios, { AxiosResponse } from "axios"

type Member = {
  id: string;
  name: string;
};

export const HttpSample = () => {
  const [members, setMembers] = React.useState<Member[]>([]);

  const onFetchClick = async () => {
    const response: AxiosResponse<Member[]> = await axios.get("http://localhost:8080/members");
    setMembers(response.data);
  };

  return (
    <>
      <button onClick={onFetchClick}>
        APIモックサーバーより、membersデータ取得
      </button>
      {members.length != 0 && (
        <>
          <ul>
            {members.map((member) => (
              <li
                key={member.id}
              >{`[id]=${member.id} [name]=${member.name}`}</li>
            ))}
          </ul>
          <p> {members.length}人</p>
        </>
      )}
    </>
  );
};
