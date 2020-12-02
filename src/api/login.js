import { http } from "../utils/request";
  export default{
    getType(datas) {
        return http.request({
          method: "get",
          url: "/sso/getAuthCode",
          data: datas
        });
      }
  }