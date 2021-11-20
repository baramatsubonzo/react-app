import { useCallback, useState } from "react"
import axios from "axios";
import { useHistory } from "react-router-dom";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const [loading, setLoding] = useState(false);
  const { setLoginUser } = useLoginUser();

  const login = useCallback((id: string) => {
    setLoding(true);

    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res)=>{
      if (res.data) {
        setLoginUser(res.data);
        showMessage({ title: "ログインしました", status: "success"});
        history.push("/home");
      } else {
        showMessage({ title: "ユーザーが見つかりません", status: "error"});
        setLoding(false);
      }
    })
    .catch(() => {
      showMessage({ title: "ログインできません", status: "error"})
      setLoding(false);
    });
  }, [history, showMessage, setLoginUser]);
  return { login, loading };
}