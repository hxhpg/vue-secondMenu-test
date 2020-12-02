import { http } from "../utils/request";
  export default{
    testApi(datas) {
        return http.request({
          method: "get",
          url: "/sso/getAuthCode",
          data: datas
        });
      }
  }