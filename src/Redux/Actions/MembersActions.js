import axios from "axios";
import { restURL } from "../../rest_urls";
import * as membersTypes from "../Types/MembersTypes";

export const membersListAction = () => (dispatch) => {
  axios.get(restURL).then((response) => {
    dispatch({
      type: membersTypes.MEMBERS_LIST,
      payload: response.data || []
    });
  });
};
