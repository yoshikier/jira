export interface User {
  id: "";
  name: "";
}
interface FilterProps {
  params: {
    proName: string;
    personId: string;
  };
  users: User[];
  setParams: (params: FilterProps["params"]) => void;
}
export default function FilterComp({ params, setParams, users }: FilterProps) {
  return (
    <div>
      <input
        placeholder="请输入项目名称"
        value={params.proName}
        onChange={(evt) =>
          setParams({
            ...params,
            proName: evt.target.value,
          })
        }
      />
      <select
        onChange={(evt) =>
          setParams({
            ...params,
            personId: evt.target.value,
          })
        }
      >
        <option value="" key="0">
          负责人
        </option>
        {users.map((item) => {
          return (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
