/* eslint-disable react-hooks/exhaustive-deps */
import qs from "qs";
import { useEffect, useState } from "react";
import { createUrlParams, useDebounce, useMount } from "utils";
import FilterComp from "./FilterComp";
import TableComp from "./TableComp";

const apiUrl = process.env.REACT_APP_API_URL;
export const Project = () => {
  const [params, setParams] = useState({
    proName: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);

  const debounceValue = useDebounce(params, 500);
  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(createUrlParams(debounceValue))}`
    ).then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        setList(data);
      }
    });
  }, [debounceValue]);

  useMount(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users`).then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      }
    });
  });
  return (
    <div>
      <FilterComp params={params} setParams={setParams} users={users} />
      <TableComp list={list} users={users} />
    </div>
  );
};
