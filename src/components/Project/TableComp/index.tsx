import { User } from "../FilterComp/index";

interface Project {
  id: number | string;
  proName: string;
  personId: string;
}
interface TableProps {
  list: Project[];
  users: User[];
}
export default function TableComp({ list, users }: TableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>项目名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.proName}</td>
              <td>{users.find((itx) => itx.id === item.personId)?.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
