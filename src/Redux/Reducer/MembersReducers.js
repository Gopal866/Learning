import * as membersTypes from "../Types/MembersTypes";

export const membersList = (state = [], action) => {
  switch (action.type) {
    case membersTypes.MEMBERS_LIST:
      return action.payload;
    default:
      return state;
  }
}
